LootJS.modifiers((event) => {
    event
        .addBlockLootModifier('minecraft:dirt')
        .matchMainHand(ItemFilter.HOE)
        .removeLoot('minecraft:dirt')
        .addWeightedLoot(
            [0,3],
            [Item.of("kubejs:stone_pebble").withChance(10), Item.of('#minecraft:saplings').withChance(1)]
        )
});