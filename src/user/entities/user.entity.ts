import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { FighterInventory } from 'src/fighter-inventory/entities/fighter-inventory.entity';
import { MinerInventory } from 'src/miner-inventory/entities/miner-inventory.entity';
import { Payment } from 'src/payments/entities/payment.entity';

@ObjectType()
export class User {
  
  @Field(() => Int)
  id: number;

  @Field(() => Int, { description: 'User Telegram ID' })
  tgId: number;

  @Field(() => String, { description: 'User Telegram account name' })
  name: string;

  @Field(() => Float, { description: 'User balance (COIN)' })
  coinBalance: number;

  @Field(() => Float, { description: 'Total User balance (COIN) w/o spending' })
  totalCoinBalance: number;

  @Field(() => Boolean, { description: 'Premium account?' })
  isPremium: boolean;

  @Field(() => Boolean, { description: 'User banned?' })
  isBanned: boolean;

  @Field(() => Date, { description: 'Last claim at...' })
  lastClaimAt: Date;

  @Field(() => Int, { description: 'Refer Telegram ID' })
  referTgId: number;

  @Field(() => Float, { description: 'Refer balance (COIN)' })
  referCoinBalance: number;

  @Field(() => [MinerInventory], { description: 'Miner inventory items' })
  minerInventory: MinerInventory;

  @Field(() => [FighterInventory], { description: 'Fighter inventory items' })
  fighterInventory: FighterInventory;

  @Field(() => [Payment], { description: 'User payment orders' })
  payments: Payment;

}
