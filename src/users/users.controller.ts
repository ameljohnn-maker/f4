import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './users.dto';
import { Users } from './users.entity';

@Controller('users')
export class UsersController {
    constructor(private readonly userservice: UsersService) { }

    @Get('db')
    async checkdatabase(): Promise<string> {
        return await this.userservice.checkdb();
    }

    @Post('users')
    async insert(@Body() body: { name: string; email: string }): Promise<Users> {
        return await this.userservice.insert(body);
    }

    @Get('display')
    async findAll(): Promise<Users[]> {
        return await this.userservice.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Users> {
        return this.userservice.findOne1(+id);
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateUserDto: UpdateUserDto,
    ): Promise<Users> {
        return this.userservice.update(+id, updateUserDto);
    }

    @Delete(':id')
    delete(@Param('id') id: string): Promise<{ message: string }> {
        return this.userservice.delete(+id);
    }
}