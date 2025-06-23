/**
 * @title Custom JEI Categories [KubeJS Additions v4.2.0+]
 * @author pietheniceguy
 * @source https://discord.com/channels/303440391124942858/1229177615978594334
 */

JEIAddedEvents.registerCategories((event) => {
    // Register a new CustomCategory with the id "kubejsadditions:painful_blocks".
    //const guiHelper = event.JEI_HELPERS.guiHelper;
    event.custom("kubejsadditions:hammering", (category) => {

        const {
            jeiHelpers,
            jeiHelpers: { guiHelper },
        } = category;

        // Set the title of the category to "Painful Blocks".
        category.width = 150 //or whatever int
        category.height = 70
        category
            .title("Hammering")
            // Set the background of the category to a blank 100x50 drawable canvas.
            .background(guiHelper.createDrawable("kubejs:textures/gui/background.png", 0 , 0, 150, 70))
            //.background(guiHelper.createBlankDrawable(100, 50))
            // Set the icon of the category to a cactus item.
            .icon(guiHelper.createDrawableItemStack(Item.of("kubejs:stone_hammer")))
            // Set the callback function that will verify if a recipe is a valid recipe for this category.
            .isRecipeHandled((recipe) => {
                return global["verifyRecipe"](jeiHelpers, recipe);
            })
            // Set the callback function that will allow JEI to index this recipe and determine
            // what the inputs and outputs of each recipe are.
            .handleLookup((builder, recipe, focuses) => {
                global["handleLookup"](jeiHelpers, builder, recipe, focuses);
            })
            // Set the callback function for rendering additional detials to the screen.
            .setDrawHandler((recipe, recipeSlotsView, guiGraphics, mouseX, mouseY) => {
                global["renderPainfulBlocks"](jeiHelpers, recipe, recipeSlotsView, guiGraphics, mouseX, mouseY);
            });
    });
});

// This function will be used by JEI to verify if a custom recipe is apart of this category.
global["verifyRecipe"] = (jeiHelpers, recipe) => {
    // The data we give later on in the recipes will be stored in the `data` field.
    // Whatever you pass in, is whatever you'll get out.
    // The possibilities are endless, as you are only restricted to what you can store on
    // the KubeJS client side.

    // IMPORTANT: Always return true or false. If you do not, it could crash the game or cause
    // JEI to not work properly.
    return !!(
        recipe?.data?.name !== undefined &&
        recipe?.data?.type !== undefined &&
        recipe?.data?.input !== undefined
    );
};

// JEI needs to understand what sort of information is held within
// the recipe. This is where you can define different types of slots,
// where they should go, if they are input, output, catalysts, or neither.
// Depending on the slot type, it will effect if the recipe appears in
// in the recipe lookup.
// Refer to the JEI API for more information on how to use this.
global["handleLookup"] = (jeiHelpers, builder, recipe, focuses) => {
    switch (recipe.data.type) {
        case "item":
        case "block":
            // Add an input slot to the recipe that is 35 pixels from the left and 20 pixels from the top.
            // Name the slot "input" so that if we want to reference it in the draw handler, we can.
            builder.addSlot("INPUT", 120, 30).addItemStack(Item.of(recipe.data.input)).setSlotName("input");
            // Add an invisible output slot so that if you look at how the item is made, it shows this recipe.
            builder.addSlot("OUTPUT", 120, 50).addItemStack(Item.of(recipe.data.name)).setSlotName("output");
            break;
        case "fluid":
            // Add an input slot to the recipe that is 35 pixels from the left and 20 pixels from the top.
            // This one is slightly different as we are adding a fluid to the slot instead of an Item.
            // you can chain these as much as you'd like and add as many different ingredients
            // as you'd like.
            builder.addSlot("INPUT", 35, 20).addFluidStack(recipe.data.name, 1000).setSlotName("input");
            // Add an invisible output slot so that if you look at how the item is made, it shows this recipe.
            builder.addInvisibleIngredients("OUTPUT").addFluidStack(recipe.data.name, 1000);
            break;
    }
};

// We tap into the Minecraft GuiGraphics class to draw the text description above the input slot.
global["renderPainfulBlocks"] = (jeiHelpers, recipe, recipeSlotsView, guiGraphics, mouseX, mouseY) => {
    // By using the Client binding we can get the Minecraft font.
    // Next we can draw the description of the recipe above the input slot.
    // The first argument is the font, the second is the FormattedText, the third is the x position,
    // the fourth is the y position, the fifth is the width of the text, and I have no clue what the last argument does.
    // Probably z-index if I had to guess.
    //guiGraphics.drawWordWrap(Client.font, Text.of(recipe.data.description), 0, 0, 100, 0);
};

// Here we can hook into the JEI recipe registration event to add some recipes to our
// newly created category.
JEIAddedEvents.registerRecipes((event) => {
    // This utilized the new recipe category you made above here.
    // All that's left is to add as many different recipes as your heart desires.
    // There are no limitations to what you can store as a "recipe". Nothing that you don't control
    // cares about the format of the data.
    // If you want it to be an object, an array, a string, a number, a boolean, or even a function,
    // It does not matter. It's all up to you. Go wild.
    // Just make sure to update how you render it in the category definition.
    event
        .custom("kubejsadditions:hammering")
        .add({ name: "minecraft:gravel", type: "block", input: "minecraft:cobblestone"})
        .add({ name: "minecraft:sand", type: "item", input: "minecraft:gravel" })
        .add({ name: "kubejs:dust", type: "block", input: "minecraft:sand"})
        .add({ name: "kubejs:crushed_netherrack", type: "item", input: "minecraft:netherrack" })
        .add({ name: "thermal:sawdust", type: "item", input: "minecraft:oak_log"})
        .add({ name: "thermal:sawdust", type: "item", input: "minecraft:oak_planks" })
    // .add([])
    // .add("")
    // .add(true)
    // .add(50)
    // .add(12.4)
    // .add(()=> Item.of('steak'))
});
/*
JEIAddedEvents.registerCategories(event => {
  const guiHelper = event.JEI_HELPERS.guiHelper;
  const ResourceLocation = Java.loadClass("net.minecraft.resources.ResourceLocation");

  event.custom("kubejs:testkategorie", category => {
    category
      .title("Testkategorie")
      .background(guiHelper.createDrawable("kubejs:textures/item/background", 0, 0, 149, 175))
      .icon(guiHelper.createDrawableItemStack(Item.of("minecraft:stone")))
      .isRecipeHandled(recipe => true)
      .handleLookup((builder, recipe) => {
        builder.addSlot(RecipeIngredientRole.INPUT, 10, 20).addItemStack(Item.of("minecraft:iron_ingot"));
        builder.addSlot(RecipeIngredientRole.OUTPUT, 60, 20).addItemStack(Item.of("minecraft:diamond"));
      });
  });
});*/