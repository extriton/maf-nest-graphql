import { ObjectType, Field, Int } from '@nestjs/graphql';
import { MinerItem } from 'src/miner-items/entities/miner-item.entity';
import { type TMinerItemType } from 'src/types/TMinerItemType';
import { type TMinerSlot } from 'src/types/TMinerSlot';

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

  @Field(() => String, { description: 'Miner item slot (none, s1, s2, s3, s4)' })
  slot: TMinerSlot;

  @Field(() => Date, { description: 'Last claim at...' })
  lastClaimAt: Date;

  @Field(() => MinerItem, { description: 'Miner item other fields' })
  minerItem: MinerItem;

}
