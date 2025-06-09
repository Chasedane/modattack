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

event.shaped('minecraft:cobblestone', [
    'AA',
    'AA'
], { A: 'kubejs:stone_pebble' 
});

//iron Ore reciepe
event.shapeless('minecraft:raw_iron', [
    '9x kubejs:iron_ore_chunk'

])
})