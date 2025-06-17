StartupEvents.registry('item', event => {
  event.create('stone_hammer', 'paxel')
    .displayName('§7Stone Hammer') // Anzeigename
    .tier('stone') // Werte wie Steinwerkzeug
    .texture('kubejs:item/hammers/stone_hammer') // Textur muss unter resources/kubejs/textures/item/ liegen
    .maxDamage(131) // Haltbarkeit wie Steinwerkzeuge
    .attackDamageBaseline(5.0) // Optional
    .speedBaseline(-2.8) // Optional
    .tag('forge:tools/hammer') // Tag für Lootmodifikatoren
})