import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { PrismaService } from 'src/prisma.service';
import { minerBonusInventory } from 'src/config/config';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(createUserInput: CreateUserInput) {
    const createdUser = await this.prisma.user.create({
      data: createUserInput,
    });

    for (const minerBonusItem of minerBonusInventory) {
      await this.prisma.minerInventory.create({
        data: {
          userId: createdUser.id,
          code: minerBonusItem.code,
          level: minerBonusItem.level,
          type: minerBonusItem.type,
          slot: minerBonusItem.slot
        }
      });
    }

    return createdUser;
  }

  findAll() {
    return this.prisma.user.findMany({
      include: {
        minerInventory: {
          include: {
            minerItem: true,
          },
        },
        fighterInventory: {
          include: {
            fighterItem: true
          }
        },
        payments: true
      },
    });
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
      include: {
        minerInventory: {
          include: {
            minerItem: true,
          },
        },
        fighterInventory: {
          include: {
            fighterItem: true
          }
        },
        payments: true
      },
    });
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return this.prisma.user.update({
      where: {
        id,
      },
      data: updateUserInput,
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
