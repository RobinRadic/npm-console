export interface NginxAnyDirectives {
     /**
     * Includes another file, or files matching the
     * specified mask, into configuration.
     * Included files should consist of
     * syntactically correct directives and blocks.
     *
     * @context any
     * @see https://nginx.org/en/docs/ngx_core_module.html#include
     * @example
     * ```
     * include mime.types;
     * include vhosts/*.conf;
     * ```
     */
     include ?: string[]


}

export interface NginxMainDirectives extends NginxAnyDirectives {
     /**
     * Determines whether nginx should become a daemon.
     * Mainly used during development.
     *
     * @context main
     * @see https://nginx.org/en/docs/ngx_core_module.html#daemon
     */
     daemon ?: "on" | "off"


     /**
     * This directive is used for debugging.
     *
     * @context main
     * @see https://nginx.org/en/docs/ngx_core_module.html#debug_points
     */
     debug_points ?: "abort" | "stop"


     /**
     * By default, nginx removes all environment variables inherited
     * from its parent process except the TZ variable.
     * This directive allows preserving some of the inherited variables,
     * changing their values, or creating new environment variables.
     * These variables are then:
     *
     * @context main
     * @see https://nginx.org/en/docs/ngx_core_module.html#env
     * @example
     * ```
     * env MALLOC_OPTIONS;
     * env PERL5LIB=/data/site/modules;
     * env OPENSSL_ALLOW_PROXY_CERTS=1;
     * ```
     */
     env ?: any


     /**
     * Configures logging.
     * Several logs can be specified on the same configuration level (1.5.2).
     * If on the main configuration level writing a log to a file
     * is not explicitly defined, the default file will be used.
     *
     * @context main, http, mail, stream, server, location
     * @see https://nginx.org/en/docs/ngx_core_module.html#error_log
     */
     error_log ?: any


     /**
     * Provides the configuration file context in which the directives that
     * affect connection processing are specified.
     *
     * @context main
     * @see https://nginx.org/en/docs/ngx_core_module.html#events
     */
     events ?: NginxEventsDirectives


     /**
     * Loads a dynamic module.
     *
     * @context main
     * @see https://nginx.org/en/docs/ngx_core_module.html#load_module
     * @example
     * ```
     * load_module modules/ngx_mail_module.so;
     * ```
     */
     load_module ?: any


     /**
     * nginx uses the locking mechanism to implement accept_mutex
     * and serialize access to shared memory.
     * On most systems the locks are implemented using atomic operations,
     * and this directive is ignored.
     * On other systems the “lock file” mechanism is used.
     * This directive specifies a prefix for the names of lock files.
     *
     * @context main
     * @see https://nginx.org/en/docs/ngx_core_module.html#lock_file
     */
     lock_file ?: any


     /**
     * Determines whether worker processes are started.
     * This directive is intended for nginx developers.
     *
     * @context main
     * @see https://nginx.org/en/docs/ngx_core_module.html#master_process
     */
     master_process ?: "on" | "off"


     /**
     * Enables or disables the use of “just-in-time compilation” (PCRE JIT)
     * for the regular expressions known by the time of configuration parsing.
     *
     * @context main
     * @see https://nginx.org/en/docs/ngx_core_module.html#pcre_jit
     */
     pcre_jit ?: "on" | "off"


     /**
     * Defines a file that will store the process ID of the main process.
     *
     * @context main
     * @see https://nginx.org/en/docs/ngx_core_module.html#pid
     */
     pid ?: any


     /**
     * Defines the name of the hardware SSL accelerator.
     *
     * @context main
     * @see https://nginx.org/en/docs/ngx_core_module.html#ssl_engine
     */
     ssl_engine ?: any


     /**
     * Defines the name and parameters of a thread pool
     * used for multi-threaded reading and sending of files
     * without blocking
     * worker processes.
     *
     * @context main
     * @see https://nginx.org/en/docs/ngx_core_module.html#thread_pool
     */
     thread_pool ?: any


     /**
     * Reduces timer resolution in worker processes, thus reducing the
     * number of gettimeofday() system calls made.
     * By default, gettimeofday() is called each time
     * a kernel event is received.
     * With reduced resolution, gettimeofday() is only
     * called once per specified interval.
     *
     * @context main
     * @see https://nginx.org/en/docs/ngx_core_module.html#timer_resolution
     * @example
     * ```
     * timer_resolution 100ms;
     * ```
     */
     timer_resolution ?: any


     /**
     * Defines user and group
     * credentials used by worker processes.
     * If group is omitted, a group whose name equals
     * that of user is used.
     *
     * @context main
     * @see https://nginx.org/en/docs/ngx_core_module.html#user
     */
     user ?: any


     /**
     * Binds worker processes to the sets of CPUs.
     * Each CPU set is represented by a bitmask of allowed CPUs.
     * There should be a separate set defined for each of the worker processes.
     * By default, worker processes are not bound to any specific CPUs.
     *
     * @context main
     * @see https://nginx.org/en/docs/ngx_core_module.html#worker_cpu_affinity
     * @example
     * ```
     * worker_processes    4;
     * worker_cpu_affinity 0001 0010 0100 1000;
     * worker_processes    2;
     * worker_cpu_affinity 0101 1010;
     * worker_processes auto;
     * worker_cpu_affinity auto;
     * worker_cpu_affinity auto 01010101;
     * ```
     */
     worker_cpu_affinity ?: any


     /**
     * Defines the scheduling priority for worker processes like it is
     * done by the nice command: a negative
     * number
     * means higher priority.
     * Allowed range normally varies from -20 to 20.
     *
     * @context main
     * @see https://nginx.org/en/docs/ngx_core_module.html#worker_priority
     * @example
     * ```
     * worker_priority -10;
     * ```
     */
     worker_priority ?: any


     /**
     * Defines the number of worker processes.
     *
     * @context main
     * @see https://nginx.org/en/docs/ngx_core_module.html#worker_processes
     */
     worker_processes ?: "number" | "auto"


     /**
     * Changes the limit on the largest size of a core file
     * (RLIMIT_CORE) for worker processes.
     * Used to increase the limit without restarting the main process.
     *
     * @context main
     * @see https://nginx.org/en/docs/ngx_core_module.html#worker_rlimit_core
     */
     worker_rlimit_core ?: string


     /**
     * Changes the limit on the maximum number of open files
     * (RLIMIT_NOFILE) for worker processes.
     * Used to increase the limit without restarting the main process.
     *
     * @context main
     * @see https://nginx.org/en/docs/ngx_core_module.html#worker_rlimit_nofile
     */
     worker_rlimit_nofile ?: any


     /**
     * Configures a timeout for a graceful shutdown of worker processes.
     * When the time expires,
     * nginx will try to close all the connections currently open
     * to facilitate shutdown.
     *
     * @context main
     * @see https://nginx.org/en/docs/ngx_core_module.html#worker_shutdown_timeout
     */
     worker_shutdown_timeout ?: string


     /**
     * Defines the current working directory for a worker process.
     * It is primarily used when writing a core-file, in which case
     * a worker process should have write permission for the
     * specified directory.
     *
     * @context main
     * @see https://nginx.org/en/docs/ngx_core_module.html#working_directory
     */
     working_directory ?: any


     /**
     * Provides the configuration file context in which the HTTP server directives
     * are specified.
     *
     * @context main
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#http
     */
     http ?: NginxHttpDirectives


     /**
     * Provides the configuration file context in which the mail server directives
     * are specified.
     *
     * @context main
     * @see https://nginx.org/en/docs/mail/ngx_mail_core_module.html#mail
     */
     mail ?: NginxMailDirectives


     /**
     * Provides the configuration file context in which the stream server directives
     * are specified.
     *
     * @context main
     * @see https://nginx.org/en/docs/stream/ngx_stream_core_module.html#stream
     */
     stream ?: NginxStreamDirectives


     /**
     * Sets a file name that keeps profiling information of
     * nginx worker process.
     * The ID of the worker process is always a part of the file name
     * and is appended to the end of the file name, after a dot.
     *
     * @context main
     * @see https://nginx.org/en/docs/ngx_google_perftools_module.html#google_perftools_profiles
     */
     google_perftools_profiles ?: any


}

export interface NginxHttpDirectives extends NginxAnyDirectives {
     /**
     * Configures logging.
     * Several logs can be specified on the same configuration level (1.5.2).
     * If on the main configuration level writing a log to a file
     * is not explicitly defined, the default file will be used.
     *
     * @context main, http, mail, stream, server, location
     * @see https://nginx.org/en/docs/ngx_core_module.html#error_log
     */
     error_log ?: any


     /**
     * If disabled, redirects issued by nginx will be relative.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#absolute_redirect
     */
     absolute_redirect ?: "on" | "off"


     /**
     * Enables or disables the use of asynchronous file I/O (AIO)
     * on FreeBSD and Linux:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#aio
     * @example
     * ```
     * location /video/ {
     *     aio            on;
     *     output_buffers 1 64k;
     * }
     * options VFS_AIO
     * kldload aio
     * location /video/ {
     *     aio            on;
     *     directio       512;
     *     output_buffers 1 128k;
     * }
     * location /video/ {
     *     sendfile       on;
     *     aio            on;
     *     directio       8m;
     * }
     * location /video/ {
     *     sendfile       on;
     *     aio            threads;
     * }
     * aio threads=pool$disk;
     * ```
     */
     aio ?: "on" | "off" | string


     /**
     * If aio is enabled, specifies whether it is used for writing files.
     * Currently, this only works when using
     * aio threads
     * and is limited to writing temporary files
     * with data received from proxied servers.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#aio_write
     */
     aio_write ?: "on" | "off"


     /**
     * Delays processing of unauthorized requests with 401 response code
     * to prevent timing attacks when access is limited by
     * password, by the
     * result of subrequest,
     * or by JWT.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#auth_delay
     */
     auth_delay ?: string


     /**
     * Allows disabling chunked transfer encoding in HTTP/1.1.
     * It may come in handy when using a software failing to support
     * chunked encoding despite the standard’s requirement.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#chunked_transfer_encoding
     */
     chunked_transfer_encoding ?: "on" | "off"


     /**
     * Sets buffer size for reading client request body.
     * In case the request body is larger than the buffer,
     * the whole body or only its part is written to a
     * temporary file.
     * By default, buffer size is equal to two memory pages.
     * This is 8K on x86, other 32-bit platforms, and x86-64.
     * It is usually 16K on other 64-bit platforms.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#client_body_buffer_size
     */
     client_body_buffer_size ?: string


     /**
     * Determines whether nginx should save the entire client request body
     * into a file.
     * This directive can be used during debugging, or when using the
     * $request_body_file
     * variable, or the
     * $r->request_body_file
     * method of the module
     * ngx_http_perl_module.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#client_body_in_file_only
     */
     client_body_in_file_only ?: "on" | "clean" | "off"


     /**
     * Determines whether nginx should save the entire client request body
     * in a single buffer.
     * The directive is recommended when using the
     * $request_body
     * variable, to save the number of copy operations involved.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#client_body_in_single_buffer
     */
     client_body_in_single_buffer ?: "on" | "off"


     /**
     * Defines a directory for storing temporary files holding client request bodies.
     * Up to three-level subdirectory hierarchy can be used under the specified
     * directory.
     * For example, in the following configuration
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#client_body_temp_path
     * @example
     * ```
     * client_body_temp_path /spool/nginx/client_temp 1 2;
     * /spool/nginx/client_temp/7/45/00000123457
     * ```
     */
     client_body_temp_path ?: any


     /**
     * Defines a timeout for reading client request body.
     * The timeout is set only for a period between two successive read operations,
     * not for the transmission of the whole request body.
     * If a client does not transmit anything within this time, the
     * request is terminated with the
     * 408 (Request Time-out)
     * error.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#client_body_timeout
     */
     client_body_timeout ?: string


     /**
     * Sets buffer size for reading client request header.
     * For most requests, a buffer of 1K bytes is enough.
     * However, if a request includes long cookies, or comes from a WAP client,
     * it may not fit into 1K.
     * If a request line or a request header field does not fit into
     * this buffer then larger buffers, configured by the
     * large_client_header_buffers directive,
     * are allocated.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#client_header_buffer_size
     */
     client_header_buffer_size ?: string


     /**
     * Defines a timeout for reading client request header.
     * If a client does not transmit the entire header within this time, the
     * request is terminated with the
     * 408 (Request Time-out)
     * error.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#client_header_timeout
     */
     client_header_timeout ?: string


     /**
     * Sets the maximum allowed size of the client request body.
     * If the size in a request exceeds the configured value, the
     * 413 (Request Entity Too Large)
     * error is returned to the client.
     * Please be aware that
     * browsers cannot correctly display
     * this error.
     * Setting size to 0 disables checking of client
     * request body size.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#client_max_body_size
     */
     client_max_body_size ?: string


     /**
     * Allows accurate tuning of per-connection memory allocations.
     * This directive has minimal impact on performance
     * and should not generally be used.
     * By default, the size is equal to
     * 256 bytes on 32-bit platforms and 512 bytes on 64-bit platforms.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#connection_pool_size
     */
     connection_pool_size ?: string


     /**
     * Defines the default MIME type of a response.
     * Mapping of file name extensions to MIME types can be set
     * with the types directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#default_type
     */
     default_type ?: any


     /**
     * Enables the use of
     * the O_DIRECT flag (FreeBSD, Linux),
     * the F_NOCACHE flag (macOS),
     * or the directio() function (Solaris),
     * when reading files that are larger than or equal to
     * the specified size.
     * The directive automatically disables (0.7.15) the use of
     * sendfile
     * for a given request.
     * It can be useful for serving large files:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#directio
     * @example
     * ```
     * directio 4m;
     * ```
     */
     directio ?: "size" | "off"


     /**
     * Sets the alignment for
     * directio.
     * In most cases, a 512-byte alignment is enough.
     * However, when using XFS under Linux, it needs to be increased to 4K.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#directio_alignment
     */
     directio_alignment ?: string


     /**
     * Determines how symbolic links should be treated when opening files:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#disable_symlinks
     * @example
     * ```
     * disable_symlinks on from=$document_root;
     * ```
     */
     disable_symlinks ?: any


     /**
     * Defines the URI that will be shown for the specified errors.
     * A uri value can contain variables.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#error_page
     * @example
     * ```
     * error_page 404             /404.html;
     * error_page 500 502 503 504 /50x.html;
     * error_page 404 =200 /empty.gif;
     * error_page 404 = /404.php;
     * location / {
     *     error_page 404 = @fallback;
     * }
     * 
     * location @fallback {
     *     proxy_pass http://backend;
     * }
     * error_page 403      http://example.com/forbidden.html;
     * error_page 404 =301 http://example.com/notfound.html;
     * ```
     */
     error_page ?: any


     /**
     * Enables or disables automatic generation of the “ETag”
     * response header field for static resources.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#etag
     */
     etag ?: "on" | "off"


     /**
     * Specifies how to compare modification time of a response
     * with the time in the
     * “If-Modified-Since”
     * request header field:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#if_modified_since
     */
     if_modified_since ?: "off" | "exact" | "before"


     /**
     * Controls whether header fields with invalid names should be ignored.
     * Valid names are composed of English letters, digits, hyphens, and possibly
     * underscores (as controlled by the underscores_in_headers
     * directive).
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#ignore_invalid_headers
     */
     ignore_invalid_headers ?: "on" | "off"


     /**
     * Disables keep-alive connections with misbehaving browsers.
     * The browser parameters specify which
     * browsers will be affected.
     * The value msie6 disables keep-alive connections
     * with old versions of MSIE, once a POST request is received.
     * The value safari disables keep-alive connections
     * with Safari and Safari-like browsers on macOS and macOS-like
     * operating systems.
     * The value none enables keep-alive connections
     * with all browsers.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#keepalive_disable
     */
     keepalive_disable ?: "none" | string


     /**
     * Sets the maximum number of requests that can be
     * served through one keep-alive connection.
     * After the maximum number of requests are made, the connection is closed.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#keepalive_requests
     */
     keepalive_requests ?: any


     /**
     * Limits the maximum time during which
     * requests can be processed through one keep-alive connection.
     * After this time is reached, the connection is closed
     * following the subsequent request processing.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#keepalive_time
     */
     keepalive_time ?: string


     /**
     * The first parameter sets a timeout during which a keep-alive
     * client connection will stay open on the server side.
     * The zero value disables keep-alive client connections.
     * The optional second parameter sets a value in the
     * “Keep-Alive: timeout=time”
     * response header field.
     * Two parameters may differ.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#keepalive_timeout
     */
     keepalive_timeout ?: any


     /**
     * Sets the maximum number and size of
     * buffers used for reading large client request header.
     * A request line cannot exceed the size of one buffer, or the
     * 414 (Request-URI Too Large)
     * error is returned to the client.
     * A request header field cannot exceed the size of one buffer as well, or the
     * 400 (Bad Request)
     * error is returned to the client.
     * Buffers are allocated only on demand.
     * By default, the buffer size is equal to 8K bytes.
     * If after the end of request processing a connection is transitioned
     * into the keep-alive state, these buffers are released.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#large_client_header_buffers
     */
     large_client_header_buffers ?: any


     /**
     * Limits the rate of response transmission to a client.
     * The rate is specified in bytes per second.
     * The zero value disables rate limiting.
     * 
     * The limit is set per a request, and so if a client simultaneously opens
     * two connections, the overall rate will be twice as much
     * as the specified limit.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#limit_rate
     * @example
     * ```
     * map $slow $rate {
     *     1     4k;
     *     2     8k;
     * }
     * 
     * limit_rate $rate;
     * server {
     * 
     *     if ($slow) {
     *         set $limit_rate 4k;
     *     }
     * 
     *     ...
     * }
     * ```
     */
     limit_rate ?: any


     /**
     * Sets the initial amount after which the further transmission
     * of a response to a client will be rate limited.
     * Parameter value can contain variables (1.17.0).
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#limit_rate_after
     * @example
     * ```
     * location /flv/ {
     *     flv;
     *     limit_rate_after 500k;
     *     limit_rate       50k;
     * }
     * ```
     */
     limit_rate_after ?: string


     /**
     * Controls how nginx closes client connections.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#lingering_close
     */
     lingering_close ?: "off" | "on" | "always"


     /**
     * When lingering_close is in effect,
     * this directive specifies the maximum time during which nginx
     * will process (read and ignore) additional data coming from a client.
     * After that, the connection will be closed, even if there will be
     * more data.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#lingering_time
     */
     lingering_time ?: string


     /**
     * When lingering_close is in effect, this directive specifies
     * the maximum waiting time for more client data to arrive.
     * If data are not received during this time, the connection is closed.
     * Otherwise, the data are read and ignored, and nginx starts waiting
     * for more data again.
     * The “wait-read-ignore” cycle is repeated, but no longer than specified by the
     * lingering_time directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#lingering_timeout
     */
     lingering_timeout ?: string


     /**
     * Enables or disables logging of errors about not found files into
     * error_log.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#log_not_found
     */
     log_not_found ?: "on" | "off"


     /**
     * Enables or disables logging of subrequests into
     * access_log.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#log_subrequest
     */
     log_subrequest ?: "on" | "off"


     /**
     * Limits the maximum allowed number of ranges in byte-range requests.
     * Requests that exceed the limit are processed as if there were no
     * byte ranges specified.
     * By default, the number of ranges is not limited.
     * The zero value disables the byte-range support completely.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#max_ranges
     */
     max_ranges ?: any


     /**
     * Enables or disables compression of two or more adjacent slashes
     * in a URI into a single slash.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#merge_slashes
     * @example
     * ```
     * location /scripts/ {
     *     ...
     * }
     * ```
     */
     merge_slashes ?: "on" | "off"


     /**
     * Enables or disables adding comments to responses for MSIE clients with status
     * greater than 400 to increase the response size to 512 bytes.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#msie_padding
     */
     msie_padding ?: "on" | "off"


     /**
     * Enables or disables issuing refreshes instead of redirects for MSIE clients.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#msie_refresh
     */
     msie_refresh ?: "on" | "off"


     /**
     * Configures a cache that can store:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#open_file_cache
     * @example
     * ```
     * open_file_cache          max=1000 inactive=20s;
     * open_file_cache_valid    30s;
     * open_file_cache_min_uses 2;
     * open_file_cache_errors   on;
     * ```
     */
     open_file_cache ?: any


     /**
     * Enables or disables caching of file lookup errors by
     * open_file_cache.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#open_file_cache_errors
     */
     open_file_cache_errors ?: "on" | "off"


     /**
     * Sets the minimum number of file accesses during
     * the period configured by the inactive parameter
     * of the open_file_cache directive, required for a file
     * descriptor to remain open in the cache.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#open_file_cache_min_uses
     */
     open_file_cache_min_uses ?: any


     /**
     * Sets a time after which
     * open_file_cache
     * elements should be validated.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#open_file_cache_valid
     */
     open_file_cache_valid ?: string


     /**
     * Sets the number and size of the
     * buffers used for reading a response from a disk.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#output_buffers
     */
     output_buffers ?: any


     /**
     * Enables or disables specifying the port in
     * absolute redirects issued by nginx.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#port_in_redirect
     */
     port_in_redirect ?: "on" | "off"


     /**
     * If possible, the transmission of client data will be postponed until
     * nginx has at least size bytes of data to send.
     * The zero value disables postponing data transmission.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#postpone_output
     */
     postpone_output ?: string


     /**
     * Sets the amount of pre-reading for the kernel when working with file.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#read_ahead
     */
     read_ahead ?: string


     /**
     * Enables or disables doing several redirects using the
     * error_page
     * directive.
     * The number of such redirects is limited.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#recursive_error_pages
     */
     recursive_error_pages ?: "on" | "off"


     /**
     * Allows accurate tuning of per-request memory allocations.
     * This directive has minimal impact on performance
     * and should not generally be used.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#request_pool_size
     */
     request_pool_size ?: string


     /**
     * Enables or disables resetting timed out connections
     * and connections
     * closed
     * with the non-standard code 444 (1.15.2).
     * The reset is performed as follows.
     * Before closing a socket, the
     * SO_LINGER
     * option is set on it with a timeout value of 0.
     * When the socket is closed, TCP RST is sent to the client, and all memory
     * occupied by this socket is released.
     * This helps avoid keeping an already closed socket with filled buffers
     * in a FIN_WAIT1 state for a long time.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#reset_timedout_connection
     */
     reset_timedout_connection ?: "on" | "off"


     /**
     * Configures name servers used to resolve names of upstream servers
     * into addresses, for example:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#resolver
     * @example
     * ```
     * resolver 127.0.0.1 [::1]:5353;
     * resolver 127.0.0.1 [::1]:5353 valid=30s;
     * ```
     */
     resolver ?: any


     /**
     * Sets a timeout for name resolution, for example:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#resolver_timeout
     * @example
     * ```
     * resolver_timeout 5s;
     * ```
     */
     resolver_timeout ?: string


     /**
     * Sets the root directory for requests.
     * For example, with the following configuration
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#root
     * @example
     * ```
     * location /i/ {
     *     root /data/w3;
     * }
     * ```
     */
     root ?: string


     /**
     * Allows access if all (all) or at least one
     * (any) of the
     * ngx_http_access_module,
     * ngx_http_auth_basic_module,
     * ngx_http_auth_request_module,
     * or
     * ngx_http_auth_jwt_module
     * modules allow access.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#satisfy
     * @example
     * ```
     * location / {
     *     satisfy any;
     * 
     *     allow 192.168.1.0/32;
     *     deny  all;
     * 
     *     auth_basic           "closed site";
     *     auth_basic_user_file conf/htpasswd;
     * }
     * ```
     */
     satisfy ?: "all" | "any"


     /**
     * If the directive is set to a non-zero value, nginx will try to minimize
     * the number of send operations on client sockets by using either
     * NOTE_LOWAT flag of the
     * kqueue method
     * or the SO_SNDLOWAT socket option.
     * In both cases the specified size is used.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#send_lowat
     */
     send_lowat ?: string


     /**
     * Sets a timeout for transmitting a response to the client.
     * The timeout is set only between two successive write operations,
     * not for the transmission of the whole response.
     * If the client does not receive anything within this time,
     * the connection is closed.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#send_timeout
     */
     send_timeout ?: string


     /**
     * Enables or disables the use of
     * sendfile().
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#sendfile
     * @example
     * ```
     * location /video/ {
     *     sendfile       on;
     *     tcp_nopush     on;
     *     aio            on;
     * }
     * ```
     */
     sendfile ?: "on" | "off"


     /**
     * Limits the amount of data that can be
     * transferred in a single sendfile() call.
     * Without the limit, one fast connection may seize the worker process entirely.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#sendfile_max_chunk
     */
     sendfile_max_chunk ?: string


     /**
     * Sets configuration for a virtual server.
     * There is no clear separation between IP-based (based on the IP address)
     * and name-based (based on the “Host” request header field)
     * virtual servers.
     * Instead, the listen directives describe all
     * addresses and ports that should accept connections for the server, and the
     * server_name directive lists all server names.
     * Example configurations are provided in the
     * “How nginx processes a request” document.
     *
     * @context http
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#server
     */
     server ?: NginxServerDirectives[]


     /**
     * Enables or disables the use of the primary server name, specified by the
     * server_name directive,
     * in absolute redirects issued by nginx.
     * When the use of the primary server name is disabled, the name from the
     * “Host” request header field is used.
     * If this field is not present, the IP address of the server is used.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#server_name_in_redirect
     */
     server_name_in_redirect ?: "on" | "off"


     /**
     * Sets the bucket size for the server names hash tables.
     * The default value depends on the size of the processor’s cache line.
     * The details of setting up hash tables are provided in a separate
     * document.
     *
     * @context http
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#server_names_hash_bucket_size
     */
     server_names_hash_bucket_size ?: string


     /**
     * Sets the maximum size of the server names hash tables.
     * The details of setting up hash tables are provided in a separate
     * document.
     *
     * @context http
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#server_names_hash_max_size
     */
     server_names_hash_max_size ?: string


     /**
     * Enables or disables emitting nginx version on error pages and in the
     * “Server” response header field.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#server_tokens
     */
     server_tokens ?: "on" | "off" | "build" | string


     /**
     * Sets the size of the buffer used for
     * storing the response body of a subrequest.
     * By default, the buffer size is equal to one memory page.
     * This is either 4K or 8K, depending on a platform.
     * It can be made smaller, however.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#subrequest_output_buffer_size
     */
     subrequest_output_buffer_size ?: string


     /**
     * Enables or disables the use of the TCP_NODELAY option.
     * The option is enabled when a connection is transitioned into the
     * keep-alive state.
     * Additionally, it is enabled on SSL connections,
     * for unbuffered proxying,
     * and for WebSocket proxying.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#tcp_nodelay
     */
     tcp_nodelay ?: "on" | "off"


     /**
     * Enables or disables the use of
     * the TCP_NOPUSH socket option on FreeBSD
     * or the TCP_CORK socket option on Linux.
     * The options are enabled only when sendfile is used.
     * Enabling the option allows
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#tcp_nopush
     */
     tcp_nopush ?: "on" | "off"


     /**
     * Maps file name extensions to MIME types of responses.
     * Extensions are case-insensitive.
     * Several extensions can be mapped to one type, for example:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#types
     * @example
     * ```
     * types {
     *     application/octet-stream bin exe dll;
     *     application/octet-stream deb;
     *     application/octet-stream dmg;
     * }
     * location /download/ {
     *     types        { }
     *     default_type application/octet-stream;
     * }
     * ```
     */
     types ?: any


     /**
     * Sets the bucket size for the types hash tables.
     * The details of setting up hash tables are provided in a separate
     * document.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#types_hash_bucket_size
     */
     types_hash_bucket_size ?: string


     /**
     * Sets the maximum size of the types hash tables.
     * The details of setting up hash tables are provided in a separate
     * document.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#types_hash_max_size
     */
     types_hash_max_size ?: string


     /**
     * Enables or disables the use of underscores in client request header fields.
     * When the use of underscores is disabled, request header fields whose names
     * contain underscores are
     * marked as invalid and become subject to the
     * ignore_invalid_headers directive.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#underscores_in_headers
     */
     underscores_in_headers ?: "on" | "off"


     /**
     * Sets the bucket size for the variables hash table.
     * The details of setting up hash tables are provided in a separate
     * document.
     *
     * @context http
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#variables_hash_bucket_size
     */
     variables_hash_bucket_size ?: string


     /**
     * Sets the maximum size of the variables hash table.
     * The details of setting up hash tables are provided in a separate
     * document.
     *
     * @context http
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#variables_hash_max_size
     */
     variables_hash_max_size ?: string


     /**
     * Allows access for the specified network or address.
     * If the special value unix: is specified (1.5.1),
     * allows access for all UNIX-domain sockets.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_access_module.html#allow
     */
     allow ?: "address" | "CIDR" | "unix:" | "all" | string[]


     /**
     * Denies access for the specified network or address.
     * If the special value unix: is specified (1.5.1),
     * denies access for all UNIX-domain sockets.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_access_module.html#deny
     */
     deny ?: "address" | "CIDR" | "unix:" | "all" | string[]


     /**
     * Adds the text returned as a result of processing a given subrequest
     * before the response body.
     * An empty string ("") as a parameter cancels addition
     * inherited from the previous configuration level.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_addition_module.html#add_before_body
     */
     add_before_body ?: any


     /**
     * Adds the text returned as a result of processing a given subrequest
     * after the response body.
     * An empty string ("") as a parameter cancels addition
     * inherited from the previous configuration level.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_addition_module.html#add_after_body
     */
     add_after_body ?: any


     /**
     * Allows adding text in responses with the specified MIME types,
     * in addition to “text/html”.
     * The special value “*” matches any MIME type (0.8.29).
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_addition_module.html#addition_types
     */
     addition_types ?: any


     /**
     * Enables validation of user name and password using the
     * “HTTP Basic Authentication” protocol.
     * The specified parameter is used as a realm.
     * Parameter value can contain variables (1.3.10, 1.2.7).
     * The special value off cancels the effect
     * of the auth_basic directive
     * inherited from the previous configuration level.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_auth_basic_module.html#auth_basic
     */
     auth_basic ?: string | "off"


     /**
     * Specifies a file that keeps user names and passwords,
     * in the following format:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_auth_basic_module.html#auth_basic_user_file
     * @example
     * ```
     * # comment
     * name1:password1
     * name2:password2:comment
     * name3:password3
     * ```
     */
     auth_basic_user_file ?: any


     /**
     * Enables validation of JSON Web Token.
     * The specified string is used as a realm.
     * Parameter value can contain variables.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_auth_jwt_module.html#auth_jwt
     * @example
     * ```
     * auth_jwt "closed site" token=$cookie_auth_token;
     * ```
     */
     auth_jwt ?: "string    [token=$variable]" | "off"


     /**
     * Sets the variable to a JWT claim parameter
     * identified by key names.
     * Name matching starts from the top level of the JSON tree.
     * For arrays, the variable keeps a list of array elements separated by commas.
     *
     * @context http
     * @see https://nginx.org/en/docs/http/ngx_http_auth_jwt_module.html#auth_jwt_claim_set
     * @example
     * ```
     * auth_jwt_claim_set $email info e-mail;
     * auth_jwt_claim_set $job info "job title";
     * ```
     */
     auth_jwt_claim_set ?: any


     /**
     * Sets the variable to a JOSE header parameter
     * identified by key names.
     * Name matching starts from the top level of the JSON tree.
     * For arrays, the variable keeps a list of array elements separated by commas.
     *
     * @context http
     * @see https://nginx.org/en/docs/http/ngx_http_auth_jwt_module.html#auth_jwt_header_set
     */
     auth_jwt_header_set ?: any


     /**
     * Specifies a file in
     * JSON Web Key Set
     * format for validating JWT signature.
     * Parameter value can contain variables.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_auth_jwt_module.html#auth_jwt_key_file
     * @example
     * ```
     * auth_jwt_key_file conf/keys.json;
     * auth_jwt_key_file conf/key.jwk;
     * ```
     */
     auth_jwt_key_file ?: any


     /**
     * Allows retrieving a
     * JSON Web Key Set
     * file from a subrequest for validating JWT signature and
     * sets the URI where the subrequest will be sent to.
     * Parameter value can contain variables.
     * To avoid validation overhead,
     * it is recommended to cache the key file:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_auth_jwt_module.html#auth_jwt_key_request
     * @example
     * ```
     * proxy_cache_path /data/nginx/cache levels=1 keys_zone=foo:10m;
     * 
     * server {
     *     ...
     * 
     *     location / {
     *         auth_jwt             "closed site";
     *         auth_jwt_key_request /jwks_uri;
     *     }
     * 
     *     location = /jwks_uri {
     *         internal;
     *         proxy_cache foo;
     *         proxy_pass  http://idp.example.com/keys;
     *     }
     * }
     * auth_jwt_key_request /jwks_uri;
     * auth_jwt_key_request /jwks2_uri;
     * ```
     */
     auth_jwt_key_request ?: any


     /**
     * Sets the maximum allowable leeway to compensate
     * clock skew when verifying the
     * exp
     * and
     * nbf
     * JWT claims.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_auth_jwt_module.html#auth_jwt_leeway
     */
     auth_jwt_leeway ?: string


     /**
     * Specifies which type of JSON Web Token to expect:
     * JWS (signed),
     * JWE (encrypted),
     * or signed and then encrypted
     * Nested JWT (nested) (1.21.0).
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_auth_jwt_module.html#auth_jwt_type
     */
     auth_jwt_type ?: "signed" | "encrypted" | "nested"


     /**
     * Defines additional conditions for JWT validation.
     * The value can contain text, variables, and their combination.
     * The authentication will succeed only
     * if all the values are not empty and are not equal to “0”.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_auth_jwt_module.html#auth_jwt_require
     * @example
     * ```
     * map $jwt_claim_iss $valid_jwt_iss {
     *     "good" 1;
     * }
     * ...
     * 
     * auth_jwt_require $valid_jwt_iss;
     * ```
     */
     auth_jwt_require ?: any


     /**
     * Enables authorization based on the result of a subrequest and sets
     * the URI to which the subrequest will be sent.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_auth_request_module.html#auth_request
     */
     auth_request ?: "uri" | "off"


     /**
     * Sets the request variable to the given
     * value after the authorization request completes.
     * The value may contain variables from the authorization request,
     * such as $upstream_http_*.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_auth_request_module.html#auth_request_set
     */
     auth_request_set ?: any


     /**
     * Enables or disables the directory listing output.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_autoindex_module.html#autoindex
     */
     autoindex ?: "on" | "off"


     /**
     * For the HTML format,
     * specifies whether exact file sizes should be output in the directory listing,
     * or rather rounded to kilobytes, megabytes, and gigabytes.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_autoindex_module.html#autoindex_exact_size
     */
     autoindex_exact_size ?: "on" | "off"


     /**
     * Sets the format of a directory listing.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_autoindex_module.html#autoindex_format
     */
     autoindex_format ?: "html" | "xml" | "json" | "jsonp"


     /**
     * For the HTML format,
     * specifies whether times in the directory listing should be
     * output in the local time zone or UTC.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_autoindex_module.html#autoindex_localtime
     */
     autoindex_localtime ?: "on" | "off"


     /**
     * If any of the specified substrings is found in the “User-Agent”
     * request header field, the browser will be considered ancient.
     * The special string “netscape4” corresponds to the
     * regular expression “^Mozilla/[1-4]”.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_browser_module.html#ancient_browser
     */
     ancient_browser ?: any


     /**
     * Sets a value for the $ancient_browser variables.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_browser_module.html#ancient_browser_value
     */
     ancient_browser_value ?: any


     /**
     * Specifies a version starting from which a browser is considered modern.
     * A browser can be any one of the following: msie,
     * gecko (browsers based on Mozilla),
     * opera, safari,
     * or konqueror.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_browser_module.html#modern_browser
     */
     modern_browser ?: any


     /**
     * Sets a value for the $modern_browser variables.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_browser_module.html#modern_browser_value
     */
     modern_browser_value ?: any


     /**
     * Adds the specified charset to the “Content-Type”
     * response header field.
     * If this charset is different from the charset specified
     * in the source_charset directive, a conversion is performed.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_charset_module.html#charset
     * @example
     * ```
     * charset $charset;
     * charset_map iso-8859-5 _ { }
     * ```
     */
     charset ?: string | "off"


     /**
     * Describes the conversion table from one charset to another.
     * A reverse conversion table is built using the same data.
     * Character codes are given in hexadecimal.
     * Missing characters in the range 80-FF are replaced with “?”.
     * When converting from UTF-8, characters missing in a one-byte charset
     * are replaced with “&#XXXX;”.
     *
     * @context http
     * @see https://nginx.org/en/docs/http/ngx_http_charset_module.html#charset_map
     * @example
     * ```
     * charset_map koi8-r windows-1251 {
     *     C0 FE ; # small yu
     *     C1 E0 ; # small a
     *     C2 E1 ; # small b
     *     C3 F6 ; # small ts
     *     ...
     * }
     * charset_map koi8-r utf-8 {
     *     C0 D18E ; # small yu
     *     C1 D0B0 ; # small a
     *     C2 D0B1 ; # small b
     *     C3 D186 ; # small ts
     *     ...
     * }
     * ```
     */
     charset_map ?: any


     /**
     * Enables module processing in responses with the specified MIME types
     * in addition to “text/html”.
     * The special value “*” matches any MIME type (0.8.29).
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_charset_module.html#charset_types
     */
     charset_types ?: any


     /**
     * Determines whether a conversion should be performed for answers
     * received from a proxied or a FastCGI/uwsgi/SCGI/gRPC server
     * when the answers already carry a charset in the “Content-Type”
     * response header field.
     * If conversion is enabled, a charset specified in the received
     * response is used as a source charset.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_charset_module.html#override_charset
     */
     override_charset ?: "on" | "off"


     /**
     * Defines the source charset of a response.
     * If this charset is different from the charset specified
     * in the charset directive, a conversion is performed.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_charset_module.html#source_charset
     */
     source_charset ?: any


     /**
     * The WebDAV specification only allows creating files in already
     * existing directories.
     * This directive allows creating all needed intermediate directories.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_dav_module.html#create_full_put_path
     */
     create_full_put_path ?: "on" | "off"


     /**
     * Sets access permissions for newly created files and directories, e.g.:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_dav_module.html#dav_access
     * @example
     * ```
     * dav_access user:rw group:rw all:r;
     * dav_access group:rw all:r;
     * ```
     */
     dav_access ?: any


     /**
     * Allows the specified HTTP and WebDAV methods.
     * The parameter off denies all methods processed
     * by this module.
     * The following methods are supported:
     * PUT, DELETE, MKCOL,
     * COPY, and MOVE.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_dav_module.html#dav_methods
     */
     dav_methods ?: "off" | string


     /**
     * Allows the DELETE method to remove files provided that
     * the number of elements in a request path is not less than the specified
     * number.
     * For example, the directive
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_dav_module.html#min_delete_depth
     * @example
     * ```
     * min_delete_depth 4;
     * /users/00/00/name
     * /users/00/00/name/pic.jpg
     * /users/00/00/page.html
     * /users/00/00
     * ```
     */
     min_delete_depth ?: any


     /**
     * Sets the size of the buffer used for
     * reading the .f4x index file.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_f4f_module.html#f4f_buffer_size
     */
     f4f_buffer_size ?: string


     /**
     * Makes outgoing connections to a FastCGI server originate
     * from the specified local IP address with an optional port (1.11.2).
     * Parameter value can contain variables (1.3.12).
     * The special value off (1.3.12) cancels the effect
     * of the fastcgi_bind directive
     * inherited from the previous configuration level, which allows the
     * system to auto-assign the local IP address and port.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_bind
     * @example
     * ```
     * fastcgi_bind $remote_addr transparent;
     * ```
     */
     fastcgi_bind ?: "address    [transparent]" | "off"


     /**
     * Sets the size of the buffer used for reading the first part
     * of the response received from the FastCGI server.
     * This part usually contains a small response header.
     * By default, the buffer size is equal to one memory page.
     * This is either 4K or 8K, depending on a platform.
     * It can be made smaller, however.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_buffer_size
     */
     fastcgi_buffer_size ?: string


     /**
     * Enables or disables buffering of responses from the FastCGI server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_buffering
     */
     fastcgi_buffering ?: "on" | "off"


     /**
     * Sets the number and size of the
     * buffers used for reading a response from the FastCGI server,
     * for a single connection.
     * By default, the buffer size is equal to one memory page.
     * This is either 4K or 8K, depending on a platform.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_buffers
     */
     fastcgi_buffers ?: any


     /**
     * When buffering of responses from the FastCGI
     * server is enabled, limits the total size of buffers that
     * can be busy sending a response to the client while the response is not
     * yet fully read.
     * In the meantime, the rest of the buffers can be used for reading the response
     * and, if needed, buffering part of the response to a temporary file.
     * By default, size is limited by the size of two buffers set by the
     * fastcgi_buffer_size and fastcgi_buffers directives.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_busy_buffers_size
     */
     fastcgi_busy_buffers_size ?: string


     /**
     * Defines a shared memory zone used for caching.
     * The same zone can be used in several places.
     * Parameter value can contain variables (1.7.9).
     * The off parameter disables caching inherited
     * from the previous configuration level.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_cache
     */
     fastcgi_cache ?: "zone" | "off"


     /**
     * Allows starting a background subrequest
     * to update an expired cache item,
     * while a stale cached response is returned to the client.
     * Note that it is necessary to
     * allow
     * the usage of a stale cached response when it is being updated.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_cache_background_update
     */
     fastcgi_cache_background_update ?: "on" | "off"


     /**
     * Defines conditions under which the response will not be taken from a cache.
     * If at least one value of the string parameters is not empty and is not
     * equal to “0” then the response will not be taken from the cache:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_cache_bypass
     * @example
     * ```
     * fastcgi_cache_bypass $cookie_nocache $arg_nocache$arg_comment;
     * fastcgi_cache_bypass $http_pragma    $http_authorization;
     * ```
     */
     fastcgi_cache_bypass ?: any


     /**
     * Defines a key for caching, for example
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_cache_key
     * @example
     * ```
     * fastcgi_cache_key localhost:9000$request_uri;
     * ```
     */
     fastcgi_cache_key ?: any


     /**
     * When enabled, only one request at a time will be allowed to populate
     * a new cache element identified according to the fastcgi_cache_key
     * directive by passing a request to a FastCGI server.
     * Other requests of the same cache element will either wait
     * for a response to appear in the cache or the cache lock for
     * this element to be released, up to the time set by the
     * fastcgi_cache_lock_timeout directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_cache_lock
     */
     fastcgi_cache_lock ?: "on" | "off"


     /**
     * If the last request passed to the FastCGI server
     * for populating a new cache element
     * has not completed for the specified time,
     * one more request may be passed to the FastCGI server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_cache_lock_age
     */
     fastcgi_cache_lock_age ?: string


     /**
     * Sets a timeout for fastcgi_cache_lock.
     * When the time expires,
     * the request will be passed to the FastCGI server,
     * however, the response will not be cached.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_cache_lock_timeout
     */
     fastcgi_cache_lock_timeout ?: string


     /**
     * Sets an offset in bytes for byte-range requests.
     * If the range is beyond the offset,
     * the range request will be passed to the FastCGI server
     * and the response will not be cached.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_cache_max_range_offset
     */
     fastcgi_cache_max_range_offset ?: any


     /**
     * If the client request method is listed in this directive then
     * the response will be cached.
     * “GET” and “HEAD” methods are always
     * added to the list, though it is recommended to specify them explicitly.
     * See also the fastcgi_no_cache directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_cache_methods
     */
     fastcgi_cache_methods ?: "GET" | "HEAD" | string


     /**
     * Sets the number of requests after which the response
     * will be cached.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_cache_min_uses
     */
     fastcgi_cache_min_uses ?: any


     /**
     * Sets the path and other parameters of a cache.
     * Cache data are stored in files.
     * Both the key and file name in a cache are a result of
     * applying the MD5 function to the proxied URL.
     * 
     * The levels parameter defines hierarchy levels of a cache:
     * from 1 to 3, each level accepts values 1 or 2.
     * For example, in the following configuration
     *
     * @context http
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_cache_path
     * @example
     * ```
     * fastcgi_cache_path /data/nginx/cache levels=1:2 keys_zone=one:10m;
     * /data/nginx/cache/c/29/b7f54b2df7773722d382f4809d65029c
     * ```
     */
     fastcgi_cache_path ?: "path    [levels=levels]    [use_temp_path=on" | "off]    keys_zone=name:size    [inactive=time]    [max_size=size]    [min_free=size]    [manager_files=number]    [manager_sleep=time]    [manager_threshold=time]    [loader_files=number]    [loader_sleep=time]    [loader_threshold=time]    [purger=on" | "off]    [purger_files=number]    [purger_sleep=time]    [purger_threshold=time]"


     /**
     * Defines conditions under which the request will be considered a cache
     * purge request.
     * If at least one value of the string parameters is not empty and is not equal
     * to “0” then the cache entry with a corresponding
     * cache key is removed.
     * The result of successful operation is indicated by returning
     * the 204 (No Content) response.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_cache_purge
     * @example
     * ```
     * fastcgi_cache_path /data/nginx/cache keys_zone=cache_zone:10m;
     * 
     * map $request_method $purge_method {
     *     PURGE   1;
     *     default 0;
     * }
     * 
     * server {
     *     ...
     *     location / {
     *         fastcgi_pass        backend;
     *         fastcgi_cache       cache_zone;
     *         fastcgi_cache_key   $uri;
     *         fastcgi_cache_purge $purge_method;
     *     }
     * }
     * ```
     */
     fastcgi_cache_purge ?: any


     /**
     * Enables revalidation of expired cache items using conditional requests with
     * the “If-Modified-Since” and “If-None-Match”
     * header fields.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_cache_revalidate
     */
     fastcgi_cache_revalidate ?: "on" | "off"


     /**
     * Determines in which cases a stale cached response can be used
     * when an error occurs during communication with the FastCGI server.
     * The directive’s parameters match the parameters of the
     * fastcgi_next_upstream directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_cache_use_stale
     */
     fastcgi_cache_use_stale ?: "error" | "timeout" | "invalid_header" | "updating" | "http_500" | "http_503" | "http_403" | "http_404" | "http_429" | string


     /**
     * Sets caching time for different response codes.
     * For example, the following directives
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_cache_valid
     * @example
     * ```
     * fastcgi_cache_valid 200 302 10m;
     * fastcgi_cache_valid 404      1m;
     * fastcgi_cache_valid 5m;
     * fastcgi_cache_valid 200 302 10m;
     * fastcgi_cache_valid 301      1h;
     * fastcgi_cache_valid any      1m;
     * ```
     */
     fastcgi_cache_valid ?: any


     /**
     * Sets a string to search for in the error stream of a response
     * received from a FastCGI server.
     * If the string is found then it is considered that the FastCGI
     * server has returned an invalid response.
     * This allows handling application errors in nginx, for example:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_catch_stderr
     * @example
     * ```
     * location /php/ {
     *     fastcgi_pass backend:9000;
     *     ...
     *     fastcgi_catch_stderr "PHP Fatal error";
     *     fastcgi_next_upstream error timeout invalid_header;
     * }
     * ```
     */
     fastcgi_catch_stderr ?: any


     /**
     * Defines a timeout for establishing a connection with a FastCGI server.
     * It should be noted that this timeout cannot usually exceed 75 seconds.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_connect_timeout
     */
     fastcgi_connect_timeout ?: string


     /**
     * Enables byte-range support
     * for both cached and uncached responses from the FastCGI server
     * regardless of the “Accept-Ranges” field in these responses.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_force_ranges
     */
     fastcgi_force_ranges ?: "on" | "off"


     /**
     * By default,
     * nginx does not pass the header fields “Status” and
     * “X-Accel-...” from the response of a FastCGI
     * server to a client.
     * The fastcgi_hide_header directive sets additional fields
     * that will not be passed.
     * If, on the contrary, the passing of fields needs to be permitted,
     * the fastcgi_pass_header directive can be used.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_hide_header
     */
     fastcgi_hide_header ?: any


     /**
     * Determines whether the connection with a FastCGI server should be
     * closed when a client closes the connection without waiting
     * for a response.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_ignore_client_abort
     */
     fastcgi_ignore_client_abort ?: "on" | "off"


     /**
     * Disables processing of certain response header fields from the FastCGI server.
     * The following fields can be ignored: “X-Accel-Redirect”,
     * “X-Accel-Expires”, “X-Accel-Limit-Rate” (1.1.6),
     * “X-Accel-Buffering” (1.1.6),
     * “X-Accel-Charset” (1.1.6), “Expires”,
     * “Cache-Control”, “Set-Cookie” (0.8.44),
     * and “Vary” (1.7.7).
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_ignore_headers
     */
     fastcgi_ignore_headers ?: any


     /**
     * Sets a file name that will be appended after a URI that ends with
     * a slash, in the value of the $fastcgi_script_name variable.
     * For example, with these settings
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_index
     * @example
     * ```
     * fastcgi_index index.php;
     * fastcgi_param SCRIPT_FILENAME /home/www/scripts/php$fastcgi_script_name;
     * ```
     */
     fastcgi_index ?: any


     /**
     * Determines whether FastCGI server responses with codes greater than or equal
     * to 300 should be passed to a client
     * or be intercepted and redirected to nginx for processing
     * with the error_page directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_intercept_errors
     */
     fastcgi_intercept_errors ?: "on" | "off"


     /**
     * By default, a FastCGI server will close a connection right after
     * sending the response.
     * However, when this directive is set to the value on,
     * nginx will instruct a FastCGI server to keep connections open.
     * This is necessary, in particular, for
     * keepalive
     * connections to FastCGI servers to function.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_keep_conn
     */
     fastcgi_keep_conn ?: "on" | "off"


     /**
     * Limits the speed of reading the response from the FastCGI server.
     * The rate is specified in bytes per second.
     * The zero value disables rate limiting.
     * The limit is set per a request, and so if nginx simultaneously opens
     * two connections to the FastCFI server,
     * the overall rate will be twice as much as the specified limit.
     * The limitation works only if
     * buffering of responses from the FastCGI
     * server is enabled.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_limit_rate
     */
     fastcgi_limit_rate ?: any


     /**
     * When buffering of responses from the FastCGI
     * server is enabled, and the whole response does not fit into the buffers
     * set by the fastcgi_buffer_size and fastcgi_buffers
     * directives, a part of the response can be saved to a temporary file.
     * This directive sets the maximum size of the temporary file.
     * The size of data written to the temporary file at a time is set
     * by the fastcgi_temp_file_write_size directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_max_temp_file_size
     */
     fastcgi_max_temp_file_size ?: string


     /**
     * Specifies in which cases a request should be passed to the next server:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_next_upstream
     */
     fastcgi_next_upstream ?: "error" | "timeout" | "invalid_header" | "http_500" | "http_503" | "http_403" | "http_404" | "http_429" | "non_idempotent" | string


     /**
     * Limits the time during which a request can be passed to the
     * next server.
     * The 0 value turns off this limitation.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_next_upstream_timeout
     */
     fastcgi_next_upstream_timeout ?: string


     /**
     * Limits the number of possible tries for passing a request to the
     * next server.
     * The 0 value turns off this limitation.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_next_upstream_tries
     */
     fastcgi_next_upstream_tries ?: any


     /**
     * Defines conditions under which the response will not be saved to a cache.
     * If at least one value of the string parameters is not empty and is not
     * equal to “0” then the response will not be saved:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_no_cache
     * @example
     * ```
     * fastcgi_no_cache $cookie_nocache $arg_nocache$arg_comment;
     * fastcgi_no_cache $http_pragma    $http_authorization;
     * ```
     */
     fastcgi_no_cache ?: any


     /**
     * Sets a parameter that should be passed to the FastCGI server.
     * The value can contain text, variables, and their combination.
     * These directives are inherited from the previous configuration level
     * if and only if there are no fastcgi_param directives
     * defined on the current level.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_param
     * @example
     * ```
     * fastcgi_param SCRIPT_FILENAME /home/www/scripts/php$fastcgi_script_name;
     * fastcgi_param QUERY_STRING    $query_string;
     * fastcgi_param REQUEST_METHOD  $request_method;
     * fastcgi_param CONTENT_TYPE    $content_type;
     * fastcgi_param CONTENT_LENGTH  $content_length;
     * fastcgi_param REDIRECT_STATUS 200;
     * fastcgi_param HTTPS           $https if_not_empty;
     * ```
     */
     fastcgi_param ?: any


     /**
     * Permits passing otherwise disabled header
     * fields from a FastCGI server to a client.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_pass_header
     */
     fastcgi_pass_header ?: any


     /**
     * Indicates whether the original request body is passed
     * to the FastCGI server.
     * See also the fastcgi_pass_request_headers directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_pass_request_body
     */
     fastcgi_pass_request_body ?: "on" | "off"


     /**
     * Indicates whether the header fields of the original request are passed
     * to the FastCGI server.
     * See also the fastcgi_pass_request_body directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_pass_request_headers
     */
     fastcgi_pass_request_headers ?: "on" | "off"


     /**
     * Defines a timeout for reading a response from the FastCGI server.
     * The timeout is set only between two successive read operations,
     * not for the transmission of the whole response.
     * If the FastCGI server does not transmit anything within this time,
     * the connection is closed.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_read_timeout
     */
     fastcgi_read_timeout ?: string


     /**
     * Enables or disables buffering of a client request body.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_request_buffering
     */
     fastcgi_request_buffering ?: "on" | "off"


     /**
     * If the directive is set to a non-zero value, nginx will try to
     * minimize the number
     * of send operations on outgoing connections to a FastCGI server by using either
     * NOTE_LOWAT flag of the
     * kqueue method,
     * or the SO_SNDLOWAT socket option,
     * with the specified size.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_send_lowat
     */
     fastcgi_send_lowat ?: string


     /**
     * Sets a timeout for transmitting a request to the FastCGI server.
     * The timeout is set only between two successive write operations,
     * not for the transmission of the whole request.
     * If the FastCGI server does not receive anything within this time,
     * the connection is closed.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_send_timeout
     */
     fastcgi_send_timeout ?: string


     /**
     * Configures the “TCP keepalive” behavior
     * for outgoing connections to a FastCGI server.
     * By default, the operating system’s settings are in effect for the socket.
     * If the directive is set to the value “on”, the
     * SO_KEEPALIVE socket option is turned on for the socket.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_socket_keepalive
     */
     fastcgi_socket_keepalive ?: "on" | "off"


     /**
     * Enables saving of files to a disk.
     * The on parameter saves files with paths
     * corresponding to the directives
     * alias or
     * root.
     * The off parameter disables saving of files.
     * In addition, the file name can be set explicitly using the
     * string with variables:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_store
     * @example
     * ```
     * fastcgi_store /data/www$original_uri;
     * location /images/ {
     *     root                 /data/www;
     *     error_page           404 = /fetch$uri;
     * }
     * 
     * location /fetch/ {
     *     internal;
     * 
     *     fastcgi_pass         backend:9000;
     *     ...
     * 
     *     fastcgi_store        on;
     *     fastcgi_store_access user:rw group:rw all:r;
     *     fastcgi_temp_path    /data/temp;
     * 
     *     alias                /data/www/;
     * }
     * ```
     */
     fastcgi_store ?: "on" | "off" | string


     /**
     * Sets access permissions for newly created files and directories, e.g.:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_store_access
     * @example
     * ```
     * fastcgi_store_access user:rw group:rw all:r;
     * fastcgi_store_access group:rw all:r;
     * ```
     */
     fastcgi_store_access ?: any


     /**
     * Limits the size of data written to a temporary file
     * at a time, when buffering of responses from the FastCGI server
     * to temporary files is enabled.
     * By default, size is limited by two buffers set by the
     * fastcgi_buffer_size and fastcgi_buffers directives.
     * The maximum size of a temporary file is set by the
     * fastcgi_max_temp_file_size directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_temp_file_write_size
     */
     fastcgi_temp_file_write_size ?: string


     /**
     * Defines a directory for storing temporary files
     * with data received from FastCGI servers.
     * Up to three-level subdirectory hierarchy can be used underneath the specified
     * directory.
     * For example, in the following configuration
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_temp_path
     * @example
     * ```
     * fastcgi_temp_path /spool/nginx/fastcgi_temp 1 2;
     * /spool/nginx/fastcgi_temp/7/45/00000123457
     * ```
     */
     fastcgi_temp_path ?: any


     /**
     * Describes the dependency of values of the specified variable
     * on the client IP address.
     * By default, the address is taken from the $remote_addr variable,
     * but it can also be taken from another variable (0.7.27), for example:
     *
     * @context http
     * @see https://nginx.org/en/docs/http/ngx_http_geo_module.html#geo
     * @example
     * ```
     * geo $arg_remote_addr $geo {
     *     ...;
     * }
     * geo $country {
     *     default        ZZ;
     *     include        conf/geo.conf;
     *     delete         127.0.0.0/16;
     *     proxy          192.168.100.0/24;
     *     proxy          2001:0db8::/32;
     * 
     *     127.0.0.0/24   US;
     *     127.0.0.1/32   RU;
     *     10.1.0.0/16    RU;
     *     192.168.1.0/24 UK;
     * }
     * 10.2.0.0/16    RU;
     * 192.168.2.0/24 RU;
     * geo $country {
     *     ranges;
     *     default                   ZZ;
     *     127.0.0.0-127.0.0.0       US;
     *     127.0.0.1-127.0.0.1       RU;
     *     127.0.0.1-127.0.0.255     US;
     *     10.1.0.0-10.1.255.255     RU;
     *     192.168.1.0-192.168.1.255 UK;
     * }
     * ```
     */
     geo ?: any


     /**
     * Specifies a database used to determine the country
     * depending on the client IP address.
     * The following variables are available when using this database:
     *
     * @context http
     * @see https://nginx.org/en/docs/http/ngx_http_geoip_module.html#geoip_country
     */
     geoip_country ?: any


     /**
     * Specifies a database used to determine the country, region, and city
     * depending on the client IP address.
     * The following variables are available when using this database:
     *
     * @context http
     * @see https://nginx.org/en/docs/http/ngx_http_geoip_module.html#geoip_city
     */
     geoip_city ?: any


     /**
     * Specifies a database used to determine the organization
     * depending on the client IP address.
     * The following variable is available when using this database:
     *
     * @context http
     * @see https://nginx.org/en/docs/http/ngx_http_geoip_module.html#geoip_org
     */
     geoip_org ?: any


     /**
     * Defines trusted addresses.
     * When a request comes from a trusted address,
     * an address from the “X-Forwarded-For” request
     * header field will be used instead.
     *
     * @context http
     * @see https://nginx.org/en/docs/http/ngx_http_geoip_module.html#geoip_proxy
     */
     geoip_proxy ?: "address" | "CIDR"


     /**
     * If recursive search is disabled then instead of the original client
     * address that matches one of the trusted addresses, the last
     * address sent in “X-Forwarded-For” will be used.
     * If recursive search is enabled then instead of the original client
     * address that matches one of the trusted addresses, the last
     * non-trusted address sent in “X-Forwarded-For” will be used.
     *
     * @context http
     * @see https://nginx.org/en/docs/http/ngx_http_geoip_module.html#geoip_proxy_recursive
     */
     geoip_proxy_recursive ?: "on" | "off"


     /**
     * Makes outgoing connections to a gRPC server originate
     * from the specified local IP address with an optional port.
     * Parameter value can contain variables.
     * The special value off cancels the effect
     * of the grpc_bind directive
     * inherited from the previous configuration level, which allows the
     * system to auto-assign the local IP address and port.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_bind
     * @example
     * ```
     * grpc_bind $remote_addr transparent;
     * ```
     */
     grpc_bind ?: "address    [transparent ]" | "off"


     /**
     * Sets the size of the buffer used for reading the response
     * received from the gRPC server.
     * The response is passed to the client synchronously, as soon as it is received.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_buffer_size
     */
     grpc_buffer_size ?: string


     /**
     * Defines a timeout for establishing a connection with a gRPC server.
     * It should be noted that this timeout cannot usually exceed 75 seconds.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_connect_timeout
     */
     grpc_connect_timeout ?: string


     /**
     * By default,
     * nginx does not pass the header fields “Date”,
     * “Server”, and
     * “X-Accel-...” from the response of a gRPC
     * server to a client.
     * The grpc_hide_header directive sets additional fields
     * that will not be passed.
     * If, on the contrary, the passing of fields needs to be permitted,
     * the grpc_pass_header directive can be used.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_hide_header
     */
     grpc_hide_header ?: any


     /**
     * Disables processing of certain response header fields from the gRPC server.
     * The following fields can be ignored: “X-Accel-Redirect”
     * and “X-Accel-Charset”.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_ignore_headers
     */
     grpc_ignore_headers ?: any


     /**
     * Determines whether gRPC server responses with codes greater than or equal
     * to 300 should be passed to a client
     * or be intercepted and redirected to nginx for processing
     * with the error_page directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_intercept_errors
     */
     grpc_intercept_errors ?: "on" | "off"


     /**
     * Specifies in which cases a request should be passed to the next server:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_next_upstream
     */
     grpc_next_upstream ?: "error" | "timeout" | "invalid_header" | "http_500" | "http_502" | "http_503" | "http_504" | "http_403" | "http_404" | "http_429" | "non_idempotent" | string


     /**
     * Limits the time during which a request can be passed to the
     * next server.
     * The 0 value turns off this limitation.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_next_upstream_timeout
     */
     grpc_next_upstream_timeout ?: string


     /**
     * Limits the number of possible tries for passing a request to the
     * next server.
     * The 0 value turns off this limitation.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_next_upstream_tries
     */
     grpc_next_upstream_tries ?: any


     /**
     * Permits passing otherwise disabled header
     * fields from a gRPC server to a client.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_pass_header
     */
     grpc_pass_header ?: any


     /**
     * Defines a timeout for reading a response from the gRPC server.
     * The timeout is set only between two successive read operations,
     * not for the transmission of the whole response.
     * If the gRPC server does not transmit anything within this time,
     * the connection is closed.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_read_timeout
     */
     grpc_read_timeout ?: string


     /**
     * Sets a timeout for transmitting a request to the gRPC server.
     * The timeout is set only between two successive write operations,
     * not for the transmission of the whole request.
     * If the gRPC server does not receive anything within this time,
     * the connection is closed.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_send_timeout
     */
     grpc_send_timeout ?: string


     /**
     * Allows redefining or appending fields to the request header
     * passed to the gRPC server.
     * The value can contain text, variables, and their combinations.
     * These directives are inherited from the previous configuration level
     * if and only if there are no grpc_set_header directives
     * defined on the current level.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_set_header
     * @example
     * ```
     * grpc_set_header Accept-Encoding "";
     * ```
     */
     grpc_set_header ?: any


     /**
     * Configures the “TCP keepalive” behavior
     * for outgoing connections to a gRPC server.
     * By default, the operating system’s settings are in effect for the socket.
     * If the directive is set to the value “on”, the
     * SO_KEEPALIVE socket option is turned on for the socket.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_socket_keepalive
     */
     grpc_socket_keepalive ?: "on" | "off"


     /**
     * Specifies a file with the certificate in the PEM format
     * used for authentication to a gRPC SSL server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_ssl_certificate
     */
     grpc_ssl_certificate ?: any


     /**
     * Specifies a file with the secret key in the PEM format
     * used for authentication to a gRPC SSL server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_ssl_certificate_key
     */
     grpc_ssl_certificate_key ?: any


     /**
     * Specifies the enabled ciphers for requests to a gRPC SSL server.
     * The ciphers are specified in the format understood by the OpenSSL library.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_ssl_ciphers
     */
     grpc_ssl_ciphers ?: any


     /**
     * Sets arbitrary OpenSSL configuration
     * commands
     * when establishing a connection with the gRPC SSL server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_ssl_conf_command
     */
     grpc_ssl_conf_command ?: any


     /**
     * Specifies a file with revoked certificates (CRL)
     * in the PEM format used to verify
     * the certificate of the gRPC SSL server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_ssl_crl
     */
     grpc_ssl_crl ?: any


     /**
     * Allows overriding the server name used to
     * verify
     * the certificate of the gRPC SSL server and to be
     * passed through SNI
     * when establishing a connection with the gRPC SSL server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_ssl_name
     */
     grpc_ssl_name ?: any


     /**
     * Specifies a file with passphrases for
     * secret keys
     * where each passphrase is specified on a separate line.
     * Passphrases are tried in turn when loading the key.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_ssl_password_file
     */
     grpc_ssl_password_file ?: any


     /**
     * Enables the specified protocols for requests to a gRPC SSL server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_ssl_protocols
     */
     grpc_ssl_protocols ?: any


     /**
     * Enables or disables passing of the server name through
     * TLS
     * Server Name Indication extension (SNI, RFC 6066)
     * when establishing a connection with the gRPC SSL server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_ssl_server_name
     */
     grpc_ssl_server_name ?: "on" | "off"


     /**
     * Determines whether SSL sessions can be reused when working with
     * the gRPC server.
     * If the errors
     * “SSL3_GET_FINISHED:digest check failed”
     * appear in the logs, try disabling session reuse.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_ssl_session_reuse
     */
     grpc_ssl_session_reuse ?: "on" | "off"


     /**
     * Specifies a file with trusted CA certificates in the PEM format
     * used to verify
     * the certificate of the gRPC SSL server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_ssl_trusted_certificate
     */
     grpc_ssl_trusted_certificate ?: any


     /**
     * Enables or disables verification of the gRPC SSL server certificate.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_ssl_verify
     */
     grpc_ssl_verify ?: "on" | "off"


     /**
     * Sets the verification depth in the gRPC SSL server certificates chain.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_ssl_verify_depth
     */
     grpc_ssl_verify_depth ?: any


     /**
     * Enables or disables decompression of gzipped responses
     * for clients that lack gzip support.
     * If enabled, the following directives are also taken into account
     * when determining if clients support gzip:
     * gzip_http_version,
     * gzip_proxied, and
     * gzip_disable.
     * See also the gzip_vary directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_gunzip_module.html#gunzip
     */
     gunzip ?: "on" | "off"


     /**
     * Sets the number and size of buffers
     * used to decompress a response.
     * By default, the buffer size is equal to one memory page.
     * This is either 4K or 8K, depending on a platform.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_gunzip_module.html#gunzip_buffers
     */
     gunzip_buffers ?: any


     /**
     * Enables or disables gzipping of responses.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_gzip_module.html#gzip
     */
     gzip ?: "on" | "off"


     /**
     * Sets the number and size of buffers
     * used to compress a response.
     * By default, the buffer size is equal to one memory page.
     * This is either 4K or 8K, depending on a platform.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_gzip_module.html#gzip_buffers
     */
     gzip_buffers ?: any


     /**
     * Sets a gzip compression level of a response.
     * Acceptable values are in the range from 1 to 9.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_gzip_module.html#gzip_comp_level
     */
     gzip_comp_level ?: any


     /**
     * Disables gzipping of responses for requests with
     * “User-Agent” header fields matching
     * any of the specified regular expressions.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_gzip_module.html#gzip_disable
     */
     gzip_disable ?: any


     /**
     * Sets the minimum HTTP version of a request required to compress a response.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_gzip_module.html#gzip_http_version
     */
     gzip_http_version ?: "1.0" | "1.1"


     /**
     * Sets the minimum length of a response that will be gzipped.
     * The length is determined only from the “Content-Length”
     * response header field.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_gzip_module.html#gzip_min_length
     */
     gzip_min_length ?: any


     /**
     * Enables or disables gzipping of responses for proxied
     * requests depending on the request and response.
     * The fact that the request is proxied is determined by
     * the presence of the “Via” request header field.
     * The directive accepts multiple parameters:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_gzip_module.html#gzip_proxied
     */
     gzip_proxied ?: "off" | "expired" | "no-cache" | "no-store" | "private" | "no_last_modified" | "no_etag" | "auth" | string


     /**
     * Enables gzipping of responses for the specified MIME types in addition
     * to “text/html”.
     * The special value “*” matches any MIME type (0.8.29).
     * Responses with the “text/html” type are always compressed.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_gzip_module.html#gzip_types
     */
     gzip_types ?: any


     /**
     * Enables or disables inserting the “Vary: Accept-Encoding”
     * response header field if the directives
     * gzip,
     * gzip_static, or
     * gunzip
     * are active.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_gzip_module.html#gzip_vary
     */
     gzip_vary ?: "on" | "off"


     /**
     * Enables (“on”) or disables (“off”)
     * checking the existence of precompressed files.
     * The following directives are also taken into account:
     * gzip_http_version,
     * gzip_proxied,
     * gzip_disable,
     * and gzip_vary.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_gzip_static_module.html#gzip_static
     */
     gzip_static ?: "on" | "off" | "always"


     /**
     * Adds the specified field to a response header provided that
     * the response code equals 200, 201 (1.3.10), 204, 206, 301, 302, 303, 304,
     * 307 (1.1.16, 1.0.13), or 308 (1.13.0).
     * Parameter value can contain variables.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_headers_module.html#add_header
     */
     add_header ?: any


     /**
     * Adds the specified field to the end of a response provided that
     * the response code equals 200, 201, 206, 301, 302, 303, 307, or 308.
     * Parameter value can contain variables.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_headers_module.html#add_trailer
     */
     add_trailer ?: any


     /**
     * Enables or disables adding or modifying the “Expires”
     * and “Cache-Control” response header fields provided that
     * the response code equals 200, 201 (1.3.10), 204, 206, 301, 302, 303, 304,
     * 307 (1.1.16, 1.0.13), or 308 (1.13.0).
     * The parameter can be a positive or negative
     * time.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_headers_module.html#expires
     * @example
     * ```
     * expires @15h30m;
     * map $sent_http_content_type $expires {
     *     default         off;
     *     application/pdf 42d;
     *     ~image/         max;
     * }
     * 
     * expires $expires;
     * ```
     */
     expires ?: "[modified] timeexpires     epoch" | "max" | "off"


     /**
     * Sets the maximum number and size of buffers
     * that are used for reading and writing data frames.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_hls_module.html#hls_buffers
     */
     hls_buffers ?: any


     /**
     * Adds arguments from a playlist request to URIs of fragments.
     * This may be useful for performing client authorization at the moment of
     * requesting a fragment, or when protecting an HLS stream with the
     * ngx_http_secure_link_module
     * module.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_hls_module.html#hls_forward_args
     * @example
     * ```
     * #EXTM3U
     * #EXT-X-VERSION:3
     * #EXT-X-TARGETDURATION:15
     * #EXT-X-PLAYLIST-TYPE:VOD
     * 
     * #EXTINF:9.333,
     * test.mp4.ts?start=0.000&end=9.333&a=1&b=2
     * #EXTINF:7.167,
     * test.mp4.ts?start=9.333&end=16.500&a=1&b=2
     * #EXTINF:5.416,
     * test.mp4.ts?start=16.500&end=21.916&a=1&b=2
     * #EXTINF:5.500,
     * test.mp4.ts?start=21.916&end=27.416&a=1&b=2
     * #EXTINF:15.167,
     * test.mp4.ts?start=27.416&end=42.583&a=1&b=2
     * #EXTINF:9.626,
     * test.mp4.ts?start=42.583&end=52.209&a=1&b=2
     * 
     * #EXT-X-ENDLIST
     * http {
     *     ...
     * 
     *     map $uri $hls_uri {
     *         ~^(?<base_uri>.*).m3u8$ $base_uri;
     *         ~^(?<base_uri>.*).ts$   $base_uri;
     *         default                 $uri;
     *     }
     * 
     *     server {
     *         ...
     * 
     *         location /hls/ {
     *             hls;
     *             hls_forward_args on;
     * 
     *             alias /var/videos/;
     * 
     *             secure_link $arg_md5,$arg_expires;
     *             secure_link_md5 "$secure_link_expires$hls_uri$remote_addr secret";
     * 
     *             if ($secure_link = "") {
     *                 return 403;
     *             }
     * 
     *             if ($secure_link = "0") {
     *                 return 410;
     *             }
     *         }
     *     }
     * }
     * ```
     */
     hls_forward_args ?: "on" | "off"


     /**
     * Defines the default fragment length for playlist URIs requested without the
     * “len” argument.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_hls_module.html#hls_fragment
     */
     hls_fragment ?: string


     /**
     * Sets the initial size of the buffer used for
     * processing MP4 and MOV files.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_hls_module.html#hls_mp4_buffer_size
     */
     hls_mp4_buffer_size ?: string


     /**
     * During metadata processing, a larger buffer may become necessary.
     * Its size cannot exceed the specified size,
     * or else nginx will return the server error
     * 500 (Internal Server Error),
     * and log the following message:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_hls_module.html#hls_mp4_max_buffer_size
     * @example
     * ```
     * "/some/movie/file.mp4" mp4 moov atom is too large:
     * 12583268, you may want to increase hls_mp4_max_buffer_size
     * ```
     */
     hls_mp4_max_buffer_size ?: string


     /**
     * Sets the maximum size of the buffer used for reading images.
     * When the size is exceeded the server returns error
     * 415 (Unsupported Media Type).
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_image_filter_module.html#image_filter_buffer
     */
     image_filter_buffer ?: string


     /**
     * If enabled, final images will be interlaced.
     * For JPEG, final images will be in “progressive JPEG” format.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_image_filter_module.html#image_filter_interlace
     */
     image_filter_interlace ?: "on" | "off"


     /**
     * Sets the desired quality of the transformed JPEG images.
     * Acceptable values are in the range from 1 to 100.
     * Lesser values usually imply both lower image quality and less data to transfer.
     * The maximum recommended value is 95.
     * Parameter value can contain variables.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_image_filter_module.html#image_filter_jpeg_quality
     */
     image_filter_jpeg_quality ?: any


     /**
     * Increases sharpness of the final image.
     * The sharpness percentage can exceed 100.
     * The zero value disables sharpening.
     * Parameter value can contain variables.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_image_filter_module.html#image_filter_sharpen
     */
     image_filter_sharpen ?: any


     /**
     * Defines whether transparency should be preserved when transforming
     * GIF images or PNG images with colors specified by a palette.
     * The loss of transparency results in images of a better quality.
     * The alpha channel transparency in PNG is always preserved.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_image_filter_module.html#image_filter_transparency
     */
     image_filter_transparency ?: "on" | "off"


     /**
     * Sets the desired quality of the transformed WebP images.
     * Acceptable values are in the range from 1 to 100.
     * Lesser values usually imply both lower image quality and less data to transfer.
     * Parameter value can contain variables.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_image_filter_module.html#image_filter_webp_quality
     */
     image_filter_webp_quality ?: any


     /**
     * Defines files that will be used as an index.
     * The file name can contain variables.
     * Files are checked in the specified order.
     * The last element of the list can be a file with an absolute path.
     * Example:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_index_module.html#index
     * @example
     * ```
     * index index.$geo.html index.0.html /index.html;
     * location = / {
     *     index index.html;
     * }
     * 
     * location / {
     *     ...
     * }
     * ```
     */
     index ?: any


     /**
     * Specifies the enabled ciphers for HTTPS requests
     * with Fetch API.
     * The ciphers are specified in the format understood by the
     * OpenSSL library.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_js_module.html#js_fetch_ciphers
     */
     js_fetch_ciphers ?: any


     /**
     * Enables the specified protocols for HTTPS requests
     * with Fetch API.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_js_module.html#js_fetch_protocols
     */
     js_fetch_protocols ?: any


     /**
     * Specifies a file with trusted CA certificates in the PEM format
     * used to
     * verify
     * the HTTPS certificate
     * with Fetch API.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_js_module.html#js_fetch_trusted_certificate
     */
     js_fetch_trusted_certificate ?: any


     /**
     * Sets the verification depth in the HTTPS server certificates chain
     * with Fetch API.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_js_module.html#js_fetch_verify_depth
     */
     js_fetch_verify_depth ?: any


     /**
     * Imports a module that implements location and variable handlers in njs.
     * The export_name is used as a namespace
     * to access module functions.
     * If the export_name is not specified,
     * the module name will be used as a namespace.
     *
     * @context http
     * @see https://nginx.org/en/docs/http/ngx_http_js_module.html#js_import
     * @example
     * ```
     * js_import http.js;
     * ```
     */
     js_import ?: "module.js" | "export_name from module.js"


     /**
     * Specifies a file that implements location and variable handlers in njs:
     *
     * @context http
     * @see https://nginx.org/en/docs/http/ngx_http_js_module.html#js_include
     * @example
     * ```
     * nginx.conf:
     * js_include http.js;
     * location   /version {
     *     js_content version;
     * }
     * 
     * http.js:
     * function version(r) {
     *     r.return(200, njs.version);
     * }
     * ```
     */
     js_include ?: any


     /**
     * Sets an additional path for njs modules.
     *
     * @context http
     * @see https://nginx.org/en/docs/http/ngx_http_js_module.html#js_path
     */
     js_path ?: string


     /**
     * Sets an njs function
     * for the specified variable.
     * Since 0.4.0,
     * a module function can be referenced.
     *
     * @context http
     * @see https://nginx.org/en/docs/http/ngx_http_js_module.html#js_set
     */
     js_set ?: "$variable function" | "module.function"


     /**
     * Declares
     * a writable
     * variable.
     * The value can contain text, variables, and their combination.
     * The variable is not overwritten after a redirect
     * unlike variables created with the
     * set directive.
     *
     * @context http
     * @see https://nginx.org/en/docs/http/ngx_http_js_module.html#js_var
     */
     js_var ?: any


     /**
     * Creates a new $variable whose value
     * is looked up by the key in the key-value database.
     * Matching rules are defined by the
     * type parameter of the
     * keyval_zone directive.
     * The database is stored in a shared memory zone
     * specified by the zone parameter.
     *
     * @context http
     * @see https://nginx.org/en/docs/http/ngx_http_keyval_module.html#keyval
     */
     keyval ?: any


     /**
     * Sets the name and size of the shared memory zone
     * that keeps the key-value database.
     * Key-value pairs are managed by the
     * API.
     *
     * @context http
     * @see https://nginx.org/en/docs/http/ngx_http_keyval_module.html#keyval_zone
     * @example
     * ```
     * keyval_zone zone=one:32k state=/var/lib/nginx/state/one.keyval; # path for Linux
     * keyval_zone zone=one:32k state=/var/db/nginx/state/one.keyval;  # path for FreeBSD
     * ```
     */
     keyval_zone ?: "zone=name:size    [state=file]    [timeout=time]    [type=string" | "ip" | "prefix]    [sync]"


     /**
     * Sets the shared memory zone
     * and the maximum allowed number of connections for a given key value.
     * When this limit is exceeded, the server will return the
     * error
     * in reply to a request.
     * For example, the directives
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_limit_conn_module.html#limit_conn
     * @example
     * ```
     * limit_conn_zone $binary_remote_addr zone=addr:10m;
     * 
     * server {
     *     location /download/ {
     *         limit_conn addr 1;
     *     }
     * limit_conn_zone $binary_remote_addr zone=perip:10m;
     * limit_conn_zone $server_name zone=perserver:10m;
     * 
     * server {
     *     ...
     *     limit_conn perip 10;
     *     limit_conn perserver 100;
     * }
     * ```
     */
     limit_conn ?: any


     /**
     * Enables the dry run mode.
     * In this mode, the number of connections is not limited, however,
     * in the shared memory zone, the number of excessive connections is accounted
     * as usual.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_limit_conn_module.html#limit_conn_dry_run
     */
     limit_conn_dry_run ?: "on" | "off"


     /**
     * Sets the desired logging level for cases when the server
     * limits the number of connections.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_limit_conn_module.html#limit_conn_log_level
     */
     limit_conn_log_level ?: "info" | "notice" | "warn" | "error"


     /**
     * Sets the status code to return in response to rejected requests.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_limit_conn_module.html#limit_conn_status
     */
     limit_conn_status ?: any


     /**
     * Sets parameters for a shared memory zone
     * that will keep states for various keys.
     * In particular, the state includes the current number of connections.
     * The key can contain text, variables, and their combination.
     * Requests with an empty key value are not accounted.
     *
     * @context http
     * @see https://nginx.org/en/docs/http/ngx_http_limit_conn_module.html#limit_conn_zone
     * @example
     * ```
     * limit_conn_zone $binary_remote_addr zone=addr:10m;
     * ```
     */
     limit_conn_zone ?: any


     /**
     * This directive was made obsolete in version 1.1.8
     * and was removed in version 1.7.6.
     * An equivalent limit_conn_zone directive
     * with a changed syntax should be used instead:
     *
     * @context http
     * @see https://nginx.org/en/docs/http/ngx_http_limit_conn_module.html#limit_zone
     */
     limit_zone ?: any


     /**
     * Sets the shared memory zone
     * and the maximum burst size of requests.
     * If the requests rate exceeds the rate configured for a zone,
     * their processing is delayed such that requests are processed
     * at a defined rate.
     * Excessive requests are delayed until their number exceeds the
     * maximum burst size
     * in which case the request is terminated with an
     * error.
     * By default, the maximum burst size is equal to zero.
     * For example, the directives
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_limit_req_module.html#limit_req
     * @example
     * ```
     * limit_req_zone $binary_remote_addr zone=one:10m rate=1r/s;
     * 
     * server {
     *     location /search/ {
     *         limit_req zone=one burst=5;
     *     }
     * limit_req zone=one burst=5 nodelay;
     * limit_req_zone $binary_remote_addr zone=perip:10m rate=1r/s;
     * limit_req_zone $server_name zone=perserver:10m rate=10r/s;
     * 
     * server {
     *     ...
     *     limit_req zone=perip burst=5 nodelay;
     *     limit_req zone=perserver burst=10;
     * }
     * ```
     */
     limit_req ?: "zone=name    [burst=number]    [nodelay" | "delay=number]"


     /**
     * Enables the dry run mode.
     * In this mode, requests processing rate is not limited, however,
     * in the shared memory zone, the number of excessive requests is accounted
     * as usual.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_limit_req_module.html#limit_req_dry_run
     */
     limit_req_dry_run ?: "on" | "off"


     /**
     * Sets the desired logging level
     * for cases when the server refuses to process requests
     * due to rate exceeding,
     * or delays request processing.
     * Logging level for delays is one point less than for refusals; for example,
     * if “limit_req_log_level notice” is specified,
     * delays are logged with the info level.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_limit_req_module.html#limit_req_log_level
     */
     limit_req_log_level ?: "info" | "notice" | "warn" | "error"


     /**
     * Sets the status code to return in response to rejected requests.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_limit_req_module.html#limit_req_status
     */
     limit_req_status ?: any


     /**
     * Sets parameters for a shared memory zone
     * that will keep states for various keys.
     * In particular, the state stores the current number of excessive requests.
     * The key can contain text, variables, and their combination.
     * Requests with an empty key value are not accounted.
     *
     * @context http
     * @see https://nginx.org/en/docs/http/ngx_http_limit_req_module.html#limit_req_zone
     * @example
     * ```
     * limit_req_zone $binary_remote_addr zone=one:10m rate=1r/s;
     * ```
     */
     limit_req_zone ?: any


     /**
     * Sets the path, format, and configuration for a buffered log write.
     * Several logs can be specified on the same configuration level.
     * Logging to syslog
     * can be configured by specifying
     * the “syslog:” prefix in the first parameter.
     * The special value off cancels all
     * access_log directives on the current level.
     * If the format is not specified then the predefined
     * “combined” format is used.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_log_module.html#access_log
     * @example
     * ```
     * access_log /path/to/log.gz combined gzip flush=5m;
     * map $status $loggable {
     *     ~^[23]  0;
     *     default 1;
     * }
     * 
     * access_log /path/to/access.log combined if=$loggable;
     * ```
     */
     access_log ?: any


     /**
     * Specifies log format.
     *
     * @context http
     * @see https://nginx.org/en/docs/http/ngx_http_log_module.html#log_format
     * @example
     * ```
     * log_format combined '$remote_addr - $remote_user [$time_local] '
     *                     '"$request" $status $body_bytes_sent '
     *                     '"$http_referer" "$http_user_agent"';
     * ```
     */
     log_format ?: "name    [escape=default" | "json" | string


     /**
     * Defines a cache that stores the file descriptors of frequently used logs
     * whose names contain variables.
     * The directive has the following parameters:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_log_module.html#open_log_file_cache
     * @example
     * ```
     * open_log_file_cache max=1000 inactive=20s valid=1m min_uses=2;
     * ```
     */
     open_log_file_cache ?: any


     /**
     * Creates a new variable whose value
     * depends on values of one or more of the source variables
     * specified in the first parameter.
     *
     * @context http
     * @see https://nginx.org/en/docs/http/ngx_http_map_module.html#map
     */
     map ?: any


     /**
     * Sets the bucket size for the map variables hash tables.
     * Default value depends on the processor’s cache line size.
     * The details of setting up hash tables are provided in a separate
     * document.
     *
     * @context http
     * @see https://nginx.org/en/docs/http/ngx_http_map_module.html#map_hash_bucket_size
     */
     map_hash_bucket_size ?: string


     /**
     * Sets the maximum size of the map variables
     * hash tables.
     * The details of setting up hash tables are provided in a separate
     * document.
     *
     * @context http
     * @see https://nginx.org/en/docs/http/ngx_http_map_module.html#map_hash_max_size
     */
     map_hash_max_size ?: string


     /**
     * Makes outgoing connections to a memcached server originate
     * from the specified local IP address with an optional port (1.11.2).
     * Parameter value can contain variables (1.3.12).
     * The special value off (1.3.12) cancels the effect
     * of the memcached_bind directive
     * inherited from the previous configuration level, which allows the
     * system to auto-assign the local IP address and port.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_memcached_module.html#memcached_bind
     * @example
     * ```
     * memcached_bind $remote_addr transparent;
     * ```
     */
     memcached_bind ?: "address    [transparent ]" | "off"


     /**
     * Sets the size of the buffer used for reading the response
     * received from the memcached server.
     * The response is passed to the client synchronously, as soon as it is received.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_memcached_module.html#memcached_buffer_size
     */
     memcached_buffer_size ?: string


     /**
     * Defines a timeout for establishing a connection with a memcached server.
     * It should be noted that this timeout cannot usually exceed 75 seconds.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_memcached_module.html#memcached_connect_timeout
     */
     memcached_connect_timeout ?: string


     /**
     * Enables byte-range support
     * for both cached and uncached responses from the memcached server
     * regardless of the “Accept-Ranges” field in these responses.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_memcached_module.html#memcached_force_ranges
     */
     memcached_force_ranges ?: "on" | "off"


     /**
     * Enables the test for the flag presence in the memcached
     * server response and sets the “Content-Encoding”
     * response header field to “gzip”
     * if the flag is set.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_memcached_module.html#memcached_gzip_flag
     */
     memcached_gzip_flag ?: any


     /**
     * Specifies in which cases a request should be passed to the next server:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_memcached_module.html#memcached_next_upstream
     */
     memcached_next_upstream ?: "error" | "timeout" | "invalid_response" | "not_found" | string


     /**
     * Limits the time during which a request can be passed to the
     * next server.
     * The 0 value turns off this limitation.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_memcached_module.html#memcached_next_upstream_timeout
     */
     memcached_next_upstream_timeout ?: string


     /**
     * Limits the number of possible tries for passing a request to the
     * next server.
     * The 0 value turns off this limitation.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_memcached_module.html#memcached_next_upstream_tries
     */
     memcached_next_upstream_tries ?: any


     /**
     * Defines a timeout for reading a response from the memcached server.
     * The timeout is set only between two successive read operations,
     * not for the transmission of the whole response.
     * If the memcached server does not transmit anything within this time,
     * the connection is closed.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_memcached_module.html#memcached_read_timeout
     */
     memcached_read_timeout ?: string


     /**
     * Sets a timeout for transmitting a request to the memcached server.
     * The timeout is set only between two successive write operations,
     * not for the transmission of the whole request.
     * If the memcached server does not receive anything within this time,
     * the connection is closed.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_memcached_module.html#memcached_send_timeout
     */
     memcached_send_timeout ?: string


     /**
     * Configures the “TCP keepalive” behavior
     * for outgoing connections to a memcached server.
     * By default, the operating system’s settings are in effect for the socket.
     * If the directive is set to the value “on”, the
     * SO_KEEPALIVE socket option is turned on for the socket.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_memcached_module.html#memcached_socket_keepalive
     */
     memcached_socket_keepalive ?: "on" | "off"


     /**
     * Sets the URI to which an original request will be mirrored.
     * Several mirrors can be specified on the same configuration level.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_mirror_module.html#mirror
     */
     mirror ?: "uri" | "off"


     /**
     * Indicates whether the client request body is mirrored.
     * When enabled, the client request body will be read
     * prior to creating mirror subrequests.
     * In this case, unbuffered client request body proxying
     * set by the
     * proxy_request_buffering,
     * fastcgi_request_buffering,
     * scgi_request_buffering,
     * and
     * uwsgi_request_buffering
     * directives will be disabled.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_mirror_module.html#mirror_request_body
     * @example
     * ```
     * location / {
     *     mirror /mirror;
     *     mirror_request_body off;
     *     proxy_pass http://backend;
     * }
     * 
     * location = /mirror {
     *     internal;
     *     proxy_pass http://log_backend;
     *     proxy_pass_request_body off;
     *     proxy_set_header Content-Length "";
     *     proxy_set_header X-Original-URI $request_uri;
     * }
     * ```
     */
     mirror_request_body ?: "on" | "off"


     /**
     * Sets the initial size of the buffer used for
     * processing MP4 files.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_mp4_module.html#mp4_buffer_size
     */
     mp4_buffer_size ?: string


     /**
     * During metadata processing, a larger buffer may become necessary.
     * Its size cannot exceed the specified size,
     * or else nginx will return the
     * 500 (Internal Server Error) server error,
     * and log the following message:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_mp4_module.html#mp4_max_buffer_size
     * @example
     * ```
     * "/some/movie/file.mp4" mp4 moov atom is too large:
     * 12583268, you may want to increase mp4_max_buffer_size
     * ```
     */
     mp4_max_buffer_size ?: string


     /**
     * Limits the rate of response transmission to a client.
     * The rate is limited based on the average bitrate of the
     * MP4 file served.
     * To calculate the rate, the bitrate is multiplied by the specified
     * factor.
     * The special value “on” corresponds to the factor of 1.1.
     * The special value “off” disables rate limiting.
     * The limit is set per a request, and so if a client simultaneously opens
     * two connections, the overall rate will be twice as much
     * as the specified limit.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_mp4_module.html#mp4_limit_rate
     */
     mp4_limit_rate ?: "on" | "off" | "factor"


     /**
     * Sets the initial amount of media data (measured in playback time)
     * after which the further transmission of the response to a client
     * will be rate limited.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_mp4_module.html#mp4_limit_rate_after
     */
     mp4_limit_rate_after ?: string


     /**
     * Sets an additional path for Perl modules.
     *
     * @context http
     * @see https://nginx.org/en/docs/http/ngx_http_perl_module.html#perl_modules
     */
     perl_modules ?: string


     /**
     * Defines the name of a module that will be loaded during each
     * reconfiguration.
     * Several perl_require directives can be present.
     *
     * @context http
     * @see https://nginx.org/en/docs/http/ngx_http_perl_module.html#perl_require
     */
     perl_require ?: any


     /**
     * Installs a Perl handler for the specified variable.
     *
     * @context http
     * @see https://nginx.org/en/docs/http/ngx_http_perl_module.html#perl_set
     * @example
     * ```
     * <!--# perl sub="module::function" arg="parameter1" arg="parameter2" ...
     * -->
     * ```
     */
     perl_set ?: "$variable    module::function" | "'sub { ... }'"


     /**
     * Makes outgoing connections to a proxied server originate
     * from the specified local IP address with an optional port (1.11.2).
     * Parameter value can contain variables (1.3.12).
     * The special value off (1.3.12) cancels the effect
     * of the proxy_bind directive
     * inherited from the previous configuration level, which allows the
     * system to auto-assign the local IP address and port.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_bind
     * @example
     * ```
     * proxy_bind $remote_addr transparent;
     * ```
     */
     proxy_bind ?: "address    [transparent]" | "off"


     /**
     * Sets the size of the buffer used for reading the first part
     * of the response received from the proxied server.
     * This part usually contains a small response header.
     * By default, the buffer size is equal to one memory page.
     * This is either 4K or 8K, depending on a platform.
     * It can be made smaller, however.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_buffer_size
     */
     proxy_buffer_size ?: string


     /**
     * Enables or disables buffering of responses from the proxied server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_buffering
     */
     proxy_buffering ?: "on" | "off"


     /**
     * Sets the number and size of the
     * buffers used for reading a response from the proxied server,
     * for a single connection.
     * By default, the buffer size is equal to one memory page.
     * This is either 4K or 8K, depending on a platform.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_buffers
     */
     proxy_buffers ?: any


     /**
     * When buffering of responses from the proxied
     * server is enabled, limits the total size of buffers that
     * can be busy sending a response to the client while the response is not
     * yet fully read.
     * In the meantime, the rest of the buffers can be used for reading the response
     * and, if needed, buffering part of the response to a temporary file.
     * By default, size is limited by the size of two buffers set by the
     * proxy_buffer_size and proxy_buffers directives.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_busy_buffers_size
     */
     proxy_busy_buffers_size ?: string


     /**
     * Defines a shared memory zone used for caching.
     * The same zone can be used in several places.
     * Parameter value can contain variables (1.7.9).
     * The off parameter disables caching inherited
     * from the previous configuration level.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cache
     */
     proxy_cache ?: "zone" | "off"


     /**
     * Allows starting a background subrequest
     * to update an expired cache item,
     * while a stale cached response is returned to the client.
     * Note that it is necessary to
     * allow
     * the usage of a stale cached response when it is being updated.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cache_background_update
     */
     proxy_cache_background_update ?: "on" | "off"


     /**
     * Defines conditions under which the response will not be taken from a cache.
     * If at least one value of the string parameters is not empty and is not
     * equal to “0” then the response will not be taken from the cache:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cache_bypass
     * @example
     * ```
     * proxy_cache_bypass $cookie_nocache $arg_nocache$arg_comment;
     * proxy_cache_bypass $http_pragma    $http_authorization;
     * ```
     */
     proxy_cache_bypass ?: any


     /**
     * Enables or disables the conversion of the “HEAD” method
     * to “GET” for caching.
     * When the conversion is disabled, the
     * cache key should be configured
     * to include the $request_method.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cache_convert_head
     */
     proxy_cache_convert_head ?: "on" | "off"


     /**
     * Defines a key for caching, for example
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cache_key
     * @example
     * ```
     * proxy_cache_key "$host$request_uri $cookie_user";
     * proxy_cache_key $scheme$proxy_host$uri$is_args$args;
     * ```
     */
     proxy_cache_key ?: any


     /**
     * When enabled, only one request at a time will be allowed to populate
     * a new cache element identified according to the proxy_cache_key
     * directive by passing a request to a proxied server.
     * Other requests of the same cache element will either wait
     * for a response to appear in the cache or the cache lock for
     * this element to be released, up to the time set by the
     * proxy_cache_lock_timeout directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cache_lock
     */
     proxy_cache_lock ?: "on" | "off"


     /**
     * If the last request passed to the proxied server
     * for populating a new cache element
     * has not completed for the specified time,
     * one more request may be passed to the proxied server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cache_lock_age
     */
     proxy_cache_lock_age ?: string


     /**
     * Sets a timeout for proxy_cache_lock.
     * When the time expires,
     * the request will be passed to the proxied server,
     * however, the response will not be cached.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cache_lock_timeout
     */
     proxy_cache_lock_timeout ?: string


     /**
     * Sets an offset in bytes for byte-range requests.
     * If the range is beyond the offset,
     * the range request will be passed to the proxied server
     * and the response will not be cached.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cache_max_range_offset
     */
     proxy_cache_max_range_offset ?: any


     /**
     * If the client request method is listed in this directive then
     * the response will be cached.
     * “GET” and “HEAD” methods are always
     * added to the list, though it is recommended to specify them explicitly.
     * See also the proxy_no_cache directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cache_methods
     */
     proxy_cache_methods ?: "GET" | "HEAD" | string


     /**
     * Sets the number of requests after which the response
     * will be cached.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cache_min_uses
     */
     proxy_cache_min_uses ?: any


     /**
     * Sets the path and other parameters of a cache.
     * Cache data are stored in files.
     * The file name in a cache is a result of
     * applying the MD5 function to the
     * cache key.
     * The levels parameter defines hierarchy levels of a cache:
     * from 1 to 3, each level accepts values 1 or 2.
     * For example, in the following configuration
     *
     * @context http
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cache_path
     * @example
     * ```
     * proxy_cache_path /data/nginx/cache levels=1:2 keys_zone=one:10m;
     * /data/nginx/cache/c/29/b7f54b2df7773722d382f4809d65029c
     * ```
     */
     proxy_cache_path ?: "path    [levels=levels]    [use_temp_path=on" | "off]    keys_zone=name:size    [inactive=time]    [max_size=size]    [min_free=size]    [manager_files=number]    [manager_sleep=time]    [manager_threshold=time]    [loader_files=number]    [loader_sleep=time]    [loader_threshold=time]    [purger=on" | "off]    [purger_files=number]    [purger_sleep=time]    [purger_threshold=time]"


     /**
     * Defines conditions under which the request will be considered a cache
     * purge request.
     * If at least one value of the string parameters is not empty and is not equal
     * to “0” then the cache entry with a corresponding
     * cache key is removed.
     * The result of successful operation is indicated by returning
     * the 204 (No Content) response.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cache_purge
     * @example
     * ```
     * proxy_cache_path /data/nginx/cache keys_zone=cache_zone:10m;
     * 
     * map $request_method $purge_method {
     *     PURGE   1;
     *     default 0;
     * }
     * 
     * server {
     *     ...
     *     location / {
     *         proxy_pass http://backend;
     *         proxy_cache cache_zone;
     *         proxy_cache_key $uri;
     *         proxy_cache_purge $purge_method;
     *     }
     * }
     * ```
     */
     proxy_cache_purge ?: any


     /**
     * Enables revalidation of expired cache items using conditional requests with
     * the “If-Modified-Since” and “If-None-Match”
     * header fields.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cache_revalidate
     */
     proxy_cache_revalidate ?: "on" | "off"


     /**
     * Determines in which cases a stale cached response can be used
     * during communication with the proxied server.
     * The directive’s parameters match the parameters of the
     * proxy_next_upstream directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cache_use_stale
     */
     proxy_cache_use_stale ?: "error" | "timeout" | "invalid_header" | "updating" | "http_500" | "http_502" | "http_503" | "http_504" | "http_403" | "http_404" | "http_429" | string


     /**
     * Sets caching time for different response codes.
     * For example, the following directives
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cache_valid
     * @example
     * ```
     * proxy_cache_valid 200 302 10m;
     * proxy_cache_valid 404      1m;
     * proxy_cache_valid 5m;
     * proxy_cache_valid 200 302 10m;
     * proxy_cache_valid 301      1h;
     * proxy_cache_valid any      1m;
     * ```
     */
     proxy_cache_valid ?: any


     /**
     * Defines a timeout for establishing a connection with a proxied server.
     * It should be noted that this timeout cannot usually exceed 75 seconds.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_connect_timeout
     */
     proxy_connect_timeout ?: string


     /**
     * Sets a text that should be changed in the domain
     * attribute of the “Set-Cookie” header fields of a
     * proxied server response.
     * Suppose a proxied server returned the “Set-Cookie”
     * header field with the attribute
     * “domain=localhost”.
     * The directive
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cookie_domain
     * @example
     * ```
     * proxy_cookie_domain localhost example.org;
     * proxy_cookie_domain www.$host $host;
     * proxy_cookie_domain ~\.(?P<sl_domain>[-0-9a-z]+\.[a-z]+)$ $sl_domain;
     * proxy_cookie_domain localhost example.org;
     * proxy_cookie_domain ~\.([a-z]+\.[a-z]+)$ $1;
     * ```
     */
     proxy_cookie_domain ?: any


     /**
     * Sets one or more flags for the cookie.
     * The cookie can contain text, variables, and their combinations.
     * The flag
     * can contain text, variables, and their combinations (1.19.8).
     * The
     * secure,
     * httponly,
     * samesite=strict,
     * samesite=lax,
     * samesite=none
     * parameters add the corresponding flags.
     * The
     * nosecure,
     * nohttponly,
     * nosamesite
     * parameters remove the corresponding flags.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cookie_flags
     * @example
     * ```
     * proxy_cookie_flags one httponly;
     * proxy_cookie_flags ~ nosecure samesite=strict;
     * ```
     */
     proxy_cookie_flags ?: "off" | "cookie    [flag ...]"


     /**
     * Sets a text that should be changed in the path
     * attribute of the “Set-Cookie” header fields of a
     * proxied server response.
     * Suppose a proxied server returned the “Set-Cookie”
     * header field with the attribute
     * “path=/two/some/uri/”.
     * The directive
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cookie_path
     * @example
     * ```
     * proxy_cookie_path /two/ /;
     * proxy_cookie_path $uri /some$uri;
     * proxy_cookie_path ~*^/user/([^/]+) /u/$1;
     * proxy_cookie_path /one/ /;
     * proxy_cookie_path / /two/;
     * ```
     */
     proxy_cookie_path ?: any


     /**
     * Enables byte-range support
     * for both cached and uncached responses from the proxied server
     * regardless of the “Accept-Ranges” field in these responses.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_force_ranges
     */
     proxy_force_ranges ?: "on" | "off"


     /**
     * Sets the bucket size for hash tables
     * used by the proxy_hide_header and proxy_set_header
     * directives.
     * The details of setting up hash tables are provided in a separate
     * document.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_headers_hash_bucket_size
     */
     proxy_headers_hash_bucket_size ?: string


     /**
     * Sets the maximum size of hash tables
     * used by the proxy_hide_header and proxy_set_header
     * directives.
     * The details of setting up hash tables are provided in a separate
     * document.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_headers_hash_max_size
     */
     proxy_headers_hash_max_size ?: string


     /**
     * By default,
     * nginx does not pass the header fields “Date”,
     * “Server”, “X-Pad”, and
     * “X-Accel-...” from the response of a proxied
     * server to a client.
     * The proxy_hide_header directive sets additional fields
     * that will not be passed.
     * If, on the contrary, the passing of fields needs to be permitted,
     * the proxy_pass_header directive can be used.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_hide_header
     */
     proxy_hide_header ?: any


     /**
     * Sets the HTTP protocol version for proxying.
     * By default, version 1.0 is used.
     * Version 1.1 is recommended for use with
     * keepalive
     * connections and
     * NTLM authentication.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_http_version
     */
     proxy_http_version ?: "1.0" | "1.1"


     /**
     * Determines whether the connection with a proxied server should be
     * closed when a client closes the connection without waiting
     * for a response.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_ignore_client_abort
     */
     proxy_ignore_client_abort ?: "on" | "off"


     /**
     * Disables processing of certain response header fields from the proxied server.
     * The following fields can be ignored: “X-Accel-Redirect”,
     * “X-Accel-Expires”, “X-Accel-Limit-Rate” (1.1.6),
     * “X-Accel-Buffering” (1.1.6),
     * “X-Accel-Charset” (1.1.6), “Expires”,
     * “Cache-Control”, “Set-Cookie” (0.8.44),
     * and “Vary” (1.7.7).
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_ignore_headers
     */
     proxy_ignore_headers ?: any


     /**
     * Determines whether proxied responses with codes greater than or equal
     * to 300 should be passed to a client
     * or be intercepted and redirected to nginx for processing
     * with the error_page directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_intercept_errors
     */
     proxy_intercept_errors ?: "on" | "off"


     /**
     * Limits the speed of reading the response from the proxied server.
     * The rate is specified in bytes per second.
     * The zero value disables rate limiting.
     * The limit is set per a request, and so if nginx simultaneously opens
     * two connections to the proxied server,
     * the overall rate will be twice as much as the specified limit.
     * The limitation works only if
     * buffering of responses from the proxied
     * server is enabled.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_limit_rate
     */
     proxy_limit_rate ?: any


     /**
     * When buffering of responses from the proxied
     * server is enabled, and the whole response does not fit into the buffers
     * set by the proxy_buffer_size and proxy_buffers
     * directives, a part of the response can be saved to a temporary file.
     * This directive sets the maximum size of the temporary file.
     * The size of data written to the temporary file at a time is set
     * by the proxy_temp_file_write_size directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_max_temp_file_size
     */
     proxy_max_temp_file_size ?: string


     /**
     * Specifies the HTTP method to use in requests forwarded
     * to the proxied server instead of the method from the client request.
     * Parameter value can contain variables (1.11.6).
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_method
     */
     proxy_method ?: any


     /**
     * Specifies in which cases a request should be passed to the next server:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_next_upstream
     */
     proxy_next_upstream ?: "error" | "timeout" | "invalid_header" | "http_500" | "http_502" | "http_503" | "http_504" | "http_403" | "http_404" | "http_429" | "non_idempotent" | string


     /**
     * Limits the time during which a request can be passed to the
     * next server.
     * The 0 value turns off this limitation.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_next_upstream_timeout
     */
     proxy_next_upstream_timeout ?: string


     /**
     * Limits the number of possible tries for passing a request to the
     * next server.
     * The 0 value turns off this limitation.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_next_upstream_tries
     */
     proxy_next_upstream_tries ?: any


     /**
     * Defines conditions under which the response will not be saved to a cache.
     * If at least one value of the string parameters is not empty and is not
     * equal to “0” then the response will not be saved:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_no_cache
     * @example
     * ```
     * proxy_no_cache $cookie_nocache $arg_nocache$arg_comment;
     * proxy_no_cache $http_pragma    $http_authorization;
     * ```
     */
     proxy_no_cache ?: any


     /**
     * Permits passing otherwise disabled header
     * fields from a proxied server to a client.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_pass_header
     */
     proxy_pass_header ?: any


     /**
     * Indicates whether the original request body is passed
     * to the proxied server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_pass_request_body
     * @example
     * ```
     * location /x-accel-redirect-here/ {
     *     proxy_method GET;
     *     proxy_pass_request_body off;
     *     proxy_set_header Content-Length "";
     * 
     *     proxy_pass ...
     * }
     * ```
     */
     proxy_pass_request_body ?: "on" | "off"


     /**
     * Indicates whether the header fields of the original request are passed
     * to the proxied server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_pass_request_headers
     * @example
     * ```
     * location /x-accel-redirect-here/ {
     *     proxy_method GET;
     *     proxy_pass_request_headers off;
     *     proxy_pass_request_body off;
     * 
     *     proxy_pass ...
     * }
     * ```
     */
     proxy_pass_request_headers ?: "on" | "off"


     /**
     * Defines a timeout for reading a response from the proxied server.
     * The timeout is set only between two successive read operations,
     * not for the transmission of the whole response.
     * If the proxied server does not transmit anything within this time,
     * the connection is closed.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_read_timeout
     */
     proxy_read_timeout ?: string


     /**
     * Sets the text that should be changed in the “Location”
     * and “Refresh” header fields of a proxied server response.
     * Suppose a proxied server returned the header field
     * “Location: http://localhost:8000/two/some/uri/”.
     * The directive
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_redirect
     * @example
     * ```
     * proxy_redirect http://localhost:8000/two/ http://frontend/one/;
     * proxy_redirect http://localhost:8000/two/ /;
     * location /one/ {
     *     proxy_pass     http://upstream:port/two/;
     *     proxy_redirect default;
     * location /one/ {
     *     proxy_pass     http://upstream:port/two/;
     *     proxy_redirect http://upstream:port/two/ /one/;
     * proxy_redirect http://localhost:8000/ http://$host:$server_port/;
     * proxy_redirect http://$proxy_host:8000/ /;
     * proxy_redirect ~^(http://[^:]+):\d+(/.+)$ $1$2;
     * proxy_redirect ~* /user/([^/]+)/(.+)$      http://$1.example.com/$2;
     * proxy_redirect default;
     * proxy_redirect http://localhost:8000/  /;
     * proxy_redirect http://www.example.com/ /;
     * proxy_redirect / /;
     * ```
     */
     proxy_redirect ?: any


     /**
     * Enables or disables buffering of a client request body.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_request_buffering
     */
     proxy_request_buffering ?: "on" | "off"


     /**
     * If the directive is set to a non-zero value, nginx will try to
     * minimize the number
     * of send operations on outgoing connections to a proxied server by using either
     * NOTE_LOWAT flag of the
     * kqueue method,
     * or the SO_SNDLOWAT socket option,
     * with the specified size.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_send_lowat
     */
     proxy_send_lowat ?: string


     /**
     * Sets a timeout for transmitting a request to the proxied server.
     * The timeout is set only between two successive write operations,
     * not for the transmission of the whole request.
     * If the proxied server does not receive anything within this time,
     * the connection is closed.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_send_timeout
     */
     proxy_send_timeout ?: string


     /**
     * Allows redefining the request body passed to the proxied server.
     * The value can contain text, variables, and their combination.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_set_body
     */
     proxy_set_body ?: any


     /**
     * Allows redefining or appending fields to the request header
     * passed to the proxied server.
     * The value can contain text, variables, and their combinations.
     * These directives are inherited from the previous configuration level
     * if and only if there are no proxy_set_header directives
     * defined on the current level.
     * By default, only two fields are redefined:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_set_header
     * @example
     * ```
     * proxy_set_header Host       $proxy_host;
     * proxy_set_header Connection close;
     * proxy_set_header Host       $http_host;
     * proxy_set_header Host       $host;
     * proxy_set_header Host       $host:$proxy_port;
     * proxy_set_header Accept-Encoding "";
     * ```
     */
     proxy_set_header ?: any


     /**
     * Configures the “TCP keepalive” behavior
     * for outgoing connections to a proxied server.
     * By default, the operating system’s settings are in effect for the socket.
     * If the directive is set to the value “on”, the
     * SO_KEEPALIVE socket option is turned on for the socket.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_socket_keepalive
     */
     proxy_socket_keepalive ?: "on" | "off"


     /**
     * Specifies a file with the certificate in the PEM format
     * used for authentication to a proxied HTTPS server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_ssl_certificate
     */
     proxy_ssl_certificate ?: any


     /**
     * Specifies a file with the secret key in the PEM format
     * used for authentication to a proxied HTTPS server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_ssl_certificate_key
     */
     proxy_ssl_certificate_key ?: any


     /**
     * Specifies the enabled ciphers for requests to a proxied HTTPS server.
     * The ciphers are specified in the format understood by the OpenSSL library.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_ssl_ciphers
     */
     proxy_ssl_ciphers ?: any


     /**
     * Sets arbitrary OpenSSL configuration
     * commands
     * when establishing a connection with the proxied HTTPS server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_ssl_conf_command
     */
     proxy_ssl_conf_command ?: any


     /**
     * Specifies a file with revoked certificates (CRL)
     * in the PEM format used to verify
     * the certificate of the proxied HTTPS server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_ssl_crl
     */
     proxy_ssl_crl ?: any


     /**
     * Allows overriding the server name used to
     * verify
     * the certificate of the proxied HTTPS server and to be
     * passed through SNI
     * when establishing a connection with the proxied HTTPS server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_ssl_name
     */
     proxy_ssl_name ?: any


     /**
     * Specifies a file with passphrases for
     * secret keys
     * where each passphrase is specified on a separate line.
     * Passphrases are tried in turn when loading the key.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_ssl_password_file
     */
     proxy_ssl_password_file ?: any


     /**
     * Enables the specified protocols for requests to a proxied HTTPS server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_ssl_protocols
     */
     proxy_ssl_protocols ?: any


     /**
     * Enables or disables passing of the server name through
     * TLS
     * Server Name Indication extension (SNI, RFC 6066)
     * when establishing a connection with the proxied HTTPS server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_ssl_server_name
     */
     proxy_ssl_server_name ?: "on" | "off"


     /**
     * Determines whether SSL sessions can be reused when working with
     * the proxied server.
     * If the errors
     * “SSL3_GET_FINISHED:digest check failed”
     * appear in the logs, try disabling session reuse.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_ssl_session_reuse
     */
     proxy_ssl_session_reuse ?: "on" | "off"


     /**
     * Specifies a file with trusted CA certificates in the PEM format
     * used to verify
     * the certificate of the proxied HTTPS server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_ssl_trusted_certificate
     */
     proxy_ssl_trusted_certificate ?: any


     /**
     * Enables or disables verification of the proxied HTTPS server certificate.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_ssl_verify
     */
     proxy_ssl_verify ?: "on" | "off"


     /**
     * Sets the verification depth in the proxied HTTPS server certificates chain.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_ssl_verify_depth
     */
     proxy_ssl_verify_depth ?: any


     /**
     * Enables saving of files to a disk.
     * The on parameter saves files with paths
     * corresponding to the directives
     * alias or
     * root.
     * The off parameter disables saving of files.
     * In addition, the file name can be set explicitly using the
     * string with variables:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_store
     * @example
     * ```
     * proxy_store /data/www$original_uri;
     * location /images/ {
     *     root               /data/www;
     *     error_page         404 = /fetch$uri;
     * }
     * 
     * location /fetch/ {
     *     internal;
     * 
     *     proxy_pass         http://backend/;
     *     proxy_store        on;
     *     proxy_store_access user:rw group:rw all:r;
     *     proxy_temp_path    /data/temp;
     * 
     *     alias              /data/www/;
     * }
     * location /images/ {
     *     root               /data/www;
     *     error_page         404 = @fetch;
     * }
     * 
     * location @fetch {
     *     internal;
     * 
     *     proxy_pass         http://backend;
     *     proxy_store        on;
     *     proxy_store_access user:rw group:rw all:r;
     *     proxy_temp_path    /data/temp;
     * 
     *     root               /data/www;
     * }
     * ```
     */
     proxy_store ?: "on" | "off" | string


     /**
     * Sets access permissions for newly created files and directories, e.g.:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_store_access
     * @example
     * ```
     * proxy_store_access user:rw group:rw all:r;
     * proxy_store_access group:rw all:r;
     * ```
     */
     proxy_store_access ?: any


     /**
     * Limits the size of data written to a temporary file
     * at a time, when buffering of responses from the proxied server
     * to temporary files is enabled.
     * By default, size is limited by two buffers set by the
     * proxy_buffer_size and proxy_buffers directives.
     * The maximum size of a temporary file is set by the
     * proxy_max_temp_file_size directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_temp_file_write_size
     */
     proxy_temp_file_write_size ?: string


     /**
     * Defines a directory for storing temporary files
     * with data received from proxied servers.
     * Up to three-level subdirectory hierarchy can be used underneath the specified
     * directory.
     * For example, in the following configuration
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_temp_path
     * @example
     * ```
     * proxy_temp_path /spool/nginx/proxy_temp 1 2;
     * /spool/nginx/proxy_temp/7/45/00000123457
     * ```
     */
     proxy_temp_path ?: any


     /**
     * Defines trusted addresses that are known to send correct
     * replacement addresses.
     * If the special value unix: is specified,
     * all UNIX-domain sockets will be trusted.
     * Trusted addresses may also be specified using a hostname (1.13.1).
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_realip_module.html#set_real_ip_from
     */
     set_real_ip_from ?: "address" | "CIDR" | "unix:"


     /**
     * Defines the request header field
     * whose value will be used to replace the client address.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_realip_module.html#real_ip_header
     */
     real_ip_header ?: "field" | "X-Real-IP" | "X-Forwarded-For" | "proxy_protocol"


     /**
     * If recursive search is disabled, the original client address that
     * matches one of the trusted addresses is replaced by the last
     * address sent in the request header field defined by the
     * real_ip_header directive.
     * If recursive search is enabled, the original client address that
     * matches one of the trusted addresses is replaced by the last
     * non-trusted address sent in the request header field.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_realip_module.html#real_ip_recursive
     */
     real_ip_recursive ?: "on" | "off"


     /**
     * Enables or disables logging of ngx_http_rewrite_module
     * module directives processing results
     * into the error_log at
     * the notice level.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_rewrite_module.html#rewrite_log
     */
     rewrite_log ?: "on" | "off"


     /**
     * Controls whether warnings about uninitialized variables are logged.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_rewrite_module.html#uninitialized_variable_warn
     * @example
     * ```
     * location /download/ {
     *     if ($forbidden) {
     *         return 403;
     *     }
     * 
     *     if ($slow) {
     *         limit_rate 10k;
     *     }
     * 
     *     rewrite ^/(download/.*)/media/(.*)\..*$ /$1/mp3/$2.mp3 break;
     * }
     * variable $forbidden
     * check against zero
     *     return 403
     *     end of code
     * variable $slow
     * check against zero
     * match of regular expression
     * copy "/"
     * copy $1
     * copy "/mp3/"
     * copy $2
     * copy ".mp3"
     * end of regular expression
     * end of code
     * rewrite ^/(download/.*)/media/(.*)\..*$ /$1/mp3/$2.mp3 break;
     * rewrite ^(/download/.*)/media/(.*)\..*$ $1/mp3/$2.mp3 break;
     * match of regular expression
     * copy $1
     * copy "/mp3/"
     * copy $2
     * copy ".mp3"
     * end of regular expression
     * end of code
     * ```
     */
     uninitialized_variable_warn ?: "on" | "off"


     /**
     * Makes outgoing connections to an SCGI server originate
     * from the specified local IP address with an optional port (1.11.2).
     * Parameter value can contain variables (1.3.12).
     * The special value off (1.3.12) cancels the effect
     * of the scgi_bind directive
     * inherited from the previous configuration level, which allows the
     * system to auto-assign the local IP address and port.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_bind
     * @example
     * ```
     * scgi_bind $remote_addr transparent;
     * ```
     */
     scgi_bind ?: "address    [transparent]" | "off"


     /**
     * Sets the size of the buffer used for reading the first part
     * of the response received from the SCGI server.
     * This part usually contains a small response header.
     * By default, the buffer size is equal to one memory page.
     * This is either 4K or 8K, depending on a platform.
     * It can be made smaller, however.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_buffer_size
     */
     scgi_buffer_size ?: string


     /**
     * Enables or disables buffering of responses from the SCGI server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_buffering
     */
     scgi_buffering ?: "on" | "off"


     /**
     * Sets the number and size of the
     * buffers used for reading a response from the SCGI server,
     * for a single connection.
     * By default, the buffer size is equal to one memory page.
     * This is either 4K or 8K, depending on a platform.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_buffers
     */
     scgi_buffers ?: any


     /**
     * When buffering of responses from the SCGI
     * server is enabled, limits the total size of buffers that
     * can be busy sending a response to the client while the response is not
     * yet fully read.
     * In the meantime, the rest of the buffers can be used for reading the response
     * and, if needed, buffering part of the response to a temporary file.
     * By default, size is limited by the size of two buffers set by the
     * scgi_buffer_size and scgi_buffers directives.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_busy_buffers_size
     */
     scgi_busy_buffers_size ?: string


     /**
     * Defines a shared memory zone used for caching.
     * The same zone can be used in several places.
     * Parameter value can contain variables (1.7.9).
     * The off parameter disables caching inherited
     * from the previous configuration level.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_cache
     */
     scgi_cache ?: "zone" | "off"


     /**
     * Allows starting a background subrequest
     * to update an expired cache item,
     * while a stale cached response is returned to the client.
     * Note that it is necessary to
     * allow
     * the usage of a stale cached response when it is being updated.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_cache_background_update
     */
     scgi_cache_background_update ?: "on" | "off"


     /**
     * Defines conditions under which the response will not be taken from a cache.
     * If at least one value of the string parameters is not empty and is not
     * equal to “0” then the response will not be taken from the cache:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_cache_bypass
     * @example
     * ```
     * scgi_cache_bypass $cookie_nocache $arg_nocache$arg_comment;
     * scgi_cache_bypass $http_pragma    $http_authorization;
     * ```
     */
     scgi_cache_bypass ?: any


     /**
     * Defines a key for caching, for example
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_cache_key
     * @example
     * ```
     * scgi_cache_key localhost:9000$request_uri;
     * ```
     */
     scgi_cache_key ?: any


     /**
     * When enabled, only one request at a time will be allowed to populate
     * a new cache element identified according to the scgi_cache_key
     * directive by passing a request to an SCGI server.
     * Other requests of the same cache element will either wait
     * for a response to appear in the cache or the cache lock for
     * this element to be released, up to the time set by the
     * scgi_cache_lock_timeout directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_cache_lock
     */
     scgi_cache_lock ?: "on" | "off"


     /**
     * If the last request passed to the SCGI server
     * for populating a new cache element
     * has not completed for the specified time,
     * one more request may be passed to the SCGI server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_cache_lock_age
     */
     scgi_cache_lock_age ?: string


     /**
     * Sets a timeout for scgi_cache_lock.
     * When the time expires,
     * the request will be passed to the SCGI server,
     * however, the response will not be cached.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_cache_lock_timeout
     */
     scgi_cache_lock_timeout ?: string


     /**
     * Sets an offset in bytes for byte-range requests.
     * If the range is beyond the offset,
     * the range request will be passed to the SCGI server
     * and the response will not be cached.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_cache_max_range_offset
     */
     scgi_cache_max_range_offset ?: any


     /**
     * If the client request method is listed in this directive then
     * the response will be cached.
     * “GET” and “HEAD” methods are always
     * added to the list, though it is recommended to specify them explicitly.
     * See also the scgi_no_cache directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_cache_methods
     */
     scgi_cache_methods ?: "GET" | "HEAD" | string


     /**
     * Sets the number of requests after which the response
     * will be cached.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_cache_min_uses
     */
     scgi_cache_min_uses ?: any


     /**
     * Sets the path and other parameters of a cache.
     * Cache data are stored in files.
     * The file name in a cache is a result of
     * applying the MD5 function to the
     * cache key.
     * The levels parameter defines hierarchy levels of a cache:
     * from 1 to 3, each level accepts values 1 or 2.
     * For example, in the following configuration
     *
     * @context http
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_cache_path
     * @example
     * ```
     * scgi_cache_path /data/nginx/cache levels=1:2 keys_zone=one:10m;
     * /data/nginx/cache/c/29/b7f54b2df7773722d382f4809d65029c
     * ```
     */
     scgi_cache_path ?: "path    [levels=levels]    [use_temp_path=on" | "off]    keys_zone=name:size    [inactive=time]    [max_size=size]    [min_free=size]    [manager_files=number]    [manager_sleep=time]    [manager_threshold=time]    [loader_files=number]    [loader_sleep=time]    [loader_threshold=time]    [purger=on" | "off]    [purger_files=number]    [purger_sleep=time]    [purger_threshold=time]"


     /**
     * Defines conditions under which the request will be considered a cache
     * purge request.
     * If at least one value of the string parameters is not empty and is not equal
     * to “0” then the cache entry with a corresponding
     * cache key is removed.
     * The result of successful operation is indicated by returning
     * the 204 (No Content) response.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_cache_purge
     * @example
     * ```
     * scgi_cache_path /data/nginx/cache keys_zone=cache_zone:10m;
     * 
     * map $request_method $purge_method {
     *     PURGE   1;
     *     default 0;
     * }
     * 
     * server {
     *     ...
     *     location / {
     *         scgi_pass        backend;
     *         scgi_cache       cache_zone;
     *         scgi_cache_key   $uri;
     *         scgi_cache_purge $purge_method;
     *     }
     * }
     * ```
     */
     scgi_cache_purge ?: any


     /**
     * Enables revalidation of expired cache items using conditional requests with
     * the “If-Modified-Since” and “If-None-Match”
     * header fields.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_cache_revalidate
     */
     scgi_cache_revalidate ?: "on" | "off"


     /**
     * Determines in which cases a stale cached response can be used
     * when an error occurs during communication with the SCGI server.
     * The directive’s parameters match the parameters of the
     * scgi_next_upstream directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_cache_use_stale
     */
     scgi_cache_use_stale ?: "error" | "timeout" | "invalid_header" | "updating" | "http_500" | "http_503" | "http_403" | "http_404" | "http_429" | string


     /**
     * Sets caching time for different response codes.
     * For example, the following directives
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_cache_valid
     * @example
     * ```
     * scgi_cache_valid 200 302 10m;
     * scgi_cache_valid 404      1m;
     * scgi_cache_valid 5m;
     * scgi_cache_valid 200 302 10m;
     * scgi_cache_valid 301      1h;
     * scgi_cache_valid any      1m;
     * ```
     */
     scgi_cache_valid ?: any


     /**
     * Defines a timeout for establishing a connection with an SCGI server.
     * It should be noted that this timeout cannot usually exceed 75 seconds.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_connect_timeout
     */
     scgi_connect_timeout ?: string


     /**
     * Enables byte-range support
     * for both cached and uncached responses from the SCGI server
     * regardless of the “Accept-Ranges” field in these responses.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_force_ranges
     */
     scgi_force_ranges ?: "on" | "off"


     /**
     * By default,
     * nginx does not pass the header fields “Status” and
     * “X-Accel-...” from the response of an SCGI
     * server to a client.
     * The scgi_hide_header directive sets additional fields
     * that will not be passed.
     * If, on the contrary, the passing of fields needs to be permitted,
     * the scgi_pass_header directive can be used.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_hide_header
     */
     scgi_hide_header ?: any


     /**
     * Determines whether the connection with an SCGI server should be
     * closed when a client closes the connection without waiting
     * for a response.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_ignore_client_abort
     */
     scgi_ignore_client_abort ?: "on" | "off"


     /**
     * Disables processing of certain response header fields from the SCGI server.
     * The following fields can be ignored: “X-Accel-Redirect”,
     * “X-Accel-Expires”, “X-Accel-Limit-Rate” (1.1.6),
     * “X-Accel-Buffering” (1.1.6),
     * “X-Accel-Charset” (1.1.6), “Expires”,
     * “Cache-Control”, “Set-Cookie” (0.8.44),
     * and “Vary” (1.7.7).
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_ignore_headers
     */
     scgi_ignore_headers ?: any


     /**
     * Determines whether an SCGI server responses with codes greater than or equal
     * to 300 should be passed to a client
     * or be intercepted and redirected to nginx for processing
     * with the error_page directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_intercept_errors
     */
     scgi_intercept_errors ?: "on" | "off"


     /**
     * Limits the speed of reading the response from the SCGI server.
     * The rate is specified in bytes per second.
     * The zero value disables rate limiting.
     * The limit is set per a request, and so if nginx simultaneously opens
     * two connections to the SCGI server,
     * the overall rate will be twice as much as the specified limit.
     * The limitation works only if
     * buffering of responses from the SCGI
     * server is enabled.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_limit_rate
     */
     scgi_limit_rate ?: any


     /**
     * When buffering of responses from the SCGI
     * server is enabled, and the whole response does not fit into the buffers
     * set by the scgi_buffer_size and scgi_buffers
     * directives, a part of the response can be saved to a temporary file.
     * This directive sets the maximum size of the temporary file.
     * The size of data written to the temporary file at a time is set
     * by the scgi_temp_file_write_size directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_max_temp_file_size
     */
     scgi_max_temp_file_size ?: string


     /**
     * Specifies in which cases a request should be passed to the next server:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_next_upstream
     */
     scgi_next_upstream ?: "error" | "timeout" | "invalid_header" | "http_500" | "http_503" | "http_403" | "http_404" | "http_429" | "non_idempotent" | string


     /**
     * Limits the time during which a request can be passed to the
     * next server.
     * The 0 value turns off this limitation.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_next_upstream_timeout
     */
     scgi_next_upstream_timeout ?: string


     /**
     * Limits the number of possible tries for passing a request to the
     * next server.
     * The 0 value turns off this limitation.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_next_upstream_tries
     */
     scgi_next_upstream_tries ?: any


     /**
     * Defines conditions under which the response will not be saved to a cache.
     * If at least one value of the string parameters is not empty and is not
     * equal to “0” then the response will not be saved:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_no_cache
     * @example
     * ```
     * scgi_no_cache $cookie_nocache $arg_nocache$arg_comment;
     * scgi_no_cache $http_pragma    $http_authorization;
     * ```
     */
     scgi_no_cache ?: any


     /**
     * Sets a parameter that should be passed to the SCGI server.
     * The value can contain text, variables, and their combination.
     * These directives are inherited from the previous configuration level
     * if and only if there are no scgi_param directives
     * defined on the current level.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_param
     * @example
     * ```
     * location / {
     *     include scgi_params;
     *     ...
     * }
     * scgi_param HTTPS $https if_not_empty;
     * ```
     */
     scgi_param ?: any


     /**
     * Permits passing otherwise disabled header
     * fields from an SCGI server to a client.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_pass_header
     */
     scgi_pass_header ?: any


     /**
     * Indicates whether the original request body is passed
     * to the SCGI server.
     * See also the scgi_pass_request_headers directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_pass_request_body
     */
     scgi_pass_request_body ?: "on" | "off"


     /**
     * Indicates whether the header fields of the original request are passed
     * to the SCGI server.
     * See also the scgi_pass_request_body directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_pass_request_headers
     */
     scgi_pass_request_headers ?: "on" | "off"


     /**
     * Defines a timeout for reading a response from the SCGI server.
     * The timeout is set only between two successive read operations,
     * not for the transmission of the whole response.
     * If the SCGI server does not transmit anything within this time,
     * the connection is closed.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_read_timeout
     */
     scgi_read_timeout ?: string


     /**
     * Enables or disables buffering of a client request body.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_request_buffering
     */
     scgi_request_buffering ?: "on" | "off"


     /**
     * Sets a timeout for transmitting a request to the SCGI server.
     * The timeout is set only between two successive write operations,
     * not for the transmission of the whole request.
     * If the SCGI server does not receive anything within this time,
     * the connection is closed.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_send_timeout
     */
     scgi_send_timeout ?: string


     /**
     * Configures the “TCP keepalive” behavior
     * for outgoing connections to an SCGI server.
     * By default, the operating system’s settings are in effect for the socket.
     * If the directive is set to the value “on”, the
     * SO_KEEPALIVE socket option is turned on for the socket.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_socket_keepalive
     */
     scgi_socket_keepalive ?: "on" | "off"


     /**
     * Enables saving of files to a disk.
     * The on parameter saves files with paths
     * corresponding to the directives
     * alias or
     * root.
     * The off parameter disables saving of files.
     * In addition, the file name can be set explicitly using the
     * string with variables:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_store
     * @example
     * ```
     * scgi_store /data/www$original_uri;
     * location /images/ {
     *     root              /data/www;
     *     error_page        404 = /fetch$uri;
     * }
     * 
     * location /fetch/ {
     *     internal;
     * 
     *     scgi_pass         backend:9000;
     *     ...
     * 
     *     scgi_store        on;
     *     scgi_store_access user:rw group:rw all:r;
     *     scgi_temp_path    /data/temp;
     * 
     *     alias             /data/www/;
     * }
     * ```
     */
     scgi_store ?: "on" | "off" | string


     /**
     * Sets access permissions for newly created files and directories, e.g.:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_store_access
     * @example
     * ```
     * scgi_store_access user:rw group:rw all:r;
     * scgi_store_access group:rw all:r;
     * ```
     */
     scgi_store_access ?: any


     /**
     * Limits the size of data written to a temporary file
     * at a time, when buffering of responses from the SCGI server
     * to temporary files is enabled.
     * By default, size is limited by two buffers set by the
     * scgi_buffer_size and scgi_buffers directives.
     * The maximum size of a temporary file is set by the
     * scgi_max_temp_file_size directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_temp_file_write_size
     */
     scgi_temp_file_write_size ?: string


     /**
     * Defines a directory for storing temporary files
     * with data received from SCGI servers.
     * Up to three-level subdirectory hierarchy can be used underneath the specified
     * directory.
     * For example, in the following configuration
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_temp_path
     * @example
     * ```
     * scgi_temp_path /spool/nginx/scgi_temp 1 2;
     * /spool/nginx/scgi_temp/7/45/00000123457
     * ```
     */
     scgi_temp_path ?: any


     /**
     * Defines a string with variables from which the
     * checksum value and lifetime of a link will be extracted.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_secure_link_module.html#secure_link
     */
     secure_link ?: any


     /**
     * Defines an expression for which the MD5 hash value will
     * be computed and compared with the value passed in a request.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_secure_link_module.html#secure_link_md5
     * @example
     * ```
     * location /s/ {
     *     secure_link $arg_md5,$arg_expires;
     *     secure_link_md5 "$secure_link_expires$uri$remote_addr secret";
     * 
     *     if ($secure_link = "") {
     *         return 403;
     *     }
     * 
     *     if ($secure_link = "0") {
     *         return 410;
     *     }
     * 
     *     ...
     * }
     * echo -n '2147483647/s/link127.0.0.1 secret' | \
     *     openssl md5 -binary | openssl base64 | tr +/ -_ | tr -d =
     * ```
     */
     secure_link_md5 ?: any


     /**
     * Enables the use of the specified session log.
     * The special value off cancels the effect
     * of the session_log directives
     * inherited from the previous configuration level.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_session_log_module.html#session_log
     */
     session_log ?: "name" | "off"


     /**
     * Specifies the output format of a log.
     * The value of the $body_bytes_sent variable is aggregated across
     * all requests in a session.
     * The values of all other variables available for logging correspond to the
     * first request in a session.
     *
     * @context http
     * @see https://nginx.org/en/docs/http/ngx_http_session_log_module.html#session_log_format
     */
     session_log_format ?: any


     /**
     * Sets the path to a log file and configures the shared memory zone that is used
     * to store currently active sessions.
     *
     * @context http
     * @see https://nginx.org/en/docs/http/ngx_http_session_log_module.html#session_log_zone
     */
     session_log_zone ?: any


     /**
     * Sets the size of the slice.
     * The zero value disables splitting responses into slices.
     * Note that a too low value may result in excessive memory usage
     * and opening a large number of files.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_slice_module.html#slice
     */
     slice ?: string


     /**
     * Sets the maximum size of chunks
     * into which the response body is
     * 
     * sliced.
     * A too low value results in higher overhead.
     * A too high value impairs prioritization due to
     * 
     * HOL blocking.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_spdy_module.html#spdy_chunk_size
     */
     spdy_chunk_size ?: string


     /**
     * Sets the header compression level of a response in a range from
     * 1 (fastest, less compression) to 9 (slowest, best compression).
     * The special value 0 turns off the header compression.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_spdy_module.html#spdy_headers_comp
     */
     spdy_headers_comp ?: any


     /**
     * Creates a variable for A/B testing, for example:
     *
     * @context http
     * @see https://nginx.org/en/docs/http/ngx_http_split_clients_module.html#split_clients
     * @example
     * ```
     * split_clients "${remote_addr}AAA" $variant {
     *                0.5%               .one;
     *                2.0%               .two;
     *                *                  "";
     * }
     * ```
     */
     split_clients ?: any


     /**
     * Enables or disables processing of SSI commands in responses.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_ssi_module.html#ssi
     */
     ssi ?: "on" | "off"


     /**
     * Allows preserving the “Last-Modified” header field
     * from the original response during SSI processing
     * to facilitate response caching.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_ssi_module.html#ssi_last_modified
     */
     ssi_last_modified ?: "on" | "off"


     /**
     * Sets the minimum size for parts of a response stored on disk,
     * starting from which it makes sense to send them using
     * sendfile.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_ssi_module.html#ssi_min_file_chunk
     */
     ssi_min_file_chunk ?: string


     /**
     * If enabled, suppresses the output of the
     * “[an error occurred while processing the directive]”
     * string if an error occurred during SSI processing.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_ssi_module.html#ssi_silent_errors
     */
     ssi_silent_errors ?: "on" | "off"


     /**
     * Enables processing of SSI commands in responses with the specified MIME types
     * in addition to “text/html”.
     * The special value “*” matches any MIME type (0.8.29).
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_ssi_module.html#ssi_types
     */
     ssi_types ?: any


     /**
     * Sets the maximum length of parameter values in SSI commands.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_ssi_module.html#ssi_value_length
     * @example
     * ```
     * <!--# command parameter1=value1 parameter2=value2 ... -->
     * ```
     */
     ssi_value_length ?: any


     /**
     * This directive was made obsolete in version 1.15.0.
     * The ssl parameter
     * of the listen directive
     * should be used instead.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_ssl_module.html#ssl
     */
     ssl ?: "on" | "off"


     /**
     * Sets the size of the buffer used for sending data.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_ssl_module.html#ssl_buffer_size
     * @example
     * ```
     * ssl_buffer_size 4k;
     * ```
     */
     ssl_buffer_size ?: string


     /**
     * Specifies a file with the certificate in the PEM format
     * for the given virtual server.
     * If intermediate certificates should be specified in addition to a primary
     * certificate, they should be specified in the same file in the following
     * order: the primary certificate comes first, then the intermediate certificates.
     * A secret key in the PEM format may be placed in the same file.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_ssl_module.html#ssl_certificate
     * @example
     * ```
     * server {
     *     listen              443 ssl;
     *     server_name         example.com;
     * 
     *     ssl_certificate     example.com.rsa.crt;
     *     ssl_certificate_key example.com.rsa.key;
     * 
     *     ssl_certificate     example.com.ecdsa.crt;
     *     ssl_certificate_key example.com.ecdsa.key;
     * 
     *     ...
     * }
     * ssl_certificate     $ssl_server_name.crt;
     * ssl_certificate_key $ssl_server_name.key;
     * ```
     */
     ssl_certificate ?: any


     /**
     * Specifies a file with the secret key in the PEM format
     * for the given virtual server.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_ssl_module.html#ssl_certificate_key
     */
     ssl_certificate_key ?: any


     /**
     * Specifies the enabled ciphers.
     * The ciphers are specified in the format understood by the
     * OpenSSL library, for example:
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_ssl_module.html#ssl_ciphers
     * @example
     * ```
     * ssl_ciphers ALL:!aNULL:!EXPORT56:RC4+RSA:+HIGH:+MEDIUM:+LOW:+SSLv2:+EXP;
     * ```
     */
     ssl_ciphers ?: any


     /**
     * Specifies a file with trusted CA certificates in the PEM format
     * used to verify client certificates and
     * OCSP responses if ssl_stapling is enabled.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_ssl_module.html#ssl_client_certificate
     */
     ssl_client_certificate ?: any


     /**
     * Sets arbitrary OpenSSL configuration
     * commands.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_ssl_module.html#ssl_conf_command
     * @example
     * ```
     * ssl_conf_command Options PrioritizeChaCha;
     * ssl_conf_command Ciphersuites TLS_CHACHA20_POLY1305_SHA256;
     * ```
     */
     ssl_conf_command ?: any


     /**
     * Specifies a file with revoked certificates (CRL)
     * in the PEM format used to verify
     * client certificates.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_ssl_module.html#ssl_crl
     */
     ssl_crl ?: any


     /**
     * Specifies a file with DH parameters for DHE ciphers.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_ssl_module.html#ssl_dhparam
     */
     ssl_dhparam ?: any


     /**
     * Enables or disables TLS 1.3
     * early data.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_ssl_module.html#ssl_early_data
     * @example
     * ```
     * proxy_set_header Early-Data $ssl_early_data;
     * ```
     */
     ssl_early_data ?: "on" | "off"


     /**
     * Specifies a curve for ECDHE ciphers.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_ssl_module.html#ssl_ecdh_curve
     * @example
     * ```
     * ssl_ecdh_curve prime256v1:secp384r1;
     * ```
     */
     ssl_ecdh_curve ?: any


     /**
     * Enables OCSP validation of the client certificate chain.
     * The leaf parameter
     * enables validation of the client certificate only.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_ssl_module.html#ssl_ocsp
     * @example
     * ```
     * ssl_verify_client on;
     * ssl_ocsp          on;
     * resolver          192.0.2.1;
     * ```
     */
     ssl_ocsp ?: "on" | "off" | "leaf"


     /**
     * Sets name and size of the cache
     * that stores client certificates status for OCSP validation.
     * The cache is shared between all worker processes.
     * A cache with the same name can be used in several virtual servers.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_ssl_module.html#ssl_ocsp_cache
     */
     ssl_ocsp_cache ?: "off" | "[shared:name:size]"


     /**
     * Overrides the URL of the OCSP responder specified in the
     * “Authority
     * Information Access” certificate extension
     * for validation of client certificates.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_ssl_module.html#ssl_ocsp_responder
     * @example
     * ```
     * ssl_ocsp_responder http://ocsp.example.com/;
     * ```
     */
     ssl_ocsp_responder ?: any


     /**
     * Specifies a file with passphrases for
     * secret keys
     * where each passphrase is specified on a separate line.
     * Passphrases are tried in turn when loading the key.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_ssl_module.html#ssl_password_file
     * @example
     * ```
     * http {
     *     ssl_password_file /etc/keys/global.pass;
     *     ...
     * 
     *     server {
     *         server_name www1.example.com;
     *         ssl_certificate_key /etc/keys/first.key;
     *     }
     * 
     *     server {
     *         server_name www2.example.com;
     * 
     *         # named pipe can also be used instead of a file
     *         ssl_password_file /etc/keys/fifo;
     *         ssl_certificate_key /etc/keys/second.key;
     *     }
     * }
     * ```
     */
     ssl_password_file ?: any


     /**
     * Specifies that server ciphers should be preferred over client
     * ciphers when using the SSLv3 and TLS protocols.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_ssl_module.html#ssl_prefer_server_ciphers
     */
     ssl_prefer_server_ciphers ?: "on" | "off"


     /**
     * Enables the specified protocols.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_ssl_module.html#ssl_protocols
     */
     ssl_protocols ?: any


     /**
     * If enabled, SSL handshakes in
     * the server block will be rejected.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_ssl_module.html#ssl_reject_handshake
     * @example
     * ```
     * server {
     *     listen               443 ssl default_server;
     *     ssl_reject_handshake on;
     * }
     * 
     * server {
     *     listen              443 ssl;
     *     server_name         example.com;
     *     ssl_certificate     example.com.crt;
     *     ssl_certificate_key example.com.key;
     * }
     * ```
     */
     ssl_reject_handshake ?: "on" | "off"


     /**
     * Sets the types and sizes of caches that store session parameters.
     * A cache can be of any of the following types:
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_ssl_module.html#ssl_session_cache
     * @example
     * ```
     * ssl_session_cache builtin:1000 shared:SSL:10m;
     * ```
     */
     ssl_session_cache ?: "off" | "none" | "[builtin[:size]]    [shared:name:size]"


     /**
     * Sets a file with the secret key used to encrypt
     * and decrypt TLS session tickets.
     * The directive is necessary if the same key has to be shared between
     * multiple servers.
     * By default, a randomly generated key is used.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_ssl_module.html#ssl_session_ticket_key
     * @example
     * ```
     * ssl_session_ticket_key current.key;
     * ssl_session_ticket_key previous.key;
     * openssl rand 80 > ticket.key
     * ```
     */
     ssl_session_ticket_key ?: any


     /**
     * Enables or disables session resumption through
     * TLS session tickets.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_ssl_module.html#ssl_session_tickets
     */
     ssl_session_tickets ?: "on" | "off"


     /**
     * Specifies a time during which a client may reuse the
     * session parameters.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_ssl_module.html#ssl_session_timeout
     */
     ssl_session_timeout ?: string


     /**
     * Enables or disables
     * stapling
     * of OCSP responses by the server.
     * Example:
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_ssl_module.html#ssl_stapling
     * @example
     * ```
     * ssl_stapling on;
     * resolver 192.0.2.1;
     * ```
     */
     ssl_stapling ?: "on" | "off"


     /**
     * When set, the stapled OCSP response will be taken from the
     * specified file instead of querying
     * the OCSP responder specified in the server certificate.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_ssl_module.html#ssl_stapling_file
     */
     ssl_stapling_file ?: any


     /**
     * Overrides the URL of the OCSP responder specified in the
     * “Authority
     * Information Access” certificate extension.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_ssl_module.html#ssl_stapling_responder
     * @example
     * ```
     * ssl_stapling_responder http://ocsp.example.com/;
     * ```
     */
     ssl_stapling_responder ?: any


     /**
     * Enables or disables verification of OCSP responses by the server.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_ssl_module.html#ssl_stapling_verify
     */
     ssl_stapling_verify ?: "on" | "off"


     /**
     * Specifies a file with trusted CA certificates in the PEM format
     * used to verify client certificates and
     * OCSP responses if ssl_stapling is enabled.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_ssl_module.html#ssl_trusted_certificate
     */
     ssl_trusted_certificate ?: any


     /**
     * Enables verification of client certificates.
     * The verification result is stored in the
     * $ssl_client_verify variable.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_ssl_module.html#ssl_verify_client
     */
     ssl_verify_client ?: "on" | "off" | "optional" | "optional_no_ca"


     /**
     * Sets the verification depth in the client certificates chain.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_ssl_module.html#ssl_verify_depth
     */
     ssl_verify_depth ?: any


     /**
     * By default, status information is output in the JSON format.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_status_module.html#status_format
     */
     status_format ?: any


     /**
     * Sets a string to replace and a replacement string.
     * The string to replace is matched ignoring the case.
     * The string to replace (1.9.4) and replacement string can contain variables.
     * Several sub_filter directives
     * can be specified on the same configuration level (1.9.4).
     * These directives are inherited from the previous configuration level
     * if and only if there are no sub_filter directives
     * defined on the current level.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_sub_module.html#sub_filter
     */
     sub_filter ?: any


     /**
     * Allows preserving the “Last-Modified” header field
     * from the original response during replacement
     * to facilitate response caching.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_sub_module.html#sub_filter_last_modified
     */
     sub_filter_last_modified ?: "on" | "off"


     /**
     * Indicates whether to look for each string to replace
     * once or repeatedly.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_sub_module.html#sub_filter_once
     */
     sub_filter_once ?: "on" | "off"


     /**
     * Enables string replacement in responses with the specified MIME types
     * in addition to “text/html”.
     * The special value “*” matches any MIME type (0.8.29).
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_sub_module.html#sub_filter_types
     */
     sub_filter_types ?: any


     /**
     * Defines a group of servers.
     * Servers can listen on different ports.
     * In addition, servers listening on TCP and UNIX-domain sockets
     * can be mixed.
     *
     * @context http
     * @see https://nginx.org/en/docs/http/ngx_http_upstream_module.html#upstream
     * @example
     * ```
     * upstream backend {
     *     server backend1.example.com weight=5;
     *     server 127.0.0.1:8080       max_fails=3 fail_timeout=30s;
     *     server unix:/tmp/backend3;
     * 
     *     server backup1.example.com  backup;
     * }
     * ```
     */
     upstream ?: any


     /**
     * Defines the named test set used to verify responses to health check requests.
     *
     * @context http
     * @see https://nginx.org/en/docs/http/ngx_http_upstream_hc_module.html#match
     * @example
     * ```
     * # status is 200, content type is "text/html",
     * # and body contains "Welcome to nginx!"
     * match welcome {
     *     status 200;
     *     header Content-Type = text/html;
     *     body ~ "Welcome to nginx!";
     * }
     * # status is not one of 301, 302, 303, or 307, and header does not have "Refresh:"
     * match not_redirect {
     *     status ! 301-303 307;
     *     header ! Refresh;
     * }
     * # status ok and not in maintenance mode
     * match server_ok {
     *     status 200-399;
     *     body !~ "maintenance mode";
     * }
     * # status is 200 or 204
     * map $upstream_status $good_status {
     *     200 1;
     *     204 1;
     * }
     * 
     * match server_ok {
     *     require $good_status;
     * }
     * ```
     */
     match ?: any


     /**
     * Enables or disables setting cookies and logging the received cookies:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_userid_module.html#userid
     */
     userid ?: "on" | "v1" | "log" | "off"


     /**
     * Defines a domain for which the cookie is set.
     * The none parameter disables setting of a domain for the
     * cookie.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_userid_module.html#userid_domain
     */
     userid_domain ?: "name" | "none"


     /**
     * Sets a time during which a browser should keep the cookie.
     * The parameter max will cause the cookie to expire on
     * “31 Dec 2037 23:55:55 GMT”.
     * The parameter off will cause the cookie to expire at
     * the end of a browser session.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_userid_module.html#userid_expires
     */
     userid_expires ?: "time" | "max" | "off"


     /**
     * If the parameter is not off,
     * defines one or more additional flags for the cookie:
     * secure,
     * httponly,
     * samesite=strict,
     * samesite=lax,
     * samesite=none.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_userid_module.html#userid_flags
     */
     userid_flags ?: "off" | string


     /**
     * If the parameter is not off, enables the cookie marking
     * mechanism and sets the character used as a mark.
     * This mechanism is used to add or change
     * userid_p3p and/or a cookie expiration time while
     * preserving the client identifier.
     * A mark can be any letter of the English alphabet (case-sensitive),
     * digit, or the “=” character.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_userid_module.html#userid_mark
     */
     userid_mark ?: "letter" | "digit" | "=" | "off"


     /**
     * Sets the cookie name.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_userid_module.html#userid_name
     */
     userid_name ?: any


     /**
     * Sets a value for the “P3P” header field that will be
     * sent along with the cookie.
     * If the directive is set to the special value none,
     * the “P3P” header will not be sent in a response.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_userid_module.html#userid_p3p
     */
     userid_p3p ?: string | "none"


     /**
     * Defines a path for which the cookie is set.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_userid_module.html#userid_path
     */
     userid_path ?: string


     /**
     * If identifiers are issued by multiple servers (services),
     * each service should be assigned its own number
     * to ensure that client identifiers are unique.
     * For version 1 cookies, the default value is zero.
     * For version 2 cookies, the default value is the number composed from the last
     * four octets of the server’s IP address.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_userid_module.html#userid_service
     */
     userid_service ?: any


     /**
     * Makes outgoing connections to a uwsgi server originate
     * from the specified local IP address with an optional port (1.11.2).
     * Parameter value can contain variables (1.3.12).
     * The special value off (1.3.12) cancels the effect
     * of the uwsgi_bind directive
     * inherited from the previous configuration level, which allows the
     * system to auto-assign the local IP address and port.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_bind
     * @example
     * ```
     * uwsgi_bind $remote_addr transparent;
     * ```
     */
     uwsgi_bind ?: "address    [transparent]" | "off"


     /**
     * Sets the size of the buffer used for reading the first part
     * of the response received from the uwsgi server.
     * This part usually contains a small response header.
     * By default, the buffer size is equal to one memory page.
     * This is either 4K or 8K, depending on a platform.
     * It can be made smaller, however.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_buffer_size
     */
     uwsgi_buffer_size ?: string


     /**
     * Enables or disables buffering of responses from the uwsgi server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_buffering
     */
     uwsgi_buffering ?: "on" | "off"


     /**
     * Sets the number and size of the
     * buffers used for reading a response from the uwsgi server,
     * for a single connection.
     * By default, the buffer size is equal to one memory page.
     * This is either 4K or 8K, depending on a platform.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_buffers
     */
     uwsgi_buffers ?: any


     /**
     * When buffering of responses from the uwsgi
     * server is enabled, limits the total size of buffers that
     * can be busy sending a response to the client while the response is not
     * yet fully read.
     * In the meantime, the rest of the buffers can be used for reading the response
     * and, if needed, buffering part of the response to a temporary file.
     * By default, size is limited by the size of two buffers set by the
     * uwsgi_buffer_size and uwsgi_buffers directives.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_busy_buffers_size
     */
     uwsgi_busy_buffers_size ?: string


     /**
     * Defines a shared memory zone used for caching.
     * The same zone can be used in several places.
     * Parameter value can contain variables (1.7.9).
     * The off parameter disables caching inherited
     * from the previous configuration level.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_cache
     */
     uwsgi_cache ?: "zone" | "off"


     /**
     * Allows starting a background subrequest
     * to update an expired cache item,
     * while a stale cached response is returned to the client.
     * Note that it is necessary to
     * allow
     * the usage of a stale cached response when it is being updated.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_cache_background_update
     */
     uwsgi_cache_background_update ?: "on" | "off"


     /**
     * Defines conditions under which the response will not be taken from a cache.
     * If at least one value of the string parameters is not empty and is not
     * equal to “0” then the response will not be taken from the cache:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_cache_bypass
     * @example
     * ```
     * uwsgi_cache_bypass $cookie_nocache $arg_nocache$arg_comment;
     * uwsgi_cache_bypass $http_pragma    $http_authorization;
     * ```
     */
     uwsgi_cache_bypass ?: any


     /**
     * Defines a key for caching, for example
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_cache_key
     * @example
     * ```
     * uwsgi_cache_key localhost:9000$request_uri;
     * ```
     */
     uwsgi_cache_key ?: any


     /**
     * When enabled, only one request at a time will be allowed to populate
     * a new cache element identified according to the uwsgi_cache_key
     * directive by passing a request to a uwsgi server.
     * Other requests of the same cache element will either wait
     * for a response to appear in the cache or the cache lock for
     * this element to be released, up to the time set by the
     * uwsgi_cache_lock_timeout directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_cache_lock
     */
     uwsgi_cache_lock ?: "on" | "off"


     /**
     * If the last request passed to the uwsgi server
     * for populating a new cache element
     * has not completed for the specified time,
     * one more request may be passed to the uwsgi server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_cache_lock_age
     */
     uwsgi_cache_lock_age ?: string


     /**
     * Sets a timeout for uwsgi_cache_lock.
     * When the time expires,
     * the request will be passed to the uwsgi server,
     * however, the response will not be cached.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_cache_lock_timeout
     */
     uwsgi_cache_lock_timeout ?: string


     /**
     * Sets an offset in bytes for byte-range requests.
     * If the range is beyond the offset,
     * the range request will be passed to the uwsgi server
     * and the response will not be cached.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_cache_max_range_offset
     */
     uwsgi_cache_max_range_offset ?: any


     /**
     * If the client request method is listed in this directive then
     * the response will be cached.
     * “GET” and “HEAD” methods are always
     * added to the list, though it is recommended to specify them explicitly.
     * See also the uwsgi_no_cache directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_cache_methods
     */
     uwsgi_cache_methods ?: "GET" | "HEAD" | string


     /**
     * Sets the number of requests after which the response
     * will be cached.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_cache_min_uses
     */
     uwsgi_cache_min_uses ?: any


     /**
     * Sets the path and other parameters of a cache.
     * Cache data are stored in files.
     * The file name in a cache is a result of
     * applying the MD5 function to the
     * cache key.
     * The levels parameter defines hierarchy levels of a cache:
     * from 1 to 3, each level accepts values 1 or 2.
     * For example, in the following configuration
     *
     * @context http
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_cache_path
     * @example
     * ```
     * uwsgi_cache_path /data/nginx/cache levels=1:2 keys_zone=one:10m;
     * /data/nginx/cache/c/29/b7f54b2df7773722d382f4809d65029c
     * ```
     */
     uwsgi_cache_path ?: "path    [levels=levels]    [use_temp_path=on" | "off]    keys_zone=name:size    [inactive=time]    [max_size=size]    [min_free=size]    [manager_files=number]    [manager_sleep=time]    [manager_threshold=time]    [loader_files=number]    [loader_sleep=time]    [loader_threshold=time]    [purger=on" | "off]    [purger_files=number]    [purger_sleep=time]    [purger_threshold=time]"


     /**
     * Defines conditions under which the request will be considered a cache
     * purge request.
     * If at least one value of the string parameters is not empty and is not equal
     * to “0” then the cache entry with a corresponding
     * cache key is removed.
     * The result of successful operation is indicated by returning
     * the 204 (No Content) response.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_cache_purge
     * @example
     * ```
     * uwsgi_cache_path /data/nginx/cache keys_zone=cache_zone:10m;
     * 
     * map $request_method $purge_method {
     *     PURGE   1;
     *     default 0;
     * }
     * 
     * server {
     *     ...
     *     location / {
     *         uwsgi_pass        backend;
     *         uwsgi_cache       cache_zone;
     *         uwsgi_cache_key   $uri;
     *         uwsgi_cache_purge $purge_method;
     *     }
     * }
     * ```
     */
     uwsgi_cache_purge ?: any


     /**
     * Enables revalidation of expired cache items using conditional requests with
     * the “If-Modified-Since” and “If-None-Match”
     * header fields.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_cache_revalidate
     */
     uwsgi_cache_revalidate ?: "on" | "off"


     /**
     * Determines in which cases a stale cached response can be used
     * when an error occurs during communication with the uwsgi server.
     * The directive’s parameters match the parameters of the
     * uwsgi_next_upstream directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_cache_use_stale
     */
     uwsgi_cache_use_stale ?: "error" | "timeout" | "invalid_header" | "updating" | "http_500" | "http_503" | "http_403" | "http_404" | "http_429" | string


     /**
     * Sets caching time for different response codes.
     * For example, the following directives
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_cache_valid
     * @example
     * ```
     * uwsgi_cache_valid 200 302 10m;
     * uwsgi_cache_valid 404      1m;
     * uwsgi_cache_valid 5m;
     * uwsgi_cache_valid 200 302 10m;
     * uwsgi_cache_valid 301      1h;
     * uwsgi_cache_valid any      1m;
     * ```
     */
     uwsgi_cache_valid ?: any


     /**
     * Defines a timeout for establishing a connection with a uwsgi server.
     * It should be noted that this timeout cannot usually exceed 75 seconds.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_connect_timeout
     */
     uwsgi_connect_timeout ?: string


     /**
     * Enables byte-range support
     * for both cached and uncached responses from the uwsgi server
     * regardless of the “Accept-Ranges” field in these responses.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_force_ranges
     */
     uwsgi_force_ranges ?: "on" | "off"


     /**
     * By default,
     * nginx does not pass the header fields “Status” and
     * “X-Accel-...” from the response of a uwsgi
     * server to a client.
     * The uwsgi_hide_header directive sets additional fields
     * that will not be passed.
     * If, on the contrary, the passing of fields needs to be permitted,
     * the uwsgi_pass_header directive can be used.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_hide_header
     */
     uwsgi_hide_header ?: any


     /**
     * Determines whether the connection with a uwsgi server should be
     * closed when a client closes the connection without waiting
     * for a response.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_ignore_client_abort
     */
     uwsgi_ignore_client_abort ?: "on" | "off"


     /**
     * Disables processing of certain response header fields from the uwsgi server.
     * The following fields can be ignored: “X-Accel-Redirect”,
     * “X-Accel-Expires”, “X-Accel-Limit-Rate” (1.1.6),
     * “X-Accel-Buffering” (1.1.6),
     * “X-Accel-Charset” (1.1.6), “Expires”,
     * “Cache-Control”, “Set-Cookie” (0.8.44),
     * and “Vary” (1.7.7).
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_ignore_headers
     */
     uwsgi_ignore_headers ?: any


     /**
     * Determines whether a uwsgi server responses with codes greater than or equal
     * to 300 should be passed to a client
     * or be intercepted and redirected to nginx for processing
     * with the error_page directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_intercept_errors
     */
     uwsgi_intercept_errors ?: "on" | "off"


     /**
     * Limits the speed of reading the response from the uwsgi server.
     * The rate is specified in bytes per second.
     * The zero value disables rate limiting.
     * The limit is set per a request, and so if nginx simultaneously opens
     * two connections to the uwsgi server,
     * the overall rate will be twice as much as the specified limit.
     * The limitation works only if
     * buffering of responses from the uwsgi
     * server is enabled.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_limit_rate
     */
     uwsgi_limit_rate ?: any


     /**
     * When buffering of responses from the uwsgi
     * server is enabled, and the whole response does not fit into the buffers
     * set by the uwsgi_buffer_size and uwsgi_buffers
     * directives, a part of the response can be saved to a temporary file.
     * This directive sets the maximum size of the temporary file.
     * The size of data written to the temporary file at a time is set
     * by the uwsgi_temp_file_write_size directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_max_temp_file_size
     */
     uwsgi_max_temp_file_size ?: string


     /**
     * Sets the value of the modifier1 field in the
     * uwsgi
     * packet header.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_modifier1
     */
     uwsgi_modifier1 ?: any


     /**
     * Sets the value of the modifier2 field in the
     * uwsgi
     * packet header.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_modifier2
     */
     uwsgi_modifier2 ?: any


     /**
     * Specifies in which cases a request should be passed to the next server:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_next_upstream
     */
     uwsgi_next_upstream ?: "error" | "timeout" | "invalid_header" | "http_500" | "http_503" | "http_403" | "http_404" | "http_429" | "non_idempotent" | string


     /**
     * Limits the time during which a request can be passed to the
     * next server.
     * The 0 value turns off this limitation.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_next_upstream_timeout
     */
     uwsgi_next_upstream_timeout ?: string


     /**
     * Limits the number of possible tries for passing a request to the
     * next server.
     * The 0 value turns off this limitation.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_next_upstream_tries
     */
     uwsgi_next_upstream_tries ?: any


     /**
     * Defines conditions under which the response will not be saved to a cache.
     * If at least one value of the string parameters is not empty and is not
     * equal to “0” then the response will not be saved:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_no_cache
     * @example
     * ```
     * uwsgi_no_cache $cookie_nocache $arg_nocache$arg_comment;
     * uwsgi_no_cache $http_pragma    $http_authorization;
     * ```
     */
     uwsgi_no_cache ?: any


     /**
     * Sets a parameter that should be passed to the uwsgi server.
     * The value can contain text, variables, and their combination.
     * These directives are inherited from the previous configuration level
     * if and only if there are no uwsgi_param directives
     * defined on the current level.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_param
     * @example
     * ```
     * location / {
     *     include uwsgi_params;
     *     ...
     * }
     * uwsgi_param HTTPS $https if_not_empty;
     * ```
     */
     uwsgi_param ?: any


     /**
     * Permits passing otherwise disabled header
     * fields from a uwsgi server to a client.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_pass_header
     */
     uwsgi_pass_header ?: any


     /**
     * Indicates whether the original request body is passed
     * to the uwsgi server.
     * See also the uwsgi_pass_request_headers directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_pass_request_body
     */
     uwsgi_pass_request_body ?: "on" | "off"


     /**
     * Indicates whether the header fields of the original request are passed
     * to the uwsgi server.
     * See also the uwsgi_pass_request_body directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_pass_request_headers
     */
     uwsgi_pass_request_headers ?: "on" | "off"


     /**
     * Defines a timeout for reading a response from the uwsgi server.
     * The timeout is set only between two successive read operations,
     * not for the transmission of the whole response.
     * If the uwsgi server does not transmit anything within this time,
     * the connection is closed.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_read_timeout
     */
     uwsgi_read_timeout ?: string


     /**
     * Enables or disables buffering of a client request body.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_request_buffering
     */
     uwsgi_request_buffering ?: "on" | "off"


     /**
     * Sets a timeout for transmitting a request to the uwsgi server.
     * The timeout is set only between two successive write operations,
     * not for the transmission of the whole request.
     * If the uwsgi server does not receive anything within this time,
     * the connection is closed.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_send_timeout
     */
     uwsgi_send_timeout ?: string


     /**
     * Configures the “TCP keepalive” behavior
     * for outgoing connections to a uwsgi server.
     * By default, the operating system’s settings are in effect for the socket.
     * If the directive is set to the value “on”, the
     * SO_KEEPALIVE socket option is turned on for the socket.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_socket_keepalive
     */
     uwsgi_socket_keepalive ?: "on" | "off"


     /**
     * Specifies a file with the certificate in the PEM format
     * used for authentication to a secured uwsgi server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_ssl_certificate
     */
     uwsgi_ssl_certificate ?: any


     /**
     * Specifies a file with the secret key in the PEM format
     * used for authentication to a secured uwsgi server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_ssl_certificate_key
     */
     uwsgi_ssl_certificate_key ?: any


     /**
     * Specifies the enabled ciphers for requests to a secured uwsgi server.
     * The ciphers are specified in the format understood by the OpenSSL library.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_ssl_ciphers
     */
     uwsgi_ssl_ciphers ?: any


     /**
     * Sets arbitrary OpenSSL configuration
     * commands
     * when establishing a connection with the secured uwsgi server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_ssl_conf_command
     */
     uwsgi_ssl_conf_command ?: any


     /**
     * Specifies a file with revoked certificates (CRL)
     * in the PEM format used to verify
     * the certificate of the secured uwsgi server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_ssl_crl
     */
     uwsgi_ssl_crl ?: any


     /**
     * Allows overriding the server name used to
     * verify
     * the certificate of the secured uwsgi server and to be
     * passed through SNI
     * when establishing a connection with the secured uwsgi server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_ssl_name
     */
     uwsgi_ssl_name ?: any


     /**
     * Specifies a file with passphrases for
     * secret keys
     * where each passphrase is specified on a separate line.
     * Passphrases are tried in turn when loading the key.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_ssl_password_file
     */
     uwsgi_ssl_password_file ?: any


     /**
     * Enables the specified protocols for requests to a secured uwsgi server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_ssl_protocols
     */
     uwsgi_ssl_protocols ?: any


     /**
     * Enables or disables passing of the server name through
     * TLS
     * Server Name Indication extension (SNI, RFC 6066)
     * when establishing a connection with the secured uwsgi server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_ssl_server_name
     */
     uwsgi_ssl_server_name ?: "on" | "off"


     /**
     * Determines whether SSL sessions can be reused when working with
     * a secured uwsgi server.
     * If the errors
     * “SSL3_GET_FINISHED:digest check failed”
     * appear in the logs, try disabling session reuse.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_ssl_session_reuse
     */
     uwsgi_ssl_session_reuse ?: "on" | "off"


     /**
     * Specifies a file with trusted CA certificates in the PEM format
     * used to verify
     * the certificate of the secured uwsgi server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_ssl_trusted_certificate
     */
     uwsgi_ssl_trusted_certificate ?: any


     /**
     * Enables or disables verification of the secured uwsgi server certificate.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_ssl_verify
     */
     uwsgi_ssl_verify ?: "on" | "off"


     /**
     * Sets the verification depth in the secured uwsgi server certificates chain.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_ssl_verify_depth
     */
     uwsgi_ssl_verify_depth ?: any


     /**
     * Enables saving of files to a disk.
     * The on parameter saves files with paths
     * corresponding to the directives
     * alias or
     * root.
     * The off parameter disables saving of files.
     * In addition, the file name can be set explicitly using the
     * string with variables:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_store
     * @example
     * ```
     * uwsgi_store /data/www$original_uri;
     * location /images/ {
     *     root               /data/www;
     *     error_page         404 = /fetch$uri;
     * }
     * 
     * location /fetch/ {
     *     internal;
     * 
     *     uwsgi_pass         backend:9000;
     *     ...
     * 
     *     uwsgi_store        on;
     *     uwsgi_store_access user:rw group:rw all:r;
     *     uwsgi_temp_path    /data/temp;
     * 
     *     alias              /data/www/;
     * }
     * ```
     */
     uwsgi_store ?: "on" | "off" | string


     /**
     * Sets access permissions for newly created files and directories, e.g.:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_store_access
     * @example
     * ```
     * uwsgi_store_access user:rw group:rw all:r;
     * uwsgi_store_access group:rw all:r;
     * ```
     */
     uwsgi_store_access ?: any


     /**
     * Limits the size of data written to a temporary file
     * at a time, when buffering of responses from the uwsgi server
     * to temporary files is enabled.
     * By default, size is limited by two buffers set by the
     * uwsgi_buffer_size and uwsgi_buffers directives.
     * The maximum size of a temporary file is set by the
     * uwsgi_max_temp_file_size directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_temp_file_write_size
     */
     uwsgi_temp_file_write_size ?: string


     /**
     * Defines a directory for storing temporary files
     * with data received from uwsgi servers.
     * Up to three-level subdirectory hierarchy can be used underneath the specified
     * directory.
     * For example, in the following configuration
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_temp_path
     * @example
     * ```
     * uwsgi_temp_path /spool/nginx/uwsgi_temp 1 2;
     * /spool/nginx/uwsgi_temp/7/45/00000123457
     * ```
     */
     uwsgi_temp_path ?: any


     /**
     * Sets the size of the buffer per each request
     * in which the request body may be saved
     * before it is started to be processed.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_v2_module.html#http2_body_preread_size
     */
     http2_body_preread_size ?: string


     /**
     * Sets the maximum size of chunks
     * into which the response body is sliced.
     * A too low value results in higher overhead.
     * A too high value impairs prioritization due to
     * 
     * HOL blocking.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_v2_module.html#http2_chunk_size
     */
     http2_chunk_size ?: string


     /**
     * 
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_v2_module.html#http2_idle_timeout
     */
     http2_idle_timeout ?: string


     /**
     * Limits the maximum number of concurrent
     * push requests in a connection.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_v2_module.html#http2_max_concurrent_pushes
     */
     http2_max_concurrent_pushes ?: any


     /**
     * Sets the maximum number of concurrent HTTP/2 streams
     * in a connection.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_v2_module.html#http2_max_concurrent_streams
     */
     http2_max_concurrent_streams ?: any


     /**
     * 
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_v2_module.html#http2_max_field_size
     */
     http2_max_field_size ?: string


     /**
     * 
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_v2_module.html#http2_max_header_size
     */
     http2_max_header_size ?: string


     /**
     * 
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_v2_module.html#http2_max_requests
     */
     http2_max_requests ?: any


     /**
     * Pre-emptively sends
     * (pushes)
     * a request to the specified uri
     * along with the response to the original request.
     * Only relative URIs with absolute path will be processed,
     * for example:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_v2_module.html#http2_push
     * @example
     * ```
     * http2_push /static/css/main.css;
     * ```
     */
     http2_push ?: "uri" | "off"


     /**
     * Enables automatic conversion of
     * preload
     * links
     * specified in the “Link” response header fields into
     * push
     * requests.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_v2_module.html#http2_push_preload
     */
     http2_push_preload ?: "on" | "off"


     /**
     * Sets the size of the per
     * worker
     * input buffer.
     *
     * @context http
     * @see https://nginx.org/en/docs/http/ngx_http_v2_module.html#http2_recv_buffer_size
     */
     http2_recv_buffer_size ?: string


     /**
     * 
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_v2_module.html#http2_recv_timeout
     */
     http2_recv_timeout ?: string


     /**
     * Specifies the DTD file that declares character entities.
     * This file is compiled at the configuration stage.
     * For technical reasons, the module is unable to use the
     * external subset declared in the processed XML, so it is
     * ignored and a specially defined file is used instead.
     * This file should not describe the XML structure.
     * It is enough to declare just the required character entities, for example:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_xslt_module.html#xml_entities
     * @example
     * ```
     * <!ENTITY nbsp "&#xa0;">
     * ```
     */
     xml_entities ?: string


     /**
     * Allows preserving the “Last-Modified” header field
     * from the original response during XSLT transformations
     * to facilitate response caching.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_xslt_module.html#xslt_last_modified
     */
     xslt_last_modified ?: "on" | "off"


     /**
     * Defines the parameters for XSLT stylesheets.
     * The value is treated as an XPath expression.
     * The value can contain variables.
     * To pass a string value to a stylesheet,
     * the xslt_string_param directive can be used.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_xslt_module.html#xslt_param
     */
     xslt_param ?: any


     /**
     * Defines the string parameters for XSLT stylesheets.
     * XPath expressions in the value are not interpreted.
     * The value can contain variables.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_xslt_module.html#xslt_string_param
     */
     xslt_string_param ?: any


     /**
     * Enables transformations in responses with the specified MIME types
     * in addition to “text/xml”.
     * The special value “*” matches any MIME type (0.8.29).
     * If the transformation result is an HTML response, its MIME type
     * is changed to “text/html”.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_xslt_module.html#xslt_types
     */
     xslt_types ?: any


}

export interface NginxServerDirectives extends NginxAnyDirectives {
     /**
     * Configures logging.
     * Several logs can be specified on the same configuration level (1.5.2).
     * If on the main configuration level writing a log to a file
     * is not explicitly defined, the default file will be used.
     *
     * @context main, http, mail, stream, server, location
     * @see https://nginx.org/en/docs/ngx_core_module.html#error_log
     */
     error_log ?: any


     /**
     * If disabled, redirects issued by nginx will be relative.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#absolute_redirect
     */
     absolute_redirect ?: "on" | "off"


     /**
     * Enables or disables the use of asynchronous file I/O (AIO)
     * on FreeBSD and Linux:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#aio
     * @example
     * ```
     * location /video/ {
     *     aio            on;
     *     output_buffers 1 64k;
     * }
     * options VFS_AIO
     * kldload aio
     * location /video/ {
     *     aio            on;
     *     directio       512;
     *     output_buffers 1 128k;
     * }
     * location /video/ {
     *     sendfile       on;
     *     aio            on;
     *     directio       8m;
     * }
     * location /video/ {
     *     sendfile       on;
     *     aio            threads;
     * }
     * aio threads=pool$disk;
     * ```
     */
     aio ?: "on" | "off" | string


     /**
     * If aio is enabled, specifies whether it is used for writing files.
     * Currently, this only works when using
     * aio threads
     * and is limited to writing temporary files
     * with data received from proxied servers.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#aio_write
     */
     aio_write ?: "on" | "off"


     /**
     * Delays processing of unauthorized requests with 401 response code
     * to prevent timing attacks when access is limited by
     * password, by the
     * result of subrequest,
     * or by JWT.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#auth_delay
     */
     auth_delay ?: string


     /**
     * Allows disabling chunked transfer encoding in HTTP/1.1.
     * It may come in handy when using a software failing to support
     * chunked encoding despite the standard’s requirement.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#chunked_transfer_encoding
     */
     chunked_transfer_encoding ?: "on" | "off"


     /**
     * Sets buffer size for reading client request body.
     * In case the request body is larger than the buffer,
     * the whole body or only its part is written to a
     * temporary file.
     * By default, buffer size is equal to two memory pages.
     * This is 8K on x86, other 32-bit platforms, and x86-64.
     * It is usually 16K on other 64-bit platforms.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#client_body_buffer_size
     */
     client_body_buffer_size ?: string


     /**
     * Determines whether nginx should save the entire client request body
     * into a file.
     * This directive can be used during debugging, or when using the
     * $request_body_file
     * variable, or the
     * $r->request_body_file
     * method of the module
     * ngx_http_perl_module.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#client_body_in_file_only
     */
     client_body_in_file_only ?: "on" | "clean" | "off"


     /**
     * Determines whether nginx should save the entire client request body
     * in a single buffer.
     * The directive is recommended when using the
     * $request_body
     * variable, to save the number of copy operations involved.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#client_body_in_single_buffer
     */
     client_body_in_single_buffer ?: "on" | "off"


     /**
     * Defines a directory for storing temporary files holding client request bodies.
     * Up to three-level subdirectory hierarchy can be used under the specified
     * directory.
     * For example, in the following configuration
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#client_body_temp_path
     * @example
     * ```
     * client_body_temp_path /spool/nginx/client_temp 1 2;
     * /spool/nginx/client_temp/7/45/00000123457
     * ```
     */
     client_body_temp_path ?: any


     /**
     * Defines a timeout for reading client request body.
     * The timeout is set only for a period between two successive read operations,
     * not for the transmission of the whole request body.
     * If a client does not transmit anything within this time, the
     * request is terminated with the
     * 408 (Request Time-out)
     * error.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#client_body_timeout
     */
     client_body_timeout ?: string


     /**
     * Sets buffer size for reading client request header.
     * For most requests, a buffer of 1K bytes is enough.
     * However, if a request includes long cookies, or comes from a WAP client,
     * it may not fit into 1K.
     * If a request line or a request header field does not fit into
     * this buffer then larger buffers, configured by the
     * large_client_header_buffers directive,
     * are allocated.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#client_header_buffer_size
     */
     client_header_buffer_size ?: string


     /**
     * Defines a timeout for reading client request header.
     * If a client does not transmit the entire header within this time, the
     * request is terminated with the
     * 408 (Request Time-out)
     * error.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#client_header_timeout
     */
     client_header_timeout ?: string


     /**
     * Sets the maximum allowed size of the client request body.
     * If the size in a request exceeds the configured value, the
     * 413 (Request Entity Too Large)
     * error is returned to the client.
     * Please be aware that
     * browsers cannot correctly display
     * this error.
     * Setting size to 0 disables checking of client
     * request body size.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#client_max_body_size
     */
     client_max_body_size ?: string


     /**
     * Allows accurate tuning of per-connection memory allocations.
     * This directive has minimal impact on performance
     * and should not generally be used.
     * By default, the size is equal to
     * 256 bytes on 32-bit platforms and 512 bytes on 64-bit platforms.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#connection_pool_size
     */
     connection_pool_size ?: string


     /**
     * Defines the default MIME type of a response.
     * Mapping of file name extensions to MIME types can be set
     * with the types directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#default_type
     */
     default_type ?: any


     /**
     * Enables the use of
     * the O_DIRECT flag (FreeBSD, Linux),
     * the F_NOCACHE flag (macOS),
     * or the directio() function (Solaris),
     * when reading files that are larger than or equal to
     * the specified size.
     * The directive automatically disables (0.7.15) the use of
     * sendfile
     * for a given request.
     * It can be useful for serving large files:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#directio
     * @example
     * ```
     * directio 4m;
     * ```
     */
     directio ?: "size" | "off"


     /**
     * Sets the alignment for
     * directio.
     * In most cases, a 512-byte alignment is enough.
     * However, when using XFS under Linux, it needs to be increased to 4K.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#directio_alignment
     */
     directio_alignment ?: string


     /**
     * Determines how symbolic links should be treated when opening files:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#disable_symlinks
     * @example
     * ```
     * disable_symlinks on from=$document_root;
     * ```
     */
     disable_symlinks ?: any


     /**
     * Defines the URI that will be shown for the specified errors.
     * A uri value can contain variables.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#error_page
     * @example
     * ```
     * error_page 404             /404.html;
     * error_page 500 502 503 504 /50x.html;
     * error_page 404 =200 /empty.gif;
     * error_page 404 = /404.php;
     * location / {
     *     error_page 404 = @fallback;
     * }
     * 
     * location @fallback {
     *     proxy_pass http://backend;
     * }
     * error_page 403      http://example.com/forbidden.html;
     * error_page 404 =301 http://example.com/notfound.html;
     * ```
     */
     error_page ?: any


     /**
     * Enables or disables automatic generation of the “ETag”
     * response header field for static resources.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#etag
     */
     etag ?: "on" | "off"


     /**
     * Specifies how to compare modification time of a response
     * with the time in the
     * “If-Modified-Since”
     * request header field:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#if_modified_since
     */
     if_modified_since ?: "off" | "exact" | "before"


     /**
     * Controls whether header fields with invalid names should be ignored.
     * Valid names are composed of English letters, digits, hyphens, and possibly
     * underscores (as controlled by the underscores_in_headers
     * directive).
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#ignore_invalid_headers
     */
     ignore_invalid_headers ?: "on" | "off"


     /**
     * Disables keep-alive connections with misbehaving browsers.
     * The browser parameters specify which
     * browsers will be affected.
     * The value msie6 disables keep-alive connections
     * with old versions of MSIE, once a POST request is received.
     * The value safari disables keep-alive connections
     * with Safari and Safari-like browsers on macOS and macOS-like
     * operating systems.
     * The value none enables keep-alive connections
     * with all browsers.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#keepalive_disable
     */
     keepalive_disable ?: "none" | string


     /**
     * Sets the maximum number of requests that can be
     * served through one keep-alive connection.
     * After the maximum number of requests are made, the connection is closed.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#keepalive_requests
     */
     keepalive_requests ?: any


     /**
     * Limits the maximum time during which
     * requests can be processed through one keep-alive connection.
     * After this time is reached, the connection is closed
     * following the subsequent request processing.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#keepalive_time
     */
     keepalive_time ?: string


     /**
     * The first parameter sets a timeout during which a keep-alive
     * client connection will stay open on the server side.
     * The zero value disables keep-alive client connections.
     * The optional second parameter sets a value in the
     * “Keep-Alive: timeout=time”
     * response header field.
     * Two parameters may differ.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#keepalive_timeout
     */
     keepalive_timeout ?: any


     /**
     * Sets the maximum number and size of
     * buffers used for reading large client request header.
     * A request line cannot exceed the size of one buffer, or the
     * 414 (Request-URI Too Large)
     * error is returned to the client.
     * A request header field cannot exceed the size of one buffer as well, or the
     * 400 (Bad Request)
     * error is returned to the client.
     * Buffers are allocated only on demand.
     * By default, the buffer size is equal to 8K bytes.
     * If after the end of request processing a connection is transitioned
     * into the keep-alive state, these buffers are released.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#large_client_header_buffers
     */
     large_client_header_buffers ?: any


     /**
     * Limits the rate of response transmission to a client.
     * The rate is specified in bytes per second.
     * The zero value disables rate limiting.
     * 
     * The limit is set per a request, and so if a client simultaneously opens
     * two connections, the overall rate will be twice as much
     * as the specified limit.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#limit_rate
     * @example
     * ```
     * map $slow $rate {
     *     1     4k;
     *     2     8k;
     * }
     * 
     * limit_rate $rate;
     * server {
     * 
     *     if ($slow) {
     *         set $limit_rate 4k;
     *     }
     * 
     *     ...
     * }
     * ```
     */
     limit_rate ?: any


     /**
     * Sets the initial amount after which the further transmission
     * of a response to a client will be rate limited.
     * Parameter value can contain variables (1.17.0).
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#limit_rate_after
     * @example
     * ```
     * location /flv/ {
     *     flv;
     *     limit_rate_after 500k;
     *     limit_rate       50k;
     * }
     * ```
     */
     limit_rate_after ?: string


     /**
     * Controls how nginx closes client connections.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#lingering_close
     */
     lingering_close ?: "off" | "on" | "always"


     /**
     * When lingering_close is in effect,
     * this directive specifies the maximum time during which nginx
     * will process (read and ignore) additional data coming from a client.
     * After that, the connection will be closed, even if there will be
     * more data.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#lingering_time
     */
     lingering_time ?: string


     /**
     * When lingering_close is in effect, this directive specifies
     * the maximum waiting time for more client data to arrive.
     * If data are not received during this time, the connection is closed.
     * Otherwise, the data are read and ignored, and nginx starts waiting
     * for more data again.
     * The “wait-read-ignore” cycle is repeated, but no longer than specified by the
     * lingering_time directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#lingering_timeout
     */
     lingering_timeout ?: string


     /**
     * Sets the address and port for IP,
     * or the path for a UNIX-domain socket on which
     * the server will accept requests.
     * Both address and port,
     * or only address or only port can be specified.
     * An address may also be a hostname, for example:
     *
     * @context server
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#listen
     * @example
     * ```
     * listen 127.0.0.1:8000;
     * listen 127.0.0.1;
     * listen 8000;
     * listen *:8000;
     * listen localhost:8000;
     * listen [::]:8000;
     * listen [::1];
     * listen unix:/var/run/nginx.sock;
     * listen 127.0.0.1 default_server accept_filter=dataready backlog=1024;
     * ```
     */
     listen ?: string


     /**
     * Sets configuration depending on a request URI.
     *
     * @context server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#location
     * @example
     * ```
     * location = / {
     *     [ configuration A ]
     * }
     * 
     * location / {
     *     [ configuration B ]
     * }
     * 
     * location /documents/ {
     *     [ configuration C ]
     * }
     * 
     * location ^~ /images/ {
     *     [ configuration D ]
     * }
     * 
     * location ~* \.(gif|jpg|jpeg)$ {
     *     [ configuration E ]
     * }
     * location /user/ {
     *     proxy_pass http://user.example.com;
     * }
     * 
     * location = /user {
     *     proxy_pass http://login.example.com;
     * }
     * ```
     */
     location ?: NginxLocationDirectives | string


     /**
     * Enables or disables logging of errors about not found files into
     * error_log.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#log_not_found
     */
     log_not_found ?: "on" | "off"


     /**
     * Enables or disables logging of subrequests into
     * access_log.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#log_subrequest
     */
     log_subrequest ?: "on" | "off"


     /**
     * Limits the maximum allowed number of ranges in byte-range requests.
     * Requests that exceed the limit are processed as if there were no
     * byte ranges specified.
     * By default, the number of ranges is not limited.
     * The zero value disables the byte-range support completely.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#max_ranges
     */
     max_ranges ?: any


     /**
     * Enables or disables compression of two or more adjacent slashes
     * in a URI into a single slash.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#merge_slashes
     * @example
     * ```
     * location /scripts/ {
     *     ...
     * }
     * ```
     */
     merge_slashes ?: "on" | "off"


     /**
     * Enables or disables adding comments to responses for MSIE clients with status
     * greater than 400 to increase the response size to 512 bytes.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#msie_padding
     */
     msie_padding ?: "on" | "off"


     /**
     * Enables or disables issuing refreshes instead of redirects for MSIE clients.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#msie_refresh
     */
     msie_refresh ?: "on" | "off"


     /**
     * Configures a cache that can store:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#open_file_cache
     * @example
     * ```
     * open_file_cache          max=1000 inactive=20s;
     * open_file_cache_valid    30s;
     * open_file_cache_min_uses 2;
     * open_file_cache_errors   on;
     * ```
     */
     open_file_cache ?: any


     /**
     * Enables or disables caching of file lookup errors by
     * open_file_cache.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#open_file_cache_errors
     */
     open_file_cache_errors ?: "on" | "off"


     /**
     * Sets the minimum number of file accesses during
     * the period configured by the inactive parameter
     * of the open_file_cache directive, required for a file
     * descriptor to remain open in the cache.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#open_file_cache_min_uses
     */
     open_file_cache_min_uses ?: any


     /**
     * Sets a time after which
     * open_file_cache
     * elements should be validated.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#open_file_cache_valid
     */
     open_file_cache_valid ?: string


     /**
     * Sets the number and size of the
     * buffers used for reading a response from a disk.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#output_buffers
     */
     output_buffers ?: any


     /**
     * Enables or disables specifying the port in
     * absolute redirects issued by nginx.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#port_in_redirect
     */
     port_in_redirect ?: "on" | "off"


     /**
     * If possible, the transmission of client data will be postponed until
     * nginx has at least size bytes of data to send.
     * The zero value disables postponing data transmission.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#postpone_output
     */
     postpone_output ?: string


     /**
     * Sets the amount of pre-reading for the kernel when working with file.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#read_ahead
     */
     read_ahead ?: string


     /**
     * Enables or disables doing several redirects using the
     * error_page
     * directive.
     * The number of such redirects is limited.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#recursive_error_pages
     */
     recursive_error_pages ?: "on" | "off"


     /**
     * Allows accurate tuning of per-request memory allocations.
     * This directive has minimal impact on performance
     * and should not generally be used.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#request_pool_size
     */
     request_pool_size ?: string


     /**
     * Enables or disables resetting timed out connections
     * and connections
     * closed
     * with the non-standard code 444 (1.15.2).
     * The reset is performed as follows.
     * Before closing a socket, the
     * SO_LINGER
     * option is set on it with a timeout value of 0.
     * When the socket is closed, TCP RST is sent to the client, and all memory
     * occupied by this socket is released.
     * This helps avoid keeping an already closed socket with filled buffers
     * in a FIN_WAIT1 state for a long time.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#reset_timedout_connection
     */
     reset_timedout_connection ?: "on" | "off"


     /**
     * Configures name servers used to resolve names of upstream servers
     * into addresses, for example:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#resolver
     * @example
     * ```
     * resolver 127.0.0.1 [::1]:5353;
     * resolver 127.0.0.1 [::1]:5353 valid=30s;
     * ```
     */
     resolver ?: any


     /**
     * Sets a timeout for name resolution, for example:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#resolver_timeout
     * @example
     * ```
     * resolver_timeout 5s;
     * ```
     */
     resolver_timeout ?: string


     /**
     * Sets the root directory for requests.
     * For example, with the following configuration
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#root
     * @example
     * ```
     * location /i/ {
     *     root /data/w3;
     * }
     * ```
     */
     root ?: string


     /**
     * Allows access if all (all) or at least one
     * (any) of the
     * ngx_http_access_module,
     * ngx_http_auth_basic_module,
     * ngx_http_auth_request_module,
     * or
     * ngx_http_auth_jwt_module
     * modules allow access.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#satisfy
     * @example
     * ```
     * location / {
     *     satisfy any;
     * 
     *     allow 192.168.1.0/32;
     *     deny  all;
     * 
     *     auth_basic           "closed site";
     *     auth_basic_user_file conf/htpasswd;
     * }
     * ```
     */
     satisfy ?: "all" | "any"


     /**
     * If the directive is set to a non-zero value, nginx will try to minimize
     * the number of send operations on client sockets by using either
     * NOTE_LOWAT flag of the
     * kqueue method
     * or the SO_SNDLOWAT socket option.
     * In both cases the specified size is used.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#send_lowat
     */
     send_lowat ?: string


     /**
     * Sets a timeout for transmitting a response to the client.
     * The timeout is set only between two successive write operations,
     * not for the transmission of the whole response.
     * If the client does not receive anything within this time,
     * the connection is closed.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#send_timeout
     */
     send_timeout ?: string


     /**
     * Enables or disables the use of
     * sendfile().
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#sendfile
     * @example
     * ```
     * location /video/ {
     *     sendfile       on;
     *     tcp_nopush     on;
     *     aio            on;
     * }
     * ```
     */
     sendfile ?: "on" | "off"


     /**
     * Limits the amount of data that can be
     * transferred in a single sendfile() call.
     * Without the limit, one fast connection may seize the worker process entirely.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#sendfile_max_chunk
     */
     sendfile_max_chunk ?: string


     /**
     * Sets names of a virtual server, for example:
     *
     * @context server
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#server_name
     * @example
     * ```
     * server {
     *     server_name example.com www.example.com;
     * }
     * server {
     *     server_name example.com *.example.com www.example.*;
     * }
     * server {
     *     server_name .example.com;
     * }
     * server {
     *     server_name www.example.com ~^www\d+\.example\.com$;
     * }
     * server {
     *     server_name ~^(www\.)?(.+)$;
     * 
     *     location / {
     *         root /sites/$2;
     *     }
     * }
     * 
     * server {
     *     server_name _;
     * 
     *     location / {
     *         root /sites/default;
     *     }
     * }
     * server {
     *     server_name ~^(www\.)?(?<domain>.+)$;
     * 
     *     location / {
     *         root /sites/$domain;
     *     }
     * }
     * 
     * server {
     *     server_name _;
     * 
     *     location / {
     *         root /sites/default;
     *     }
     * }
     * server {
     *     server_name www.example.com "";
     * }
     * ```
     */
     server_name ?: any


     /**
     * Enables or disables the use of the primary server name, specified by the
     * server_name directive,
     * in absolute redirects issued by nginx.
     * When the use of the primary server name is disabled, the name from the
     * “Host” request header field is used.
     * If this field is not present, the IP address of the server is used.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#server_name_in_redirect
     */
     server_name_in_redirect ?: "on" | "off"


     /**
     * Enables or disables emitting nginx version on error pages and in the
     * “Server” response header field.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#server_tokens
     */
     server_tokens ?: "on" | "off" | "build" | string


     /**
     * Sets the size of the buffer used for
     * storing the response body of a subrequest.
     * By default, the buffer size is equal to one memory page.
     * This is either 4K or 8K, depending on a platform.
     * It can be made smaller, however.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#subrequest_output_buffer_size
     */
     subrequest_output_buffer_size ?: string


     /**
     * Enables or disables the use of the TCP_NODELAY option.
     * The option is enabled when a connection is transitioned into the
     * keep-alive state.
     * Additionally, it is enabled on SSL connections,
     * for unbuffered proxying,
     * and for WebSocket proxying.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#tcp_nodelay
     */
     tcp_nodelay ?: "on" | "off"


     /**
     * Enables or disables the use of
     * the TCP_NOPUSH socket option on FreeBSD
     * or the TCP_CORK socket option on Linux.
     * The options are enabled only when sendfile is used.
     * Enabling the option allows
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#tcp_nopush
     */
     tcp_nopush ?: "on" | "off"


     /**
     * Checks the existence of files in the specified order and uses
     * the first found file for request processing; the processing
     * is performed in the current context.
     * The path to a file is constructed from the
     * file parameter
     * according to the
     * root and alias directives.
     * It is possible to check directory’s existence by specifying
     * a slash at the end of a name, e.g. “$uri/”.
     * If none of the files were found, an internal redirect to the
     * uri specified in the last parameter is made.
     * For example:
     *
     * @context server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#try_files
     * @example
     * ```
     * location /images/ {
     *     try_files $uri /images/default.gif;
     * }
     * 
     * location = /images/default.gif {
     *     expires 30s;
     * }
     * location / {
     *     try_files $uri $uri/index.html $uri.html =404;
     * }
     * location / {
     *     try_files /system/maintenance.html
     *               $uri $uri/index.html $uri.html
     *               @mongrel;
     * }
     * 
     * location @mongrel {
     *     proxy_pass http://mongrel;
     * }
     * location / {
     *     try_files $uri $uri/ @drupal;
     * }
     * 
     * location ~ \.php$ {
     *     try_files $uri @drupal;
     * 
     *     fastcgi_pass ...;
     * 
     *     fastcgi_param SCRIPT_FILENAME /path/to$fastcgi_script_name;
     *     fastcgi_param SCRIPT_NAME     $fastcgi_script_name;
     *     fastcgi_param QUERY_STRING    $args;
     * 
     *     ... other fastcgi_param's
     * }
     * 
     * location @drupal {
     *     fastcgi_pass ...;
     * 
     *     fastcgi_param SCRIPT_FILENAME /path/to/index.php;
     *     fastcgi_param SCRIPT_NAME     /index.php;
     *     fastcgi_param QUERY_STRING    q=$uri&$args;
     * 
     *     ... other fastcgi_param's
     * }
     * location / {
     *     try_files $uri $uri/ @drupal;
     * }
     * location / {
     *     error_page 404 = @drupal;
     *     log_not_found off;
     * }
     * location ~ \.php$ {
     *     try_files $uri @drupal;
     * 
     *     fastcgi_pass ...;
     * 
     *     fastcgi_param SCRIPT_FILENAME /path/to$fastcgi_script_name;
     * 
     *     ...
     * }
     * location / {
     *     try_files $uri $uri/ @wordpress;
     * }
     * 
     * location ~ \.php$ {
     *     try_files $uri @wordpress;
     * 
     *     fastcgi_pass ...;
     * 
     *     fastcgi_param SCRIPT_FILENAME /path/to$fastcgi_script_name;
     *     ... other fastcgi_param's
     * }
     * 
     * location @wordpress {
     *     fastcgi_pass ...;
     * 
     *     fastcgi_param SCRIPT_FILENAME /path/to/index.php;
     *     ... other fastcgi_param's
     * }
     * ```
     */
     try_files ?: any


     /**
     * Maps file name extensions to MIME types of responses.
     * Extensions are case-insensitive.
     * Several extensions can be mapped to one type, for example:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#types
     * @example
     * ```
     * types {
     *     application/octet-stream bin exe dll;
     *     application/octet-stream deb;
     *     application/octet-stream dmg;
     * }
     * location /download/ {
     *     types        { }
     *     default_type application/octet-stream;
     * }
     * ```
     */
     types ?: any


     /**
     * Sets the bucket size for the types hash tables.
     * The details of setting up hash tables are provided in a separate
     * document.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#types_hash_bucket_size
     */
     types_hash_bucket_size ?: string


     /**
     * Sets the maximum size of the types hash tables.
     * The details of setting up hash tables are provided in a separate
     * document.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#types_hash_max_size
     */
     types_hash_max_size ?: string


     /**
     * Enables or disables the use of underscores in client request header fields.
     * When the use of underscores is disabled, request header fields whose names
     * contain underscores are
     * marked as invalid and become subject to the
     * ignore_invalid_headers directive.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#underscores_in_headers
     */
     underscores_in_headers ?: "on" | "off"


     /**
     * Allows access for the specified network or address.
     * If the special value unix: is specified (1.5.1),
     * allows access for all UNIX-domain sockets.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_access_module.html#allow
     */
     allow ?: "address" | "CIDR" | "unix:" | "all" | string[]


     /**
     * Denies access for the specified network or address.
     * If the special value unix: is specified (1.5.1),
     * denies access for all UNIX-domain sockets.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_access_module.html#deny
     */
     deny ?: "address" | "CIDR" | "unix:" | "all" | string[]


     /**
     * Adds the text returned as a result of processing a given subrequest
     * before the response body.
     * An empty string ("") as a parameter cancels addition
     * inherited from the previous configuration level.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_addition_module.html#add_before_body
     */
     add_before_body ?: any


     /**
     * Adds the text returned as a result of processing a given subrequest
     * after the response body.
     * An empty string ("") as a parameter cancels addition
     * inherited from the previous configuration level.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_addition_module.html#add_after_body
     */
     add_after_body ?: any


     /**
     * Allows adding text in responses with the specified MIME types,
     * in addition to “text/html”.
     * The special value “*” matches any MIME type (0.8.29).
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_addition_module.html#addition_types
     */
     addition_types ?: any


     /**
     * Enables collection of virtual
     * http
     * or
     * stream
     * server status information in the specified zone.
     * Several servers may share the same zone.
     *
     * @context server, location
     * @see https://nginx.org/en/docs/http/ngx_http_api_module.html#status_zone
     */
     status_zone ?: any


     /**
     * Enables validation of user name and password using the
     * “HTTP Basic Authentication” protocol.
     * The specified parameter is used as a realm.
     * Parameter value can contain variables (1.3.10, 1.2.7).
     * The special value off cancels the effect
     * of the auth_basic directive
     * inherited from the previous configuration level.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_auth_basic_module.html#auth_basic
     */
     auth_basic ?: string | "off"


     /**
     * Specifies a file that keeps user names and passwords,
     * in the following format:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_auth_basic_module.html#auth_basic_user_file
     * @example
     * ```
     * # comment
     * name1:password1
     * name2:password2:comment
     * name3:password3
     * ```
     */
     auth_basic_user_file ?: any


     /**
     * Enables validation of JSON Web Token.
     * The specified string is used as a realm.
     * Parameter value can contain variables.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_auth_jwt_module.html#auth_jwt
     * @example
     * ```
     * auth_jwt "closed site" token=$cookie_auth_token;
     * ```
     */
     auth_jwt ?: "string    [token=$variable]" | "off"


     /**
     * Specifies a file in
     * JSON Web Key Set
     * format for validating JWT signature.
     * Parameter value can contain variables.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_auth_jwt_module.html#auth_jwt_key_file
     * @example
     * ```
     * auth_jwt_key_file conf/keys.json;
     * auth_jwt_key_file conf/key.jwk;
     * ```
     */
     auth_jwt_key_file ?: any


     /**
     * Allows retrieving a
     * JSON Web Key Set
     * file from a subrequest for validating JWT signature and
     * sets the URI where the subrequest will be sent to.
     * Parameter value can contain variables.
     * To avoid validation overhead,
     * it is recommended to cache the key file:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_auth_jwt_module.html#auth_jwt_key_request
     * @example
     * ```
     * proxy_cache_path /data/nginx/cache levels=1 keys_zone=foo:10m;
     * 
     * server {
     *     ...
     * 
     *     location / {
     *         auth_jwt             "closed site";
     *         auth_jwt_key_request /jwks_uri;
     *     }
     * 
     *     location = /jwks_uri {
     *         internal;
     *         proxy_cache foo;
     *         proxy_pass  http://idp.example.com/keys;
     *     }
     * }
     * auth_jwt_key_request /jwks_uri;
     * auth_jwt_key_request /jwks2_uri;
     * ```
     */
     auth_jwt_key_request ?: any


     /**
     * Sets the maximum allowable leeway to compensate
     * clock skew when verifying the
     * exp
     * and
     * nbf
     * JWT claims.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_auth_jwt_module.html#auth_jwt_leeway
     */
     auth_jwt_leeway ?: string


     /**
     * Specifies which type of JSON Web Token to expect:
     * JWS (signed),
     * JWE (encrypted),
     * or signed and then encrypted
     * Nested JWT (nested) (1.21.0).
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_auth_jwt_module.html#auth_jwt_type
     */
     auth_jwt_type ?: "signed" | "encrypted" | "nested"


     /**
     * Defines additional conditions for JWT validation.
     * The value can contain text, variables, and their combination.
     * The authentication will succeed only
     * if all the values are not empty and are not equal to “0”.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_auth_jwt_module.html#auth_jwt_require
     * @example
     * ```
     * map $jwt_claim_iss $valid_jwt_iss {
     *     "good" 1;
     * }
     * ...
     * 
     * auth_jwt_require $valid_jwt_iss;
     * ```
     */
     auth_jwt_require ?: any


     /**
     * Enables authorization based on the result of a subrequest and sets
     * the URI to which the subrequest will be sent.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_auth_request_module.html#auth_request
     */
     auth_request ?: "uri" | "off"


     /**
     * Sets the request variable to the given
     * value after the authorization request completes.
     * The value may contain variables from the authorization request,
     * such as $upstream_http_*.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_auth_request_module.html#auth_request_set
     */
     auth_request_set ?: any


     /**
     * Enables or disables the directory listing output.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_autoindex_module.html#autoindex
     */
     autoindex ?: "on" | "off"


     /**
     * For the HTML format,
     * specifies whether exact file sizes should be output in the directory listing,
     * or rather rounded to kilobytes, megabytes, and gigabytes.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_autoindex_module.html#autoindex_exact_size
     */
     autoindex_exact_size ?: "on" | "off"


     /**
     * Sets the format of a directory listing.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_autoindex_module.html#autoindex_format
     */
     autoindex_format ?: "html" | "xml" | "json" | "jsonp"


     /**
     * For the HTML format,
     * specifies whether times in the directory listing should be
     * output in the local time zone or UTC.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_autoindex_module.html#autoindex_localtime
     */
     autoindex_localtime ?: "on" | "off"


     /**
     * If any of the specified substrings is found in the “User-Agent”
     * request header field, the browser will be considered ancient.
     * The special string “netscape4” corresponds to the
     * regular expression “^Mozilla/[1-4]”.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_browser_module.html#ancient_browser
     */
     ancient_browser ?: any


     /**
     * Sets a value for the $ancient_browser variables.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_browser_module.html#ancient_browser_value
     */
     ancient_browser_value ?: any


     /**
     * Specifies a version starting from which a browser is considered modern.
     * A browser can be any one of the following: msie,
     * gecko (browsers based on Mozilla),
     * opera, safari,
     * or konqueror.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_browser_module.html#modern_browser
     */
     modern_browser ?: any


     /**
     * Sets a value for the $modern_browser variables.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_browser_module.html#modern_browser_value
     */
     modern_browser_value ?: any


     /**
     * Adds the specified charset to the “Content-Type”
     * response header field.
     * If this charset is different from the charset specified
     * in the source_charset directive, a conversion is performed.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_charset_module.html#charset
     * @example
     * ```
     * charset $charset;
     * charset_map iso-8859-5 _ { }
     * ```
     */
     charset ?: string | "off"


     /**
     * Enables module processing in responses with the specified MIME types
     * in addition to “text/html”.
     * The special value “*” matches any MIME type (0.8.29).
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_charset_module.html#charset_types
     */
     charset_types ?: any


     /**
     * Determines whether a conversion should be performed for answers
     * received from a proxied or a FastCGI/uwsgi/SCGI/gRPC server
     * when the answers already carry a charset in the “Content-Type”
     * response header field.
     * If conversion is enabled, a charset specified in the received
     * response is used as a source charset.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_charset_module.html#override_charset
     */
     override_charset ?: "on" | "off"


     /**
     * Defines the source charset of a response.
     * If this charset is different from the charset specified
     * in the charset directive, a conversion is performed.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_charset_module.html#source_charset
     */
     source_charset ?: any


     /**
     * The WebDAV specification only allows creating files in already
     * existing directories.
     * This directive allows creating all needed intermediate directories.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_dav_module.html#create_full_put_path
     */
     create_full_put_path ?: "on" | "off"


     /**
     * Sets access permissions for newly created files and directories, e.g.:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_dav_module.html#dav_access
     * @example
     * ```
     * dav_access user:rw group:rw all:r;
     * dav_access group:rw all:r;
     * ```
     */
     dav_access ?: any


     /**
     * Allows the specified HTTP and WebDAV methods.
     * The parameter off denies all methods processed
     * by this module.
     * The following methods are supported:
     * PUT, DELETE, MKCOL,
     * COPY, and MOVE.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_dav_module.html#dav_methods
     */
     dav_methods ?: "off" | string


     /**
     * Allows the DELETE method to remove files provided that
     * the number of elements in a request path is not less than the specified
     * number.
     * For example, the directive
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_dav_module.html#min_delete_depth
     * @example
     * ```
     * min_delete_depth 4;
     * /users/00/00/name
     * /users/00/00/name/pic.jpg
     * /users/00/00/page.html
     * /users/00/00
     * ```
     */
     min_delete_depth ?: any


     /**
     * Sets the size of the buffer used for
     * reading the .f4x index file.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_f4f_module.html#f4f_buffer_size
     */
     f4f_buffer_size ?: string


     /**
     * Makes outgoing connections to a FastCGI server originate
     * from the specified local IP address with an optional port (1.11.2).
     * Parameter value can contain variables (1.3.12).
     * The special value off (1.3.12) cancels the effect
     * of the fastcgi_bind directive
     * inherited from the previous configuration level, which allows the
     * system to auto-assign the local IP address and port.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_bind
     * @example
     * ```
     * fastcgi_bind $remote_addr transparent;
     * ```
     */
     fastcgi_bind ?: "address    [transparent]" | "off"


     /**
     * Sets the size of the buffer used for reading the first part
     * of the response received from the FastCGI server.
     * This part usually contains a small response header.
     * By default, the buffer size is equal to one memory page.
     * This is either 4K or 8K, depending on a platform.
     * It can be made smaller, however.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_buffer_size
     */
     fastcgi_buffer_size ?: string


     /**
     * Enables or disables buffering of responses from the FastCGI server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_buffering
     */
     fastcgi_buffering ?: "on" | "off"


     /**
     * Sets the number and size of the
     * buffers used for reading a response from the FastCGI server,
     * for a single connection.
     * By default, the buffer size is equal to one memory page.
     * This is either 4K or 8K, depending on a platform.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_buffers
     */
     fastcgi_buffers ?: any


     /**
     * When buffering of responses from the FastCGI
     * server is enabled, limits the total size of buffers that
     * can be busy sending a response to the client while the response is not
     * yet fully read.
     * In the meantime, the rest of the buffers can be used for reading the response
     * and, if needed, buffering part of the response to a temporary file.
     * By default, size is limited by the size of two buffers set by the
     * fastcgi_buffer_size and fastcgi_buffers directives.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_busy_buffers_size
     */
     fastcgi_busy_buffers_size ?: string


     /**
     * Defines a shared memory zone used for caching.
     * The same zone can be used in several places.
     * Parameter value can contain variables (1.7.9).
     * The off parameter disables caching inherited
     * from the previous configuration level.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_cache
     */
     fastcgi_cache ?: "zone" | "off"


     /**
     * Allows starting a background subrequest
     * to update an expired cache item,
     * while a stale cached response is returned to the client.
     * Note that it is necessary to
     * allow
     * the usage of a stale cached response when it is being updated.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_cache_background_update
     */
     fastcgi_cache_background_update ?: "on" | "off"


     /**
     * Defines conditions under which the response will not be taken from a cache.
     * If at least one value of the string parameters is not empty and is not
     * equal to “0” then the response will not be taken from the cache:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_cache_bypass
     * @example
     * ```
     * fastcgi_cache_bypass $cookie_nocache $arg_nocache$arg_comment;
     * fastcgi_cache_bypass $http_pragma    $http_authorization;
     * ```
     */
     fastcgi_cache_bypass ?: any


     /**
     * Defines a key for caching, for example
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_cache_key
     * @example
     * ```
     * fastcgi_cache_key localhost:9000$request_uri;
     * ```
     */
     fastcgi_cache_key ?: any


     /**
     * When enabled, only one request at a time will be allowed to populate
     * a new cache element identified according to the fastcgi_cache_key
     * directive by passing a request to a FastCGI server.
     * Other requests of the same cache element will either wait
     * for a response to appear in the cache or the cache lock for
     * this element to be released, up to the time set by the
     * fastcgi_cache_lock_timeout directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_cache_lock
     */
     fastcgi_cache_lock ?: "on" | "off"


     /**
     * If the last request passed to the FastCGI server
     * for populating a new cache element
     * has not completed for the specified time,
     * one more request may be passed to the FastCGI server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_cache_lock_age
     */
     fastcgi_cache_lock_age ?: string


     /**
     * Sets a timeout for fastcgi_cache_lock.
     * When the time expires,
     * the request will be passed to the FastCGI server,
     * however, the response will not be cached.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_cache_lock_timeout
     */
     fastcgi_cache_lock_timeout ?: string


     /**
     * Sets an offset in bytes for byte-range requests.
     * If the range is beyond the offset,
     * the range request will be passed to the FastCGI server
     * and the response will not be cached.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_cache_max_range_offset
     */
     fastcgi_cache_max_range_offset ?: any


     /**
     * If the client request method is listed in this directive then
     * the response will be cached.
     * “GET” and “HEAD” methods are always
     * added to the list, though it is recommended to specify them explicitly.
     * See also the fastcgi_no_cache directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_cache_methods
     */
     fastcgi_cache_methods ?: "GET" | "HEAD" | string


     /**
     * Sets the number of requests after which the response
     * will be cached.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_cache_min_uses
     */
     fastcgi_cache_min_uses ?: any


     /**
     * Defines conditions under which the request will be considered a cache
     * purge request.
     * If at least one value of the string parameters is not empty and is not equal
     * to “0” then the cache entry with a corresponding
     * cache key is removed.
     * The result of successful operation is indicated by returning
     * the 204 (No Content) response.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_cache_purge
     * @example
     * ```
     * fastcgi_cache_path /data/nginx/cache keys_zone=cache_zone:10m;
     * 
     * map $request_method $purge_method {
     *     PURGE   1;
     *     default 0;
     * }
     * 
     * server {
     *     ...
     *     location / {
     *         fastcgi_pass        backend;
     *         fastcgi_cache       cache_zone;
     *         fastcgi_cache_key   $uri;
     *         fastcgi_cache_purge $purge_method;
     *     }
     * }
     * ```
     */
     fastcgi_cache_purge ?: any


     /**
     * Enables revalidation of expired cache items using conditional requests with
     * the “If-Modified-Since” and “If-None-Match”
     * header fields.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_cache_revalidate
     */
     fastcgi_cache_revalidate ?: "on" | "off"


     /**
     * Determines in which cases a stale cached response can be used
     * when an error occurs during communication with the FastCGI server.
     * The directive’s parameters match the parameters of the
     * fastcgi_next_upstream directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_cache_use_stale
     */
     fastcgi_cache_use_stale ?: "error" | "timeout" | "invalid_header" | "updating" | "http_500" | "http_503" | "http_403" | "http_404" | "http_429" | string


     /**
     * Sets caching time for different response codes.
     * For example, the following directives
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_cache_valid
     * @example
     * ```
     * fastcgi_cache_valid 200 302 10m;
     * fastcgi_cache_valid 404      1m;
     * fastcgi_cache_valid 5m;
     * fastcgi_cache_valid 200 302 10m;
     * fastcgi_cache_valid 301      1h;
     * fastcgi_cache_valid any      1m;
     * ```
     */
     fastcgi_cache_valid ?: any


     /**
     * Sets a string to search for in the error stream of a response
     * received from a FastCGI server.
     * If the string is found then it is considered that the FastCGI
     * server has returned an invalid response.
     * This allows handling application errors in nginx, for example:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_catch_stderr
     * @example
     * ```
     * location /php/ {
     *     fastcgi_pass backend:9000;
     *     ...
     *     fastcgi_catch_stderr "PHP Fatal error";
     *     fastcgi_next_upstream error timeout invalid_header;
     * }
     * ```
     */
     fastcgi_catch_stderr ?: any


     /**
     * Defines a timeout for establishing a connection with a FastCGI server.
     * It should be noted that this timeout cannot usually exceed 75 seconds.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_connect_timeout
     */
     fastcgi_connect_timeout ?: string


     /**
     * Enables byte-range support
     * for both cached and uncached responses from the FastCGI server
     * regardless of the “Accept-Ranges” field in these responses.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_force_ranges
     */
     fastcgi_force_ranges ?: "on" | "off"


     /**
     * By default,
     * nginx does not pass the header fields “Status” and
     * “X-Accel-...” from the response of a FastCGI
     * server to a client.
     * The fastcgi_hide_header directive sets additional fields
     * that will not be passed.
     * If, on the contrary, the passing of fields needs to be permitted,
     * the fastcgi_pass_header directive can be used.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_hide_header
     */
     fastcgi_hide_header ?: any


     /**
     * Determines whether the connection with a FastCGI server should be
     * closed when a client closes the connection without waiting
     * for a response.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_ignore_client_abort
     */
     fastcgi_ignore_client_abort ?: "on" | "off"


     /**
     * Disables processing of certain response header fields from the FastCGI server.
     * The following fields can be ignored: “X-Accel-Redirect”,
     * “X-Accel-Expires”, “X-Accel-Limit-Rate” (1.1.6),
     * “X-Accel-Buffering” (1.1.6),
     * “X-Accel-Charset” (1.1.6), “Expires”,
     * “Cache-Control”, “Set-Cookie” (0.8.44),
     * and “Vary” (1.7.7).
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_ignore_headers
     */
     fastcgi_ignore_headers ?: any


     /**
     * Sets a file name that will be appended after a URI that ends with
     * a slash, in the value of the $fastcgi_script_name variable.
     * For example, with these settings
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_index
     * @example
     * ```
     * fastcgi_index index.php;
     * fastcgi_param SCRIPT_FILENAME /home/www/scripts/php$fastcgi_script_name;
     * ```
     */
     fastcgi_index ?: any


     /**
     * Determines whether FastCGI server responses with codes greater than or equal
     * to 300 should be passed to a client
     * or be intercepted and redirected to nginx for processing
     * with the error_page directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_intercept_errors
     */
     fastcgi_intercept_errors ?: "on" | "off"


     /**
     * By default, a FastCGI server will close a connection right after
     * sending the response.
     * However, when this directive is set to the value on,
     * nginx will instruct a FastCGI server to keep connections open.
     * This is necessary, in particular, for
     * keepalive
     * connections to FastCGI servers to function.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_keep_conn
     */
     fastcgi_keep_conn ?: "on" | "off"


     /**
     * Limits the speed of reading the response from the FastCGI server.
     * The rate is specified in bytes per second.
     * The zero value disables rate limiting.
     * The limit is set per a request, and so if nginx simultaneously opens
     * two connections to the FastCFI server,
     * the overall rate will be twice as much as the specified limit.
     * The limitation works only if
     * buffering of responses from the FastCGI
     * server is enabled.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_limit_rate
     */
     fastcgi_limit_rate ?: any


     /**
     * When buffering of responses from the FastCGI
     * server is enabled, and the whole response does not fit into the buffers
     * set by the fastcgi_buffer_size and fastcgi_buffers
     * directives, a part of the response can be saved to a temporary file.
     * This directive sets the maximum size of the temporary file.
     * The size of data written to the temporary file at a time is set
     * by the fastcgi_temp_file_write_size directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_max_temp_file_size
     */
     fastcgi_max_temp_file_size ?: string


     /**
     * Specifies in which cases a request should be passed to the next server:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_next_upstream
     */
     fastcgi_next_upstream ?: "error" | "timeout" | "invalid_header" | "http_500" | "http_503" | "http_403" | "http_404" | "http_429" | "non_idempotent" | string


     /**
     * Limits the time during which a request can be passed to the
     * next server.
     * The 0 value turns off this limitation.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_next_upstream_timeout
     */
     fastcgi_next_upstream_timeout ?: string


     /**
     * Limits the number of possible tries for passing a request to the
     * next server.
     * The 0 value turns off this limitation.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_next_upstream_tries
     */
     fastcgi_next_upstream_tries ?: any


     /**
     * Defines conditions under which the response will not be saved to a cache.
     * If at least one value of the string parameters is not empty and is not
     * equal to “0” then the response will not be saved:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_no_cache
     * @example
     * ```
     * fastcgi_no_cache $cookie_nocache $arg_nocache$arg_comment;
     * fastcgi_no_cache $http_pragma    $http_authorization;
     * ```
     */
     fastcgi_no_cache ?: any


     /**
     * Sets a parameter that should be passed to the FastCGI server.
     * The value can contain text, variables, and their combination.
     * These directives are inherited from the previous configuration level
     * if and only if there are no fastcgi_param directives
     * defined on the current level.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_param
     * @example
     * ```
     * fastcgi_param SCRIPT_FILENAME /home/www/scripts/php$fastcgi_script_name;
     * fastcgi_param QUERY_STRING    $query_string;
     * fastcgi_param REQUEST_METHOD  $request_method;
     * fastcgi_param CONTENT_TYPE    $content_type;
     * fastcgi_param CONTENT_LENGTH  $content_length;
     * fastcgi_param REDIRECT_STATUS 200;
     * fastcgi_param HTTPS           $https if_not_empty;
     * ```
     */
     fastcgi_param ?: any


     /**
     * Permits passing otherwise disabled header
     * fields from a FastCGI server to a client.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_pass_header
     */
     fastcgi_pass_header ?: any


     /**
     * Indicates whether the original request body is passed
     * to the FastCGI server.
     * See also the fastcgi_pass_request_headers directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_pass_request_body
     */
     fastcgi_pass_request_body ?: "on" | "off"


     /**
     * Indicates whether the header fields of the original request are passed
     * to the FastCGI server.
     * See also the fastcgi_pass_request_body directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_pass_request_headers
     */
     fastcgi_pass_request_headers ?: "on" | "off"


     /**
     * Defines a timeout for reading a response from the FastCGI server.
     * The timeout is set only between two successive read operations,
     * not for the transmission of the whole response.
     * If the FastCGI server does not transmit anything within this time,
     * the connection is closed.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_read_timeout
     */
     fastcgi_read_timeout ?: string


     /**
     * Enables or disables buffering of a client request body.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_request_buffering
     */
     fastcgi_request_buffering ?: "on" | "off"


     /**
     * If the directive is set to a non-zero value, nginx will try to
     * minimize the number
     * of send operations on outgoing connections to a FastCGI server by using either
     * NOTE_LOWAT flag of the
     * kqueue method,
     * or the SO_SNDLOWAT socket option,
     * with the specified size.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_send_lowat
     */
     fastcgi_send_lowat ?: string


     /**
     * Sets a timeout for transmitting a request to the FastCGI server.
     * The timeout is set only between two successive write operations,
     * not for the transmission of the whole request.
     * If the FastCGI server does not receive anything within this time,
     * the connection is closed.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_send_timeout
     */
     fastcgi_send_timeout ?: string


     /**
     * Configures the “TCP keepalive” behavior
     * for outgoing connections to a FastCGI server.
     * By default, the operating system’s settings are in effect for the socket.
     * If the directive is set to the value “on”, the
     * SO_KEEPALIVE socket option is turned on for the socket.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_socket_keepalive
     */
     fastcgi_socket_keepalive ?: "on" | "off"


     /**
     * Enables saving of files to a disk.
     * The on parameter saves files with paths
     * corresponding to the directives
     * alias or
     * root.
     * The off parameter disables saving of files.
     * In addition, the file name can be set explicitly using the
     * string with variables:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_store
     * @example
     * ```
     * fastcgi_store /data/www$original_uri;
     * location /images/ {
     *     root                 /data/www;
     *     error_page           404 = /fetch$uri;
     * }
     * 
     * location /fetch/ {
     *     internal;
     * 
     *     fastcgi_pass         backend:9000;
     *     ...
     * 
     *     fastcgi_store        on;
     *     fastcgi_store_access user:rw group:rw all:r;
     *     fastcgi_temp_path    /data/temp;
     * 
     *     alias                /data/www/;
     * }
     * ```
     */
     fastcgi_store ?: "on" | "off" | string


     /**
     * Sets access permissions for newly created files and directories, e.g.:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_store_access
     * @example
     * ```
     * fastcgi_store_access user:rw group:rw all:r;
     * fastcgi_store_access group:rw all:r;
     * ```
     */
     fastcgi_store_access ?: any


     /**
     * Limits the size of data written to a temporary file
     * at a time, when buffering of responses from the FastCGI server
     * to temporary files is enabled.
     * By default, size is limited by two buffers set by the
     * fastcgi_buffer_size and fastcgi_buffers directives.
     * The maximum size of a temporary file is set by the
     * fastcgi_max_temp_file_size directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_temp_file_write_size
     */
     fastcgi_temp_file_write_size ?: string


     /**
     * Defines a directory for storing temporary files
     * with data received from FastCGI servers.
     * Up to three-level subdirectory hierarchy can be used underneath the specified
     * directory.
     * For example, in the following configuration
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_temp_path
     * @example
     * ```
     * fastcgi_temp_path /spool/nginx/fastcgi_temp 1 2;
     * /spool/nginx/fastcgi_temp/7/45/00000123457
     * ```
     */
     fastcgi_temp_path ?: any


     /**
     * Makes outgoing connections to a gRPC server originate
     * from the specified local IP address with an optional port.
     * Parameter value can contain variables.
     * The special value off cancels the effect
     * of the grpc_bind directive
     * inherited from the previous configuration level, which allows the
     * system to auto-assign the local IP address and port.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_bind
     * @example
     * ```
     * grpc_bind $remote_addr transparent;
     * ```
     */
     grpc_bind ?: "address    [transparent ]" | "off"


     /**
     * Sets the size of the buffer used for reading the response
     * received from the gRPC server.
     * The response is passed to the client synchronously, as soon as it is received.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_buffer_size
     */
     grpc_buffer_size ?: string


     /**
     * Defines a timeout for establishing a connection with a gRPC server.
     * It should be noted that this timeout cannot usually exceed 75 seconds.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_connect_timeout
     */
     grpc_connect_timeout ?: string


     /**
     * By default,
     * nginx does not pass the header fields “Date”,
     * “Server”, and
     * “X-Accel-...” from the response of a gRPC
     * server to a client.
     * The grpc_hide_header directive sets additional fields
     * that will not be passed.
     * If, on the contrary, the passing of fields needs to be permitted,
     * the grpc_pass_header directive can be used.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_hide_header
     */
     grpc_hide_header ?: any


     /**
     * Disables processing of certain response header fields from the gRPC server.
     * The following fields can be ignored: “X-Accel-Redirect”
     * and “X-Accel-Charset”.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_ignore_headers
     */
     grpc_ignore_headers ?: any


     /**
     * Determines whether gRPC server responses with codes greater than or equal
     * to 300 should be passed to a client
     * or be intercepted and redirected to nginx for processing
     * with the error_page directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_intercept_errors
     */
     grpc_intercept_errors ?: "on" | "off"


     /**
     * Specifies in which cases a request should be passed to the next server:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_next_upstream
     */
     grpc_next_upstream ?: "error" | "timeout" | "invalid_header" | "http_500" | "http_502" | "http_503" | "http_504" | "http_403" | "http_404" | "http_429" | "non_idempotent" | string


     /**
     * Limits the time during which a request can be passed to the
     * next server.
     * The 0 value turns off this limitation.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_next_upstream_timeout
     */
     grpc_next_upstream_timeout ?: string


     /**
     * Limits the number of possible tries for passing a request to the
     * next server.
     * The 0 value turns off this limitation.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_next_upstream_tries
     */
     grpc_next_upstream_tries ?: any


     /**
     * Permits passing otherwise disabled header
     * fields from a gRPC server to a client.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_pass_header
     */
     grpc_pass_header ?: any


     /**
     * Defines a timeout for reading a response from the gRPC server.
     * The timeout is set only between two successive read operations,
     * not for the transmission of the whole response.
     * If the gRPC server does not transmit anything within this time,
     * the connection is closed.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_read_timeout
     */
     grpc_read_timeout ?: string


     /**
     * Sets a timeout for transmitting a request to the gRPC server.
     * The timeout is set only between two successive write operations,
     * not for the transmission of the whole request.
     * If the gRPC server does not receive anything within this time,
     * the connection is closed.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_send_timeout
     */
     grpc_send_timeout ?: string


     /**
     * Allows redefining or appending fields to the request header
     * passed to the gRPC server.
     * The value can contain text, variables, and their combinations.
     * These directives are inherited from the previous configuration level
     * if and only if there are no grpc_set_header directives
     * defined on the current level.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_set_header
     * @example
     * ```
     * grpc_set_header Accept-Encoding "";
     * ```
     */
     grpc_set_header ?: any


     /**
     * Configures the “TCP keepalive” behavior
     * for outgoing connections to a gRPC server.
     * By default, the operating system’s settings are in effect for the socket.
     * If the directive is set to the value “on”, the
     * SO_KEEPALIVE socket option is turned on for the socket.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_socket_keepalive
     */
     grpc_socket_keepalive ?: "on" | "off"


     /**
     * Specifies a file with the certificate in the PEM format
     * used for authentication to a gRPC SSL server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_ssl_certificate
     */
     grpc_ssl_certificate ?: any


     /**
     * Specifies a file with the secret key in the PEM format
     * used for authentication to a gRPC SSL server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_ssl_certificate_key
     */
     grpc_ssl_certificate_key ?: any


     /**
     * Specifies the enabled ciphers for requests to a gRPC SSL server.
     * The ciphers are specified in the format understood by the OpenSSL library.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_ssl_ciphers
     */
     grpc_ssl_ciphers ?: any


     /**
     * Sets arbitrary OpenSSL configuration
     * commands
     * when establishing a connection with the gRPC SSL server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_ssl_conf_command
     */
     grpc_ssl_conf_command ?: any


     /**
     * Specifies a file with revoked certificates (CRL)
     * in the PEM format used to verify
     * the certificate of the gRPC SSL server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_ssl_crl
     */
     grpc_ssl_crl ?: any


     /**
     * Allows overriding the server name used to
     * verify
     * the certificate of the gRPC SSL server and to be
     * passed through SNI
     * when establishing a connection with the gRPC SSL server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_ssl_name
     */
     grpc_ssl_name ?: any


     /**
     * Specifies a file with passphrases for
     * secret keys
     * where each passphrase is specified on a separate line.
     * Passphrases are tried in turn when loading the key.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_ssl_password_file
     */
     grpc_ssl_password_file ?: any


     /**
     * Enables the specified protocols for requests to a gRPC SSL server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_ssl_protocols
     */
     grpc_ssl_protocols ?: any


     /**
     * Enables or disables passing of the server name through
     * TLS
     * Server Name Indication extension (SNI, RFC 6066)
     * when establishing a connection with the gRPC SSL server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_ssl_server_name
     */
     grpc_ssl_server_name ?: "on" | "off"


     /**
     * Determines whether SSL sessions can be reused when working with
     * the gRPC server.
     * If the errors
     * “SSL3_GET_FINISHED:digest check failed”
     * appear in the logs, try disabling session reuse.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_ssl_session_reuse
     */
     grpc_ssl_session_reuse ?: "on" | "off"


     /**
     * Specifies a file with trusted CA certificates in the PEM format
     * used to verify
     * the certificate of the gRPC SSL server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_ssl_trusted_certificate
     */
     grpc_ssl_trusted_certificate ?: any


     /**
     * Enables or disables verification of the gRPC SSL server certificate.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_ssl_verify
     */
     grpc_ssl_verify ?: "on" | "off"


     /**
     * Sets the verification depth in the gRPC SSL server certificates chain.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_ssl_verify_depth
     */
     grpc_ssl_verify_depth ?: any


     /**
     * Enables or disables decompression of gzipped responses
     * for clients that lack gzip support.
     * If enabled, the following directives are also taken into account
     * when determining if clients support gzip:
     * gzip_http_version,
     * gzip_proxied, and
     * gzip_disable.
     * See also the gzip_vary directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_gunzip_module.html#gunzip
     */
     gunzip ?: "on" | "off"


     /**
     * Sets the number and size of buffers
     * used to decompress a response.
     * By default, the buffer size is equal to one memory page.
     * This is either 4K or 8K, depending on a platform.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_gunzip_module.html#gunzip_buffers
     */
     gunzip_buffers ?: any


     /**
     * Enables or disables gzipping of responses.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_gzip_module.html#gzip
     */
     gzip ?: "on" | "off"


     /**
     * Sets the number and size of buffers
     * used to compress a response.
     * By default, the buffer size is equal to one memory page.
     * This is either 4K or 8K, depending on a platform.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_gzip_module.html#gzip_buffers
     */
     gzip_buffers ?: any


     /**
     * Sets a gzip compression level of a response.
     * Acceptable values are in the range from 1 to 9.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_gzip_module.html#gzip_comp_level
     */
     gzip_comp_level ?: any


     /**
     * Disables gzipping of responses for requests with
     * “User-Agent” header fields matching
     * any of the specified regular expressions.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_gzip_module.html#gzip_disable
     */
     gzip_disable ?: any


     /**
     * Sets the minimum HTTP version of a request required to compress a response.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_gzip_module.html#gzip_http_version
     */
     gzip_http_version ?: "1.0" | "1.1"


     /**
     * Sets the minimum length of a response that will be gzipped.
     * The length is determined only from the “Content-Length”
     * response header field.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_gzip_module.html#gzip_min_length
     */
     gzip_min_length ?: any


     /**
     * Enables or disables gzipping of responses for proxied
     * requests depending on the request and response.
     * The fact that the request is proxied is determined by
     * the presence of the “Via” request header field.
     * The directive accepts multiple parameters:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_gzip_module.html#gzip_proxied
     */
     gzip_proxied ?: "off" | "expired" | "no-cache" | "no-store" | "private" | "no_last_modified" | "no_etag" | "auth" | string


     /**
     * Enables gzipping of responses for the specified MIME types in addition
     * to “text/html”.
     * The special value “*” matches any MIME type (0.8.29).
     * Responses with the “text/html” type are always compressed.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_gzip_module.html#gzip_types
     */
     gzip_types ?: any


     /**
     * Enables or disables inserting the “Vary: Accept-Encoding”
     * response header field if the directives
     * gzip,
     * gzip_static, or
     * gunzip
     * are active.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_gzip_module.html#gzip_vary
     */
     gzip_vary ?: "on" | "off"


     /**
     * Enables (“on”) or disables (“off”)
     * checking the existence of precompressed files.
     * The following directives are also taken into account:
     * gzip_http_version,
     * gzip_proxied,
     * gzip_disable,
     * and gzip_vary.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_gzip_static_module.html#gzip_static
     */
     gzip_static ?: "on" | "off" | "always"


     /**
     * Adds the specified field to a response header provided that
     * the response code equals 200, 201 (1.3.10), 204, 206, 301, 302, 303, 304,
     * 307 (1.1.16, 1.0.13), or 308 (1.13.0).
     * Parameter value can contain variables.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_headers_module.html#add_header
     */
     add_header ?: any


     /**
     * Adds the specified field to the end of a response provided that
     * the response code equals 200, 201, 206, 301, 302, 303, 307, or 308.
     * Parameter value can contain variables.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_headers_module.html#add_trailer
     */
     add_trailer ?: any


     /**
     * Enables or disables adding or modifying the “Expires”
     * and “Cache-Control” response header fields provided that
     * the response code equals 200, 201 (1.3.10), 204, 206, 301, 302, 303, 304,
     * 307 (1.1.16, 1.0.13), or 308 (1.13.0).
     * The parameter can be a positive or negative
     * time.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_headers_module.html#expires
     * @example
     * ```
     * expires @15h30m;
     * map $sent_http_content_type $expires {
     *     default         off;
     *     application/pdf 42d;
     *     ~image/         max;
     * }
     * 
     * expires $expires;
     * ```
     */
     expires ?: "[modified] timeexpires     epoch" | "max" | "off"


     /**
     * Sets the maximum number and size of buffers
     * that are used for reading and writing data frames.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_hls_module.html#hls_buffers
     */
     hls_buffers ?: any


     /**
     * Adds arguments from a playlist request to URIs of fragments.
     * This may be useful for performing client authorization at the moment of
     * requesting a fragment, or when protecting an HLS stream with the
     * ngx_http_secure_link_module
     * module.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_hls_module.html#hls_forward_args
     * @example
     * ```
     * #EXTM3U
     * #EXT-X-VERSION:3
     * #EXT-X-TARGETDURATION:15
     * #EXT-X-PLAYLIST-TYPE:VOD
     * 
     * #EXTINF:9.333,
     * test.mp4.ts?start=0.000&end=9.333&a=1&b=2
     * #EXTINF:7.167,
     * test.mp4.ts?start=9.333&end=16.500&a=1&b=2
     * #EXTINF:5.416,
     * test.mp4.ts?start=16.500&end=21.916&a=1&b=2
     * #EXTINF:5.500,
     * test.mp4.ts?start=21.916&end=27.416&a=1&b=2
     * #EXTINF:15.167,
     * test.mp4.ts?start=27.416&end=42.583&a=1&b=2
     * #EXTINF:9.626,
     * test.mp4.ts?start=42.583&end=52.209&a=1&b=2
     * 
     * #EXT-X-ENDLIST
     * http {
     *     ...
     * 
     *     map $uri $hls_uri {
     *         ~^(?<base_uri>.*).m3u8$ $base_uri;
     *         ~^(?<base_uri>.*).ts$   $base_uri;
     *         default                 $uri;
     *     }
     * 
     *     server {
     *         ...
     * 
     *         location /hls/ {
     *             hls;
     *             hls_forward_args on;
     * 
     *             alias /var/videos/;
     * 
     *             secure_link $arg_md5,$arg_expires;
     *             secure_link_md5 "$secure_link_expires$hls_uri$remote_addr secret";
     * 
     *             if ($secure_link = "") {
     *                 return 403;
     *             }
     * 
     *             if ($secure_link = "0") {
     *                 return 410;
     *             }
     *         }
     *     }
     * }
     * ```
     */
     hls_forward_args ?: "on" | "off"


     /**
     * Defines the default fragment length for playlist URIs requested without the
     * “len” argument.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_hls_module.html#hls_fragment
     */
     hls_fragment ?: string


     /**
     * Sets the initial size of the buffer used for
     * processing MP4 and MOV files.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_hls_module.html#hls_mp4_buffer_size
     */
     hls_mp4_buffer_size ?: string


     /**
     * During metadata processing, a larger buffer may become necessary.
     * Its size cannot exceed the specified size,
     * or else nginx will return the server error
     * 500 (Internal Server Error),
     * and log the following message:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_hls_module.html#hls_mp4_max_buffer_size
     * @example
     * ```
     * "/some/movie/file.mp4" mp4 moov atom is too large:
     * 12583268, you may want to increase hls_mp4_max_buffer_size
     * ```
     */
     hls_mp4_max_buffer_size ?: string


     /**
     * Sets the maximum size of the buffer used for reading images.
     * When the size is exceeded the server returns error
     * 415 (Unsupported Media Type).
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_image_filter_module.html#image_filter_buffer
     */
     image_filter_buffer ?: string


     /**
     * If enabled, final images will be interlaced.
     * For JPEG, final images will be in “progressive JPEG” format.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_image_filter_module.html#image_filter_interlace
     */
     image_filter_interlace ?: "on" | "off"


     /**
     * Sets the desired quality of the transformed JPEG images.
     * Acceptable values are in the range from 1 to 100.
     * Lesser values usually imply both lower image quality and less data to transfer.
     * The maximum recommended value is 95.
     * Parameter value can contain variables.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_image_filter_module.html#image_filter_jpeg_quality
     */
     image_filter_jpeg_quality ?: any


     /**
     * Increases sharpness of the final image.
     * The sharpness percentage can exceed 100.
     * The zero value disables sharpening.
     * Parameter value can contain variables.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_image_filter_module.html#image_filter_sharpen
     */
     image_filter_sharpen ?: any


     /**
     * Defines whether transparency should be preserved when transforming
     * GIF images or PNG images with colors specified by a palette.
     * The loss of transparency results in images of a better quality.
     * The alpha channel transparency in PNG is always preserved.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_image_filter_module.html#image_filter_transparency
     */
     image_filter_transparency ?: "on" | "off"


     /**
     * Sets the desired quality of the transformed WebP images.
     * Acceptable values are in the range from 1 to 100.
     * Lesser values usually imply both lower image quality and less data to transfer.
     * Parameter value can contain variables.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_image_filter_module.html#image_filter_webp_quality
     */
     image_filter_webp_quality ?: any


     /**
     * Defines files that will be used as an index.
     * The file name can contain variables.
     * Files are checked in the specified order.
     * The last element of the list can be a file with an absolute path.
     * Example:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_index_module.html#index
     * @example
     * ```
     * index index.$geo.html index.0.html /index.html;
     * location = / {
     *     index index.html;
     * }
     * 
     * location / {
     *     ...
     * }
     * ```
     */
     index ?: any


     /**
     * Specifies the enabled ciphers for HTTPS requests
     * with Fetch API.
     * The ciphers are specified in the format understood by the
     * OpenSSL library.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_js_module.html#js_fetch_ciphers
     */
     js_fetch_ciphers ?: any


     /**
     * Enables the specified protocols for HTTPS requests
     * with Fetch API.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_js_module.html#js_fetch_protocols
     */
     js_fetch_protocols ?: any


     /**
     * Specifies a file with trusted CA certificates in the PEM format
     * used to
     * verify
     * the HTTPS certificate
     * with Fetch API.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_js_module.html#js_fetch_trusted_certificate
     */
     js_fetch_trusted_certificate ?: any


     /**
     * Sets the verification depth in the HTTPS server certificates chain
     * with Fetch API.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_js_module.html#js_fetch_verify_depth
     */
     js_fetch_verify_depth ?: any


     /**
     * Sets the shared memory zone
     * and the maximum allowed number of connections for a given key value.
     * When this limit is exceeded, the server will return the
     * error
     * in reply to a request.
     * For example, the directives
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_limit_conn_module.html#limit_conn
     * @example
     * ```
     * limit_conn_zone $binary_remote_addr zone=addr:10m;
     * 
     * server {
     *     location /download/ {
     *         limit_conn addr 1;
     *     }
     * limit_conn_zone $binary_remote_addr zone=perip:10m;
     * limit_conn_zone $server_name zone=perserver:10m;
     * 
     * server {
     *     ...
     *     limit_conn perip 10;
     *     limit_conn perserver 100;
     * }
     * ```
     */
     limit_conn ?: any


     /**
     * Enables the dry run mode.
     * In this mode, the number of connections is not limited, however,
     * in the shared memory zone, the number of excessive connections is accounted
     * as usual.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_limit_conn_module.html#limit_conn_dry_run
     */
     limit_conn_dry_run ?: "on" | "off"


     /**
     * Sets the desired logging level for cases when the server
     * limits the number of connections.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_limit_conn_module.html#limit_conn_log_level
     */
     limit_conn_log_level ?: "info" | "notice" | "warn" | "error"


     /**
     * Sets the status code to return in response to rejected requests.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_limit_conn_module.html#limit_conn_status
     */
     limit_conn_status ?: any


     /**
     * Sets the shared memory zone
     * and the maximum burst size of requests.
     * If the requests rate exceeds the rate configured for a zone,
     * their processing is delayed such that requests are processed
     * at a defined rate.
     * Excessive requests are delayed until their number exceeds the
     * maximum burst size
     * in which case the request is terminated with an
     * error.
     * By default, the maximum burst size is equal to zero.
     * For example, the directives
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_limit_req_module.html#limit_req
     * @example
     * ```
     * limit_req_zone $binary_remote_addr zone=one:10m rate=1r/s;
     * 
     * server {
     *     location /search/ {
     *         limit_req zone=one burst=5;
     *     }
     * limit_req zone=one burst=5 nodelay;
     * limit_req_zone $binary_remote_addr zone=perip:10m rate=1r/s;
     * limit_req_zone $server_name zone=perserver:10m rate=10r/s;
     * 
     * server {
     *     ...
     *     limit_req zone=perip burst=5 nodelay;
     *     limit_req zone=perserver burst=10;
     * }
     * ```
     */
     limit_req ?: "zone=name    [burst=number]    [nodelay" | "delay=number]"


     /**
     * Enables the dry run mode.
     * In this mode, requests processing rate is not limited, however,
     * in the shared memory zone, the number of excessive requests is accounted
     * as usual.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_limit_req_module.html#limit_req_dry_run
     */
     limit_req_dry_run ?: "on" | "off"


     /**
     * Sets the desired logging level
     * for cases when the server refuses to process requests
     * due to rate exceeding,
     * or delays request processing.
     * Logging level for delays is one point less than for refusals; for example,
     * if “limit_req_log_level notice” is specified,
     * delays are logged with the info level.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_limit_req_module.html#limit_req_log_level
     */
     limit_req_log_level ?: "info" | "notice" | "warn" | "error"


     /**
     * Sets the status code to return in response to rejected requests.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_limit_req_module.html#limit_req_status
     */
     limit_req_status ?: any


     /**
     * Sets the path, format, and configuration for a buffered log write.
     * Several logs can be specified on the same configuration level.
     * Logging to syslog
     * can be configured by specifying
     * the “syslog:” prefix in the first parameter.
     * The special value off cancels all
     * access_log directives on the current level.
     * If the format is not specified then the predefined
     * “combined” format is used.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_log_module.html#access_log
     * @example
     * ```
     * access_log /path/to/log.gz combined gzip flush=5m;
     * map $status $loggable {
     *     ~^[23]  0;
     *     default 1;
     * }
     * 
     * access_log /path/to/access.log combined if=$loggable;
     * ```
     */
     access_log ?: any


     /**
     * Defines a cache that stores the file descriptors of frequently used logs
     * whose names contain variables.
     * The directive has the following parameters:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_log_module.html#open_log_file_cache
     * @example
     * ```
     * open_log_file_cache max=1000 inactive=20s valid=1m min_uses=2;
     * ```
     */
     open_log_file_cache ?: any


     /**
     * Makes outgoing connections to a memcached server originate
     * from the specified local IP address with an optional port (1.11.2).
     * Parameter value can contain variables (1.3.12).
     * The special value off (1.3.12) cancels the effect
     * of the memcached_bind directive
     * inherited from the previous configuration level, which allows the
     * system to auto-assign the local IP address and port.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_memcached_module.html#memcached_bind
     * @example
     * ```
     * memcached_bind $remote_addr transparent;
     * ```
     */
     memcached_bind ?: "address    [transparent ]" | "off"


     /**
     * Sets the size of the buffer used for reading the response
     * received from the memcached server.
     * The response is passed to the client synchronously, as soon as it is received.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_memcached_module.html#memcached_buffer_size
     */
     memcached_buffer_size ?: string


     /**
     * Defines a timeout for establishing a connection with a memcached server.
     * It should be noted that this timeout cannot usually exceed 75 seconds.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_memcached_module.html#memcached_connect_timeout
     */
     memcached_connect_timeout ?: string


     /**
     * Enables byte-range support
     * for both cached and uncached responses from the memcached server
     * regardless of the “Accept-Ranges” field in these responses.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_memcached_module.html#memcached_force_ranges
     */
     memcached_force_ranges ?: "on" | "off"


     /**
     * Enables the test for the flag presence in the memcached
     * server response and sets the “Content-Encoding”
     * response header field to “gzip”
     * if the flag is set.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_memcached_module.html#memcached_gzip_flag
     */
     memcached_gzip_flag ?: any


     /**
     * Specifies in which cases a request should be passed to the next server:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_memcached_module.html#memcached_next_upstream
     */
     memcached_next_upstream ?: "error" | "timeout" | "invalid_response" | "not_found" | string


     /**
     * Limits the time during which a request can be passed to the
     * next server.
     * The 0 value turns off this limitation.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_memcached_module.html#memcached_next_upstream_timeout
     */
     memcached_next_upstream_timeout ?: string


     /**
     * Limits the number of possible tries for passing a request to the
     * next server.
     * The 0 value turns off this limitation.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_memcached_module.html#memcached_next_upstream_tries
     */
     memcached_next_upstream_tries ?: any


     /**
     * Defines a timeout for reading a response from the memcached server.
     * The timeout is set only between two successive read operations,
     * not for the transmission of the whole response.
     * If the memcached server does not transmit anything within this time,
     * the connection is closed.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_memcached_module.html#memcached_read_timeout
     */
     memcached_read_timeout ?: string


     /**
     * Sets a timeout for transmitting a request to the memcached server.
     * The timeout is set only between two successive write operations,
     * not for the transmission of the whole request.
     * If the memcached server does not receive anything within this time,
     * the connection is closed.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_memcached_module.html#memcached_send_timeout
     */
     memcached_send_timeout ?: string


     /**
     * Configures the “TCP keepalive” behavior
     * for outgoing connections to a memcached server.
     * By default, the operating system’s settings are in effect for the socket.
     * If the directive is set to the value “on”, the
     * SO_KEEPALIVE socket option is turned on for the socket.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_memcached_module.html#memcached_socket_keepalive
     */
     memcached_socket_keepalive ?: "on" | "off"


     /**
     * Sets the URI to which an original request will be mirrored.
     * Several mirrors can be specified on the same configuration level.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_mirror_module.html#mirror
     */
     mirror ?: "uri" | "off"


     /**
     * Indicates whether the client request body is mirrored.
     * When enabled, the client request body will be read
     * prior to creating mirror subrequests.
     * In this case, unbuffered client request body proxying
     * set by the
     * proxy_request_buffering,
     * fastcgi_request_buffering,
     * scgi_request_buffering,
     * and
     * uwsgi_request_buffering
     * directives will be disabled.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_mirror_module.html#mirror_request_body
     * @example
     * ```
     * location / {
     *     mirror /mirror;
     *     mirror_request_body off;
     *     proxy_pass http://backend;
     * }
     * 
     * location = /mirror {
     *     internal;
     *     proxy_pass http://log_backend;
     *     proxy_pass_request_body off;
     *     proxy_set_header Content-Length "";
     *     proxy_set_header X-Original-URI $request_uri;
     * }
     * ```
     */
     mirror_request_body ?: "on" | "off"


     /**
     * Sets the initial size of the buffer used for
     * processing MP4 files.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_mp4_module.html#mp4_buffer_size
     */
     mp4_buffer_size ?: string


     /**
     * During metadata processing, a larger buffer may become necessary.
     * Its size cannot exceed the specified size,
     * or else nginx will return the
     * 500 (Internal Server Error) server error,
     * and log the following message:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_mp4_module.html#mp4_max_buffer_size
     * @example
     * ```
     * "/some/movie/file.mp4" mp4 moov atom is too large:
     * 12583268, you may want to increase mp4_max_buffer_size
     * ```
     */
     mp4_max_buffer_size ?: string


     /**
     * Limits the rate of response transmission to a client.
     * The rate is limited based on the average bitrate of the
     * MP4 file served.
     * To calculate the rate, the bitrate is multiplied by the specified
     * factor.
     * The special value “on” corresponds to the factor of 1.1.
     * The special value “off” disables rate limiting.
     * The limit is set per a request, and so if a client simultaneously opens
     * two connections, the overall rate will be twice as much
     * as the specified limit.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_mp4_module.html#mp4_limit_rate
     */
     mp4_limit_rate ?: "on" | "off" | "factor"


     /**
     * Sets the initial amount of media data (measured in playback time)
     * after which the further transmission of the response to a client
     * will be rate limited.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_mp4_module.html#mp4_limit_rate_after
     */
     mp4_limit_rate_after ?: string


     /**
     * Makes outgoing connections to a proxied server originate
     * from the specified local IP address with an optional port (1.11.2).
     * Parameter value can contain variables (1.3.12).
     * The special value off (1.3.12) cancels the effect
     * of the proxy_bind directive
     * inherited from the previous configuration level, which allows the
     * system to auto-assign the local IP address and port.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_bind
     * @example
     * ```
     * proxy_bind $remote_addr transparent;
     * ```
     */
     proxy_bind ?: "address    [transparent]" | "off"


     /**
     * Sets the size of the buffer used for reading the first part
     * of the response received from the proxied server.
     * This part usually contains a small response header.
     * By default, the buffer size is equal to one memory page.
     * This is either 4K or 8K, depending on a platform.
     * It can be made smaller, however.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_buffer_size
     */
     proxy_buffer_size ?: string


     /**
     * Enables or disables buffering of responses from the proxied server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_buffering
     */
     proxy_buffering ?: "on" | "off"


     /**
     * Sets the number and size of the
     * buffers used for reading a response from the proxied server,
     * for a single connection.
     * By default, the buffer size is equal to one memory page.
     * This is either 4K or 8K, depending on a platform.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_buffers
     */
     proxy_buffers ?: any


     /**
     * When buffering of responses from the proxied
     * server is enabled, limits the total size of buffers that
     * can be busy sending a response to the client while the response is not
     * yet fully read.
     * In the meantime, the rest of the buffers can be used for reading the response
     * and, if needed, buffering part of the response to a temporary file.
     * By default, size is limited by the size of two buffers set by the
     * proxy_buffer_size and proxy_buffers directives.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_busy_buffers_size
     */
     proxy_busy_buffers_size ?: string


     /**
     * Defines a shared memory zone used for caching.
     * The same zone can be used in several places.
     * Parameter value can contain variables (1.7.9).
     * The off parameter disables caching inherited
     * from the previous configuration level.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cache
     */
     proxy_cache ?: "zone" | "off"


     /**
     * Allows starting a background subrequest
     * to update an expired cache item,
     * while a stale cached response is returned to the client.
     * Note that it is necessary to
     * allow
     * the usage of a stale cached response when it is being updated.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cache_background_update
     */
     proxy_cache_background_update ?: "on" | "off"


     /**
     * Defines conditions under which the response will not be taken from a cache.
     * If at least one value of the string parameters is not empty and is not
     * equal to “0” then the response will not be taken from the cache:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cache_bypass
     * @example
     * ```
     * proxy_cache_bypass $cookie_nocache $arg_nocache$arg_comment;
     * proxy_cache_bypass $http_pragma    $http_authorization;
     * ```
     */
     proxy_cache_bypass ?: any


     /**
     * Enables or disables the conversion of the “HEAD” method
     * to “GET” for caching.
     * When the conversion is disabled, the
     * cache key should be configured
     * to include the $request_method.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cache_convert_head
     */
     proxy_cache_convert_head ?: "on" | "off"


     /**
     * Defines a key for caching, for example
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cache_key
     * @example
     * ```
     * proxy_cache_key "$host$request_uri $cookie_user";
     * proxy_cache_key $scheme$proxy_host$uri$is_args$args;
     * ```
     */
     proxy_cache_key ?: any


     /**
     * When enabled, only one request at a time will be allowed to populate
     * a new cache element identified according to the proxy_cache_key
     * directive by passing a request to a proxied server.
     * Other requests of the same cache element will either wait
     * for a response to appear in the cache or the cache lock for
     * this element to be released, up to the time set by the
     * proxy_cache_lock_timeout directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cache_lock
     */
     proxy_cache_lock ?: "on" | "off"


     /**
     * If the last request passed to the proxied server
     * for populating a new cache element
     * has not completed for the specified time,
     * one more request may be passed to the proxied server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cache_lock_age
     */
     proxy_cache_lock_age ?: string


     /**
     * Sets a timeout for proxy_cache_lock.
     * When the time expires,
     * the request will be passed to the proxied server,
     * however, the response will not be cached.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cache_lock_timeout
     */
     proxy_cache_lock_timeout ?: string


     /**
     * Sets an offset in bytes for byte-range requests.
     * If the range is beyond the offset,
     * the range request will be passed to the proxied server
     * and the response will not be cached.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cache_max_range_offset
     */
     proxy_cache_max_range_offset ?: any


     /**
     * If the client request method is listed in this directive then
     * the response will be cached.
     * “GET” and “HEAD” methods are always
     * added to the list, though it is recommended to specify them explicitly.
     * See also the proxy_no_cache directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cache_methods
     */
     proxy_cache_methods ?: "GET" | "HEAD" | string


     /**
     * Sets the number of requests after which the response
     * will be cached.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cache_min_uses
     */
     proxy_cache_min_uses ?: any


     /**
     * Defines conditions under which the request will be considered a cache
     * purge request.
     * If at least one value of the string parameters is not empty and is not equal
     * to “0” then the cache entry with a corresponding
     * cache key is removed.
     * The result of successful operation is indicated by returning
     * the 204 (No Content) response.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cache_purge
     * @example
     * ```
     * proxy_cache_path /data/nginx/cache keys_zone=cache_zone:10m;
     * 
     * map $request_method $purge_method {
     *     PURGE   1;
     *     default 0;
     * }
     * 
     * server {
     *     ...
     *     location / {
     *         proxy_pass http://backend;
     *         proxy_cache cache_zone;
     *         proxy_cache_key $uri;
     *         proxy_cache_purge $purge_method;
     *     }
     * }
     * ```
     */
     proxy_cache_purge ?: any


     /**
     * Enables revalidation of expired cache items using conditional requests with
     * the “If-Modified-Since” and “If-None-Match”
     * header fields.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cache_revalidate
     */
     proxy_cache_revalidate ?: "on" | "off"


     /**
     * Determines in which cases a stale cached response can be used
     * during communication with the proxied server.
     * The directive’s parameters match the parameters of the
     * proxy_next_upstream directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cache_use_stale
     */
     proxy_cache_use_stale ?: "error" | "timeout" | "invalid_header" | "updating" | "http_500" | "http_502" | "http_503" | "http_504" | "http_403" | "http_404" | "http_429" | string


     /**
     * Sets caching time for different response codes.
     * For example, the following directives
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cache_valid
     * @example
     * ```
     * proxy_cache_valid 200 302 10m;
     * proxy_cache_valid 404      1m;
     * proxy_cache_valid 5m;
     * proxy_cache_valid 200 302 10m;
     * proxy_cache_valid 301      1h;
     * proxy_cache_valid any      1m;
     * ```
     */
     proxy_cache_valid ?: any


     /**
     * Defines a timeout for establishing a connection with a proxied server.
     * It should be noted that this timeout cannot usually exceed 75 seconds.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_connect_timeout
     */
     proxy_connect_timeout ?: string


     /**
     * Sets a text that should be changed in the domain
     * attribute of the “Set-Cookie” header fields of a
     * proxied server response.
     * Suppose a proxied server returned the “Set-Cookie”
     * header field with the attribute
     * “domain=localhost”.
     * The directive
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cookie_domain
     * @example
     * ```
     * proxy_cookie_domain localhost example.org;
     * proxy_cookie_domain www.$host $host;
     * proxy_cookie_domain ~\.(?P<sl_domain>[-0-9a-z]+\.[a-z]+)$ $sl_domain;
     * proxy_cookie_domain localhost example.org;
     * proxy_cookie_domain ~\.([a-z]+\.[a-z]+)$ $1;
     * ```
     */
     proxy_cookie_domain ?: any


     /**
     * Sets one or more flags for the cookie.
     * The cookie can contain text, variables, and their combinations.
     * The flag
     * can contain text, variables, and their combinations (1.19.8).
     * The
     * secure,
     * httponly,
     * samesite=strict,
     * samesite=lax,
     * samesite=none
     * parameters add the corresponding flags.
     * The
     * nosecure,
     * nohttponly,
     * nosamesite
     * parameters remove the corresponding flags.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cookie_flags
     * @example
     * ```
     * proxy_cookie_flags one httponly;
     * proxy_cookie_flags ~ nosecure samesite=strict;
     * ```
     */
     proxy_cookie_flags ?: "off" | "cookie    [flag ...]"


     /**
     * Sets a text that should be changed in the path
     * attribute of the “Set-Cookie” header fields of a
     * proxied server response.
     * Suppose a proxied server returned the “Set-Cookie”
     * header field with the attribute
     * “path=/two/some/uri/”.
     * The directive
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cookie_path
     * @example
     * ```
     * proxy_cookie_path /two/ /;
     * proxy_cookie_path $uri /some$uri;
     * proxy_cookie_path ~*^/user/([^/]+) /u/$1;
     * proxy_cookie_path /one/ /;
     * proxy_cookie_path / /two/;
     * ```
     */
     proxy_cookie_path ?: any


     /**
     * Enables byte-range support
     * for both cached and uncached responses from the proxied server
     * regardless of the “Accept-Ranges” field in these responses.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_force_ranges
     */
     proxy_force_ranges ?: "on" | "off"


     /**
     * Sets the bucket size for hash tables
     * used by the proxy_hide_header and proxy_set_header
     * directives.
     * The details of setting up hash tables are provided in a separate
     * document.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_headers_hash_bucket_size
     */
     proxy_headers_hash_bucket_size ?: string


     /**
     * Sets the maximum size of hash tables
     * used by the proxy_hide_header and proxy_set_header
     * directives.
     * The details of setting up hash tables are provided in a separate
     * document.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_headers_hash_max_size
     */
     proxy_headers_hash_max_size ?: string


     /**
     * By default,
     * nginx does not pass the header fields “Date”,
     * “Server”, “X-Pad”, and
     * “X-Accel-...” from the response of a proxied
     * server to a client.
     * The proxy_hide_header directive sets additional fields
     * that will not be passed.
     * If, on the contrary, the passing of fields needs to be permitted,
     * the proxy_pass_header directive can be used.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_hide_header
     */
     proxy_hide_header ?: any


     /**
     * Sets the HTTP protocol version for proxying.
     * By default, version 1.0 is used.
     * Version 1.1 is recommended for use with
     * keepalive
     * connections and
     * NTLM authentication.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_http_version
     */
     proxy_http_version ?: "1.0" | "1.1"


     /**
     * Determines whether the connection with a proxied server should be
     * closed when a client closes the connection without waiting
     * for a response.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_ignore_client_abort
     */
     proxy_ignore_client_abort ?: "on" | "off"


     /**
     * Disables processing of certain response header fields from the proxied server.
     * The following fields can be ignored: “X-Accel-Redirect”,
     * “X-Accel-Expires”, “X-Accel-Limit-Rate” (1.1.6),
     * “X-Accel-Buffering” (1.1.6),
     * “X-Accel-Charset” (1.1.6), “Expires”,
     * “Cache-Control”, “Set-Cookie” (0.8.44),
     * and “Vary” (1.7.7).
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_ignore_headers
     */
     proxy_ignore_headers ?: any


     /**
     * Determines whether proxied responses with codes greater than or equal
     * to 300 should be passed to a client
     * or be intercepted and redirected to nginx for processing
     * with the error_page directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_intercept_errors
     */
     proxy_intercept_errors ?: "on" | "off"


     /**
     * Limits the speed of reading the response from the proxied server.
     * The rate is specified in bytes per second.
     * The zero value disables rate limiting.
     * The limit is set per a request, and so if nginx simultaneously opens
     * two connections to the proxied server,
     * the overall rate will be twice as much as the specified limit.
     * The limitation works only if
     * buffering of responses from the proxied
     * server is enabled.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_limit_rate
     */
     proxy_limit_rate ?: any


     /**
     * When buffering of responses from the proxied
     * server is enabled, and the whole response does not fit into the buffers
     * set by the proxy_buffer_size and proxy_buffers
     * directives, a part of the response can be saved to a temporary file.
     * This directive sets the maximum size of the temporary file.
     * The size of data written to the temporary file at a time is set
     * by the proxy_temp_file_write_size directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_max_temp_file_size
     */
     proxy_max_temp_file_size ?: string


     /**
     * Specifies the HTTP method to use in requests forwarded
     * to the proxied server instead of the method from the client request.
     * Parameter value can contain variables (1.11.6).
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_method
     */
     proxy_method ?: any


     /**
     * Specifies in which cases a request should be passed to the next server:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_next_upstream
     */
     proxy_next_upstream ?: "error" | "timeout" | "invalid_header" | "http_500" | "http_502" | "http_503" | "http_504" | "http_403" | "http_404" | "http_429" | "non_idempotent" | string


     /**
     * Limits the time during which a request can be passed to the
     * next server.
     * The 0 value turns off this limitation.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_next_upstream_timeout
     */
     proxy_next_upstream_timeout ?: string


     /**
     * Limits the number of possible tries for passing a request to the
     * next server.
     * The 0 value turns off this limitation.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_next_upstream_tries
     */
     proxy_next_upstream_tries ?: any


     /**
     * Defines conditions under which the response will not be saved to a cache.
     * If at least one value of the string parameters is not empty and is not
     * equal to “0” then the response will not be saved:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_no_cache
     * @example
     * ```
     * proxy_no_cache $cookie_nocache $arg_nocache$arg_comment;
     * proxy_no_cache $http_pragma    $http_authorization;
     * ```
     */
     proxy_no_cache ?: any


     /**
     * Permits passing otherwise disabled header
     * fields from a proxied server to a client.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_pass_header
     */
     proxy_pass_header ?: any


     /**
     * Indicates whether the original request body is passed
     * to the proxied server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_pass_request_body
     * @example
     * ```
     * location /x-accel-redirect-here/ {
     *     proxy_method GET;
     *     proxy_pass_request_body off;
     *     proxy_set_header Content-Length "";
     * 
     *     proxy_pass ...
     * }
     * ```
     */
     proxy_pass_request_body ?: "on" | "off"


     /**
     * Indicates whether the header fields of the original request are passed
     * to the proxied server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_pass_request_headers
     * @example
     * ```
     * location /x-accel-redirect-here/ {
     *     proxy_method GET;
     *     proxy_pass_request_headers off;
     *     proxy_pass_request_body off;
     * 
     *     proxy_pass ...
     * }
     * ```
     */
     proxy_pass_request_headers ?: "on" | "off"


     /**
     * Defines a timeout for reading a response from the proxied server.
     * The timeout is set only between two successive read operations,
     * not for the transmission of the whole response.
     * If the proxied server does not transmit anything within this time,
     * the connection is closed.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_read_timeout
     */
     proxy_read_timeout ?: string


     /**
     * Sets the text that should be changed in the “Location”
     * and “Refresh” header fields of a proxied server response.
     * Suppose a proxied server returned the header field
     * “Location: http://localhost:8000/two/some/uri/”.
     * The directive
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_redirect
     * @example
     * ```
     * proxy_redirect http://localhost:8000/two/ http://frontend/one/;
     * proxy_redirect http://localhost:8000/two/ /;
     * location /one/ {
     *     proxy_pass     http://upstream:port/two/;
     *     proxy_redirect default;
     * location /one/ {
     *     proxy_pass     http://upstream:port/two/;
     *     proxy_redirect http://upstream:port/two/ /one/;
     * proxy_redirect http://localhost:8000/ http://$host:$server_port/;
     * proxy_redirect http://$proxy_host:8000/ /;
     * proxy_redirect ~^(http://[^:]+):\d+(/.+)$ $1$2;
     * proxy_redirect ~* /user/([^/]+)/(.+)$      http://$1.example.com/$2;
     * proxy_redirect default;
     * proxy_redirect http://localhost:8000/  /;
     * proxy_redirect http://www.example.com/ /;
     * proxy_redirect / /;
     * ```
     */
     proxy_redirect ?: any


     /**
     * Enables or disables buffering of a client request body.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_request_buffering
     */
     proxy_request_buffering ?: "on" | "off"


     /**
     * If the directive is set to a non-zero value, nginx will try to
     * minimize the number
     * of send operations on outgoing connections to a proxied server by using either
     * NOTE_LOWAT flag of the
     * kqueue method,
     * or the SO_SNDLOWAT socket option,
     * with the specified size.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_send_lowat
     */
     proxy_send_lowat ?: string


     /**
     * Sets a timeout for transmitting a request to the proxied server.
     * The timeout is set only between two successive write operations,
     * not for the transmission of the whole request.
     * If the proxied server does not receive anything within this time,
     * the connection is closed.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_send_timeout
     */
     proxy_send_timeout ?: string


     /**
     * Allows redefining the request body passed to the proxied server.
     * The value can contain text, variables, and their combination.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_set_body
     */
     proxy_set_body ?: any


     /**
     * Allows redefining or appending fields to the request header
     * passed to the proxied server.
     * The value can contain text, variables, and their combinations.
     * These directives are inherited from the previous configuration level
     * if and only if there are no proxy_set_header directives
     * defined on the current level.
     * By default, only two fields are redefined:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_set_header
     * @example
     * ```
     * proxy_set_header Host       $proxy_host;
     * proxy_set_header Connection close;
     * proxy_set_header Host       $http_host;
     * proxy_set_header Host       $host;
     * proxy_set_header Host       $host:$proxy_port;
     * proxy_set_header Accept-Encoding "";
     * ```
     */
     proxy_set_header ?: any


     /**
     * Configures the “TCP keepalive” behavior
     * for outgoing connections to a proxied server.
     * By default, the operating system’s settings are in effect for the socket.
     * If the directive is set to the value “on”, the
     * SO_KEEPALIVE socket option is turned on for the socket.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_socket_keepalive
     */
     proxy_socket_keepalive ?: "on" | "off"


     /**
     * Specifies a file with the certificate in the PEM format
     * used for authentication to a proxied HTTPS server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_ssl_certificate
     */
     proxy_ssl_certificate ?: any


     /**
     * Specifies a file with the secret key in the PEM format
     * used for authentication to a proxied HTTPS server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_ssl_certificate_key
     */
     proxy_ssl_certificate_key ?: any


     /**
     * Specifies the enabled ciphers for requests to a proxied HTTPS server.
     * The ciphers are specified in the format understood by the OpenSSL library.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_ssl_ciphers
     */
     proxy_ssl_ciphers ?: any


     /**
     * Sets arbitrary OpenSSL configuration
     * commands
     * when establishing a connection with the proxied HTTPS server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_ssl_conf_command
     */
     proxy_ssl_conf_command ?: any


     /**
     * Specifies a file with revoked certificates (CRL)
     * in the PEM format used to verify
     * the certificate of the proxied HTTPS server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_ssl_crl
     */
     proxy_ssl_crl ?: any


     /**
     * Allows overriding the server name used to
     * verify
     * the certificate of the proxied HTTPS server and to be
     * passed through SNI
     * when establishing a connection with the proxied HTTPS server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_ssl_name
     */
     proxy_ssl_name ?: any


     /**
     * Specifies a file with passphrases for
     * secret keys
     * where each passphrase is specified on a separate line.
     * Passphrases are tried in turn when loading the key.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_ssl_password_file
     */
     proxy_ssl_password_file ?: any


     /**
     * Enables the specified protocols for requests to a proxied HTTPS server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_ssl_protocols
     */
     proxy_ssl_protocols ?: any


     /**
     * Enables or disables passing of the server name through
     * TLS
     * Server Name Indication extension (SNI, RFC 6066)
     * when establishing a connection with the proxied HTTPS server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_ssl_server_name
     */
     proxy_ssl_server_name ?: "on" | "off"


     /**
     * Determines whether SSL sessions can be reused when working with
     * the proxied server.
     * If the errors
     * “SSL3_GET_FINISHED:digest check failed”
     * appear in the logs, try disabling session reuse.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_ssl_session_reuse
     */
     proxy_ssl_session_reuse ?: "on" | "off"


     /**
     * Specifies a file with trusted CA certificates in the PEM format
     * used to verify
     * the certificate of the proxied HTTPS server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_ssl_trusted_certificate
     */
     proxy_ssl_trusted_certificate ?: any


     /**
     * Enables or disables verification of the proxied HTTPS server certificate.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_ssl_verify
     */
     proxy_ssl_verify ?: "on" | "off"


     /**
     * Sets the verification depth in the proxied HTTPS server certificates chain.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_ssl_verify_depth
     */
     proxy_ssl_verify_depth ?: any


     /**
     * Enables saving of files to a disk.
     * The on parameter saves files with paths
     * corresponding to the directives
     * alias or
     * root.
     * The off parameter disables saving of files.
     * In addition, the file name can be set explicitly using the
     * string with variables:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_store
     * @example
     * ```
     * proxy_store /data/www$original_uri;
     * location /images/ {
     *     root               /data/www;
     *     error_page         404 = /fetch$uri;
     * }
     * 
     * location /fetch/ {
     *     internal;
     * 
     *     proxy_pass         http://backend/;
     *     proxy_store        on;
     *     proxy_store_access user:rw group:rw all:r;
     *     proxy_temp_path    /data/temp;
     * 
     *     alias              /data/www/;
     * }
     * location /images/ {
     *     root               /data/www;
     *     error_page         404 = @fetch;
     * }
     * 
     * location @fetch {
     *     internal;
     * 
     *     proxy_pass         http://backend;
     *     proxy_store        on;
     *     proxy_store_access user:rw group:rw all:r;
     *     proxy_temp_path    /data/temp;
     * 
     *     root               /data/www;
     * }
     * ```
     */
     proxy_store ?: "on" | "off" | string


     /**
     * Sets access permissions for newly created files and directories, e.g.:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_store_access
     * @example
     * ```
     * proxy_store_access user:rw group:rw all:r;
     * proxy_store_access group:rw all:r;
     * ```
     */
     proxy_store_access ?: any


     /**
     * Limits the size of data written to a temporary file
     * at a time, when buffering of responses from the proxied server
     * to temporary files is enabled.
     * By default, size is limited by two buffers set by the
     * proxy_buffer_size and proxy_buffers directives.
     * The maximum size of a temporary file is set by the
     * proxy_max_temp_file_size directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_temp_file_write_size
     */
     proxy_temp_file_write_size ?: string


     /**
     * Defines a directory for storing temporary files
     * with data received from proxied servers.
     * Up to three-level subdirectory hierarchy can be used underneath the specified
     * directory.
     * For example, in the following configuration
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_temp_path
     * @example
     * ```
     * proxy_temp_path /spool/nginx/proxy_temp 1 2;
     * /spool/nginx/proxy_temp/7/45/00000123457
     * ```
     */
     proxy_temp_path ?: any


     /**
     * Defines trusted addresses that are known to send correct
     * replacement addresses.
     * If the special value unix: is specified,
     * all UNIX-domain sockets will be trusted.
     * Trusted addresses may also be specified using a hostname (1.13.1).
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_realip_module.html#set_real_ip_from
     */
     set_real_ip_from ?: "address" | "CIDR" | "unix:"


     /**
     * Defines the request header field
     * whose value will be used to replace the client address.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_realip_module.html#real_ip_header
     */
     real_ip_header ?: "field" | "X-Real-IP" | "X-Forwarded-For" | "proxy_protocol"


     /**
     * If recursive search is disabled, the original client address that
     * matches one of the trusted addresses is replaced by the last
     * address sent in the request header field defined by the
     * real_ip_header directive.
     * If recursive search is enabled, the original client address that
     * matches one of the trusted addresses is replaced by the last
     * non-trusted address sent in the request header field.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_realip_module.html#real_ip_recursive
     */
     real_ip_recursive ?: "on" | "off"


     /**
     * Sets the bucket size for the valid referers hash tables.
     * The details of setting up hash tables are provided in a separate
     * document.
     *
     * @context server, location
     * @see https://nginx.org/en/docs/http/ngx_http_referer_module.html#referer_hash_bucket_size
     */
     referer_hash_bucket_size ?: string


     /**
     * Sets the maximum size of the valid referers hash tables.
     * The details of setting up hash tables are provided in a separate
     * document.
     *
     * @context server, location
     * @see https://nginx.org/en/docs/http/ngx_http_referer_module.html#referer_hash_max_size
     */
     referer_hash_max_size ?: string


     /**
     * Specifies the “Referer” request header field values
     * that will cause the embedded $invalid_referer variable to
     * be set to an empty string.
     * Otherwise, the variable will be set to “1”.
     * Search for a match is case-insensitive.
     *
     * @context server, location
     * @see https://nginx.org/en/docs/http/ngx_http_referer_module.html#valid_referers
     * @example
     * ```
     * valid_referers none blocked server_names
     *                *.example.com example.* www.example.org/galleries/
     *                ~\.google\.;
     * ```
     */
     valid_referers ?: "none" | "blocked" | "server_names" | string


     /**
     * Stops processing the current set of
     * ngx_http_rewrite_module directives.
     *
     * @context server, location
     * @see https://nginx.org/en/docs/http/ngx_http_rewrite_module.html#break
     * @example
     * ```
     * if ($slow) {
     *     limit_rate 10k;
     *     break;
     * }
     * ```
     */
     break ?: any


     /**
     * The specified condition is evaluated.
     * If true, this module directives specified inside the braces are
     * executed, and the request is assigned the configuration inside the
     * if directive.
     * Configurations inside the if directives are
     * inherited from the previous configuration level.
     *
     * @context server, location
     * @see https://nginx.org/en/docs/http/ngx_http_rewrite_module.html#if
     * @example
     * ```
     * if ($http_user_agent ~ MSIE) {
     *     rewrite ^(.*)$ /msie/$1 break;
     * }
     * 
     * if ($http_cookie ~* "id=([^;]+)(?:;|$)") {
     *     set $id $1;
     * }
     * 
     * if ($request_method = POST) {
     *     return 405;
     * }
     * 
     * if ($slow) {
     *     limit_rate 10k;
     * }
     * 
     * if ($invalid_referer) {
     *     return 403;
     * }
     * ```
     */
     if ?: any


     /**
     * Stops processing and returns the specified code to a client.
     * The non-standard code 444 closes a connection without sending
     * a response header.
     *
     * @context server, location
     * @see https://nginx.org/en/docs/http/ngx_http_rewrite_module.html#return
     */
     return ?: any


     /**
     * If the specified regular expression matches a request URI, URI is changed
     * as specified in the replacement string.
     * The rewrite directives are executed sequentially
     * in order of their appearance in the configuration file.
     * It is possible to terminate further processing of the directives using flags.
     * If a replacement string starts with “http://”,
     * “https://”, or “$scheme”,
     * the processing stops and the redirect is returned to a client.
     *
     * @context server, location
     * @see https://nginx.org/en/docs/http/ngx_http_rewrite_module.html#rewrite
     * @example
     * ```
     * server {
     *     ...
     *     rewrite ^(/download/.*)/media/(.*)\..*$ $1/mp3/$2.mp3 last;
     *     rewrite ^(/download/.*)/audio/(.*)\..*$ $1/mp3/$2.ra  last;
     *     return  403;
     *     ...
     * }
     * location /download/ {
     *     rewrite ^(/download/.*)/media/(.*)\..*$ $1/mp3/$2.mp3 break;
     *     rewrite ^(/download/.*)/audio/(.*)\..*$ $1/mp3/$2.ra  break;
     *     return  403;
     * }
     * rewrite ^/users/(.*)$ /show?user=$1? last;
     * ```
     */
     rewrite ?: any


     /**
     * Enables or disables logging of ngx_http_rewrite_module
     * module directives processing results
     * into the error_log at
     * the notice level.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_rewrite_module.html#rewrite_log
     */
     rewrite_log ?: "on" | "off"


     /**
     * Sets a value for the specified variable.
     * The value can contain text, variables, and their combination.
     *
     * @context server, location
     * @see https://nginx.org/en/docs/http/ngx_http_rewrite_module.html#set
     */
     set ?: any


     /**
     * Controls whether warnings about uninitialized variables are logged.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_rewrite_module.html#uninitialized_variable_warn
     * @example
     * ```
     * location /download/ {
     *     if ($forbidden) {
     *         return 403;
     *     }
     * 
     *     if ($slow) {
     *         limit_rate 10k;
     *     }
     * 
     *     rewrite ^/(download/.*)/media/(.*)\..*$ /$1/mp3/$2.mp3 break;
     * }
     * variable $forbidden
     * check against zero
     *     return 403
     *     end of code
     * variable $slow
     * check against zero
     * match of regular expression
     * copy "/"
     * copy $1
     * copy "/mp3/"
     * copy $2
     * copy ".mp3"
     * end of regular expression
     * end of code
     * rewrite ^/(download/.*)/media/(.*)\..*$ /$1/mp3/$2.mp3 break;
     * rewrite ^(/download/.*)/media/(.*)\..*$ $1/mp3/$2.mp3 break;
     * match of regular expression
     * copy $1
     * copy "/mp3/"
     * copy $2
     * copy ".mp3"
     * end of regular expression
     * end of code
     * ```
     */
     uninitialized_variable_warn ?: "on" | "off"


     /**
     * Makes outgoing connections to an SCGI server originate
     * from the specified local IP address with an optional port (1.11.2).
     * Parameter value can contain variables (1.3.12).
     * The special value off (1.3.12) cancels the effect
     * of the scgi_bind directive
     * inherited from the previous configuration level, which allows the
     * system to auto-assign the local IP address and port.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_bind
     * @example
     * ```
     * scgi_bind $remote_addr transparent;
     * ```
     */
     scgi_bind ?: "address    [transparent]" | "off"


     /**
     * Sets the size of the buffer used for reading the first part
     * of the response received from the SCGI server.
     * This part usually contains a small response header.
     * By default, the buffer size is equal to one memory page.
     * This is either 4K or 8K, depending on a platform.
     * It can be made smaller, however.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_buffer_size
     */
     scgi_buffer_size ?: string


     /**
     * Enables or disables buffering of responses from the SCGI server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_buffering
     */
     scgi_buffering ?: "on" | "off"


     /**
     * Sets the number and size of the
     * buffers used for reading a response from the SCGI server,
     * for a single connection.
     * By default, the buffer size is equal to one memory page.
     * This is either 4K or 8K, depending on a platform.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_buffers
     */
     scgi_buffers ?: any


     /**
     * When buffering of responses from the SCGI
     * server is enabled, limits the total size of buffers that
     * can be busy sending a response to the client while the response is not
     * yet fully read.
     * In the meantime, the rest of the buffers can be used for reading the response
     * and, if needed, buffering part of the response to a temporary file.
     * By default, size is limited by the size of two buffers set by the
     * scgi_buffer_size and scgi_buffers directives.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_busy_buffers_size
     */
     scgi_busy_buffers_size ?: string


     /**
     * Defines a shared memory zone used for caching.
     * The same zone can be used in several places.
     * Parameter value can contain variables (1.7.9).
     * The off parameter disables caching inherited
     * from the previous configuration level.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_cache
     */
     scgi_cache ?: "zone" | "off"


     /**
     * Allows starting a background subrequest
     * to update an expired cache item,
     * while a stale cached response is returned to the client.
     * Note that it is necessary to
     * allow
     * the usage of a stale cached response when it is being updated.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_cache_background_update
     */
     scgi_cache_background_update ?: "on" | "off"


     /**
     * Defines conditions under which the response will not be taken from a cache.
     * If at least one value of the string parameters is not empty and is not
     * equal to “0” then the response will not be taken from the cache:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_cache_bypass
     * @example
     * ```
     * scgi_cache_bypass $cookie_nocache $arg_nocache$arg_comment;
     * scgi_cache_bypass $http_pragma    $http_authorization;
     * ```
     */
     scgi_cache_bypass ?: any


     /**
     * Defines a key for caching, for example
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_cache_key
     * @example
     * ```
     * scgi_cache_key localhost:9000$request_uri;
     * ```
     */
     scgi_cache_key ?: any


     /**
     * When enabled, only one request at a time will be allowed to populate
     * a new cache element identified according to the scgi_cache_key
     * directive by passing a request to an SCGI server.
     * Other requests of the same cache element will either wait
     * for a response to appear in the cache or the cache lock for
     * this element to be released, up to the time set by the
     * scgi_cache_lock_timeout directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_cache_lock
     */
     scgi_cache_lock ?: "on" | "off"


     /**
     * If the last request passed to the SCGI server
     * for populating a new cache element
     * has not completed for the specified time,
     * one more request may be passed to the SCGI server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_cache_lock_age
     */
     scgi_cache_lock_age ?: string


     /**
     * Sets a timeout for scgi_cache_lock.
     * When the time expires,
     * the request will be passed to the SCGI server,
     * however, the response will not be cached.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_cache_lock_timeout
     */
     scgi_cache_lock_timeout ?: string


     /**
     * Sets an offset in bytes for byte-range requests.
     * If the range is beyond the offset,
     * the range request will be passed to the SCGI server
     * and the response will not be cached.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_cache_max_range_offset
     */
     scgi_cache_max_range_offset ?: any


     /**
     * If the client request method is listed in this directive then
     * the response will be cached.
     * “GET” and “HEAD” methods are always
     * added to the list, though it is recommended to specify them explicitly.
     * See also the scgi_no_cache directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_cache_methods
     */
     scgi_cache_methods ?: "GET" | "HEAD" | string


     /**
     * Sets the number of requests after which the response
     * will be cached.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_cache_min_uses
     */
     scgi_cache_min_uses ?: any


     /**
     * Defines conditions under which the request will be considered a cache
     * purge request.
     * If at least one value of the string parameters is not empty and is not equal
     * to “0” then the cache entry with a corresponding
     * cache key is removed.
     * The result of successful operation is indicated by returning
     * the 204 (No Content) response.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_cache_purge
     * @example
     * ```
     * scgi_cache_path /data/nginx/cache keys_zone=cache_zone:10m;
     * 
     * map $request_method $purge_method {
     *     PURGE   1;
     *     default 0;
     * }
     * 
     * server {
     *     ...
     *     location / {
     *         scgi_pass        backend;
     *         scgi_cache       cache_zone;
     *         scgi_cache_key   $uri;
     *         scgi_cache_purge $purge_method;
     *     }
     * }
     * ```
     */
     scgi_cache_purge ?: any


     /**
     * Enables revalidation of expired cache items using conditional requests with
     * the “If-Modified-Since” and “If-None-Match”
     * header fields.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_cache_revalidate
     */
     scgi_cache_revalidate ?: "on" | "off"


     /**
     * Determines in which cases a stale cached response can be used
     * when an error occurs during communication with the SCGI server.
     * The directive’s parameters match the parameters of the
     * scgi_next_upstream directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_cache_use_stale
     */
     scgi_cache_use_stale ?: "error" | "timeout" | "invalid_header" | "updating" | "http_500" | "http_503" | "http_403" | "http_404" | "http_429" | string


     /**
     * Sets caching time for different response codes.
     * For example, the following directives
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_cache_valid
     * @example
     * ```
     * scgi_cache_valid 200 302 10m;
     * scgi_cache_valid 404      1m;
     * scgi_cache_valid 5m;
     * scgi_cache_valid 200 302 10m;
     * scgi_cache_valid 301      1h;
     * scgi_cache_valid any      1m;
     * ```
     */
     scgi_cache_valid ?: any


     /**
     * Defines a timeout for establishing a connection with an SCGI server.
     * It should be noted that this timeout cannot usually exceed 75 seconds.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_connect_timeout
     */
     scgi_connect_timeout ?: string


     /**
     * Enables byte-range support
     * for both cached and uncached responses from the SCGI server
     * regardless of the “Accept-Ranges” field in these responses.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_force_ranges
     */
     scgi_force_ranges ?: "on" | "off"


     /**
     * By default,
     * nginx does not pass the header fields “Status” and
     * “X-Accel-...” from the response of an SCGI
     * server to a client.
     * The scgi_hide_header directive sets additional fields
     * that will not be passed.
     * If, on the contrary, the passing of fields needs to be permitted,
     * the scgi_pass_header directive can be used.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_hide_header
     */
     scgi_hide_header ?: any


     /**
     * Determines whether the connection with an SCGI server should be
     * closed when a client closes the connection without waiting
     * for a response.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_ignore_client_abort
     */
     scgi_ignore_client_abort ?: "on" | "off"


     /**
     * Disables processing of certain response header fields from the SCGI server.
     * The following fields can be ignored: “X-Accel-Redirect”,
     * “X-Accel-Expires”, “X-Accel-Limit-Rate” (1.1.6),
     * “X-Accel-Buffering” (1.1.6),
     * “X-Accel-Charset” (1.1.6), “Expires”,
     * “Cache-Control”, “Set-Cookie” (0.8.44),
     * and “Vary” (1.7.7).
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_ignore_headers
     */
     scgi_ignore_headers ?: any


     /**
     * Determines whether an SCGI server responses with codes greater than or equal
     * to 300 should be passed to a client
     * or be intercepted and redirected to nginx for processing
     * with the error_page directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_intercept_errors
     */
     scgi_intercept_errors ?: "on" | "off"


     /**
     * Limits the speed of reading the response from the SCGI server.
     * The rate is specified in bytes per second.
     * The zero value disables rate limiting.
     * The limit is set per a request, and so if nginx simultaneously opens
     * two connections to the SCGI server,
     * the overall rate will be twice as much as the specified limit.
     * The limitation works only if
     * buffering of responses from the SCGI
     * server is enabled.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_limit_rate
     */
     scgi_limit_rate ?: any


     /**
     * When buffering of responses from the SCGI
     * server is enabled, and the whole response does not fit into the buffers
     * set by the scgi_buffer_size and scgi_buffers
     * directives, a part of the response can be saved to a temporary file.
     * This directive sets the maximum size of the temporary file.
     * The size of data written to the temporary file at a time is set
     * by the scgi_temp_file_write_size directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_max_temp_file_size
     */
     scgi_max_temp_file_size ?: string


     /**
     * Specifies in which cases a request should be passed to the next server:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_next_upstream
     */
     scgi_next_upstream ?: "error" | "timeout" | "invalid_header" | "http_500" | "http_503" | "http_403" | "http_404" | "http_429" | "non_idempotent" | string


     /**
     * Limits the time during which a request can be passed to the
     * next server.
     * The 0 value turns off this limitation.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_next_upstream_timeout
     */
     scgi_next_upstream_timeout ?: string


     /**
     * Limits the number of possible tries for passing a request to the
     * next server.
     * The 0 value turns off this limitation.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_next_upstream_tries
     */
     scgi_next_upstream_tries ?: any


     /**
     * Defines conditions under which the response will not be saved to a cache.
     * If at least one value of the string parameters is not empty and is not
     * equal to “0” then the response will not be saved:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_no_cache
     * @example
     * ```
     * scgi_no_cache $cookie_nocache $arg_nocache$arg_comment;
     * scgi_no_cache $http_pragma    $http_authorization;
     * ```
     */
     scgi_no_cache ?: any


     /**
     * Sets a parameter that should be passed to the SCGI server.
     * The value can contain text, variables, and their combination.
     * These directives are inherited from the previous configuration level
     * if and only if there are no scgi_param directives
     * defined on the current level.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_param
     * @example
     * ```
     * location / {
     *     include scgi_params;
     *     ...
     * }
     * scgi_param HTTPS $https if_not_empty;
     * ```
     */
     scgi_param ?: any


     /**
     * Permits passing otherwise disabled header
     * fields from an SCGI server to a client.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_pass_header
     */
     scgi_pass_header ?: any


     /**
     * Indicates whether the original request body is passed
     * to the SCGI server.
     * See also the scgi_pass_request_headers directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_pass_request_body
     */
     scgi_pass_request_body ?: "on" | "off"


     /**
     * Indicates whether the header fields of the original request are passed
     * to the SCGI server.
     * See also the scgi_pass_request_body directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_pass_request_headers
     */
     scgi_pass_request_headers ?: "on" | "off"


     /**
     * Defines a timeout for reading a response from the SCGI server.
     * The timeout is set only between two successive read operations,
     * not for the transmission of the whole response.
     * If the SCGI server does not transmit anything within this time,
     * the connection is closed.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_read_timeout
     */
     scgi_read_timeout ?: string


     /**
     * Enables or disables buffering of a client request body.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_request_buffering
     */
     scgi_request_buffering ?: "on" | "off"


     /**
     * Sets a timeout for transmitting a request to the SCGI server.
     * The timeout is set only between two successive write operations,
     * not for the transmission of the whole request.
     * If the SCGI server does not receive anything within this time,
     * the connection is closed.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_send_timeout
     */
     scgi_send_timeout ?: string


     /**
     * Configures the “TCP keepalive” behavior
     * for outgoing connections to an SCGI server.
     * By default, the operating system’s settings are in effect for the socket.
     * If the directive is set to the value “on”, the
     * SO_KEEPALIVE socket option is turned on for the socket.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_socket_keepalive
     */
     scgi_socket_keepalive ?: "on" | "off"


     /**
     * Enables saving of files to a disk.
     * The on parameter saves files with paths
     * corresponding to the directives
     * alias or
     * root.
     * The off parameter disables saving of files.
     * In addition, the file name can be set explicitly using the
     * string with variables:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_store
     * @example
     * ```
     * scgi_store /data/www$original_uri;
     * location /images/ {
     *     root              /data/www;
     *     error_page        404 = /fetch$uri;
     * }
     * 
     * location /fetch/ {
     *     internal;
     * 
     *     scgi_pass         backend:9000;
     *     ...
     * 
     *     scgi_store        on;
     *     scgi_store_access user:rw group:rw all:r;
     *     scgi_temp_path    /data/temp;
     * 
     *     alias             /data/www/;
     * }
     * ```
     */
     scgi_store ?: "on" | "off" | string


     /**
     * Sets access permissions for newly created files and directories, e.g.:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_store_access
     * @example
     * ```
     * scgi_store_access user:rw group:rw all:r;
     * scgi_store_access group:rw all:r;
     * ```
     */
     scgi_store_access ?: any


     /**
     * Limits the size of data written to a temporary file
     * at a time, when buffering of responses from the SCGI server
     * to temporary files is enabled.
     * By default, size is limited by two buffers set by the
     * scgi_buffer_size and scgi_buffers directives.
     * The maximum size of a temporary file is set by the
     * scgi_max_temp_file_size directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_temp_file_write_size
     */
     scgi_temp_file_write_size ?: string


     /**
     * Defines a directory for storing temporary files
     * with data received from SCGI servers.
     * Up to three-level subdirectory hierarchy can be used underneath the specified
     * directory.
     * For example, in the following configuration
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_temp_path
     * @example
     * ```
     * scgi_temp_path /spool/nginx/scgi_temp 1 2;
     * /spool/nginx/scgi_temp/7/45/00000123457
     * ```
     */
     scgi_temp_path ?: any


     /**
     * Defines a string with variables from which the
     * checksum value and lifetime of a link will be extracted.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_secure_link_module.html#secure_link
     */
     secure_link ?: any


     /**
     * Defines an expression for which the MD5 hash value will
     * be computed and compared with the value passed in a request.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_secure_link_module.html#secure_link_md5
     * @example
     * ```
     * location /s/ {
     *     secure_link $arg_md5,$arg_expires;
     *     secure_link_md5 "$secure_link_expires$uri$remote_addr secret";
     * 
     *     if ($secure_link = "") {
     *         return 403;
     *     }
     * 
     *     if ($secure_link = "0") {
     *         return 410;
     *     }
     * 
     *     ...
     * }
     * echo -n '2147483647/s/link127.0.0.1 secret' | \
     *     openssl md5 -binary | openssl base64 | tr +/ -_ | tr -d =
     * ```
     */
     secure_link_md5 ?: any


     /**
     * Enables the use of the specified session log.
     * The special value off cancels the effect
     * of the session_log directives
     * inherited from the previous configuration level.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_session_log_module.html#session_log
     */
     session_log ?: "name" | "off"


     /**
     * Sets the size of the slice.
     * The zero value disables splitting responses into slices.
     * Note that a too low value may result in excessive memory usage
     * and opening a large number of files.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_slice_module.html#slice
     */
     slice ?: string


     /**
     * Sets the maximum size of chunks
     * into which the response body is
     * 
     * sliced.
     * A too low value results in higher overhead.
     * A too high value impairs prioritization due to
     * 
     * HOL blocking.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_spdy_module.html#spdy_chunk_size
     */
     spdy_chunk_size ?: string


     /**
     * Sets the header compression level of a response in a range from
     * 1 (fastest, less compression) to 9 (slowest, best compression).
     * The special value 0 turns off the header compression.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_spdy_module.html#spdy_headers_comp
     */
     spdy_headers_comp ?: any


     /**
     * Enables or disables processing of SSI commands in responses.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_ssi_module.html#ssi
     */
     ssi ?: "on" | "off"


     /**
     * Allows preserving the “Last-Modified” header field
     * from the original response during SSI processing
     * to facilitate response caching.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_ssi_module.html#ssi_last_modified
     */
     ssi_last_modified ?: "on" | "off"


     /**
     * Sets the minimum size for parts of a response stored on disk,
     * starting from which it makes sense to send them using
     * sendfile.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_ssi_module.html#ssi_min_file_chunk
     */
     ssi_min_file_chunk ?: string


     /**
     * If enabled, suppresses the output of the
     * “[an error occurred while processing the directive]”
     * string if an error occurred during SSI processing.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_ssi_module.html#ssi_silent_errors
     */
     ssi_silent_errors ?: "on" | "off"


     /**
     * Enables processing of SSI commands in responses with the specified MIME types
     * in addition to “text/html”.
     * The special value “*” matches any MIME type (0.8.29).
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_ssi_module.html#ssi_types
     */
     ssi_types ?: any


     /**
     * Sets the maximum length of parameter values in SSI commands.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_ssi_module.html#ssi_value_length
     * @example
     * ```
     * <!--# command parameter1=value1 parameter2=value2 ... -->
     * ```
     */
     ssi_value_length ?: any


     /**
     * This directive was made obsolete in version 1.15.0.
     * The ssl parameter
     * of the listen directive
     * should be used instead.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_ssl_module.html#ssl
     */
     ssl ?: "on" | "off"


     /**
     * Sets the size of the buffer used for sending data.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_ssl_module.html#ssl_buffer_size
     * @example
     * ```
     * ssl_buffer_size 4k;
     * ```
     */
     ssl_buffer_size ?: string


     /**
     * Specifies a file with the certificate in the PEM format
     * for the given virtual server.
     * If intermediate certificates should be specified in addition to a primary
     * certificate, they should be specified in the same file in the following
     * order: the primary certificate comes first, then the intermediate certificates.
     * A secret key in the PEM format may be placed in the same file.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_ssl_module.html#ssl_certificate
     * @example
     * ```
     * server {
     *     listen              443 ssl;
     *     server_name         example.com;
     * 
     *     ssl_certificate     example.com.rsa.crt;
     *     ssl_certificate_key example.com.rsa.key;
     * 
     *     ssl_certificate     example.com.ecdsa.crt;
     *     ssl_certificate_key example.com.ecdsa.key;
     * 
     *     ...
     * }
     * ssl_certificate     $ssl_server_name.crt;
     * ssl_certificate_key $ssl_server_name.key;
     * ```
     */
     ssl_certificate ?: any


     /**
     * Specifies a file with the secret key in the PEM format
     * for the given virtual server.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_ssl_module.html#ssl_certificate_key
     */
     ssl_certificate_key ?: any


     /**
     * Specifies the enabled ciphers.
     * The ciphers are specified in the format understood by the
     * OpenSSL library, for example:
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_ssl_module.html#ssl_ciphers
     * @example
     * ```
     * ssl_ciphers ALL:!aNULL:!EXPORT56:RC4+RSA:+HIGH:+MEDIUM:+LOW:+SSLv2:+EXP;
     * ```
     */
     ssl_ciphers ?: any


     /**
     * Specifies a file with trusted CA certificates in the PEM format
     * used to verify client certificates and
     * OCSP responses if ssl_stapling is enabled.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_ssl_module.html#ssl_client_certificate
     */
     ssl_client_certificate ?: any


     /**
     * Sets arbitrary OpenSSL configuration
     * commands.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_ssl_module.html#ssl_conf_command
     * @example
     * ```
     * ssl_conf_command Options PrioritizeChaCha;
     * ssl_conf_command Ciphersuites TLS_CHACHA20_POLY1305_SHA256;
     * ```
     */
     ssl_conf_command ?: any


     /**
     * Specifies a file with revoked certificates (CRL)
     * in the PEM format used to verify
     * client certificates.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_ssl_module.html#ssl_crl
     */
     ssl_crl ?: any


     /**
     * Specifies a file with DH parameters for DHE ciphers.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_ssl_module.html#ssl_dhparam
     */
     ssl_dhparam ?: any


     /**
     * Enables or disables TLS 1.3
     * early data.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_ssl_module.html#ssl_early_data
     * @example
     * ```
     * proxy_set_header Early-Data $ssl_early_data;
     * ```
     */
     ssl_early_data ?: "on" | "off"


     /**
     * Specifies a curve for ECDHE ciphers.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_ssl_module.html#ssl_ecdh_curve
     * @example
     * ```
     * ssl_ecdh_curve prime256v1:secp384r1;
     * ```
     */
     ssl_ecdh_curve ?: any


     /**
     * Enables OCSP validation of the client certificate chain.
     * The leaf parameter
     * enables validation of the client certificate only.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_ssl_module.html#ssl_ocsp
     * @example
     * ```
     * ssl_verify_client on;
     * ssl_ocsp          on;
     * resolver          192.0.2.1;
     * ```
     */
     ssl_ocsp ?: "on" | "off" | "leaf"


     /**
     * Sets name and size of the cache
     * that stores client certificates status for OCSP validation.
     * The cache is shared between all worker processes.
     * A cache with the same name can be used in several virtual servers.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_ssl_module.html#ssl_ocsp_cache
     */
     ssl_ocsp_cache ?: "off" | "[shared:name:size]"


     /**
     * Overrides the URL of the OCSP responder specified in the
     * “Authority
     * Information Access” certificate extension
     * for validation of client certificates.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_ssl_module.html#ssl_ocsp_responder
     * @example
     * ```
     * ssl_ocsp_responder http://ocsp.example.com/;
     * ```
     */
     ssl_ocsp_responder ?: any


     /**
     * Specifies a file with passphrases for
     * secret keys
     * where each passphrase is specified on a separate line.
     * Passphrases are tried in turn when loading the key.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_ssl_module.html#ssl_password_file
     * @example
     * ```
     * http {
     *     ssl_password_file /etc/keys/global.pass;
     *     ...
     * 
     *     server {
     *         server_name www1.example.com;
     *         ssl_certificate_key /etc/keys/first.key;
     *     }
     * 
     *     server {
     *         server_name www2.example.com;
     * 
     *         # named pipe can also be used instead of a file
     *         ssl_password_file /etc/keys/fifo;
     *         ssl_certificate_key /etc/keys/second.key;
     *     }
     * }
     * ```
     */
     ssl_password_file ?: any


     /**
     * Specifies that server ciphers should be preferred over client
     * ciphers when using the SSLv3 and TLS protocols.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_ssl_module.html#ssl_prefer_server_ciphers
     */
     ssl_prefer_server_ciphers ?: "on" | "off"


     /**
     * Enables the specified protocols.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_ssl_module.html#ssl_protocols
     */
     ssl_protocols ?: any


     /**
     * If enabled, SSL handshakes in
     * the server block will be rejected.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_ssl_module.html#ssl_reject_handshake
     * @example
     * ```
     * server {
     *     listen               443 ssl default_server;
     *     ssl_reject_handshake on;
     * }
     * 
     * server {
     *     listen              443 ssl;
     *     server_name         example.com;
     *     ssl_certificate     example.com.crt;
     *     ssl_certificate_key example.com.key;
     * }
     * ```
     */
     ssl_reject_handshake ?: "on" | "off"


     /**
     * Sets the types and sizes of caches that store session parameters.
     * A cache can be of any of the following types:
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_ssl_module.html#ssl_session_cache
     * @example
     * ```
     * ssl_session_cache builtin:1000 shared:SSL:10m;
     * ```
     */
     ssl_session_cache ?: "off" | "none" | "[builtin[:size]]    [shared:name:size]"


     /**
     * Sets a file with the secret key used to encrypt
     * and decrypt TLS session tickets.
     * The directive is necessary if the same key has to be shared between
     * multiple servers.
     * By default, a randomly generated key is used.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_ssl_module.html#ssl_session_ticket_key
     * @example
     * ```
     * ssl_session_ticket_key current.key;
     * ssl_session_ticket_key previous.key;
     * openssl rand 80 > ticket.key
     * ```
     */
     ssl_session_ticket_key ?: any


     /**
     * Enables or disables session resumption through
     * TLS session tickets.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_ssl_module.html#ssl_session_tickets
     */
     ssl_session_tickets ?: "on" | "off"


     /**
     * Specifies a time during which a client may reuse the
     * session parameters.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_ssl_module.html#ssl_session_timeout
     */
     ssl_session_timeout ?: string


     /**
     * Enables or disables
     * stapling
     * of OCSP responses by the server.
     * Example:
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_ssl_module.html#ssl_stapling
     * @example
     * ```
     * ssl_stapling on;
     * resolver 192.0.2.1;
     * ```
     */
     ssl_stapling ?: "on" | "off"


     /**
     * When set, the stapled OCSP response will be taken from the
     * specified file instead of querying
     * the OCSP responder specified in the server certificate.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_ssl_module.html#ssl_stapling_file
     */
     ssl_stapling_file ?: any


     /**
     * Overrides the URL of the OCSP responder specified in the
     * “Authority
     * Information Access” certificate extension.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_ssl_module.html#ssl_stapling_responder
     * @example
     * ```
     * ssl_stapling_responder http://ocsp.example.com/;
     * ```
     */
     ssl_stapling_responder ?: any


     /**
     * Enables or disables verification of OCSP responses by the server.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_ssl_module.html#ssl_stapling_verify
     */
     ssl_stapling_verify ?: "on" | "off"


     /**
     * Specifies a file with trusted CA certificates in the PEM format
     * used to verify client certificates and
     * OCSP responses if ssl_stapling is enabled.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_ssl_module.html#ssl_trusted_certificate
     */
     ssl_trusted_certificate ?: any


     /**
     * Enables verification of client certificates.
     * The verification result is stored in the
     * $ssl_client_verify variable.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_ssl_module.html#ssl_verify_client
     */
     ssl_verify_client ?: "on" | "off" | "optional" | "optional_no_ca"


     /**
     * Sets the verification depth in the client certificates chain.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_ssl_module.html#ssl_verify_depth
     */
     ssl_verify_depth ?: any


     /**
     * By default, status information is output in the JSON format.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_status_module.html#status_format
     */
     status_format ?: any


     /**
     * The basic status information will be accessible from the surrounding location.
     *
     * @context server, location
     * @see https://nginx.org/en/docs/http/ngx_http_stub_status_module.html#stub_status
     */
     stub_status ?: any


     /**
     * Sets a string to replace and a replacement string.
     * The string to replace is matched ignoring the case.
     * The string to replace (1.9.4) and replacement string can contain variables.
     * Several sub_filter directives
     * can be specified on the same configuration level (1.9.4).
     * These directives are inherited from the previous configuration level
     * if and only if there are no sub_filter directives
     * defined on the current level.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_sub_module.html#sub_filter
     */
     sub_filter ?: any


     /**
     * Allows preserving the “Last-Modified” header field
     * from the original response during replacement
     * to facilitate response caching.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_sub_module.html#sub_filter_last_modified
     */
     sub_filter_last_modified ?: "on" | "off"


     /**
     * Indicates whether to look for each string to replace
     * once or repeatedly.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_sub_module.html#sub_filter_once
     */
     sub_filter_once ?: "on" | "off"


     /**
     * Enables string replacement in responses with the specified MIME types
     * in addition to “text/html”.
     * The special value “*” matches any MIME type (0.8.29).
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_sub_module.html#sub_filter_types
     */
     sub_filter_types ?: any


     /**
     * Enables or disables setting cookies and logging the received cookies:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_userid_module.html#userid
     */
     userid ?: "on" | "v1" | "log" | "off"


     /**
     * Defines a domain for which the cookie is set.
     * The none parameter disables setting of a domain for the
     * cookie.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_userid_module.html#userid_domain
     */
     userid_domain ?: "name" | "none"


     /**
     * Sets a time during which a browser should keep the cookie.
     * The parameter max will cause the cookie to expire on
     * “31 Dec 2037 23:55:55 GMT”.
     * The parameter off will cause the cookie to expire at
     * the end of a browser session.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_userid_module.html#userid_expires
     */
     userid_expires ?: "time" | "max" | "off"


     /**
     * If the parameter is not off,
     * defines one or more additional flags for the cookie:
     * secure,
     * httponly,
     * samesite=strict,
     * samesite=lax,
     * samesite=none.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_userid_module.html#userid_flags
     */
     userid_flags ?: "off" | string


     /**
     * If the parameter is not off, enables the cookie marking
     * mechanism and sets the character used as a mark.
     * This mechanism is used to add or change
     * userid_p3p and/or a cookie expiration time while
     * preserving the client identifier.
     * A mark can be any letter of the English alphabet (case-sensitive),
     * digit, or the “=” character.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_userid_module.html#userid_mark
     */
     userid_mark ?: "letter" | "digit" | "=" | "off"


     /**
     * Sets the cookie name.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_userid_module.html#userid_name
     */
     userid_name ?: any


     /**
     * Sets a value for the “P3P” header field that will be
     * sent along with the cookie.
     * If the directive is set to the special value none,
     * the “P3P” header will not be sent in a response.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_userid_module.html#userid_p3p
     */
     userid_p3p ?: string | "none"


     /**
     * Defines a path for which the cookie is set.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_userid_module.html#userid_path
     */
     userid_path ?: string


     /**
     * If identifiers are issued by multiple servers (services),
     * each service should be assigned its own number
     * to ensure that client identifiers are unique.
     * For version 1 cookies, the default value is zero.
     * For version 2 cookies, the default value is the number composed from the last
     * four octets of the server’s IP address.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_userid_module.html#userid_service
     */
     userid_service ?: any


     /**
     * Makes outgoing connections to a uwsgi server originate
     * from the specified local IP address with an optional port (1.11.2).
     * Parameter value can contain variables (1.3.12).
     * The special value off (1.3.12) cancels the effect
     * of the uwsgi_bind directive
     * inherited from the previous configuration level, which allows the
     * system to auto-assign the local IP address and port.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_bind
     * @example
     * ```
     * uwsgi_bind $remote_addr transparent;
     * ```
     */
     uwsgi_bind ?: "address    [transparent]" | "off"


     /**
     * Sets the size of the buffer used for reading the first part
     * of the response received from the uwsgi server.
     * This part usually contains a small response header.
     * By default, the buffer size is equal to one memory page.
     * This is either 4K or 8K, depending on a platform.
     * It can be made smaller, however.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_buffer_size
     */
     uwsgi_buffer_size ?: string


     /**
     * Enables or disables buffering of responses from the uwsgi server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_buffering
     */
     uwsgi_buffering ?: "on" | "off"


     /**
     * Sets the number and size of the
     * buffers used for reading a response from the uwsgi server,
     * for a single connection.
     * By default, the buffer size is equal to one memory page.
     * This is either 4K or 8K, depending on a platform.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_buffers
     */
     uwsgi_buffers ?: any


     /**
     * When buffering of responses from the uwsgi
     * server is enabled, limits the total size of buffers that
     * can be busy sending a response to the client while the response is not
     * yet fully read.
     * In the meantime, the rest of the buffers can be used for reading the response
     * and, if needed, buffering part of the response to a temporary file.
     * By default, size is limited by the size of two buffers set by the
     * uwsgi_buffer_size and uwsgi_buffers directives.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_busy_buffers_size
     */
     uwsgi_busy_buffers_size ?: string


     /**
     * Defines a shared memory zone used for caching.
     * The same zone can be used in several places.
     * Parameter value can contain variables (1.7.9).
     * The off parameter disables caching inherited
     * from the previous configuration level.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_cache
     */
     uwsgi_cache ?: "zone" | "off"


     /**
     * Allows starting a background subrequest
     * to update an expired cache item,
     * while a stale cached response is returned to the client.
     * Note that it is necessary to
     * allow
     * the usage of a stale cached response when it is being updated.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_cache_background_update
     */
     uwsgi_cache_background_update ?: "on" | "off"


     /**
     * Defines conditions under which the response will not be taken from a cache.
     * If at least one value of the string parameters is not empty and is not
     * equal to “0” then the response will not be taken from the cache:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_cache_bypass
     * @example
     * ```
     * uwsgi_cache_bypass $cookie_nocache $arg_nocache$arg_comment;
     * uwsgi_cache_bypass $http_pragma    $http_authorization;
     * ```
     */
     uwsgi_cache_bypass ?: any


     /**
     * Defines a key for caching, for example
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_cache_key
     * @example
     * ```
     * uwsgi_cache_key localhost:9000$request_uri;
     * ```
     */
     uwsgi_cache_key ?: any


     /**
     * When enabled, only one request at a time will be allowed to populate
     * a new cache element identified according to the uwsgi_cache_key
     * directive by passing a request to a uwsgi server.
     * Other requests of the same cache element will either wait
     * for a response to appear in the cache or the cache lock for
     * this element to be released, up to the time set by the
     * uwsgi_cache_lock_timeout directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_cache_lock
     */
     uwsgi_cache_lock ?: "on" | "off"


     /**
     * If the last request passed to the uwsgi server
     * for populating a new cache element
     * has not completed for the specified time,
     * one more request may be passed to the uwsgi server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_cache_lock_age
     */
     uwsgi_cache_lock_age ?: string


     /**
     * Sets a timeout for uwsgi_cache_lock.
     * When the time expires,
     * the request will be passed to the uwsgi server,
     * however, the response will not be cached.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_cache_lock_timeout
     */
     uwsgi_cache_lock_timeout ?: string


     /**
     * Sets an offset in bytes for byte-range requests.
     * If the range is beyond the offset,
     * the range request will be passed to the uwsgi server
     * and the response will not be cached.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_cache_max_range_offset
     */
     uwsgi_cache_max_range_offset ?: any


     /**
     * If the client request method is listed in this directive then
     * the response will be cached.
     * “GET” and “HEAD” methods are always
     * added to the list, though it is recommended to specify them explicitly.
     * See also the uwsgi_no_cache directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_cache_methods
     */
     uwsgi_cache_methods ?: "GET" | "HEAD" | string


     /**
     * Sets the number of requests after which the response
     * will be cached.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_cache_min_uses
     */
     uwsgi_cache_min_uses ?: any


     /**
     * Defines conditions under which the request will be considered a cache
     * purge request.
     * If at least one value of the string parameters is not empty and is not equal
     * to “0” then the cache entry with a corresponding
     * cache key is removed.
     * The result of successful operation is indicated by returning
     * the 204 (No Content) response.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_cache_purge
     * @example
     * ```
     * uwsgi_cache_path /data/nginx/cache keys_zone=cache_zone:10m;
     * 
     * map $request_method $purge_method {
     *     PURGE   1;
     *     default 0;
     * }
     * 
     * server {
     *     ...
     *     location / {
     *         uwsgi_pass        backend;
     *         uwsgi_cache       cache_zone;
     *         uwsgi_cache_key   $uri;
     *         uwsgi_cache_purge $purge_method;
     *     }
     * }
     * ```
     */
     uwsgi_cache_purge ?: any


     /**
     * Enables revalidation of expired cache items using conditional requests with
     * the “If-Modified-Since” and “If-None-Match”
     * header fields.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_cache_revalidate
     */
     uwsgi_cache_revalidate ?: "on" | "off"


     /**
     * Determines in which cases a stale cached response can be used
     * when an error occurs during communication with the uwsgi server.
     * The directive’s parameters match the parameters of the
     * uwsgi_next_upstream directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_cache_use_stale
     */
     uwsgi_cache_use_stale ?: "error" | "timeout" | "invalid_header" | "updating" | "http_500" | "http_503" | "http_403" | "http_404" | "http_429" | string


     /**
     * Sets caching time for different response codes.
     * For example, the following directives
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_cache_valid
     * @example
     * ```
     * uwsgi_cache_valid 200 302 10m;
     * uwsgi_cache_valid 404      1m;
     * uwsgi_cache_valid 5m;
     * uwsgi_cache_valid 200 302 10m;
     * uwsgi_cache_valid 301      1h;
     * uwsgi_cache_valid any      1m;
     * ```
     */
     uwsgi_cache_valid ?: any


     /**
     * Defines a timeout for establishing a connection with a uwsgi server.
     * It should be noted that this timeout cannot usually exceed 75 seconds.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_connect_timeout
     */
     uwsgi_connect_timeout ?: string


     /**
     * Enables byte-range support
     * for both cached and uncached responses from the uwsgi server
     * regardless of the “Accept-Ranges” field in these responses.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_force_ranges
     */
     uwsgi_force_ranges ?: "on" | "off"


     /**
     * By default,
     * nginx does not pass the header fields “Status” and
     * “X-Accel-...” from the response of a uwsgi
     * server to a client.
     * The uwsgi_hide_header directive sets additional fields
     * that will not be passed.
     * If, on the contrary, the passing of fields needs to be permitted,
     * the uwsgi_pass_header directive can be used.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_hide_header
     */
     uwsgi_hide_header ?: any


     /**
     * Determines whether the connection with a uwsgi server should be
     * closed when a client closes the connection without waiting
     * for a response.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_ignore_client_abort
     */
     uwsgi_ignore_client_abort ?: "on" | "off"


     /**
     * Disables processing of certain response header fields from the uwsgi server.
     * The following fields can be ignored: “X-Accel-Redirect”,
     * “X-Accel-Expires”, “X-Accel-Limit-Rate” (1.1.6),
     * “X-Accel-Buffering” (1.1.6),
     * “X-Accel-Charset” (1.1.6), “Expires”,
     * “Cache-Control”, “Set-Cookie” (0.8.44),
     * and “Vary” (1.7.7).
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_ignore_headers
     */
     uwsgi_ignore_headers ?: any


     /**
     * Determines whether a uwsgi server responses with codes greater than or equal
     * to 300 should be passed to a client
     * or be intercepted and redirected to nginx for processing
     * with the error_page directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_intercept_errors
     */
     uwsgi_intercept_errors ?: "on" | "off"


     /**
     * Limits the speed of reading the response from the uwsgi server.
     * The rate is specified in bytes per second.
     * The zero value disables rate limiting.
     * The limit is set per a request, and so if nginx simultaneously opens
     * two connections to the uwsgi server,
     * the overall rate will be twice as much as the specified limit.
     * The limitation works only if
     * buffering of responses from the uwsgi
     * server is enabled.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_limit_rate
     */
     uwsgi_limit_rate ?: any


     /**
     * When buffering of responses from the uwsgi
     * server is enabled, and the whole response does not fit into the buffers
     * set by the uwsgi_buffer_size and uwsgi_buffers
     * directives, a part of the response can be saved to a temporary file.
     * This directive sets the maximum size of the temporary file.
     * The size of data written to the temporary file at a time is set
     * by the uwsgi_temp_file_write_size directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_max_temp_file_size
     */
     uwsgi_max_temp_file_size ?: string


     /**
     * Sets the value of the modifier1 field in the
     * uwsgi
     * packet header.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_modifier1
     */
     uwsgi_modifier1 ?: any


     /**
     * Sets the value of the modifier2 field in the
     * uwsgi
     * packet header.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_modifier2
     */
     uwsgi_modifier2 ?: any


     /**
     * Specifies in which cases a request should be passed to the next server:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_next_upstream
     */
     uwsgi_next_upstream ?: "error" | "timeout" | "invalid_header" | "http_500" | "http_503" | "http_403" | "http_404" | "http_429" | "non_idempotent" | string


     /**
     * Limits the time during which a request can be passed to the
     * next server.
     * The 0 value turns off this limitation.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_next_upstream_timeout
     */
     uwsgi_next_upstream_timeout ?: string


     /**
     * Limits the number of possible tries for passing a request to the
     * next server.
     * The 0 value turns off this limitation.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_next_upstream_tries
     */
     uwsgi_next_upstream_tries ?: any


     /**
     * Defines conditions under which the response will not be saved to a cache.
     * If at least one value of the string parameters is not empty and is not
     * equal to “0” then the response will not be saved:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_no_cache
     * @example
     * ```
     * uwsgi_no_cache $cookie_nocache $arg_nocache$arg_comment;
     * uwsgi_no_cache $http_pragma    $http_authorization;
     * ```
     */
     uwsgi_no_cache ?: any


     /**
     * Sets a parameter that should be passed to the uwsgi server.
     * The value can contain text, variables, and their combination.
     * These directives are inherited from the previous configuration level
     * if and only if there are no uwsgi_param directives
     * defined on the current level.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_param
     * @example
     * ```
     * location / {
     *     include uwsgi_params;
     *     ...
     * }
     * uwsgi_param HTTPS $https if_not_empty;
     * ```
     */
     uwsgi_param ?: any


     /**
     * Permits passing otherwise disabled header
     * fields from a uwsgi server to a client.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_pass_header
     */
     uwsgi_pass_header ?: any


     /**
     * Indicates whether the original request body is passed
     * to the uwsgi server.
     * See also the uwsgi_pass_request_headers directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_pass_request_body
     */
     uwsgi_pass_request_body ?: "on" | "off"


     /**
     * Indicates whether the header fields of the original request are passed
     * to the uwsgi server.
     * See also the uwsgi_pass_request_body directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_pass_request_headers
     */
     uwsgi_pass_request_headers ?: "on" | "off"


     /**
     * Defines a timeout for reading a response from the uwsgi server.
     * The timeout is set only between two successive read operations,
     * not for the transmission of the whole response.
     * If the uwsgi server does not transmit anything within this time,
     * the connection is closed.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_read_timeout
     */
     uwsgi_read_timeout ?: string


     /**
     * Enables or disables buffering of a client request body.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_request_buffering
     */
     uwsgi_request_buffering ?: "on" | "off"


     /**
     * Sets a timeout for transmitting a request to the uwsgi server.
     * The timeout is set only between two successive write operations,
     * not for the transmission of the whole request.
     * If the uwsgi server does not receive anything within this time,
     * the connection is closed.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_send_timeout
     */
     uwsgi_send_timeout ?: string


     /**
     * Configures the “TCP keepalive” behavior
     * for outgoing connections to a uwsgi server.
     * By default, the operating system’s settings are in effect for the socket.
     * If the directive is set to the value “on”, the
     * SO_KEEPALIVE socket option is turned on for the socket.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_socket_keepalive
     */
     uwsgi_socket_keepalive ?: "on" | "off"


     /**
     * Specifies a file with the certificate in the PEM format
     * used for authentication to a secured uwsgi server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_ssl_certificate
     */
     uwsgi_ssl_certificate ?: any


     /**
     * Specifies a file with the secret key in the PEM format
     * used for authentication to a secured uwsgi server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_ssl_certificate_key
     */
     uwsgi_ssl_certificate_key ?: any


     /**
     * Specifies the enabled ciphers for requests to a secured uwsgi server.
     * The ciphers are specified in the format understood by the OpenSSL library.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_ssl_ciphers
     */
     uwsgi_ssl_ciphers ?: any


     /**
     * Sets arbitrary OpenSSL configuration
     * commands
     * when establishing a connection with the secured uwsgi server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_ssl_conf_command
     */
     uwsgi_ssl_conf_command ?: any


     /**
     * Specifies a file with revoked certificates (CRL)
     * in the PEM format used to verify
     * the certificate of the secured uwsgi server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_ssl_crl
     */
     uwsgi_ssl_crl ?: any


     /**
     * Allows overriding the server name used to
     * verify
     * the certificate of the secured uwsgi server and to be
     * passed through SNI
     * when establishing a connection with the secured uwsgi server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_ssl_name
     */
     uwsgi_ssl_name ?: any


     /**
     * Specifies a file with passphrases for
     * secret keys
     * where each passphrase is specified on a separate line.
     * Passphrases are tried in turn when loading the key.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_ssl_password_file
     */
     uwsgi_ssl_password_file ?: any


     /**
     * Enables the specified protocols for requests to a secured uwsgi server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_ssl_protocols
     */
     uwsgi_ssl_protocols ?: any


     /**
     * Enables or disables passing of the server name through
     * TLS
     * Server Name Indication extension (SNI, RFC 6066)
     * when establishing a connection with the secured uwsgi server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_ssl_server_name
     */
     uwsgi_ssl_server_name ?: "on" | "off"


     /**
     * Determines whether SSL sessions can be reused when working with
     * a secured uwsgi server.
     * If the errors
     * “SSL3_GET_FINISHED:digest check failed”
     * appear in the logs, try disabling session reuse.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_ssl_session_reuse
     */
     uwsgi_ssl_session_reuse ?: "on" | "off"


     /**
     * Specifies a file with trusted CA certificates in the PEM format
     * used to verify
     * the certificate of the secured uwsgi server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_ssl_trusted_certificate
     */
     uwsgi_ssl_trusted_certificate ?: any


     /**
     * Enables or disables verification of the secured uwsgi server certificate.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_ssl_verify
     */
     uwsgi_ssl_verify ?: "on" | "off"


     /**
     * Sets the verification depth in the secured uwsgi server certificates chain.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_ssl_verify_depth
     */
     uwsgi_ssl_verify_depth ?: any


     /**
     * Enables saving of files to a disk.
     * The on parameter saves files with paths
     * corresponding to the directives
     * alias or
     * root.
     * The off parameter disables saving of files.
     * In addition, the file name can be set explicitly using the
     * string with variables:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_store
     * @example
     * ```
     * uwsgi_store /data/www$original_uri;
     * location /images/ {
     *     root               /data/www;
     *     error_page         404 = /fetch$uri;
     * }
     * 
     * location /fetch/ {
     *     internal;
     * 
     *     uwsgi_pass         backend:9000;
     *     ...
     * 
     *     uwsgi_store        on;
     *     uwsgi_store_access user:rw group:rw all:r;
     *     uwsgi_temp_path    /data/temp;
     * 
     *     alias              /data/www/;
     * }
     * ```
     */
     uwsgi_store ?: "on" | "off" | string


     /**
     * Sets access permissions for newly created files and directories, e.g.:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_store_access
     * @example
     * ```
     * uwsgi_store_access user:rw group:rw all:r;
     * uwsgi_store_access group:rw all:r;
     * ```
     */
     uwsgi_store_access ?: any


     /**
     * Limits the size of data written to a temporary file
     * at a time, when buffering of responses from the uwsgi server
     * to temporary files is enabled.
     * By default, size is limited by two buffers set by the
     * uwsgi_buffer_size and uwsgi_buffers directives.
     * The maximum size of a temporary file is set by the
     * uwsgi_max_temp_file_size directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_temp_file_write_size
     */
     uwsgi_temp_file_write_size ?: string


     /**
     * Defines a directory for storing temporary files
     * with data received from uwsgi servers.
     * Up to three-level subdirectory hierarchy can be used underneath the specified
     * directory.
     * For example, in the following configuration
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_temp_path
     * @example
     * ```
     * uwsgi_temp_path /spool/nginx/uwsgi_temp 1 2;
     * /spool/nginx/uwsgi_temp/7/45/00000123457
     * ```
     */
     uwsgi_temp_path ?: any


     /**
     * Sets the size of the buffer per each request
     * in which the request body may be saved
     * before it is started to be processed.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_v2_module.html#http2_body_preread_size
     */
     http2_body_preread_size ?: string


     /**
     * Sets the maximum size of chunks
     * into which the response body is sliced.
     * A too low value results in higher overhead.
     * A too high value impairs prioritization due to
     * 
     * HOL blocking.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_v2_module.html#http2_chunk_size
     */
     http2_chunk_size ?: string


     /**
     * 
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_v2_module.html#http2_idle_timeout
     */
     http2_idle_timeout ?: string


     /**
     * Limits the maximum number of concurrent
     * push requests in a connection.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_v2_module.html#http2_max_concurrent_pushes
     */
     http2_max_concurrent_pushes ?: any


     /**
     * Sets the maximum number of concurrent HTTP/2 streams
     * in a connection.
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_v2_module.html#http2_max_concurrent_streams
     */
     http2_max_concurrent_streams ?: any


     /**
     * 
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_v2_module.html#http2_max_field_size
     */
     http2_max_field_size ?: string


     /**
     * 
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_v2_module.html#http2_max_header_size
     */
     http2_max_header_size ?: string


     /**
     * 
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_v2_module.html#http2_max_requests
     */
     http2_max_requests ?: any


     /**
     * Pre-emptively sends
     * (pushes)
     * a request to the specified uri
     * along with the response to the original request.
     * Only relative URIs with absolute path will be processed,
     * for example:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_v2_module.html#http2_push
     * @example
     * ```
     * http2_push /static/css/main.css;
     * ```
     */
     http2_push ?: "uri" | "off"


     /**
     * Enables automatic conversion of
     * preload
     * links
     * specified in the “Link” response header fields into
     * push
     * requests.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_v2_module.html#http2_push_preload
     */
     http2_push_preload ?: "on" | "off"


     /**
     * 
     *
     * @context http, server
     * @see https://nginx.org/en/docs/http/ngx_http_v2_module.html#http2_recv_timeout
     */
     http2_recv_timeout ?: string


     /**
     * Specifies the DTD file that declares character entities.
     * This file is compiled at the configuration stage.
     * For technical reasons, the module is unable to use the
     * external subset declared in the processed XML, so it is
     * ignored and a specially defined file is used instead.
     * This file should not describe the XML structure.
     * It is enough to declare just the required character entities, for example:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_xslt_module.html#xml_entities
     * @example
     * ```
     * <!ENTITY nbsp "&#xa0;">
     * ```
     */
     xml_entities ?: string


     /**
     * Allows preserving the “Last-Modified” header field
     * from the original response during XSLT transformations
     * to facilitate response caching.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_xslt_module.html#xslt_last_modified
     */
     xslt_last_modified ?: "on" | "off"


     /**
     * Defines the parameters for XSLT stylesheets.
     * The value is treated as an XPath expression.
     * The value can contain variables.
     * To pass a string value to a stylesheet,
     * the xslt_string_param directive can be used.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_xslt_module.html#xslt_param
     */
     xslt_param ?: any


     /**
     * Defines the string parameters for XSLT stylesheets.
     * XPath expressions in the value are not interpreted.
     * The value can contain variables.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_xslt_module.html#xslt_string_param
     */
     xslt_string_param ?: any


     /**
     * Enables transformations in responses with the specified MIME types
     * in addition to “text/xml”.
     * The special value “*” matches any MIME type (0.8.29).
     * If the transformation result is an HTML response, its MIME type
     * is changed to “text/html”.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_xslt_module.html#xslt_types
     */
     xslt_types ?: any


     /**
     * Sets the number of protocol errors after which the connection is closed.
     *
     * @context mail, server
     * @see https://nginx.org/en/docs/mail/ngx_mail_core_module.html#max_errors
     */
     max_errors ?: any


     /**
     * Sets the protocol for a proxied server.
     * Supported protocols are
     * IMAP,
     * POP3, and
     * SMTP.
     *
     * @context server
     * @see https://nginx.org/en/docs/mail/ngx_mail_core_module.html#protocol
     */
     protocol ?: "imap" | "pop3" | "smtp"


     /**
     * Sets the timeout that is used before proxying to the backend starts.
     *
     * @context mail, server
     * @see https://nginx.org/en/docs/mail/ngx_mail_core_module.html#timeout
     */
     timeout ?: string


     /**
     * Sets the URL of the HTTP authentication server.
     * The protocol is described below.
     *
     * @context mail, server
     * @see https://nginx.org/en/docs/mail/ngx_mail_auth_http_module.html#auth_http
     */
     auth_http ?: any


     /**
     * Appends the specified header to requests sent to the authentication server.
     * This header can be used as the shared secret to verify
     * that the request comes from nginx.
     * For example:
     *
     * @context mail, server
     * @see https://nginx.org/en/docs/mail/ngx_mail_auth_http_module.html#auth_http_header
     * @example
     * ```
     * auth_http_header X-Auth-Key "secret_string";
     * ```
     */
     auth_http_header ?: any


     /**
     * Appends the “Auth-SSL-Cert” header with the
     * client
     * certificate in the PEM format (urlencoded)
     * to requests sent to the authentication server.
     *
     * @context mail, server
     * @see https://nginx.org/en/docs/mail/ngx_mail_auth_http_module.html#auth_http_pass_client_cert
     */
     auth_http_pass_client_cert ?: "on" | "off"


     /**
     * Sets the timeout for communication with the authentication server.
     *
     * @context mail, server
     * @see https://nginx.org/en/docs/mail/ngx_mail_auth_http_module.html#auth_http_timeout
     * @example
     * ```
     * GET /auth HTTP/1.0
     * Host: localhost
     * Auth-Method: plain # plain/apop/cram-md5/external
     * Auth-User: user
     * Auth-Pass: password
     * Auth-Protocol: imap # imap/pop3/smtp
     * Auth-Login-Attempt: 1
     * Client-IP: 192.0.2.42
     * Client-Host: client.example.org
     * HTTP/1.0 200 OK
     * Auth-Status: OK
     * Auth-Server: 198.51.100.1
     * Auth-Port: 143
     * HTTP/1.0 200 OK
     * Auth-Status: Invalid login or password
     * Auth-Wait: 3
     * GET /auth HTTP/1.0
     * Host: localhost
     * Auth-Method: apop
     * Auth-User: user
     * Auth-Salt: <238188073.1163692009@mail.example.com>
     * Auth-Pass: auth_response
     * Auth-Protocol: imap
     * Auth-Login-Attempt: 1
     * Client-IP: 192.0.2.42
     * Client-Host: client.example.org
     * HTTP/1.0 200 OK
     * Auth-Status: OK
     * Auth-Server: 198.51.100.1
     * Auth-Port: 143
     * Auth-Pass: plain-text-pass
     * HTTP/1.0 200 OK
     * Auth-Status: Temporary server problem, try again later
     * Auth-Error-Code: 451 4.3.0
     * Auth-Wait: 3
     * 451 4.3.0 Temporary server problem, try again later
     * GET /auth HTTP/1.0
     * Host: localhost
     * Auth-Method: none
     * Auth-User:
     * Auth-Pass:
     * Auth-Protocol: smtp
     * Auth-Login-Attempt: 1
     * Client-IP: 192.0.2.42
     * Client-Host: client.example.org
     * Auth-SMTP-Helo: client.example.org
     * Auth-SMTP-From: MAIL FROM: <>
     * Auth-SMTP-To: RCPT TO: <postmaster@mail.example.com>
     * GET /auth HTTP/1.0
     * Host: localhost
     * Auth-Method: plain
     * Auth-User: user
     * Auth-Pass: password
     * Auth-Protocol: imap
     * Auth-Login-Attempt: 1
     * Client-IP: 192.0.2.42
     * Auth-SSL: on
     * Auth-SSL-Protocol: TLSv1.3
     * Auth-SSL-Cipher: TLS_AES_256_GCM_SHA384
     * Auth-SSL-Verify: SUCCESS
     * Auth-SSL-Subject: /CN=example.com
     * Auth-SSL-Issuer: /CN=example.com
     * Auth-SSL-Serial: C07AD56B846B5BFF
     * Auth-SSL-Fingerprint: 29d6a80a123d13355ed16b4b04605e29cb55a5ad
     * ```
     */
     auth_http_timeout ?: string


     /**
     * Sets the size of the buffer used for proxying.
     * By default, the buffer size is equal to one memory page.
     * Depending on a platform, it is either 4K or 8K.
     *
     * @context mail, server
     * @see https://nginx.org/en/docs/mail/ngx_mail_proxy_module.html#proxy_buffer
     */
     proxy_buffer ?: string


     /**
     * Indicates whether to pass the error message obtained during
     * the authentication on the backend to the client.
     *
     * @context mail, server
     * @see https://nginx.org/en/docs/mail/ngx_mail_proxy_module.html#proxy_pass_error_message
     */
     proxy_pass_error_message ?: "on" | "off"


     /**
     * Enables the
     * PROXY
     * protocol for connections to a backend.
     *
     * @context mail, server
     * @see https://nginx.org/en/docs/mail/ngx_mail_proxy_module.html#proxy_protocol
     */
     proxy_protocol ?: "on" | "off"


     /**
     * Enables or disables user authentication on the SMTP backend
     * using the AUTH command.
     *
     * @context mail, server
     * @see https://nginx.org/en/docs/mail/ngx_mail_proxy_module.html#proxy_smtp_auth
     */
     proxy_smtp_auth ?: "on" | "off"


     /**
     * Sets the timeout between two successive
     * read or write operations on client or proxied server connections.
     * If no data is transmitted within this time, the connection is closed.
     *
     * @context mail, server
     * @see https://nginx.org/en/docs/mail/ngx_mail_proxy_module.html#proxy_timeout
     */
     proxy_timeout ?: any


     /**
     * Enables or disables the passing of the
     * XCLIENT
     * command with client parameters when connecting to the SMTP backend.
     *
     * @context mail, server
     * @see https://nginx.org/en/docs/mail/ngx_mail_proxy_module.html#xclient
     */
     xclient ?: "on" | "off"


     /**
     * 
     *
     * @context mail, server
     * @see https://nginx.org/en/docs/mail/ngx_mail_ssl_module.html#starttls
     */
     starttls ?: "on" | "off" | "only"


     /**
     * Sets permitted methods of authentication for IMAP clients.
     * Supported methods are:
     *
     * @context mail, server
     * @see https://nginx.org/en/docs/mail/ngx_mail_imap_module.html#imap_auth
     */
     imap_auth ?: any


     /**
     * Sets the
     * IMAP protocol
     * extensions list that is passed to the client in response to
     * the CAPABILITY command.
     * The authentication methods specified in the imap_auth directive and
     * STARTTLS
     * are automatically added to this list depending on the
     * starttls directive value.
     *
     * @context mail, server
     * @see https://nginx.org/en/docs/mail/ngx_mail_imap_module.html#imap_capabilities
     */
     imap_capabilities ?: any


     /**
     * Sets the size of the buffer used for reading IMAP commands.
     * By default, the buffer size is equal to one memory page.
     * This is either 4K or 8K, depending on a platform.
     *
     * @context mail, server
     * @see https://nginx.org/en/docs/mail/ngx_mail_imap_module.html#imap_client_buffer
     */
     imap_client_buffer ?: string


     /**
     * Sets permitted methods of authentication for POP3 clients.
     * Supported methods are:
     *
     * @context mail, server
     * @see https://nginx.org/en/docs/mail/ngx_mail_pop3_module.html#pop3_auth
     */
     pop3_auth ?: any


     /**
     * Sets the
     * POP3 protocol
     * extensions list that is passed to the client in response to
     * the CAPA command.
     * The authentication methods specified in the pop3_auth directive
     * (SASL extension) and
     * STLS
     * are automatically added to this list depending on the
     * starttls directive value.
     *
     * @context mail, server
     * @see https://nginx.org/en/docs/mail/ngx_mail_pop3_module.html#pop3_capabilities
     */
     pop3_capabilities ?: any


     /**
     * Sets permitted methods of
     * SASL authentication
     * for SMTP clients.
     * Supported methods are:
     *
     * @context mail, server
     * @see https://nginx.org/en/docs/mail/ngx_mail_smtp_module.html#smtp_auth
     */
     smtp_auth ?: any


     /**
     * Sets the SMTP protocol extensions list
     * that is passed to the client in response to the
     * EHLO command.
     * The authentication methods specified in the smtp_auth directive and
     * STARTTLS
     * are automatically added to this list depending on the
     * starttls directive value.
     *
     * @context mail, server
     * @see https://nginx.org/en/docs/mail/ngx_mail_smtp_module.html#smtp_capabilities
     */
     smtp_capabilities ?: any


     /**
     * Sets the size of the buffer used for reading SMTP commands.
     * By default, the buffer size is equal to one memory page.
     * This is either 4K or 8K, depending on a platform.
     *
     * @context mail, server
     * @see https://nginx.org/en/docs/mail/ngx_mail_smtp_module.html#smtp_client_buffer
     */
     smtp_client_buffer ?: string


     /**
     * Allows setting a delay before sending an SMTP greeting
     * in order to reject clients who fail to wait for the greeting before
     * sending SMTP commands.
     *
     * @context mail, server
     * @see https://nginx.org/en/docs/mail/ngx_mail_smtp_module.html#smtp_greeting_delay
     */
     smtp_greeting_delay ?: string


     /**
     * Specifies a size of the
     * preread buffer.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_core_module.html#preread_buffer_size
     */
     preread_buffer_size ?: string


     /**
     * Specifies a timeout of the
     * preread phase.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_core_module.html#preread_timeout
     */
     preread_timeout ?: any


     /**
     * Specifies a timeout for
     * reading the PROXY protocol header to complete.
     * If no entire header is transmitted within this time,
     * the connection is closed.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_core_module.html#proxy_protocol_timeout
     */
     proxy_protocol_timeout ?: any


     /**
     * Sets an njs function which will be called at the
     * access phase.
     * Since 0.4.0,
     * a module function can be referenced.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_js_module.html#js_access
     */
     js_access ?: "function" | "module.function"


     /**
     * Sets a data filter.
     * Since 0.4.0,
     * a module function can be referenced.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_js_module.html#js_filter
     */
     js_filter ?: "function" | "module.function"


     /**
     * Sets an njs function which will be called at the
     * preread phase.
     * Since 0.4.0,
     * a module function can be referenced.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_js_module.html#js_preread
     */
     js_preread ?: "function" | "module.function"


     /**
     * Limits the speed of reading the data from the proxied server.
     * The rate is specified in bytes per second.
     * The zero value disables rate limiting.
     * The limit is set per a connection, so if nginx simultaneously opens
     * two connections to the proxied server,
     * the overall rate will be twice as much as the specified limit.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_proxy_module.html#proxy_download_rate
     * @example
     * ```
     * map $slow $rate {
     *     1     4k;
     *     2     8k;
     * }
     * 
     * proxy_download_rate $rate;
     * ```
     */
     proxy_download_rate ?: any


     /**
     * Enables or disables closing
     * each direction of a TCP connection independently (“TCP half-close”).
     * If enabled, proxying over TCP will be kept
     * until both sides close the connection.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_proxy_module.html#proxy_half_close
     */
     proxy_half_close ?: "on" | "off"


     /**
     * Sets the address of a proxied server.
     * The address can be specified as a domain name or IP address,
     * and a port:
     *
     * @context server
     * @see https://nginx.org/en/docs/stream/ngx_stream_proxy_module.html#proxy_pass
     * @example
     * ```
     * proxy_pass localhost:12345;
     * proxy_pass unix:/tmp/stream.socket;
     * proxy_pass $upstream;
     * ```
     */
     proxy_pass ?: any


     /**
     * Sets the number of client datagrams at which
     * binding between a client and existing UDP stream session is dropped.
     * After receiving the specified number of datagrams, next datagram
     * from the same client starts a new session.
     * The session terminates when all client datagrams are transmitted
     * to a proxied server and the expected number of
     * responses is received,
     * or when it reaches a timeout.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_proxy_module.html#proxy_requests
     */
     proxy_requests ?: any


     /**
     * Sets the number of datagrams expected from the proxied server
     * in response to a client datagram
     * if the UDP
     * protocol is used.
     * The number serves as a hint for session termination.
     * By default, the number of datagrams is not limited.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_proxy_module.html#proxy_responses
     */
     proxy_responses ?: any


     /**
     * Enables terminating all sessions to a proxied server
     * after it was removed from the group or marked as permanently unavailable.
     * This can occur because of
     * re-resolve
     * or with the API
     * DELETE
     * command.
     * A server can be marked as permanently unavailable if it is considered
     * unhealthy
     * or with the API
     * PATCH
     * command.
     * Each session is terminated when the next
     * read or write event is processed for the client or proxied server.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_proxy_module.html#proxy_session_drop
     */
     proxy_session_drop ?: "on" | "off"


     /**
     * Enables the SSL/TLS protocol for connections to a proxied server.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_proxy_module.html#proxy_ssl
     */
     proxy_ssl ?: "on" | "off"


     /**
     * Limits the speed of reading the data from the client.
     * The rate is specified in bytes per second.
     * The zero value disables rate limiting.
     * The limit is set per a connection, so if the client simultaneously opens
     * two connections,
     * the overall rate will be twice as much as the specified limit.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_proxy_module.html#proxy_upload_rate
     * @example
     * ```
     * map $slow $rate {
     *     1     4k;
     *     2     8k;
     * }
     * 
     * proxy_upload_rate $rate;
     * ```
     */
     proxy_upload_rate ?: any


     /**
     * Specifies the list of supported
     * ALPN protocols.
     * One of the protocols must be
     * negotiated if the client uses ALPN:
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_ssl_module.html#ssl_alpn
     * @example
     * ```
     * map $ssl_alpn_protocol $proxy {
     *     h2                127.0.0.1:8001;
     *     http/1.1          127.0.0.1:8002;
     * }
     * 
     * server {
     *     listen      12346;
     *     proxy_pass  $proxy;
     *     ssl_alpn    h2 http/1.1;
     * }
     * ```
     */
     ssl_alpn ?: any


     /**
     * Specifies a timeout for the SSL handshake to complete.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_ssl_module.html#ssl_handshake_timeout
     */
     ssl_handshake_timeout ?: string


     /**
     * Enables extracting information from the ClientHello message at
     * the preread phase.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_ssl_preread_module.html#ssl_preread
     */
     ssl_preread ?: "on" | "off"


     /**
     * Enables periodic health checks of the servers in a
     * group.
     *
     * @context server
     * @see https://nginx.org/en/docs/stream/ngx_stream_upstream_hc_module.html#health_check
     */
     health_check ?: any


     /**
     * Overrides the
     * proxy_timeout
     * value for health checks.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_upstream_hc_module.html#health_check_timeout
     */
     health_check_timeout ?: any


     /**
     * Enables the synchronization of shared memory zones between cluster nodes.
     * Cluster nodes are defined using zone_sync_server directives.
     *
     * @context server
     * @see https://nginx.org/en/docs/stream/ngx_stream_zone_sync_module.html#zone_sync
     */
     zone_sync ?: any


     /**
     * Sets the number and size of the
     * per-zone buffers used for pushing zone contents.
     * By default, the buffer size is equal to one memory page.
     * This is either 4K or 8K, depending on a platform.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_zone_sync_module.html#zone_sync_buffers
     */
     zone_sync_buffers ?: any


     /**
     * Defines an interval between connection attempts to another cluster node.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_zone_sync_module.html#zone_sync_connect_retry_interval
     */
     zone_sync_connect_retry_interval ?: string


     /**
     * Defines a timeout for establishing a connection with another cluster node.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_zone_sync_module.html#zone_sync_connect_timeout
     */
     zone_sync_connect_timeout ?: string


     /**
     * Defines an interval for polling updates in a shared memory zone.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_zone_sync_module.html#zone_sync_interval
     */
     zone_sync_interval ?: string


     /**
     * Sets size of a per-connection receive buffer used to parse
     * incoming stream of synchronization messages.
     * The buffer size must be equal or greater than one of the
     * zone_sync_buffers.
     * By default, the buffer size is equal to
     * zone_sync_buffers size
     * multiplied by number.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_zone_sync_module.html#zone_sync_recv_buffer_size
     */
     zone_sync_recv_buffer_size ?: string


     /**
     * Defines the address of a cluster node.
     * The address can be specified as a domain name or IP address
     * with a mandatory port, or as a UNIX-domain socket path
     * specified after the “unix:” prefix.
     * A domain name that resolves to several IP addresses defines
     * multiple nodes at once.
     *
     * @context server
     * @see https://nginx.org/en/docs/stream/ngx_stream_zone_sync_module.html#zone_sync_server
     * @example
     * ```
     * stream {
     *     resolver 10.0.0.1;
     * 
     *     server {
     *         zone_sync;
     *         zone_sync_server cluster.example.com:12345 resolve;
     *         ...
     *     }
     * }
     * ```
     */
     zone_sync_server ?: any


     /**
     * Enables the SSL/TLS protocol for connections to another cluster server.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_zone_sync_module.html#zone_sync_ssl
     */
     zone_sync_ssl ?: "on" | "off"


     /**
     * Specifies a file with the certificate in the PEM format
     * used for authentication to another cluster server.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_zone_sync_module.html#zone_sync_ssl_certificate
     */
     zone_sync_ssl_certificate ?: any


     /**
     * Specifies a file with the secret key in the PEM format
     * used for authentication to another cluster server.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_zone_sync_module.html#zone_sync_ssl_certificate_key
     */
     zone_sync_ssl_certificate_key ?: any


     /**
     * Specifies the enabled ciphers for connections to another cluster server.
     * The ciphers are specified in the format understood by the OpenSSL library.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_zone_sync_module.html#zone_sync_ssl_ciphers
     */
     zone_sync_ssl_ciphers ?: any


     /**
     * Sets arbitrary OpenSSL configuration
     * commands
     * when establishing a connection with another cluster server.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_zone_sync_module.html#zone_sync_ssl_conf_command
     */
     zone_sync_ssl_conf_command ?: any


     /**
     * Specifies a file with revoked certificates (CRL)
     * in the PEM format used to verify
     * the certificate of another cluster server.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_zone_sync_module.html#zone_sync_ssl_crl
     */
     zone_sync_ssl_crl ?: any


     /**
     * Allows overriding the server name used to
     * verify
     * the certificate of a cluster server and to be
     * passed through SNI
     * when establishing a connection with the cluster server.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_zone_sync_module.html#zone_sync_ssl_name
     */
     zone_sync_ssl_name ?: any


     /**
     * Specifies a file with passphrases for
     * secret keys
     * where each passphrase is specified on a separate line.
     * Passphrases are tried in turn when loading the key.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_zone_sync_module.html#zone_sync_ssl_password_file
     */
     zone_sync_ssl_password_file ?: any


     /**
     * Enables the specified protocols for connections to another cluster server.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_zone_sync_module.html#zone_sync_ssl_protocols
     */
     zone_sync_ssl_protocols ?: any


     /**
     * Enables or disables passing of the server name through
     * TLS
     * Server Name Indication extension (SNI, RFC 6066)
     * when establishing a connection with another cluster server.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_zone_sync_module.html#zone_sync_ssl_server_name
     */
     zone_sync_ssl_server_name ?: "on" | "off"


     /**
     * Specifies a file with trusted CA certificates in the PEM format
     * used to verify
     * the certificate of another cluster server.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_zone_sync_module.html#zone_sync_ssl_trusted_certificate
     */
     zone_sync_ssl_trusted_certificate ?: any


     /**
     * Enables or disables verification of another cluster server certificate.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_zone_sync_module.html#zone_sync_ssl_verify
     */
     zone_sync_ssl_verify ?: "on" | "off"


     /**
     * Sets the verification depth in another cluster server certificates chain.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_zone_sync_module.html#zone_sync_ssl_verify_depth
     */
     zone_sync_ssl_verify_depth ?: any


     /**
     * Sets the timeout between two successive
     * read or write operations on connection to another cluster node.
     * If no data is transmitted within this time, the connection is closed.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_zone_sync_module.html#zone_sync_timeout
     */
     zone_sync_timeout ?: any


}

export interface NginxLocationDirectives extends NginxAnyDirectives {
     /**
     * Configures logging.
     * Several logs can be specified on the same configuration level (1.5.2).
     * If on the main configuration level writing a log to a file
     * is not explicitly defined, the default file will be used.
     *
     * @context main, http, mail, stream, server, location
     * @see https://nginx.org/en/docs/ngx_core_module.html#error_log
     */
     error_log ?: any


     /**
     * If disabled, redirects issued by nginx will be relative.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#absolute_redirect
     */
     absolute_redirect ?: "on" | "off"


     /**
     * Enables or disables the use of asynchronous file I/O (AIO)
     * on FreeBSD and Linux:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#aio
     * @example
     * ```
     * location /video/ {
     *     aio            on;
     *     output_buffers 1 64k;
     * }
     * options VFS_AIO
     * kldload aio
     * location /video/ {
     *     aio            on;
     *     directio       512;
     *     output_buffers 1 128k;
     * }
     * location /video/ {
     *     sendfile       on;
     *     aio            on;
     *     directio       8m;
     * }
     * location /video/ {
     *     sendfile       on;
     *     aio            threads;
     * }
     * aio threads=pool$disk;
     * ```
     */
     aio ?: "on" | "off" | string


     /**
     * If aio is enabled, specifies whether it is used for writing files.
     * Currently, this only works when using
     * aio threads
     * and is limited to writing temporary files
     * with data received from proxied servers.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#aio_write
     */
     aio_write ?: "on" | "off"


     /**
     * Defines a replacement for the specified location.
     * For example, with the following configuration
     *
     * @context location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#alias
     * @example
     * ```
     * location /i/ {
     *     alias /data/w3/images/;
     * }
     * location ~ ^/users/(.+\.(?:gif|jpe?g|png))$ {
     *     alias /data/w3/images/$1;
     * }
     * location /images/ {
     *     alias /data/w3/images/;
     * }
     * location /images/ {
     *     root /data/w3;
     * }
     * ```
     */
     alias ?: string


     /**
     * Delays processing of unauthorized requests with 401 response code
     * to prevent timing attacks when access is limited by
     * password, by the
     * result of subrequest,
     * or by JWT.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#auth_delay
     */
     auth_delay ?: string


     /**
     * Allows disabling chunked transfer encoding in HTTP/1.1.
     * It may come in handy when using a software failing to support
     * chunked encoding despite the standard’s requirement.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#chunked_transfer_encoding
     */
     chunked_transfer_encoding ?: "on" | "off"


     /**
     * Sets buffer size for reading client request body.
     * In case the request body is larger than the buffer,
     * the whole body or only its part is written to a
     * temporary file.
     * By default, buffer size is equal to two memory pages.
     * This is 8K on x86, other 32-bit platforms, and x86-64.
     * It is usually 16K on other 64-bit platforms.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#client_body_buffer_size
     */
     client_body_buffer_size ?: string


     /**
     * Determines whether nginx should save the entire client request body
     * into a file.
     * This directive can be used during debugging, or when using the
     * $request_body_file
     * variable, or the
     * $r->request_body_file
     * method of the module
     * ngx_http_perl_module.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#client_body_in_file_only
     */
     client_body_in_file_only ?: "on" | "clean" | "off"


     /**
     * Determines whether nginx should save the entire client request body
     * in a single buffer.
     * The directive is recommended when using the
     * $request_body
     * variable, to save the number of copy operations involved.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#client_body_in_single_buffer
     */
     client_body_in_single_buffer ?: "on" | "off"


     /**
     * Defines a directory for storing temporary files holding client request bodies.
     * Up to three-level subdirectory hierarchy can be used under the specified
     * directory.
     * For example, in the following configuration
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#client_body_temp_path
     * @example
     * ```
     * client_body_temp_path /spool/nginx/client_temp 1 2;
     * /spool/nginx/client_temp/7/45/00000123457
     * ```
     */
     client_body_temp_path ?: any


     /**
     * Defines a timeout for reading client request body.
     * The timeout is set only for a period between two successive read operations,
     * not for the transmission of the whole request body.
     * If a client does not transmit anything within this time, the
     * request is terminated with the
     * 408 (Request Time-out)
     * error.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#client_body_timeout
     */
     client_body_timeout ?: string


     /**
     * Sets the maximum allowed size of the client request body.
     * If the size in a request exceeds the configured value, the
     * 413 (Request Entity Too Large)
     * error is returned to the client.
     * Please be aware that
     * browsers cannot correctly display
     * this error.
     * Setting size to 0 disables checking of client
     * request body size.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#client_max_body_size
     */
     client_max_body_size ?: string


     /**
     * Defines the default MIME type of a response.
     * Mapping of file name extensions to MIME types can be set
     * with the types directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#default_type
     */
     default_type ?: any


     /**
     * Enables the use of
     * the O_DIRECT flag (FreeBSD, Linux),
     * the F_NOCACHE flag (macOS),
     * or the directio() function (Solaris),
     * when reading files that are larger than or equal to
     * the specified size.
     * The directive automatically disables (0.7.15) the use of
     * sendfile
     * for a given request.
     * It can be useful for serving large files:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#directio
     * @example
     * ```
     * directio 4m;
     * ```
     */
     directio ?: "size" | "off"


     /**
     * Sets the alignment for
     * directio.
     * In most cases, a 512-byte alignment is enough.
     * However, when using XFS under Linux, it needs to be increased to 4K.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#directio_alignment
     */
     directio_alignment ?: string


     /**
     * Determines how symbolic links should be treated when opening files:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#disable_symlinks
     * @example
     * ```
     * disable_symlinks on from=$document_root;
     * ```
     */
     disable_symlinks ?: any


     /**
     * Defines the URI that will be shown for the specified errors.
     * A uri value can contain variables.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#error_page
     * @example
     * ```
     * error_page 404             /404.html;
     * error_page 500 502 503 504 /50x.html;
     * error_page 404 =200 /empty.gif;
     * error_page 404 = /404.php;
     * location / {
     *     error_page 404 = @fallback;
     * }
     * 
     * location @fallback {
     *     proxy_pass http://backend;
     * }
     * error_page 403      http://example.com/forbidden.html;
     * error_page 404 =301 http://example.com/notfound.html;
     * ```
     */
     error_page ?: any


     /**
     * Enables or disables automatic generation of the “ETag”
     * response header field for static resources.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#etag
     */
     etag ?: "on" | "off"


     /**
     * Specifies how to compare modification time of a response
     * with the time in the
     * “If-Modified-Since”
     * request header field:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#if_modified_since
     */
     if_modified_since ?: "off" | "exact" | "before"


     /**
     * Specifies that a given location can only be used for internal requests.
     * For external requests, the client error
     * 404 (Not Found)
     * is returned.
     * Internal requests are the following:
     *
     * @context location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#internal
     * @example
     * ```
     * error_page 404 /404.html;
     * 
     * location = /404.html {
     *     internal;
     * }
     * ```
     */
     internal ?: any


     /**
     * Disables keep-alive connections with misbehaving browsers.
     * The browser parameters specify which
     * browsers will be affected.
     * The value msie6 disables keep-alive connections
     * with old versions of MSIE, once a POST request is received.
     * The value safari disables keep-alive connections
     * with Safari and Safari-like browsers on macOS and macOS-like
     * operating systems.
     * The value none enables keep-alive connections
     * with all browsers.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#keepalive_disable
     */
     keepalive_disable ?: "none" | string


     /**
     * Sets the maximum number of requests that can be
     * served through one keep-alive connection.
     * After the maximum number of requests are made, the connection is closed.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#keepalive_requests
     */
     keepalive_requests ?: any


     /**
     * Limits the maximum time during which
     * requests can be processed through one keep-alive connection.
     * After this time is reached, the connection is closed
     * following the subsequent request processing.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#keepalive_time
     */
     keepalive_time ?: string


     /**
     * The first parameter sets a timeout during which a keep-alive
     * client connection will stay open on the server side.
     * The zero value disables keep-alive client connections.
     * The optional second parameter sets a value in the
     * “Keep-Alive: timeout=time”
     * response header field.
     * Two parameters may differ.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#keepalive_timeout
     */
     keepalive_timeout ?: any


     /**
     * Limits allowed HTTP methods inside a location.
     * The method parameter can be one of the following:
     * GET,
     * HEAD,
     * POST,
     * PUT,
     * DELETE,
     * MKCOL,
     * COPY,
     * MOVE,
     * OPTIONS,
     * PROPFIND,
     * PROPPATCH,
     * LOCK,
     * UNLOCK,
     * or
     * PATCH.
     * Allowing the GET method makes the
     * HEAD method also allowed.
     * Access to other methods can be limited using the
     * ngx_http_access_module,
     * ngx_http_auth_basic_module,
     * and
     * ngx_http_auth_jwt_module
     * (1.13.10)
     * modules directives:
     *
     * @context location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#limit_except
     * @example
     * ```
     * limit_except GET {
     *     allow 192.168.1.0/32;
     *     deny  all;
     * }
     * ```
     */
     limit_except ?: any


     /**
     * Limits the rate of response transmission to a client.
     * The rate is specified in bytes per second.
     * The zero value disables rate limiting.
     * 
     * The limit is set per a request, and so if a client simultaneously opens
     * two connections, the overall rate will be twice as much
     * as the specified limit.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#limit_rate
     * @example
     * ```
     * map $slow $rate {
     *     1     4k;
     *     2     8k;
     * }
     * 
     * limit_rate $rate;
     * server {
     * 
     *     if ($slow) {
     *         set $limit_rate 4k;
     *     }
     * 
     *     ...
     * }
     * ```
     */
     limit_rate ?: any


     /**
     * Sets the initial amount after which the further transmission
     * of a response to a client will be rate limited.
     * Parameter value can contain variables (1.17.0).
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#limit_rate_after
     * @example
     * ```
     * location /flv/ {
     *     flv;
     *     limit_rate_after 500k;
     *     limit_rate       50k;
     * }
     * ```
     */
     limit_rate_after ?: string


     /**
     * Controls how nginx closes client connections.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#lingering_close
     */
     lingering_close ?: "off" | "on" | "always"


     /**
     * When lingering_close is in effect,
     * this directive specifies the maximum time during which nginx
     * will process (read and ignore) additional data coming from a client.
     * After that, the connection will be closed, even if there will be
     * more data.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#lingering_time
     */
     lingering_time ?: string


     /**
     * When lingering_close is in effect, this directive specifies
     * the maximum waiting time for more client data to arrive.
     * If data are not received during this time, the connection is closed.
     * Otherwise, the data are read and ignored, and nginx starts waiting
     * for more data again.
     * The “wait-read-ignore” cycle is repeated, but no longer than specified by the
     * lingering_time directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#lingering_timeout
     */
     lingering_timeout ?: string


     /**
     * Sets configuration depending on a request URI.
     *
     * @context server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#location
     * @example
     * ```
     * location = / {
     *     [ configuration A ]
     * }
     * 
     * location / {
     *     [ configuration B ]
     * }
     * 
     * location /documents/ {
     *     [ configuration C ]
     * }
     * 
     * location ^~ /images/ {
     *     [ configuration D ]
     * }
     * 
     * location ~* \.(gif|jpg|jpeg)$ {
     *     [ configuration E ]
     * }
     * location /user/ {
     *     proxy_pass http://user.example.com;
     * }
     * 
     * location = /user {
     *     proxy_pass http://login.example.com;
     * }
     * ```
     */
     location ?: NginxLocationDirectives | string


     /**
     * Enables or disables logging of errors about not found files into
     * error_log.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#log_not_found
     */
     log_not_found ?: "on" | "off"


     /**
     * Enables or disables logging of subrequests into
     * access_log.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#log_subrequest
     */
     log_subrequest ?: "on" | "off"


     /**
     * Limits the maximum allowed number of ranges in byte-range requests.
     * Requests that exceed the limit are processed as if there were no
     * byte ranges specified.
     * By default, the number of ranges is not limited.
     * The zero value disables the byte-range support completely.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#max_ranges
     */
     max_ranges ?: any


     /**
     * Enables or disables adding comments to responses for MSIE clients with status
     * greater than 400 to increase the response size to 512 bytes.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#msie_padding
     */
     msie_padding ?: "on" | "off"


     /**
     * Enables or disables issuing refreshes instead of redirects for MSIE clients.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#msie_refresh
     */
     msie_refresh ?: "on" | "off"


     /**
     * Configures a cache that can store:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#open_file_cache
     * @example
     * ```
     * open_file_cache          max=1000 inactive=20s;
     * open_file_cache_valid    30s;
     * open_file_cache_min_uses 2;
     * open_file_cache_errors   on;
     * ```
     */
     open_file_cache ?: any


     /**
     * Enables or disables caching of file lookup errors by
     * open_file_cache.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#open_file_cache_errors
     */
     open_file_cache_errors ?: "on" | "off"


     /**
     * Sets the minimum number of file accesses during
     * the period configured by the inactive parameter
     * of the open_file_cache directive, required for a file
     * descriptor to remain open in the cache.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#open_file_cache_min_uses
     */
     open_file_cache_min_uses ?: any


     /**
     * Sets a time after which
     * open_file_cache
     * elements should be validated.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#open_file_cache_valid
     */
     open_file_cache_valid ?: string


     /**
     * Sets the number and size of the
     * buffers used for reading a response from a disk.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#output_buffers
     */
     output_buffers ?: any


     /**
     * Enables or disables specifying the port in
     * absolute redirects issued by nginx.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#port_in_redirect
     */
     port_in_redirect ?: "on" | "off"


     /**
     * If possible, the transmission of client data will be postponed until
     * nginx has at least size bytes of data to send.
     * The zero value disables postponing data transmission.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#postpone_output
     */
     postpone_output ?: string


     /**
     * Sets the amount of pre-reading for the kernel when working with file.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#read_ahead
     */
     read_ahead ?: string


     /**
     * Enables or disables doing several redirects using the
     * error_page
     * directive.
     * The number of such redirects is limited.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#recursive_error_pages
     */
     recursive_error_pages ?: "on" | "off"


     /**
     * Enables or disables resetting timed out connections
     * and connections
     * closed
     * with the non-standard code 444 (1.15.2).
     * The reset is performed as follows.
     * Before closing a socket, the
     * SO_LINGER
     * option is set on it with a timeout value of 0.
     * When the socket is closed, TCP RST is sent to the client, and all memory
     * occupied by this socket is released.
     * This helps avoid keeping an already closed socket with filled buffers
     * in a FIN_WAIT1 state for a long time.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#reset_timedout_connection
     */
     reset_timedout_connection ?: "on" | "off"


     /**
     * Configures name servers used to resolve names of upstream servers
     * into addresses, for example:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#resolver
     * @example
     * ```
     * resolver 127.0.0.1 [::1]:5353;
     * resolver 127.0.0.1 [::1]:5353 valid=30s;
     * ```
     */
     resolver ?: any


     /**
     * Sets a timeout for name resolution, for example:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#resolver_timeout
     * @example
     * ```
     * resolver_timeout 5s;
     * ```
     */
     resolver_timeout ?: string


     /**
     * Sets the root directory for requests.
     * For example, with the following configuration
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#root
     * @example
     * ```
     * location /i/ {
     *     root /data/w3;
     * }
     * ```
     */
     root ?: string


     /**
     * Allows access if all (all) or at least one
     * (any) of the
     * ngx_http_access_module,
     * ngx_http_auth_basic_module,
     * ngx_http_auth_request_module,
     * or
     * ngx_http_auth_jwt_module
     * modules allow access.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#satisfy
     * @example
     * ```
     * location / {
     *     satisfy any;
     * 
     *     allow 192.168.1.0/32;
     *     deny  all;
     * 
     *     auth_basic           "closed site";
     *     auth_basic_user_file conf/htpasswd;
     * }
     * ```
     */
     satisfy ?: "all" | "any"


     /**
     * If the directive is set to a non-zero value, nginx will try to minimize
     * the number of send operations on client sockets by using either
     * NOTE_LOWAT flag of the
     * kqueue method
     * or the SO_SNDLOWAT socket option.
     * In both cases the specified size is used.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#send_lowat
     */
     send_lowat ?: string


     /**
     * Sets a timeout for transmitting a response to the client.
     * The timeout is set only between two successive write operations,
     * not for the transmission of the whole response.
     * If the client does not receive anything within this time,
     * the connection is closed.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#send_timeout
     */
     send_timeout ?: string


     /**
     * Enables or disables the use of
     * sendfile().
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#sendfile
     * @example
     * ```
     * location /video/ {
     *     sendfile       on;
     *     tcp_nopush     on;
     *     aio            on;
     * }
     * ```
     */
     sendfile ?: "on" | "off"


     /**
     * Limits the amount of data that can be
     * transferred in a single sendfile() call.
     * Without the limit, one fast connection may seize the worker process entirely.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#sendfile_max_chunk
     */
     sendfile_max_chunk ?: string


     /**
     * Enables or disables the use of the primary server name, specified by the
     * server_name directive,
     * in absolute redirects issued by nginx.
     * When the use of the primary server name is disabled, the name from the
     * “Host” request header field is used.
     * If this field is not present, the IP address of the server is used.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#server_name_in_redirect
     */
     server_name_in_redirect ?: "on" | "off"


     /**
     * Enables or disables emitting nginx version on error pages and in the
     * “Server” response header field.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#server_tokens
     */
     server_tokens ?: "on" | "off" | "build" | string


     /**
     * Sets the size of the buffer used for
     * storing the response body of a subrequest.
     * By default, the buffer size is equal to one memory page.
     * This is either 4K or 8K, depending on a platform.
     * It can be made smaller, however.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#subrequest_output_buffer_size
     */
     subrequest_output_buffer_size ?: string


     /**
     * Enables or disables the use of the TCP_NODELAY option.
     * The option is enabled when a connection is transitioned into the
     * keep-alive state.
     * Additionally, it is enabled on SSL connections,
     * for unbuffered proxying,
     * and for WebSocket proxying.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#tcp_nodelay
     */
     tcp_nodelay ?: "on" | "off"


     /**
     * Enables or disables the use of
     * the TCP_NOPUSH socket option on FreeBSD
     * or the TCP_CORK socket option on Linux.
     * The options are enabled only when sendfile is used.
     * Enabling the option allows
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#tcp_nopush
     */
     tcp_nopush ?: "on" | "off"


     /**
     * Checks the existence of files in the specified order and uses
     * the first found file for request processing; the processing
     * is performed in the current context.
     * The path to a file is constructed from the
     * file parameter
     * according to the
     * root and alias directives.
     * It is possible to check directory’s existence by specifying
     * a slash at the end of a name, e.g. “$uri/”.
     * If none of the files were found, an internal redirect to the
     * uri specified in the last parameter is made.
     * For example:
     *
     * @context server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#try_files
     * @example
     * ```
     * location /images/ {
     *     try_files $uri /images/default.gif;
     * }
     * 
     * location = /images/default.gif {
     *     expires 30s;
     * }
     * location / {
     *     try_files $uri $uri/index.html $uri.html =404;
     * }
     * location / {
     *     try_files /system/maintenance.html
     *               $uri $uri/index.html $uri.html
     *               @mongrel;
     * }
     * 
     * location @mongrel {
     *     proxy_pass http://mongrel;
     * }
     * location / {
     *     try_files $uri $uri/ @drupal;
     * }
     * 
     * location ~ \.php$ {
     *     try_files $uri @drupal;
     * 
     *     fastcgi_pass ...;
     * 
     *     fastcgi_param SCRIPT_FILENAME /path/to$fastcgi_script_name;
     *     fastcgi_param SCRIPT_NAME     $fastcgi_script_name;
     *     fastcgi_param QUERY_STRING    $args;
     * 
     *     ... other fastcgi_param's
     * }
     * 
     * location @drupal {
     *     fastcgi_pass ...;
     * 
     *     fastcgi_param SCRIPT_FILENAME /path/to/index.php;
     *     fastcgi_param SCRIPT_NAME     /index.php;
     *     fastcgi_param QUERY_STRING    q=$uri&$args;
     * 
     *     ... other fastcgi_param's
     * }
     * location / {
     *     try_files $uri $uri/ @drupal;
     * }
     * location / {
     *     error_page 404 = @drupal;
     *     log_not_found off;
     * }
     * location ~ \.php$ {
     *     try_files $uri @drupal;
     * 
     *     fastcgi_pass ...;
     * 
     *     fastcgi_param SCRIPT_FILENAME /path/to$fastcgi_script_name;
     * 
     *     ...
     * }
     * location / {
     *     try_files $uri $uri/ @wordpress;
     * }
     * 
     * location ~ \.php$ {
     *     try_files $uri @wordpress;
     * 
     *     fastcgi_pass ...;
     * 
     *     fastcgi_param SCRIPT_FILENAME /path/to$fastcgi_script_name;
     *     ... other fastcgi_param's
     * }
     * 
     * location @wordpress {
     *     fastcgi_pass ...;
     * 
     *     fastcgi_param SCRIPT_FILENAME /path/to/index.php;
     *     ... other fastcgi_param's
     * }
     * ```
     */
     try_files ?: any


     /**
     * Maps file name extensions to MIME types of responses.
     * Extensions are case-insensitive.
     * Several extensions can be mapped to one type, for example:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#types
     * @example
     * ```
     * types {
     *     application/octet-stream bin exe dll;
     *     application/octet-stream deb;
     *     application/octet-stream dmg;
     * }
     * location /download/ {
     *     types        { }
     *     default_type application/octet-stream;
     * }
     * ```
     */
     types ?: any


     /**
     * Sets the bucket size for the types hash tables.
     * The details of setting up hash tables are provided in a separate
     * document.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#types_hash_bucket_size
     */
     types_hash_bucket_size ?: string


     /**
     * Sets the maximum size of the types hash tables.
     * The details of setting up hash tables are provided in a separate
     * document.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#types_hash_max_size
     */
     types_hash_max_size ?: string


     /**
     * Allows access for the specified network or address.
     * If the special value unix: is specified (1.5.1),
     * allows access for all UNIX-domain sockets.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_access_module.html#allow
     */
     allow ?: "address" | "CIDR" | "unix:" | "all" | string[]


     /**
     * Denies access for the specified network or address.
     * If the special value unix: is specified (1.5.1),
     * denies access for all UNIX-domain sockets.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_access_module.html#deny
     */
     deny ?: "address" | "CIDR" | "unix:" | "all" | string[]


     /**
     * Adds the text returned as a result of processing a given subrequest
     * before the response body.
     * An empty string ("") as a parameter cancels addition
     * inherited from the previous configuration level.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_addition_module.html#add_before_body
     */
     add_before_body ?: any


     /**
     * Adds the text returned as a result of processing a given subrequest
     * after the response body.
     * An empty string ("") as a parameter cancels addition
     * inherited from the previous configuration level.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_addition_module.html#add_after_body
     */
     add_after_body ?: any


     /**
     * Allows adding text in responses with the specified MIME types,
     * in addition to “text/html”.
     * The special value “*” matches any MIME type (0.8.29).
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_addition_module.html#addition_types
     */
     addition_types ?: any


     /**
     * Turns on the REST API interface in the surrounding location.
     * Access to this location should be
     * limited.
     *
     * @context location
     * @see https://nginx.org/en/docs/http/ngx_http_api_module.html#api
     * @example
     * ```
     * http://127.0.0.1/api/7/nginx?fields=version,build
     * ```
     */
     api ?: "[write=on" | "off]"


     /**
     * Enables collection of virtual
     * http
     * or
     * stream
     * server status information in the specified zone.
     * Several servers may share the same zone.
     *
     * @context server, location
     * @see https://nginx.org/en/docs/http/ngx_http_api_module.html#status_zone
     */
     status_zone ?: any


     /**
     * Enables validation of user name and password using the
     * “HTTP Basic Authentication” protocol.
     * The specified parameter is used as a realm.
     * Parameter value can contain variables (1.3.10, 1.2.7).
     * The special value off cancels the effect
     * of the auth_basic directive
     * inherited from the previous configuration level.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_auth_basic_module.html#auth_basic
     */
     auth_basic ?: string | "off"


     /**
     * Specifies a file that keeps user names and passwords,
     * in the following format:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_auth_basic_module.html#auth_basic_user_file
     * @example
     * ```
     * # comment
     * name1:password1
     * name2:password2:comment
     * name3:password3
     * ```
     */
     auth_basic_user_file ?: any


     /**
     * Enables validation of JSON Web Token.
     * The specified string is used as a realm.
     * Parameter value can contain variables.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_auth_jwt_module.html#auth_jwt
     * @example
     * ```
     * auth_jwt "closed site" token=$cookie_auth_token;
     * ```
     */
     auth_jwt ?: "string    [token=$variable]" | "off"


     /**
     * Specifies a file in
     * JSON Web Key Set
     * format for validating JWT signature.
     * Parameter value can contain variables.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_auth_jwt_module.html#auth_jwt_key_file
     * @example
     * ```
     * auth_jwt_key_file conf/keys.json;
     * auth_jwt_key_file conf/key.jwk;
     * ```
     */
     auth_jwt_key_file ?: any


     /**
     * Allows retrieving a
     * JSON Web Key Set
     * file from a subrequest for validating JWT signature and
     * sets the URI where the subrequest will be sent to.
     * Parameter value can contain variables.
     * To avoid validation overhead,
     * it is recommended to cache the key file:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_auth_jwt_module.html#auth_jwt_key_request
     * @example
     * ```
     * proxy_cache_path /data/nginx/cache levels=1 keys_zone=foo:10m;
     * 
     * server {
     *     ...
     * 
     *     location / {
     *         auth_jwt             "closed site";
     *         auth_jwt_key_request /jwks_uri;
     *     }
     * 
     *     location = /jwks_uri {
     *         internal;
     *         proxy_cache foo;
     *         proxy_pass  http://idp.example.com/keys;
     *     }
     * }
     * auth_jwt_key_request /jwks_uri;
     * auth_jwt_key_request /jwks2_uri;
     * ```
     */
     auth_jwt_key_request ?: any


     /**
     * Sets the maximum allowable leeway to compensate
     * clock skew when verifying the
     * exp
     * and
     * nbf
     * JWT claims.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_auth_jwt_module.html#auth_jwt_leeway
     */
     auth_jwt_leeway ?: string


     /**
     * Specifies which type of JSON Web Token to expect:
     * JWS (signed),
     * JWE (encrypted),
     * or signed and then encrypted
     * Nested JWT (nested) (1.21.0).
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_auth_jwt_module.html#auth_jwt_type
     */
     auth_jwt_type ?: "signed" | "encrypted" | "nested"


     /**
     * Defines additional conditions for JWT validation.
     * The value can contain text, variables, and their combination.
     * The authentication will succeed only
     * if all the values are not empty and are not equal to “0”.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_auth_jwt_module.html#auth_jwt_require
     * @example
     * ```
     * map $jwt_claim_iss $valid_jwt_iss {
     *     "good" 1;
     * }
     * ...
     * 
     * auth_jwt_require $valid_jwt_iss;
     * ```
     */
     auth_jwt_require ?: any


     /**
     * Enables authorization based on the result of a subrequest and sets
     * the URI to which the subrequest will be sent.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_auth_request_module.html#auth_request
     */
     auth_request ?: "uri" | "off"


     /**
     * Sets the request variable to the given
     * value after the authorization request completes.
     * The value may contain variables from the authorization request,
     * such as $upstream_http_*.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_auth_request_module.html#auth_request_set
     */
     auth_request_set ?: any


     /**
     * Enables or disables the directory listing output.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_autoindex_module.html#autoindex
     */
     autoindex ?: "on" | "off"


     /**
     * For the HTML format,
     * specifies whether exact file sizes should be output in the directory listing,
     * or rather rounded to kilobytes, megabytes, and gigabytes.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_autoindex_module.html#autoindex_exact_size
     */
     autoindex_exact_size ?: "on" | "off"


     /**
     * Sets the format of a directory listing.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_autoindex_module.html#autoindex_format
     */
     autoindex_format ?: "html" | "xml" | "json" | "jsonp"


     /**
     * For the HTML format,
     * specifies whether times in the directory listing should be
     * output in the local time zone or UTC.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_autoindex_module.html#autoindex_localtime
     */
     autoindex_localtime ?: "on" | "off"


     /**
     * If any of the specified substrings is found in the “User-Agent”
     * request header field, the browser will be considered ancient.
     * The special string “netscape4” corresponds to the
     * regular expression “^Mozilla/[1-4]”.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_browser_module.html#ancient_browser
     */
     ancient_browser ?: any


     /**
     * Sets a value for the $ancient_browser variables.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_browser_module.html#ancient_browser_value
     */
     ancient_browser_value ?: any


     /**
     * Specifies a version starting from which a browser is considered modern.
     * A browser can be any one of the following: msie,
     * gecko (browsers based on Mozilla),
     * opera, safari,
     * or konqueror.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_browser_module.html#modern_browser
     */
     modern_browser ?: any


     /**
     * Sets a value for the $modern_browser variables.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_browser_module.html#modern_browser_value
     */
     modern_browser_value ?: any


     /**
     * Adds the specified charset to the “Content-Type”
     * response header field.
     * If this charset is different from the charset specified
     * in the source_charset directive, a conversion is performed.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_charset_module.html#charset
     * @example
     * ```
     * charset $charset;
     * charset_map iso-8859-5 _ { }
     * ```
     */
     charset ?: string | "off"


     /**
     * Enables module processing in responses with the specified MIME types
     * in addition to “text/html”.
     * The special value “*” matches any MIME type (0.8.29).
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_charset_module.html#charset_types
     */
     charset_types ?: any


     /**
     * Determines whether a conversion should be performed for answers
     * received from a proxied or a FastCGI/uwsgi/SCGI/gRPC server
     * when the answers already carry a charset in the “Content-Type”
     * response header field.
     * If conversion is enabled, a charset specified in the received
     * response is used as a source charset.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_charset_module.html#override_charset
     */
     override_charset ?: "on" | "off"


     /**
     * Defines the source charset of a response.
     * If this charset is different from the charset specified
     * in the charset directive, a conversion is performed.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_charset_module.html#source_charset
     */
     source_charset ?: any


     /**
     * The WebDAV specification only allows creating files in already
     * existing directories.
     * This directive allows creating all needed intermediate directories.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_dav_module.html#create_full_put_path
     */
     create_full_put_path ?: "on" | "off"


     /**
     * Sets access permissions for newly created files and directories, e.g.:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_dav_module.html#dav_access
     * @example
     * ```
     * dav_access user:rw group:rw all:r;
     * dav_access group:rw all:r;
     * ```
     */
     dav_access ?: any


     /**
     * Allows the specified HTTP and WebDAV methods.
     * The parameter off denies all methods processed
     * by this module.
     * The following methods are supported:
     * PUT, DELETE, MKCOL,
     * COPY, and MOVE.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_dav_module.html#dav_methods
     */
     dav_methods ?: "off" | string


     /**
     * Allows the DELETE method to remove files provided that
     * the number of elements in a request path is not less than the specified
     * number.
     * For example, the directive
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_dav_module.html#min_delete_depth
     * @example
     * ```
     * min_delete_depth 4;
     * /users/00/00/name
     * /users/00/00/name/pic.jpg
     * /users/00/00/page.html
     * /users/00/00
     * ```
     */
     min_delete_depth ?: any


     /**
     * Turns on module processing in a surrounding location.
     *
     * @context location
     * @see https://nginx.org/en/docs/http/ngx_http_empty_gif_module.html#empty_gif
     */
     empty_gif ?: any


     /**
     * Turns on module processing in the surrounding location.
     *
     * @context location
     * @see https://nginx.org/en/docs/http/ngx_http_f4f_module.html#f4f
     */
     f4f ?: any


     /**
     * Sets the size of the buffer used for
     * reading the .f4x index file.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_f4f_module.html#f4f_buffer_size
     */
     f4f_buffer_size ?: string


     /**
     * Makes outgoing connections to a FastCGI server originate
     * from the specified local IP address with an optional port (1.11.2).
     * Parameter value can contain variables (1.3.12).
     * The special value off (1.3.12) cancels the effect
     * of the fastcgi_bind directive
     * inherited from the previous configuration level, which allows the
     * system to auto-assign the local IP address and port.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_bind
     * @example
     * ```
     * fastcgi_bind $remote_addr transparent;
     * ```
     */
     fastcgi_bind ?: "address    [transparent]" | "off"


     /**
     * Sets the size of the buffer used for reading the first part
     * of the response received from the FastCGI server.
     * This part usually contains a small response header.
     * By default, the buffer size is equal to one memory page.
     * This is either 4K or 8K, depending on a platform.
     * It can be made smaller, however.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_buffer_size
     */
     fastcgi_buffer_size ?: string


     /**
     * Enables or disables buffering of responses from the FastCGI server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_buffering
     */
     fastcgi_buffering ?: "on" | "off"


     /**
     * Sets the number and size of the
     * buffers used for reading a response from the FastCGI server,
     * for a single connection.
     * By default, the buffer size is equal to one memory page.
     * This is either 4K or 8K, depending on a platform.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_buffers
     */
     fastcgi_buffers ?: any


     /**
     * When buffering of responses from the FastCGI
     * server is enabled, limits the total size of buffers that
     * can be busy sending a response to the client while the response is not
     * yet fully read.
     * In the meantime, the rest of the buffers can be used for reading the response
     * and, if needed, buffering part of the response to a temporary file.
     * By default, size is limited by the size of two buffers set by the
     * fastcgi_buffer_size and fastcgi_buffers directives.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_busy_buffers_size
     */
     fastcgi_busy_buffers_size ?: string


     /**
     * Defines a shared memory zone used for caching.
     * The same zone can be used in several places.
     * Parameter value can contain variables (1.7.9).
     * The off parameter disables caching inherited
     * from the previous configuration level.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_cache
     */
     fastcgi_cache ?: "zone" | "off"


     /**
     * Allows starting a background subrequest
     * to update an expired cache item,
     * while a stale cached response is returned to the client.
     * Note that it is necessary to
     * allow
     * the usage of a stale cached response when it is being updated.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_cache_background_update
     */
     fastcgi_cache_background_update ?: "on" | "off"


     /**
     * Defines conditions under which the response will not be taken from a cache.
     * If at least one value of the string parameters is not empty and is not
     * equal to “0” then the response will not be taken from the cache:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_cache_bypass
     * @example
     * ```
     * fastcgi_cache_bypass $cookie_nocache $arg_nocache$arg_comment;
     * fastcgi_cache_bypass $http_pragma    $http_authorization;
     * ```
     */
     fastcgi_cache_bypass ?: any


     /**
     * Defines a key for caching, for example
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_cache_key
     * @example
     * ```
     * fastcgi_cache_key localhost:9000$request_uri;
     * ```
     */
     fastcgi_cache_key ?: any


     /**
     * When enabled, only one request at a time will be allowed to populate
     * a new cache element identified according to the fastcgi_cache_key
     * directive by passing a request to a FastCGI server.
     * Other requests of the same cache element will either wait
     * for a response to appear in the cache or the cache lock for
     * this element to be released, up to the time set by the
     * fastcgi_cache_lock_timeout directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_cache_lock
     */
     fastcgi_cache_lock ?: "on" | "off"


     /**
     * If the last request passed to the FastCGI server
     * for populating a new cache element
     * has not completed for the specified time,
     * one more request may be passed to the FastCGI server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_cache_lock_age
     */
     fastcgi_cache_lock_age ?: string


     /**
     * Sets a timeout for fastcgi_cache_lock.
     * When the time expires,
     * the request will be passed to the FastCGI server,
     * however, the response will not be cached.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_cache_lock_timeout
     */
     fastcgi_cache_lock_timeout ?: string


     /**
     * Sets an offset in bytes for byte-range requests.
     * If the range is beyond the offset,
     * the range request will be passed to the FastCGI server
     * and the response will not be cached.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_cache_max_range_offset
     */
     fastcgi_cache_max_range_offset ?: any


     /**
     * If the client request method is listed in this directive then
     * the response will be cached.
     * “GET” and “HEAD” methods are always
     * added to the list, though it is recommended to specify them explicitly.
     * See also the fastcgi_no_cache directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_cache_methods
     */
     fastcgi_cache_methods ?: "GET" | "HEAD" | string


     /**
     * Sets the number of requests after which the response
     * will be cached.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_cache_min_uses
     */
     fastcgi_cache_min_uses ?: any


     /**
     * Defines conditions under which the request will be considered a cache
     * purge request.
     * If at least one value of the string parameters is not empty and is not equal
     * to “0” then the cache entry with a corresponding
     * cache key is removed.
     * The result of successful operation is indicated by returning
     * the 204 (No Content) response.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_cache_purge
     * @example
     * ```
     * fastcgi_cache_path /data/nginx/cache keys_zone=cache_zone:10m;
     * 
     * map $request_method $purge_method {
     *     PURGE   1;
     *     default 0;
     * }
     * 
     * server {
     *     ...
     *     location / {
     *         fastcgi_pass        backend;
     *         fastcgi_cache       cache_zone;
     *         fastcgi_cache_key   $uri;
     *         fastcgi_cache_purge $purge_method;
     *     }
     * }
     * ```
     */
     fastcgi_cache_purge ?: any


     /**
     * Enables revalidation of expired cache items using conditional requests with
     * the “If-Modified-Since” and “If-None-Match”
     * header fields.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_cache_revalidate
     */
     fastcgi_cache_revalidate ?: "on" | "off"


     /**
     * Determines in which cases a stale cached response can be used
     * when an error occurs during communication with the FastCGI server.
     * The directive’s parameters match the parameters of the
     * fastcgi_next_upstream directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_cache_use_stale
     */
     fastcgi_cache_use_stale ?: "error" | "timeout" | "invalid_header" | "updating" | "http_500" | "http_503" | "http_403" | "http_404" | "http_429" | string


     /**
     * Sets caching time for different response codes.
     * For example, the following directives
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_cache_valid
     * @example
     * ```
     * fastcgi_cache_valid 200 302 10m;
     * fastcgi_cache_valid 404      1m;
     * fastcgi_cache_valid 5m;
     * fastcgi_cache_valid 200 302 10m;
     * fastcgi_cache_valid 301      1h;
     * fastcgi_cache_valid any      1m;
     * ```
     */
     fastcgi_cache_valid ?: any


     /**
     * Sets a string to search for in the error stream of a response
     * received from a FastCGI server.
     * If the string is found then it is considered that the FastCGI
     * server has returned an invalid response.
     * This allows handling application errors in nginx, for example:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_catch_stderr
     * @example
     * ```
     * location /php/ {
     *     fastcgi_pass backend:9000;
     *     ...
     *     fastcgi_catch_stderr "PHP Fatal error";
     *     fastcgi_next_upstream error timeout invalid_header;
     * }
     * ```
     */
     fastcgi_catch_stderr ?: any


     /**
     * Defines a timeout for establishing a connection with a FastCGI server.
     * It should be noted that this timeout cannot usually exceed 75 seconds.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_connect_timeout
     */
     fastcgi_connect_timeout ?: string


     /**
     * Enables byte-range support
     * for both cached and uncached responses from the FastCGI server
     * regardless of the “Accept-Ranges” field in these responses.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_force_ranges
     */
     fastcgi_force_ranges ?: "on" | "off"


     /**
     * By default,
     * nginx does not pass the header fields “Status” and
     * “X-Accel-...” from the response of a FastCGI
     * server to a client.
     * The fastcgi_hide_header directive sets additional fields
     * that will not be passed.
     * If, on the contrary, the passing of fields needs to be permitted,
     * the fastcgi_pass_header directive can be used.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_hide_header
     */
     fastcgi_hide_header ?: any


     /**
     * Determines whether the connection with a FastCGI server should be
     * closed when a client closes the connection without waiting
     * for a response.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_ignore_client_abort
     */
     fastcgi_ignore_client_abort ?: "on" | "off"


     /**
     * Disables processing of certain response header fields from the FastCGI server.
     * The following fields can be ignored: “X-Accel-Redirect”,
     * “X-Accel-Expires”, “X-Accel-Limit-Rate” (1.1.6),
     * “X-Accel-Buffering” (1.1.6),
     * “X-Accel-Charset” (1.1.6), “Expires”,
     * “Cache-Control”, “Set-Cookie” (0.8.44),
     * and “Vary” (1.7.7).
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_ignore_headers
     */
     fastcgi_ignore_headers ?: any


     /**
     * Sets a file name that will be appended after a URI that ends with
     * a slash, in the value of the $fastcgi_script_name variable.
     * For example, with these settings
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_index
     * @example
     * ```
     * fastcgi_index index.php;
     * fastcgi_param SCRIPT_FILENAME /home/www/scripts/php$fastcgi_script_name;
     * ```
     */
     fastcgi_index ?: any


     /**
     * Determines whether FastCGI server responses with codes greater than or equal
     * to 300 should be passed to a client
     * or be intercepted and redirected to nginx for processing
     * with the error_page directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_intercept_errors
     */
     fastcgi_intercept_errors ?: "on" | "off"


     /**
     * By default, a FastCGI server will close a connection right after
     * sending the response.
     * However, when this directive is set to the value on,
     * nginx will instruct a FastCGI server to keep connections open.
     * This is necessary, in particular, for
     * keepalive
     * connections to FastCGI servers to function.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_keep_conn
     */
     fastcgi_keep_conn ?: "on" | "off"


     /**
     * Limits the speed of reading the response from the FastCGI server.
     * The rate is specified in bytes per second.
     * The zero value disables rate limiting.
     * The limit is set per a request, and so if nginx simultaneously opens
     * two connections to the FastCFI server,
     * the overall rate will be twice as much as the specified limit.
     * The limitation works only if
     * buffering of responses from the FastCGI
     * server is enabled.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_limit_rate
     */
     fastcgi_limit_rate ?: any


     /**
     * When buffering of responses from the FastCGI
     * server is enabled, and the whole response does not fit into the buffers
     * set by the fastcgi_buffer_size and fastcgi_buffers
     * directives, a part of the response can be saved to a temporary file.
     * This directive sets the maximum size of the temporary file.
     * The size of data written to the temporary file at a time is set
     * by the fastcgi_temp_file_write_size directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_max_temp_file_size
     */
     fastcgi_max_temp_file_size ?: string


     /**
     * Specifies in which cases a request should be passed to the next server:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_next_upstream
     */
     fastcgi_next_upstream ?: "error" | "timeout" | "invalid_header" | "http_500" | "http_503" | "http_403" | "http_404" | "http_429" | "non_idempotent" | string


     /**
     * Limits the time during which a request can be passed to the
     * next server.
     * The 0 value turns off this limitation.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_next_upstream_timeout
     */
     fastcgi_next_upstream_timeout ?: string


     /**
     * Limits the number of possible tries for passing a request to the
     * next server.
     * The 0 value turns off this limitation.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_next_upstream_tries
     */
     fastcgi_next_upstream_tries ?: any


     /**
     * Defines conditions under which the response will not be saved to a cache.
     * If at least one value of the string parameters is not empty and is not
     * equal to “0” then the response will not be saved:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_no_cache
     * @example
     * ```
     * fastcgi_no_cache $cookie_nocache $arg_nocache$arg_comment;
     * fastcgi_no_cache $http_pragma    $http_authorization;
     * ```
     */
     fastcgi_no_cache ?: any


     /**
     * Sets a parameter that should be passed to the FastCGI server.
     * The value can contain text, variables, and their combination.
     * These directives are inherited from the previous configuration level
     * if and only if there are no fastcgi_param directives
     * defined on the current level.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_param
     * @example
     * ```
     * fastcgi_param SCRIPT_FILENAME /home/www/scripts/php$fastcgi_script_name;
     * fastcgi_param QUERY_STRING    $query_string;
     * fastcgi_param REQUEST_METHOD  $request_method;
     * fastcgi_param CONTENT_TYPE    $content_type;
     * fastcgi_param CONTENT_LENGTH  $content_length;
     * fastcgi_param REDIRECT_STATUS 200;
     * fastcgi_param HTTPS           $https if_not_empty;
     * ```
     */
     fastcgi_param ?: any


     /**
     * Sets the address of a FastCGI server.
     * The address can be specified as a domain name or IP address,
     * and a port:
     *
     * @context location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_pass
     * @example
     * ```
     * fastcgi_pass localhost:9000;
     * fastcgi_pass unix:/tmp/fastcgi.socket;
     * ```
     */
     fastcgi_pass ?: any


     /**
     * Permits passing otherwise disabled header
     * fields from a FastCGI server to a client.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_pass_header
     */
     fastcgi_pass_header ?: any


     /**
     * Indicates whether the original request body is passed
     * to the FastCGI server.
     * See also the fastcgi_pass_request_headers directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_pass_request_body
     */
     fastcgi_pass_request_body ?: "on" | "off"


     /**
     * Indicates whether the header fields of the original request are passed
     * to the FastCGI server.
     * See also the fastcgi_pass_request_body directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_pass_request_headers
     */
     fastcgi_pass_request_headers ?: "on" | "off"


     /**
     * Defines a timeout for reading a response from the FastCGI server.
     * The timeout is set only between two successive read operations,
     * not for the transmission of the whole response.
     * If the FastCGI server does not transmit anything within this time,
     * the connection is closed.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_read_timeout
     */
     fastcgi_read_timeout ?: string


     /**
     * Enables or disables buffering of a client request body.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_request_buffering
     */
     fastcgi_request_buffering ?: "on" | "off"


     /**
     * If the directive is set to a non-zero value, nginx will try to
     * minimize the number
     * of send operations on outgoing connections to a FastCGI server by using either
     * NOTE_LOWAT flag of the
     * kqueue method,
     * or the SO_SNDLOWAT socket option,
     * with the specified size.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_send_lowat
     */
     fastcgi_send_lowat ?: string


     /**
     * Sets a timeout for transmitting a request to the FastCGI server.
     * The timeout is set only between two successive write operations,
     * not for the transmission of the whole request.
     * If the FastCGI server does not receive anything within this time,
     * the connection is closed.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_send_timeout
     */
     fastcgi_send_timeout ?: string


     /**
     * Configures the “TCP keepalive” behavior
     * for outgoing connections to a FastCGI server.
     * By default, the operating system’s settings are in effect for the socket.
     * If the directive is set to the value “on”, the
     * SO_KEEPALIVE socket option is turned on for the socket.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_socket_keepalive
     */
     fastcgi_socket_keepalive ?: "on" | "off"


     /**
     * Defines a regular expression that captures a value for the
     * $fastcgi_path_info variable.
     * The regular expression should have two captures: the first becomes
     * a value of the $fastcgi_script_name variable, the second
     * becomes a value of the $fastcgi_path_info variable.
     * For example, with these settings
     *
     * @context location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_split_path_info
     * @example
     * ```
     * location ~ ^(.+\.php)(.*)$ {
     *     fastcgi_split_path_info       ^(.+\.php)(.*)$;
     *     fastcgi_param SCRIPT_FILENAME /path/to/php$fastcgi_script_name;
     *     fastcgi_param PATH_INFO       $fastcgi_path_info;
     * ```
     */
     fastcgi_split_path_info ?: any


     /**
     * Enables saving of files to a disk.
     * The on parameter saves files with paths
     * corresponding to the directives
     * alias or
     * root.
     * The off parameter disables saving of files.
     * In addition, the file name can be set explicitly using the
     * string with variables:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_store
     * @example
     * ```
     * fastcgi_store /data/www$original_uri;
     * location /images/ {
     *     root                 /data/www;
     *     error_page           404 = /fetch$uri;
     * }
     * 
     * location /fetch/ {
     *     internal;
     * 
     *     fastcgi_pass         backend:9000;
     *     ...
     * 
     *     fastcgi_store        on;
     *     fastcgi_store_access user:rw group:rw all:r;
     *     fastcgi_temp_path    /data/temp;
     * 
     *     alias                /data/www/;
     * }
     * ```
     */
     fastcgi_store ?: "on" | "off" | string


     /**
     * Sets access permissions for newly created files and directories, e.g.:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_store_access
     * @example
     * ```
     * fastcgi_store_access user:rw group:rw all:r;
     * fastcgi_store_access group:rw all:r;
     * ```
     */
     fastcgi_store_access ?: any


     /**
     * Limits the size of data written to a temporary file
     * at a time, when buffering of responses from the FastCGI server
     * to temporary files is enabled.
     * By default, size is limited by two buffers set by the
     * fastcgi_buffer_size and fastcgi_buffers directives.
     * The maximum size of a temporary file is set by the
     * fastcgi_max_temp_file_size directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_temp_file_write_size
     */
     fastcgi_temp_file_write_size ?: string


     /**
     * Defines a directory for storing temporary files
     * with data received from FastCGI servers.
     * Up to three-level subdirectory hierarchy can be used underneath the specified
     * directory.
     * For example, in the following configuration
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_temp_path
     * @example
     * ```
     * fastcgi_temp_path /spool/nginx/fastcgi_temp 1 2;
     * /spool/nginx/fastcgi_temp/7/45/00000123457
     * ```
     */
     fastcgi_temp_path ?: any


     /**
     * Turns on module processing in a surrounding location.
     *
     * @context location
     * @see https://nginx.org/en/docs/http/ngx_http_flv_module.html#flv
     */
     flv ?: any


     /**
     * Makes outgoing connections to a gRPC server originate
     * from the specified local IP address with an optional port.
     * Parameter value can contain variables.
     * The special value off cancels the effect
     * of the grpc_bind directive
     * inherited from the previous configuration level, which allows the
     * system to auto-assign the local IP address and port.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_bind
     * @example
     * ```
     * grpc_bind $remote_addr transparent;
     * ```
     */
     grpc_bind ?: "address    [transparent ]" | "off"


     /**
     * Sets the size of the buffer used for reading the response
     * received from the gRPC server.
     * The response is passed to the client synchronously, as soon as it is received.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_buffer_size
     */
     grpc_buffer_size ?: string


     /**
     * Defines a timeout for establishing a connection with a gRPC server.
     * It should be noted that this timeout cannot usually exceed 75 seconds.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_connect_timeout
     */
     grpc_connect_timeout ?: string


     /**
     * By default,
     * nginx does not pass the header fields “Date”,
     * “Server”, and
     * “X-Accel-...” from the response of a gRPC
     * server to a client.
     * The grpc_hide_header directive sets additional fields
     * that will not be passed.
     * If, on the contrary, the passing of fields needs to be permitted,
     * the grpc_pass_header directive can be used.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_hide_header
     */
     grpc_hide_header ?: any


     /**
     * Disables processing of certain response header fields from the gRPC server.
     * The following fields can be ignored: “X-Accel-Redirect”
     * and “X-Accel-Charset”.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_ignore_headers
     */
     grpc_ignore_headers ?: any


     /**
     * Determines whether gRPC server responses with codes greater than or equal
     * to 300 should be passed to a client
     * or be intercepted and redirected to nginx for processing
     * with the error_page directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_intercept_errors
     */
     grpc_intercept_errors ?: "on" | "off"


     /**
     * Specifies in which cases a request should be passed to the next server:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_next_upstream
     */
     grpc_next_upstream ?: "error" | "timeout" | "invalid_header" | "http_500" | "http_502" | "http_503" | "http_504" | "http_403" | "http_404" | "http_429" | "non_idempotent" | string


     /**
     * Limits the time during which a request can be passed to the
     * next server.
     * The 0 value turns off this limitation.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_next_upstream_timeout
     */
     grpc_next_upstream_timeout ?: string


     /**
     * Limits the number of possible tries for passing a request to the
     * next server.
     * The 0 value turns off this limitation.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_next_upstream_tries
     */
     grpc_next_upstream_tries ?: any


     /**
     * Sets the gRPC server address.
     * The address can be specified as a domain name or IP address,
     * and a port:
     *
     * @context location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_pass
     * @example
     * ```
     * grpc_pass localhost:9000;
     * grpc_pass unix:/tmp/grpc.socket;
     * grpc_pass grpc://127.0.0.1:9000;
     * grpc_pass grpcs://127.0.0.1:443;
     * ```
     */
     grpc_pass ?: any


     /**
     * Permits passing otherwise disabled header
     * fields from a gRPC server to a client.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_pass_header
     */
     grpc_pass_header ?: any


     /**
     * Defines a timeout for reading a response from the gRPC server.
     * The timeout is set only between two successive read operations,
     * not for the transmission of the whole response.
     * If the gRPC server does not transmit anything within this time,
     * the connection is closed.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_read_timeout
     */
     grpc_read_timeout ?: string


     /**
     * Sets a timeout for transmitting a request to the gRPC server.
     * The timeout is set only between two successive write operations,
     * not for the transmission of the whole request.
     * If the gRPC server does not receive anything within this time,
     * the connection is closed.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_send_timeout
     */
     grpc_send_timeout ?: string


     /**
     * Allows redefining or appending fields to the request header
     * passed to the gRPC server.
     * The value can contain text, variables, and their combinations.
     * These directives are inherited from the previous configuration level
     * if and only if there are no grpc_set_header directives
     * defined on the current level.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_set_header
     * @example
     * ```
     * grpc_set_header Accept-Encoding "";
     * ```
     */
     grpc_set_header ?: any


     /**
     * Configures the “TCP keepalive” behavior
     * for outgoing connections to a gRPC server.
     * By default, the operating system’s settings are in effect for the socket.
     * If the directive is set to the value “on”, the
     * SO_KEEPALIVE socket option is turned on for the socket.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_socket_keepalive
     */
     grpc_socket_keepalive ?: "on" | "off"


     /**
     * Specifies a file with the certificate in the PEM format
     * used for authentication to a gRPC SSL server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_ssl_certificate
     */
     grpc_ssl_certificate ?: any


     /**
     * Specifies a file with the secret key in the PEM format
     * used for authentication to a gRPC SSL server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_ssl_certificate_key
     */
     grpc_ssl_certificate_key ?: any


     /**
     * Specifies the enabled ciphers for requests to a gRPC SSL server.
     * The ciphers are specified in the format understood by the OpenSSL library.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_ssl_ciphers
     */
     grpc_ssl_ciphers ?: any


     /**
     * Sets arbitrary OpenSSL configuration
     * commands
     * when establishing a connection with the gRPC SSL server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_ssl_conf_command
     */
     grpc_ssl_conf_command ?: any


     /**
     * Specifies a file with revoked certificates (CRL)
     * in the PEM format used to verify
     * the certificate of the gRPC SSL server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_ssl_crl
     */
     grpc_ssl_crl ?: any


     /**
     * Allows overriding the server name used to
     * verify
     * the certificate of the gRPC SSL server and to be
     * passed through SNI
     * when establishing a connection with the gRPC SSL server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_ssl_name
     */
     grpc_ssl_name ?: any


     /**
     * Specifies a file with passphrases for
     * secret keys
     * where each passphrase is specified on a separate line.
     * Passphrases are tried in turn when loading the key.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_ssl_password_file
     */
     grpc_ssl_password_file ?: any


     /**
     * Enables the specified protocols for requests to a gRPC SSL server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_ssl_protocols
     */
     grpc_ssl_protocols ?: any


     /**
     * Enables or disables passing of the server name through
     * TLS
     * Server Name Indication extension (SNI, RFC 6066)
     * when establishing a connection with the gRPC SSL server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_ssl_server_name
     */
     grpc_ssl_server_name ?: "on" | "off"


     /**
     * Determines whether SSL sessions can be reused when working with
     * the gRPC server.
     * If the errors
     * “SSL3_GET_FINISHED:digest check failed”
     * appear in the logs, try disabling session reuse.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_ssl_session_reuse
     */
     grpc_ssl_session_reuse ?: "on" | "off"


     /**
     * Specifies a file with trusted CA certificates in the PEM format
     * used to verify
     * the certificate of the gRPC SSL server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_ssl_trusted_certificate
     */
     grpc_ssl_trusted_certificate ?: any


     /**
     * Enables or disables verification of the gRPC SSL server certificate.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_ssl_verify
     */
     grpc_ssl_verify ?: "on" | "off"


     /**
     * Sets the verification depth in the gRPC SSL server certificates chain.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_ssl_verify_depth
     */
     grpc_ssl_verify_depth ?: any


     /**
     * Enables or disables decompression of gzipped responses
     * for clients that lack gzip support.
     * If enabled, the following directives are also taken into account
     * when determining if clients support gzip:
     * gzip_http_version,
     * gzip_proxied, and
     * gzip_disable.
     * See also the gzip_vary directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_gunzip_module.html#gunzip
     */
     gunzip ?: "on" | "off"


     /**
     * Sets the number and size of buffers
     * used to decompress a response.
     * By default, the buffer size is equal to one memory page.
     * This is either 4K or 8K, depending on a platform.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_gunzip_module.html#gunzip_buffers
     */
     gunzip_buffers ?: any


     /**
     * Enables or disables gzipping of responses.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_gzip_module.html#gzip
     */
     gzip ?: "on" | "off"


     /**
     * Sets the number and size of buffers
     * used to compress a response.
     * By default, the buffer size is equal to one memory page.
     * This is either 4K or 8K, depending on a platform.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_gzip_module.html#gzip_buffers
     */
     gzip_buffers ?: any


     /**
     * Sets a gzip compression level of a response.
     * Acceptable values are in the range from 1 to 9.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_gzip_module.html#gzip_comp_level
     */
     gzip_comp_level ?: any


     /**
     * Disables gzipping of responses for requests with
     * “User-Agent” header fields matching
     * any of the specified regular expressions.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_gzip_module.html#gzip_disable
     */
     gzip_disable ?: any


     /**
     * Sets the minimum HTTP version of a request required to compress a response.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_gzip_module.html#gzip_http_version
     */
     gzip_http_version ?: "1.0" | "1.1"


     /**
     * Sets the minimum length of a response that will be gzipped.
     * The length is determined only from the “Content-Length”
     * response header field.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_gzip_module.html#gzip_min_length
     */
     gzip_min_length ?: any


     /**
     * Enables or disables gzipping of responses for proxied
     * requests depending on the request and response.
     * The fact that the request is proxied is determined by
     * the presence of the “Via” request header field.
     * The directive accepts multiple parameters:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_gzip_module.html#gzip_proxied
     */
     gzip_proxied ?: "off" | "expired" | "no-cache" | "no-store" | "private" | "no_last_modified" | "no_etag" | "auth" | string


     /**
     * Enables gzipping of responses for the specified MIME types in addition
     * to “text/html”.
     * The special value “*” matches any MIME type (0.8.29).
     * Responses with the “text/html” type are always compressed.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_gzip_module.html#gzip_types
     */
     gzip_types ?: any


     /**
     * Enables or disables inserting the “Vary: Accept-Encoding”
     * response header field if the directives
     * gzip,
     * gzip_static, or
     * gunzip
     * are active.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_gzip_module.html#gzip_vary
     */
     gzip_vary ?: "on" | "off"


     /**
     * Enables (“on”) or disables (“off”)
     * checking the existence of precompressed files.
     * The following directives are also taken into account:
     * gzip_http_version,
     * gzip_proxied,
     * gzip_disable,
     * and gzip_vary.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_gzip_static_module.html#gzip_static
     */
     gzip_static ?: "on" | "off" | "always"


     /**
     * Adds the specified field to a response header provided that
     * the response code equals 200, 201 (1.3.10), 204, 206, 301, 302, 303, 304,
     * 307 (1.1.16, 1.0.13), or 308 (1.13.0).
     * Parameter value can contain variables.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_headers_module.html#add_header
     */
     add_header ?: any


     /**
     * Adds the specified field to the end of a response provided that
     * the response code equals 200, 201, 206, 301, 302, 303, 307, or 308.
     * Parameter value can contain variables.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_headers_module.html#add_trailer
     */
     add_trailer ?: any


     /**
     * Enables or disables adding or modifying the “Expires”
     * and “Cache-Control” response header fields provided that
     * the response code equals 200, 201 (1.3.10), 204, 206, 301, 302, 303, 304,
     * 307 (1.1.16, 1.0.13), or 308 (1.13.0).
     * The parameter can be a positive or negative
     * time.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_headers_module.html#expires
     * @example
     * ```
     * expires @15h30m;
     * map $sent_http_content_type $expires {
     *     default         off;
     *     application/pdf 42d;
     *     ~image/         max;
     * }
     * 
     * expires $expires;
     * ```
     */
     expires ?: "[modified] timeexpires     epoch" | "max" | "off"


     /**
     * Turns on HLS streaming in the surrounding location.
     *
     * @context location
     * @see https://nginx.org/en/docs/http/ngx_http_hls_module.html#hls
     */
     hls ?: any


     /**
     * Sets the maximum number and size of buffers
     * that are used for reading and writing data frames.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_hls_module.html#hls_buffers
     */
     hls_buffers ?: any


     /**
     * Adds arguments from a playlist request to URIs of fragments.
     * This may be useful for performing client authorization at the moment of
     * requesting a fragment, or when protecting an HLS stream with the
     * ngx_http_secure_link_module
     * module.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_hls_module.html#hls_forward_args
     * @example
     * ```
     * #EXTM3U
     * #EXT-X-VERSION:3
     * #EXT-X-TARGETDURATION:15
     * #EXT-X-PLAYLIST-TYPE:VOD
     * 
     * #EXTINF:9.333,
     * test.mp4.ts?start=0.000&end=9.333&a=1&b=2
     * #EXTINF:7.167,
     * test.mp4.ts?start=9.333&end=16.500&a=1&b=2
     * #EXTINF:5.416,
     * test.mp4.ts?start=16.500&end=21.916&a=1&b=2
     * #EXTINF:5.500,
     * test.mp4.ts?start=21.916&end=27.416&a=1&b=2
     * #EXTINF:15.167,
     * test.mp4.ts?start=27.416&end=42.583&a=1&b=2
     * #EXTINF:9.626,
     * test.mp4.ts?start=42.583&end=52.209&a=1&b=2
     * 
     * #EXT-X-ENDLIST
     * http {
     *     ...
     * 
     *     map $uri $hls_uri {
     *         ~^(?<base_uri>.*).m3u8$ $base_uri;
     *         ~^(?<base_uri>.*).ts$   $base_uri;
     *         default                 $uri;
     *     }
     * 
     *     server {
     *         ...
     * 
     *         location /hls/ {
     *             hls;
     *             hls_forward_args on;
     * 
     *             alias /var/videos/;
     * 
     *             secure_link $arg_md5,$arg_expires;
     *             secure_link_md5 "$secure_link_expires$hls_uri$remote_addr secret";
     * 
     *             if ($secure_link = "") {
     *                 return 403;
     *             }
     * 
     *             if ($secure_link = "0") {
     *                 return 410;
     *             }
     *         }
     *     }
     * }
     * ```
     */
     hls_forward_args ?: "on" | "off"


     /**
     * Defines the default fragment length for playlist URIs requested without the
     * “len” argument.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_hls_module.html#hls_fragment
     */
     hls_fragment ?: string


     /**
     * Sets the initial size of the buffer used for
     * processing MP4 and MOV files.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_hls_module.html#hls_mp4_buffer_size
     */
     hls_mp4_buffer_size ?: string


     /**
     * During metadata processing, a larger buffer may become necessary.
     * Its size cannot exceed the specified size,
     * or else nginx will return the server error
     * 500 (Internal Server Error),
     * and log the following message:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_hls_module.html#hls_mp4_max_buffer_size
     * @example
     * ```
     * "/some/movie/file.mp4" mp4 moov atom is too large:
     * 12583268, you may want to increase hls_mp4_max_buffer_size
     * ```
     */
     hls_mp4_max_buffer_size ?: string


     /**
     * Sets the type of transformation to perform on images:
     *
     * @context location
     * @see https://nginx.org/en/docs/http/ngx_http_image_filter_module.html#image_filter
     */
     image_filter ?: "offimage_filter testimage_filter sizeimage_filter     rotate    90" | "180" | "270image_filter     resize    width    heightimage_filter     crop    width    height"


     /**
     * Sets the maximum size of the buffer used for reading images.
     * When the size is exceeded the server returns error
     * 415 (Unsupported Media Type).
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_image_filter_module.html#image_filter_buffer
     */
     image_filter_buffer ?: string


     /**
     * If enabled, final images will be interlaced.
     * For JPEG, final images will be in “progressive JPEG” format.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_image_filter_module.html#image_filter_interlace
     */
     image_filter_interlace ?: "on" | "off"


     /**
     * Sets the desired quality of the transformed JPEG images.
     * Acceptable values are in the range from 1 to 100.
     * Lesser values usually imply both lower image quality and less data to transfer.
     * The maximum recommended value is 95.
     * Parameter value can contain variables.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_image_filter_module.html#image_filter_jpeg_quality
     */
     image_filter_jpeg_quality ?: any


     /**
     * Increases sharpness of the final image.
     * The sharpness percentage can exceed 100.
     * The zero value disables sharpening.
     * Parameter value can contain variables.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_image_filter_module.html#image_filter_sharpen
     */
     image_filter_sharpen ?: any


     /**
     * Defines whether transparency should be preserved when transforming
     * GIF images or PNG images with colors specified by a palette.
     * The loss of transparency results in images of a better quality.
     * The alpha channel transparency in PNG is always preserved.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_image_filter_module.html#image_filter_transparency
     */
     image_filter_transparency ?: "on" | "off"


     /**
     * Sets the desired quality of the transformed WebP images.
     * Acceptable values are in the range from 1 to 100.
     * Lesser values usually imply both lower image quality and less data to transfer.
     * Parameter value can contain variables.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_image_filter_module.html#image_filter_webp_quality
     */
     image_filter_webp_quality ?: any


     /**
     * Defines files that will be used as an index.
     * The file name can contain variables.
     * Files are checked in the specified order.
     * The last element of the list can be a file with an absolute path.
     * Example:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_index_module.html#index
     * @example
     * ```
     * index index.$geo.html index.0.html /index.html;
     * location = / {
     *     index index.html;
     * }
     * 
     * location / {
     *     ...
     * }
     * ```
     */
     index ?: any


     /**
     * Sets an njs function as a response body filter.
     * The filter function is called for each data chunk of a response body
     * with the following arguments:
     *
     * @context location
     * @see https://nginx.org/en/docs/http/ngx_http_js_module.html#js_body_filter
     * @example
     * ```
     * function filter(r, data, flags) {
     *     r.sendBuffer(data.toLowerCase(), flags);
     * }
     * ```
     */
     js_body_filter ?: "function" | "module.function[buffer_type=string" | "buffer]"


     /**
     * Sets an njs function as a location content handler.
     * Since 0.4.0,
     * a module function can be referenced.
     *
     * @context location
     * @see https://nginx.org/en/docs/http/ngx_http_js_module.html#js_content
     */
     js_content ?: "function" | "module.function"


     /**
     * Specifies the enabled ciphers for HTTPS requests
     * with Fetch API.
     * The ciphers are specified in the format understood by the
     * OpenSSL library.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_js_module.html#js_fetch_ciphers
     */
     js_fetch_ciphers ?: any


     /**
     * Enables the specified protocols for HTTPS requests
     * with Fetch API.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_js_module.html#js_fetch_protocols
     */
     js_fetch_protocols ?: any


     /**
     * Specifies a file with trusted CA certificates in the PEM format
     * used to
     * verify
     * the HTTPS certificate
     * with Fetch API.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_js_module.html#js_fetch_trusted_certificate
     */
     js_fetch_trusted_certificate ?: any


     /**
     * Sets the verification depth in the HTTPS server certificates chain
     * with Fetch API.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_js_module.html#js_fetch_verify_depth
     */
     js_fetch_verify_depth ?: any


     /**
     * Sets an njs function as a response header filter.
     * The directive allows changing arbitrary header fields of a response header.
     *
     * @context location
     * @see https://nginx.org/en/docs/http/ngx_http_js_module.html#js_header_filter
     */
     js_header_filter ?: "function" | "module.function"


     /**
     * Sets the shared memory zone
     * and the maximum allowed number of connections for a given key value.
     * When this limit is exceeded, the server will return the
     * error
     * in reply to a request.
     * For example, the directives
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_limit_conn_module.html#limit_conn
     * @example
     * ```
     * limit_conn_zone $binary_remote_addr zone=addr:10m;
     * 
     * server {
     *     location /download/ {
     *         limit_conn addr 1;
     *     }
     * limit_conn_zone $binary_remote_addr zone=perip:10m;
     * limit_conn_zone $server_name zone=perserver:10m;
     * 
     * server {
     *     ...
     *     limit_conn perip 10;
     *     limit_conn perserver 100;
     * }
     * ```
     */
     limit_conn ?: any


     /**
     * Enables the dry run mode.
     * In this mode, the number of connections is not limited, however,
     * in the shared memory zone, the number of excessive connections is accounted
     * as usual.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_limit_conn_module.html#limit_conn_dry_run
     */
     limit_conn_dry_run ?: "on" | "off"


     /**
     * Sets the desired logging level for cases when the server
     * limits the number of connections.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_limit_conn_module.html#limit_conn_log_level
     */
     limit_conn_log_level ?: "info" | "notice" | "warn" | "error"


     /**
     * Sets the status code to return in response to rejected requests.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_limit_conn_module.html#limit_conn_status
     */
     limit_conn_status ?: any


     /**
     * Sets the shared memory zone
     * and the maximum burst size of requests.
     * If the requests rate exceeds the rate configured for a zone,
     * their processing is delayed such that requests are processed
     * at a defined rate.
     * Excessive requests are delayed until their number exceeds the
     * maximum burst size
     * in which case the request is terminated with an
     * error.
     * By default, the maximum burst size is equal to zero.
     * For example, the directives
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_limit_req_module.html#limit_req
     * @example
     * ```
     * limit_req_zone $binary_remote_addr zone=one:10m rate=1r/s;
     * 
     * server {
     *     location /search/ {
     *         limit_req zone=one burst=5;
     *     }
     * limit_req zone=one burst=5 nodelay;
     * limit_req_zone $binary_remote_addr zone=perip:10m rate=1r/s;
     * limit_req_zone $server_name zone=perserver:10m rate=10r/s;
     * 
     * server {
     *     ...
     *     limit_req zone=perip burst=5 nodelay;
     *     limit_req zone=perserver burst=10;
     * }
     * ```
     */
     limit_req ?: "zone=name    [burst=number]    [nodelay" | "delay=number]"


     /**
     * Enables the dry run mode.
     * In this mode, requests processing rate is not limited, however,
     * in the shared memory zone, the number of excessive requests is accounted
     * as usual.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_limit_req_module.html#limit_req_dry_run
     */
     limit_req_dry_run ?: "on" | "off"


     /**
     * Sets the desired logging level
     * for cases when the server refuses to process requests
     * due to rate exceeding,
     * or delays request processing.
     * Logging level for delays is one point less than for refusals; for example,
     * if “limit_req_log_level notice” is specified,
     * delays are logged with the info level.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_limit_req_module.html#limit_req_log_level
     */
     limit_req_log_level ?: "info" | "notice" | "warn" | "error"


     /**
     * Sets the status code to return in response to rejected requests.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_limit_req_module.html#limit_req_status
     */
     limit_req_status ?: any


     /**
     * Sets the path, format, and configuration for a buffered log write.
     * Several logs can be specified on the same configuration level.
     * Logging to syslog
     * can be configured by specifying
     * the “syslog:” prefix in the first parameter.
     * The special value off cancels all
     * access_log directives on the current level.
     * If the format is not specified then the predefined
     * “combined” format is used.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_log_module.html#access_log
     * @example
     * ```
     * access_log /path/to/log.gz combined gzip flush=5m;
     * map $status $loggable {
     *     ~^[23]  0;
     *     default 1;
     * }
     * 
     * access_log /path/to/access.log combined if=$loggable;
     * ```
     */
     access_log ?: any


     /**
     * Defines a cache that stores the file descriptors of frequently used logs
     * whose names contain variables.
     * The directive has the following parameters:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_log_module.html#open_log_file_cache
     * @example
     * ```
     * open_log_file_cache max=1000 inactive=20s valid=1m min_uses=2;
     * ```
     */
     open_log_file_cache ?: any


     /**
     * Makes outgoing connections to a memcached server originate
     * from the specified local IP address with an optional port (1.11.2).
     * Parameter value can contain variables (1.3.12).
     * The special value off (1.3.12) cancels the effect
     * of the memcached_bind directive
     * inherited from the previous configuration level, which allows the
     * system to auto-assign the local IP address and port.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_memcached_module.html#memcached_bind
     * @example
     * ```
     * memcached_bind $remote_addr transparent;
     * ```
     */
     memcached_bind ?: "address    [transparent ]" | "off"


     /**
     * Sets the size of the buffer used for reading the response
     * received from the memcached server.
     * The response is passed to the client synchronously, as soon as it is received.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_memcached_module.html#memcached_buffer_size
     */
     memcached_buffer_size ?: string


     /**
     * Defines a timeout for establishing a connection with a memcached server.
     * It should be noted that this timeout cannot usually exceed 75 seconds.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_memcached_module.html#memcached_connect_timeout
     */
     memcached_connect_timeout ?: string


     /**
     * Enables byte-range support
     * for both cached and uncached responses from the memcached server
     * regardless of the “Accept-Ranges” field in these responses.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_memcached_module.html#memcached_force_ranges
     */
     memcached_force_ranges ?: "on" | "off"


     /**
     * Enables the test for the flag presence in the memcached
     * server response and sets the “Content-Encoding”
     * response header field to “gzip”
     * if the flag is set.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_memcached_module.html#memcached_gzip_flag
     */
     memcached_gzip_flag ?: any


     /**
     * Specifies in which cases a request should be passed to the next server:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_memcached_module.html#memcached_next_upstream
     */
     memcached_next_upstream ?: "error" | "timeout" | "invalid_response" | "not_found" | string


     /**
     * Limits the time during which a request can be passed to the
     * next server.
     * The 0 value turns off this limitation.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_memcached_module.html#memcached_next_upstream_timeout
     */
     memcached_next_upstream_timeout ?: string


     /**
     * Limits the number of possible tries for passing a request to the
     * next server.
     * The 0 value turns off this limitation.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_memcached_module.html#memcached_next_upstream_tries
     */
     memcached_next_upstream_tries ?: any


     /**
     * Sets the memcached server address.
     * The address can be specified as a domain name or IP address,
     * and a port:
     *
     * @context location
     * @see https://nginx.org/en/docs/http/ngx_http_memcached_module.html#memcached_pass
     * @example
     * ```
     * memcached_pass localhost:11211;
     * memcached_pass unix:/tmp/memcached.socket;
     * ```
     */
     memcached_pass ?: any


     /**
     * Defines a timeout for reading a response from the memcached server.
     * The timeout is set only between two successive read operations,
     * not for the transmission of the whole response.
     * If the memcached server does not transmit anything within this time,
     * the connection is closed.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_memcached_module.html#memcached_read_timeout
     */
     memcached_read_timeout ?: string


     /**
     * Sets a timeout for transmitting a request to the memcached server.
     * The timeout is set only between two successive write operations,
     * not for the transmission of the whole request.
     * If the memcached server does not receive anything within this time,
     * the connection is closed.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_memcached_module.html#memcached_send_timeout
     */
     memcached_send_timeout ?: string


     /**
     * Configures the “TCP keepalive” behavior
     * for outgoing connections to a memcached server.
     * By default, the operating system’s settings are in effect for the socket.
     * If the directive is set to the value “on”, the
     * SO_KEEPALIVE socket option is turned on for the socket.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_memcached_module.html#memcached_socket_keepalive
     */
     memcached_socket_keepalive ?: "on" | "off"


     /**
     * Sets the URI to which an original request will be mirrored.
     * Several mirrors can be specified on the same configuration level.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_mirror_module.html#mirror
     */
     mirror ?: "uri" | "off"


     /**
     * Indicates whether the client request body is mirrored.
     * When enabled, the client request body will be read
     * prior to creating mirror subrequests.
     * In this case, unbuffered client request body proxying
     * set by the
     * proxy_request_buffering,
     * fastcgi_request_buffering,
     * scgi_request_buffering,
     * and
     * uwsgi_request_buffering
     * directives will be disabled.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_mirror_module.html#mirror_request_body
     * @example
     * ```
     * location / {
     *     mirror /mirror;
     *     mirror_request_body off;
     *     proxy_pass http://backend;
     * }
     * 
     * location = /mirror {
     *     internal;
     *     proxy_pass http://log_backend;
     *     proxy_pass_request_body off;
     *     proxy_set_header Content-Length "";
     *     proxy_set_header X-Original-URI $request_uri;
     * }
     * ```
     */
     mirror_request_body ?: "on" | "off"


     /**
     * Turns on module processing in a surrounding location.
     *
     * @context location
     * @see https://nginx.org/en/docs/http/ngx_http_mp4_module.html#mp4
     */
     mp4 ?: any


     /**
     * Sets the initial size of the buffer used for
     * processing MP4 files.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_mp4_module.html#mp4_buffer_size
     */
     mp4_buffer_size ?: string


     /**
     * During metadata processing, a larger buffer may become necessary.
     * Its size cannot exceed the specified size,
     * or else nginx will return the
     * 500 (Internal Server Error) server error,
     * and log the following message:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_mp4_module.html#mp4_max_buffer_size
     * @example
     * ```
     * "/some/movie/file.mp4" mp4 moov atom is too large:
     * 12583268, you may want to increase mp4_max_buffer_size
     * ```
     */
     mp4_max_buffer_size ?: string


     /**
     * Limits the rate of response transmission to a client.
     * The rate is limited based on the average bitrate of the
     * MP4 file served.
     * To calculate the rate, the bitrate is multiplied by the specified
     * factor.
     * The special value “on” corresponds to the factor of 1.1.
     * The special value “off” disables rate limiting.
     * The limit is set per a request, and so if a client simultaneously opens
     * two connections, the overall rate will be twice as much
     * as the specified limit.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_mp4_module.html#mp4_limit_rate
     */
     mp4_limit_rate ?: "on" | "off" | "factor"


     /**
     * Sets the initial amount of media data (measured in playback time)
     * after which the further transmission of the response to a client
     * will be rate limited.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_mp4_module.html#mp4_limit_rate_after
     */
     mp4_limit_rate_after ?: string


     /**
     * Sets a Perl handler for the given location.
     *
     * @context location
     * @see https://nginx.org/en/docs/http/ngx_http_perl_module.html#perl
     */
     perl ?: "module::function" | "'sub { ... }'"


     /**
     * Makes outgoing connections to a proxied server originate
     * from the specified local IP address with an optional port (1.11.2).
     * Parameter value can contain variables (1.3.12).
     * The special value off (1.3.12) cancels the effect
     * of the proxy_bind directive
     * inherited from the previous configuration level, which allows the
     * system to auto-assign the local IP address and port.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_bind
     * @example
     * ```
     * proxy_bind $remote_addr transparent;
     * ```
     */
     proxy_bind ?: "address    [transparent]" | "off"


     /**
     * Sets the size of the buffer used for reading the first part
     * of the response received from the proxied server.
     * This part usually contains a small response header.
     * By default, the buffer size is equal to one memory page.
     * This is either 4K or 8K, depending on a platform.
     * It can be made smaller, however.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_buffer_size
     */
     proxy_buffer_size ?: string


     /**
     * Enables or disables buffering of responses from the proxied server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_buffering
     */
     proxy_buffering ?: "on" | "off"


     /**
     * Sets the number and size of the
     * buffers used for reading a response from the proxied server,
     * for a single connection.
     * By default, the buffer size is equal to one memory page.
     * This is either 4K or 8K, depending on a platform.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_buffers
     */
     proxy_buffers ?: any


     /**
     * When buffering of responses from the proxied
     * server is enabled, limits the total size of buffers that
     * can be busy sending a response to the client while the response is not
     * yet fully read.
     * In the meantime, the rest of the buffers can be used for reading the response
     * and, if needed, buffering part of the response to a temporary file.
     * By default, size is limited by the size of two buffers set by the
     * proxy_buffer_size and proxy_buffers directives.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_busy_buffers_size
     */
     proxy_busy_buffers_size ?: string


     /**
     * Defines a shared memory zone used for caching.
     * The same zone can be used in several places.
     * Parameter value can contain variables (1.7.9).
     * The off parameter disables caching inherited
     * from the previous configuration level.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cache
     */
     proxy_cache ?: "zone" | "off"


     /**
     * Allows starting a background subrequest
     * to update an expired cache item,
     * while a stale cached response is returned to the client.
     * Note that it is necessary to
     * allow
     * the usage of a stale cached response when it is being updated.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cache_background_update
     */
     proxy_cache_background_update ?: "on" | "off"


     /**
     * Defines conditions under which the response will not be taken from a cache.
     * If at least one value of the string parameters is not empty and is not
     * equal to “0” then the response will not be taken from the cache:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cache_bypass
     * @example
     * ```
     * proxy_cache_bypass $cookie_nocache $arg_nocache$arg_comment;
     * proxy_cache_bypass $http_pragma    $http_authorization;
     * ```
     */
     proxy_cache_bypass ?: any


     /**
     * Enables or disables the conversion of the “HEAD” method
     * to “GET” for caching.
     * When the conversion is disabled, the
     * cache key should be configured
     * to include the $request_method.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cache_convert_head
     */
     proxy_cache_convert_head ?: "on" | "off"


     /**
     * Defines a key for caching, for example
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cache_key
     * @example
     * ```
     * proxy_cache_key "$host$request_uri $cookie_user";
     * proxy_cache_key $scheme$proxy_host$uri$is_args$args;
     * ```
     */
     proxy_cache_key ?: any


     /**
     * When enabled, only one request at a time will be allowed to populate
     * a new cache element identified according to the proxy_cache_key
     * directive by passing a request to a proxied server.
     * Other requests of the same cache element will either wait
     * for a response to appear in the cache or the cache lock for
     * this element to be released, up to the time set by the
     * proxy_cache_lock_timeout directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cache_lock
     */
     proxy_cache_lock ?: "on" | "off"


     /**
     * If the last request passed to the proxied server
     * for populating a new cache element
     * has not completed for the specified time,
     * one more request may be passed to the proxied server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cache_lock_age
     */
     proxy_cache_lock_age ?: string


     /**
     * Sets a timeout for proxy_cache_lock.
     * When the time expires,
     * the request will be passed to the proxied server,
     * however, the response will not be cached.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cache_lock_timeout
     */
     proxy_cache_lock_timeout ?: string


     /**
     * Sets an offset in bytes for byte-range requests.
     * If the range is beyond the offset,
     * the range request will be passed to the proxied server
     * and the response will not be cached.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cache_max_range_offset
     */
     proxy_cache_max_range_offset ?: any


     /**
     * If the client request method is listed in this directive then
     * the response will be cached.
     * “GET” and “HEAD” methods are always
     * added to the list, though it is recommended to specify them explicitly.
     * See also the proxy_no_cache directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cache_methods
     */
     proxy_cache_methods ?: "GET" | "HEAD" | string


     /**
     * Sets the number of requests after which the response
     * will be cached.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cache_min_uses
     */
     proxy_cache_min_uses ?: any


     /**
     * Defines conditions under which the request will be considered a cache
     * purge request.
     * If at least one value of the string parameters is not empty and is not equal
     * to “0” then the cache entry with a corresponding
     * cache key is removed.
     * The result of successful operation is indicated by returning
     * the 204 (No Content) response.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cache_purge
     * @example
     * ```
     * proxy_cache_path /data/nginx/cache keys_zone=cache_zone:10m;
     * 
     * map $request_method $purge_method {
     *     PURGE   1;
     *     default 0;
     * }
     * 
     * server {
     *     ...
     *     location / {
     *         proxy_pass http://backend;
     *         proxy_cache cache_zone;
     *         proxy_cache_key $uri;
     *         proxy_cache_purge $purge_method;
     *     }
     * }
     * ```
     */
     proxy_cache_purge ?: any


     /**
     * Enables revalidation of expired cache items using conditional requests with
     * the “If-Modified-Since” and “If-None-Match”
     * header fields.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cache_revalidate
     */
     proxy_cache_revalidate ?: "on" | "off"


     /**
     * Determines in which cases a stale cached response can be used
     * during communication with the proxied server.
     * The directive’s parameters match the parameters of the
     * proxy_next_upstream directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cache_use_stale
     */
     proxy_cache_use_stale ?: "error" | "timeout" | "invalid_header" | "updating" | "http_500" | "http_502" | "http_503" | "http_504" | "http_403" | "http_404" | "http_429" | string


     /**
     * Sets caching time for different response codes.
     * For example, the following directives
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cache_valid
     * @example
     * ```
     * proxy_cache_valid 200 302 10m;
     * proxy_cache_valid 404      1m;
     * proxy_cache_valid 5m;
     * proxy_cache_valid 200 302 10m;
     * proxy_cache_valid 301      1h;
     * proxy_cache_valid any      1m;
     * ```
     */
     proxy_cache_valid ?: any


     /**
     * Defines a timeout for establishing a connection with a proxied server.
     * It should be noted that this timeout cannot usually exceed 75 seconds.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_connect_timeout
     */
     proxy_connect_timeout ?: string


     /**
     * Sets a text that should be changed in the domain
     * attribute of the “Set-Cookie” header fields of a
     * proxied server response.
     * Suppose a proxied server returned the “Set-Cookie”
     * header field with the attribute
     * “domain=localhost”.
     * The directive
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cookie_domain
     * @example
     * ```
     * proxy_cookie_domain localhost example.org;
     * proxy_cookie_domain www.$host $host;
     * proxy_cookie_domain ~\.(?P<sl_domain>[-0-9a-z]+\.[a-z]+)$ $sl_domain;
     * proxy_cookie_domain localhost example.org;
     * proxy_cookie_domain ~\.([a-z]+\.[a-z]+)$ $1;
     * ```
     */
     proxy_cookie_domain ?: any


     /**
     * Sets one or more flags for the cookie.
     * The cookie can contain text, variables, and their combinations.
     * The flag
     * can contain text, variables, and their combinations (1.19.8).
     * The
     * secure,
     * httponly,
     * samesite=strict,
     * samesite=lax,
     * samesite=none
     * parameters add the corresponding flags.
     * The
     * nosecure,
     * nohttponly,
     * nosamesite
     * parameters remove the corresponding flags.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cookie_flags
     * @example
     * ```
     * proxy_cookie_flags one httponly;
     * proxy_cookie_flags ~ nosecure samesite=strict;
     * ```
     */
     proxy_cookie_flags ?: "off" | "cookie    [flag ...]"


     /**
     * Sets a text that should be changed in the path
     * attribute of the “Set-Cookie” header fields of a
     * proxied server response.
     * Suppose a proxied server returned the “Set-Cookie”
     * header field with the attribute
     * “path=/two/some/uri/”.
     * The directive
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cookie_path
     * @example
     * ```
     * proxy_cookie_path /two/ /;
     * proxy_cookie_path $uri /some$uri;
     * proxy_cookie_path ~*^/user/([^/]+) /u/$1;
     * proxy_cookie_path /one/ /;
     * proxy_cookie_path / /two/;
     * ```
     */
     proxy_cookie_path ?: any


     /**
     * Enables byte-range support
     * for both cached and uncached responses from the proxied server
     * regardless of the “Accept-Ranges” field in these responses.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_force_ranges
     */
     proxy_force_ranges ?: "on" | "off"


     /**
     * Sets the bucket size for hash tables
     * used by the proxy_hide_header and proxy_set_header
     * directives.
     * The details of setting up hash tables are provided in a separate
     * document.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_headers_hash_bucket_size
     */
     proxy_headers_hash_bucket_size ?: string


     /**
     * Sets the maximum size of hash tables
     * used by the proxy_hide_header and proxy_set_header
     * directives.
     * The details of setting up hash tables are provided in a separate
     * document.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_headers_hash_max_size
     */
     proxy_headers_hash_max_size ?: string


     /**
     * By default,
     * nginx does not pass the header fields “Date”,
     * “Server”, “X-Pad”, and
     * “X-Accel-...” from the response of a proxied
     * server to a client.
     * The proxy_hide_header directive sets additional fields
     * that will not be passed.
     * If, on the contrary, the passing of fields needs to be permitted,
     * the proxy_pass_header directive can be used.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_hide_header
     */
     proxy_hide_header ?: any


     /**
     * Sets the HTTP protocol version for proxying.
     * By default, version 1.0 is used.
     * Version 1.1 is recommended for use with
     * keepalive
     * connections and
     * NTLM authentication.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_http_version
     */
     proxy_http_version ?: "1.0" | "1.1"


     /**
     * Determines whether the connection with a proxied server should be
     * closed when a client closes the connection without waiting
     * for a response.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_ignore_client_abort
     */
     proxy_ignore_client_abort ?: "on" | "off"


     /**
     * Disables processing of certain response header fields from the proxied server.
     * The following fields can be ignored: “X-Accel-Redirect”,
     * “X-Accel-Expires”, “X-Accel-Limit-Rate” (1.1.6),
     * “X-Accel-Buffering” (1.1.6),
     * “X-Accel-Charset” (1.1.6), “Expires”,
     * “Cache-Control”, “Set-Cookie” (0.8.44),
     * and “Vary” (1.7.7).
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_ignore_headers
     */
     proxy_ignore_headers ?: any


     /**
     * Determines whether proxied responses with codes greater than or equal
     * to 300 should be passed to a client
     * or be intercepted and redirected to nginx for processing
     * with the error_page directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_intercept_errors
     */
     proxy_intercept_errors ?: "on" | "off"


     /**
     * Limits the speed of reading the response from the proxied server.
     * The rate is specified in bytes per second.
     * The zero value disables rate limiting.
     * The limit is set per a request, and so if nginx simultaneously opens
     * two connections to the proxied server,
     * the overall rate will be twice as much as the specified limit.
     * The limitation works only if
     * buffering of responses from the proxied
     * server is enabled.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_limit_rate
     */
     proxy_limit_rate ?: any


     /**
     * When buffering of responses from the proxied
     * server is enabled, and the whole response does not fit into the buffers
     * set by the proxy_buffer_size and proxy_buffers
     * directives, a part of the response can be saved to a temporary file.
     * This directive sets the maximum size of the temporary file.
     * The size of data written to the temporary file at a time is set
     * by the proxy_temp_file_write_size directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_max_temp_file_size
     */
     proxy_max_temp_file_size ?: string


     /**
     * Specifies the HTTP method to use in requests forwarded
     * to the proxied server instead of the method from the client request.
     * Parameter value can contain variables (1.11.6).
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_method
     */
     proxy_method ?: any


     /**
     * Specifies in which cases a request should be passed to the next server:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_next_upstream
     */
     proxy_next_upstream ?: "error" | "timeout" | "invalid_header" | "http_500" | "http_502" | "http_503" | "http_504" | "http_403" | "http_404" | "http_429" | "non_idempotent" | string


     /**
     * Limits the time during which a request can be passed to the
     * next server.
     * The 0 value turns off this limitation.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_next_upstream_timeout
     */
     proxy_next_upstream_timeout ?: string


     /**
     * Limits the number of possible tries for passing a request to the
     * next server.
     * The 0 value turns off this limitation.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_next_upstream_tries
     */
     proxy_next_upstream_tries ?: any


     /**
     * Defines conditions under which the response will not be saved to a cache.
     * If at least one value of the string parameters is not empty and is not
     * equal to “0” then the response will not be saved:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_no_cache
     * @example
     * ```
     * proxy_no_cache $cookie_nocache $arg_nocache$arg_comment;
     * proxy_no_cache $http_pragma    $http_authorization;
     * ```
     */
     proxy_no_cache ?: any


     /**
     * Sets the protocol and address of a proxied server and an optional URI
     * to which a location should be mapped.
     * As a protocol, “http” or “https”
     * can be specified.
     * The address can be specified as a domain name or IP address,
     * and an optional port:
     *
     * @context location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_pass
     * @example
     * ```
     * proxy_pass http://localhost:8000/uri/;
     * proxy_pass http://unix:/tmp/backend.socket:/uri/;
     * ```
     */
     proxy_pass ?: any


     /**
     * Permits passing otherwise disabled header
     * fields from a proxied server to a client.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_pass_header
     */
     proxy_pass_header ?: any


     /**
     * Indicates whether the original request body is passed
     * to the proxied server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_pass_request_body
     * @example
     * ```
     * location /x-accel-redirect-here/ {
     *     proxy_method GET;
     *     proxy_pass_request_body off;
     *     proxy_set_header Content-Length "";
     * 
     *     proxy_pass ...
     * }
     * ```
     */
     proxy_pass_request_body ?: "on" | "off"


     /**
     * Indicates whether the header fields of the original request are passed
     * to the proxied server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_pass_request_headers
     * @example
     * ```
     * location /x-accel-redirect-here/ {
     *     proxy_method GET;
     *     proxy_pass_request_headers off;
     *     proxy_pass_request_body off;
     * 
     *     proxy_pass ...
     * }
     * ```
     */
     proxy_pass_request_headers ?: "on" | "off"


     /**
     * Defines a timeout for reading a response from the proxied server.
     * The timeout is set only between two successive read operations,
     * not for the transmission of the whole response.
     * If the proxied server does not transmit anything within this time,
     * the connection is closed.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_read_timeout
     */
     proxy_read_timeout ?: string


     /**
     * Sets the text that should be changed in the “Location”
     * and “Refresh” header fields of a proxied server response.
     * Suppose a proxied server returned the header field
     * “Location: http://localhost:8000/two/some/uri/”.
     * The directive
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_redirect
     * @example
     * ```
     * proxy_redirect http://localhost:8000/two/ http://frontend/one/;
     * proxy_redirect http://localhost:8000/two/ /;
     * location /one/ {
     *     proxy_pass     http://upstream:port/two/;
     *     proxy_redirect default;
     * location /one/ {
     *     proxy_pass     http://upstream:port/two/;
     *     proxy_redirect http://upstream:port/two/ /one/;
     * proxy_redirect http://localhost:8000/ http://$host:$server_port/;
     * proxy_redirect http://$proxy_host:8000/ /;
     * proxy_redirect ~^(http://[^:]+):\d+(/.+)$ $1$2;
     * proxy_redirect ~* /user/([^/]+)/(.+)$      http://$1.example.com/$2;
     * proxy_redirect default;
     * proxy_redirect http://localhost:8000/  /;
     * proxy_redirect http://www.example.com/ /;
     * proxy_redirect / /;
     * ```
     */
     proxy_redirect ?: any


     /**
     * Enables or disables buffering of a client request body.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_request_buffering
     */
     proxy_request_buffering ?: "on" | "off"


     /**
     * If the directive is set to a non-zero value, nginx will try to
     * minimize the number
     * of send operations on outgoing connections to a proxied server by using either
     * NOTE_LOWAT flag of the
     * kqueue method,
     * or the SO_SNDLOWAT socket option,
     * with the specified size.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_send_lowat
     */
     proxy_send_lowat ?: string


     /**
     * Sets a timeout for transmitting a request to the proxied server.
     * The timeout is set only between two successive write operations,
     * not for the transmission of the whole request.
     * If the proxied server does not receive anything within this time,
     * the connection is closed.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_send_timeout
     */
     proxy_send_timeout ?: string


     /**
     * Allows redefining the request body passed to the proxied server.
     * The value can contain text, variables, and their combination.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_set_body
     */
     proxy_set_body ?: any


     /**
     * Allows redefining or appending fields to the request header
     * passed to the proxied server.
     * The value can contain text, variables, and their combinations.
     * These directives are inherited from the previous configuration level
     * if and only if there are no proxy_set_header directives
     * defined on the current level.
     * By default, only two fields are redefined:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_set_header
     * @example
     * ```
     * proxy_set_header Host       $proxy_host;
     * proxy_set_header Connection close;
     * proxy_set_header Host       $http_host;
     * proxy_set_header Host       $host;
     * proxy_set_header Host       $host:$proxy_port;
     * proxy_set_header Accept-Encoding "";
     * ```
     */
     proxy_set_header ?: any


     /**
     * Configures the “TCP keepalive” behavior
     * for outgoing connections to a proxied server.
     * By default, the operating system’s settings are in effect for the socket.
     * If the directive is set to the value “on”, the
     * SO_KEEPALIVE socket option is turned on for the socket.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_socket_keepalive
     */
     proxy_socket_keepalive ?: "on" | "off"


     /**
     * Specifies a file with the certificate in the PEM format
     * used for authentication to a proxied HTTPS server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_ssl_certificate
     */
     proxy_ssl_certificate ?: any


     /**
     * Specifies a file with the secret key in the PEM format
     * used for authentication to a proxied HTTPS server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_ssl_certificate_key
     */
     proxy_ssl_certificate_key ?: any


     /**
     * Specifies the enabled ciphers for requests to a proxied HTTPS server.
     * The ciphers are specified in the format understood by the OpenSSL library.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_ssl_ciphers
     */
     proxy_ssl_ciphers ?: any


     /**
     * Sets arbitrary OpenSSL configuration
     * commands
     * when establishing a connection with the proxied HTTPS server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_ssl_conf_command
     */
     proxy_ssl_conf_command ?: any


     /**
     * Specifies a file with revoked certificates (CRL)
     * in the PEM format used to verify
     * the certificate of the proxied HTTPS server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_ssl_crl
     */
     proxy_ssl_crl ?: any


     /**
     * Allows overriding the server name used to
     * verify
     * the certificate of the proxied HTTPS server and to be
     * passed through SNI
     * when establishing a connection with the proxied HTTPS server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_ssl_name
     */
     proxy_ssl_name ?: any


     /**
     * Specifies a file with passphrases for
     * secret keys
     * where each passphrase is specified on a separate line.
     * Passphrases are tried in turn when loading the key.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_ssl_password_file
     */
     proxy_ssl_password_file ?: any


     /**
     * Enables the specified protocols for requests to a proxied HTTPS server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_ssl_protocols
     */
     proxy_ssl_protocols ?: any


     /**
     * Enables or disables passing of the server name through
     * TLS
     * Server Name Indication extension (SNI, RFC 6066)
     * when establishing a connection with the proxied HTTPS server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_ssl_server_name
     */
     proxy_ssl_server_name ?: "on" | "off"


     /**
     * Determines whether SSL sessions can be reused when working with
     * the proxied server.
     * If the errors
     * “SSL3_GET_FINISHED:digest check failed”
     * appear in the logs, try disabling session reuse.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_ssl_session_reuse
     */
     proxy_ssl_session_reuse ?: "on" | "off"


     /**
     * Specifies a file with trusted CA certificates in the PEM format
     * used to verify
     * the certificate of the proxied HTTPS server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_ssl_trusted_certificate
     */
     proxy_ssl_trusted_certificate ?: any


     /**
     * Enables or disables verification of the proxied HTTPS server certificate.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_ssl_verify
     */
     proxy_ssl_verify ?: "on" | "off"


     /**
     * Sets the verification depth in the proxied HTTPS server certificates chain.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_ssl_verify_depth
     */
     proxy_ssl_verify_depth ?: any


     /**
     * Enables saving of files to a disk.
     * The on parameter saves files with paths
     * corresponding to the directives
     * alias or
     * root.
     * The off parameter disables saving of files.
     * In addition, the file name can be set explicitly using the
     * string with variables:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_store
     * @example
     * ```
     * proxy_store /data/www$original_uri;
     * location /images/ {
     *     root               /data/www;
     *     error_page         404 = /fetch$uri;
     * }
     * 
     * location /fetch/ {
     *     internal;
     * 
     *     proxy_pass         http://backend/;
     *     proxy_store        on;
     *     proxy_store_access user:rw group:rw all:r;
     *     proxy_temp_path    /data/temp;
     * 
     *     alias              /data/www/;
     * }
     * location /images/ {
     *     root               /data/www;
     *     error_page         404 = @fetch;
     * }
     * 
     * location @fetch {
     *     internal;
     * 
     *     proxy_pass         http://backend;
     *     proxy_store        on;
     *     proxy_store_access user:rw group:rw all:r;
     *     proxy_temp_path    /data/temp;
     * 
     *     root               /data/www;
     * }
     * ```
     */
     proxy_store ?: "on" | "off" | string


     /**
     * Sets access permissions for newly created files and directories, e.g.:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_store_access
     * @example
     * ```
     * proxy_store_access user:rw group:rw all:r;
     * proxy_store_access group:rw all:r;
     * ```
     */
     proxy_store_access ?: any


     /**
     * Limits the size of data written to a temporary file
     * at a time, when buffering of responses from the proxied server
     * to temporary files is enabled.
     * By default, size is limited by two buffers set by the
     * proxy_buffer_size and proxy_buffers directives.
     * The maximum size of a temporary file is set by the
     * proxy_max_temp_file_size directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_temp_file_write_size
     */
     proxy_temp_file_write_size ?: string


     /**
     * Defines a directory for storing temporary files
     * with data received from proxied servers.
     * Up to three-level subdirectory hierarchy can be used underneath the specified
     * directory.
     * For example, in the following configuration
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_temp_path
     * @example
     * ```
     * proxy_temp_path /spool/nginx/proxy_temp 1 2;
     * /spool/nginx/proxy_temp/7/45/00000123457
     * ```
     */
     proxy_temp_path ?: any


     /**
     * Enables or disables module processing in a surrounding location.
     *
     * @context location
     * @see https://nginx.org/en/docs/http/ngx_http_random_index_module.html#random_index
     */
     random_index ?: "on" | "off"


     /**
     * Defines trusted addresses that are known to send correct
     * replacement addresses.
     * If the special value unix: is specified,
     * all UNIX-domain sockets will be trusted.
     * Trusted addresses may also be specified using a hostname (1.13.1).
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_realip_module.html#set_real_ip_from
     */
     set_real_ip_from ?: "address" | "CIDR" | "unix:"


     /**
     * Defines the request header field
     * whose value will be used to replace the client address.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_realip_module.html#real_ip_header
     */
     real_ip_header ?: "field" | "X-Real-IP" | "X-Forwarded-For" | "proxy_protocol"


     /**
     * If recursive search is disabled, the original client address that
     * matches one of the trusted addresses is replaced by the last
     * address sent in the request header field defined by the
     * real_ip_header directive.
     * If recursive search is enabled, the original client address that
     * matches one of the trusted addresses is replaced by the last
     * non-trusted address sent in the request header field.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_realip_module.html#real_ip_recursive
     */
     real_ip_recursive ?: "on" | "off"


     /**
     * Sets the bucket size for the valid referers hash tables.
     * The details of setting up hash tables are provided in a separate
     * document.
     *
     * @context server, location
     * @see https://nginx.org/en/docs/http/ngx_http_referer_module.html#referer_hash_bucket_size
     */
     referer_hash_bucket_size ?: string


     /**
     * Sets the maximum size of the valid referers hash tables.
     * The details of setting up hash tables are provided in a separate
     * document.
     *
     * @context server, location
     * @see https://nginx.org/en/docs/http/ngx_http_referer_module.html#referer_hash_max_size
     */
     referer_hash_max_size ?: string


     /**
     * Specifies the “Referer” request header field values
     * that will cause the embedded $invalid_referer variable to
     * be set to an empty string.
     * Otherwise, the variable will be set to “1”.
     * Search for a match is case-insensitive.
     *
     * @context server, location
     * @see https://nginx.org/en/docs/http/ngx_http_referer_module.html#valid_referers
     * @example
     * ```
     * valid_referers none blocked server_names
     *                *.example.com example.* www.example.org/galleries/
     *                ~\.google\.;
     * ```
     */
     valid_referers ?: "none" | "blocked" | "server_names" | string


     /**
     * Stops processing the current set of
     * ngx_http_rewrite_module directives.
     *
     * @context server, location
     * @see https://nginx.org/en/docs/http/ngx_http_rewrite_module.html#break
     * @example
     * ```
     * if ($slow) {
     *     limit_rate 10k;
     *     break;
     * }
     * ```
     */
     break ?: any


     /**
     * The specified condition is evaluated.
     * If true, this module directives specified inside the braces are
     * executed, and the request is assigned the configuration inside the
     * if directive.
     * Configurations inside the if directives are
     * inherited from the previous configuration level.
     *
     * @context server, location
     * @see https://nginx.org/en/docs/http/ngx_http_rewrite_module.html#if
     * @example
     * ```
     * if ($http_user_agent ~ MSIE) {
     *     rewrite ^(.*)$ /msie/$1 break;
     * }
     * 
     * if ($http_cookie ~* "id=([^;]+)(?:;|$)") {
     *     set $id $1;
     * }
     * 
     * if ($request_method = POST) {
     *     return 405;
     * }
     * 
     * if ($slow) {
     *     limit_rate 10k;
     * }
     * 
     * if ($invalid_referer) {
     *     return 403;
     * }
     * ```
     */
     if ?: any


     /**
     * Stops processing and returns the specified code to a client.
     * The non-standard code 444 closes a connection without sending
     * a response header.
     *
     * @context server, location
     * @see https://nginx.org/en/docs/http/ngx_http_rewrite_module.html#return
     */
     return ?: any


     /**
     * If the specified regular expression matches a request URI, URI is changed
     * as specified in the replacement string.
     * The rewrite directives are executed sequentially
     * in order of their appearance in the configuration file.
     * It is possible to terminate further processing of the directives using flags.
     * If a replacement string starts with “http://”,
     * “https://”, or “$scheme”,
     * the processing stops and the redirect is returned to a client.
     *
     * @context server, location
     * @see https://nginx.org/en/docs/http/ngx_http_rewrite_module.html#rewrite
     * @example
     * ```
     * server {
     *     ...
     *     rewrite ^(/download/.*)/media/(.*)\..*$ $1/mp3/$2.mp3 last;
     *     rewrite ^(/download/.*)/audio/(.*)\..*$ $1/mp3/$2.ra  last;
     *     return  403;
     *     ...
     * }
     * location /download/ {
     *     rewrite ^(/download/.*)/media/(.*)\..*$ $1/mp3/$2.mp3 break;
     *     rewrite ^(/download/.*)/audio/(.*)\..*$ $1/mp3/$2.ra  break;
     *     return  403;
     * }
     * rewrite ^/users/(.*)$ /show?user=$1? last;
     * ```
     */
     rewrite ?: any


     /**
     * Enables or disables logging of ngx_http_rewrite_module
     * module directives processing results
     * into the error_log at
     * the notice level.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_rewrite_module.html#rewrite_log
     */
     rewrite_log ?: "on" | "off"


     /**
     * Sets a value for the specified variable.
     * The value can contain text, variables, and their combination.
     *
     * @context server, location
     * @see https://nginx.org/en/docs/http/ngx_http_rewrite_module.html#set
     */
     set ?: any


     /**
     * Controls whether warnings about uninitialized variables are logged.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_rewrite_module.html#uninitialized_variable_warn
     * @example
     * ```
     * location /download/ {
     *     if ($forbidden) {
     *         return 403;
     *     }
     * 
     *     if ($slow) {
     *         limit_rate 10k;
     *     }
     * 
     *     rewrite ^/(download/.*)/media/(.*)\..*$ /$1/mp3/$2.mp3 break;
     * }
     * variable $forbidden
     * check against zero
     *     return 403
     *     end of code
     * variable $slow
     * check against zero
     * match of regular expression
     * copy "/"
     * copy $1
     * copy "/mp3/"
     * copy $2
     * copy ".mp3"
     * end of regular expression
     * end of code
     * rewrite ^/(download/.*)/media/(.*)\..*$ /$1/mp3/$2.mp3 break;
     * rewrite ^(/download/.*)/media/(.*)\..*$ $1/mp3/$2.mp3 break;
     * match of regular expression
     * copy $1
     * copy "/mp3/"
     * copy $2
     * copy ".mp3"
     * end of regular expression
     * end of code
     * ```
     */
     uninitialized_variable_warn ?: "on" | "off"


     /**
     * Makes outgoing connections to an SCGI server originate
     * from the specified local IP address with an optional port (1.11.2).
     * Parameter value can contain variables (1.3.12).
     * The special value off (1.3.12) cancels the effect
     * of the scgi_bind directive
     * inherited from the previous configuration level, which allows the
     * system to auto-assign the local IP address and port.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_bind
     * @example
     * ```
     * scgi_bind $remote_addr transparent;
     * ```
     */
     scgi_bind ?: "address    [transparent]" | "off"


     /**
     * Sets the size of the buffer used for reading the first part
     * of the response received from the SCGI server.
     * This part usually contains a small response header.
     * By default, the buffer size is equal to one memory page.
     * This is either 4K or 8K, depending on a platform.
     * It can be made smaller, however.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_buffer_size
     */
     scgi_buffer_size ?: string


     /**
     * Enables or disables buffering of responses from the SCGI server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_buffering
     */
     scgi_buffering ?: "on" | "off"


     /**
     * Sets the number and size of the
     * buffers used for reading a response from the SCGI server,
     * for a single connection.
     * By default, the buffer size is equal to one memory page.
     * This is either 4K or 8K, depending on a platform.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_buffers
     */
     scgi_buffers ?: any


     /**
     * When buffering of responses from the SCGI
     * server is enabled, limits the total size of buffers that
     * can be busy sending a response to the client while the response is not
     * yet fully read.
     * In the meantime, the rest of the buffers can be used for reading the response
     * and, if needed, buffering part of the response to a temporary file.
     * By default, size is limited by the size of two buffers set by the
     * scgi_buffer_size and scgi_buffers directives.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_busy_buffers_size
     */
     scgi_busy_buffers_size ?: string


     /**
     * Defines a shared memory zone used for caching.
     * The same zone can be used in several places.
     * Parameter value can contain variables (1.7.9).
     * The off parameter disables caching inherited
     * from the previous configuration level.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_cache
     */
     scgi_cache ?: "zone" | "off"


     /**
     * Allows starting a background subrequest
     * to update an expired cache item,
     * while a stale cached response is returned to the client.
     * Note that it is necessary to
     * allow
     * the usage of a stale cached response when it is being updated.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_cache_background_update
     */
     scgi_cache_background_update ?: "on" | "off"


     /**
     * Defines conditions under which the response will not be taken from a cache.
     * If at least one value of the string parameters is not empty and is not
     * equal to “0” then the response will not be taken from the cache:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_cache_bypass
     * @example
     * ```
     * scgi_cache_bypass $cookie_nocache $arg_nocache$arg_comment;
     * scgi_cache_bypass $http_pragma    $http_authorization;
     * ```
     */
     scgi_cache_bypass ?: any


     /**
     * Defines a key for caching, for example
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_cache_key
     * @example
     * ```
     * scgi_cache_key localhost:9000$request_uri;
     * ```
     */
     scgi_cache_key ?: any


     /**
     * When enabled, only one request at a time will be allowed to populate
     * a new cache element identified according to the scgi_cache_key
     * directive by passing a request to an SCGI server.
     * Other requests of the same cache element will either wait
     * for a response to appear in the cache or the cache lock for
     * this element to be released, up to the time set by the
     * scgi_cache_lock_timeout directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_cache_lock
     */
     scgi_cache_lock ?: "on" | "off"


     /**
     * If the last request passed to the SCGI server
     * for populating a new cache element
     * has not completed for the specified time,
     * one more request may be passed to the SCGI server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_cache_lock_age
     */
     scgi_cache_lock_age ?: string


     /**
     * Sets a timeout for scgi_cache_lock.
     * When the time expires,
     * the request will be passed to the SCGI server,
     * however, the response will not be cached.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_cache_lock_timeout
     */
     scgi_cache_lock_timeout ?: string


     /**
     * Sets an offset in bytes for byte-range requests.
     * If the range is beyond the offset,
     * the range request will be passed to the SCGI server
     * and the response will not be cached.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_cache_max_range_offset
     */
     scgi_cache_max_range_offset ?: any


     /**
     * If the client request method is listed in this directive then
     * the response will be cached.
     * “GET” and “HEAD” methods are always
     * added to the list, though it is recommended to specify them explicitly.
     * See also the scgi_no_cache directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_cache_methods
     */
     scgi_cache_methods ?: "GET" | "HEAD" | string


     /**
     * Sets the number of requests after which the response
     * will be cached.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_cache_min_uses
     */
     scgi_cache_min_uses ?: any


     /**
     * Defines conditions under which the request will be considered a cache
     * purge request.
     * If at least one value of the string parameters is not empty and is not equal
     * to “0” then the cache entry with a corresponding
     * cache key is removed.
     * The result of successful operation is indicated by returning
     * the 204 (No Content) response.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_cache_purge
     * @example
     * ```
     * scgi_cache_path /data/nginx/cache keys_zone=cache_zone:10m;
     * 
     * map $request_method $purge_method {
     *     PURGE   1;
     *     default 0;
     * }
     * 
     * server {
     *     ...
     *     location / {
     *         scgi_pass        backend;
     *         scgi_cache       cache_zone;
     *         scgi_cache_key   $uri;
     *         scgi_cache_purge $purge_method;
     *     }
     * }
     * ```
     */
     scgi_cache_purge ?: any


     /**
     * Enables revalidation of expired cache items using conditional requests with
     * the “If-Modified-Since” and “If-None-Match”
     * header fields.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_cache_revalidate
     */
     scgi_cache_revalidate ?: "on" | "off"


     /**
     * Determines in which cases a stale cached response can be used
     * when an error occurs during communication with the SCGI server.
     * The directive’s parameters match the parameters of the
     * scgi_next_upstream directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_cache_use_stale
     */
     scgi_cache_use_stale ?: "error" | "timeout" | "invalid_header" | "updating" | "http_500" | "http_503" | "http_403" | "http_404" | "http_429" | string


     /**
     * Sets caching time for different response codes.
     * For example, the following directives
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_cache_valid
     * @example
     * ```
     * scgi_cache_valid 200 302 10m;
     * scgi_cache_valid 404      1m;
     * scgi_cache_valid 5m;
     * scgi_cache_valid 200 302 10m;
     * scgi_cache_valid 301      1h;
     * scgi_cache_valid any      1m;
     * ```
     */
     scgi_cache_valid ?: any


     /**
     * Defines a timeout for establishing a connection with an SCGI server.
     * It should be noted that this timeout cannot usually exceed 75 seconds.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_connect_timeout
     */
     scgi_connect_timeout ?: string


     /**
     * Enables byte-range support
     * for both cached and uncached responses from the SCGI server
     * regardless of the “Accept-Ranges” field in these responses.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_force_ranges
     */
     scgi_force_ranges ?: "on" | "off"


     /**
     * By default,
     * nginx does not pass the header fields “Status” and
     * “X-Accel-...” from the response of an SCGI
     * server to a client.
     * The scgi_hide_header directive sets additional fields
     * that will not be passed.
     * If, on the contrary, the passing of fields needs to be permitted,
     * the scgi_pass_header directive can be used.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_hide_header
     */
     scgi_hide_header ?: any


     /**
     * Determines whether the connection with an SCGI server should be
     * closed when a client closes the connection without waiting
     * for a response.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_ignore_client_abort
     */
     scgi_ignore_client_abort ?: "on" | "off"


     /**
     * Disables processing of certain response header fields from the SCGI server.
     * The following fields can be ignored: “X-Accel-Redirect”,
     * “X-Accel-Expires”, “X-Accel-Limit-Rate” (1.1.6),
     * “X-Accel-Buffering” (1.1.6),
     * “X-Accel-Charset” (1.1.6), “Expires”,
     * “Cache-Control”, “Set-Cookie” (0.8.44),
     * and “Vary” (1.7.7).
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_ignore_headers
     */
     scgi_ignore_headers ?: any


     /**
     * Determines whether an SCGI server responses with codes greater than or equal
     * to 300 should be passed to a client
     * or be intercepted and redirected to nginx for processing
     * with the error_page directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_intercept_errors
     */
     scgi_intercept_errors ?: "on" | "off"


     /**
     * Limits the speed of reading the response from the SCGI server.
     * The rate is specified in bytes per second.
     * The zero value disables rate limiting.
     * The limit is set per a request, and so if nginx simultaneously opens
     * two connections to the SCGI server,
     * the overall rate will be twice as much as the specified limit.
     * The limitation works only if
     * buffering of responses from the SCGI
     * server is enabled.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_limit_rate
     */
     scgi_limit_rate ?: any


     /**
     * When buffering of responses from the SCGI
     * server is enabled, and the whole response does not fit into the buffers
     * set by the scgi_buffer_size and scgi_buffers
     * directives, a part of the response can be saved to a temporary file.
     * This directive sets the maximum size of the temporary file.
     * The size of data written to the temporary file at a time is set
     * by the scgi_temp_file_write_size directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_max_temp_file_size
     */
     scgi_max_temp_file_size ?: string


     /**
     * Specifies in which cases a request should be passed to the next server:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_next_upstream
     */
     scgi_next_upstream ?: "error" | "timeout" | "invalid_header" | "http_500" | "http_503" | "http_403" | "http_404" | "http_429" | "non_idempotent" | string


     /**
     * Limits the time during which a request can be passed to the
     * next server.
     * The 0 value turns off this limitation.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_next_upstream_timeout
     */
     scgi_next_upstream_timeout ?: string


     /**
     * Limits the number of possible tries for passing a request to the
     * next server.
     * The 0 value turns off this limitation.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_next_upstream_tries
     */
     scgi_next_upstream_tries ?: any


     /**
     * Defines conditions under which the response will not be saved to a cache.
     * If at least one value of the string parameters is not empty and is not
     * equal to “0” then the response will not be saved:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_no_cache
     * @example
     * ```
     * scgi_no_cache $cookie_nocache $arg_nocache$arg_comment;
     * scgi_no_cache $http_pragma    $http_authorization;
     * ```
     */
     scgi_no_cache ?: any


     /**
     * Sets a parameter that should be passed to the SCGI server.
     * The value can contain text, variables, and their combination.
     * These directives are inherited from the previous configuration level
     * if and only if there are no scgi_param directives
     * defined on the current level.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_param
     * @example
     * ```
     * location / {
     *     include scgi_params;
     *     ...
     * }
     * scgi_param HTTPS $https if_not_empty;
     * ```
     */
     scgi_param ?: any


     /**
     * Sets the address of an SCGI server.
     * The address can be specified as a domain name or IP address,
     * and a port:
     *
     * @context location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_pass
     * @example
     * ```
     * scgi_pass localhost:9000;
     * scgi_pass unix:/tmp/scgi.socket;
     * ```
     */
     scgi_pass ?: any


     /**
     * Permits passing otherwise disabled header
     * fields from an SCGI server to a client.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_pass_header
     */
     scgi_pass_header ?: any


     /**
     * Indicates whether the original request body is passed
     * to the SCGI server.
     * See also the scgi_pass_request_headers directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_pass_request_body
     */
     scgi_pass_request_body ?: "on" | "off"


     /**
     * Indicates whether the header fields of the original request are passed
     * to the SCGI server.
     * See also the scgi_pass_request_body directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_pass_request_headers
     */
     scgi_pass_request_headers ?: "on" | "off"


     /**
     * Defines a timeout for reading a response from the SCGI server.
     * The timeout is set only between two successive read operations,
     * not for the transmission of the whole response.
     * If the SCGI server does not transmit anything within this time,
     * the connection is closed.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_read_timeout
     */
     scgi_read_timeout ?: string


     /**
     * Enables or disables buffering of a client request body.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_request_buffering
     */
     scgi_request_buffering ?: "on" | "off"


     /**
     * Sets a timeout for transmitting a request to the SCGI server.
     * The timeout is set only between two successive write operations,
     * not for the transmission of the whole request.
     * If the SCGI server does not receive anything within this time,
     * the connection is closed.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_send_timeout
     */
     scgi_send_timeout ?: string


     /**
     * Configures the “TCP keepalive” behavior
     * for outgoing connections to an SCGI server.
     * By default, the operating system’s settings are in effect for the socket.
     * If the directive is set to the value “on”, the
     * SO_KEEPALIVE socket option is turned on for the socket.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_socket_keepalive
     */
     scgi_socket_keepalive ?: "on" | "off"


     /**
     * Enables saving of files to a disk.
     * The on parameter saves files with paths
     * corresponding to the directives
     * alias or
     * root.
     * The off parameter disables saving of files.
     * In addition, the file name can be set explicitly using the
     * string with variables:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_store
     * @example
     * ```
     * scgi_store /data/www$original_uri;
     * location /images/ {
     *     root              /data/www;
     *     error_page        404 = /fetch$uri;
     * }
     * 
     * location /fetch/ {
     *     internal;
     * 
     *     scgi_pass         backend:9000;
     *     ...
     * 
     *     scgi_store        on;
     *     scgi_store_access user:rw group:rw all:r;
     *     scgi_temp_path    /data/temp;
     * 
     *     alias             /data/www/;
     * }
     * ```
     */
     scgi_store ?: "on" | "off" | string


     /**
     * Sets access permissions for newly created files and directories, e.g.:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_store_access
     * @example
     * ```
     * scgi_store_access user:rw group:rw all:r;
     * scgi_store_access group:rw all:r;
     * ```
     */
     scgi_store_access ?: any


     /**
     * Limits the size of data written to a temporary file
     * at a time, when buffering of responses from the SCGI server
     * to temporary files is enabled.
     * By default, size is limited by two buffers set by the
     * scgi_buffer_size and scgi_buffers directives.
     * The maximum size of a temporary file is set by the
     * scgi_max_temp_file_size directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_temp_file_write_size
     */
     scgi_temp_file_write_size ?: string


     /**
     * Defines a directory for storing temporary files
     * with data received from SCGI servers.
     * Up to three-level subdirectory hierarchy can be used underneath the specified
     * directory.
     * For example, in the following configuration
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_scgi_module.html#scgi_temp_path
     * @example
     * ```
     * scgi_temp_path /spool/nginx/scgi_temp 1 2;
     * /spool/nginx/scgi_temp/7/45/00000123457
     * ```
     */
     scgi_temp_path ?: any


     /**
     * Defines a string with variables from which the
     * checksum value and lifetime of a link will be extracted.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_secure_link_module.html#secure_link
     */
     secure_link ?: any


     /**
     * Defines an expression for which the MD5 hash value will
     * be computed and compared with the value passed in a request.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_secure_link_module.html#secure_link_md5
     * @example
     * ```
     * location /s/ {
     *     secure_link $arg_md5,$arg_expires;
     *     secure_link_md5 "$secure_link_expires$uri$remote_addr secret";
     * 
     *     if ($secure_link = "") {
     *         return 403;
     *     }
     * 
     *     if ($secure_link = "0") {
     *         return 410;
     *     }
     * 
     *     ...
     * }
     * echo -n '2147483647/s/link127.0.0.1 secret' | \
     *     openssl md5 -binary | openssl base64 | tr +/ -_ | tr -d =
     * ```
     */
     secure_link_md5 ?: any


     /**
     * Defines a secret word used to check authenticity
     * of requested links.
     *
     * @context location
     * @see https://nginx.org/en/docs/http/ngx_http_secure_link_module.html#secure_link_secret
     * @example
     * ```
     * /prefix/hash/link
     * location /p/ {
     *     secure_link_secret secret;
     * 
     *     if ($secure_link = "") {
     *         return 403;
     *     }
     * 
     *     rewrite ^ /secure/$secure_link;
     * }
     * 
     * location /secure/ {
     *     internal;
     * }
     * echo -n 'linksecret' | openssl md5 -hex
     * ```
     */
     secure_link_secret ?: any


     /**
     * Enables the use of the specified session log.
     * The special value off cancels the effect
     * of the session_log directives
     * inherited from the previous configuration level.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_session_log_module.html#session_log
     */
     session_log ?: "name" | "off"


     /**
     * Sets the size of the slice.
     * The zero value disables splitting responses into slices.
     * Note that a too low value may result in excessive memory usage
     * and opening a large number of files.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_slice_module.html#slice
     */
     slice ?: string


     /**
     * Sets the maximum size of chunks
     * into which the response body is
     * 
     * sliced.
     * A too low value results in higher overhead.
     * A too high value impairs prioritization due to
     * 
     * HOL blocking.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_spdy_module.html#spdy_chunk_size
     */
     spdy_chunk_size ?: string


     /**
     * Enables or disables processing of SSI commands in responses.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_ssi_module.html#ssi
     */
     ssi ?: "on" | "off"


     /**
     * Allows preserving the “Last-Modified” header field
     * from the original response during SSI processing
     * to facilitate response caching.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_ssi_module.html#ssi_last_modified
     */
     ssi_last_modified ?: "on" | "off"


     /**
     * Sets the minimum size for parts of a response stored on disk,
     * starting from which it makes sense to send them using
     * sendfile.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_ssi_module.html#ssi_min_file_chunk
     */
     ssi_min_file_chunk ?: string


     /**
     * If enabled, suppresses the output of the
     * “[an error occurred while processing the directive]”
     * string if an error occurred during SSI processing.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_ssi_module.html#ssi_silent_errors
     */
     ssi_silent_errors ?: "on" | "off"


     /**
     * Enables processing of SSI commands in responses with the specified MIME types
     * in addition to “text/html”.
     * The special value “*” matches any MIME type (0.8.29).
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_ssi_module.html#ssi_types
     */
     ssi_types ?: any


     /**
     * Sets the maximum length of parameter values in SSI commands.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_ssi_module.html#ssi_value_length
     * @example
     * ```
     * <!--# command parameter1=value1 parameter2=value2 ... -->
     * ```
     */
     ssi_value_length ?: any


     /**
     * The status information will be accessible from the surrounding location.
     * Access to this location should be
     * limited.
     *
     * @context location
     * @see https://nginx.org/en/docs/http/ngx_http_status_module.html#status
     */
     status ?: any


     /**
     * By default, status information is output in the JSON format.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_status_module.html#status_format
     */
     status_format ?: any


     /**
     * The basic status information will be accessible from the surrounding location.
     *
     * @context server, location
     * @see https://nginx.org/en/docs/http/ngx_http_stub_status_module.html#stub_status
     */
     stub_status ?: any


     /**
     * Sets a string to replace and a replacement string.
     * The string to replace is matched ignoring the case.
     * The string to replace (1.9.4) and replacement string can contain variables.
     * Several sub_filter directives
     * can be specified on the same configuration level (1.9.4).
     * These directives are inherited from the previous configuration level
     * if and only if there are no sub_filter directives
     * defined on the current level.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_sub_module.html#sub_filter
     */
     sub_filter ?: any


     /**
     * Allows preserving the “Last-Modified” header field
     * from the original response during replacement
     * to facilitate response caching.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_sub_module.html#sub_filter_last_modified
     */
     sub_filter_last_modified ?: "on" | "off"


     /**
     * Indicates whether to look for each string to replace
     * once or repeatedly.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_sub_module.html#sub_filter_once
     */
     sub_filter_once ?: "on" | "off"


     /**
     * Enables string replacement in responses with the specified MIME types
     * in addition to “text/html”.
     * The special value “*” matches any MIME type (0.8.29).
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_sub_module.html#sub_filter_types
     */
     sub_filter_types ?: any


     /**
     * Turns on the HTTP interface of upstream configuration in the surrounding
     * location.
     * Access to this location should be
     * limited.
     *
     * @context location
     * @see https://nginx.org/en/docs/http/ngx_http_upstream_conf_module.html#upstream_conf
     * @example
     * ```
     * http://127.0.0.1/upstream_conf?upstream=backend
     * http://127.0.0.1/upstream_conf?upstream=backend
     * http://127.0.0.1/upstream_conf?upstream=backend&id=42
     * http://127.0.0.1/upstream_conf?add=&upstream=backend&server=127.0.0.1:8080
     * http://127.0.0.1/upstream_conf?add=&upstream=backend&backup=&server=127.0.0.1:8080
     * http://127.0.0.1/upstream_conf?add=&upstream=backend&server=127.0.0.1:8080&weight=2&down=
     * http://127.0.0.1/upstream_conf?remove=&upstream=backend&id=42
     * http://127.0.0.1/upstream_conf?upstream=backend&id=42&down=
     * http://127.0.0.1/upstream_conf?upstream=backend&id=42&server=192.0.2.3:8123
     * http://127.0.0.1/upstream_conf?upstream=backend&id=42&max_fails=3&weight=4
     * ```
     */
     upstream_conf ?: any


     /**
     * Enables periodic health checks of the servers in a
     * group
     * referenced in the surrounding location.
     *
     * @context location
     * @see https://nginx.org/en/docs/http/ngx_http_upstream_hc_module.html#health_check
     */
     health_check ?: any


     /**
     * Enables or disables setting cookies and logging the received cookies:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_userid_module.html#userid
     */
     userid ?: "on" | "v1" | "log" | "off"


     /**
     * Defines a domain for which the cookie is set.
     * The none parameter disables setting of a domain for the
     * cookie.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_userid_module.html#userid_domain
     */
     userid_domain ?: "name" | "none"


     /**
     * Sets a time during which a browser should keep the cookie.
     * The parameter max will cause the cookie to expire on
     * “31 Dec 2037 23:55:55 GMT”.
     * The parameter off will cause the cookie to expire at
     * the end of a browser session.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_userid_module.html#userid_expires
     */
     userid_expires ?: "time" | "max" | "off"


     /**
     * If the parameter is not off,
     * defines one or more additional flags for the cookie:
     * secure,
     * httponly,
     * samesite=strict,
     * samesite=lax,
     * samesite=none.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_userid_module.html#userid_flags
     */
     userid_flags ?: "off" | string


     /**
     * If the parameter is not off, enables the cookie marking
     * mechanism and sets the character used as a mark.
     * This mechanism is used to add or change
     * userid_p3p and/or a cookie expiration time while
     * preserving the client identifier.
     * A mark can be any letter of the English alphabet (case-sensitive),
     * digit, or the “=” character.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_userid_module.html#userid_mark
     */
     userid_mark ?: "letter" | "digit" | "=" | "off"


     /**
     * Sets the cookie name.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_userid_module.html#userid_name
     */
     userid_name ?: any


     /**
     * Sets a value for the “P3P” header field that will be
     * sent along with the cookie.
     * If the directive is set to the special value none,
     * the “P3P” header will not be sent in a response.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_userid_module.html#userid_p3p
     */
     userid_p3p ?: string | "none"


     /**
     * Defines a path for which the cookie is set.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_userid_module.html#userid_path
     */
     userid_path ?: string


     /**
     * If identifiers are issued by multiple servers (services),
     * each service should be assigned its own number
     * to ensure that client identifiers are unique.
     * For version 1 cookies, the default value is zero.
     * For version 2 cookies, the default value is the number composed from the last
     * four octets of the server’s IP address.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_userid_module.html#userid_service
     */
     userid_service ?: any


     /**
     * Makes outgoing connections to a uwsgi server originate
     * from the specified local IP address with an optional port (1.11.2).
     * Parameter value can contain variables (1.3.12).
     * The special value off (1.3.12) cancels the effect
     * of the uwsgi_bind directive
     * inherited from the previous configuration level, which allows the
     * system to auto-assign the local IP address and port.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_bind
     * @example
     * ```
     * uwsgi_bind $remote_addr transparent;
     * ```
     */
     uwsgi_bind ?: "address    [transparent]" | "off"


     /**
     * Sets the size of the buffer used for reading the first part
     * of the response received from the uwsgi server.
     * This part usually contains a small response header.
     * By default, the buffer size is equal to one memory page.
     * This is either 4K or 8K, depending on a platform.
     * It can be made smaller, however.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_buffer_size
     */
     uwsgi_buffer_size ?: string


     /**
     * Enables or disables buffering of responses from the uwsgi server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_buffering
     */
     uwsgi_buffering ?: "on" | "off"


     /**
     * Sets the number and size of the
     * buffers used for reading a response from the uwsgi server,
     * for a single connection.
     * By default, the buffer size is equal to one memory page.
     * This is either 4K or 8K, depending on a platform.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_buffers
     */
     uwsgi_buffers ?: any


     /**
     * When buffering of responses from the uwsgi
     * server is enabled, limits the total size of buffers that
     * can be busy sending a response to the client while the response is not
     * yet fully read.
     * In the meantime, the rest of the buffers can be used for reading the response
     * and, if needed, buffering part of the response to a temporary file.
     * By default, size is limited by the size of two buffers set by the
     * uwsgi_buffer_size and uwsgi_buffers directives.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_busy_buffers_size
     */
     uwsgi_busy_buffers_size ?: string


     /**
     * Defines a shared memory zone used for caching.
     * The same zone can be used in several places.
     * Parameter value can contain variables (1.7.9).
     * The off parameter disables caching inherited
     * from the previous configuration level.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_cache
     */
     uwsgi_cache ?: "zone" | "off"


     /**
     * Allows starting a background subrequest
     * to update an expired cache item,
     * while a stale cached response is returned to the client.
     * Note that it is necessary to
     * allow
     * the usage of a stale cached response when it is being updated.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_cache_background_update
     */
     uwsgi_cache_background_update ?: "on" | "off"


     /**
     * Defines conditions under which the response will not be taken from a cache.
     * If at least one value of the string parameters is not empty and is not
     * equal to “0” then the response will not be taken from the cache:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_cache_bypass
     * @example
     * ```
     * uwsgi_cache_bypass $cookie_nocache $arg_nocache$arg_comment;
     * uwsgi_cache_bypass $http_pragma    $http_authorization;
     * ```
     */
     uwsgi_cache_bypass ?: any


     /**
     * Defines a key for caching, for example
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_cache_key
     * @example
     * ```
     * uwsgi_cache_key localhost:9000$request_uri;
     * ```
     */
     uwsgi_cache_key ?: any


     /**
     * When enabled, only one request at a time will be allowed to populate
     * a new cache element identified according to the uwsgi_cache_key
     * directive by passing a request to a uwsgi server.
     * Other requests of the same cache element will either wait
     * for a response to appear in the cache or the cache lock for
     * this element to be released, up to the time set by the
     * uwsgi_cache_lock_timeout directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_cache_lock
     */
     uwsgi_cache_lock ?: "on" | "off"


     /**
     * If the last request passed to the uwsgi server
     * for populating a new cache element
     * has not completed for the specified time,
     * one more request may be passed to the uwsgi server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_cache_lock_age
     */
     uwsgi_cache_lock_age ?: string


     /**
     * Sets a timeout for uwsgi_cache_lock.
     * When the time expires,
     * the request will be passed to the uwsgi server,
     * however, the response will not be cached.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_cache_lock_timeout
     */
     uwsgi_cache_lock_timeout ?: string


     /**
     * Sets an offset in bytes for byte-range requests.
     * If the range is beyond the offset,
     * the range request will be passed to the uwsgi server
     * and the response will not be cached.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_cache_max_range_offset
     */
     uwsgi_cache_max_range_offset ?: any


     /**
     * If the client request method is listed in this directive then
     * the response will be cached.
     * “GET” and “HEAD” methods are always
     * added to the list, though it is recommended to specify them explicitly.
     * See also the uwsgi_no_cache directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_cache_methods
     */
     uwsgi_cache_methods ?: "GET" | "HEAD" | string


     /**
     * Sets the number of requests after which the response
     * will be cached.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_cache_min_uses
     */
     uwsgi_cache_min_uses ?: any


     /**
     * Defines conditions under which the request will be considered a cache
     * purge request.
     * If at least one value of the string parameters is not empty and is not equal
     * to “0” then the cache entry with a corresponding
     * cache key is removed.
     * The result of successful operation is indicated by returning
     * the 204 (No Content) response.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_cache_purge
     * @example
     * ```
     * uwsgi_cache_path /data/nginx/cache keys_zone=cache_zone:10m;
     * 
     * map $request_method $purge_method {
     *     PURGE   1;
     *     default 0;
     * }
     * 
     * server {
     *     ...
     *     location / {
     *         uwsgi_pass        backend;
     *         uwsgi_cache       cache_zone;
     *         uwsgi_cache_key   $uri;
     *         uwsgi_cache_purge $purge_method;
     *     }
     * }
     * ```
     */
     uwsgi_cache_purge ?: any


     /**
     * Enables revalidation of expired cache items using conditional requests with
     * the “If-Modified-Since” and “If-None-Match”
     * header fields.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_cache_revalidate
     */
     uwsgi_cache_revalidate ?: "on" | "off"


     /**
     * Determines in which cases a stale cached response can be used
     * when an error occurs during communication with the uwsgi server.
     * The directive’s parameters match the parameters of the
     * uwsgi_next_upstream directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_cache_use_stale
     */
     uwsgi_cache_use_stale ?: "error" | "timeout" | "invalid_header" | "updating" | "http_500" | "http_503" | "http_403" | "http_404" | "http_429" | string


     /**
     * Sets caching time for different response codes.
     * For example, the following directives
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_cache_valid
     * @example
     * ```
     * uwsgi_cache_valid 200 302 10m;
     * uwsgi_cache_valid 404      1m;
     * uwsgi_cache_valid 5m;
     * uwsgi_cache_valid 200 302 10m;
     * uwsgi_cache_valid 301      1h;
     * uwsgi_cache_valid any      1m;
     * ```
     */
     uwsgi_cache_valid ?: any


     /**
     * Defines a timeout for establishing a connection with a uwsgi server.
     * It should be noted that this timeout cannot usually exceed 75 seconds.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_connect_timeout
     */
     uwsgi_connect_timeout ?: string


     /**
     * Enables byte-range support
     * for both cached and uncached responses from the uwsgi server
     * regardless of the “Accept-Ranges” field in these responses.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_force_ranges
     */
     uwsgi_force_ranges ?: "on" | "off"


     /**
     * By default,
     * nginx does not pass the header fields “Status” and
     * “X-Accel-...” from the response of a uwsgi
     * server to a client.
     * The uwsgi_hide_header directive sets additional fields
     * that will not be passed.
     * If, on the contrary, the passing of fields needs to be permitted,
     * the uwsgi_pass_header directive can be used.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_hide_header
     */
     uwsgi_hide_header ?: any


     /**
     * Determines whether the connection with a uwsgi server should be
     * closed when a client closes the connection without waiting
     * for a response.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_ignore_client_abort
     */
     uwsgi_ignore_client_abort ?: "on" | "off"


     /**
     * Disables processing of certain response header fields from the uwsgi server.
     * The following fields can be ignored: “X-Accel-Redirect”,
     * “X-Accel-Expires”, “X-Accel-Limit-Rate” (1.1.6),
     * “X-Accel-Buffering” (1.1.6),
     * “X-Accel-Charset” (1.1.6), “Expires”,
     * “Cache-Control”, “Set-Cookie” (0.8.44),
     * and “Vary” (1.7.7).
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_ignore_headers
     */
     uwsgi_ignore_headers ?: any


     /**
     * Determines whether a uwsgi server responses with codes greater than or equal
     * to 300 should be passed to a client
     * or be intercepted and redirected to nginx for processing
     * with the error_page directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_intercept_errors
     */
     uwsgi_intercept_errors ?: "on" | "off"


     /**
     * Limits the speed of reading the response from the uwsgi server.
     * The rate is specified in bytes per second.
     * The zero value disables rate limiting.
     * The limit is set per a request, and so if nginx simultaneously opens
     * two connections to the uwsgi server,
     * the overall rate will be twice as much as the specified limit.
     * The limitation works only if
     * buffering of responses from the uwsgi
     * server is enabled.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_limit_rate
     */
     uwsgi_limit_rate ?: any


     /**
     * When buffering of responses from the uwsgi
     * server is enabled, and the whole response does not fit into the buffers
     * set by the uwsgi_buffer_size and uwsgi_buffers
     * directives, a part of the response can be saved to a temporary file.
     * This directive sets the maximum size of the temporary file.
     * The size of data written to the temporary file at a time is set
     * by the uwsgi_temp_file_write_size directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_max_temp_file_size
     */
     uwsgi_max_temp_file_size ?: string


     /**
     * Sets the value of the modifier1 field in the
     * uwsgi
     * packet header.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_modifier1
     */
     uwsgi_modifier1 ?: any


     /**
     * Sets the value of the modifier2 field in the
     * uwsgi
     * packet header.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_modifier2
     */
     uwsgi_modifier2 ?: any


     /**
     * Specifies in which cases a request should be passed to the next server:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_next_upstream
     */
     uwsgi_next_upstream ?: "error" | "timeout" | "invalid_header" | "http_500" | "http_503" | "http_403" | "http_404" | "http_429" | "non_idempotent" | string


     /**
     * Limits the time during which a request can be passed to the
     * next server.
     * The 0 value turns off this limitation.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_next_upstream_timeout
     */
     uwsgi_next_upstream_timeout ?: string


     /**
     * Limits the number of possible tries for passing a request to the
     * next server.
     * The 0 value turns off this limitation.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_next_upstream_tries
     */
     uwsgi_next_upstream_tries ?: any


     /**
     * Defines conditions under which the response will not be saved to a cache.
     * If at least one value of the string parameters is not empty and is not
     * equal to “0” then the response will not be saved:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_no_cache
     * @example
     * ```
     * uwsgi_no_cache $cookie_nocache $arg_nocache$arg_comment;
     * uwsgi_no_cache $http_pragma    $http_authorization;
     * ```
     */
     uwsgi_no_cache ?: any


     /**
     * Sets a parameter that should be passed to the uwsgi server.
     * The value can contain text, variables, and their combination.
     * These directives are inherited from the previous configuration level
     * if and only if there are no uwsgi_param directives
     * defined on the current level.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_param
     * @example
     * ```
     * location / {
     *     include uwsgi_params;
     *     ...
     * }
     * uwsgi_param HTTPS $https if_not_empty;
     * ```
     */
     uwsgi_param ?: any


     /**
     * Sets the protocol and address of a uwsgi server.
     * As a protocol,
     * “uwsgi” or “suwsgi”
     * (secured uwsgi, uwsgi over SSL) can be specified.
     * The address can be specified as a domain name or IP address,
     * and a port:
     *
     * @context location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_pass
     * @example
     * ```
     * uwsgi_pass localhost:9000;
     * uwsgi_pass uwsgi://localhost:9000;
     * uwsgi_pass suwsgi://[2001:db8::1]:9090;
     * uwsgi_pass unix:/tmp/uwsgi.socket;
     * ```
     */
     uwsgi_pass ?: any


     /**
     * Permits passing otherwise disabled header
     * fields from a uwsgi server to a client.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_pass_header
     */
     uwsgi_pass_header ?: any


     /**
     * Indicates whether the original request body is passed
     * to the uwsgi server.
     * See also the uwsgi_pass_request_headers directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_pass_request_body
     */
     uwsgi_pass_request_body ?: "on" | "off"


     /**
     * Indicates whether the header fields of the original request are passed
     * to the uwsgi server.
     * See also the uwsgi_pass_request_body directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_pass_request_headers
     */
     uwsgi_pass_request_headers ?: "on" | "off"


     /**
     * Defines a timeout for reading a response from the uwsgi server.
     * The timeout is set only between two successive read operations,
     * not for the transmission of the whole response.
     * If the uwsgi server does not transmit anything within this time,
     * the connection is closed.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_read_timeout
     */
     uwsgi_read_timeout ?: string


     /**
     * Enables or disables buffering of a client request body.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_request_buffering
     */
     uwsgi_request_buffering ?: "on" | "off"


     /**
     * Sets a timeout for transmitting a request to the uwsgi server.
     * The timeout is set only between two successive write operations,
     * not for the transmission of the whole request.
     * If the uwsgi server does not receive anything within this time,
     * the connection is closed.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_send_timeout
     */
     uwsgi_send_timeout ?: string


     /**
     * Configures the “TCP keepalive” behavior
     * for outgoing connections to a uwsgi server.
     * By default, the operating system’s settings are in effect for the socket.
     * If the directive is set to the value “on”, the
     * SO_KEEPALIVE socket option is turned on for the socket.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_socket_keepalive
     */
     uwsgi_socket_keepalive ?: "on" | "off"


     /**
     * Specifies a file with the certificate in the PEM format
     * used for authentication to a secured uwsgi server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_ssl_certificate
     */
     uwsgi_ssl_certificate ?: any


     /**
     * Specifies a file with the secret key in the PEM format
     * used for authentication to a secured uwsgi server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_ssl_certificate_key
     */
     uwsgi_ssl_certificate_key ?: any


     /**
     * Specifies the enabled ciphers for requests to a secured uwsgi server.
     * The ciphers are specified in the format understood by the OpenSSL library.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_ssl_ciphers
     */
     uwsgi_ssl_ciphers ?: any


     /**
     * Sets arbitrary OpenSSL configuration
     * commands
     * when establishing a connection with the secured uwsgi server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_ssl_conf_command
     */
     uwsgi_ssl_conf_command ?: any


     /**
     * Specifies a file with revoked certificates (CRL)
     * in the PEM format used to verify
     * the certificate of the secured uwsgi server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_ssl_crl
     */
     uwsgi_ssl_crl ?: any


     /**
     * Allows overriding the server name used to
     * verify
     * the certificate of the secured uwsgi server and to be
     * passed through SNI
     * when establishing a connection with the secured uwsgi server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_ssl_name
     */
     uwsgi_ssl_name ?: any


     /**
     * Specifies a file with passphrases for
     * secret keys
     * where each passphrase is specified on a separate line.
     * Passphrases are tried in turn when loading the key.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_ssl_password_file
     */
     uwsgi_ssl_password_file ?: any


     /**
     * Enables the specified protocols for requests to a secured uwsgi server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_ssl_protocols
     */
     uwsgi_ssl_protocols ?: any


     /**
     * Enables or disables passing of the server name through
     * TLS
     * Server Name Indication extension (SNI, RFC 6066)
     * when establishing a connection with the secured uwsgi server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_ssl_server_name
     */
     uwsgi_ssl_server_name ?: "on" | "off"


     /**
     * Determines whether SSL sessions can be reused when working with
     * a secured uwsgi server.
     * If the errors
     * “SSL3_GET_FINISHED:digest check failed”
     * appear in the logs, try disabling session reuse.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_ssl_session_reuse
     */
     uwsgi_ssl_session_reuse ?: "on" | "off"


     /**
     * Specifies a file with trusted CA certificates in the PEM format
     * used to verify
     * the certificate of the secured uwsgi server.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_ssl_trusted_certificate
     */
     uwsgi_ssl_trusted_certificate ?: any


     /**
     * Enables or disables verification of the secured uwsgi server certificate.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_ssl_verify
     */
     uwsgi_ssl_verify ?: "on" | "off"


     /**
     * Sets the verification depth in the secured uwsgi server certificates chain.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_ssl_verify_depth
     */
     uwsgi_ssl_verify_depth ?: any


     /**
     * Enables saving of files to a disk.
     * The on parameter saves files with paths
     * corresponding to the directives
     * alias or
     * root.
     * The off parameter disables saving of files.
     * In addition, the file name can be set explicitly using the
     * string with variables:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_store
     * @example
     * ```
     * uwsgi_store /data/www$original_uri;
     * location /images/ {
     *     root               /data/www;
     *     error_page         404 = /fetch$uri;
     * }
     * 
     * location /fetch/ {
     *     internal;
     * 
     *     uwsgi_pass         backend:9000;
     *     ...
     * 
     *     uwsgi_store        on;
     *     uwsgi_store_access user:rw group:rw all:r;
     *     uwsgi_temp_path    /data/temp;
     * 
     *     alias              /data/www/;
     * }
     * ```
     */
     uwsgi_store ?: "on" | "off" | string


     /**
     * Sets access permissions for newly created files and directories, e.g.:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_store_access
     * @example
     * ```
     * uwsgi_store_access user:rw group:rw all:r;
     * uwsgi_store_access group:rw all:r;
     * ```
     */
     uwsgi_store_access ?: any


     /**
     * Limits the size of data written to a temporary file
     * at a time, when buffering of responses from the uwsgi server
     * to temporary files is enabled.
     * By default, size is limited by two buffers set by the
     * uwsgi_buffer_size and uwsgi_buffers directives.
     * The maximum size of a temporary file is set by the
     * uwsgi_max_temp_file_size directive.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_temp_file_write_size
     */
     uwsgi_temp_file_write_size ?: string


     /**
     * Defines a directory for storing temporary files
     * with data received from uwsgi servers.
     * Up to three-level subdirectory hierarchy can be used underneath the specified
     * directory.
     * For example, in the following configuration
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_uwsgi_module.html#uwsgi_temp_path
     * @example
     * ```
     * uwsgi_temp_path /spool/nginx/uwsgi_temp 1 2;
     * /spool/nginx/uwsgi_temp/7/45/00000123457
     * ```
     */
     uwsgi_temp_path ?: any


     /**
     * Sets the maximum size of chunks
     * into which the response body is sliced.
     * A too low value results in higher overhead.
     * A too high value impairs prioritization due to
     * 
     * HOL blocking.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_v2_module.html#http2_chunk_size
     */
     http2_chunk_size ?: string


     /**
     * Pre-emptively sends
     * (pushes)
     * a request to the specified uri
     * along with the response to the original request.
     * Only relative URIs with absolute path will be processed,
     * for example:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_v2_module.html#http2_push
     * @example
     * ```
     * http2_push /static/css/main.css;
     * ```
     */
     http2_push ?: "uri" | "off"


     /**
     * Enables automatic conversion of
     * preload
     * links
     * specified in the “Link” response header fields into
     * push
     * requests.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_v2_module.html#http2_push_preload
     */
     http2_push_preload ?: "on" | "off"


     /**
     * Specifies the DTD file that declares character entities.
     * This file is compiled at the configuration stage.
     * For technical reasons, the module is unable to use the
     * external subset declared in the processed XML, so it is
     * ignored and a specially defined file is used instead.
     * This file should not describe the XML structure.
     * It is enough to declare just the required character entities, for example:
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_xslt_module.html#xml_entities
     * @example
     * ```
     * <!ENTITY nbsp "&#xa0;">
     * ```
     */
     xml_entities ?: string


     /**
     * Allows preserving the “Last-Modified” header field
     * from the original response during XSLT transformations
     * to facilitate response caching.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_xslt_module.html#xslt_last_modified
     */
     xslt_last_modified ?: "on" | "off"


     /**
     * Defines the parameters for XSLT stylesheets.
     * The value is treated as an XPath expression.
     * The value can contain variables.
     * To pass a string value to a stylesheet,
     * the xslt_string_param directive can be used.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_xslt_module.html#xslt_param
     */
     xslt_param ?: any


     /**
     * Defines the string parameters for XSLT stylesheets.
     * XPath expressions in the value are not interpreted.
     * The value can contain variables.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_xslt_module.html#xslt_string_param
     */
     xslt_string_param ?: any


     /**
     * Defines the XSLT stylesheet and its optional parameters.
     * A stylesheet is compiled at the configuration stage.
     *
     * @context location
     * @see https://nginx.org/en/docs/http/ngx_http_xslt_module.html#xslt_stylesheet
     * @example
     * ```
     * param1='http%3A//www.example.com':param2=value2
     * location / {
     *     xslt_stylesheet /site/xslt/one.xslt
     *                     $arg_xslt_params
     *                     param1='$value1':param2=value2
     *                     param3=value3;
     * }
     * ```
     */
     xslt_stylesheet ?: any


     /**
     * Enables transformations in responses with the specified MIME types
     * in addition to “text/xml”.
     * The special value “*” matches any MIME type (0.8.29).
     * If the transformation result is an HTML response, its MIME type
     * is changed to “text/html”.
     *
     * @context http, server, location
     * @see https://nginx.org/en/docs/http/ngx_http_xslt_module.html#xslt_types
     */
     xslt_types ?: any


}

export interface NginxEventsDirectives extends NginxAnyDirectives {
     /**
     * If accept_mutex is enabled,
     * worker processes will accept new connections by turn.
     * Otherwise, all worker processes will be notified about new connections,
     * and if volume of new connections is low, some of the worker processes
     * may just waste system resources.
     *
     * @context events
     * @see https://nginx.org/en/docs/ngx_core_module.html#accept_mutex
     */
     accept_mutex ?: "on" | "off"


     /**
     * If accept_mutex is enabled, specifies the maximum time
     * during which a worker process will try to restart accepting new
     * connections if another worker process is currently accepting
     * new connections.
     *
     * @context events
     * @see https://nginx.org/en/docs/ngx_core_module.html#accept_mutex_delay
     */
     accept_mutex_delay ?: string


     /**
     * Enables debugging log for selected client connections.
     * Other connections will use logging level set by the
     * error_log directive.
     * Debugged connections are specified by IPv4 or IPv6 (1.3.0, 1.2.1)
     * address or network.
     * A connection may also be specified using a hostname.
     * For connections using UNIX-domain sockets (1.3.0, 1.2.1),
     * debugging log is enabled by the “unix:” parameter.
     *
     * @context events
     * @see https://nginx.org/en/docs/ngx_core_module.html#debug_connection
     * @example
     * ```
     * events {
     *     debug_connection 127.0.0.1;
     *     debug_connection localhost;
     *     debug_connection 192.0.2.0/24;
     *     debug_connection ::1;
     *     debug_connection 2001:0db8::/32;
     *     debug_connection unix:;
     *     ...
     * }
     * ```
     */
     debug_connection ?: "address" | "CIDR" | "unix:"


     /**
     * If multi_accept is disabled, a worker process
     * will accept one new connection at a time.
     * Otherwise, a worker process
     * will accept all new connections at a time.
     *
     * @context events
     * @see https://nginx.org/en/docs/ngx_core_module.html#multi_accept
     */
     multi_accept ?: "on" | "off"


     /**
     * Specifies the connection processing
     * method to use.
     * There is normally no need to specify it explicitly, because nginx will
     * by default use the most efficient method.
     *
     * @context events
     * @see https://nginx.org/en/docs/ngx_core_module.html#use
     */
     use ?: any


     /**
     * When using aio
     * with the epoll
     * connection processing method, sets the maximum number of
     * outstanding asynchronous I/O operations
     * for a single worker process.
     *
     * @context events
     * @see https://nginx.org/en/docs/ngx_core_module.html#worker_aio_requests
     */
     worker_aio_requests ?: any


     /**
     * Sets the maximum number of simultaneous connections that
     * can be opened by a worker process.
     *
     * @context events
     * @see https://nginx.org/en/docs/ngx_core_module.html#worker_connections
     */
     worker_connections ?: any


}

export interface NginxStreamDirectives extends NginxAnyDirectives {
     /**
     * Configures logging.
     * Several logs can be specified on the same configuration level (1.5.2).
     * If on the main configuration level writing a log to a file
     * is not explicitly defined, the default file will be used.
     *
     * @context main, http, mail, stream, server, location
     * @see https://nginx.org/en/docs/ngx_core_module.html#error_log
     */
     error_log ?: any


     /**
     * Specifies a size of the
     * preread buffer.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_core_module.html#preread_buffer_size
     */
     preread_buffer_size ?: string


     /**
     * Specifies a timeout of the
     * preread phase.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_core_module.html#preread_timeout
     */
     preread_timeout ?: any


     /**
     * Specifies a timeout for
     * reading the PROXY protocol header to complete.
     * If no entire header is transmitted within this time,
     * the connection is closed.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_core_module.html#proxy_protocol_timeout
     */
     proxy_protocol_timeout ?: any


     /**
     * Configures name servers used to resolve names of upstream servers
     * into addresses, for example:
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_core_module.html#resolver
     * @example
     * ```
     * resolver 127.0.0.1 [::1]:5353;
     * resolver 127.0.0.1 [::1]:5353 valid=30s;
     * ```
     */
     resolver ?: any


     /**
     * Sets a timeout for name resolution, for example:
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_core_module.html#resolver_timeout
     * @example
     * ```
     * resolver_timeout 5s;
     * ```
     */
     resolver_timeout ?: string


     /**
     * Sets the configuration for a server.
     *
     * @context stream
     * @see https://nginx.org/en/docs/stream/ngx_stream_core_module.html#server
     */
     server ?: NginxServerDirectives[]


     /**
     * Enables or disables the use of the TCP_NODELAY option.
     * The option is enabled for both client and proxied server connections.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_core_module.html#tcp_nodelay
     */
     tcp_nodelay ?: "on" | "off"


     /**
     * Sets the bucket size for the variables hash table.
     * The details of setting up hash tables are provided in a separate
     * document.
     *
     * @context stream
     * @see https://nginx.org/en/docs/stream/ngx_stream_core_module.html#variables_hash_bucket_size
     */
     variables_hash_bucket_size ?: string


     /**
     * Sets the maximum size of the variables hash table.
     * The details of setting up hash tables are provided in a separate
     * document.
     *
     * @context stream
     * @see https://nginx.org/en/docs/stream/ngx_stream_core_module.html#variables_hash_max_size
     */
     variables_hash_max_size ?: string


     /**
     * Allows access for the specified network or address.
     * If the special value unix: is specified,
     * allows access for all UNIX-domain sockets.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_access_module.html#allow
     */
     allow ?: "address" | "CIDR" | "unix:" | "all" | string[]


     /**
     * Denies access for the specified network or address.
     * If the special value unix: is specified,
     * denies access for all UNIX-domain sockets.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_access_module.html#deny
     */
     deny ?: "address" | "CIDR" | "unix:" | "all" | string[]


     /**
     * Describes the dependency of values of the specified variable
     * on the client IP address.
     * By default, the address is taken from the $remote_addr variable,
     * but it can also be taken from another variable, for example:
     *
     * @context stream
     * @see https://nginx.org/en/docs/stream/ngx_stream_geo_module.html#geo
     * @example
     * ```
     * geo $arg_remote_addr $geo {
     *     ...;
     * }
     * geo $country {
     *     default        ZZ;
     *     include        conf/geo.conf;
     *     delete         127.0.0.0/16;
     * 
     *     127.0.0.0/24   US;
     *     127.0.0.1/32   RU;
     *     10.1.0.0/16    RU;
     *     192.168.1.0/24 UK;
     * }
     * 10.2.0.0/16    RU;
     * 192.168.2.0/24 RU;
     * geo $country {
     *     ranges;
     *     default                   ZZ;
     *     127.0.0.0-127.0.0.0       US;
     *     127.0.0.1-127.0.0.1       RU;
     *     127.0.0.1-127.0.0.255     US;
     *     10.1.0.0-10.1.255.255     RU;
     *     192.168.1.0-192.168.1.255 UK;
     * }
     * ```
     */
     geo ?: any


     /**
     * Specifies a database used to determine the country
     * depending on the client IP address.
     * The following variables are available when using this database:
     *
     * @context stream
     * @see https://nginx.org/en/docs/stream/ngx_stream_geoip_module.html#geoip_country
     */
     geoip_country ?: any


     /**
     * Specifies a database used to determine the country, region, and city
     * depending on the client IP address.
     * The following variables are available when using this database:
     *
     * @context stream
     * @see https://nginx.org/en/docs/stream/ngx_stream_geoip_module.html#geoip_city
     */
     geoip_city ?: any


     /**
     * Specifies a database used to determine the organization
     * depending on the client IP address.
     * The following variable is available when using this database:
     *
     * @context stream
     * @see https://nginx.org/en/docs/stream/ngx_stream_geoip_module.html#geoip_org
     */
     geoip_org ?: any


     /**
     * Sets an njs function which will be called at the
     * access phase.
     * Since 0.4.0,
     * a module function can be referenced.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_js_module.html#js_access
     */
     js_access ?: "function" | "module.function"


     /**
     * Specifies the enabled ciphers for HTTPS connections
     * with Fetch API.
     * The ciphers are specified in the format understood by the OpenSSL library.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_js_module.html#js_fetch_ciphers
     */
     js_fetch_ciphers ?: any


     /**
     * Enables the specified protocols for HTTPS connections
     * with Fetch API.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_js_module.html#js_fetch_protocols
     */
     js_fetch_protocols ?: any


     /**
     * Specifies a file with trusted CA certificates in the PEM format
     * used to
     * verify
     * the HTTPS certificate
     * with Fetch API.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_js_module.html#js_fetch_trusted_certificate
     */
     js_fetch_trusted_certificate ?: any


     /**
     * Sets the verification depth in the HTTPS server certificates chain
     * with Fetch API.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_js_module.html#js_fetch_verify_depth
     */
     js_fetch_verify_depth ?: any


     /**
     * Sets a data filter.
     * Since 0.4.0,
     * a module function can be referenced.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_js_module.html#js_filter
     */
     js_filter ?: "function" | "module.function"


     /**
     * Imports a module that implements location and variable handlers in njs.
     * The export_name is used as a namespace
     * to access module functions.
     * If the export_name is not specified,
     * the module name will be used as a namespace.
     *
     * @context stream
     * @see https://nginx.org/en/docs/stream/ngx_stream_js_module.html#js_import
     * @example
     * ```
     * js_import stream.js;
     * ```
     */
     js_import ?: "module.js" | "export_name from module.js"


     /**
     * Specifies a file that implements server and variable handlers in njs:
     *
     * @context stream
     * @see https://nginx.org/en/docs/stream/ngx_stream_js_module.html#js_include
     * @example
     * ```
     * nginx.conf:
     * js_include stream.js;
     * js_set     $js_addr address;
     * server {
     *     listen 127.0.0.1:12345;
     *     return $js_addr;
     * }
     * 
     * stream.js:
     * function address(s) {
     *     return s.remoteAddress;
     * }
     * ```
     */
     js_include ?: any


     /**
     * Sets an additional path for njs modules.
     *
     * @context stream
     * @see https://nginx.org/en/docs/stream/ngx_stream_js_module.html#js_path
     */
     js_path ?: string


     /**
     * Sets an njs function which will be called at the
     * preread phase.
     * Since 0.4.0,
     * a module function can be referenced.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_js_module.html#js_preread
     */
     js_preread ?: "function" | "module.function"


     /**
     * Sets an njs function
     * for the specified variable.
     * Since 0.4.0,
     * a module function can be referenced.
     *
     * @context stream
     * @see https://nginx.org/en/docs/stream/ngx_stream_js_module.html#js_set
     */
     js_set ?: "$variable function" | "module.function"


     /**
     * Declares
     * a writable
     * variable.
     * The value can contain text, variables, and their combination.
     *
     * @context stream
     * @see https://nginx.org/en/docs/stream/ngx_stream_js_module.html#js_var
     */
     js_var ?: any


     /**
     * Creates a new $variable whose value
     * is looked up by the key in the key-value database.
     * Matching rules are defined by the
     * type parameter of the
     * keyval_zone directive.
     * The database is stored in a shared memory zone
     * specified by the zone parameter.
     *
     * @context stream
     * @see https://nginx.org/en/docs/stream/ngx_stream_keyval_module.html#keyval
     */
     keyval ?: any


     /**
     * Sets the name and size of the shared memory zone
     * that keeps the key-value database.
     * Key-value pairs are managed by the
     * API.
     *
     * @context stream
     * @see https://nginx.org/en/docs/stream/ngx_stream_keyval_module.html#keyval_zone
     * @example
     * ```
     * keyval_zone zone=one:32k state=/var/lib/nginx/state/one.keyval; # path for Linux
     * keyval_zone zone=one:32k state=/var/db/nginx/state/one.keyval;  # path for FreeBSD
     * ```
     */
     keyval_zone ?: "zone=name:size    [state=file]    [timeout=time]    [type=string" | "ip" | "prefix]    [sync]"


     /**
     * Sets the shared memory zone
     * and the maximum allowed number of connections for a given key value.
     * When this limit is exceeded, the server will close the connection.
     * For example, the directives
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_limit_conn_module.html#limit_conn
     * @example
     * ```
     * limit_conn_zone $binary_remote_addr zone=addr:10m;
     * 
     * server {
     *     ...
     *     limit_conn addr 1;
     * }
     * ```
     */
     limit_conn ?: any


     /**
     * Enables the dry run mode.
     * In this mode, the number of connections is not limited, however,
     * in the shared memory zone, the number of excessive connections is accounted
     * as usual.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_limit_conn_module.html#limit_conn_dry_run
     */
     limit_conn_dry_run ?: "on" | "off"


     /**
     * Sets the desired logging level for cases when the server
     * limits the number of connections.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_limit_conn_module.html#limit_conn_log_level
     */
     limit_conn_log_level ?: "info" | "notice" | "warn" | "error"


     /**
     * Sets parameters for a shared memory zone
     * that will keep states for various keys.
     * In particular, the state includes the current number of connections.
     * The key can contain text, variables,
     * and their combinations (1.11.2).
     * Connections with an empty key value are not accounted.
     * Usage example:
     *
     * @context stream
     * @see https://nginx.org/en/docs/stream/ngx_stream_limit_conn_module.html#limit_conn_zone
     * @example
     * ```
     * limit_conn_zone $binary_remote_addr zone=addr:10m;
     * ```
     */
     limit_conn_zone ?: any


     /**
     * Sets the path, format,
     * and configuration for a buffered log write.
     * Several logs can be specified on the same configuration level.
     * Logging to syslog
     * can be configured by specifying
     * the “syslog:” prefix in the first parameter.
     * The special value off cancels all
     * access_log directives on the current level.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_log_module.html#access_log
     * @example
     * ```
     * access_log /path/to/log.gz basic gzip flush=5m;
     * ```
     */
     access_log ?: any


     /**
     * Specifies the log format, for example:
     *
     * @context stream
     * @see https://nginx.org/en/docs/stream/ngx_stream_log_module.html#log_format
     * @example
     * ```
     * log_format proxy '$remote_addr [$time_local] '
     *                  '$protocol $status $bytes_sent $bytes_received '
     *                  '$session_time "$upstream_addr" '
     *                  '"$upstream_bytes_sent" "$upstream_bytes_received" "$upstream_connect_time"';
     * ```
     */
     log_format ?: "name    [escape=default" | "json" | string


     /**
     * Defines a cache that stores the file descriptors of frequently used logs
     * whose names contain variables.
     * The directive has the following parameters:
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_log_module.html#open_log_file_cache
     * @example
     * ```
     * open_log_file_cache max=1000 inactive=20s valid=1m min_uses=2;
     * ```
     */
     open_log_file_cache ?: any


     /**
     * Creates a new variable whose value
     * depends on values of one or more of the source variables
     * specified in the first parameter.
     *
     * @context stream
     * @see https://nginx.org/en/docs/stream/ngx_stream_map_module.html#map
     */
     map ?: any


     /**
     * Sets the bucket size for the map variables hash tables.
     * Default value depends on the processor’s cache line size.
     * The details of setting up hash tables are provided in a separate
     * document.
     *
     * @context stream
     * @see https://nginx.org/en/docs/stream/ngx_stream_map_module.html#map_hash_bucket_size
     */
     map_hash_bucket_size ?: string


     /**
     * Sets the maximum size of the map variables
     * hash tables.
     * The details of setting up hash tables are provided in a separate
     * document.
     *
     * @context stream
     * @see https://nginx.org/en/docs/stream/ngx_stream_map_module.html#map_hash_max_size
     */
     map_hash_max_size ?: string


     /**
     * Makes outgoing connections to a proxied server originate
     * from the specified local IP address.
     * Parameter value can contain variables (1.11.2).
     * The special value off cancels the effect
     * of the proxy_bind directive
     * inherited from the previous configuration level, which allows the
     * system to auto-assign the local IP address.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_proxy_module.html#proxy_bind
     * @example
     * ```
     * proxy_bind $remote_addr transparent;
     * ```
     */
     proxy_bind ?: "address    [transparent]" | "off"


     /**
     * Sets the size of the buffer used for reading data
     * from the proxied server.
     * Also sets the size of the buffer used for reading data
     * from the client.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_proxy_module.html#proxy_buffer_size
     */
     proxy_buffer_size ?: string


     /**
     * Defines a timeout for establishing a connection with a proxied server.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_proxy_module.html#proxy_connect_timeout
     */
     proxy_connect_timeout ?: string


     /**
     * Limits the speed of reading the data from the proxied server.
     * The rate is specified in bytes per second.
     * The zero value disables rate limiting.
     * The limit is set per a connection, so if nginx simultaneously opens
     * two connections to the proxied server,
     * the overall rate will be twice as much as the specified limit.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_proxy_module.html#proxy_download_rate
     * @example
     * ```
     * map $slow $rate {
     *     1     4k;
     *     2     8k;
     * }
     * 
     * proxy_download_rate $rate;
     * ```
     */
     proxy_download_rate ?: any


     /**
     * Enables or disables closing
     * each direction of a TCP connection independently (“TCP half-close”).
     * If enabled, proxying over TCP will be kept
     * until both sides close the connection.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_proxy_module.html#proxy_half_close
     */
     proxy_half_close ?: "on" | "off"


     /**
     * When a connection to the proxied server cannot be established, determines
     * whether a client connection will be passed to the next server.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_proxy_module.html#proxy_next_upstream
     */
     proxy_next_upstream ?: "on" | "off"


     /**
     * Limits the time allowed to pass a connection to the
     * next server.
     * The 0 value turns off this limitation.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_proxy_module.html#proxy_next_upstream_timeout
     */
     proxy_next_upstream_timeout ?: string


     /**
     * Limits the number of possible tries for passing a connection to the
     * next server.
     * The 0 value turns off this limitation.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_proxy_module.html#proxy_next_upstream_tries
     */
     proxy_next_upstream_tries ?: any


     /**
     * Enables the
     * PROXY
     * protocol for connections to a proxied server.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_proxy_module.html#proxy_protocol
     */
     proxy_protocol ?: "on" | "off"


     /**
     * Sets the number of client datagrams at which
     * binding between a client and existing UDP stream session is dropped.
     * After receiving the specified number of datagrams, next datagram
     * from the same client starts a new session.
     * The session terminates when all client datagrams are transmitted
     * to a proxied server and the expected number of
     * responses is received,
     * or when it reaches a timeout.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_proxy_module.html#proxy_requests
     */
     proxy_requests ?: any


     /**
     * Sets the number of datagrams expected from the proxied server
     * in response to a client datagram
     * if the UDP
     * protocol is used.
     * The number serves as a hint for session termination.
     * By default, the number of datagrams is not limited.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_proxy_module.html#proxy_responses
     */
     proxy_responses ?: any


     /**
     * Enables terminating all sessions to a proxied server
     * after it was removed from the group or marked as permanently unavailable.
     * This can occur because of
     * re-resolve
     * or with the API
     * DELETE
     * command.
     * A server can be marked as permanently unavailable if it is considered
     * unhealthy
     * or with the API
     * PATCH
     * command.
     * Each session is terminated when the next
     * read or write event is processed for the client or proxied server.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_proxy_module.html#proxy_session_drop
     */
     proxy_session_drop ?: "on" | "off"


     /**
     * Configures the “TCP keepalive” behavior
     * for outgoing connections to a proxied server.
     * By default, the operating system’s settings are in effect for the socket.
     * If the directive is set to the value “on”, the
     * SO_KEEPALIVE socket option is turned on for the socket.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_proxy_module.html#proxy_socket_keepalive
     */
     proxy_socket_keepalive ?: "on" | "off"


     /**
     * Enables the SSL/TLS protocol for connections to a proxied server.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_proxy_module.html#proxy_ssl
     */
     proxy_ssl ?: "on" | "off"


     /**
     * Specifies a file with the certificate in the PEM format
     * used for authentication to a proxied server.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_proxy_module.html#proxy_ssl_certificate
     */
     proxy_ssl_certificate ?: any


     /**
     * Specifies a file with the secret key in the PEM format
     * used for authentication to a proxied server.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_proxy_module.html#proxy_ssl_certificate_key
     */
     proxy_ssl_certificate_key ?: any


     /**
     * Specifies the enabled ciphers for connections to a proxied server.
     * The ciphers are specified in the format understood by the OpenSSL library.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_proxy_module.html#proxy_ssl_ciphers
     */
     proxy_ssl_ciphers ?: any


     /**
     * Sets arbitrary OpenSSL configuration
     * commands
     * when establishing a connection with the proxied server.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_proxy_module.html#proxy_ssl_conf_command
     */
     proxy_ssl_conf_command ?: any


     /**
     * Specifies a file with revoked certificates (CRL)
     * in the PEM format used to verify
     * the certificate of the proxied server.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_proxy_module.html#proxy_ssl_crl
     */
     proxy_ssl_crl ?: any


     /**
     * Allows overriding the server name used to
     * verify
     * the certificate of the proxied server and to be
     * passed through SNI
     * when establishing a connection with the proxied server.
     * The server name can also be specified using variables (1.11.3).
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_proxy_module.html#proxy_ssl_name
     */
     proxy_ssl_name ?: any


     /**
     * Specifies a file with passphrases for
     * secret keys
     * where each passphrase is specified on a separate line.
     * Passphrases are tried in turn when loading the key.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_proxy_module.html#proxy_ssl_password_file
     */
     proxy_ssl_password_file ?: any


     /**
     * Enables the specified protocols for connections to a proxied server.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_proxy_module.html#proxy_ssl_protocols
     */
     proxy_ssl_protocols ?: any


     /**
     * Enables or disables passing of the server name through
     * TLS
     * Server Name Indication extension (SNI, RFC 6066)
     * when establishing a connection with the proxied server.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_proxy_module.html#proxy_ssl_server_name
     */
     proxy_ssl_server_name ?: "on" | "off"


     /**
     * Determines whether SSL sessions can be reused when working with
     * the proxied server.
     * If the errors
     * “SSL3_GET_FINISHED:digest check failed”
     * appear in the logs, try disabling session reuse.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_proxy_module.html#proxy_ssl_session_reuse
     */
     proxy_ssl_session_reuse ?: "on" | "off"


     /**
     * Specifies a file with trusted CA certificates in the PEM format
     * used to verify
     * the certificate of the proxied server.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_proxy_module.html#proxy_ssl_trusted_certificate
     */
     proxy_ssl_trusted_certificate ?: any


     /**
     * Enables or disables verification of the proxied server certificate.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_proxy_module.html#proxy_ssl_verify
     */
     proxy_ssl_verify ?: "on" | "off"


     /**
     * Sets the verification depth in the proxied server certificates chain.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_proxy_module.html#proxy_ssl_verify_depth
     */
     proxy_ssl_verify_depth ?: any


     /**
     * Sets the timeout between two successive
     * read or write operations on client or proxied server connections.
     * If no data is transmitted within this time, the connection is closed.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_proxy_module.html#proxy_timeout
     */
     proxy_timeout ?: any


     /**
     * Limits the speed of reading the data from the client.
     * The rate is specified in bytes per second.
     * The zero value disables rate limiting.
     * The limit is set per a connection, so if the client simultaneously opens
     * two connections,
     * the overall rate will be twice as much as the specified limit.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_proxy_module.html#proxy_upload_rate
     * @example
     * ```
     * map $slow $rate {
     *     1     4k;
     *     2     8k;
     * }
     * 
     * proxy_upload_rate $rate;
     * ```
     */
     proxy_upload_rate ?: any


     /**
     * Defines trusted addresses that are known to send correct
     * replacement addresses.
     * If the special value unix: is specified,
     * all UNIX-domain sockets will be trusted.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_realip_module.html#set_real_ip_from
     */
     set_real_ip_from ?: "address" | "CIDR" | "unix:"


     /**
     * Creates a variable for A/B testing, for example:
     *
     * @context stream
     * @see https://nginx.org/en/docs/stream/ngx_stream_split_clients_module.html#split_clients
     * @example
     * ```
     * split_clients "${remote_addr}AAA" $variant {
     *                0.5%               .one;
     *                2.0%               .two;
     *                *                  "";
     * }
     * ```
     */
     split_clients ?: any


     /**
     * Specifies the list of supported
     * ALPN protocols.
     * One of the protocols must be
     * negotiated if the client uses ALPN:
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_ssl_module.html#ssl_alpn
     * @example
     * ```
     * map $ssl_alpn_protocol $proxy {
     *     h2                127.0.0.1:8001;
     *     http/1.1          127.0.0.1:8002;
     * }
     * 
     * server {
     *     listen      12346;
     *     proxy_pass  $proxy;
     *     ssl_alpn    h2 http/1.1;
     * }
     * ```
     */
     ssl_alpn ?: any


     /**
     * Specifies a file with the certificate in the PEM format
     * for the given server.
     * If intermediate certificates should be specified in addition to a primary
     * certificate, they should be specified in the same file in the following
     * order: the primary certificate comes first, then the intermediate certificates.
     * A secret key in the PEM format may be placed in the same file.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_ssl_module.html#ssl_certificate
     * @example
     * ```
     * server {
     *     listen              12345 ssl;
     * 
     *     ssl_certificate     example.com.rsa.crt;
     *     ssl_certificate_key example.com.rsa.key;
     * 
     *     ssl_certificate     example.com.ecdsa.crt;
     *     ssl_certificate_key example.com.ecdsa.key;
     * 
     *     ...
     * }
     * ssl_certificate     $ssl_server_name.crt;
     * ssl_certificate_key $ssl_server_name.key;
     * ```
     */
     ssl_certificate ?: any


     /**
     * Specifies a file with the secret key in the PEM format
     * for the given server.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_ssl_module.html#ssl_certificate_key
     */
     ssl_certificate_key ?: any


     /**
     * Specifies the enabled ciphers.
     * The ciphers are specified in the format understood by the
     * OpenSSL library, for example:
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_ssl_module.html#ssl_ciphers
     * @example
     * ```
     * ssl_ciphers ALL:!aNULL:!EXPORT56:RC4+RSA:+HIGH:+MEDIUM:+LOW:+SSLv2:+EXP;
     * ```
     */
     ssl_ciphers ?: any


     /**
     * Specifies a file with trusted CA certificates in the PEM format
     * used to verify client certificates.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_ssl_module.html#ssl_client_certificate
     */
     ssl_client_certificate ?: any


     /**
     * Sets arbitrary OpenSSL configuration
     * commands.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_ssl_module.html#ssl_conf_command
     * @example
     * ```
     * ssl_conf_command Options PrioritizeChaCha;
     * ssl_conf_command Ciphersuites TLS_CHACHA20_POLY1305_SHA256;
     * ```
     */
     ssl_conf_command ?: any


     /**
     * Specifies a file with revoked certificates (CRL)
     * in the PEM format used to verify
     * client certificates.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_ssl_module.html#ssl_crl
     */
     ssl_crl ?: any


     /**
     * Specifies a file with DH parameters for DHE ciphers.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_ssl_module.html#ssl_dhparam
     */
     ssl_dhparam ?: any


     /**
     * Specifies a curve for ECDHE ciphers.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_ssl_module.html#ssl_ecdh_curve
     * @example
     * ```
     * ssl_ecdh_curve prime256v1:secp384r1;
     * ```
     */
     ssl_ecdh_curve ?: any


     /**
     * Specifies a timeout for the SSL handshake to complete.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_ssl_module.html#ssl_handshake_timeout
     */
     ssl_handshake_timeout ?: string


     /**
     * Specifies a file with passphrases for
     * secret keys
     * where each passphrase is specified on a separate line.
     * Passphrases are tried in turn when loading the key.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_ssl_module.html#ssl_password_file
     * @example
     * ```
     * stream {
     *     ssl_password_file /etc/keys/global.pass;
     *     ...
     * 
     *     server {
     *         listen 127.0.0.1:12345;
     *         ssl_certificate_key /etc/keys/first.key;
     *     }
     * 
     *     server {
     *         listen 127.0.0.1:12346;
     * 
     *         # named pipe can also be used instead of a file
     *         ssl_password_file /etc/keys/fifo;
     *         ssl_certificate_key /etc/keys/second.key;
     *     }
     * }
     * ```
     */
     ssl_password_file ?: any


     /**
     * Specifies that server ciphers should be preferred over client ciphers
     * when the SSLv3 and TLS protocols are used.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_ssl_module.html#ssl_prefer_server_ciphers
     */
     ssl_prefer_server_ciphers ?: "on" | "off"


     /**
     * Enables the specified protocols.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_ssl_module.html#ssl_protocols
     */
     ssl_protocols ?: any


     /**
     * Sets the types and sizes of caches that store session parameters.
     * A cache can be of any of the following types:
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_ssl_module.html#ssl_session_cache
     * @example
     * ```
     * ssl_session_cache builtin:1000 shared:SSL:10m;
     * ```
     */
     ssl_session_cache ?: "off" | "none" | "[builtin[:size]]    [shared:name:size]"


     /**
     * Sets a file with the secret key used to encrypt
     * and decrypt TLS session tickets.
     * The directive is necessary if the same key has to be shared between
     * multiple servers.
     * By default, a randomly generated key is used.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_ssl_module.html#ssl_session_ticket_key
     * @example
     * ```
     * ssl_session_ticket_key current.key;
     * ssl_session_ticket_key previous.key;
     * openssl rand 80 > ticket.key
     * ```
     */
     ssl_session_ticket_key ?: any


     /**
     * Enables or disables session resumption through
     * TLS session tickets.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_ssl_module.html#ssl_session_tickets
     */
     ssl_session_tickets ?: "on" | "off"


     /**
     * Specifies a time during which a client may reuse the
     * session parameters.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_ssl_module.html#ssl_session_timeout
     */
     ssl_session_timeout ?: string


     /**
     * Specifies a file with trusted CA certificates in the PEM format
     * used to verify client certificates.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_ssl_module.html#ssl_trusted_certificate
     */
     ssl_trusted_certificate ?: any


     /**
     * Enables verification of client certificates.
     * The verification result is stored in the
     * $ssl_client_verify variable.
     * If an error has occurred during the client certificate verification
     * or a client has not presented the required certificate,
     * the connection is closed.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_ssl_module.html#ssl_verify_client
     */
     ssl_verify_client ?: "on" | "off" | "optional" | "optional_no_ca"


     /**
     * Sets the verification depth in the client certificates chain.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_ssl_module.html#ssl_verify_depth
     */
     ssl_verify_depth ?: any


     /**
     * Enables extracting information from the ClientHello message at
     * the preread phase.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_ssl_preread_module.html#ssl_preread
     */
     ssl_preread ?: "on" | "off"


     /**
     * Defines a group of servers.
     * Servers can listen on different ports.
     * In addition, servers listening on TCP and UNIX-domain sockets
     * can be mixed.
     *
     * @context stream
     * @see https://nginx.org/en/docs/stream/ngx_stream_upstream_module.html#upstream
     * @example
     * ```
     * upstream backend {
     *     server backend1.example.com:12345 weight=5;
     *     server 127.0.0.1:12345            max_fails=3 fail_timeout=30s;
     *     server unix:/tmp/backend2;
     *     server backend3.example.com:12345 resolve;
     * 
     *     server backup1.example.com:12345  backup;
     * }
     * ```
     */
     upstream ?: any


     /**
     * Overrides the
     * proxy_timeout
     * value for health checks.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_upstream_hc_module.html#health_check_timeout
     */
     health_check_timeout ?: any


     /**
     * Defines the named test set used to verify server responses to health checks.
     *
     * @context stream
     * @see https://nginx.org/en/docs/stream/ngx_stream_upstream_hc_module.html#match
     * @example
     * ```
     * upstream backend {
     *     zone     upstream_backend 10m;
     *     server   127.0.0.1:12345;
     * }
     * 
     * match http {
     *     send     "GET / HTTP/1.0\r\nHost: localhost\r\n\r\n";
     *     expect ~ "200 OK";
     * }
     * 
     * server {
     *     listen       12346;
     *     proxy_pass   backend;
     *     health_check match=http;
     * }
     * ```
     */
     match ?: any


     /**
     * Sets the number and size of the
     * per-zone buffers used for pushing zone contents.
     * By default, the buffer size is equal to one memory page.
     * This is either 4K or 8K, depending on a platform.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_zone_sync_module.html#zone_sync_buffers
     */
     zone_sync_buffers ?: any


     /**
     * Defines an interval between connection attempts to another cluster node.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_zone_sync_module.html#zone_sync_connect_retry_interval
     */
     zone_sync_connect_retry_interval ?: string


     /**
     * Defines a timeout for establishing a connection with another cluster node.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_zone_sync_module.html#zone_sync_connect_timeout
     */
     zone_sync_connect_timeout ?: string


     /**
     * Defines an interval for polling updates in a shared memory zone.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_zone_sync_module.html#zone_sync_interval
     */
     zone_sync_interval ?: string


     /**
     * Sets size of a per-connection receive buffer used to parse
     * incoming stream of synchronization messages.
     * The buffer size must be equal or greater than one of the
     * zone_sync_buffers.
     * By default, the buffer size is equal to
     * zone_sync_buffers size
     * multiplied by number.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_zone_sync_module.html#zone_sync_recv_buffer_size
     */
     zone_sync_recv_buffer_size ?: string


     /**
     * Enables the SSL/TLS protocol for connections to another cluster server.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_zone_sync_module.html#zone_sync_ssl
     */
     zone_sync_ssl ?: "on" | "off"


     /**
     * Specifies a file with the certificate in the PEM format
     * used for authentication to another cluster server.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_zone_sync_module.html#zone_sync_ssl_certificate
     */
     zone_sync_ssl_certificate ?: any


     /**
     * Specifies a file with the secret key in the PEM format
     * used for authentication to another cluster server.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_zone_sync_module.html#zone_sync_ssl_certificate_key
     */
     zone_sync_ssl_certificate_key ?: any


     /**
     * Specifies the enabled ciphers for connections to another cluster server.
     * The ciphers are specified in the format understood by the OpenSSL library.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_zone_sync_module.html#zone_sync_ssl_ciphers
     */
     zone_sync_ssl_ciphers ?: any


     /**
     * Sets arbitrary OpenSSL configuration
     * commands
     * when establishing a connection with another cluster server.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_zone_sync_module.html#zone_sync_ssl_conf_command
     */
     zone_sync_ssl_conf_command ?: any


     /**
     * Specifies a file with revoked certificates (CRL)
     * in the PEM format used to verify
     * the certificate of another cluster server.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_zone_sync_module.html#zone_sync_ssl_crl
     */
     zone_sync_ssl_crl ?: any


     /**
     * Allows overriding the server name used to
     * verify
     * the certificate of a cluster server and to be
     * passed through SNI
     * when establishing a connection with the cluster server.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_zone_sync_module.html#zone_sync_ssl_name
     */
     zone_sync_ssl_name ?: any


     /**
     * Specifies a file with passphrases for
     * secret keys
     * where each passphrase is specified on a separate line.
     * Passphrases are tried in turn when loading the key.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_zone_sync_module.html#zone_sync_ssl_password_file
     */
     zone_sync_ssl_password_file ?: any


     /**
     * Enables the specified protocols for connections to another cluster server.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_zone_sync_module.html#zone_sync_ssl_protocols
     */
     zone_sync_ssl_protocols ?: any


     /**
     * Enables or disables passing of the server name through
     * TLS
     * Server Name Indication extension (SNI, RFC 6066)
     * when establishing a connection with another cluster server.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_zone_sync_module.html#zone_sync_ssl_server_name
     */
     zone_sync_ssl_server_name ?: "on" | "off"


     /**
     * Specifies a file with trusted CA certificates in the PEM format
     * used to verify
     * the certificate of another cluster server.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_zone_sync_module.html#zone_sync_ssl_trusted_certificate
     */
     zone_sync_ssl_trusted_certificate ?: any


     /**
     * Enables or disables verification of another cluster server certificate.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_zone_sync_module.html#zone_sync_ssl_verify
     */
     zone_sync_ssl_verify ?: "on" | "off"


     /**
     * Sets the verification depth in another cluster server certificates chain.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_zone_sync_module.html#zone_sync_ssl_verify_depth
     */
     zone_sync_ssl_verify_depth ?: any


     /**
     * Sets the timeout between two successive
     * read or write operations on connection to another cluster node.
     * If no data is transmitted within this time, the connection is closed.
     *
     * @context stream, server
     * @see https://nginx.org/en/docs/stream/ngx_stream_zone_sync_module.html#zone_sync_timeout
     */
     zone_sync_timeout ?: any


}

export interface NginxMailDirectives extends NginxAnyDirectives {
     /**
     * Configures logging.
     * Several logs can be specified on the same configuration level (1.5.2).
     * If on the main configuration level writing a log to a file
     * is not explicitly defined, the default file will be used.
     *
     * @context main, http, mail, stream, server, location
     * @see https://nginx.org/en/docs/ngx_core_module.html#error_log
     */
     error_log ?: any


     /**
     * Sets the number of protocol errors after which the connection is closed.
     *
     * @context mail, server
     * @see https://nginx.org/en/docs/mail/ngx_mail_core_module.html#max_errors
     */
     max_errors ?: any


     /**
     * Configures name servers used to find the client’s hostname
     * to pass it to the
     * authentication server,
     * and in the
     * XCLIENT
     * command when proxying SMTP.
     * For example:
     *
     * @context mail, server
     * @see https://nginx.org/en/docs/mail/ngx_mail_core_module.html#resolver
     * @example
     * ```
     * resolver 127.0.0.1 [::1]:5353;
     * resolver 127.0.0.1 [::1]:5353 valid=30s;
     * ```
     */
     resolver ?: any


     /**
     * Sets a timeout for DNS operations, for example:
     *
     * @context mail, server
     * @see https://nginx.org/en/docs/mail/ngx_mail_core_module.html#resolver_timeout
     * @example
     * ```
     * resolver_timeout 5s;
     * ```
     */
     resolver_timeout ?: string


     /**
     * Sets the configuration for a server.
     *
     * @context mail
     * @see https://nginx.org/en/docs/mail/ngx_mail_core_module.html#server
     */
     server ?: NginxServerDirectives[]


     /**
     * Sets the server name that is used:
     *
     * @context mail, server
     * @see https://nginx.org/en/docs/mail/ngx_mail_core_module.html#server_name
     */
     server_name ?: any


     /**
     * Sets the timeout that is used before proxying to the backend starts.
     *
     * @context mail, server
     * @see https://nginx.org/en/docs/mail/ngx_mail_core_module.html#timeout
     */
     timeout ?: string


     /**
     * Sets the URL of the HTTP authentication server.
     * The protocol is described below.
     *
     * @context mail, server
     * @see https://nginx.org/en/docs/mail/ngx_mail_auth_http_module.html#auth_http
     */
     auth_http ?: any


     /**
     * Appends the specified header to requests sent to the authentication server.
     * This header can be used as the shared secret to verify
     * that the request comes from nginx.
     * For example:
     *
     * @context mail, server
     * @see https://nginx.org/en/docs/mail/ngx_mail_auth_http_module.html#auth_http_header
     * @example
     * ```
     * auth_http_header X-Auth-Key "secret_string";
     * ```
     */
     auth_http_header ?: any


     /**
     * Appends the “Auth-SSL-Cert” header with the
     * client
     * certificate in the PEM format (urlencoded)
     * to requests sent to the authentication server.
     *
     * @context mail, server
     * @see https://nginx.org/en/docs/mail/ngx_mail_auth_http_module.html#auth_http_pass_client_cert
     */
     auth_http_pass_client_cert ?: "on" | "off"


     /**
     * Sets the timeout for communication with the authentication server.
     *
     * @context mail, server
     * @see https://nginx.org/en/docs/mail/ngx_mail_auth_http_module.html#auth_http_timeout
     * @example
     * ```
     * GET /auth HTTP/1.0
     * Host: localhost
     * Auth-Method: plain # plain/apop/cram-md5/external
     * Auth-User: user
     * Auth-Pass: password
     * Auth-Protocol: imap # imap/pop3/smtp
     * Auth-Login-Attempt: 1
     * Client-IP: 192.0.2.42
     * Client-Host: client.example.org
     * HTTP/1.0 200 OK
     * Auth-Status: OK
     * Auth-Server: 198.51.100.1
     * Auth-Port: 143
     * HTTP/1.0 200 OK
     * Auth-Status: Invalid login or password
     * Auth-Wait: 3
     * GET /auth HTTP/1.0
     * Host: localhost
     * Auth-Method: apop
     * Auth-User: user
     * Auth-Salt: <238188073.1163692009@mail.example.com>
     * Auth-Pass: auth_response
     * Auth-Protocol: imap
     * Auth-Login-Attempt: 1
     * Client-IP: 192.0.2.42
     * Client-Host: client.example.org
     * HTTP/1.0 200 OK
     * Auth-Status: OK
     * Auth-Server: 198.51.100.1
     * Auth-Port: 143
     * Auth-Pass: plain-text-pass
     * HTTP/1.0 200 OK
     * Auth-Status: Temporary server problem, try again later
     * Auth-Error-Code: 451 4.3.0
     * Auth-Wait: 3
     * 451 4.3.0 Temporary server problem, try again later
     * GET /auth HTTP/1.0
     * Host: localhost
     * Auth-Method: none
     * Auth-User:
     * Auth-Pass:
     * Auth-Protocol: smtp
     * Auth-Login-Attempt: 1
     * Client-IP: 192.0.2.42
     * Client-Host: client.example.org
     * Auth-SMTP-Helo: client.example.org
     * Auth-SMTP-From: MAIL FROM: <>
     * Auth-SMTP-To: RCPT TO: <postmaster@mail.example.com>
     * GET /auth HTTP/1.0
     * Host: localhost
     * Auth-Method: plain
     * Auth-User: user
     * Auth-Pass: password
     * Auth-Protocol: imap
     * Auth-Login-Attempt: 1
     * Client-IP: 192.0.2.42
     * Auth-SSL: on
     * Auth-SSL-Protocol: TLSv1.3
     * Auth-SSL-Cipher: TLS_AES_256_GCM_SHA384
     * Auth-SSL-Verify: SUCCESS
     * Auth-SSL-Subject: /CN=example.com
     * Auth-SSL-Issuer: /CN=example.com
     * Auth-SSL-Serial: C07AD56B846B5BFF
     * Auth-SSL-Fingerprint: 29d6a80a123d13355ed16b4b04605e29cb55a5ad
     * ```
     */
     auth_http_timeout ?: string


     /**
     * Sets the size of the buffer used for proxying.
     * By default, the buffer size is equal to one memory page.
     * Depending on a platform, it is either 4K or 8K.
     *
     * @context mail, server
     * @see https://nginx.org/en/docs/mail/ngx_mail_proxy_module.html#proxy_buffer
     */
     proxy_buffer ?: string


     /**
     * Indicates whether to pass the error message obtained during
     * the authentication on the backend to the client.
     *
     * @context mail, server
     * @see https://nginx.org/en/docs/mail/ngx_mail_proxy_module.html#proxy_pass_error_message
     */
     proxy_pass_error_message ?: "on" | "off"


     /**
     * Enables the
     * PROXY
     * protocol for connections to a backend.
     *
     * @context mail, server
     * @see https://nginx.org/en/docs/mail/ngx_mail_proxy_module.html#proxy_protocol
     */
     proxy_protocol ?: "on" | "off"


     /**
     * Enables or disables user authentication on the SMTP backend
     * using the AUTH command.
     *
     * @context mail, server
     * @see https://nginx.org/en/docs/mail/ngx_mail_proxy_module.html#proxy_smtp_auth
     */
     proxy_smtp_auth ?: "on" | "off"


     /**
     * Sets the timeout between two successive
     * read or write operations on client or proxied server connections.
     * If no data is transmitted within this time, the connection is closed.
     *
     * @context mail, server
     * @see https://nginx.org/en/docs/mail/ngx_mail_proxy_module.html#proxy_timeout
     */
     proxy_timeout ?: any


     /**
     * Enables or disables the passing of the
     * XCLIENT
     * command with client parameters when connecting to the SMTP backend.
     *
     * @context mail, server
     * @see https://nginx.org/en/docs/mail/ngx_mail_proxy_module.html#xclient
     */
     xclient ?: "on" | "off"


     /**
     * Defines trusted addresses that are known to send correct
     * replacement addresses.
     * If the special value unix: is specified,
     * all UNIX-domain sockets will be trusted.
     *
     * @context mail, server
     * @see https://nginx.org/en/docs/mail/ngx_mail_realip_module.html#set_real_ip_from
     */
     set_real_ip_from ?: "address" | "CIDR" | "unix:"


     /**
     * This directive was made obsolete in version 1.15.0.
     * The ssl parameter
     * of the listen directive
     * should be used instead.
     *
     * @context mail, server
     * @see https://nginx.org/en/docs/mail/ngx_mail_ssl_module.html#ssl
     */
     ssl ?: "on" | "off"


     /**
     * Specifies a file with the certificate in the PEM format
     * for the given server.
     * If intermediate certificates should be specified in addition to a primary
     * certificate, they should be specified in the same file in the following
     * order: the primary certificate comes first, then the intermediate certificates.
     * A secret key in the PEM format may be placed in the same file.
     *
     * @context mail, server
     * @see https://nginx.org/en/docs/mail/ngx_mail_ssl_module.html#ssl_certificate
     * @example
     * ```
     * server {
     *     listen              993 ssl;
     * 
     *     ssl_certificate     example.com.rsa.crt;
     *     ssl_certificate_key example.com.rsa.key;
     * 
     *     ssl_certificate     example.com.ecdsa.crt;
     *     ssl_certificate_key example.com.ecdsa.key;
     * 
     *     ...
     * }
     * ```
     */
     ssl_certificate ?: any


     /**
     * Specifies a file with the secret key in the PEM format
     * for the given server.
     *
     * @context mail, server
     * @see https://nginx.org/en/docs/mail/ngx_mail_ssl_module.html#ssl_certificate_key
     */
     ssl_certificate_key ?: any


     /**
     * Specifies the enabled ciphers.
     * The ciphers are specified in the format understood by the
     * OpenSSL library, for example:
     *
     * @context mail, server
     * @see https://nginx.org/en/docs/mail/ngx_mail_ssl_module.html#ssl_ciphers
     * @example
     * ```
     * ssl_ciphers ALL:!aNULL:!EXPORT56:RC4+RSA:+HIGH:+MEDIUM:+LOW:+SSLv2:+EXP;
     * ```
     */
     ssl_ciphers ?: any


     /**
     * Specifies a file with trusted CA certificates in the PEM format
     * used to verify client certificates.
     *
     * @context mail, server
     * @see https://nginx.org/en/docs/mail/ngx_mail_ssl_module.html#ssl_client_certificate
     */
     ssl_client_certificate ?: any


     /**
     * Sets arbitrary OpenSSL configuration
     * commands.
     *
     * @context mail, server
     * @see https://nginx.org/en/docs/mail/ngx_mail_ssl_module.html#ssl_conf_command
     * @example
     * ```
     * ssl_conf_command Options PrioritizeChaCha;
     * ssl_conf_command Ciphersuites TLS_CHACHA20_POLY1305_SHA256;
     * ```
     */
     ssl_conf_command ?: any


     /**
     * Specifies a file with revoked certificates (CRL)
     * in the PEM format used to verify
     * client certificates.
     *
     * @context mail, server
     * @see https://nginx.org/en/docs/mail/ngx_mail_ssl_module.html#ssl_crl
     */
     ssl_crl ?: any


     /**
     * Specifies a file with DH parameters for DHE ciphers.
     *
     * @context mail, server
     * @see https://nginx.org/en/docs/mail/ngx_mail_ssl_module.html#ssl_dhparam
     */
     ssl_dhparam ?: any


     /**
     * Specifies a curve for ECDHE ciphers.
     *
     * @context mail, server
     * @see https://nginx.org/en/docs/mail/ngx_mail_ssl_module.html#ssl_ecdh_curve
     * @example
     * ```
     * ssl_ecdh_curve prime256v1:secp384r1;
     * ```
     */
     ssl_ecdh_curve ?: any


     /**
     * Specifies a file with passphrases for
     * secret keys
     * where each passphrase is specified on a separate line.
     * Passphrases are tried in turn when loading the key.
     *
     * @context mail, server
     * @see https://nginx.org/en/docs/mail/ngx_mail_ssl_module.html#ssl_password_file
     * @example
     * ```
     * mail {
     *     ssl_password_file /etc/keys/global.pass;
     *     ...
     * 
     *     server {
     *         server_name mail1.example.com;
     *         ssl_certificate_key /etc/keys/first.key;
     *     }
     * 
     *     server {
     *         server_name mail2.example.com;
     * 
     *         # named pipe can also be used instead of a file
     *         ssl_password_file /etc/keys/fifo;
     *         ssl_certificate_key /etc/keys/second.key;
     *     }
     * }
     * ```
     */
     ssl_password_file ?: any


     /**
     * Specifies that server ciphers should be preferred over client ciphers
     * when the SSLv3 and TLS protocols are used.
     *
     * @context mail, server
     * @see https://nginx.org/en/docs/mail/ngx_mail_ssl_module.html#ssl_prefer_server_ciphers
     */
     ssl_prefer_server_ciphers ?: "on" | "off"


     /**
     * Enables the specified protocols.
     *
     * @context mail, server
     * @see https://nginx.org/en/docs/mail/ngx_mail_ssl_module.html#ssl_protocols
     */
     ssl_protocols ?: any


     /**
     * Sets the types and sizes of caches that store session parameters.
     * A cache can be of any of the following types:
     *
     * @context mail, server
     * @see https://nginx.org/en/docs/mail/ngx_mail_ssl_module.html#ssl_session_cache
     * @example
     * ```
     * ssl_session_cache builtin:1000 shared:SSL:10m;
     * ```
     */
     ssl_session_cache ?: "off" | "none" | "[builtin[:size]]    [shared:name:size]"


     /**
     * Sets a file with the secret key used to encrypt
     * and decrypt TLS session tickets.
     * The directive is necessary if the same key has to be shared between
     * multiple servers.
     * By default, a randomly generated key is used.
     *
     * @context mail, server
     * @see https://nginx.org/en/docs/mail/ngx_mail_ssl_module.html#ssl_session_ticket_key
     * @example
     * ```
     * ssl_session_ticket_key current.key;
     * ssl_session_ticket_key previous.key;
     * openssl rand 80 > ticket.key
     * ```
     */
     ssl_session_ticket_key ?: any


     /**
     * Enables or disables session resumption through
     * TLS session tickets.
     *
     * @context mail, server
     * @see https://nginx.org/en/docs/mail/ngx_mail_ssl_module.html#ssl_session_tickets
     */
     ssl_session_tickets ?: "on" | "off"


     /**
     * Specifies a time during which a client may reuse the
     * session parameters.
     *
     * @context mail, server
     * @see https://nginx.org/en/docs/mail/ngx_mail_ssl_module.html#ssl_session_timeout
     */
     ssl_session_timeout ?: string


     /**
     * Specifies a file with trusted CA certificates in the PEM format
     * used to verify client certificates.
     *
     * @context mail, server
     * @see https://nginx.org/en/docs/mail/ngx_mail_ssl_module.html#ssl_trusted_certificate
     */
     ssl_trusted_certificate ?: any


     /**
     * Enables verification of client certificates.
     * The verification result is passed in the
     * “Auth-SSL-Verify” header of the
     * authentication
     * request.
     *
     * @context mail, server
     * @see https://nginx.org/en/docs/mail/ngx_mail_ssl_module.html#ssl_verify_client
     */
     ssl_verify_client ?: "on" | "off" | "optional" | "optional_no_ca"


     /**
     * Sets the verification depth in the client certificates chain.
     *
     * @context mail, server
     * @see https://nginx.org/en/docs/mail/ngx_mail_ssl_module.html#ssl_verify_depth
     */
     ssl_verify_depth ?: any


     /**
     * 
     *
     * @context mail, server
     * @see https://nginx.org/en/docs/mail/ngx_mail_ssl_module.html#starttls
     */
     starttls ?: "on" | "off" | "only"


     /**
     * Sets permitted methods of authentication for IMAP clients.
     * Supported methods are:
     *
     * @context mail, server
     * @see https://nginx.org/en/docs/mail/ngx_mail_imap_module.html#imap_auth
     */
     imap_auth ?: any


     /**
     * Sets the
     * IMAP protocol
     * extensions list that is passed to the client in response to
     * the CAPABILITY command.
     * The authentication methods specified in the imap_auth directive and
     * STARTTLS
     * are automatically added to this list depending on the
     * starttls directive value.
     *
     * @context mail, server
     * @see https://nginx.org/en/docs/mail/ngx_mail_imap_module.html#imap_capabilities
     */
     imap_capabilities ?: any


     /**
     * Sets the size of the buffer used for reading IMAP commands.
     * By default, the buffer size is equal to one memory page.
     * This is either 4K or 8K, depending on a platform.
     *
     * @context mail, server
     * @see https://nginx.org/en/docs/mail/ngx_mail_imap_module.html#imap_client_buffer
     */
     imap_client_buffer ?: string


     /**
     * Sets permitted methods of authentication for POP3 clients.
     * Supported methods are:
     *
     * @context mail, server
     * @see https://nginx.org/en/docs/mail/ngx_mail_pop3_module.html#pop3_auth
     */
     pop3_auth ?: any


     /**
     * Sets the
     * POP3 protocol
     * extensions list that is passed to the client in response to
     * the CAPA command.
     * The authentication methods specified in the pop3_auth directive
     * (SASL extension) and
     * STLS
     * are automatically added to this list depending on the
     * starttls directive value.
     *
     * @context mail, server
     * @see https://nginx.org/en/docs/mail/ngx_mail_pop3_module.html#pop3_capabilities
     */
     pop3_capabilities ?: any


     /**
     * Sets permitted methods of
     * SASL authentication
     * for SMTP clients.
     * Supported methods are:
     *
     * @context mail, server
     * @see https://nginx.org/en/docs/mail/ngx_mail_smtp_module.html#smtp_auth
     */
     smtp_auth ?: any


     /**
     * Sets the SMTP protocol extensions list
     * that is passed to the client in response to the
     * EHLO command.
     * The authentication methods specified in the smtp_auth directive and
     * STARTTLS
     * are automatically added to this list depending on the
     * starttls directive value.
     *
     * @context mail, server
     * @see https://nginx.org/en/docs/mail/ngx_mail_smtp_module.html#smtp_capabilities
     */
     smtp_capabilities ?: any


     /**
     * Sets the size of the buffer used for reading SMTP commands.
     * By default, the buffer size is equal to one memory page.
     * This is either 4K or 8K, depending on a platform.
     *
     * @context mail, server
     * @see https://nginx.org/en/docs/mail/ngx_mail_smtp_module.html#smtp_client_buffer
     */
     smtp_client_buffer ?: string


     /**
     * Allows setting a delay before sending an SMTP greeting
     * in order to reject clients who fail to wait for the greeting before
     * sending SMTP commands.
     *
     * @context mail, server
     * @see https://nginx.org/en/docs/mail/ngx_mail_smtp_module.html#smtp_greeting_delay
     */
     smtp_greeting_delay ?: string


}

export interface NginxUpstreamDirectives extends NginxAnyDirectives {
     /**
     * Defines the address and other parameters
     * of a server.
     * The address can be specified as a domain name or IP address,
     * with an optional port, or as a UNIX-domain socket path
     * specified after the “unix:” prefix.
     * If a port is not specified, the port 80 is used.
     * A domain name that resolves to several IP addresses defines
     * multiple servers at once.
     *
     * @context upstream
     * @see https://nginx.org/en/docs/http/ngx_http_upstream_module.html#server
     */
     server ?: NginxServerDirectives[]


     /**
     * Defines the name and size of the shared
     * memory zone that keeps the group’s configuration and run-time state that are
     * shared between worker processes.
     * Several groups may share the same zone.
     * In this case, it is enough to specify the size only once.
     *
     * @context upstream
     * @see https://nginx.org/en/docs/http/ngx_http_upstream_module.html#zone
     */
     zone ?: any


     /**
     * Specifies a file that keeps the state
     * of the dynamically configurable group.
     *
     * @context upstream
     * @see https://nginx.org/en/docs/http/ngx_http_upstream_module.html#state
     * @example
     * ```
     * state /var/lib/nginx/state/servers.conf; # path for Linux
     * state /var/db/nginx/state/servers.conf;  # path for FreeBSD
     * ```
     */
     state ?: any


     /**
     * Specifies a load balancing method for a server group
     * where the client-server mapping is based on the hashed key value.
     * The key can contain text, variables, and their combinations.
     * Note that adding or removing a server from the group
     * may result in remapping most of the keys to different servers.
     * The method is compatible with the
     * Cache::Memcached
     * Perl library.
     *
     * @context upstream
     * @see https://nginx.org/en/docs/http/ngx_http_upstream_module.html#hash
     */
     hash ?: any


     /**
     * Specifies that a group should use a load balancing method where requests
     * are distributed between servers based on client IP addresses.
     * The first three octets of the client IPv4 address, or the entire IPv6 address,
     * are used as a hashing key.
     * The method ensures that requests from the same client will always be
     * passed to the same server except when this server is unavailable.
     * In the latter case client requests will be passed to another server.
     * Most probably, it will always be the same server as well.
     *
     * @context upstream
     * @see https://nginx.org/en/docs/http/ngx_http_upstream_module.html#ip_hash
     * @example
     * ```
     * upstream backend {
     *     ip_hash;
     * 
     *     server backend1.example.com;
     *     server backend2.example.com;
     *     server backend3.example.com down;
     *     server backend4.example.com;
     * }
     * ```
     */
     ip_hash ?: any


     /**
     * Activates the cache for connections to upstream servers.
     *
     * @context upstream
     * @see https://nginx.org/en/docs/http/ngx_http_upstream_module.html#keepalive
     * @example
     * ```
     * upstream memcached_backend {
     *     server 127.0.0.1:11211;
     *     server 10.0.0.2:11211;
     * 
     *     keepalive 32;
     * }
     * 
     * server {
     *     ...
     * 
     *     location /memcached/ {
     *         set $memcached_key $uri;
     *         memcached_pass memcached_backend;
     *     }
     * 
     * }
     * upstream http_backend {
     *     server 127.0.0.1:8080;
     * 
     *     keepalive 16;
     * }
     * 
     * server {
     *     ...
     * 
     *     location /http/ {
     *         proxy_pass http://http_backend;
     *         proxy_http_version 1.1;
     *         proxy_set_header Connection "";
     *         ...
     *     }
     * }
     * upstream fastcgi_backend {
     *     server 127.0.0.1:9000;
     * 
     *     keepalive 8;
     * }
     * 
     * server {
     *     ...
     * 
     *     location /fastcgi/ {
     *         fastcgi_pass fastcgi_backend;
     *         fastcgi_keep_conn on;
     *         ...
     *     }
     * }
     * ```
     */
     keepalive ?: any


     /**
     * Sets the maximum number of requests that can be
     * served through one keepalive connection.
     * After the maximum number of requests is made, the connection is closed.
     *
     * @context upstream
     * @see https://nginx.org/en/docs/http/ngx_http_upstream_module.html#keepalive_requests
     */
     keepalive_requests ?: any


     /**
     * Limits the maximum time during which
     * requests can be processed through one keepalive connection.
     * After this time is reached, the connection is closed
     * following the subsequent request processing.
     *
     * @context upstream
     * @see https://nginx.org/en/docs/http/ngx_http_upstream_module.html#keepalive_time
     */
     keepalive_time ?: string


     /**
     * Sets a timeout during which an idle keepalive
     * connection to an upstream server will stay open.
     *
     * @context upstream
     * @see https://nginx.org/en/docs/http/ngx_http_upstream_module.html#keepalive_timeout
     */
     keepalive_timeout ?: any


     /**
     * Allows proxying requests with
     * NTLM
     * Authentication.
     * The upstream connection is bound to the client connection
     * once the client sends a request with the “Authorization”
     * header field value
     * starting with “Negotiate” or “NTLM”.
     * Further client requests will be proxied through the same upstream connection,
     * keeping the authentication context.
     *
     * @context upstream
     * @see https://nginx.org/en/docs/http/ngx_http_upstream_module.html#ntlm
     * @example
     * ```
     * upstream http_backend {
     *     server 127.0.0.1:8080;
     * 
     *     ntlm;
     * }
     * 
     * server {
     *     ...
     * 
     *     location /http/ {
     *         proxy_pass http://http_backend;
     *         proxy_http_version 1.1;
     *         proxy_set_header Connection "";
     *         ...
     *     }
     * }
     * ```
     */
     ntlm ?: any


     /**
     * Specifies that a group should use a load balancing method where a request
     * is passed to the server with the least number of active connections,
     * taking into account weights of servers.
     * If there are several such servers, they are tried in turn using a
     * weighted round-robin balancing method.
     *
     * @context upstream
     * @see https://nginx.org/en/docs/http/ngx_http_upstream_module.html#least_conn
     */
     least_conn ?: any


     /**
     * Specifies that a group should use a load balancing method where a request
     * is passed to the server with the least average response time and
     * least number of active connections, taking into account weights of servers.
     * If there are several such servers, they are tried in turn using a
     * weighted round-robin balancing method.
     *
     * @context upstream
     * @see https://nginx.org/en/docs/http/ngx_http_upstream_module.html#least_time
     */
     least_time ?: "header" | "last_byte    [inflight]"


     /**
     * If an upstream server cannot be selected immediately
     * while processing a request,
     * the request will be placed into the queue.
     * The directive specifies the maximum number of requests
     * that can be in the queue at the same time.
     * If the queue is filled up,
     * or the server to pass the request to cannot be selected within
     * the time period specified in the timeout parameter,
     * the 502 (Bad Gateway)
     * error will be returned to the client.
     *
     * @context upstream
     * @see https://nginx.org/en/docs/http/ngx_http_upstream_module.html#queue
     */
     queue ?: any


     /**
     * Specifies that a group should use a load balancing method where a request
     * is passed to a randomly selected server, taking into account weights
     * of servers.
     *
     * @context upstream
     * @see https://nginx.org/en/docs/http/ngx_http_upstream_module.html#random
     */
     random ?: any


     /**
     * Configures name servers used to resolve names of upstream servers
     * into addresses, for example:
     *
     * @context upstream
     * @see https://nginx.org/en/docs/http/ngx_http_upstream_module.html#resolver
     * @example
     * ```
     * resolver 127.0.0.1 [::1]:5353;
     * resolver 127.0.0.1 [::1]:5353 valid=30s;
     * ```
     */
     resolver ?: any


     /**
     * Sets a timeout for name resolution, for example:
     *
     * @context upstream
     * @see https://nginx.org/en/docs/http/ngx_http_upstream_module.html#resolver_timeout
     * @example
     * ```
     * resolver_timeout 5s;
     * ```
     */
     resolver_timeout ?: string


     /**
     * Enables session affinity, which causes requests from the same client to be
     * passed to the same server in a group of servers.
     * Three methods are available:
     *
     * @context upstream
     * @see https://nginx.org/en/docs/http/ngx_http_upstream_module.html#sticky
     */
     sticky ?: "cookie name    [expires=time]    [domain=domain]    [httponly]    [samesite=strict" | "lax" | "none]    [secure]    [path=path]sticky     route $variable ...sticky     learn    create=$variable    lookup=$variable    zone=name:size    [timeout=time]    [header]    [sync]"


     /**
     * This directive is obsolete since version 1.5.7.
     * An equivalent
     * sticky directive with a new syntax should be used instead:
     *
     * @context upstream
     * @see https://nginx.org/en/docs/http/ngx_http_upstream_module.html#sticky_cookie_insert
     */
     sticky_cookie_insert ?: any


}

export type NginxAnyDirective = keyof NginxAnyDirectives
export type NginxMainDirective = keyof NginxMainDirectives
export type NginxHttpDirective = keyof NginxHttpDirectives
export type NginxServerDirective = keyof NginxServerDirectives
export type NginxLocationDirective = keyof NginxLocationDirectives
export type NginxEventsDirective = keyof NginxEventsDirectives
export type NginxStreamDirective = keyof NginxStreamDirectives
export type NginxMailDirective = keyof NginxMailDirectives
export type NginxUpstreamDirective = keyof NginxUpstreamDirectives

export interface NginxHttpCoreModuleVariables {
     /**
     * argument name in the request line
     *
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#varvar_arg_
     */
    $arg_ ?: any
     /**
     * arguments in the request line
     *
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#varvar_args
     */
    $args ?: any
     /**
     * client address in a binary form, value’s length is always 4 bytes
     * for IPv4 addresses or 16 bytes for IPv6 addresses
     *
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#varvar_binary_remote_addr
     */
    $binary_remote_addr ?: any
     /**
     * number of bytes sent to a client, not counting the response header;
     * this variable is compatible with the “%B” parameter of the
     * mod_log_config
     * Apache module
     *
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#varvar_body_bytes_sent
     */
    $body_bytes_sent ?: any
     /**
     * number of bytes sent to a client (1.3.8, 1.2.5)
     *
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#varvar_bytes_sent
     */
    $bytes_sent ?: any
     /**
     * connection serial number (1.3.8, 1.2.5)
     *
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#varvar_connection
     */
    $connection ?: any
     /**
     * current number of requests made through a connection (1.3.8, 1.2.5)
     *
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#varvar_connection_requests
     */
    $connection_requests ?: any
     /**
     * connection time in seconds with a milliseconds resolution (1.19.10)
     *
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#varvar_connection_time
     */
    $connection_time ?: any
     /**
     * “Content-Length” request header field
     *
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#varvar_content_length
     */
    $content_length ?: any
     /**
     * “Content-Type” request header field
     *
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#varvar_content_type
     */
    $content_type ?: any
     /**
     * the name cookie
     *
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#varvar_cookie_
     */
    $cookie_ ?: any
     /**
     * root or alias directive’s value
     * for the current request
     *
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#varvar_document_root
     */
    $document_root ?: any
     /**
     * same as $uri
     *
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#varvar_document_uri
     */
    $document_uri ?: any
     /**
     * in this order of precedence:
     * host name from the request line, or
     * host name from the “Host” request header field, or
     * the server name matching a request
     *
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#varvar_host
     */
    $host ?: any
     /**
     * host name
     *
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#varvar_hostname
     */
    $hostname ?: any
     /**
     * arbitrary request header field;
     * the last part of a variable name is the field name converted
     * to lower case with dashes replaced by underscores
     *
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#varvar_http_
     */
    $http_ ?: any
     /**
     * “on”
     * if connection operates in SSL mode,
     * or an empty string otherwise
     *
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#varvar_https
     */
    $https ?: any
     /**
     * “?” if a request line has arguments,
     * or an empty string otherwise
     *
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#varvar_is_args
     */
    $is_args ?: any
     /**
     * setting this variable enables response rate limiting;
     * see limit_rate
     *
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#varvar_limit_rate
     */
    $limit_rate ?: any
     /**
     * current time in seconds with the milliseconds resolution (1.3.9, 1.2.6)
     *
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#varvar_msec
     */
    $msec ?: any
     /**
     * nginx version
     *
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#varvar_nginx_version
     */
    $nginx_version ?: any
     /**
     * PID of the worker process
     *
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#varvar_pid
     */
    $pid ?: any
     /**
     * “p” if request was pipelined, “.”
     * otherwise (1.3.12, 1.2.7)
     *
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#varvar_pipe
     */
    $pipe ?: any
     /**
     * client address from the PROXY protocol header (1.5.12)
     * 
     * The PROXY protocol must be previously enabled by setting the
     * proxy_protocol parameter
     * in the listen directive.
     *
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#varvar_proxy_protocol_addr
     */
    $proxy_protocol_addr ?: any
     /**
     * client port from the PROXY protocol header (1.11.0)
     * 
     * The PROXY protocol must be previously enabled by setting the
     * proxy_protocol parameter
     * in the listen directive.
     *
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#varvar_proxy_protocol_port
     */
    $proxy_protocol_port ?: any
     /**
     * server address from the PROXY protocol header (1.17.6)
     * 
     * The PROXY protocol must be previously enabled by setting the
     * proxy_protocol parameter
     * in the listen directive.
     *
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#varvar_proxy_protocol_server_addr
     */
    $proxy_protocol_server_addr ?: any
     /**
     * server port from the PROXY protocol header (1.17.6)
     * 
     * The PROXY protocol must be previously enabled by setting the
     * proxy_protocol parameter
     * in the listen directive.
     *
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#varvar_proxy_protocol_server_port
     */
    $proxy_protocol_server_port ?: any
     /**
     * same as $args
     *
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#varvar_query_string
     */
    $query_string ?: any
     /**
     * an absolute pathname corresponding to the
     * root or alias directive’s value
     * for the current request,
     * with all symbolic links resolved to real paths
     *
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#varvar_realpath_root
     */
    $realpath_root ?: any
     /**
     * client address
     *
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#varvar_remote_addr
     */
    $remote_addr ?: any
     /**
     * client port
     *
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#varvar_remote_port
     */
    $remote_port ?: any
     /**
     * user name supplied with the Basic authentication
     *
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#varvar_remote_user
     */
    $remote_user ?: any
     /**
     * full original request line
     *
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#varvar_request
     */
    $request ?: any
     /**
     * request body
     * 
     * The variable’s value is made available in locations
     * processed by the
     * proxy_pass,
     * fastcgi_pass,
     * uwsgi_pass,
     * and
     * scgi_pass
     * directives when the request body was read to
     * a memory buffer.
     *
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#varvar_request_body
     */
    $request_body ?: any
     /**
     * name of a temporary file with the request body
     * 
     * At the end of processing, the file needs to be removed.
     * To always write the request body to a file,
     * client_body_in_file_only needs to be enabled.
     * When the name of a temporary file is passed in a proxied request
     * or in a request to a FastCGI/uwsgi/SCGI server,
     * passing the request body should be disabled by the
     * 
     * proxy_pass_request_body off,
     * 
     * fastcgi_pass_request_body off,
     * 
     * uwsgi_pass_request_body off, or
     * 
     * scgi_pass_request_body off
     * directives, respectively.
     *
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#varvar_request_body_file
     */
    $request_body_file ?: any
     /**
     * “OK” if a request has completed,
     * or an empty string otherwise
     *
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#varvar_request_completion
     */
    $request_completion ?: any
     /**
     * file path for the current request, based on the
     * root or alias
     * directives, and the request URI
     *
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#varvar_request_filename
     */
    $request_filename ?: any
     /**
     * unique request identifier
     * generated from 16 random bytes, in hexadecimal (1.11.0)
     *
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#varvar_request_id
     */
    $request_id ?: any
     /**
     * request length (including request line, header, and request body)
     * (1.3.12, 1.2.7)
     *
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#varvar_request_length
     */
    $request_length ?: any
     /**
     * request method, usually
     * “GET” or “POST”
     *
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#varvar_request_method
     */
    $request_method ?: any
     /**
     * request processing time in seconds with a milliseconds resolution
     * (1.3.9, 1.2.6);
     * time elapsed since the first bytes were read from the client
     *
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#varvar_request_time
     */
    $request_time ?: any
     /**
     * full original request URI (with arguments)
     *
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#varvar_request_uri
     */
    $request_uri ?: any
     /**
     * request scheme, “http” or “https”
     *
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#varvar_scheme
     */
    $scheme ?: any
     /**
     * arbitrary response header field;
     * the last part of a variable name is the field name converted
     * to lower case with dashes replaced by underscores
     *
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#varvar_sent_http_
     */
    $sent_http_ ?: any
     /**
     * arbitrary field sent at the end of the response (1.13.2);
     * the last part of a variable name is the field name converted
     * to lower case with dashes replaced by underscores
     *
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#varvar_sent_trailer_
     */
    $sent_trailer_ ?: any
     /**
     * an address of the server which accepted a request
     * 
     * Computing a value of this variable usually requires one system call.
     * To avoid a system call, the listen directives
     * must specify addresses and use the bind parameter.
     *
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#varvar_server_addr
     */
    $server_addr ?: any
     /**
     * name of the server which accepted a request
     *
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#varvar_server_name
     */
    $server_name ?: any
     /**
     * port of the server which accepted a request
     *
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#varvar_server_port
     */
    $server_port ?: any
     /**
     * request protocol, usually
     * “HTTP/1.0”,
     * “HTTP/1.1”,
     * or
     * “HTTP/2.0”
     *
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#varvar_server_protocol
     */
    $server_protocol ?: any
     /**
     * response status (1.3.2, 1.2.2)
     *
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#varvar_status
     */
    $status ?: any
     /**
     * information about the client TCP connection; available on systems
     * that support the TCP_INFO socket option
     *
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#varvar_tcpinfo_
     */
    $tcpinfo_ ?: any
     /**
     * local time in the ISO 8601 standard format (1.3.12, 1.2.7)
     *
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#varvar_time_iso8601
     */
    $time_iso8601 ?: any
     /**
     * local time in the Common Log Format (1.3.12, 1.2.7)
     *
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#varvar_time_local
     */
    $time_local ?: any
     /**
     * current URI in request, normalized
     * 
     * The value of $uri may change during request processing,
     * e.g. when doing internal redirects, or when using index files.
     *
     * @see https://nginx.org/en/docs/http/ngx_http_core_module.html#varvar_uri
     */
    $uri ?: any
}

export type NginxHttpCoreModuleVariable = keyof NginxHttpCoreModuleVariables


export interface NginxStreamCoreModuleVariables {
     /**
     * client address in a binary form, value’s length is always 4 bytes
     * for IPv4 addresses or 16 bytes for IPv6 addresses
     *
     * @see https://nginx.org/en/docs/stream/ngx_stream_core_module.html#varvar_binary_remote_addr
     */
    $binary_remote_addr ?: any
     /**
     * number of bytes received from a client (1.11.4)
     *
     * @see https://nginx.org/en/docs/stream/ngx_stream_core_module.html#varvar_bytes_received
     */
    $bytes_received ?: any
     /**
     * number of bytes sent to a client
     *
     * @see https://nginx.org/en/docs/stream/ngx_stream_core_module.html#varvar_bytes_sent
     */
    $bytes_sent ?: any
     /**
     * connection serial number
     *
     * @see https://nginx.org/en/docs/stream/ngx_stream_core_module.html#varvar_connection
     */
    $connection ?: any
     /**
     * host name
     *
     * @see https://nginx.org/en/docs/stream/ngx_stream_core_module.html#varvar_hostname
     */
    $hostname ?: any
     /**
     * current time in seconds with the milliseconds resolution
     *
     * @see https://nginx.org/en/docs/stream/ngx_stream_core_module.html#varvar_msec
     */
    $msec ?: any
     /**
     * nginx version
     *
     * @see https://nginx.org/en/docs/stream/ngx_stream_core_module.html#varvar_nginx_version
     */
    $nginx_version ?: any
     /**
     * PID of the worker process
     *
     * @see https://nginx.org/en/docs/stream/ngx_stream_core_module.html#varvar_pid
     */
    $pid ?: any
     /**
     * protocol used to communicate with the client:
     * TCP or UDP (1.11.4)
     *
     * @see https://nginx.org/en/docs/stream/ngx_stream_core_module.html#varvar_protocol
     */
    $protocol ?: any
     /**
     * client address from the PROXY protocol header (1.11.4)
     * 
     * The PROXY protocol must be previously enabled by setting the
     * proxy_protocol parameter
     * in the listen directive.
     *
     * @see https://nginx.org/en/docs/stream/ngx_stream_core_module.html#varvar_proxy_protocol_addr
     */
    $proxy_protocol_addr ?: any
     /**
     * client port from the PROXY protocol header (1.11.4)
     * 
     * The PROXY protocol must be previously enabled by setting the
     * proxy_protocol parameter
     * in the listen directive.
     *
     * @see https://nginx.org/en/docs/stream/ngx_stream_core_module.html#varvar_proxy_protocol_port
     */
    $proxy_protocol_port ?: any
     /**
     * server address from the PROXY protocol header (1.17.6)
     * 
     * The PROXY protocol must be previously enabled by setting the
     * proxy_protocol parameter
     * in the listen directive.
     *
     * @see https://nginx.org/en/docs/stream/ngx_stream_core_module.html#varvar_proxy_protocol_server_addr
     */
    $proxy_protocol_server_addr ?: any
     /**
     * server port from the PROXY protocol header (1.17.6)
     * 
     * The PROXY protocol must be previously enabled by setting the
     * proxy_protocol parameter
     * in the listen directive.
     *
     * @see https://nginx.org/en/docs/stream/ngx_stream_core_module.html#varvar_proxy_protocol_server_port
     */
    $proxy_protocol_server_port ?: any
     /**
     * client address
     *
     * @see https://nginx.org/en/docs/stream/ngx_stream_core_module.html#varvar_remote_addr
     */
    $remote_addr ?: any
     /**
     * client port
     *
     * @see https://nginx.org/en/docs/stream/ngx_stream_core_module.html#varvar_remote_port
     */
    $remote_port ?: any
     /**
     * an address of the server which accepted a connection
     * 
     * Computing a value of this variable usually requires one system call.
     * To avoid a system call, the listen directives
     * must specify addresses and use the bind parameter.
     *
     * @see https://nginx.org/en/docs/stream/ngx_stream_core_module.html#varvar_server_addr
     */
    $server_addr ?: any
     /**
     * port of the server which accepted a connection
     *
     * @see https://nginx.org/en/docs/stream/ngx_stream_core_module.html#varvar_server_port
     */
    $server_port ?: any
     /**
     * session duration in seconds with a milliseconds resolution
     * (1.11.4);
     *
     * @see https://nginx.org/en/docs/stream/ngx_stream_core_module.html#varvar_session_time
     */
    $session_time ?: any
     /**
     * session status (1.11.4), can be one of the following:
     * 
     * 
     * 200
     * 
     * session completed successfully
     * 
     * 
     * 400
     * 
     * client data could not be parsed, for example,
     * the PROXY protocol header
     * 
     * 
     * 403
     * 
     * access forbidden, for example, when access is limited for
     * certain client addresses
     * 
     * 
     * 500
     * 
     * internal server error
     * 
     * 
     * 502
     * 
     * bad gateway, for example,
     * if an upstream server could not be selected or reached.
     * 
     * 
     * 503
     * 
     * service unavailable, for example, when access is limited by the
     * number of connections
     *
     * @see https://nginx.org/en/docs/stream/ngx_stream_core_module.html#varvar_status
     */
    $status ?: any
     /**
     * local time in the ISO 8601 standard format
     *
     * @see https://nginx.org/en/docs/stream/ngx_stream_core_module.html#varvar_time_iso8601
     */
    $time_iso8601 ?: any
     /**
     * local time in the Common Log Format
     *
     * @see https://nginx.org/en/docs/stream/ngx_stream_core_module.html#varvar_time_local
     */
    $time_local ?: any
}

export type NginxStreamCoreModuleVariable = keyof NginxStreamCoreModuleVariables
export interface NginxVariables extends NginxHttpCoreModuleVariables, NginxStreamCoreModuleVariables {}
export type NginxVariable = keyof NginxVariables