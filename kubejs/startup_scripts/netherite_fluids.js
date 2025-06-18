StartupEvents.registry('fluid', event => {
    event.create('molten_netherrack')
        .displayName('Molten Netherrack')
        .stillTexture('kubejs:block/fluids/molten_netherrack_still')
        .flowingTexture('kubejs:block/fluids/molten_netherrack_flow')
        .bucketColor(0x854242)
        .rarity('common')


    event.create('gold_debris_slurry')
        .displayName('Nether Slurry')
        .stillTexture('kubejs:block/fluids/gold_debris_solution_still')
        .flowingTexture('kubejs:block/fluids/gold_debris_solution_flow')
        .bucketColor(0xd89a26)
        .rarity('common')    
})