StartupEvents.registry("item", (event) => {

    event.create("wooden_watering_can", "wateringcan");


   

});

CucumberItemEvents.modification((event) => {
    event.modify("kubejs:wooden_watering_can", (item) => {
        item.chance = 0.5; // Makes it a 50% chance for the watering can to bonemeal crops
    });
});