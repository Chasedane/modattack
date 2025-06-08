ServerEvents.recipes(event => {

    //compost recipe
event.shaped('thermal:compost',[
    'ABA',
    'BBB',
    'ABA'
], {
    A: 'minecraft:bone_meal',
    B: '#minecraft:saplings'
});

event.shaped('thermal:compost',[
    'ABA',
    'BBB',
    'ABA'
], {
    A: 'minecraft:bone_meal',
    B: '#minecraft:leaves'
});

//cobble recipe
event.shapeless('minecraft:cobblestone', [
    '9x kubejs:stone_pebble'
])
})