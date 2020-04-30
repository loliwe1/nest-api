import { Injectable, BadRequestException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from './user.entity'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) { }

  async findOne(email: string): Promise<User> | undefined {
    const user = await this.usersRepository.findOne({ email });
    return user
  }


  async create(email, password): Promise<User> {
    return this.usersRepository.save({ email, password });
  }

}
