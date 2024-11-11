import { Injectable } from '@nestjs/common';
import { CreateFighterItemInput } from './dto/create-fighter-item.input';
import { UpdateFighterItemInput } from './dto/update-fighter-item.input';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class FighterItemsService {
  
  constructor(private prisma: PrismaService) {}

  create(createFighterItemInput: CreateFighterItemInput) {
    return this.prisma.fighterItems.create({
      data: createFighterItemInput
    })
  }

  findAll() {
    return this.prisma.fighterItems.findMany()
  }

  findOne(id: number) {
    return this.prisma.fighterItems.findUnique({
      where: {
        id
      }
    })
  }

  update(id: number, updateFighterItemInput: UpdateFighterItemInput) {
    return this.prisma.fighterItems.update({
      where: {
        id
      },
      data: updateFighterItemInput
    })
  }

  remove(id: number) {
    return this.prisma.fighterItems.delete({
      where: {
        id
      }
    })
  }
}
