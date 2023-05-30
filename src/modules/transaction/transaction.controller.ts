import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionDTO } from './dto/transaction.dto';
import { identity } from 'rxjs';

@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post(':idOffer/:idUserBuy')
  async createTransaction(
    @Param('idUserBuy') idUserBuy: string,
    @Param('idOffer') idOffer: string,
  ) {
    return this.transactionService.store(idUserBuy, idOffer);
  }

  @Get(':idUser')
  async showSellerTransactionByUserId(@Param('idUser') idUser: string) {
    return this.transactionService.showSellerTransactionByUserid(idUser);
  }

  @Get('buy/:idUser')
  async showBuyerTransactionByUserId(@Param('idUser') idUser: string) {
    return this.transactionService.showBuyerTransactionByUserid(idUser);
  }

  @Get()
  async showAllTransactions() {
    return this.transactionService.showAll();
  }
}
