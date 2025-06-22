LootJS.modifiers((event) => {

    event
        .addBlockLootModifier('minecraft:gravel')
        .matchMainHand('#forge:tools/brush')
        .removeLoot('minecraft:gravel')
        .addWeightedLoot([0,1],[
            Item.of('kubejs:iron_ore_chunk').withChance(20),
            Item.of('kubejs:copper_ore_chunk').withChance(10),
            Item.of('kubejs:osmium_ore_chunk').withChance(10),
            Item.of('kubejs:tin_ore_chunk').withChance(5),
            Item.of('kubejs:lead_ore_chunk').withChance(5),
        ])

    
    event
        .addBlockLootModifier('minecraft:sand')
        .matchMainHand('#forge:tools/brush')
        .removeLoot('minecraft:sand')
        .addWeightedLoot([0,1],[
            Item.of('kubejs:gold_ore_chunk').withChance(5),
            Item.of('kubejs:zinc_ore_chunk').withChance(10),
            Item.of('kubejs:nickel_ore_chunk').withChance(10),
  
        ])

    event
        .addBlockLootModifier('kubejs:dust')
        .matchMainHand('#forge:tools/brush')
        .removeLoot('kubejs:dust')
        .addWeightedLoot([0,1],[
            Item.of('kubejs:silver_ore_chunk').withChance(5),
            Item.of('minecraft:redstone').withChance(20),
            Item.of('minecraft:lapis_lazuli').withChance(10),
  
        ])
})