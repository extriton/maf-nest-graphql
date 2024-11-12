import { Field, Int, InputType } from '@nestjs/graphql';
import { type TMinerItemType } from 'src/types/TMinerItemType';
import { type TMinerSlot } from 'src/types/TMinerSlot';

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

  @Field(() => String, { description: 'Miner item slot (none, s1, s2, s3, s4)', nullable: true })
  slot: TMinerSlot;

}
