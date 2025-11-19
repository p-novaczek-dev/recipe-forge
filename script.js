function renderRecipeList(filteredRecipes) {
  currentFilteredRecipes = filteredRecipes;
  const list = $('#recipeList').empty();
  filteredRecipes
    .sort((a, b) => a.name.localeCompare(b.name))
    .forEach((recipe, index) => {
      const li = $('<li>').text(recipe.name).data('index', index);
      list.append(li);
    });
}

function displayRecipe(recipe) {
  const container = $('#recipeContent').empty();
  container.append(`<div class="recipe-name">${recipe.name}</div>`);
  container.append(`<div class="recipe-description">${recipe.description}</div>`);

  recipe.parts.forEach(part => {
    const partDiv = $('<div class="part">');
    partDiv.append(`<h3>${part.name}</h3>`);
    const ul = $('<ul class="ingredients">');
    part.ingredients.forEach(ing => {
      ul.append(`<li>${ing}</li>`);
    });
    partDiv.append(ul);
    container.append(partDiv);
  });

  container.append(`<h3>Zubereitung</h3>`);
  const stepsUl = $('<ol class="steps">');
  recipe.steps.forEach(step => {
    stepsUl.append(`<li>${step}</li>`);
  });
  container.append(stepsUl);
}

function searchRecipes(query) {
  query = query.toLowerCase();
  return recipes.filter(recipe => {
    return JSON.stringify(recipe).toLowerCase().includes(query);
  });
}

$(document).ready(function () {
  currentFilteredRecipes = recipes;
  renderRecipeList(recipes);

  $('#recipeList').on('click', 'li', function () {
    const index = $(this).data('index');
    displayRecipe(currentFilteredRecipes[index]);
  });

  $('#search').on('input', function () {
    const query = $(this).val();
    const filtered = searchRecipes(query);
    renderRecipeList(filtered);
  });
});