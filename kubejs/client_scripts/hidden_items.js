JEIEvents.hideItems(event => {

  event.hide('agricraft:coal_pebble')
  event.hide('agricraft:copper_nugget')
  event.hide('agricraft:diamond_shard')
  event.hide('agricraft:netherite_sliver')
  event.hide('agricraft:amathyllis_petal')
  event.hide('botania:pebble')
  event.hide(Item.of('ad_astra:tier_1_rocket', '{BotariumData:{StoredFluids:[{Amount:3000L,Fluid:"ad_astra:fuel"}]}}').strongNBT())
  event.hide(Item.of('ad_astra:tier_2_rocket', '{BotariumData:{StoredFluids:[{Amount:3000L,Fluid:"ad_astra:fuel"}]}}').strongNBT())
  event.hide(Item.of('ad_astra:tier_3_rocket', '{BotariumData:{StoredFluids:[{Amount:3000L,Fluid:"ad_astra:fuel"}]}}').strongNBT())
  event.hide(Item.of('ad_astra:tier_4_rocket', '{BotariumData:{StoredFluids:[{Amount:3000L,Fluid:"ad_astra:fuel"}]}}').strongNBT())
})