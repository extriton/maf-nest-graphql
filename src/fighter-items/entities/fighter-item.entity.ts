import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { type TFighterItemType } from 'src/types/TFighterItemType';
import { type TFighterItemRarity } from 'src/types/TFighterItemRarity';

@ObjectType()
export class FighterItem {

  @Field(() => Int)
  id: number;

  @Field(() => String, { description: 'Unique code' })
  code: string;

  @Field(() => String, { description: 'Unique name' })
  name: string;

  @Field(() => String, { description: 'Type (COIN, USDT, NFT)' })
  type: TFighterItemType;

  @Field(() => Int, { description: 'Level' })
  level: number;

  @Field(() => Boolean, { description: 'Next level available?' })
  nextLevel: boolean;

  @Field(() => Float, { description: 'Cost' })
  cost: number;

  @Field(() => String, { description: 'Rarity (common, uncommon, rare, epic, legendary)' })
  rarity: TFighterItemRarity;

  @Field(() => String, { description: 'Image hash in determinated network' })
  image: string;

  @Field(() => String, { description: 'Description' })
  description: string;

}
