import { Column, Entity } from 'typeorm';
import { StatusUserEnum } from '../enum/user-status.enum';
import { statusUserEnum } from '../dto/user.dto';
import { OfferEntity } from 'src/modules/offer/entity/offer.entity';

export class UserEntity {
  id: string;
  nameUser: string;
  passwordUser: string;
  loginUser: string;
  //statusUser: statusUserEnum;
  statusUser: string; //alterar para receber enum
  offerUser?: OfferEntity;

  constructor(payload: {
    id: string;
    nameUser: string;
    passwordUser: string;
    loginUser: string;
    //statusUser: statusUserEnum;
    statusUser: string;
  }) {
    this.id = payload.id;
    this.nameUser = payload.nameUser;
    this.passwordUser = payload.passwordUser;
    this.loginUser = payload.loginUser;
    this.statusUser = payload.statusUser;
  }

  setOfferUser(offers: OfferEntity) {
    this.offerUser = offers;
    return this;
  }
}
