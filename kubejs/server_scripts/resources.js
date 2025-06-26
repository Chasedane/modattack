ServerEvents.recipes(event => {
    event.shapeless('create:crushed_raw_iron', [
        '9x kubejs:iron_ore_chunk'
    ])

    event.shapeless('create:crushed_raw_copper', [
        '9x kubejs:copper_ore_chunk'
    ])

    event.shapeless('create:crushed_raw_gold', [
        '9x kubejs:gold_ore_chunk'
    ])

    event.shapeless('create:crushed_raw_zinc', [
        '9x kubejs:zinc_ore_chunk'
    ])

    event.shapeless('create_more_additions:crushed_silver_ore', [
        '9x kubejs:silver_ore_chunk'
    ])

    event.smelting('minecraft:iron_nugget', 'kubejs:iron_ore_chunk')

    event.smelting('minecraft:gold_nugget', 'kubejs:gold_ore_chunk')

    event.smelting('create:copper_nugget', 'kubejs:copper_ore_chunk')

    event.smelting('create:zinc_nugget', 'kubejs:zinc_ore_chunk')

    event.smelting('create_more_additions:silver_nugget', 'kubejs:silver_ore_chunk')


    event.remove({ id: 'create:splashing/red_sand' });
    event.recipes.create.splashing([Item.of('minecraft:dead_bush').withChance(0.05), Item.of('kubejs:gold_ore_chunk', 3).withChance(0.12)], '#minecraft:sand');

    event.recipes.create.splashing([Item.of('kubejs:silver_ore_chunk').withChance(0.05)], 'kubejs:dust');

    event.recipes.create.crushing([Item.of('create:crushed_raw_tin').withChance(0.1), Item.of('create:crushed_raw_lead').withChance(0.05), Item.of('minecraft:gravel')], 'minecraft:tuff')
    .processingTime(300)

    event.remove({ id: 'create:crushing/ochrum' });
    event.remove({ id: 'create:crushing/ochrum_recycling' });

    event.recipes.create.crushing([Item.of('create:crushed_raw_nickel').withChance(0.1), Item.of('create:crushed_raw_osmium').withChance(0.05), Item.of('minecraft:gravel')], 'create:ochrum')
    .processingTime(300)

    event.recipes.create.mixing('create:ochrum', ['kubejs:dust', 'minecraft:sand', 'minecraft:gravel'])

    event.recipes.create.mixing('minecraft:tuff', [Fluid.of('minecraft:lava',100), 'minecraft:gravel'])

    event.recipes.create.mixing(Fluid.of('minecraft:lava',10), 'kubejs:stone_pebble')
        .heated()

})