import { Controller, Get, Post, Body } from '@nestjs/common';
import {AppService} from './app.service';

@Controller('users')
export class UsersController {
constructor(private readonly userservice: AppService){}

 @Get('db')
  async checkdatabase(): Promise<string> {
    return await this.userservice.getHello();
  }
}
