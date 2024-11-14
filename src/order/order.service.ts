import { Injectable } from '@nestjs/common';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  create(createOrderInput: CreateOrderInput) {
    return this.prisma.order.create({
      data: createOrderInput,
    });
  }

  findAll() {
    return this.prisma.order.findMany({
      include: {
        user: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.order.findUnique({
      where: {
        id,
      },
      include: {
        user: true,
      },
    });
  }

  update(id: number, updateOrderInput: UpdateOrderInput) {
    return this.prisma.order.update({
      where: {
        id,
      },
      data: updateOrderInput,
    });
  }

  remove(id: number) {
    return this.prisma.order.delete({
      where: {
        id,
      },
    });
  }
}
