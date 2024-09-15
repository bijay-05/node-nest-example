
import { Injectable } from '@nestjs/common';

export interface IUser {
    userId: number;
    userName: string;
    password: string;
};

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      userName: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      userName: 'maria',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<IUser | undefined> {
    return this.users.find(user => user.userName === username);
  }
}
