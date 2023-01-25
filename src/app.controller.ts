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
  @Get("books/products")
  async bookProducts(@Body() createCatDto: any) {
    return this.appService.getBookProducts();
  }
  @Get("books/related")
  async relatedBook(@Body() createCatDto: any) {
    return this.appService.relatedBook();
  }
  @Get("books/kid")
  async kidBook(@Body() createCatDto: any) {
    return this.appService.kidBook();
  }
  @Get("books/best")
  async bestSeller(@Body() createCatDto: any) {
    return this.appService.bestSeller();
  }
  @Get("books/new")
  async newBook(@Body() createCatDto: any) {
    return this.appService.newBook();
  }
  @Get("books/global")
  async globalBook(@Body() createCatDto: any) {
    return this.appService.globalBook();
  }
  @Get("books/exam")
  async examBook(@Body() createCatDto: any) {
    return this.appService.examBook();
  }
  @Get("books/game-stuff")
  async gameAndStuff(@Body() createCatDto: any) {
    return this.appService.gameAndStuff();
  }
}

