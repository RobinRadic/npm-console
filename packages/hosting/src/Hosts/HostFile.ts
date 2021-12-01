// noinspection ES6UnusedImports

import { AbstractHostLine, BlankLine, CommentedHostLine, CommentLine, HostLine, InvalidLine, Line } from './Lines';
import ip from 'ip';
import os from 'os';
import { join } from 'path';
import { createWriteStream, readFileSync, writeFileSync } from 'fs';
import { Readable } from 'stream';
import { injectable, unmanaged } from '@radic/core';

const lineRegex       = /^(.*?)(#.*)?$/;
const whitespaceRegex = /^\s*$/;

interface HostMatcher {
    test(value: string): boolean;
}

@injectable()
export class HostFile {
    protected lines: Line[] = [];
    protected content: string;

    constructor(@unmanaged() public readonly path?: string) {
        if ( !path ) {
            this.path = os.type() === 'Windows_NT' ? join(process.env.SystemRoot, 'System32', 'drivers', 'etc', 'hosts') : '/etc/hosts';
        }
    }


    load(force: boolean = false): this {
        if ( !this.isLoaded() || force ) {
            this.content = readFileSync(this.path, 'utf8');
        }
        this.parse();
        return this;
    }

    save(): this {
        this.content = this.formatLines(this.lines).join('');
        writeFileSync(this.path, this.content, 'utf8');
        return this;
    }

    isLoaded(): boolean {return this.content && this.content.length > 0; }

    all(): Line[] {return this.lines; }

    hosts(): AbstractHostLine[] {return this.lines.filter(line => line instanceof AbstractHostLine) as AbstractHostLine[]; }

    add(address: string, hosts: string[], comment: string = ''): HostLine {
        const line = new HostLine(address, hosts, comment);
        this.lines.push(line);
        return line;
    }

    getAllByName(name: string): AbstractHostLine[] {
        let matcher = this.getHostMatcher(name);
        return this.hosts().filter(host => host.hosts.filter(name => matcher.test(name)).length > 0);
    }

    getAllByAddress(address: string): AbstractHostLine[] {
        let matcher = this.getHostMatcher(address);
        return this.hosts().filter(host => matcher.test(host.address));
    }

    protected parse() {
        if ( this.isLoaded() ) {
            this.lines = this.content.split('\n').map(line => this.parseHostFileLine(line));
        }
        return this;
    }

    protected getHostMatcher(pattern: string): HostMatcher {
        if ( !pattern.includes('*') ) {
            const lowered = pattern.toLowerCase();
            return { test: value => value.toLowerCase() === lowered };
        }

        pattern = pattern
        .replace(/\./g, '\\.')
        .replace(/\*/g, '.*');
        return new RegExp(`^${pattern}$`, 'i');
    }

    protected parseHostFileLine(text: string) {
        const [ , content = '', comment = '' ] = lineRegex.exec(text);

        const hasContent = !whitespaceRegex.test(content);
        const hasComment = !whitespaceRegex.test(comment);

        if ( hasContent ) {
            const [ address, ...hosts ] = content.split(/\s+/).filter(Boolean);
            if ( address && hosts && hosts.length && (ip.isV4Format(address) || ip.isV6Format(address)) ) {
                return new HostLine(address, hosts, comment);
            }
            return new InvalidLine(text);

        }
        if ( hasComment ) {
            const commentedOutContent = comment.replace(/^#+/, '');
            const parsedContent       = this.parseHostFileLine(commentedOutContent);
            if ( parsedContent instanceof HostLine ) {
                return new CommentedHostLine(parsedContent.address, parsedContent.hosts, parsedContent.comment);
            }
            return new CommentLine(text);

        }
        return new BlankLine(text);
    }

    protected formatLines(lines: Line[]): string[] {
        let addressWidth = 0;
        let hostWidth    = 0;

        lines.filter(line => line instanceof AbstractHostLine).forEach((line: AbstractHostLine) => {
            addressWidth = Math.max(addressWidth, line.address.length);
            hostWidth    = Math.max(hostWidth, line.hosts.join(' ').length);
        });

        return lines.map((line, i) => line.format(addressWidth, hostWidth) + (i < lines.length - 1 ? os.EOL : ''));
    }
}
