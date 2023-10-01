import axios from 'axios';

const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api';

async function getRequest(endpoint, params = {}) {
  try {
    const response = await axios.get(`${BASE_URL}/${endpoint}`, { params });
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

// Приклади функцій

// Отримання майстер-класів (подій)
async function getEvents() {
  return getRequest('events');
}

// Отримання списку категорій рецептів
async function getCategories() {
  return getRequest('categories');
}

//  Отримання списку рецептів з фільтрацією
async function getFilteredRecipes(params) {
  return getRequest('recipes', params);
}



// Отримання  популярних рецептів
async function getPopularRecipes() {
  return getRequest('recipes/popular');
}

//  Отримання  деталей рецепту по ID
async function getRecipeDetails(recipeID) {
  return getRequest(`recipes/${recipeID}`);
}

// Додавання рейтингу до рецепту
async function addRatingToRecipe(recipeID, rating) {
  try {
    const response = await axios.post(
      `${BASE_URL}/recipes/${recipeID}/rating`,
      { rating }
    );
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

//  Отримання переліку інгредієнтів
async function getIngredients() {
  return getRequest('ingredients');
}

//  Отримання переліку районів
async function getAreas() {
  return getRequest('areas');
}

// Додавання замовлення
async function addOrder(orderData) {
  try {
    const response = await axios.post(`${BASE_URL}/orders`, orderData);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export {
  getEvents,
  getCategories,
  getFilteredRecipes,
  getPopularRecipes,
  getRecipeDetails,
  addRatingToRecipe,
  getIngredients,
  getAreas,
  addOrder,
};
