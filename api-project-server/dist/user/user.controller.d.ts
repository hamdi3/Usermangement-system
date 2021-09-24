import { user } from './interfaces/users.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findall(): Promise<user[]>;
    findone(id: any): Promise<user>;
    create(createUserDto: CreateUserDto): Promise<user>;
    delete(id: any): Promise<user>;
    update(updateUserDto: CreateUserDto, id: any): Promise<user>;
}
