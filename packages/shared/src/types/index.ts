export * from './packageJson';

/*
export enum ExitCode {
    OK=0,
    GENERAL_ERROR=1,
    MISUSE_OF_SHELL_BUILTINS=2,
    COMMAND_INVOKED_CANNOT_EXECUTE=126,
    COMMAND_NOT_FOUND=126,
    INVALID_ARGUMENT_TO_EXIT=126,
    FATAL_ERROR_SIGNAL=126,
    TERMINATED_BY_CONTROL_C=126,
    EXIT_STATUS_OUT_OF_RANGE=255\*,
}

export interface ExitCodes {
    '0':
    '1'?: - Catchall for general errors
    '2'?: - Misuse of shell builtins (according to Bash documentation)
    '126'?: - Command invoked cannot execute
    '127'?: - “command not found”
    '128'?: - Invalid argument to exit
    '128'?:+n - Fatal error signal “n”
    '130'?: - Script terminated by Control-C
    '255'\*?: - Exit status out of range
}

process.exit()

var lookup = {
    '129': 'SIGHUP',
    '130': 'SIGINT',
    '131': 'SIGQUIT',
    '132': 'SIGILL',
    '133': 'SIGTRAP',
    '134': 'SIGABRT',
    // 134: SIGIOT
    '135': 'SIGBUS',
    '136': 'SIGFPE',
    '139': 'SIGSEGV',
    '140': 'SIGUSR2',
    '141': 'SIGPIPE',
    '142': 'SIGALRM',
    '143': 'SIGTERM',
    '144': 'SIGSTKFLT',
    '152': 'SIGXCPU',
    '153': 'SIGXFSZ',
    '154': 'SIGVTALRM',
    '155': 'SIGPROF',
    '157': 'SIGIO',
    // 157: SIGPOLL
    '158': 'SIGPWR',
    '159': 'SIGSYS'
    // 159: SIGUNUSED
}

process.on('uncaughtException', (err, origin) => {
    fs.writeSync(
        process.stderr.fd,
        `Caught exception: ${err}\n` +
        `Exception origin: ${origin}`
    );
});
*/

//
// const unhandledRejections = new Map();
// process.on('unhandledRejection', (reason, promise) => {
//     unhandledRejections.set(promise, reason);
// });
// process.on('rejectionHandled', (promise) => {
//     unhandledRejections.delete(promise);
// });
