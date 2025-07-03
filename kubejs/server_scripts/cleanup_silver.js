ServerEvents.recipes(event => {

    event.remove({id: 'thermal:smelting/silver_ingot_from_dust_smelting'})

    event.smelting('create_more_additions:silver_ingot', 'thermal:silver_dust')

    event.remove({id: 'thermal:smelting/silver_ingot_from_dust_blasting'})

    event.blasting('create_more_additions:silver_ingot', 'thermal:silver_dust')

})    