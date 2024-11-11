import { Injectable } from '@nestjs/common';
import { CreateFighterShopInput } from './dto/create-fighter-shop.input';
import { UpdateFighterShopInput } from './dto/update-fighter-shop.input';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class FighterShopService {
  
  constructor(private prisma: PrismaService) {}

  create(createFighterShopInput: CreateFighterShopInput) {
    return this.prisma.fighterShop.create({
      data: createFighterShopInput
    })
  }

  findAll() {
    return this.prisma.fighterShop.findMany({
      include: {
        fighterItem: true
      }
    })
  }

  findOne(id: number) {
    return this.prisma.fighterShop.findUnique({
      where: {
        id
      },
      include: {
        fighterItem: true
      }
    })
  }

  update(id: number, updateFighterShopInput: UpdateFighterShopInput) {
    return this.prisma.fighterShop.update({
      where: {
        id
      },
      data: updateFighterShopInput
    })
  }

  remove(id: number) {
    return this.prisma.fighterShop.delete({
      where: {
        id
      }
    })
  }
}
