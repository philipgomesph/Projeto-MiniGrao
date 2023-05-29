import { Transform } from 'class-transformer';
import { IsBoolean, IsNumber, IsString } from 'class-validator';

export type commoditiesDTO = {
  id: number;
  commodities: string;
};

export class typeOfferDTO {
  id: number;
  types: string;
}

export class offerDTO {
  @IsString()
  id: string;

  @IsString()
  idUserOffer: string;

  @IsNumber()
  @Transform(({ value }) => Number(value))
  priceOffer: number;

  @IsNumber()
  amountOffer: number;

  @IsNumber()
  commodities: number;

  @IsNumber()
  typeOfferId: number;

  @IsString()
  userId: string;

  @IsBoolean()
  open: boolean;
}

export type transactionDTO = {
  id: string;
  idUserSell: string;
  idUserBuy: string;
  priceTransaction: number;
  idOffer: string;
};
