import { IsNumber, IsString } from 'class-validator';

export class TransactionDTO {
  @IsString()
  id: string;

  @IsString()
  idUserSell: string;

  @IsString()
  idUserBuy: string;

  @IsNumber()
  priceTransaction: number;

  @IsString()
  idOffer: string;
}
