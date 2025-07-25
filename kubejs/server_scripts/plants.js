ServerEvents.recipes(event => {

    function plantmutation(input_1, input_2, output){

        event.recipes.create.mixing(
            [
                Item.of(input_1).withChance(0.4),
                Item.of(input_2).withChance(0.4),
                Item.of(output).withChance(0.2)
            ],
            [
                input_1,
                input_2
            ]
        ).id('kubejs:plant_mutation_' + input_1.split(':')[1] + '_' + input_2.split(':')[1] + '_' + output.split(':')[1]);

    }

    //plantmutation(input_1, input_2, output)

    //Crops:

    plantmutation('minecraft:wheat_seeds', 'minecraft:potato', 'minecraft:carrot')
    plantmutation('minecraft:wheat_seeds', 'minecraft:pumpkin_seeds', 'minecraft:dandelion')
    plantmutation('minecraft:wheat_seeds', 'minecraft:beetroot_seeds', 'minecraft:sugar_cane')
    plantmutation('minecraft:wheat_seeds', 'minecraft:bamboo', 'minecraft:seagrass')
    plantmutation('minecraft:wheat_seeds', 'minecraft:seagrass', 'farmersdelight:rice')
    plantmutation('minecraft:potato', 'minecraft:carrot', 'minecraft:pumpkin_seeds')
    plantmutation('minecraft:potato', 'minecraft:sugar_cane', 'minecraft:cactus')
    plantmutation('minecraft:potato', 'minecraft:allium', 'farmersdelight:onion')
    plantmutation('minecraft:carrot', 'minecraft:seagrass', 'minecraft:sea_pickle')
    plantmutation('minecraft:pumpkin_seeds', 'minecraft:sugar_cane', 'minecraft:melon_seeds')
    plantmutation('minecraft:pumpkin_seeds', 'minecraft:melon_seeds', 'minecraft:poppy')
    plantmutation('farmersdelight:onion', 'minecraft:seagrass', 'farmersdelight:cabbage_seeds')
    plantmutation('minecraft:cactus', 'minecraft:sugar_cane', 'minecraft:bamboo')
    plantmutation('minecraft:beetroot_seeds', 'minecraft:sugar_cane', 'minecraft:sweet_berries')
    plantmutation('minecraft:beetroot_seeds', 'minecraft:potato', 'minecraft:brown_mushroom')
    plantmutation('minecraft:brown_mushroom', 'minecraft:poppy', 'minecraft:red_mushroom')
    plantmutation('minecraft:sweet_berries', 'minecraft:beetroot', 'farmersdelight:tomato_seeds')

    //Flowers:

})