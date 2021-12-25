import { Application } from '@radic/core';
import { CliStartReturn } from '@radic/console';
export declare function bootApp(): Promise<Application>;
export declare function startCli(): Promise<CliStartReturn<import("@radic/console").CliArguments>>;
