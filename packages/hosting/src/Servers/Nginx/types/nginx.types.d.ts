export declare namespace types {
    type Context = "events" | "main" | "http" | "mail" | "stream" | "server" | "location" | "any" | "if in location" | "limit_except" | "if" | "upstream";
    interface MainDirectives {
        /**
         * Determines whether nginx should become a daemon.
         * Mainly used during development.
         *

         * module: ngx_core_module
         */
        daemon?: "on" | "off";
        /**
         * This directive is used for debugging.
         *

         * module: ngx_core_module
         */
        debug_points?: "abort" | "stop";
        /**
         * By default, nginx removes all environment variables inherited
         * from its parent process except the TZ variable.
         * This directive allows preserving some of the inherited variables,
         * changing their values, or creating new environment variables.
         * These variables are then:
         *

         * module: ngx_core_module
         * @example
         * ```nginx
         * env MALLOC_OPTIONS;
         * env PERL5LIB=/data/site/modules;
         * env OPENSSL_ALLOW_PROXY_CERTS=1;
         * ```
         */
        env?: any;
        /**
         * Configures logging.
         * Several logs can be specified on the same configuration level (1.5.2).
         * If on the main configuration level writing a log to a file
         * is not explicitly defined, the default file will be used.
         *

         * module: ngx_core_module
         */
        error_log?: any;
        /**
         * Provides the configuration file context in which the directives that
         * affect connection processing are specified.
         *

         * module: ngx_core_module
         */
        events?: EventsDirectives[];
        /**
         * Loads a dynamic module.
         *

         * module: ngx_core_module
         * @example
         * ```nginx
         * load_module modules/ngx_mail_module.so;
         * ```
         */
        load_module?: any;
        /**
         * nginx uses the locking mechanism to implement accept_mutex
         * and serialize access to shared memory.
         * On most systems the locks are implemented using atomic operations,
         * and this directive is ignored.
         * On other systems the “lock file” mechanism is used.
         * This directive specifies a prefix for the names of lock files.
         *

         * module: ngx_core_module
         */
        lock_file?: any;
        /**
         * Determines whether worker processes are started.
         * This directive is intended for nginx developers.
         *

         * module: ngx_core_module
         */
        master_process?: "on" | "off";
        /**
         * Enables or disables the use of “just-in-time compilation” (PCRE JIT)
         * for the regular expressions known by the time of configuration parsing.
         *

         * module: ngx_core_module
         */
        pcre_jit?: "on" | "off";
        /**
         * Defines a file that will store the process ID of the main process.
         *

         * module: ngx_core_module
         */
        pid?: any;
        /**
         * Defines the name of the hardware SSL accelerator.
         *

         * module: ngx_core_module
         */
        ssl_engine?: any;
        /**
         * Defines the name and parameters of a thread pool
         * used for multi-threaded reading and sending of files
         * without blocking
         * worker processes.
         *

         * module: ngx_core_module
         */
        thread_pool?: any;
        /**
         * Reduces timer resolution in worker processes, thus reducing the
         * number of gettimeofday() system calls made.
         * By default, gettimeofday() is called each time
         * a kernel event is received.
         * With reduced resolution, gettimeofday() is only
         * called once per specified interval.
         *

         * module: ngx_core_module
         * @example
         * ```nginx
         * timer_resolution 100ms;
         * ```
         */
        timer_resolution?: any;
        /**
         * Defines user and group
         * credentials used by worker processes.
         * If group is omitted, a group whose name equals
         * that of user is used.
         *

         * module: ngx_core_module
         */
        user?: any;
        /**
         * Binds worker processes to the sets of CPUs.
         * Each CPU set is represented by a bitmask of allowed CPUs.
         * There should be a separate set defined for each of the worker processes.
         * By default, worker processes are not bound to any specific CPUs.
         *

         * module: ngx_core_module
         * @example
         * ```nginx
         * worker_processes    4;
         * worker_cpu_affinity 0001 0010 0100 1000;
         * worker_processes    2;
         * worker_cpu_affinity 0101 1010;
         * worker_processes auto;
         * worker_cpu_affinity auto;
         * worker_cpu_affinity auto 01010101;
         * ```
         */
        worker_cpu_affinity?: any;
        /**
         * Defines the scheduling priority for worker processes like it is
         * done by the nice command: a negative
         * number
         * means higher priority.
         * Allowed range normally varies from -20 to 20.
         *

         * module: ngx_core_module
         * @example
         * ```nginx
         * worker_priority -10;
         * ```
         */
        worker_priority?: any;
        /**
         * Defines the number of worker processes.
         *

         * module: ngx_core_module
         */
        worker_processes?: "number" | "auto";
        /**
         * Changes the limit on the largest size of a core file
         * (RLIMIT_CORE) for worker processes.
         * Used to increase the limit without restarting the main process.
         *

         * module: ngx_core_module
         */
        worker_rlimit_core?: string;
        /**
         * Changes the limit on the maximum number of open files
         * (RLIMIT_NOFILE) for worker processes.
         * Used to increase the limit without restarting the main process.
         *

         * module: ngx_core_module
         */
        worker_rlimit_nofile?: any;
        /**
         * Configures a timeout for a graceful shutdown of worker processes.
         * When the time expires,
         * nginx will try to close all the connections currently open
         * to facilitate shutdown.
         *

         * module: ngx_core_module
         */
        worker_shutdown_timeout?: string;
        /**
         * Defines the current working directory for a worker process.
         * It is primarily used when writing a core-file, in which case
         * a worker process should have write permission for the
         * specified directory.
         *

         * module: ngx_core_module
         */
        working_directory?: any;
        /**
         * Provides the configuration file context in which the HTTP server directives
         * are specified.
         *

         * module: ngx_http_core_module
         */
        http?: HttpDirectives[];
        /**
         * Provides the configuration file context in which the mail server directives
         * are specified.
         *

         * module: ngx_mail_core_module
         */
        mail?: MailDirectives[];
        /**
         * Provides the configuration file context in which the stream server directives
         * are specified.
         *

         * module: ngx_stream_core_module
         */
        stream?: StreamDirectives[];
        /**
         * Sets a file name that keeps profiling information of
         * nginx worker process.
         * The ID of the worker process is always a part of the file name
         * and is appended to the end of the file name, after a dot.
         *

         * module: ngx_google_perftools_module
         */
        google_perftools_profiles?: any;
    }
    interface EventsDirectives {
        /**
         * Determines whether nginx should become a daemon.
         * Mainly used during development.
         *

         * module: ngx_core_module
         */
        daemon?: "on" | "off";
        /**
         * This directive is used for debugging.
         *

         * module: ngx_core_module
         */
        debug_points?: "abort" | "stop";
        /**
         * By default, nginx removes all environment variables inherited
         * from its parent process except the TZ variable.
         * This directive allows preserving some of the inherited variables,
         * changing their values, or creating new environment variables.
         * These variables are then:
         *

         * module: ngx_core_module
         * @example
         * ```nginx
         * env MALLOC_OPTIONS;
         * env PERL5LIB=/data/site/modules;
         * env OPENSSL_ALLOW_PROXY_CERTS=1;
         * ```
         */
        env?: any;
        /**
         * Configures logging.
         * Several logs can be specified on the same configuration level (1.5.2).
         * If on the main configuration level writing a log to a file
         * is not explicitly defined, the default file will be used.
         *

         * module: ngx_core_module
         */
        error_log?: any;
        /**
         * Provides the configuration file context in which the directives that
         * affect connection processing are specified.
         *

         * module: ngx_core_module
         */
        events?: EventsDirectives[];
        /**
         * Loads a dynamic module.
         *

         * module: ngx_core_module
         * @example
         * ```nginx
         * load_module modules/ngx_mail_module.so;
         * ```
         */
        load_module?: any;
        /**
         * nginx uses the locking mechanism to implement accept_mutex
         * and serialize access to shared memory.
         * On most systems the locks are implemented using atomic operations,
         * and this directive is ignored.
         * On other systems the “lock file” mechanism is used.
         * This directive specifies a prefix for the names of lock files.
         *

         * module: ngx_core_module
         */
        lock_file?: any;
        /**
         * Determines whether worker processes are started.
         * This directive is intended for nginx developers.
         *

         * module: ngx_core_module
         */
        master_process?: "on" | "off";
        /**
         * Enables or disables the use of “just-in-time compilation” (PCRE JIT)
         * for the regular expressions known by the time of configuration parsing.
         *

         * module: ngx_core_module
         */
        pcre_jit?: "on" | "off";
        /**
         * Defines a file that will store the process ID of the main process.
         *

         * module: ngx_core_module
         */
        pid?: any;
        /**
         * Defines the name of the hardware SSL accelerator.
         *

         * module: ngx_core_module
         */
        ssl_engine?: any;
        /**
         * Defines the name and parameters of a thread pool
         * used for multi-threaded reading and sending of files
         * without blocking
         * worker processes.
         *

         * module: ngx_core_module
         */
        thread_pool?: any;
        /**
         * Reduces timer resolution in worker processes, thus reducing the
         * number of gettimeofday() system calls made.
         * By default, gettimeofday() is called each time
         * a kernel event is received.
         * With reduced resolution, gettimeofday() is only
         * called once per specified interval.
         *

         * module: ngx_core_module
         * @example
         * ```nginx
         * timer_resolution 100ms;
         * ```
         */
        timer_resolution?: any;
        /**
         * Defines user and group
         * credentials used by worker processes.
         * If group is omitted, a group whose name equals
         * that of user is used.
         *

         * module: ngx_core_module
         */
        user?: any;
        /**
         * Binds worker processes to the sets of CPUs.
         * Each CPU set is represented by a bitmask of allowed CPUs.
         * There should be a separate set defined for each of the worker processes.
         * By default, worker processes are not bound to any specific CPUs.
         *

         * module: ngx_core_module
         * @example
         * ```nginx
         * worker_processes    4;
         * worker_cpu_affinity 0001 0010 0100 1000;
         * worker_processes    2;
         * worker_cpu_affinity 0101 1010;
         * worker_processes auto;
         * worker_cpu_affinity auto;
         * worker_cpu_affinity auto 01010101;
         * ```
         */
        worker_cpu_affinity?: any;
        /**
         * Defines the scheduling priority for worker processes like it is
         * done by the nice command: a negative
         * number
         * means higher priority.
         * Allowed range normally varies from -20 to 20.
         *

         * module: ngx_core_module
         * @example
         * ```nginx
         * worker_priority -10;
         * ```
         */
        worker_priority?: any;
        /**
         * Defines the number of worker processes.
         *

         * module: ngx_core_module
         */
        worker_processes?: "number" | "auto";
        /**
         * Changes the limit on the largest size of a core file
         * (RLIMIT_CORE) for worker processes.
         * Used to increase the limit without restarting the main process.
         *

         * module: ngx_core_module
         */
        worker_rlimit_core?: string;
        /**
         * Changes the limit on the maximum number of open files
         * (RLIMIT_NOFILE) for worker processes.
         * Used to increase the limit without restarting the main process.
         *

         * module: ngx_core_module
         */
        worker_rlimit_nofile?: any;
        /**
         * Configures a timeout for a graceful shutdown of worker processes.
         * When the time expires,
         * nginx will try to close all the connections currently open
         * to facilitate shutdown.
         *

         * module: ngx_core_module
         */
        worker_shutdown_timeout?: string;
        /**
         * Defines the current working directory for a worker process.
         * It is primarily used when writing a core-file, in which case
         * a worker process should have write permission for the
         * specified directory.
         *

         * module: ngx_core_module
         */
        working_directory?: any;
        /**
         * Provides the configuration file context in which the HTTP server directives
         * are specified.
         *

         * module: ngx_http_core_module
         */
        http?: HttpDirectives[];
        /**
         * Provides the configuration file context in which the mail server directives
         * are specified.
         *

         * module: ngx_mail_core_module
         */
        mail?: MailDirectives[];
        /**
         * Provides the configuration file context in which the stream server directives
         * are specified.
         *

         * module: ngx_stream_core_module
         */
        stream?: StreamDirectives[];
        /**
         * Sets a file name that keeps profiling information of
         * nginx worker process.
         * The ID of the worker process is always a part of the file name
         * and is appended to the end of the file name, after a dot.
         *

         * module: ngx_google_perftools_module
         */
        google_perftools_profiles?: any;
    }
    interface HttpDirectives {
        /**
         * Determines whether nginx should become a daemon.
         * Mainly used during development.
         *

         * module: ngx_core_module
         */
        daemon?: "on" | "off";
        /**
         * This directive is used for debugging.
         *

         * module: ngx_core_module
         */
        debug_points?: "abort" | "stop";
        /**
         * By default, nginx removes all environment variables inherited
         * from its parent process except the TZ variable.
         * This directive allows preserving some of the inherited variables,
         * changing their values, or creating new environment variables.
         * These variables are then:
         *

         * module: ngx_core_module
         * @example
         * ```nginx
         * env MALLOC_OPTIONS;
         * env PERL5LIB=/data/site/modules;
         * env OPENSSL_ALLOW_PROXY_CERTS=1;
         * ```
         */
        env?: any;
        /**
         * Configures logging.
         * Several logs can be specified on the same configuration level (1.5.2).
         * If on the main configuration level writing a log to a file
         * is not explicitly defined, the default file will be used.
         *

         * module: ngx_core_module
         */
        error_log?: any;
        /**
         * Provides the configuration file context in which the directives that
         * affect connection processing are specified.
         *

         * module: ngx_core_module
         */
        events?: EventsDirectives[];
        /**
         * Loads a dynamic module.
         *

         * module: ngx_core_module
         * @example
         * ```nginx
         * load_module modules/ngx_mail_module.so;
         * ```
         */
        load_module?: any;
        /**
         * nginx uses the locking mechanism to implement accept_mutex
         * and serialize access to shared memory.
         * On most systems the locks are implemented using atomic operations,
         * and this directive is ignored.
         * On other systems the “lock file” mechanism is used.
         * This directive specifies a prefix for the names of lock files.
         *

         * module: ngx_core_module
         */
        lock_file?: any;
        /**
         * Determines whether worker processes are started.
         * This directive is intended for nginx developers.
         *

         * module: ngx_core_module
         */
        master_process?: "on" | "off";
        /**
         * Enables or disables the use of “just-in-time compilation” (PCRE JIT)
         * for the regular expressions known by the time of configuration parsing.
         *

         * module: ngx_core_module
         */
        pcre_jit?: "on" | "off";
        /**
         * Defines a file that will store the process ID of the main process.
         *

         * module: ngx_core_module
         */
        pid?: any;
        /**
         * Defines the name of the hardware SSL accelerator.
         *

         * module: ngx_core_module
         */
        ssl_engine?: any;
        /**
         * Defines the name and parameters of a thread pool
         * used for multi-threaded reading and sending of files
         * without blocking
         * worker processes.
         *

         * module: ngx_core_module
         */
        thread_pool?: any;
        /**
         * Reduces timer resolution in worker processes, thus reducing the
         * number of gettimeofday() system calls made.
         * By default, gettimeofday() is called each time
         * a kernel event is received.
         * With reduced resolution, gettimeofday() is only
         * called once per specified interval.
         *

         * module: ngx_core_module
         * @example
         * ```nginx
         * timer_resolution 100ms;
         * ```
         */
        timer_resolution?: any;
        /**
         * Defines user and group
         * credentials used by worker processes.
         * If group is omitted, a group whose name equals
         * that of user is used.
         *

         * module: ngx_core_module
         */
        user?: any;
        /**
         * Binds worker processes to the sets of CPUs.
         * Each CPU set is represented by a bitmask of allowed CPUs.
         * There should be a separate set defined for each of the worker processes.
         * By default, worker processes are not bound to any specific CPUs.
         *

         * module: ngx_core_module
         * @example
         * ```nginx
         * worker_processes    4;
         * worker_cpu_affinity 0001 0010 0100 1000;
         * worker_processes    2;
         * worker_cpu_affinity 0101 1010;
         * worker_processes auto;
         * worker_cpu_affinity auto;
         * worker_cpu_affinity auto 01010101;
         * ```
         */
        worker_cpu_affinity?: any;
        /**
         * Defines the scheduling priority for worker processes like it is
         * done by the nice command: a negative
         * number
         * means higher priority.
         * Allowed range normally varies from -20 to 20.
         *

         * module: ngx_core_module
         * @example
         * ```nginx
         * worker_priority -10;
         * ```
         */
        worker_priority?: any;
        /**
         * Defines the number of worker processes.
         *

         * module: ngx_core_module
         */
        worker_processes?: "number" | "auto";
        /**
         * Changes the limit on the largest size of a core file
         * (RLIMIT_CORE) for worker processes.
         * Used to increase the limit without restarting the main process.
         *

         * module: ngx_core_module
         */
        worker_rlimit_core?: string;
        /**
         * Changes the limit on the maximum number of open files
         * (RLIMIT_NOFILE) for worker processes.
         * Used to increase the limit without restarting the main process.
         *

         * module: ngx_core_module
         */
        worker_rlimit_nofile?: any;
        /**
         * Configures a timeout for a graceful shutdown of worker processes.
         * When the time expires,
         * nginx will try to close all the connections currently open
         * to facilitate shutdown.
         *

         * module: ngx_core_module
         */
        worker_shutdown_timeout?: string;
        /**
         * Defines the current working directory for a worker process.
         * It is primarily used when writing a core-file, in which case
         * a worker process should have write permission for the
         * specified directory.
         *

         * module: ngx_core_module
         */
        working_directory?: any;
        /**
         * Provides the configuration file context in which the HTTP server directives
         * are specified.
         *

         * module: ngx_http_core_module
         */
        http?: HttpDirectives[];
        /**
         * Provides the configuration file context in which the mail server directives
         * are specified.
         *

         * module: ngx_mail_core_module
         */
        mail?: MailDirectives[];
        /**
         * Provides the configuration file context in which the stream server directives
         * are specified.
         *

         * module: ngx_stream_core_module
         */
        stream?: StreamDirectives[];
        /**
         * Sets a file name that keeps profiling information of
         * nginx worker process.
         * The ID of the worker process is always a part of the file name
         * and is appended to the end of the file name, after a dot.
         *

         * module: ngx_google_perftools_module
         */
        google_perftools_profiles?: any;
    }
    interface MailDirectives {
        /**
         * Determines whether nginx should become a daemon.
         * Mainly used during development.
         *

         * module: ngx_core_module
         */
        daemon?: "on" | "off";
        /**
         * This directive is used for debugging.
         *

         * module: ngx_core_module
         */
        debug_points?: "abort" | "stop";
        /**
         * By default, nginx removes all environment variables inherited
         * from its parent process except the TZ variable.
         * This directive allows preserving some of the inherited variables,
         * changing their values, or creating new environment variables.
         * These variables are then:
         *

         * module: ngx_core_module
         * @example
         * ```nginx
         * env MALLOC_OPTIONS;
         * env PERL5LIB=/data/site/modules;
         * env OPENSSL_ALLOW_PROXY_CERTS=1;
         * ```
         */
        env?: any;
        /**
         * Configures logging.
         * Several logs can be specified on the same configuration level (1.5.2).
         * If on the main configuration level writing a log to a file
         * is not explicitly defined, the default file will be used.
         *

         * module: ngx_core_module
         */
        error_log?: any;
        /**
         * Provides the configuration file context in which the directives that
         * affect connection processing are specified.
         *

         * module: ngx_core_module
         */
        events?: EventsDirectives[];
        /**
         * Loads a dynamic module.
         *

         * module: ngx_core_module
         * @example
         * ```nginx
         * load_module modules/ngx_mail_module.so;
         * ```
         */
        load_module?: any;
        /**
         * nginx uses the locking mechanism to implement accept_mutex
         * and serialize access to shared memory.
         * On most systems the locks are implemented using atomic operations,
         * and this directive is ignored.
         * On other systems the “lock file” mechanism is used.
         * This directive specifies a prefix for the names of lock files.
         *

         * module: ngx_core_module
         */
        lock_file?: any;
        /**
         * Determines whether worker processes are started.
         * This directive is intended for nginx developers.
         *

         * module: ngx_core_module
         */
        master_process?: "on" | "off";
        /**
         * Enables or disables the use of “just-in-time compilation” (PCRE JIT)
         * for the regular expressions known by the time of configuration parsing.
         *

         * module: ngx_core_module
         */
        pcre_jit?: "on" | "off";
        /**
         * Defines a file that will store the process ID of the main process.
         *

         * module: ngx_core_module
         */
        pid?: any;
        /**
         * Defines the name of the hardware SSL accelerator.
         *

         * module: ngx_core_module
         */
        ssl_engine?: any;
        /**
         * Defines the name and parameters of a thread pool
         * used for multi-threaded reading and sending of files
         * without blocking
         * worker processes.
         *

         * module: ngx_core_module
         */
        thread_pool?: any;
        /**
         * Reduces timer resolution in worker processes, thus reducing the
         * number of gettimeofday() system calls made.
         * By default, gettimeofday() is called each time
         * a kernel event is received.
         * With reduced resolution, gettimeofday() is only
         * called once per specified interval.
         *

         * module: ngx_core_module
         * @example
         * ```nginx
         * timer_resolution 100ms;
         * ```
         */
        timer_resolution?: any;
        /**
         * Defines user and group
         * credentials used by worker processes.
         * If group is omitted, a group whose name equals
         * that of user is used.
         *

         * module: ngx_core_module
         */
        user?: any;
        /**
         * Binds worker processes to the sets of CPUs.
         * Each CPU set is represented by a bitmask of allowed CPUs.
         * There should be a separate set defined for each of the worker processes.
         * By default, worker processes are not bound to any specific CPUs.
         *

         * module: ngx_core_module
         * @example
         * ```nginx
         * worker_processes    4;
         * worker_cpu_affinity 0001 0010 0100 1000;
         * worker_processes    2;
         * worker_cpu_affinity 0101 1010;
         * worker_processes auto;
         * worker_cpu_affinity auto;
         * worker_cpu_affinity auto 01010101;
         * ```
         */
        worker_cpu_affinity?: any;
        /**
         * Defines the scheduling priority for worker processes like it is
         * done by the nice command: a negative
         * number
         * means higher priority.
         * Allowed range normally varies from -20 to 20.
         *

         * module: ngx_core_module
         * @example
         * ```nginx
         * worker_priority -10;
         * ```
         */
        worker_priority?: any;
        /**
         * Defines the number of worker processes.
         *

         * module: ngx_core_module
         */
        worker_processes?: "number" | "auto";
        /**
         * Changes the limit on the largest size of a core file
         * (RLIMIT_CORE) for worker processes.
         * Used to increase the limit without restarting the main process.
         *

         * module: ngx_core_module
         */
        worker_rlimit_core?: string;
        /**
         * Changes the limit on the maximum number of open files
         * (RLIMIT_NOFILE) for worker processes.
         * Used to increase the limit without restarting the main process.
         *

         * module: ngx_core_module
         */
        worker_rlimit_nofile?: any;
        /**
         * Configures a timeout for a graceful shutdown of worker processes.
         * When the time expires,
         * nginx will try to close all the connections currently open
         * to facilitate shutdown.
         *

         * module: ngx_core_module
         */
        worker_shutdown_timeout?: string;
        /**
         * Defines the current working directory for a worker process.
         * It is primarily used when writing a core-file, in which case
         * a worker process should have write permission for the
         * specified directory.
         *

         * module: ngx_core_module
         */
        working_directory?: any;
        /**
         * Provides the configuration file context in which the HTTP server directives
         * are specified.
         *

         * module: ngx_http_core_module
         */
        http?: HttpDirectives[];
        /**
         * Provides the configuration file context in which the mail server directives
         * are specified.
         *

         * module: ngx_mail_core_module
         */
        mail?: MailDirectives[];
        /**
         * Provides the configuration file context in which the stream server directives
         * are specified.
         *

         * module: ngx_stream_core_module
         */
        stream?: StreamDirectives[];
        /**
         * Sets a file name that keeps profiling information of
         * nginx worker process.
         * The ID of the worker process is always a part of the file name
         * and is appended to the end of the file name, after a dot.
         *

         * module: ngx_google_perftools_module
         */
        google_perftools_profiles?: any;
    }
    interface StreamDirectives {
        /**
         * Determines whether nginx should become a daemon.
         * Mainly used during development.
         *

         * module: ngx_core_module
         */
        daemon?: "on" | "off";
        /**
         * This directive is used for debugging.
         *

         * module: ngx_core_module
         */
        debug_points?: "abort" | "stop";
        /**
         * By default, nginx removes all environment variables inherited
         * from its parent process except the TZ variable.
         * This directive allows preserving some of the inherited variables,
         * changing their values, or creating new environment variables.
         * These variables are then:
         *

         * module: ngx_core_module
         * @example
         * ```nginx
         * env MALLOC_OPTIONS;
         * env PERL5LIB=/data/site/modules;
         * env OPENSSL_ALLOW_PROXY_CERTS=1;
         * ```
         */
        env?: any;
        /**
         * Configures logging.
         * Several logs can be specified on the same configuration level (1.5.2).
         * If on the main configuration level writing a log to a file
         * is not explicitly defined, the default file will be used.
         *

         * module: ngx_core_module
         */
        error_log?: any;
        /**
         * Provides the configuration file context in which the directives that
         * affect connection processing are specified.
         *

         * module: ngx_core_module
         */
        events?: EventsDirectives[];
        /**
         * Loads a dynamic module.
         *

         * module: ngx_core_module
         * @example
         * ```nginx
         * load_module modules/ngx_mail_module.so;
         * ```
         */
        load_module?: any;
        /**
         * nginx uses the locking mechanism to implement accept_mutex
         * and serialize access to shared memory.
         * On most systems the locks are implemented using atomic operations,
         * and this directive is ignored.
         * On other systems the “lock file” mechanism is used.
         * This directive specifies a prefix for the names of lock files.
         *

         * module: ngx_core_module
         */
        lock_file?: any;
        /**
         * Determines whether worker processes are started.
         * This directive is intended for nginx developers.
         *

         * module: ngx_core_module
         */
        master_process?: "on" | "off";
        /**
         * Enables or disables the use of “just-in-time compilation” (PCRE JIT)
         * for the regular expressions known by the time of configuration parsing.
         *

         * module: ngx_core_module
         */
        pcre_jit?: "on" | "off";
        /**
         * Defines a file that will store the process ID of the main process.
         *

         * module: ngx_core_module
         */
        pid?: any;
        /**
         * Defines the name of the hardware SSL accelerator.
         *

         * module: ngx_core_module
         */
        ssl_engine?: any;
        /**
         * Defines the name and parameters of a thread pool
         * used for multi-threaded reading and sending of files
         * without blocking
         * worker processes.
         *

         * module: ngx_core_module
         */
        thread_pool?: any;
        /**
         * Reduces timer resolution in worker processes, thus reducing the
         * number of gettimeofday() system calls made.
         * By default, gettimeofday() is called each time
         * a kernel event is received.
         * With reduced resolution, gettimeofday() is only
         * called once per specified interval.
         *

         * module: ngx_core_module
         * @example
         * ```nginx
         * timer_resolution 100ms;
         * ```
         */
        timer_resolution?: any;
        /**
         * Defines user and group
         * credentials used by worker processes.
         * If group is omitted, a group whose name equals
         * that of user is used.
         *

         * module: ngx_core_module
         */
        user?: any;
        /**
         * Binds worker processes to the sets of CPUs.
         * Each CPU set is represented by a bitmask of allowed CPUs.
         * There should be a separate set defined for each of the worker processes.
         * By default, worker processes are not bound to any specific CPUs.
         *

         * module: ngx_core_module
         * @example
         * ```nginx
         * worker_processes    4;
         * worker_cpu_affinity 0001 0010 0100 1000;
         * worker_processes    2;
         * worker_cpu_affinity 0101 1010;
         * worker_processes auto;
         * worker_cpu_affinity auto;
         * worker_cpu_affinity auto 01010101;
         * ```
         */
        worker_cpu_affinity?: any;
        /**
         * Defines the scheduling priority for worker processes like it is
         * done by the nice command: a negative
         * number
         * means higher priority.
         * Allowed range normally varies from -20 to 20.
         *

         * module: ngx_core_module
         * @example
         * ```nginx
         * worker_priority -10;
         * ```
         */
        worker_priority?: any;
        /**
         * Defines the number of worker processes.
         *

         * module: ngx_core_module
         */
        worker_processes?: "number" | "auto";
        /**
         * Changes the limit on the largest size of a core file
         * (RLIMIT_CORE) for worker processes.
         * Used to increase the limit without restarting the main process.
         *

         * module: ngx_core_module
         */
        worker_rlimit_core?: string;
        /**
         * Changes the limit on the maximum number of open files
         * (RLIMIT_NOFILE) for worker processes.
         * Used to increase the limit without restarting the main process.
         *

         * module: ngx_core_module
         */
        worker_rlimit_nofile?: any;
        /**
         * Configures a timeout for a graceful shutdown of worker processes.
         * When the time expires,
         * nginx will try to close all the connections currently open
         * to facilitate shutdown.
         *

         * module: ngx_core_module
         */
        worker_shutdown_timeout?: string;
        /**
         * Defines the current working directory for a worker process.
         * It is primarily used when writing a core-file, in which case
         * a worker process should have write permission for the
         * specified directory.
         *

         * module: ngx_core_module
         */
        working_directory?: any;
        /**
         * Provides the configuration file context in which the HTTP server directives
         * are specified.
         *

         * module: ngx_http_core_module
         */
        http?: HttpDirectives[];
        /**
         * Provides the configuration file context in which the mail server directives
         * are specified.
         *

         * module: ngx_mail_core_module
         */
        mail?: MailDirectives[];
        /**
         * Provides the configuration file context in which the stream server directives
         * are specified.
         *

         * module: ngx_stream_core_module
         */
        stream?: StreamDirectives[];
        /**
         * Sets a file name that keeps profiling information of
         * nginx worker process.
         * The ID of the worker process is always a part of the file name
         * and is appended to the end of the file name, after a dot.
         *

         * module: ngx_google_perftools_module
         */
        google_perftools_profiles?: any;
    }
    interface Directives {
        main?: MainDirectives;
        events?: EventsDirectives;
        http?: HttpDirectives;
        mail?: MailDirectives;
        stream?: StreamDirectives;
    }
    interface AllDirectives extends MainDirectives, EventsDirectives, HttpDirectives, StreamDirectives {
    }
}
