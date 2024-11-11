import { CreateFighterShopInput } from './create-fighter-shop.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFighterShopInput extends PartialType(CreateFighterShopInput) {
  @Field(() => Int)
  id: number;
}
