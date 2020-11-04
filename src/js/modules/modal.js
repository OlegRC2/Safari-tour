function modal(modalSelector, modalBtn, content) {                                                  // функция закрытия модального окна по кнопке или клике вне окна. Аргументы modalSelector - модальное окно, modalBtn - кнопка закрытия, блок с контентом окна, куда добавляется сообщение

    const modal = document.querySelector(modalSelector),                                            // берем модальное окно
          modalButton = document.querySelector(modalBtn),                                           // берем кнопку закрытия
          modalContent = document.querySelector(content);                                           // берем контент модального окна
    
    function closeModal() {                                                                         // функция для закрытия модального окна
        
        modal.classList.remove('fadeIn');
        modal.classList.add('fadeOut');                                                             // добавляем анимацию исчезания
        document.body.style.overflow = '';                                                          // установка дефолтного значения на параметр прокрутки страницы
        
        setTimeout(() => {
            modal.style.display = 'none';                                                           // скрываем окно
            modalContent.lastChild.remove();                                                        // удаляем добавленное сообщение
        }, 500);                                                                                    // через 0,5 сек
    } 
     
    modalButton.addEventListener('click', () => closeModal());                                      // навешиваем обработчик клика на кнопку закрытия

    modal.addEventListener('click', (event) => {                                                    // закрытие окна при клике вне окна
        if (event.target === modal) {                                                               // если место клика входит в родительский элемент окна, но не само окно (у него другой класс)
            closeModal();                                                                           
        }
    });
}

export default modal;