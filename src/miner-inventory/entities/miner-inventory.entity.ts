import { ObjectType, Field, Int } from '@nestjs/graphql';
import { type TMinerItemType } from 'src/types/TMinerItemType';
import { MinerItem } from 'src/miner-items/entities/miner-item.entity';

@ObjectType()
export class MinerInventory {

  @Field(() => Int)
  id: number;

  @Field(() => Int, { description: 'User ID' })
  userId: number;

  @Field(() => String, { description: 'Unique code' })
  code: string;

  @Field(() => Int, { description: 'Level' })
  level: number;

  @Field(() => String, { description: 'Type (COIN, USDT, NFT)' })
  type: TMinerItemType;

  @Field(() => Boolean, { description: 'Is disabled?' })
  disabled: boolean;

  @Field(() => MinerItem, { description: 'Miner item other fields' })
  minerItem: MinerItem;

}
