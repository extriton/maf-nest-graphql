import { Module, OnModuleInit } from '@nestjs/common';
import { FighterItemsService } from './fighter-items.service';
import { FighterItemsResolver } from './fighter-items.resolver';
import { PrismaService } from 'src/prisma.service';
import { initialData } from './initial-data';

@Module({
  providers: [FighterItemsResolver, FighterItemsService, PrismaService],
  exports: []
})
export class FighterItemsModule implements OnModuleInit {

  constructor(private prisma: PrismaService) {}
  
  async onModuleInit() {

    console.log('FighterItemsModule init...')

    const fighterItemsCount = await this.prisma.fighterItems.count()

    if (fighterItemsCount === 0) {
      console.log('Store initial FighterItems data...')

      for (const fighterItem of initialData) {
        try {
          await this.prisma.fighterItems.create({ data: fighterItem })
        } catch (e) {
          console.error(e.message)
        }
      }
    }
    
  }
}
