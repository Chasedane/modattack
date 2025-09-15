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

event.shaped('minecraft:granite', [
    'AA',
    'AA'
], { A: 'kubejs:granite_pebble' 
});

event.shaped('minecraft:calcite', [
    'AA',
    'AA'
], { A: 'kubejs:calcite_pebble' 
});

event.shaped('kubejs:resource_brush', // arg 1: output
  [
    ' BB',
    ' AB', // arg 2: the shape (array of strings)
    'C  '
  ],
  {
    A: 'kubejs:stone_pebble', // arg 3: the mapping object
    B: 'minecraft:string',  //arg 3: the mapping object
    C: 'minecraft:stick'
  }
)

event.shaped('kubejs:wooden_watering_can', // arg 1: output
  [
    ' AB',
    'BCB', // arg 2: the shape (array of strings)
    ' B '
  ],
  {
    A: 'minecraft:bone_meal', // arg 3: the mapping object
    B: '#minecraft:planks',  //arg 3: the mapping object
    C: 'minecraft:bowl'
  }
)
})