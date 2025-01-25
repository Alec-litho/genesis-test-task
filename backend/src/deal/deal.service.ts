import { Injectable } from '@nestjs/common';
import { CreateDealDto } from './dto/create-deal.dto';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DealService {
  constructor(private configService: ConfigService) {}

  async create(createDealDto: CreateDealDto) {
    console.log(this.configService.get('ACCESS_KEY'));
    try {
      return await axios.post(
        'https://lirifey500.amocrm.ru/api/v4/leads',
        [
          {
            name: 'Сделка для примера 2',
          },
        ],
        {
          headers: {
            Authorization: `Bearer ${this.configService.get('ACCESS_KEY')}`,
          },
        },
      );
    } catch (error) {
      console.log(error);
    }
  }
}
