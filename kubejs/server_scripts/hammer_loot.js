LootJS.modifiers((event) => {

    //Changes to the block loot when using a hammer

    //cobblestone = gravel

    event
        .addBlockLootModifier('minecraft:cobblestone')
        .matchMainHand('#forge:tools/hammer')
        .removeLoot('minecraft:cobblestone')
        .addLoot("minecraft:gravel")

    //gravel = sand

    event
        .addBlockLootModifier('minecraft:gravel')
        .matchMainHand('#forge:tools/hammer')
        .removeLoot('minecraft:gravel')
        .addLoot("minecraft:sand")

    //sand = dust

    event
        .addBlockLootModifier('minecraft:sand')
        .matchMainHand('#forge:tools/hammer')
        .removeLoot('minecraft:sand')
        .addLoot("kubejs:dust")

    //logs = 8 sawdust

    event
        .addBlockLootModifier('#minecraft:logs')
        .matchMainHand('#forge:tools/hammer')
        .removeLoot('#minecraft:logs')
        .addLoot(Item.of("thermal:sawdust", 8))

    //planks = 2 sawdust

    event
        .addBlockLootModifier('#minecraft:planks')
        .matchMainHand('#forge:tools/hammer')
        .removeLoot('#minecraft:planks')
        .addLoot(Item.of("thermal:sawdust", 2))

    //netherrack = crushed netherrack

    event
        .addBlockLootModifier('minecraft:netherrack')
        .matchMainHand('#forge:tools/hammer')
        .removeLoot('minecraft:netherrack')
        .addLoot("kubejs:crushed_netherrack")


    //creative block = creative blocks

    event
        .addBlockLootModifier('kubejs:creative_block')
        .matchMainHand('kubejs:netherite_hammer')
        .removeLoot('kubejs:creative_block')
        .addWeightedLoot([
            Item.of("create:creative_motor").withChance(20),
            Item.of("create:creative_crate").withChance(15),
            Item.of("mekanism:creative_energy_cube").withChance(5),
            Item.of("mekanism:creative_fluid_tank").withChance(20),
            Item.of("mekanism:creative_chemical_tank").withChance(20),
        ]);

});