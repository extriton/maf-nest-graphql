import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {

  constructor(private prisma: PrismaService) {}
  
  create(createUserInput: CreateUserInput) {
    return this.prisma.user.create({
      data: createUserInput
    })
  }

  findAll() {
    return this.prisma.user.findMany({
      include: {
        minerInventory: true
      }
    })
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({
      where: {
        id
      },
      include: {
        minerInventory: true
      }
    })
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return this.prisma.user.update({
      where: {
        id
      },
      data: updateUserInput
    })
  }

  remove(id: number) {
    return this.prisma.user.delete({
      where: {
        id
      }
    })
  }
}
