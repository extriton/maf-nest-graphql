import { InputType, Int, Float, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {

  @Field(() => Int, { description: 'User Telegram ID' })
  tgId: number;

  @Field(() => String, { description: 'User Telegram account name', nullable: true })
  name?: string;

  @Field(() => Float, { description: 'User balance (COIN)', nullable: true })
  coinBalance?: number;

  @Field(() => Float, { description: 'Total User balance (COIN) w/o spending', nullable: true })
  totalCoinBalance?: number;

  @Field(() => Boolean, { description: 'Premium account?', nullable: true })
  isPremium?: boolean;

  @Field(() => Boolean, { description: 'User banned?', nullable: true })
  isBanned?: boolean;

  @Field(() => Date, { description: 'Last claim at...', nullable: true })
  lastClaimAt?: Date;

  @Field(() => Int, { description: 'Refer Telegram ID', nullable: true })
  referTgId?: number;

  @Field(() => Float, { description: 'Refer balance (COIN)', nullable: true })
  referCoinBalance?: number;

}
