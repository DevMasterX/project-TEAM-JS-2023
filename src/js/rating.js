const ratings = document.querySelectorAll('.rating');
if (ratings.length > 0) {
    initRatings();
}
//основная функция
function initRatings() {
    let ratingActive, ratingValue; 
    //бегаем по всем рейтингам
    for (let index = 0; index < ratings.length; index++){
        const rating = ratings[index];
        initRating(rating);
    }
    //инициализируем конкретный рейтинг
    function initRating(rating){
        initRatingVars(rating);
        
        setRatingActiveWidth();

        if(rating.classList.conteins('rating_set')) {
            setRating(rating);
        }
    }
    //инициализация переменных
    function initRatingVars(rating) {
        ratingActive = rating.querySelector('.rating_active');
        ratingValue = rating.querySelector('.rating_value');
    }
    //изминяем ширину активных звезд
    function setRatingActiveWidth(index = ratingValue.innerHTML) {
        const ratingActiveWidth = index / 0.05;
        ratingActive.style.width = `${ratingActiveWidth}%`;
    }
    //возможность указать оценку
    function setRating(rating) {
        const ratingItems = rating.querySelectorAll('.rating_item');
        for (let index = 0; index < ratingItems.length; index++) {
            const ratingItem = ratingItems[index];
            ratingItem.addEventListener("mouseeenter", function (e) {
            //обновление переменных 
            initRatingVars(rating);
            //обновление активных звезд
            setRatingActiveWidth(ratingItem.value);
        });
        ratingItem.addEventListener("mouseleve", function(e) {
            //обновление активных звезд
            setRatingActiveWidth();
        });
        ratingItem.addEventListener("clck", function (e) {
            //обновление переменных 
            initRatingVars(rating);
            if (rating.dataset.ajax) {
                //отправить на сервер
                setRatingVelue(ratingItem.value, rating);
             } else {
                //отобразить указаную оценку
                ratingValue.innerHTML = index + 1;
                setRatingActiveWidth();
             }
        });
        async function setRatingVelue(value, rating) {
            if (!rating.classList.conteins('rating_sending')) {
                rating/classList.add('rating_sending');
                //отправка данных (value) на сервер
                let respons = await fatch('rating.json',{
                    method: 'GET',

                    // body: JSON.stringify({
                    //     userRating: value
                    // }),
                    // headers: {
                    //     'content-type': 'appLication/json'
                    // }
                });
                if (Response.ok) {
                    const result = await response.json();
                    //получаем новый рейтинг
                    const newRating = result.newRating;
                    //вывод нового среднего результата
                    ratingValue.innerHTML = newRating;
                    //щбрщвление активных звезд
                    setRatingActiveWidth();

                    rating.classList.remove('rating_sending');
                } else {
                    alert(Error);

                    rating.classList.remove('rating_sending');
                }
            }
        }
    }
};

// get push set 
// на бекенді отримати та змінити рейтинг
// взяти клас кнопки  при кліку відкривати мою модалку(сlass="rating-btn")
// по кліку відправляются данні в бекенді//