import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { OfferService } from './offer.service';
import { offerDTO } from './dto/offer.dto';

@Controller('offer')
export class OfferController {
  constructor(private readonly offerService: OfferService) {}

  @Post()
  async createOffer(@Body() data: offerDTO) {
    return this.offerService.create(data);
  }

  @Get()
  async showAllOffer() {
    return this.offerService.showAll();
  }

  @Get(':id')
  async showOfferById(@Param('id') id: string) {
    return this.offerService.showOfferById(id);
  }

  @Delete(':id')
  async deleteOfferById(@Param('id') id: string) {
    return this.offerService.deleteOfferById(id);
  }
}
