import { Module } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentsResolver } from './payments.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [PaymentsResolver, PaymentsService, PrismaService],
})
export class PaymentsModule {}
