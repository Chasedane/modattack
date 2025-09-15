StartupEvents.registry('block', event => {

    event.create('crushed_netherrack', 'falling') // Create a new block with ID 'kubejs:crushed_netherrack'
        .displayName('Crushed Netherrack') // Set the display name of the block
        .hardness(1) // Set the hardness of the block
        .resistance(1) // Set the resistance of the block
        .tagBlock('forge:crushed_netherrack') // Add the block to the 'forge:crushed_netherrack' tag
        .soundType('gravel')
        .tagBlock('minecraft:mineable/shovel') 


    event.create('crushed_granite', 'falling') // Create a new block with ID 'kubejs:crushed_granite'
        .displayName('Crushed Granite') // Set the display name of the block
        .hardness(1) // Set the hardness of the block
        .resistance(1) // Set the resistance of the block
        .tagBlock('forge:crushed_granite') // Add the block to the 'forge:crushed_granite' tag
        .soundType('gravel')
        .tagBlock('minecraft:mineable/shovel')
    
    event.create('crushed_calcite', 'falling') // Create a new block with ID 'kubejs:crushed_calcite'
        .displayName('Crushed Calcite') // Set the display name of the block
        .hardness(1) // Set the hardness of the block
        .resistance(1) // Set the resistance of the block
        .tagBlock('forge:crushed_calcite') // Add the block to the 'forge:crushed_calcite' tag
        .soundType('gravel')
        .tagBlock('minecraft:mineable/shovel')
})