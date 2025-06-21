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

event.recipes.create.compacting('kubejs:netherite_chunk', Item.of('tconstruct:debris_nugget', 9))
    .heated()


event.recipes.create.sequenced_assembly([
		Item.of('kubejs:debris_scrap') 	], 
        'kubejs:netherite_chunk', [

        event.recipes.createDeploying('kubejs:scrap_mold_full', ['kubejs:scrap_mold_full', 'kubejs:scrap_mold']).keepHeldItem(),
		event.recipes.createPressing('kubejs:scrap_mold_full', 'kubejs:scrap_mold_full'),
        event.recipes.createPressing('kubejs:scrap_mold_full', 'kubejs:scrap_mold_full'),
		event.recipes.createDeploying('kubejs:scrap_mold_full', ['kubejs:scrap_mold_full', 'kubejs:scrap_mold']).keepHeldItem(),
		event.recipes.createPressing('kubejs:scrap_mold_full', 'kubejs:scrap_mold_full')
	]).transitionalItem('kubejs:scrap_mold_full').loops(1) 

event.recipes.create.cutting('kubejs:scrap_sand_mold', 'minecraft:oak_slab')
    .processingTime(500)

event.recipes.create.sequenced_assembly([
		Item.of('kubejs:dummy_scrap') 	], 
        'kubejs:scrap_sand_mold', [

        event.recipes.createDeploying('kubejs:scrap_sand_mold_full', ['kubejs:scrap_sand_mold', 'minecraft:sand']),
		event.recipes.createPressing('kubejs:scrap_sand_mold_full', 'kubejs:scrap_sand_mold_full'),
		event.recipes.createPressing('kubejs:scrap_sand_mold_full', 'kubejs:scrap_sand_mold_full')
	]).transitionalItem('kubejs:scrap_sand_mold_full').loops(1) 

event.recipes.create.filling('kubejs:scrap_mold', ['kubejs:dummy_scrap', Fluid.of('tconstruct:molten_iron', 200)])


event.recipes.create.mixing('netherite_scrap', ['kubejs:debris_scrap', '#forge:dusts/gold'])
    .heated()

event.recipes.create.milling('thermal:silver_dust', 'thermal:silver_ingot')

event.recipes.create.milling('thermal:gold_dust', 'minecraft:gold_ingot')

event.smelting('thermal:gold_dust', 'kubejs:silver_gold_blend')

event.recipes.create.compacting('minecraft:netherrack', Item.of('kubejs:netherrack_dust', 9))


event.recipes.create.mixing('thermal:electrum_dust', 'kubejs:silver_gold_blend')


event.remove({ id: 'tconstruct:common/flint' })
})
