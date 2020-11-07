import {fadeIn, fadeOut} from './animationVariables';                   // импорт анимации

function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {

    const tabs = document.querySelectorAll(tabsSelector),               // получаем кнопки-табы
          tabsContent = document.querySelectorAll(tabsContentSelector), // получаем контент в самих табах
          tabsParent = document.querySelector(tabsParentSelector);      // получаем родителя, в котором ссылки на табы

    function hideTabContent() {                                         // функция скрывания всех табов
        tabsContent.forEach(item => {
            item.classList.remove('active');                            // в классе activ задается display: block
            item.style.animation = fadeOut;                             // добавляем анимацию закрытия                
            item.classList.add('hide');                                 // в классе hide задается display: none
        });

        tabs.forEach(item => {                                          // убираем класс активности со всех кнопок-табов
            item.classList.remove(activeClass);
        });
    }

    function showTabContent(i = 0) {                                    // функция показа одного элемента. Задаем i=0 по дефолту, чтобы сначала был активен первый таб
        tabsContent[i].classList.remove('hide');
        tabsContent[i].classList.add('active');
        tabsContent[i].style.animation = fadeIn;                        // добавляем анимацию показа
        tabs[i].classList.add(activeClass);
    }

    hideTabContent();                                                   // скрыли все табы
    showTabContent();                                                   // показали дефолтное значение

    tabsParent.addEventListener('click', (event) => {                   // вешаем обработчик клика
        const target = event.target;                                    // элемент в который кликнули

        if (target && target.classList.contains(tabsSelector.slice(1))) { // смотрим что кликнули в нужный элемент. Т.к. tabsSelector с точкой, то нужно ее вырезать
            tabs.forEach((item, i) => {                                 // перебираем все табы 
                if (target == item) {                                   // если таб, на который кликнули совпадает с перебираемым
                    hideTabContent();                                   // скрываем все табы и
                    showTabContent(i);                                  // показываем тот, который сейчас в переборе
                }
            });
        }

        if (target && target.tagName == 'SPAN') {                       // если кликнули на тег span, который внутри
            tabs.forEach((item, i) => {                                 
                if (target.parentNode == item) {                        // если родитель спана совпадает с перебираемым                     
                    hideTabContent();                                   // скрываем все табы и
                    showTabContent(i);                                  // показываем тот, который сейчас в переборе
                }
            });
        }
    });
}

export default tabs;