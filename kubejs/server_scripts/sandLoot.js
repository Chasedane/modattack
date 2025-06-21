LootJS.modifiers((event) => {
    event
        .addBlockLootModifier('minecraft:sand')
        .matchMainHand('#forge:tools/hammer')
        .removeLoot('minecraft:sand')
        .addLoot("kubejs:dust")
});