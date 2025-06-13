LootJS.modifiers((event) => {
    event
        .addBlockLootModifier('minecraft:gravel')
        .matchMainHand(Item.of('#forge:tools/hammer'))
        .removeLoot('minecraft:gravel')
        .addLoot("minecraft:sand")
});