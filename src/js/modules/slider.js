import {fadeInBottom, planeAnimation} from './animationVariables';                                      // импорт анимации

function slider(planeSelector, nextSelector, prevSelector, slideSelector) {

    const plane = document.querySelector(planeSelector),                                                // берем самолет (для приминения к нему анимации)
          next = document.querySelector(nextSelector),                                                  // берем все кнопку "вперед"
          prev = document.querySelector(prevSelector),                                                  // берем все кнопку "назад"
          slides = document.querySelectorAll(slideSelector);                                            // берем все слайды

    let slideIndex = 1;                                                                                 // переменная отображающая текущий слайд

    function showSlides(n) {                                                                            // функция показа слайдов, n-slideIndex - слайд, который показывается первым
        if (n > slides.length) {                                                                        // если n выходит больше кол-ва слайдов
            slideIndex = 1;                                                                             // сбрасываем slideIndex
        }

        if (n < 1) {                                                                                    // если долистали в обратную сторону
            slideIndex = slides.length;                                                                 // ставим slideIndex в значение последнего слайда 
        }

        slides.forEach(item => {                                                                        // перебираем все слайды
            item.classList.add('hide');                                                                 // скрываем все слайды
        });

        slides[slideIndex - 1].classList.remove('hide');                                                // удалили класс скрытия с нужного слайда
        slides[slideIndex - 1].classList.add('active');                                                 // показываем нужный слайд
        slides[slideIndex - 1].style.animation = fadeInBottom;                                          // добавляем анимацию нужному слайду
    }

    showSlides(slideIndex);                                                                             // запускаем функцию для показа первого слайда

    function plusSlides(n) {                                                                            // функция переключения слайдов
        showSlides(slideIndex += n);                                                                    // присваиваем со сложением переменной slideIndex n (slideIndex = slideIndex + n) и вызываем с этим значением функцию
    }

    prev.addEventListener('click', () => {                                                              // навешиваем обработчик клика на кнопку назад
        plusSlides(-1);                                                                                 // когда нажимаем назад, то вычитаем из slideIndex 1
        plane.style.animation = planeAnimation;                                                         // добавляем анимацию самолету
        setTimeout(() => {                                                                                      
            plane.style.animation = 'none';                                                             // убираем анимацию с самолета
        }, 1000);                                                                                       // через 1 сек
    });

    next.addEventListener('click', () => {                                                              // навешиваем обработчик клика на кнопку вперед
        plusSlides(1);                                                                                  // когда нажимаем вперед, то прибавляем к slideIndex 1
        plane.style.animation = planeAnimation;                                                         // добавляем анимацию самолету
        setTimeout(() => {                                                                      
            plane.style.animation = 'none';                                                             // убираем анимацию с самолета
        }, 1000);                                                                                       // через 1 сек
    });
}

export default slider;