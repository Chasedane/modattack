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

    event
        .addBlockLootModifier('kubejs:dust')
        .matchMainHand('#forge:tools/brush')
        .removeLoot('kubejs:dust')
        .addWeightedLoot([0,1],[


        ])
})