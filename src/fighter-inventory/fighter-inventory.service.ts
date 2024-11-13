import { Injectable } from '@nestjs/common';
import { CreateFighterInventoryInput } from './dto/create-fighter-inventory.input';
import { UpdateFighterInventoryInput } from './dto/update-fighter-inventory.input';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class FighterInventoryService {
  constructor(private prisma: PrismaService) {}

  create(createFighterInventoryInput: CreateFighterInventoryInput) {
    return this.prisma.fighterInventory.create({
      data: createFighterInventoryInput,
    });
  }

  findAll() {
    return this.prisma.fighterInventory.findMany({
      include: {
        fighterItem: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.fighterInventory.findUnique({
      where: {
        id,
      },
      include: {
        fighterItem: true,
      },
    });
  }

  update(id: number, updateFighterInventoryInput: UpdateFighterInventoryInput) {
    return this.prisma.fighterInventory.update({
      where: {
        id,
      },
      data: updateFighterInventoryInput,
    });
  }

  remove(id: number) {
    return this.prisma.fighterInventory.delete({
      where: {
        id,
      },
    });
  }
}
