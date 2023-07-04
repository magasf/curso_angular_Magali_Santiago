import { ConflictException, Injectable } from '@nestjs/common';
import { User } from './users.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {


    constructor(
        @InjectRepository(User) 
        private userRepo: Repository<User>,
    ){}

    findById(id: number): Promise<User | null> {
        return this.userRepo.findOne({ 
            where: {
                id: id
            },
         });
    }

    findByEmail(email: string): Promise<User | null> {
        return this.userRepo.findOne({ 
            where: {
                email: email
            },
         });
    }

    async create(user: User): Promise<User> {
        try {
            return await this.userRepo.save(user);
        } catch (error) {
            console.log(error.message);
            throw new ConflictException('Cant save');
        }
    }

}
