import { Injectable } from '@nestjs/common';
// import { CreatePaymentInput } from './dto/create-payment.input';
// import { UpdatePaymentInput } from './dto/update-payment.input';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PaymentsService {
  constructor(private prisma: PrismaService) {}
  
  // create(createPaymentInput: CreatePaymentInput) {
  //   return this.prisma.payment.create({
  //     data: createPaymentInput
  //   });
  // }

  findAll() {
    return this.prisma.payment.findMany({});
  }

  findOne(id: string) {
    return this.prisma.payment.findUnique({
      where: {
        id,
      }
    });
  }

  // update(id: string, updatePaymentInput: UpdatePaymentInput) {
  //   return this.prisma.payment.update({
  //     where: {
  //       id,
  //     },
  //     data: updatePaymentInput,
  //   });
  // }

  remove(id: string) {
    return this.prisma.payment.delete({
      where: {
        id,
      }
    });
  }
}
