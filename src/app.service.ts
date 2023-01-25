import { Injectable } from '@nestjs/common';
import { PrismaClient, User } from '@prisma/client';
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
    return error
     
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
     return error
      
    }
   }
}
