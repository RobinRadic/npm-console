import { Manager } from '../Support';
import { User } from './User';
import { FS } from './Filesystem';
export declare class UserManager extends Manager<User> {
    fs: FS;
    postConstructor(): void;
    get currentUser(): User;
    getUsernames(): void;
}
