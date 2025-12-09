let currentScale = 1;
let currentIndex = -1;

function scaleIngredient(ing, scale) {
  const match = ing.match(/^(\d+(?:\.\d+)?)\s*(.*)$/);
  if (match) {
    const num = parseFloat(match[1]) * scale;
    return num + ' ' + match[2];
  }
  return ing;
}

function renderRecipeList(filteredRecipes) {
  const list = $('#recipeList').empty();
  filteredRecipes
    .sort((a, b) => a.name.localeCompare(b.name))
    .forEach((recipe) => {
      const originalIndex = recipes.indexOf(recipe);
      const li = $('<li>').text(recipe.name).data('original-index', originalIndex);
      list.append(li);
    });
  if (currentIndex >= 0) {
    $(`.recipe-list li[data-original-index="${currentIndex}"]`).addClass('active');
  }
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

function showRecipeByIndex(index) {
  index = parseInt(index, 10);
  if (isNaN(index) || index < 0 || index >= recipes.length) {
    $('#recipeContent').empty();
    $('.recipe-list li').removeClass('active');
    currentIndex = -1;
    return;
  }
  currentIndex = index;
  displayRecipe(recipes[index]);
  $('.recipe-list li').removeClass('active');
  $(`.recipe-list li[data-original-index="${index}"]`).addClass('active');
}

function searchRecipes(query) {
  query = query.toLowerCase();
  return recipes.filter(recipe => {
    return JSON.stringify(recipe).toLowerCase().includes(query);
  });
}

$(document).ready(function () {
  renderRecipeList(recipes);

  $('#recipeList').on('click', 'li', function () {
    const originalIndex = $(this).data('original-index');
    showRecipeByIndex(originalIndex);
    window.location.hash = originalIndex;
  });

  $('#search').on('input', function () {
    const query = $(this).val();
    const filtered = searchRecipes(query);
    renderRecipeList(filtered);
  });

  $(window).on('hashchange', function() {
    const hash = window.location.hash.slice(1);
    const index = parseInt(hash, 10);
    showRecipeByIndex(index);
  });

  // Initial hash check
  const initialHash = window.location.hash.slice(1);
  const initialIndex = parseInt(initialHash, 10);
  showRecipeByIndex(initialIndex);
});