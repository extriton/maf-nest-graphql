import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MinerInventoryService } from './miner-inventory.service';
import { MinerInventory } from './entities/miner-inventory.entity';
import { CreateMinerInventoryInput } from './dto/create-miner-inventory.input';
import { UpdateMinerInventoryInput } from './dto/update-miner-inventory.input';

@Resolver(() => MinerInventory)
export class MinerInventoryResolver {
  constructor(private readonly minerInventoryService: MinerInventoryService) {}

  @Mutation(() => MinerInventory)
  createMinerInventoryItem(@Args('createMinerInventoryInput') createMinerInventoryInput: CreateMinerInventoryInput) {
    return this.minerInventoryService.create(createMinerInventoryInput);
  }

  @Query(() => [MinerInventory], { name: 'minerInventoryItems' })
  findAll() {
    return this.minerInventoryService.findAll();
  }

  @Query(() => MinerInventory, { name: 'minerInventoryItem' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.minerInventoryService.findOne(id);
  }

  @Mutation(() => MinerInventory)
  updateMinerInventoryItem(@Args('updateMinerInventoryInput') updateMinerInventoryInput: UpdateMinerInventoryInput) {
    return this.minerInventoryService.update(updateMinerInventoryInput.id, updateMinerInventoryInput);
  }

  @Mutation(() => MinerInventory)
  removeMinerInventoryItem(@Args('id', { type: () => Int }) id: number) {
    return this.minerInventoryService.remove(id);
  }
}
