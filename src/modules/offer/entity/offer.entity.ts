export class OfferEntity {
  id: string;
  idUserOffer: string;
  priceOffer: number;
  amountOffer: number;
  commodities: number;
  typeOfferId: number;
  userId: string;

  constructor(payload: {
    id: string;
    idUserOffer: string;
    priceOffer: number;
    amountOffer: number;
    commodities: number;
    typeOfferId: number;
    userId: string;
  }) {
    this.id = payload.id;
    this.idUserOffer = payload.idUserOffer;
    this.priceOffer = payload.priceOffer;
    this.amountOffer = payload.amountOffer;
    this.commodities = payload.commodities;
    this.typeOfferId = payload.typeOfferId;
    this.userId = payload.userId;
  }
}
