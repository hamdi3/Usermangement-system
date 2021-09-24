import { Body, Controller, Get, Param, Post, Delete, Put } from '@nestjs/common';
import { user } from './interfaces/users.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    async findall(): Promise<user[]> {
        return this.userService.findAll();
    }

    @Get(':id')
    async findone(@Param('id') id): Promise<user> {
        return this.userService.findOne(id)
    }

    @Post()
    async create(@Body() createUserDto: CreateUserDto): Promise<user> {
        return this.userService.create(createUserDto);
    }

    @Delete(':id')
    async delete(@Param('id') id): Promise<user> {
        return this.userService.delete(id)
    }

    @Put(':id')
    async update(@Body() updateUserDto: CreateUserDto, @Param('id') id): Promise<user> {
        return this.userService.update(id, updateUserDto)
    }

}
