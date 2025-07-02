StartupEvents.registry('block', event => {

    event.create('creative_block', ) // Create a new block with ID 'kubejs:creative_block'
        .displayName('Creative Block') // Set the display name of the block
        .hardness(100) // Set the hardness of the block
        .resistance(100) // Set the resistance of the block
         // Add the block to the 'forge:dust' tag
        .soundType('netherite_block') // Set the sound type of the block
        .lightLevel(8)
        .item(item => item.tooltip('Is this really the end?...'))
})

StartupEvents.registry('item', event => {

  event.create('space_ingot')
    .displayName('Space Ingot')
    .tag('forge:ingots')
    .color(0x808080)
})