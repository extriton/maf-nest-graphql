import { CreateMinerShopInput } from './create-miner-shop.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMinerShopInput extends PartialType(CreateMinerShopInput) {
  @Field(() => Int)
  id: number;
}
