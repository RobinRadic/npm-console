

export interface PhpIni extends php_ini.PHPIniConfig {

}

export interface PhpExtensionInis extends php_inis.PhpExtensionInis {}
export interface PhpExtensionIni extends php_inis.PhpExtensionIni {}

export type PhpExtensionName = keyof PhpExtensionInis | string

export namespace php_ini {
    export interface PHPIniConfig {
        PHP?: PHP;
        'CLI Server'?: CLIServer;
        Date?: COM;
        filter?: COM;
        iconv?: COM;
        imap?: COM;
        intl?: COM;
        sqlite3?: COM;
        Pcre?: COM;
        Pdo?: COM;
        Pdo_mysql?: PdoMysql;
        Phar?: COM;
        'mail function'?: MailFunction;
        ODBC?: ODBC;
        MySQLi?: MySQLi;
        mysqlnd?: Mysqlnd;
        OCI8?: COM;
        PostgreSQL?: PostgreSQL;
        bcmath?: Bcmath;
        browscap?: COM;
        Session?: Session;
        Assertion?: Assertion;
        COM?: COM;
        mbstring?: COM;
        gd?: COM;
        exif?: COM;
        Tidy?: Tidy;
        soap?: Soap;
        sysvshm?: COM;
        ldap?: LDAP;
        dba?: COM;
        opcache?: COM;
        curl?: COM;
        openssl?: COM;
        ffi?: COM;
    }

    export interface Assertion {
        'zend.assertions'?: string;
    }

    export interface CLIServer {
        'cli_server.color'?: string;
    }

    export interface COM {
    }

    export interface MySQLi {
        'mysqli.max_persistent'?: string;
        'mysqli.allow_persistent'?: string;
        'mysqli.max_links'?: string;
        'mysqli.default_port'?: string;
        'mysqli.default_socket'?: string;
        'mysqli.default_host'?: string;
        'mysqli.default_user'?: string;
        'mysqli.default_pw'?: string;
        'mysqli.reconnect'?: string;
    }

    export interface ODBC {
        'odbc.allow_persistent'?: string;
        'odbc.check_persistent'?: string;
        'odbc.max_persistent'?: string;
        'odbc.max_links'?: string;
        'odbc.defaultlrl'?: string;
        'odbc.defaultbinmode'?: string;
    }

    export interface PHP {
        engine?: string;
        short_open_tag?: string;
        precision?: string;
        output_buffering?: string;
        'zlib.output_compression'?: string;
        implicit_flush?: string;
        unserialize_callback_func?: string;
        serialize_precision?: string;
        disable_functions?: string;
        disable_classes?: string;
        'zend.enable_gc'?: string;
        'zend.exception_ignore_args'?: string;
        'zend.exception_string_param_max_len'?: string;
        expose_php?: string;
        max_execution_time?: string;
        max_input_time?: string;
        memory_limit?: string;
        error_reporting?: string;
        display_errors?: string;
        display_startup_errors?: string;
        log_errors?: string;
        log_errors_max_len?: string;
        ignore_repeated_errors?: string;
        ignore_repeated_source?: string;
        report_memleaks?: string;
        variables_order?: string;
        request_order?: string;
        register_argc_argv?: string;
        auto_globals_jit?: string;
        post_max_size?: string;
        auto_prepend_file?: string;
        auto_append_file?: string;
        default_mimetype?: string;
        default_charset?: string;
        doc_root?: string;
        user_dir?: string;
        enable_dl?: string;
        file_uploads?: string;
        upload_max_filesize?: string;
        max_file_uploads?: string;
        allow_url_fopen?: string;
        allow_url_include?: string;
        default_socket_timeout?: string;
    }

    export interface PdoMysql {
        'pdo_mysql.default_socket'?: string;
    }

    export interface PostgreSQL {
        'pgsql.allow_persistent'?: string;
        'pgsql.auto_reset_persistent'?: string;
        'pgsql.max_persistent'?: string;
        'pgsql.max_links'?: string;
        'pgsql.ignore_notice'?: string;
        'pgsql.log_notice'?: string;
    }

    export interface Session {
        'session.save_handler'?: string;
        'session.use_strict_mode'?: string;
        'session.use_cookies'?: string;
        'session.use_only_cookies'?: string;
        'session.name'?: string;
        'session.auto_start'?: string;
        'session.cookie_lifetime'?: string;
        'session.cookie_path'?: string;
        'session.cookie_domain'?: string;
        'session.cookie_httponly'?: string;
        'session.cookie_samesite'?: string;
        'session.serialize_handler'?: string;
        'session.gc_probability'?: string;
        'session.gc_divisor'?: string;
        'session.gc_maxlifetime'?: string;
        'session.referer_check'?: string;
        'session.cache_limiter'?: string;
        'session.cache_expire'?: string;
        'session.use_trans_sid'?: string;
        'session.sid_length'?: string;
        'session.trans_sid_tags'?: string;
        'session.sid_bits_per_character'?: string;
    }

    export interface Tidy {
        'tidy.clean_output'?: string;
    }

    export interface Bcmath {
        'bcmath.scale'?: string;
    }

    export interface LDAP {
        'ldap.max_links'?: string;
    }

    export interface MailFunction {
        SMTP?: string;
        smtp_port?: string;
        'mail.add_x_header'?: string;
    }

    export interface Mysqlnd {
        'mysqlnd.collect_statistics'?: string;
        'mysqlnd.collect_memory_statistics'?: string;
    }

    export interface Soap {
        'soap.wsdl_cache_enabled'?: string;
        'soap.wsdl_cache_dir'?: string;
        'soap.wsdl_cache_ttl'?: string;
        'soap.wsdl_cache_limit'?: string;
    }

}

export namespace php_inis {
    export interface PhpExtensionIni {
        extension?: string;
        zend_extension?: string;
        [key:string]:any
    }

    export interface PhpExtensionInis {
        mysqlnd: PhpExtensionIni;
        opcache: PhpExtensionIni;
        pdo: PhpExtensionIni;
        xml: PhpExtensionIni;
        bcmath: PhpExtensionIni;
        bz2: PhpExtensionIni;
        calendar: PhpExtensionIni;
        ctype: PhpExtensionIni;
        curl: PhpExtensionIni;
        dom: PhpExtensionIni;
        exif: PhpExtensionIni;
        ffi: PhpExtensionIni;
        fileinfo: PhpExtensionIni;
        ftp: PhpExtensionIni;
        gd: PhpExtensionIni;
        gettext: PhpExtensionIni;
        gmp: PhpExtensionIni;
        iconv: PhpExtensionIni;
        igbinary: PhpExtensionIni;
        intl: PhpExtensionIni;
        mbstring: PhpExtensionIni;
        mcrypt: PhpExtensionIni;
        mysqli: PhpExtensionIni;
        pdo_mysql: PhpExtensionIni;
        pdo_sqlite: PhpExtensionIni;
        phar: PhpExtensionIni;
        posix: PhpExtensionIni;
        readline: PhpExtensionIni;
        redis: PhpExtensionIni;
        shmop: PhpExtensionIni;
        simplexml: PhpExtensionIni;
        soap: PhpExtensionIni;
        sockets: PhpExtensionIni;
        sqlite3: PhpExtensionIni;
        sysvmsg: PhpExtensionIni;
        sysvsem: PhpExtensionIni;
        sysvshm: PhpExtensionIni;
        tokenizer: PhpExtensionIni;
        xdebug: PhpExtensionIni;
        xmlreader: PhpExtensionIni;
        xmlrpc: PhpExtensionIni;
        xmlwriter: PhpExtensionIni;
        xsl: PhpExtensionIni;
        zip: PhpExtensionIni;
    }
}

export interface PhpParsedInfo {
    'PHP Version': string;
    'System': string;
    'Build Date': string;
    'Build System': string;
    'Server API': 'FPM/FastCGI' | 'Command Line Interface';
    'Virtual Directory Support': string;
    'Configuration File (php.ini) Path': string;
    'Loaded Configuration File': string;
    'Scan this dir for additional .ini files': string;
    'Additional .ini files parsed': string;

    [ key: string ]: string;
}

export interface PhpInfo {
    bin: string;
    parsed: PhpParsedInfo;
    iniFiles: string[];
    config: PhpIni;
    extensions: Record<PhpExtensionName, PhpExtensionIni>;
}
