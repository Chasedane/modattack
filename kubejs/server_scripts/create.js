ServerEvents.recipes(event => {
    event.remove({ id: 'create:splashing/gravel' });
    event.recipes.create.splashing([Item.of('minecraft:flint').withChance(0.3), Item.of('kubejs:iron_ore_chunk').withChance(0.12)], 'minecraft:gravel');

    event.remove({id: 'create:haunting/soul_sand'});
    event.recipes.create.mixing('minecraft:soul_sand', [Fluid.water(1000), '#minecraft:sand', 'kubejs:spores']);

    event.remove({id: 'create:splashing/soul_sand'});
    event.recipes.create.splashing([Item.of('minecraft:quartz').withChance(0.05), Item.of('minecraft:blaze_powder').withChance(0.025), Item.of('minecraft:ghast_tear').withChance(0.001)], 'minecraft:soul_sand');


    event.recipes.create.splashing([Item.of('minecraft:clay').withChance(0.03), Item.of('minecraft:kelp').withChance(0.12)], 'minecraft:mud');

    event.remove({id:'create:crushing/netherrack'});
    event.recipes.create.crushing(['create:cinder_flour', Item.of('create:cinder_flour').withChance(0.5)], 'kubejs:crushed_netherrack');

    event.recipes.create.milling('create:cinder_flour', 'kubejs:netherrack_dust');
})