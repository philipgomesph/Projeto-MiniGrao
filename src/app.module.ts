import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { OfferModule } from './modules/offer/offer.module';

@Module({
  imports: [UserModule, OfferModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
