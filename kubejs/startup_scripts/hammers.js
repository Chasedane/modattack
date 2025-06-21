StartupEvents.registry('item', event => {
  event.create('stone_hammer', 'paxel')
    .displayName('Stone Hammer') // Anzeigename
    .tier('stone') // Werte wie Steinwerkzeug
    .texture('kubejs:item/hammers/stone_hammer') // Textur muss unter resources/kubejs/textures/item/ liegen
    .maxDamage(131) // Haltbarkeit wie Steinwerkzeuge
    .attackDamageBaseline(5.0) // Optional
    .speedBaseline(-3.5) // Optional
    .tag('forge:tools/hammer') // Tag für Lootmodifikatoren

    event.create('golden_hammer', 'paxel')
    .displayName('Golden Hammer') // Anzeigename
    .tier('gold') // Werte wie Steinwerkzeug
    .texture('kubejs:item/hammers/golden_hammer') // Textur muss unter resources/kubejs/textures/item/ liegen
    .maxDamage(32) // Haltbarkeit wie Steinwerkzeuge
    .attackDamageBaseline(3.5) // Optional
    .speedBaseline(-3.5) // Optional
    .tag('forge:tools/hammer') // Tag für Lootmodifikatoren

    event.create('wooden_hammer', 'paxel')
    .displayName('Wooden Hammer') // Anzeigename
    .tier('wood') // Werte wie Steinwerkzeug
    .texture('kubejs:item/hammers/wooden_hammer') // Textur muss unter resources/kubejs/textures/item/ liegen
    .maxDamage(59) // Haltbarkeit wie Steinwerkzeuge
    .attackDamageBaseline(3.5) // Optional
    .speedBaseline(-3.5) // Optional
    .tag('forge:tools/hammer') // Tag für Lootmodifikatoren

    event.create('iron_hammer', 'paxel')
    .displayName('Iron Hammer') // Anzeigename
    .tier('iron') // Werte wie Steinwerkzeug
    .texture('kubejs:item/hammers/iron_hammer') // Textur muss unter resources/kubejs/textures/item/ liegen
    .maxDamage(250) // Haltbarkeit wie Steinwerkzeuge
    .attackDamageBaseline(6.5) // Optional
    .speedBaseline(-3.5) // Optional
    .tag('forge:tools/hammer') // Tag für Lootmodifikatoren

    event.create('diamond_hammer', 'paxel')
    .displayName('Diamond Hammer') // Anzeigename
    .tier('diamond') // Werte wie Steinwerkzeug
    .texture('kubejs:item/hammers/diamond_hammer') // Textur muss unter resources/kubejs/textures/item/ liegen
    .maxDamage(1561) // Haltbarkeit wie Steinwerkzeuge
    .attackDamageBaseline(7.5) // Optional
    .speedBaseline(-3.5) // Optional
    .tag('forge:tools/hammer') // Tag für Lootmodifikatoren

    event.create('netherite_hammer', 'paxel')
    .displayName('Netherite Hammer') // Anzeigename
    .tier('netherite') // Werte wie Steinwerkzeug
    .texture('kubejs:item/hammers/netherite_hammer') // Textur muss unter resources/kubejs/textures/item/ liegen
    .maxDamage(2031) // Haltbarkeit wie Steinwerkzeuge
    .attackDamageBaseline(8.5) // Optional
    .speedBaseline(-3.5) // Optional
    .tag('forge:tools/hammer') // Tag für Lootmodifikatoren
})
