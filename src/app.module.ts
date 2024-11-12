import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { MinerItemsModule } from './miner-items/miner-items.module';
import { join } from "path";
import { FighterItemsModule } from './fighter-items/fighter-items.module';
import { MinerShopModule } from './miner-shop/miner-shop.module';
import { FighterShopModule } from './fighter-shop/fighter-shop.module';
import { MinerInventoryModule } from './miner-inventory/miner-inventory.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    MinerItemsModule,
    FighterItemsModule,
    MinerShopModule,
    FighterShopModule,
    MinerInventoryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
