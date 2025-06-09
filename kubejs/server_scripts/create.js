ServerEvents.recipes(event => {
    event.remove({ id: 'create:splashing/gravel' });
    event.recipes.create.splashing([Item.of('minecraft:flint').withChance(0.3), Item.of('kubejs:iron_ore_chunk').withChance(0.6)], 'minecraft:gravel');
})