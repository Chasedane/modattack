StartupEvents.registry('item', event => {
    event.create('impure_emerald') // Create a new item with ID 'kubejs:impure_emerald'
        .displayName('Impure Emerald') // Set the display name of the item
        .maxStackSize(64) // Set the maximum stack size of the item
        .tag('forge:impure_emerald') // Add the item to the 'forge:impure_emerald' tag

    event.create('incomplete_emerald', 'create:sequenced_assembly') // Create a new item with ID 'kubejs:incomplete_emerald'
});