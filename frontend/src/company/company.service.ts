import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CompanyService {
  constructor(private configService: ConfigService) {}

  async create(createCompanyDto: CreateCompanyDto) {
    try {
      return await axios.post(
        'https://lirifey500.amocrm.ru/api/v4/companies',
        [
          {
            name: 'АО Рога и Копыта',
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
