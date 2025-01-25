import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DealService } from './deal.service';
import { CreateDealDto } from './dto/create-deal.dto';

@Controller('api/v1/deals')
export class DealController {
  constructor(private readonly dealService: DealService) {}

  @Post()
  async create(@Body() createDealDto: CreateDealDto) {
    const dealData = await this.dealService.create(createDealDto);
    return dealData.data._embedded.leads[0].id;
  }
}
