
const $EmptyBackground = Java.loadClass('com.simibubi.create.compat.jei.EmptyBackground')

const $Info = Java.loadClass(
  'com.simibubi.create.compat.jei.category.CreateRecipeCategory$Info'
)

const $RecipeType = Java.loadClass('mezz.jei.api.recipe.RecipeType')


const $MixingCategory = Java.loadClass(
  'com.simibubi.create.compat.jei.category.MixingCategory' //This is Mixer specific 
)

const $IJeiMixingRecipe = Java.loadClass(
  'com.simibubi.create.content.processing.basin.BasinRecipe' //This is Mixer specific
)
const plantmutationRecipeType = $RecipeType.create(
  'kubejs',
  'plant_mutation',
  $IJeiMixingRecipe
)

JEIAddedEvents.registerCategories((e) => {
  const guiHelper = e.data.jeiHelpers.guiHelper

  const mixingRecipeCategory = new $MixingCategory.standard(new $Info(null, null, new $EmptyBackground(177, 103), null, null, null))
  e.register(plantmutationRecipeType, (category) => {

    category.width = 177  //These values are also Mixer specific
    category.height = 103


    category
      .title('Plant Mutation')
      .background(mixingRecipeCategory.getBackground())
      .icon(
        doubleItemIcon('create:mechanical_mixer', 'minecraft:wheat_seeds')
      )
      .isRecipeHandled(() => true)
      .handleLookup((builder, recipe, focuses) => {
        mixingRecipeCategory.setRecipe(builder, recipe, focuses)
      })
      .setDrawHandler(
        (recipe, recipeSlotsView, guiGraphics, mouseX, mouseY) => {
          mixingRecipeCategory.draw(
            recipe,
            recipeSlotsView,
            guiGraphics,
            mouseX,
            mouseY
          )
        }
      )
  })
})

//The Function to move the recipes to the new category

JEIAddedEvents.onRuntimeAvailable((e) => {
  const $RecipeType = Java.loadClass('mezz.jei.api.recipe.RecipeType')
  const $BasinRecipe = Java.loadClass(
    'com.simibubi.create.content.processing.basin.BasinRecipe' //This is Mixer specific
  )
  const basinRecipeType = $RecipeType.create('create', 'mixing', $BasinRecipe)
  const plantmutation = $RecipeType.create(
    'kubejs',
    'plant_mutation',
    $BasinRecipe
  )

  const runtime = e.data
  const recipeManager = runtime.getRecipeManager()
  const customRecipes = Utils.newList()
  recipeManager
    .createRecipeLookup(basinRecipeType)
    .get()
    .forEach((recipe) => {
      if (recipe.getId().toString().startsWith('kubejs:plant_mutation_')) {
        customRecipes.add(recipe)
      }
    })
  recipeManager.hideRecipes(basinRecipeType, customRecipes)
  recipeManager.addRecipes(plantmutation, customRecipes)
})

//The function to add the recipe catalysts to the JEI

JEIAddedEvents.registerRecipeCatalysts(jei => {
  jei.data["addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])"](Item.of('create:mechanical_mixer'), [plantmutationRecipeType])
  jei.data["addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])"](Item.of('create:basin'), [plantmutationRecipeType])
  jei.data["addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])"](Item.of('createcasing:brass_mixer'), [plantmutationRecipeType])
  jei.data["addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])"](Item.of('createcasing:copper_mixer'), [plantmutationRecipeType])
  jei.data["addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])"](Item.of('createcasing:railway_mixer'), [plantmutationRecipeType])
  jei.data["addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])"](Item.of('createcasing:industrial_iron_mixer'), [plantmutationRecipeType])
  jei.data["addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])"](Item.of('createcasing:creative_mixer'), [plantmutationRecipeType])
})