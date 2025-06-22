LootJS.modifiers((event) => {
   
    //Changes to the block loot when using a hoe

    //dirt = 3 stone pebbles or a sapling
   
    event
        .addBlockLootModifier('minecraft:dirt')
        .matchMainHand(ItemFilter.HOE)
        .removeLoot('minecraft:dirt')
        .addWeightedLoot(
            [0, 3],
            [Item.of("kubejs:stone_pebble").withChance(10), Item.of('#minecraft:saplings').withChance(1)]
    )

    //leaves = 1 string 

    event
        .addBlockLootModifier('#minecraft:leaves')
        .matchMainHand(ItemFilter.HOE)
        .addAlternativesLoot(
            LootEntry.of("minecraft:string").when((c) => c.randomChance(0.1))
    )
});