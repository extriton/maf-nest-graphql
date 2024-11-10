import { Injectable } from '@nestjs/common';
import { CreateMinerItemInput } from './dto/create-miner-item.input';
import { UpdateMinerItemInput } from './dto/update-miner-item.input';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class MinerItemsService {
  
  constructor(private prisma: PrismaService) {}

  create(createMinerItemInput: CreateMinerItemInput) {
    return this.prisma.minerItems.create({
      data: createMinerItemInput
    })
  }

  findAll() {
    return this.prisma.minerItems.findMany()
  }

  findOne(id: number) {
    return this.prisma.minerItems.findUnique({
      where: {
        id
      }
    })
  }

  update(id: number, updateMinerItemInput: UpdateMinerItemInput) {
    return this.prisma.minerItems.update({
      where: {
        id
      },
      data: updateMinerItemInput
    })
  }

  remove(id: number) {
    return this.prisma.minerItems.delete({
      where: {
        id
      }
    })
  }
}
