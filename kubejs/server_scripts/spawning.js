ServerEvents.recipes(event => {
    event.campfireCooking('minecraft:blaze_spawn_egg', 'botania:blaze_block', 0.3, 1800) // 1800 ticks = 90 seconds
})

ItemEvents.canPickUp('minecraft:blaze_spawn_egg', event => {
  event.player.runCommandSilent('summon minecraft:blaze ~ ~ ~')
  event.player.runCommandSilent('/kill @e[type=item,nbt={Item:{id:"minecraft:blaze_spawn_egg"}}, distance=..4]')
  event.cancel()
})