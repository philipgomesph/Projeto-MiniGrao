import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './dto/user.dto';
import { modeUser } from '@prisma/client';
import { UserEntity } from './entity/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() data: UserDTO) {
    return this.userService.create(data);
  }

  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() data: UserDTO) {
    const updatedUser: UserEntity = await this.userService.update(data, id);

    return updatedUser;
  }

  @Get()
  async showAllUser() {
    return this.userService.showAll();
  }
  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return this.userService.delete(id);
  }
}
