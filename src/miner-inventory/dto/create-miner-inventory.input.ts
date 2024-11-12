import { Field, Int, InputType } from '@nestjs/graphql';
import { type TMinerItemType } from 'src/types/TMinerItemType';

@InputType()
export class CreateMinerInventoryInput {

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

}
