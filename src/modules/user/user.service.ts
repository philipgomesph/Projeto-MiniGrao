import { Injectable, NotFoundException } from '@nestjs/common';
import { UserDTO } from './dto/user.dto';
import { PrismaService } from 'src/database/PrismaService';
import { UserEntity } from './entity/user.entity';
import { modeUser } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(data: UserDTO) {
    //Verificando se o usuario já existe
    const userExist = await this.prisma.modeUser.findFirst({
      where: {
        loginUser: data.loginUser,
      },
    });

    //validando usuario existente
    if (userExist) {
      throw new Error('Usuario já existe');
    }

    //caso usuario nao exista, cria
    const userCreated = await this.prisma.modeUser.create({
      data,
    });

    return { msg: 'Usuario criado com sucesso' };
  }

  async showAll() {
    const allUsers = await this.prisma.modeUser.findMany();

    if (!allUsers) {
      throw new Error('Não existe usuarios cadastrados');
    }

    return allUsers;
  }

  async update(data: UserDTO, id: string): Promise<UserEntity> {
    const userExist: modeUser = await this.prisma.modeUser.findUnique({
      where: {
        id,
      },
    });

    //validando usuario existente
    if (!userExist) {
      throw new NotFoundException('Usuario não existe');
    }

    const updatedUser: modeUser = await this.prisma.modeUser.update({
      data,
      where: {
        id,
      },
    });

    const user = new UserEntity(updatedUser);

    return user;
  }
  async delete(id: string) {
    //Verificando se o usuario já existe
    const userExist = await this.prisma.modeUser.findFirst({
      where: {
        loginUser: id,
      },
    });

    if (!userExist) {
      throw new Error('Usuario não existe');
    }

    const returnDelete = await this.prisma.modeUser.delete({
      where: {
        id,
      },
    });

    console.log({ UsuarioDeletado: returnDelete });

    return returnDelete;
  }
}
