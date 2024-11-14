import { InputType, Int, Field, Float } from '@nestjs/graphql';
import { Min } from 'class-validator';
import { TOrderStatus } from 'src/types/TOrderStatus';
import { TPaymentCurrency } from 'src/types/TPaymentCurrency';

@InputType()
export class CreatePaymentInput {
  
  @Field(() => Int, { description: 'User ID' })
  userId: number;

  @Min(0)
  @Field(() => Int, { description: 'Payment type', nullable: true })                                      // 0 - Premium
  type: number;

  @Field(() => String, { description: 'Payment currency', nullable: true })                               // TON, USDT
  currency: TPaymentCurrency

  @Min(0.001)
  @Field(() => Float, { description: 'Payment amount' })
  amount: number;

  @Field(() => String, { description: 'Payment status', nullable: true })                                 // created, processed
  status: TOrderStatus;

}
