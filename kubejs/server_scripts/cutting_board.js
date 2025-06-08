ServerEvents.recipes(event => {
    event.remove({ output: 'farmersdelight:cake_slice' });
    event.custom({
        type: 'farmersdelight:cutting',
        ingredients: [
            { item: 'minecraft:cake', count: 2}
        ],
        tool: { tag: 'forge:tools/knives' },
        result: [
            { item: 'farmersdelight:cake_slice', count: 5 }
        ]
    });
})