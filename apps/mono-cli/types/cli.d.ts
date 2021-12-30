import { Application } from '@radic/core';
import { CliStartReturn } from '@radic/console';
import { MonoConfiguration } from './MonoServiceProvider';
export declare function bootApp(options: MonoConfiguration): Promise<Application>;
export declare function startCli(options: MonoConfiguration): Promise<CliStartReturn<import("@radic/console").CliArguments>>;
