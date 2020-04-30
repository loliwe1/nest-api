import { Controller, Request, Post, UseGuards, Body } from '@nestjs/common'
import { LocalAuthGuard } from './guards/local-auth.guard'
import { AuthService } from './services/auth.service'
import { ValidationCreateUserPipe } from './pipe/validation.create-user.pipe'
import { CreateUserDto } from 'src/users/create-user.dto'

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user)
  }
  @Post('signup')
  async signup(@Body(new ValidationCreateUserPipe()) createUserDto: CreateUserDto) {
    return this.authService.signUp(createUserDto)

  }

}