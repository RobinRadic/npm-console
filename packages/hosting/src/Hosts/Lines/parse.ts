import { HostLine } from './HostLine';
import { CommentedHostLine } from './CommentedHostLine';
import { CommentLine } from './CommentLine';
import { BlankLine } from './BlankLine';
import { InvalidLine } from './InvalidLine';
import ip from 'ip';

const lineRegex       = /^(.*?)(#.*)?$/;
const whitespaceRegex = /^\s*$/;

export function parseHostFileLine(text) {
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
        const parsedContent       = parseHostFileLine(commentedOutContent);
        if ( parsedContent instanceof HostLine ) {
            return new CommentedHostLine(parsedContent.address, parsedContent.hosts, parsedContent.comment);
        }
        return new CommentLine(text);

    }
    return new BlankLine(text);
}
