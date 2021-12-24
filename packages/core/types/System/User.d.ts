export interface UserInfo {
    username: string;
    password: string;
    uid: number;
    gid: number;
    gecos: string;
    homedir: string;
    shell: string;
}
export interface User extends UserInfo {
}
export declare class User {
    isCurrentUser: boolean;
    constructor(info: UserInfo);
}
