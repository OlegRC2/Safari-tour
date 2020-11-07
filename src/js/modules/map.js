import {fadeIn, fadeOut} from './animationVariables';                                                   // импорт анимации

function map(targetSelector, modalSelector, modalCloseSelector) {                                       // функция появления модального окна по клике по карте. Аргументы: targetSelector - "цель", по которой кликают; modalSelector - модальное окно; modalCloseSelector - кнопка закрытия модального окна

    const mapTarget = document.querySelectorAll(targetSelector),                                        // берем все "цели"
          mapModal = document.querySelectorAll(modalSelector),                                          // берем все модальные окна
          modalClose = document.querySelectorAll(modalCloseSelector);                                   // берем все кнопки закрытия

    modalClose.forEach(modal => {                                                                       // перебираем псевдомассив с кнопками закрытия
        modal.addEventListener('click', () => {                                                         // навешиваем на каждую обработчик клика
            mapModal.forEach(item => {                                                                  // перебираем псевдомассив с окнами
                item.style.animation = fadeOut;                                                         // добавляем каждому окну анимацию закрытия
                setTimeout(() => {                                                                      
                    item.style.display = 'none';                                                        // скрываем все окна
                }, 500);                                                                                // через 0,5 сек
            });
        });
    });

    mapTarget.forEach(item => {                                                                         // перебираем все "цели"
        item.addEventListener('click', (e) => {                                                         // навешиваем на каждую обработчик клика
            const target = e.target;                                                                    // инициализируем цель события
            
            mapModal.forEach(modal => {                                                                 // перебираем псевдомассив с окнами
                modal.style.display = 'none';                                                           // скрываем все открытые окна
                if (target && target.className.slice(19) === modal.className.slice(17)) {               // если цель события существует и цель события содержит в конце имени класса (с 19 символа до конца, строгая привязка к "правильному" названию классса) ту же страну что и страна в конце класса у окна
                    modal.style.animation = fadeIn;                                                     // добавляем анимацию появления
                    modal.style.display = 'block';                                                      // показываем это окно
                }
            });
        });
    });
}

export default map;