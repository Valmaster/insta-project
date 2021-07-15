import {
  Body,
  Controller,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthService } from './auth.service';
import { User } from './user.entity';
import { GetUser } from './get-user.decorator';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('auth/signup')
  signUp(
    @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto,
  ): Promise<void> {
    return this.authService.signUp(authCredentialsDto);
  }

  @Post('auth/signin')
  signIn(
    @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(authCredentialsDto);
  }

  /*  @Patch('following/:id')
  follow(
    @Param('id', ParseIntPipe) id: number,
    @GetUser() user: User,
  ): Promise<User> {
    return this.authService.follow(id, user);
  }*/
}
