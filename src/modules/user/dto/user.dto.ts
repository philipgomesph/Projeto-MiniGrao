import { IsString } from 'class-validator';

export class UserDTO {
  @IsString()
  id: string;

  @IsString()
  nameUser: string;

  @IsString()
  statusUser: string;

  @IsString()
  passwordUser: string;

  @IsString()
  loginUser: string;
}

export enum statusUserEnum {
  vendedor = 1,
  comprador = 2,
  vendedorcomprador = 3,
  admin = 0,
}

export type statusUserDTO = {
  id: number;
  status: statusUserEnum;
};
