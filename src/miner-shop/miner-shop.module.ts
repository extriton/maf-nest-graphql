import { Module, OnModuleInit } from '@nestjs/common';
import { MinerShopService } from './miner-shop.service';
import { MinerShopResolver } from './miner-shop.resolver';
import { PrismaService } from 'src/prisma.service';
import { initialData } from './initial-data';

@Module({
  providers: [MinerShopResolver, MinerShopService, PrismaService],
  exports: []
})
export class MinerShopModule implements OnModuleInit {

  constructor(private prisma: PrismaService) {}
  
  async onModuleInit() {

    console.log('MinerShopModule init...')

    const minerShopCount = await this.prisma.minerShop.count()

    if (minerShopCount === 0) {
      console.log('Store initial MinerShop data...')

      for (const minerShop of initialData) {
        try {
          await this.prisma.minerShop.create({ data: minerShop })
        } catch (e) {
          console.error(e.message)
        }
      }
    }
    
  }
}
