LootJS.modifiers((event) => {
    event
        .addBlockLootModifier('minecraft:cobblestone')
        .matchMainHand('#forge:tools/hammer')
        .removeLoot('minecraft:cobblestone')
        .addLoot("minecraft:gravel")
});