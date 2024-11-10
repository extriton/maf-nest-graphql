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
    return `This action returns all minerItems`;
  }

  findOne(id: number) {
    return `This action returns a #${id} minerItem`;
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
    return `This action removes a #${id} minerItem`;
  }
}
