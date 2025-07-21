/**
 * @title Custom JEI Categories [KubeJS Additions v4.2.0+]
 * @author pietheniceguy
 * @source https://discord.com/channels/303440391124942858/1229177615978594334
 */

let customRecipeType = null

JEIAddedEvents.registerCategories((event) => {
    // Register a new CustomCategory with the id "kubejsadditions:hammering".
    //const guiHelper = event.JEI_HELPERS.guiHelper;
    event.custom("kubejsadditions:hammering", (category) => {

        customRecipeType = category.recipeType;

        const {
            jeiHelpers,
            jeiHelpers: { guiHelper },
        } = category;

        // Set the width and height of the category.
        category.width = 150 
        category.height = 70
        category
            // Set the title of the category.
            .title("Hammering") 
            // Set the background of the category to a custom texture.
            .background(guiHelper.createDrawable("kubejs:textures/gui/hammering.png", 0 , 0, 150, 70))
            // Set the background of the category to a blank 100x50 drawable canvas.
            //.background(guiHelper.createBlankDrawable(150, 70))
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
        recipe?.data?.input !== undefined &&
        recipe?.data?.amount !== undefined
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
            builder.addSlot("INPUT", 77, 27).addIngredients(Ingredient.of(recipe.data.input)).setSlotName("input");
            // Add an output slot so that if you look at how the item is made, it shows this recipe.
            builder.addSlot("OUTPUT", 125, 27).addItemStack(Item.of(recipe.data.name, recipe.data.amount)).setSlotName("output");
           // builder.addRecipeCatalyst("INPUT").addItemStack(Item.of('#forge:tools/hammer'));
            break;
        case "fluid":
            
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
    //guiGraphics.drawableBuilder("kubejs:textures/gui/background.png", 0, 0, 64, 64);

   /*const MY_IMAGE = new ResourceLocation("kubejs", recipe.data.input_texture);
   const HAMMER = new ResourceLocation("kubejs", "textures/gui/hammer.png");

   guiGraphics.blit(MY_IMAGE, 40, 19, 0, 0, 0, 32, 32, 256, 256,);
   guiGraphics.blit(HAMMER, 20, 19, 0, 0, 32, 32,);*/
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
        .add({ name: "minecraft:gravel", type: "block", input: "minecraft:cobblestone", amount: 1})
        .add({ name: "minecraft:sand", type: "block", input: "minecraft:gravel",amount: 1})
        .add({ name: "kubejs:dust", type: "block", input: "minecraft:sand", amount: 1})
        .add({ name: "kubejs:crushed_netherrack", type: "block", input: "minecraft:netherrack", amount: 1})
        .add({ name: "thermal:sawdust", type: "block", input: "#minecraft:logs", amount: 8})
        .add({ name: "thermal:sawdust", type: "block", input: "#minecraft:planks", amount: 2})
    // .add([])
    // .add("")
    // .add(true)
    // .add(50)
    // .add(12.4)
    // .add(()=> Item.of('steak'))
});

JEIAddedEvents.registerRecipeCatalysts(jei => {
//   jei.data.addRecipeCatalyst(Item.of('kubejs:stone_hammer'), customRecipeType)

jei.data["addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])"](Item.of('kubejs:wooden_hammer'), [customRecipeType])
jei.data["addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])"](Item.of('kubejs:stone_hammer'), [customRecipeType])
jei.data["addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])"](Item.of('kubejs:iron_hammer'), [customRecipeType])
jei.data["addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])"](Item.of('kubejs:golden_hammer'), [customRecipeType])
jei.data["addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])"](Item.of('kubejs:diamond_hammer'), [customRecipeType])
jei.data["addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])"](Item.of('kubejs:netherite_hammer'), [customRecipeType])
})





JEIEvents.information(event => {
  event.addItem('kubejs:creative_block', ['Legends tell, that only the most powerful hammer can shape this block into its final form...'])
})
