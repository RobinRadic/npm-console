import { execSync } from 'child_process';
console.log('APACHE_RUN_DIR',process.env.APACHE_RUN_DIR)

 execSync('source /etc/apache2/envvars', {
    env: process.env,
    cwd: '/',
    shell:'bash',
    stdio:'inherit'
})
const output =execSync('echo ${APACHE_RUN_DIR}', {
    env: process.env,
    cwd: '/',
    shell:'bash',
}).toString()

console.log('APACHE_RUN_DIR',process.env.APACHE_RUN_DIR)


console.log('output', output)
