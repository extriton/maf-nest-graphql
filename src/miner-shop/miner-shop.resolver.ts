import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MinerShopService } from './miner-shop.service';
import { MinerShop } from './entities/miner-shop.entity';
import { CreateMinerShopInput } from './dto/create-miner-shop.input';
import { UpdateMinerShopInput } from './dto/update-miner-shop.input';

@Resolver(() => MinerShop)
export class MinerShopResolver {
  constructor(private readonly minerShopService: MinerShopService) {}

  @Mutation(() => MinerShop)
  createMinerShopItem(@Args('createMinerShopInput') createMinerShopInput: CreateMinerShopInput) {
    return this.minerShopService.create(createMinerShopInput);
  }

  @Query(() => [MinerShop], { name: 'minerShopItems' })
  findAll() {
    return this.minerShopService.findAll();
  }

  @Query(() => MinerShop, { name: 'minerShopItem' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.minerShopService.findOne(id);
  }

  @Mutation(() => MinerShop)
  updateMinerShopItem(@Args('updateMinerShopInput') updateMinerShopInput: UpdateMinerShopInput) {
    return this.minerShopService.update(updateMinerShopInput.id, updateMinerShopInput);
  }

  @Mutation(() => MinerShop)
  removeMinerShopItem(@Args('id', { type: () => Int }) id: number) {
    return this.minerShopService.remove(id);
  }
}
