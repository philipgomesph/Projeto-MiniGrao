export class TransactionEntity {
  id: string;
  idUserSell: string;
  idUserBuy: string;
  priceTransaction: number;
  idOffer: string;

  constructor(payload: {
    id: string;
    idUserSell: string;
    idUserBuy: string;
    priceTransaction: number;
    idOffer: string;
  }) {
    this.id = payload.id;
    this.idUserSell = payload.idUserSell;
    this.idUserBuy = payload.idUserBuy;
    this.priceTransaction = payload.priceTransaction;
    this.idOffer = payload.idOffer;
  }
}
