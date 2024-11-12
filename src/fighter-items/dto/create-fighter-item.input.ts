import { Int, Field, Float, InputType } from '@nestjs/graphql';
import { type TFighterItemType } from 'src/types/TFighterItemType';
import { type TFighterItemRarity } from 'src/types/TFighterItemRarity';

@InputType()
export class CreateFighterItemInput {

  @Field(() => String, { description: 'Unique name' })
  name: string;
  
  @Field(() => String, { description: 'Unique code' })
  code: string;

  @Field(() => Int, { description: 'Level' })
  level: number;

  @Field(() => String, { description: 'Type (COIN, USDT, NFT)' })
  type: TFighterItemType;

  @Field(() => Boolean, { description: 'Next level available?', nullable: true })
  nextLevel: boolean;

  @Field(() => Float, { description: 'Cost' })
  cost: number;

  @Field(() => String, { description: 'Rarity (common, uncommon, rare, epic, legendary)', nullable: true })
  rarity: TFighterItemRarity;

  @Field(() => String, { description: 'Image hash in determinated network' })
  image: string;

  @Field(() => String, { description: 'Description', nullable: true })
  comment: string;
  
}
