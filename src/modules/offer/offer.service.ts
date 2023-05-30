import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { offerDTO } from './dto/offer.dto';
import { PrismaService } from 'src/database/PrismaService';
import { modelOffer } from '@prisma/client';

@Injectable()
export class OfferService {
  constructor(private prisma: PrismaService) {}

  async create(data: offerDTO) {
    const offerExist = await this.prisma.modelOffer.findFirst({
      where: {
        id: data.id,
      },
    });

    if (!offerExist) {
      throw new BadRequestException('Id de oferta já existe');
    }
    const newOffer: modelOffer = await this.prisma.modelOffer.create({ data });

    return { 'Oferta criada': newOffer };
  }

  async showAll() {
    const allOffers = await this.prisma.modelOffer.findMany();

    if (!allOffers) {
      throw new NotFoundException('Não existe ofertas cadastradas');
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
      throw new NotFoundException('Usuario não existe');
    }

    return await this.prisma.modelOffer.findMany({
      where: {
        userId: idUser,
      },
    });
  }

  async deleteOfferById(idOffer: string) {
    const offerExist = await this.prisma.modelOffer.findFirst({
      where: {
        id: idOffer,
      },
    });

    if (!offerExist) {
      throw new NotFoundException('Oferta não encontrada');
    }

    const offerToDelete = await this.prisma.modelOffer.delete({
      where: {
        id: idOffer,
      },
    });

    return { 'Oferta deletada': offerToDelete.id };
  }
}
