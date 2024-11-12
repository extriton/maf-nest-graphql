import { InputType, Int, Float, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {

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

}
