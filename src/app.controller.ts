import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): Promise<string> {
  //   return this.appService.getHello();
  // }

  @Post("create-user")
  async createUser(@Body() createCatDto: any) {
    return this.appService.createUser(createCatDto);
  }
  @Get("user-by-email")
  async getUserByEmail(@Body() createCatDto: any) {
    return this.appService.getUserByEmail(createCatDto);
  }
}

