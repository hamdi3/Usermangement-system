import { Model } from 'mongoose';
import { user } from './interfaces/users.interface';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<user>);
    findAll(): Promise<user[]>;
    findOne(id: string): Promise<user>;
    create(user: user): Promise<user>;
    delete(id: string): Promise<user>;
    update(id: string, user: user): Promise<user>;
}
