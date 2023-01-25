import { Injectable } from '@nestjs/common';
import { Book, PrismaClient, User } from '@prisma/client';
const prisma = new PrismaClient();
@Injectable()
export class AppService {
  async createUser(data): Promise<User> {
    try {
      const newUser = await prisma.user.create({
        data: {
          name: 'Alice2',
          email: data.email,
        },
      });
      return newUser;
    } catch (error) {
      return error;
    }
  }
  async getUserByEmail(data): Promise<User> {
    try {
      const newUser = await prisma.user.findUnique({
        where: {
          email: data.email,
        },
      });
      return newUser;
    } catch (error) {
      return error;
    }
  }
  async relatedBook(): Promise<any> {
    try {
      const books = await prisma.relatedBook.findMany();
      return books;
    } catch (error) {
      return error;
    }
  }
  async kidBook(): Promise<any> {
    try {
      const books = await prisma.kidBook.findMany();
      return books;
    } catch (error) {
      return error;
    }
  }
  async bestSeller(): Promise<any> {
    try {
      const books = await prisma.bestSeller.findMany();
      return books;
    } catch (error) {
      return error;
    }
  }
  async newBook(): Promise<any> {
    try {
      const books = await prisma.newBook.findMany();
      return books;
    } catch (error) {
      return error;
    }
  }
  async globalBook(): Promise<any> {
    try {
      const books = await prisma.globalBook.findMany();
      return books;
    } catch (error) {
      return error;
    }
  }
  async examBook(): Promise<any> {
    try {
      const books = await prisma.examBook.findMany();
      return books;
    } catch (error) {
      return error;
    }
  }
  async gameAndStuff(): Promise<any> {
    try {
      const books = await prisma.gameAndStuff.findMany();
      return books;
    } catch (error) {
      return error;
    }
  }
  async getBookProducts(): Promise<any> {
    try {
      const books = await prisma.bookPoduct.findMany();
      return books;
    } catch (error) {
      return error;
    }
  }
}
