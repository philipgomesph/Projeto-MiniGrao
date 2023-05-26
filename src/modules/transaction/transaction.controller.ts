import { Body, Controller, Post } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionDTO } from './dto/transaction.dto';

@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post()
  async createTransaction(@Body() data: TransactionDTO) {
    return this.transactionService.store(data);
  }
}
