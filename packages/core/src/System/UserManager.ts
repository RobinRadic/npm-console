import { Manager } from '../Support';
import { User, UserInfo } from './User';
import parse from 'parse-passwd';
import { FS } from './Filesystem';

import { userInfo } from 'os';
import { objectify } from '@radic/shared';
import { inject, injectable, postConstruct } from '../Foundation';

let currentUser = userInfo({ encoding: 'utf8' });

@injectable()
export class UserManager extends Manager<User> {
    @inject('fs') fs: FS;

    @postConstruct()
    postConstructor() {
        this.setItems(getUsers(this.fs.get('/etc/passwd')));
    }

    get currentUser(): User {
        return this.get(currentUser.uid);
    }

    getUsernames(){
        this.items.pull('username')
    }
}

const getUsers = (passwd: string): Record<string, User> => {
    return parse(passwd).map(parsed => {
        const { uid, gid, ...userData } = parsed;
        const user: UserInfo            = {
            ...userData,
            uid: parseInt(parsed.uid),
            gid: parseInt(parsed.gid),
        };
        return user;
    }).map(user => [ user.username, new User(user) ]).reduce(objectify, {});
};
