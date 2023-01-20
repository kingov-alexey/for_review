// * +++ DONE Самооценку своей работы выведите в консоль браузера.
// * +++ Для этого подключите к файлу index.html файл index.js, в нём напишите функцию console.log(),
// * +++ в скобках в кавычках напишите самооценку по пунктам. Для переноса строк используйте символ \n

console.log(
  `\n
  \n
  \n
  !!! ОЦЕНИВАЮ СЕБЯ: 00/75 (85) !!!\n                                                           
  \n
  \n
  \n

  ## Требования к вёрстке
1. Вёрстка соответствует макету. Ширина экрана 768px +24
   - блок <header> +2
   - секция welcome +3
   - секция about +4
   - секция service +4
   - секция prices +4
   - секция contacts +4
   - блок <footer> + 3
2. Вёрстка соответствует макету. Ширина экрана 380px +24
   - блок <header> +2
   - секция welcome +3
   - секция about +4
   - секция service +4
   - секция prices +4
   - секция contacts +4
   - блок <footer> + 3
3. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15
   - нет полосы прокрутки при ширине страницы от 1440рх до 380px +7
   - нет полосы прокрутки при ширине страницы от 380px до 320рх +8
4. На ширине экрана 380рх и меньше реализовано адаптивное меню +22 (Допускается появление адаптивного меня на ширине более 380, но не допускается на ширине более 770px)
   - при ширине страницы 380рх панель навигации скрывается, появляется бургер-иконка +2   
   - при нажатии на бургер-иконку плавно появляется адаптивное меню +4
   - адаптивное меню соответствует цветовой схеме макета +4
   - при нажатии на крестик адаптивное меню плавно скрывается уезжая за экран +4
   - ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям +4 
   - при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, также скрытие меню происходит если сделать клик вне данного окна +4 
   `
);

// & for contacts

// ^ Начальное состояние
document.getElementById('canandaigua').style.display = 'none';
document.getElementById('new-york-city').style.display = 'none';
document.getElementById('yonkers').style.display = 'none';
document.getElementById('sherrill').style.display = 'none';
document.getElementById('city-list-open').style.display = 'none';

// ^ Скрыть все блоки
let resetVisibleAllBlocks = () => {
  document.getElementById('canandaigua').style.display = 'none';
  document.getElementById('new-york-city').style.display = 'none';
  document.getElementById('yonkers').style.display = 'none';
  document.getElementById('sherrill').style.display = 'none';
  document.getElementById('city-list-open').style.display = 'none';
};

let notVisibleBloc = item => {
  if (item == 'city-list-open') {
    //  resetVisibleAllBlocks();
    //  document.getElementById('city-list-open').style.display = 'none';
  }
};

let goTo = item => {
  //   if (item == 'about-us') {
  //     window.location.hash = 'about-us';
  //   }

  document.querySelector(item).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });

  window.scrollBy({
    top: 100,
    behavior: 'smooth',
  });
};

// ^ показать один блок
let visibleBlock = item => {
  if (item == 'canandaigua') {
    resetVisibleAllBlocks();
    document.getElementById('canandaigua').style.display = 'Flex';
  }
  if (item == 'new-york-city') {
    resetVisibleAllBlocks();
    document.getElementById('new-york-city').style.display = 'Flex';
  }
  if (item == 'yonkers') {
    resetVisibleAllBlocks();
    document.getElementById('yonkers').style.display = 'Flex';
  }
  if (item == 'sherrill') {
    resetVisibleAllBlocks();
    document.getElementById('sherrill').style.display = 'Flex';
  }
  if (item == 'city-list-open') {
    resetVisibleAllBlocks();
    document.getElementById('city-list-open').style.display = 'Flex';
  }
};
