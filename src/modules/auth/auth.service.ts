import { IAuthToken } from './auth.interface';
import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { v4 as uuidv4 } from "uuid";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private configService: ConfigService
  ) {}

  async logIn(useremail: string, pass: string): Promise<IAuthToken> {
    const logger = new Logger(AuthService.name + "-logIn");
    try {
      const user = await this.usersService.getUser(useremail);
      if (user?.password !== pass) {
        throw new UnauthorizedException();
      }
      const payload = { sub: user.id, sessionId: uuidv4() }

      return {
        accessToken: await this.jwtService.signAsync(
          payload, 
          {
            secret: this.configService.get<string>("ACCESS_TOKEN_SECRET"),
            expiresIn: this.configService.get<string>("ACCESS_TOKEN_EXPIRY")
          }
        )
      }
      
    } catch (err) {
      logger.error(err);
      throw err;
    }
  }
}
