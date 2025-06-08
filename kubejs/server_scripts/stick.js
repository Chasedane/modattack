ServerEvents.recipes(event => {
event.remove({ output: 'minecraft:stick' });

event.shaped('minecraft:stick', [
  'A',
  'A'
], {
  A: '#minecraft:logs'});
})