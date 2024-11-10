import { Module, OnModuleInit } from '@nestjs/common';
import { MinerItemsService } from './miner-items.service';
import { MinerItemsResolver } from './miner-items.resolver';
import { PrismaService } from 'src/prisma.service';
import { initialData } from './initial-data';

@Module({
  providers: [MinerItemsResolver, MinerItemsService, PrismaService],
  exports: []
})
export class MinerItemsModule implements OnModuleInit {

  constructor(private prisma: PrismaService) {}
  
  async onModuleInit() {

    console.log('MinerItemsModule init...')

    const minerItemsCount = await this.prisma.minerItems.count()

    if (minerItemsCount === 0) {
      console.log('Store initial MinerItems data...')

      for (const minerItem of initialData) {
        try {
          await this.prisma.minerItems.create({ data: minerItem })
        } catch (e) {
          console.error(e.message)
        }
      }
    }
    
  }
}
