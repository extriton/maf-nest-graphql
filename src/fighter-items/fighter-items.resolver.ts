import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FighterItemsService } from './fighter-items.service';
import { FighterItem } from './entities/fighter-item.entity';
import { CreateFighterItemInput } from './dto/create-fighter-item.input';
import { UpdateFighterItemInput } from './dto/update-fighter-item.input';

@Resolver(() => FighterItem)
export class FighterItemsResolver {
  constructor(private readonly fighterItemsService: FighterItemsService) {}

  @Mutation(() => FighterItem)
  createFighterItem(@Args('createFighterItemInput') createFighterItemInput: CreateFighterItemInput) {
    return this.fighterItemsService.create(createFighterItemInput);
  }

  @Query(() => [FighterItem], { name: 'fighterItems' })
  findAll() {
    return this.fighterItemsService.findAll();
  }

  @Query(() => FighterItem, { name: 'fighterItem' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.fighterItemsService.findOne(id);
  }

  @Mutation(() => FighterItem)
  updateFighterItem(@Args('updateFighterItemInput') updateFighterItemInput: UpdateFighterItemInput) {
    return this.fighterItemsService.update(updateFighterItemInput.id, updateFighterItemInput);
  }

  @Mutation(() => FighterItem)
  removeFighterItem(@Args('id', { type: () => Int }) id: number) {
    return this.fighterItemsService.remove(id);
  }
}
