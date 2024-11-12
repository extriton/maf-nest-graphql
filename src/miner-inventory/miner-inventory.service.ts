import { Injectable } from '@nestjs/common';
import { CreateMinerInventoryInput } from './dto/create-miner-inventory.input';
import { UpdateMinerInventoryInput } from './dto/update-miner-inventory.input';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class MinerInventoryService {
  
  constructor(private prisma: PrismaService) {}

  create(createMinerInventoryInput: CreateMinerInventoryInput) {
    return this.prisma.minerInventory.create({
      data: createMinerInventoryInput
    })
  }

  findAll() {
    return this.prisma.minerInventory.findMany({
      include: {
        minerItem: true
      }
    })
  }

  findOne(id: number) {
    return this.prisma.minerInventory.findUnique({
      where: {
        id
      },
      include: {
        minerItem: true
      }
    })
  }

  update(id: number, updateMinerInventoryInput: UpdateMinerInventoryInput) {
    return this.prisma.minerInventory.update({
      where: {
        id
      },
      data: updateMinerInventoryInput
    })
  }

  remove(id: number) {
    return this.prisma.minerInventory.delete({
      where: {
        id
      }
    })
  }
}
