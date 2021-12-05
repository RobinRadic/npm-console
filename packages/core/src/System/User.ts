export interface UserInfo {
    username: string;
    password: string;
    uid: number;
    gid: number;
    gecos: string;
    homedir: string;
    shell: string;
}

export interface User extends UserInfo {}

import { userInfo } from 'os';

let currentUser = userInfo({ encoding: 'utf8' });

export class User {
    isCurrentUser: boolean = false;

    constructor(info: UserInfo) {
        Object.assign(this, info);
        this.isCurrentUser = this.uid === currentUser.uid;
    }
}


let u = new User(null);
