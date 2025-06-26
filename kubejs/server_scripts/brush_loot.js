LootJS.modifiers((event) => {

    event
        .addBlockLootModifier('minecraft:gravel')
        .matchMainHand('#forge:tools/brush')
        .removeLoot('minecraft:gravel')
        .addWeightedLoot([0,2],[
            Item.of('kubejs:iron_ore_chunk').withChance(20),
            Item.of('kubejs:copper_ore_chunk').withChance(10),

        ])

    
    event
        .addBlockLootModifier('minecraft:sand')
        .matchMainHand('#forge:tools/brush')
        .removeLoot('minecraft:sand')
        .addWeightedLoot([0,2],[

            Item.of('kubejs:zinc_ore_chunk').withChance(10),
  
        ])

    /*event
        .addBlockLootModifier('kubejs:dust')
        .matchMainHand('#forge:tools/brush')
        .removeLoot('kubejs:dust')
        .addWeightedLoot([0,1],[


        ])*/

     event
        .addBlockLootModifier('minecraft:dirt')
        .matchMainHand('#forge:tools/brush')
        .removeLoot('minecraft:dirt')
        .addWeightedLoot([0,3],[

            Item.of('minecraft:sugar_cane').withChance(1),
            Item.of('minecraft:bamboo').withChance(1),
            Item.of('minecraft:oak_sapling').withChance(1),
            Item.of('minecraft:birch_sapling').withChance(1),
            Item.of('minecraft:spruce_sapling').withChance(1),
            Item.of('minecraft:dark_oak_sapling').withChance(1),
            Item.of('minecraft:jungle_sapling').withChance(1),
            Item.of('minecraft:acacia_sapling').withChance(1),
            Item.of('minecraft:cherry_sapling').withChance(1),

        ])
})