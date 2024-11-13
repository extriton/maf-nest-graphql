import { ObjectType, Field, Int } from '@nestjs/graphql';
import { FighterItem } from 'src/fighter-items/entities/fighter-item.entity';
import { type TFighterItemType } from 'src/types/TFighterItemType';

@ObjectType()
export class FighterInventory {

  @Field(() => Int)
  id: number;

  @Field(() => Int, { description: 'User ID' })
  userId: number;

  @Field(() => String, { description: 'Unique code' })
  code: string;

  @Field(() => Int, { description: 'Level' })
  level: number;

  @Field(() => String, { description: 'Type (COIN, USDT, NFT)' })
  type: TFighterItemType;

  @Field(() => FighterItem, { description: 'Fighter item other fields' })
  fighterItem: FighterItem;

}
