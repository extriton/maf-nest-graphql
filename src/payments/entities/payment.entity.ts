import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { TOrderStatus } from 'src/types/TOrderStatus';
import { TPaymentCurrency } from 'src/types/TPaymentCurrency';

@ObjectType()
export class Payment {

  @Field(() => String, { description: 'ID (cuid)' })
  id: string;

  @Field(() => Int, { description: 'User ID' })
  userId: number;

  @Field(() => Int, { description: 'Payment type' })                                      // 0 - Premium
  type: number;

  @Field(() => String, { description: 'Payment currency' })                               // TON, USDT
  currency: TPaymentCurrency;

  @Field(() => Float, { description: 'Payment amount' })
  amount: number;

  @Field(() => String, { description: 'Payment status' })                                 // created, processed
  status: TOrderStatus;

}
