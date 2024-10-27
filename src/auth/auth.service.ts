import { IAuthToken } from './auth.interface';
import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async logIn(useremail: string, pass: string): Promise<IAuthToken> {
    const logger = new Logger(AuthService.name + "-logIn");
    try {
      const user = await this.usersService.getUser(useremail);
      if (user?.password !== pass) {
        throw new UnauthorizedException();
      }
      const payload = { sub: user.id, username: user.username }

      return {
        accessToken: await this.jwtService.signAsync(payload)
      }
      
    } catch (err) {
      logger.error(err);
      throw err;
    }
  }
}
