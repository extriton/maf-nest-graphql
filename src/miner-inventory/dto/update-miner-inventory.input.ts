import { CreateMinerInventoryInput } from './create-miner-inventory.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMinerInventoryInput extends PartialType(CreateMinerInventoryInput) {
  @Field(() => Int)
  id: number;
}
