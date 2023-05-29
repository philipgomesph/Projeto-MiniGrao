import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { TransactionDTO } from './dto/transaction.dto';
import { OfferEntity } from '../offer/entity/offer.entity';
import { offerDTO, transactionDTO } from '../offer/dto/offer.dto';
import { TransactionEntity } from './entity/transaction.entity';

@Injectable()
export class TransactionService {
  constructor(private prisma: PrismaService) {}

  async store(idUserBuy: string, idOffer: string) {
    const verifyOffer = await this.prisma.modelOffer.findFirst({
      where: {
        id: idOffer,
      },
    });

    if (!verifyOffer) {
      throw new NotFoundException('Ofertas nao encontradas com esse ID');
    }

    const verifyUserExist = await this.prisma.modeUser.findFirst({
      where: {
        id: idUserBuy,
      },
    });

    if (!verifyUserExist) {
      throw new NotFoundException('ID de Usuario de compra, nao encontrado');
    }

    const data: transactionDTO = {
      id: '',
      idOffer: verifyOffer.id,
      priceTransaction: Number(verifyOffer.priceOffer),
      idUserBuy,
      idUserSell: verifyOffer.idUserOffer,
    };

    const transactionCreated = await this.prisma.modelTransaction.create({
      data,
    });

    const offerUpdated = await this.prisma.modelOffer.update({
      where: {
        id: idOffer,
      },
      data: {
        open: false,
      },
    });

    return { 'Transacao criada': transactionCreated };
  }
}
