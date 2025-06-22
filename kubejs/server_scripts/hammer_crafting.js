ServerEvents.recipes(event => {
 event.shaped('kubejs:wooden_hammer', // arg 1: output
  [
    ' AB',
    ' CA', // arg 2: the shape (array of strings)
    'C  '
  ],
  {
    A: '#minecraft:planks', // arg 3: the mapping object
    B: 'minecraft:string',  //arg 3: the mapping object
    C: 'minecraft:stick'
  }
)

event.shaped('kubejs:stone_hammer', // arg 1: output
  [
    ' AB',
    ' CA', // arg 2: the shape (array of strings)
    'C  '
  ],
  {
    A: 'minecraft:cobblestone', // arg 3: the mapping object
    B: 'minecraft:string',  //arg 3: the mapping object
    C: 'minecraft:stick'
  }
)

event.shaped('kubejs:golden_hammer', // arg 1: output
  [
    ' AB',
    ' CA', // arg 2: the shape (array of strings)
    'C  '
  ],
  {
    A: 'minecraft:gold_ingot', // arg 3: the mapping object
    B: 'minecraft:string',  //arg 3: the mapping object
    C: 'minecraft:stick'
  }
)

event.shaped('kubejs:iron_hammer', // arg 1: output
  [
    ' AB',
    ' CA', // arg 2: the shape (array of strings)
    'C  '
  ],
  {
    A: 'minecraft:iron_ingot', // arg 3: the mapping object
    B: 'minecraft:string',  //arg 3: the mapping object
    C: 'minecraft:stick'
  }
)

event.shaped('kubejs:diamond_hammer', // arg 1: output
  [
    ' AB',
    ' CA', // arg 2: the shape (array of strings)
    'C  '
  ],
  {
    A: 'minecraft:diamond', // arg 3: the mapping object
    B: 'minecraft:string',  //arg 3: the mapping object
    C: 'minecraft:stick'
  }
)

event.smithing(
  'kubejs:netherite_hammer',                     // arg 1: output
  'minecraft:netherite_upgrade_smithing_template', // arg 2: the smithing template
  'kubejs:diamond_hammer',                          // arg 3: the item to be upgraded
  'minecraft:netherite_ingot'                            // arg 4: the upgrade item
)
})