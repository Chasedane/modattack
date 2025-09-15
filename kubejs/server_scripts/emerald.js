ServerEvents.recipes(event => {
    event.recipes.create.crushing('kubejs:crushed_granite', 'minecraft:granite')
    event.recipes.create.splashing(Item.of('kubejs:impure_emerald').withChance(0.35), 'kubejs:crushed_granite')

    let inter = 'kubejs:incomplete_emerald'
    event.recipes.create.sequenced_assembly([
		Item.of('minecraft:emerald').withChance(0.01),
        Item.of('kubejs:calcite_pebble').withChance(0.8),
        Item.of('kubejs:calcite_pebble').withChance(0.25)
    ], 
        'kubejs:impure_emerald', [

		event.recipes.createPressing(inter, inter),
        event.recipes.createPressing(inter, inter),
		event.recipes.createCutting(inter, inter)
        ]).transitionalItem(inter).loops(2)
})