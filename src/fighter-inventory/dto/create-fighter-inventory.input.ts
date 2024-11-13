import { Field, Int, InputType } from '@nestjs/graphql';
import { type TFighterItemType } from 'src/types/TFighterItemType';

@InputType()
export class CreateFighterInventoryInput {

  @Field(() => Int, { description: 'User ID' })
  userId: number;

  @Field(() => String, { description: 'Unique code' })
  code: string;

  @Field(() => Int, { description: 'Level' })
  level: number;

  @Field(() => String, { description: 'Type (COIN, USDT, NFT)' })
  type: TFighterItemType;

}
