const form = document.querySelector('.modal-form');
const listForStorage = document.querySelector('.filter-gallery-list');


  // const favFav = document.querySelector('.filter-gallery-item-favorit-btn');
  // favFav?.addEventListener('click', ()=> alert('fff'))
export function onFavBtnClick () {console.log('gi')}




listForStorage.addEventListener('click', (e)=>{
const favFav = e.target.classList;
if(favFav.value === 'filter-gallery-item-favorit-btn'){
console.dir(favFav)
  const favArr=document.getElementsByClassName('filter-gallery-item-favorit-btn');
   console.log(favArr)}
    const cardBody = e.target.parentElement.parentElement;

    const recipeInfo = {
        category: cardBody.dataset.attribute,
        id: cardBody.id,
        name: cardBody.querySelector('.filter-gallery-item-tittle').textContent,
        image:cardBody.querySelector('.filter-gallery-item-photo').src,
        rating: cardBody.querySelector('.filter-gallery-item-rating-value').textContent,
        description: cardBody.querySelector('.filter-gallery-item-description').textContent,
    }
 
    if(cardBody.classList.contains('favorite') && e.target.nodeName === 'H3'){  
  
        recipeDB.removeFromDB(recipeInfo.name)
        cardBody.classList.remove('favorite')
      
    }
 
        if(cardBody.classList.contains('favorite'))return;
   
    if(e.target.nodeName === 'BUTTON'){

        cardBody.classList.add('favorite')
   
        recipeDB.saveIntoDB(recipeInfo);

    }
 
});

class RecipeDB {
  getOrderFromLC() {
    let orderForm;
    if (!localStorage.getItem('orderForm')) {
      orderForm = {};
    } else {
      orderForm = JSON.parse(localStorage.getItem('orderForm'));
    }
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

form.addEventListener('input', () => recipeDB.setOrderFormLC());
