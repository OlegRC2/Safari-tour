import {fadeIn, fadeOut} from './animationVariables';                           // импорт анимации

function gallary(sectionWithGallry, previewSelector) {                          // функция для показа картинок из блока с галереей на весь экран. Аргументы: sectionWithGallry - секция в которой находится галерея (в конец этой секции будет добавляться новый элемент), previewSelector - все превьюшки изображений

    const gallaryWindow = document.querySelector(sectionWithGallry),            // получаем главный родительский элемент блока с галереей
          preview = document.querySelectorAll(previewSelector),                 // получаем все превью всех изображений
          scroll = calcScroll();                                                // вычисляем ширину полосы прокрутки
          
    function openImg(src, alt) {                                                // функция открытия картинки   

        const parentElement = document.createElement('div'),                    // создаем элемент div
              imgElement = document.createElement('img'),                       // создаем элемент img
              animationElement = document.createElement('div');                 // создаем элемент div, для анимации

        parentElement.classList.add('new-div-with-img');                        // задали класс новому элементу

        imgElement.src = src;                                                   // назначаем нужный адрес изображения
        imgElement.alt = alt;                                                   // назначаем нужный альт

        parentElement.style.cssText = `
            display: block;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 110;
            background-color: rgba(0, 0, 0, 0.8);
        `;                                                                      // задали стили для темной подложки

        animationElement.style.cssText = `
            display: block;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        `;                                                                      // задали стили для пустого элемента

        imgElement.style.cssText = `
            display: block;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 100vh;
        `;                                                                      // задали стили для картинки

        parentElement.append(animationElement);                                 // добавили элемент для анимации в div с подложкой
        animationElement.append(imgElement);                                    // добавили картинку в элемент для анимации
        gallaryWindow.append(parentElement);                                    // добавили в html созданный елемент 
        parentElement.style.animation = fadeIn;                                 // добавляем анимацию появления
        animationElement.classList.add('animateGallary');                       // добавляем класс элементу, чтобы потом его найти по этому классу
        animationElement.style.animation = fadeIn;                              // добавляем анимацию появления
        document.body.style.overflow = 'hidden';                                // запрет прокрутки страницы во время того как открыто изображение
        document.body.style.marginRight = `${scroll}px`;                        // добавляем сдвиг всей страницы на ширину полосы прокрутки, чтобы страница не дергалась при открытии модального окна
    }

    function closeImg() {                                                       // функция закрытия изображения
        const newDiv =  gallaryWindow.lastElementChild,                         // берем весь созданный блок элементов
              animationElement = document.querySelector('.animateGallary'),     // отдельно берем элемент для анимации
              parentElement = document.querySelector('.new-div-with-img');      // берем подложку (для анимации)

        animationElement.style.animation = fadeOut;                             // добавляем анимацию закрытия
        parentElement.style.animation = fadeOut;                                // добавляем анимацию закрытия
        setTimeout(() => newDiv.remove(), 500);                                 // удаляем созданный блок через 500 мс после анимации  
        document.body.style.overflow = '';                                      // установка дефолтного значения на параметр прокрутки страницы
        document.body.style.marginRight = `0px`;                                // убираем сдвиг всей страницы на ширину полосы прокрутки, чтобы страница не дергалась при закрытии модального окна
        
    }

    preview.forEach(item => {                                                   // навешиваем обработчик клика на все превью
        item.addEventListener('click', (event) => {
            event.preventDefault();                                             // отменяем стандартное поведение браузера
            const target = event.target;                                        // элемент в который кликнули
            if (target == item) {                                               // если кликнутый элемент равен перебираемому
                const src = item.parentElement.href,                            // вытаскиваем из него путь к изображению
                      alt = item.alt;                                           // и альт
                openImg(src, alt);                                              // открываем это изображение

                const newDiv = document.querySelector('.animateGallary');       // берем созданный элемент для анимации
                newDiv.addEventListener('click', (event) => {                   // вешаем обработчик клика
                    if (event.target == newDiv) {                               // если кликнули на этот элемент
                        closeImg();                                             // закрываем изображение
                    }
                });
            }
        });
    });
}

function calcScroll() {                                         // функция для того чтобы страница не прыгала, когда открывается окно. Прыгает потому что убирается полоса прокрутки сбоку страницы
    let div = document.createElement('div');                    // создаем элемент

    div.style.width = '50px';                                   // задаем ширину блоку
    div.style.height = '50px';                                  // задаем высоту блоку
    div.style.overflowY = 'scroll';                             // задаем блоку скролл по Y
    div.style.visibility = 'hidden';                            // элемент остается на странице, но становится полностью прозрачным

    document.body.appendChild(div);                             // добавляем элемент в html документ
    let scrollWidth = div.offsetWidth - div.clientWidth;        // из общей ширины блока вычитаем ширину контента с паддингами и получаем ширину прокрутки
    div.remove();                                               // удаляем элемент со страницы

    return scrollWidth;                                         // возвращаем ширину полосы прокрутки
}

export default gallary;
export {calcScroll};