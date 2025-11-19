let currentScale = 1;

function scaleIngredient(ing, scale) {
  const match = ing.match(/^(\d+(?:\.\d+)?)\s*(.*)$/);
  if (match) {
    const num = parseFloat(match[1]) * scale;
    return num + ' ' + match[2];
  }
  return ing;
}

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

  const scaleButtons = $('<div class="scale-buttons">');
  scaleButtons.append(`<button data-scale="0.5" ${currentScale === 0.5 ? 'class="scale-selected"' : ''}>½</button>`);
  scaleButtons.append(`<button data-scale="1" ${currentScale === 1 ? 'class="scale-selected"' : ''}>1x</button>`);
  scaleButtons.append(`<button data-scale="2" ${currentScale === 2 ? 'class="scale-selected"' : ''}>2x</button>`);
  scaleButtons.append(`<button data-scale="4" ${currentScale === 4 ? 'class="scale-selected"' : ''}>4x</button>`);
  container.append(scaleButtons);

  scaleButtons.find('button').on('click', function() {
    currentScale = parseFloat($(this).data('scale'));
    displayRecipe(recipe);
  });

  recipe.parts.forEach(part => {
    const partDiv = $('<div class="part">');
    partDiv.append(`<h3>${part.name}</h3>`);
    const ul = $('<ul class="ingredients">');
    part.ingredients.forEach(ing => {
      ul.append(`<li>${scaleIngredient(ing, currentScale)}</li>`);
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