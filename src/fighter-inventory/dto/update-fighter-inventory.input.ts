import { CreateFighterInventoryInput } from './create-fighter-inventory.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFighterInventoryInput extends PartialType(CreateFighterInventoryInput) {
  @Field(() => Int)
  id: number;
}
