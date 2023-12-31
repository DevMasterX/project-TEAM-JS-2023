const form = document.querySelector('.modal-form');
function addFavouriteOnList(){recipeDB.getFromDB().forEach(item => {
  
      const li = document.querySelectorAll('.filter-gallery-item');
    
      li.forEach(liItem => {
        if (liItem.id === item.id) liItem.classList.add('favorite')})
      });}

function favouriteLocalStorage(){
  const listForStorage = document.querySelector('.filter-gallery-list');
listForStorage.addEventListener('click', handlerFavouriteBtn)}

function handlerFavouriteBtn(e){if(e.target.classList.value === 'filter-gallery-item-favorit-btn'){
  const favBtn = e.target;
 
  const cardBody = favBtn.parentElement.parentElement;
  const recipeInfo = {
     
      id: cardBody.id,
      name: cardBody.querySelector('.filter-gallery-item-tittle').textContent,
      image:cardBody.querySelector('.filter-gallery-item-photo').src,
      rating: cardBody.querySelector('.filter-gallery-item-rating-value').textContent,
      description: cardBody.querySelector('.filter-gallery-item-description').textContent,
      category: cardBody.dataset.attribute,
  }
  
  if(cardBody.classList.contains('favorite') ){  
      
    recipeDB.removeFromDB(recipeInfo.name);
    cardBody.classList.remove('favorite');
  
  }
  else{cardBody.classList.add('favorite');
  recipeDB.saveIntoDB(recipeInfo);}
}}
 


    
    class RecipeDB {
      getOrderFromLC() {
        let orderForm = JSON.parse(localStorage.getItem('orderForm'));
        
        return orderForm;
      }
      setOrderFormLC() {
        const infoOrder = {
          name: form.elements.name.value,
          phone: form.elements.phone.value,
          email: form.elements.email.value,
        };
        localStorage.setItem('orderForm', JSON.stringify(infoOrder));
      }
      saveIntoDB(recipe) {
        const recipes = this.getFromDB();
        recipes.push(recipe);
        localStorage.setItem('recipes', JSON.stringify(recipes));
      }
      getFromDB() {
        let recipes;
        if (!localStorage.getItem('recipes')) {
          recipes = [];
        } else {
          recipes = JSON.parse(localStorage.getItem('recipes'));
        }
        return recipes;
      }
      removeFromDB(name) {
        const recipes = this.getFromDB();
        recipes.forEach((recipe, index) => {
          if (name === recipe.name) {
            recipes.splice(index, 1);
          }
        });
        localStorage.setItem('recipes', JSON.stringify(recipes));
      }
    }
    const recipeDB = new RecipeDB();
    
    // form.addEventListener('submit', () => recipeDB.setOrderFormLC());    
  
// if(recipeDB.getOrderFromLC()){const {name, phone, email} = recipeDB.getOrderFromLC()
// form.elements.name.value = name;
// form.elements.phone.value = phone;
// form.elements.email.value = email;}
export{favouriteLocalStorage, addFavouriteOnList, RecipeDB}