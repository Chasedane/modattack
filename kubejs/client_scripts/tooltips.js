ItemEvents.tooltip(event => {

    event.addAdvanced('kubejs:wooden_watering_can', (item, advanced, text) => {
        text.add(2, Text.gray('Area: 1x1'))
    })
    event.addAdvanced('mysticalagriculture:watering_can', (item, advanced, text) => {
        text.add(2, Text.gray('Area: 3x3')) // Adds text in first line, pushing the items name down a line. If you want the line below the item name, the index must be 1
    })

});