StartupEvents.registry('item', event => {
  event.create('resource_brush', 'shovel')
    .displayName('Resource Brush') // Anzeigename
    .tier('stone') // Werte wie Steinwerkzeug
    .maxDamage(131) // Haltbarkeit wie Steinwerkzeuge
    .attackDamageBaseline(0) // Optional
    .speedBaseline(-1) // Optional
    .tag('forge:tools/brush') // Tag für Lootmodifikatoren


})