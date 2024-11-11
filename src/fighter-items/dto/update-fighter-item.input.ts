import { CreateFighterItemInput } from './create-fighter-item.input';
import { Field, Int, PartialType, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateFighterItemInput extends PartialType(CreateFighterItemInput) {
  @Field(() => Int)
  id: number;
}
