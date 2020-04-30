import { Injectable, BadRequestException } from '@nestjs/common'
import { UsersService } from '../../users/users.service'
import { JwtService } from '@nestjs/jwt'


@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) { }

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async signUp(user) {
    const { email, password, confirm } = user
    if (password !== confirm) return new BadRequestException
    const user2 = await this.usersService.create(email, password)
    return user2
  }


  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

}

