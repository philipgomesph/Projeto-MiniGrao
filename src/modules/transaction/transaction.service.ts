import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { TransactionDTO } from './dto/transaction.dto';

@Injectable()
export class TransactionService {
  constructor(private prisma: PrismaService) {}

  async store(data: TransactionDTO) {
    const transactionCreated = await this.prisma.modelTransaction.upsert({
      where: {
        id: data.id,
      },
      update: {
        idUserSell: data.idUserSell,

        idUserBuy: data.idUserBuy,

        idOffer: data.idOffer,

        priceTransaction: data.priceTransaction,
      },
      create: {
        id: data.id,

        idUserSell: data.idUserSell,

        idUserBuy: data.idUserBuy,

        idOffer: data.idOffer,

        priceTransaction: data.priceTransaction,
      },
    });
  }
}
