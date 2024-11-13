import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FighterInventoryService } from './fighter-inventory.service';
import { FighterInventory } from './entities/fighter-inventory.entity';
import { CreateFighterInventoryInput } from './dto/create-fighter-inventory.input';
import { UpdateFighterInventoryInput } from './dto/update-fighter-inventory.input';

@Resolver(() => FighterInventory)
export class FighterInventoryResolver {
  constructor(private readonly fighterInventoryService: FighterInventoryService) {}

  @Mutation(() => FighterInventory)
  createFighterInventoryItem(@Args('createFighterInventoryInput') createFighterInventoryInput: CreateFighterInventoryInput) {
    return this.fighterInventoryService.create(createFighterInventoryInput);
  }

  @Query(() => [FighterInventory], { name: 'fighterInventoryItems' })
  findAll() {
    return this.fighterInventoryService.findAll();
  }

  @Query(() => FighterInventory, { name: 'fighterInventoryItem' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.fighterInventoryService.findOne(id);
  }

  @Mutation(() => FighterInventory)
  updateFighterInventoryItem(@Args('updateFighterInventoryInput') updateFighterInventoryInput: UpdateFighterInventoryInput) {
    return this.fighterInventoryService.update(updateFighterInventoryInput.id, updateFighterInventoryInput);
  }

  @Mutation(() => FighterInventory)
  removeFighterInventoryItem(@Args('id', { type: () => Int }) id: number) {
    return this.fighterInventoryService.remove(id);
  }
}
