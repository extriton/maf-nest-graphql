import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { TOrderCurrency } from 'src/types/TOrderCurrency';
import { TOrderStatus } from 'src/types/TOrderStatus';
import { TOrderType } from 'src/types/TOrderType';
import { User } from 'src/user/entities/user.entity';

@ObjectType()
export class Order {
  
  @Field(() => Int, { description: 'ID' })
  id: number;

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

  @Field(() => Date, { description: 'Order created timestamp' })
  createdAt: Date;

  @Field(() => User, { description: 'Order user' })
  user: User;

}
