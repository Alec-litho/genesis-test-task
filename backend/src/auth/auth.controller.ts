import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

interface AccessKeyResponse {
  access_token: string;
  base_domain: string;
}

@Controller('api/v1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  @ApiOperation({ summary: 'Get Access Token' })
  @ApiResponse({ status: 200, description: 'Bad Request' })
  async getAccessToken() {
    const access_token = await this.authService.getKey();
    return access_token;
  }
}
