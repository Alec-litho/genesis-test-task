import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class AuthService {
  constructor(private configService: ConfigService) {}

  async getKey() {
    try {
      const accessKey = await axios.get(
        'https://app2.gnzs.ru/amocrm/test/oauth/get-token.php',
        {
          headers: {
            'Content-Type': 'application/json',
            'X-Client-Id': this.configService.get('CLIENT_ID'),
          },
        },
      );
      this.configService.set('ACCESS_KEY', accessKey.data.access_token);
      return accessKey.data.access_token;
    } catch (error) {
      throw new InternalServerErrorException({ message: error });
    }
  }
}
