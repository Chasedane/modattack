LootJS.modifiers((event) => {
    event
        .addBlockLootModifier('minecraft:sand')
        .matchMainHand(Item.of('#forge:tools/hammer'))
        .removeLoot('minecraft:sand')
        .addLoot("kubejs:dust")
});