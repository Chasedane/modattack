StartupEvents.registry('block', event => {

    event.create('dust', 'falling') // Create a new block with ID 'kubejs:dust'
        .displayName('Dust') // Set the display name of the block
        .hardness(0.5) // Set the hardness of the block
        .resistance(1) // Set the resistance of the block
        .tagBlock('forge:dust') // Add the block to the 'forge:dust' tag
        .soundType('sand')
        .tagBlock('minecraft:mineable/shovel') 
})