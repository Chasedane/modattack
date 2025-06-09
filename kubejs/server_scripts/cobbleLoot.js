LootJS.modifiers((event) => {
    event
        .addBlockLootModifier('minecraft:cobblestone')
        .matchMainHand(Item.of('#forge:tools/hammer'))
        .removeLoot('minecraft:cobblestone')
        .addLoot("minecraft:gravel")
});