import { Module, OnModuleInit } from '@nestjs/common';
import { FighterShopService } from './fighter-shop.service';
import { FighterShopResolver } from './fighter-shop.resolver';
import { PrismaService } from 'src/prisma.service';
import { initialData } from './initial-data';

@Module({
  providers: [FighterShopResolver, FighterShopService, PrismaService],
  exports: []
})
export class FighterShopModule implements OnModuleInit {

  constructor(private prisma: PrismaService) {}
  
  async onModuleInit() {

    console.log('FighterShopModule init...')

    const fighterShopCount = await this.prisma.fighterShop.count()

    if (fighterShopCount === 0) {
      console.log('Store initial MinerShop data...')

      for (const fighterShop of initialData) {
        try {
          await this.prisma.fighterShop.create({ data: fighterShop })
        } catch (e) {
          console.error(e.message)
        }
      }
    }
    
  }
}
