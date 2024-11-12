import { Module } from '@nestjs/common';
import { MinerInventoryService } from './miner-inventory.service';
import { MinerInventoryResolver } from './miner-inventory.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [MinerInventoryResolver, MinerInventoryService, PrismaService],
  exports: []
})
export class MinerInventoryModule {}
