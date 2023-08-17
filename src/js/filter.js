import SlimSelect from 'slim-select'
import 'slim-select/dist/slimselect.css'
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { forEach } from 'lodash';

const filterForm = document.querySelector(".filter-form-input");
const selectes = document.querySelectorAll(".filter-form-select")

const selectTime = document.getElementById("searchTime")
console.dir(selectTime);
filterForm.addEventListener('submit', handlerFilterForm);

selectes.forEach(item => {
    const options = [];
    let maxShowItems = 6; // За замовчуванням
    if (item === selectTime) {
        const minTime = 5;
        const maxTime = 120;
        const step = 5;
        maxShowItems = 6;

        for (let time = minTime; time <= maxTime; time += step) {
            options.push({ text: `${time} min`, value: time.toString() });
        }
    } else {
        // тут будуть умови для інших селектів 
    }

    new SlimSelect({
        select: item,
        data: options,
        openPosition: 'down',
        maxShowItems: maxShowItems
    });
});


console.log(selectes);
function handlerFilterForm(evt) {
    evt.preventDefault();
}

/* document.getElementById('myForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Зупинити стандартну поведінку відправки форми
  
    Зібрати дані з інпуту та селектів

    const inputData = document.getElementById('inputField').value;
    const selectValue1 = document.getElementById('select1').value;
    const selectValue2 = document.getElementById('select2').value;
    const selectValue3 = document.getElementById('select3').value;
  
    // Створити об'єкт зі зібраними даними
    const formData = {
      input: inputData,
      select1: selectValue1,
      select2: selectValue2,
      select3: selectValue3
    };} */