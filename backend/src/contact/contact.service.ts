import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class ContactService {
  constructor(private configService: ConfigService) {}

  async create(createContactDto: CreateContactDto) {
    try {
      return await axios.post(
        'https://lirifey500.amocrm.ru/api/v4/contacts',
        [
          {
            name: 'Владимир Смирнов',
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
