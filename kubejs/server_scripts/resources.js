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

    event.shapeless('create:crushed_raw_osmium', [
        '9x kubejs:osmium_ore_chunk'
    ])

    event.shapeless('create_more_additions:crushed_silver_ore', [
        '9x kubejs:silver_ore_chunk'
    ])

    event.shapeless('create:crushed_raw_tin', [
        '9x kubejs:tin_ore_chunk'
    ])

    event.shapeless('create:crushed_raw_lead', [
        '9x kubejs:lead_ore_chunk'
    ])

    event.shapeless('create:crushed_raw_nickel', [
        '9x kubejs:nickel_ore_chunk'
    ])

    event.shapeless('create:crushed_raw_silver', [
        'create_more_additions:crushed_silver_ore'
    ])

    event.shapeless('create_more_additions:crushed_silver_ore', [
       'create:crushed_raw_silver'
    ])

    event.smelting('minecraft:iron_nugget', 'kubejs:iron_ore_chunk')

    event.smelting('minecraft:gold_nugget', 'kubejs:gold_ore_chunk')

    event.smelting('create:copper_nugget', 'kubejs:copper_ore_chunk')

    event.smelting('create:zinc_nugget', 'kubejs:zinc_ore_chunk')

    event.smelting('create_more_additions:silver_nugget', 'kubejs:silver_ore_chunk')

    event.smelting('mekanism:nugget_osmium', 'kubejs:osmium_ore_chunk')

    event.smelting('thermal:tin_nugget', 'kubejs:tin_ore_chunk')

    event.smelting('thermal:lead_nugget', 'kubejs:lead_ore_chunk')

    event.smelting('thermal:nickel_nugget', 'kubejs:nickel_ore_chunk')
})