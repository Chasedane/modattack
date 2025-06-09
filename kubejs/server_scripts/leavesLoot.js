LootJS.modifiers((event) => {
    event
        .addBlockLootModifier('#minecraft:leaves')
        .matchMainHand(ItemFilter.HOE)
        .addAlternativesLoot(
            LootEntry.of("minecraft:string").when((c) => c.randomChance(0.1))
        );
});