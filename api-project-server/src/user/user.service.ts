import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
import { user } from './interfaces/users.interface';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<user>) { }

    async findAll(): Promise<user[]> {
        return await this.userModel.find();
    }

    async findOne(id: string): Promise<user> {
        return await this.userModel.findOne({ _id: id });
    }

    async create(user: user): Promise<user> {
        const newUser = new this.userModel(user);
        return await newUser.save();
        //return await this.userModel.create(newUser);
    }

    async delete(id: string): Promise<user> {
        return await this.userModel.findByIdAndDelete(id);
        //return await this.userModel.findById(id).delte();
    }

    async update(id: string, user: user): Promise<user> {
        return await this.userModel.findByIdAndUpdate(id, user, { new: true });
        //return await this.userModel.findById(id).update(user, {new:true});
    }
}
