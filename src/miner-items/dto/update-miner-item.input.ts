import { CreateMinerItemInput } from './create-miner-item.input';
import { Field, Int, PartialType, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateMinerItemInput extends PartialType(CreateMinerItemInput) {
  @Field(() => Int)
  id: number;
}
