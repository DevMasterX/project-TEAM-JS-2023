
const listForStorage = document.querySelector('.filter-gallery-list');
listForStorage.addEventListener('click', (e)=>{
    if(e.target.nodeName === 'P'){
        e.target.classList.add('favorite')
        const cardBody = e.target.parentElement.parentElement;
        const recipeInfo = {
            name: cardBody.querySelector('.filter-gallery-item-tittle').textContent,
            image:cardBody.querySelector('.filter-gallery-item-photo').src,
            rating: cardBody.querySelector('.filter-gallery-item-rating-value').textContent,
            description: cardBody.querySelector('.filter-gallery-item-description').textContent,
        }
        recipeDB.saveIntoDB(recipeInfo);
        if(e.target.classList.contains('favorite')){
recipeDB.removeFromDB(recipeInfo.name)

        }
        




    

    }
   
});

class RecipeDB {
    saveIntoDB(recipe){
        const recipes = this.getFromDB();
        recipes.push(recipe)
        localStorage.setItem('recipes', JSON.stringify(recipes));

    }
getFromDB() {
    let recipes;
    if (!localStorage.getItem('recipes')) {recipes = []

    }else {
        recipes = JSON.parse(localStorage.getItem('recipes'))
    }
    return recipes
}
removeFromDB(name){
    const recipes = this.getFromDB();
    recipes.forEach((recipe, index) => {
if (name === recipe.name){
    recipes.splice(index, 1)
}
    });
    localStorage.setItem('recipes', JSON.stringify(recipes))

}
}
const recipeDB = new RecipeDB();
