import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/abc')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/111')
  getHello(): string {
    return this.appService.getHello();
  } 
}
