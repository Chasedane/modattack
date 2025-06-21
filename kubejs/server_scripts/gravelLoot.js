LootJS.modifiers((event) => {
    event
        .addBlockLootModifier('minecraft:gravel')
        .matchMainHand('#forge:tools/hammer')
        .removeLoot('minecraft:gravel')
        .addLoot("minecraft:sand")
});