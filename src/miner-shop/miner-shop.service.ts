import { Injectable } from '@nestjs/common';
import { CreateMinerShopInput } from './dto/create-miner-shop.input';
import { UpdateMinerShopInput } from './dto/update-miner-shop.input';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class MinerShopService {
  
  constructor(private prisma: PrismaService) {}

  create(createMinerShopInput: CreateMinerShopInput) {
    return this.prisma.minerShop.create({
      data: createMinerShopInput
    })
  }

  findAll() {
    return this.prisma.minerShop.findMany({
      include: {
        minerItem: true
      }
    })
  }

  async findOne(id: number) {
    const result = await this.prisma.minerShop.findUnique({
      where: {
        id
      },
      include: {
        minerItem: true
      }
    })
    console.log(result)
    return result
  }

  update(id: number, updateMinerShopInput: UpdateMinerShopInput) {
    return this.prisma.minerShop.update({
      where: {
        id
      },
      data: updateMinerShopInput
    })
  }

  remove(id: number) {
    return this.prisma.minerShop.delete({
      where: {
        id
      }
    })
  }
}
