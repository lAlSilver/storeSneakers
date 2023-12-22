      /* КНОПКА СКРЫТЬ каталог товаров */

let button = document.getElementById("button-open-more");
let list = document.getElementById("select-product-wrap");
let items = list.getElementsByClassName("product");
let visibleItemCount = 3;
let hiddenItemCount = items.length - visibleItemCount;

function hiddenItem() {
  for (let i = visibleItemCount; i < items.length; i++) {
  items[i].style.display = "none";
  };
};
hiddenItem();

button.onclick = function() {
  for (let i = visibleItemCount; i < visibleItemCount + hiddenItemCount; i++) {
    if (items[i]) {
      items[i].style.display = "block";
    }
  }
  // Если все элементы отображены, скрыть кнопку
  if (visibleItemCount + hiddenItemCount >= items.length) {
    button.style.display = "none";
  }
};

      /* ПОЛЗУНОК ЦЕНЫ */

const rangeInput = document.querySelectorAll(".range-sliders input"),
priceInput = document.querySelectorAll(".price-range input"),
range = document.querySelector(".slider .slider-progress");
let priceGap = 10;

rangeInput.forEach (input => {
    input.addEventListener("input", e => {
        let minVal = parseInt(rangeInput[0].value),
            maxVal = parseInt(rangeInput[1].value);

        if( (maxVal - minVal) < priceGap) {
            if(e.target.className === "range-min") {
                rangeInput[0].value = maxVal + priceGap;
            } 
        } else {
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
        }
    });
});

      /* БЛОК ВОПРОСЫ. аккордион. кнопка открыть/закрыть */ 

let buttonAdd = document.querySelectorAll(".button-add-list")
// console.log(buttonAdd);
 buttonAdd.forEach( function(elem) {
  elem.addEventListener('click', function() {
    const container = elem.closest('.question-block');
    container.classList.toggle('accordion-open');
    // container.style.maxHeight = container.scrollHeight + 'px';
  });
})

      /* БОКОВОЕ МЕНЮ */
      
document.querySelector('.hum-menu').addEventListener('click', function() {
  document.querySelector('.hum-elem_1').classList.toggle("elem_transform_1");
  document.querySelector('.hum-elem_2').classList.toggle("elem_transform_2");
  document.querySelector('.hum-elem_3').classList.toggle("elem_transform_3");
  document.querySelector('.side-nav').classList.toggle("side-nav-visible");
})

      /* ПЕРЕКЛЮЧЕНИЕ ПОДБОРКИ */

let nextStepButtons = document.querySelectorAll('[data-role-next-step-click="next.step.button"]');

nextStepButtons.forEach(function (button){
    button.addEventListener('click', function () {
        let sliderContainerStep = this.closest('.slider-container-step');
        let currentStep = sliderContainerStep.getAttribute('data-current-step');
        let checkboxInputs = sliderContainerStep.querySelectorAll('#slider-' + currentStep + ' input[name="checkbox"]')
        let checked = false;

        if(checkboxInputs.length !== 0){
            for (let i = 0; i < checkboxInputs.length; i++) {
                if (checkboxInputs[i].checked) {
                    checked = true;
                    break;
                }
            }
        } else {
            checked = true;
        }

        if (!checked) {
            checkboxInputs.forEach(function (item) {
                if (!item.classList.contains("checkbox-error")) {
                    item.classList.add("checkbox-error");
                }
            })
        } else {
            sliderContainerStep.style.display = 'none';
            let nextSlider = document.getElementById('slider-' + (Number(currentStep) + 1));
            if (nextSlider) {
                nextSlider.style.display = 'block';
            }
        }
    })
})

      /* ВСПЛЫВАЮЩЕЕ ОКНО POPUP selection */

setTimeout("document.getElementById('popUp-selection').style.display='block'", 5000);

let button_next = document.getElementById('btn-popup-selection-next');

button_next.addEventListener('click', function() {
  window.location.href='#selection';
  document.getElementById('popUp-selection').style.display='none';
  }
)

      /* ВСПЛЫВАЮЩЕЕ ОКНО POPUP basket */

let button_basket = document.getElementById('popUp-basket-send');

button_basket.addEventListener('click', function() {
    setTimeout("document.getElementById('popUp-basket').style.display='block'");

    let button_next = document.getElementById('btn-popup-basket-next');

    button_next.addEventListener('click', function() {
      document.getElementById('popUp-basket').style.display='none';
      }
    )
      //закрытие popup
    let popUp_basket = document.getElementById('popUp-basket');

    document.addEventListener('mouseup', function(e) {
      if(e.target == popUp_basket) {
        popUp_basket.style.display = 'none';
      }
      });
  }
)

      /* ОТПРАВКА ФОРМЫ БЕЗ ПЕРЕЗАГРУЗКИ СТРАНИЦЫ */

document.addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.reset();
});             

      /* СЧЕТЧИК КОРЗИНЫ   cartCount */
let product = document.getElementsByClassName('basket-product-wrap')
let basketNum = document.getElementById('cardCount')

basketNum.insertAdjacentHTML(
  'beforeend', 
`
  <button type="button" id="button-num-basket" class="header-nav-item-basket-info">${product.length}
  </button>
`
)

if(product.length === 0) {
  document.querySelector('.card-null').style.display = 'block';
  document.querySelector('.wrap-btn-page-buy').style.display = 'block';
  document.querySelector('.popUp-basket-btn_total-wrap').style.display = 'none';
}

      /* УДАЛЕНИЕ ПРОДУКТЫ ИЗ КОРЗИНЫ */ 

let button_remove = document.querySelectorAll(".basket_delete-img")

button_remove.forEach( function(elem) {
  elem.addEventListener('click', function() {
    const contain = elem.closest('.basket-product-wrap');
    contain.remove();
  });
})