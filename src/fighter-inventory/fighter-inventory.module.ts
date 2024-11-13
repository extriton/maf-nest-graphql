import { Module } from '@nestjs/common';
import { FighterInventoryService } from './fighter-inventory.service';
import { FighterInventoryResolver } from './fighter-inventory.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [FighterInventoryResolver, FighterInventoryService, PrismaService],
})
export class FighterInventoryModule {}
