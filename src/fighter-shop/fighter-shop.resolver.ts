import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FighterShopService } from './fighter-shop.service';
import { FighterShop } from './entities/fighter-shop.entity';
import { CreateFighterShopInput } from './dto/create-fighter-shop.input';
import { UpdateFighterShopInput } from './dto/update-fighter-shop.input';

@Resolver(() => FighterShop)
export class FighterShopResolver {
  constructor(private readonly fighterShopService: FighterShopService) {}

  @Mutation(() => FighterShop)
  createFighterShopItem(@Args('createFighterShopInput') createFighterShopInput: CreateFighterShopInput) {
    return this.fighterShopService.create(createFighterShopInput);
  }

  @Query(() => [FighterShop], { name: 'fighterShopItems' })
  findAll() {
    return this.fighterShopService.findAll();
  }

  @Query(() => FighterShop, { name: 'fighterShopItem' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.fighterShopService.findOne(id);
  }

  @Mutation(() => FighterShop)
  updateFighterShopItem(@Args('updateFighterShopInput') updateFighterShopInput: UpdateFighterShopInput) {
    return this.fighterShopService.update(updateFighterShopInput.id, updateFighterShopInput);
  }

  @Mutation(() => FighterShop)
  removeFighterShopItem(@Args('id', { type: () => Int }) id: number) {
    return this.fighterShopService.remove(id);
  }
}
