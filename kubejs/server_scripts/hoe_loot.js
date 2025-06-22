LootJS.modifiers((event) => {
    event
        .addBlockLootModifier('minecraft:dirt')
        .matchMainHand(ItemFilter.HOE)
        .removeLoot('minecraft:dirt')
        .addWeightedLoot(
            [0, 3],
            [Item.of("kubejs:stone_pebble").withChance(10), Item.of('#minecraft:saplings').withChance(1)]
    )

    event
        .addBlockLootModifier('#minecraft:leaves')
        .matchMainHand(ItemFilter.HOE)
        .addAlternativesLoot(
            LootEntry.of("minecraft:string").when((c) => c.randomChance(0.1))
    )
});