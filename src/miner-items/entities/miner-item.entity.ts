import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { type TMinerItemType } from 'src/types/TMinerItemType';
import { type TMinerItemRarity } from 'src/types/TMinerItemRarity';

@ObjectType()
export class MinerItem {

  @Field(() => Int)
  id: number;

  @Field(() => String, { description: 'Unique name' })
  name: string;

  @Field(() => String, { description: 'Unique code' })
  code: string;

  @Field(() => Int, { description: 'Level' })
  level: number;

  @Field(() => String, { description: 'Type (COIN, USDT, NFT)' })
  type: TMinerItemType;

  @Field(() => Boolean, { description: 'Next level available?' })
  nextLevel: boolean;

  @Field(() => Float, { description: 'Mining spped per hour' })
  speed: number;

  @Field(() => Float, { description: 'Cost' })
  cost: number;

  @Field(() => String, { description: 'Rarity (common, uncommon, rare, epic, legendary)' })
  rarity: TMinerItemRarity;

  @Field(() => String, { description: 'Image hash in determinated network' })
  image: string;

  @Field(() => String, { description: 'Description' })
  comment: string;

}
