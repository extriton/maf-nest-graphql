import { InputType, Int, Field, Float } from '@nestjs/graphql';
import { TOrderCurrency } from 'src/types/TOrderCurrency';
import { TOrderStatus } from 'src/types/TOrderStatus';
import { TOrderType } from 'src/types/TOrderType';

@InputType()
export class CreateOrderInput {
 
  @Field(() => Int, { description: 'User ID' })
  userId: number;

  @Field(() => String, { description: 'Order type' })                                   // premium
  type: TOrderType;

  @Field(() => String, { description: 'Order currency' })                               // TON, USDT
  currency: TOrderCurrency;

  @Field(() => Float, { description: 'Order amount' })
  amount: number;

  @Field(() => String, { description: 'Order status' })                                 // created, processed
  status: TOrderStatus;

}
