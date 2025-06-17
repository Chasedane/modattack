ServerEvents.recipes(event => {

event.recipes.create.crushing('kubejs:crushed_netherrack', 'minecraft:netherrack')
    .processingTime(200)

event.recipes.create.mixing(Fluid.of('kubejs:molten_netherrack',100), 'kubejs:crushed_netherrack')
    .superheated()

event.recipes.create.mixing([Fluid.of('kubejs:gold_debris_slurry',10), Item.of('kubejs:netherrack_dust', 3)], [Fluid.of('kubejs:molten_netherrack', 1000), 'minecraft:gravel'])
    .superheated()

event.recipes.create.mixing([Fluid.of('tconstruct:molten_debris',5), Item.of('kubejs:silver_gold_blend', 2)], [Fluid.of('kubejs:gold_debris_slurry',100), Item.of('thermal:silver_dust')])
    .superheated()

event.recipes.create.filling('kubejs:tiny_debris_nugget', [Fluid.of('tconstruct:molten_debris', 5), 'kubejs:tiny_nugget_cast'])

event.recipes.create.pressing('kubejs:tiny_nugget_cast', 'minecraft:sand')

event.recipes.create.compacting('tconstruct:debris_nugget', Item.of('kubejs:tiny_debris_nugget', 9))
    .heated()

event.recipes.create.compacting('kubejs:netherrite_chunk', Item.of('tconstruct:debris_nugget', 9))
    .heated()


event.recipes.create.sequenced_assembly([
		Item.of('minecraft:netherite_scrap') 	], 
        'kubejs:netherrite_chunk', [

		event.recipes.createPressing('kubejs:netherrite_chunk', 'kubejs:netherrite_chunk'),
		event.recipes.createDeploying('kubejs:netherrite_chunk', ['kubejs:netherrite_chunk', 'kubejs:scrap_mold']).keepHeldItem(),
		event.recipes.createPressing('kubejs:netherrite_chunk', 'kubejs:netherrite_chunk')
	]).transitionalItem('kubejs:netherrite_chunk').loops(3) 
})
