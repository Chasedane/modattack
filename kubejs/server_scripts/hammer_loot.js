LootJS.modifiers((event) => {
    event
        .addBlockLootModifier('minecraft:cobblestone')
        .matchMainHand('#forge:tools/hammer')
        .removeLoot('minecraft:cobblestone')
        .addLoot("minecraft:gravel")

    event
        .addBlockLootModifier('minecraft:gravel')
        .matchMainHand('#forge:tools/hammer')
        .removeLoot('minecraft:gravel')
        .addLoot("minecraft:sand")

    event
        .addBlockLootModifier('minecraft:sand')
        .matchMainHand('#forge:tools/hammer')
        .removeLoot('minecraft:sand')
        .addLoot("kubejs:dust")

});