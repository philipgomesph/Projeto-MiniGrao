import { Injectable } from '@nestjs/common';
import { offerDTO } from './dto/offer.dto';
import { PrismaService } from 'src/database/PrismaService';
import { modelOffer } from '@prisma/client';

@Injectable()
export class OfferService {
  constructor(private prisma: PrismaService) {}

  async create(data: offerDTO) {
    const newOffer: modelOffer = await this.prisma.modelOffer.create({ data });

    return { 'Oferta criada': newOffer };
  }

  async showAll() {
    const allOffers = await this.prisma.modelOffer.findMany();

    if (!allOffers) {
      throw new Error('Não existe ofertas cadastradas');
    }

    return allOffers;
  }

  async showOfferById(idUser: string) {
    const userExist = await this.prisma.modeUser.findFirst({
      where: {
        id: idUser,
      },
    });

    if (!userExist) {
      throw new Error('Usuario não existe');
    }

    return await this.prisma.modelOffer.findMany({
      where: {
        userId: idUser,
      },
    });
  }
}
