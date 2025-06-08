ServerEvents.recipes(event => {
    //dirt recipe
    event.custom({
        type: 'farmersdelight:cutting',
        ingredients: [
            { item: 'thermal:compost' },
        ],
        tool: { tag: 'forge:tools/shovels' },
        result: [
            { item: 'minecraft:dirt', count: 1 }
        ]
    });

    //gravel recipe
    event.custom({
        type: 'farmersdelight:cutting',
        ingredients: [
            { item: 'minecraft:cobblestone' },
        ],
        tool: { tag: 'forge:tools/hammer' },
        result: [
            { item: 'minecraft:gravel', count: 1 }
        ]
    });

    //sand recipe
    event.custom({
        type: 'farmersdelight:cutting',
        ingredients: [
            { item: 'minecraft:gravel' },
        ],
        tool: { tag: 'forge:tools/hammer' },
        result: [
            { item: 'minecraft:sand', count: 1 }
        ]
    });
})