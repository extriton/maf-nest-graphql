import { ObjectType, Field, Int } from '@nestjs/graphql';
import { type TFighterItemType } from 'src/types/TFighterItemType';
import { FighterItem } from 'src/fighter-items/entities/fighter-item.entity';

@ObjectType()
export class FighterShop {

  @Field(() => Int)
  id: number;

  @Field(() => String, { description: 'Unique code' })
  code: string;

  @Field(() => Int, { description: 'Level' })
  level: number;

  @Field(() => String, { description: 'Type (COIN, USDT, NFT)' })
  type: TFighterItemType;

  @Field(() => Boolean, { description: 'Is disabled?' })
  disabled: boolean;

  @Field(() => FighterItem, { description: 'Fighter item other fields' })
  fighterItem: FighterItem;

}
