import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MinerItemsService } from './miner-items.service';
import { MinerItem } from './entities/miner-item.entity';
import { CreateMinerItemInput } from './dto/create-miner-item.input';
import { UpdateMinerItemInput } from './dto/update-miner-item.input';

@Resolver(() => MinerItem)
export class MinerItemsResolver {
  constructor(private readonly minerItemsService: MinerItemsService) {}

  @Mutation(() => MinerItem)
  createMinerItem(@Args('createMinerItemInput') createMinerItemInput: CreateMinerItemInput) {
    return this.minerItemsService.create(createMinerItemInput);
  }

  @Query(() => [MinerItem], { name: 'minerItems' })
  findAll() {
    return this.minerItemsService.findAll();
  }

  @Query(() => MinerItem, { name: 'minerItem' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.minerItemsService.findOne(id);
  }

  @Mutation(() => MinerItem)
  updateMinerItem(@Args('updateMinerItemInput') updateMinerItemInput: UpdateMinerItemInput) {
    return this.minerItemsService.update(updateMinerItemInput.id, updateMinerItemInput);
  }

  @Mutation(() => MinerItem)
  removeMinerItem(@Args('id', { type: () => Int }) id: number) {
    return this.minerItemsService.remove(id);
  }
}
