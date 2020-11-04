import {postData} from '../services/requests';                                          // импортируем функцию отправки запроса из файла 

function form (formSelector, modalSelector, modalContentSelector, myMessage = 'none') { // функция для работы форм, сообщение об отправке будет добавляться в уже существующее модальное окно. Аргументы: formSelector - селектор формы, modalSelector - селектор модального окна, modalContentSelector - селектор контента модального окна, где будет появляться сообщение после отправки данных формы, myMessage - можно передать в функцию свое сообщение вместо стандартного, в данном случае используется для формы с подпиской                 

    const form = document.querySelector(formSelector),                                  // берем форму
          modal = document.querySelector(modalSelector),                                // берем модальное окно
          modalContent = document.querySelector(modalContentSelector);                  // берем контент модального окна

    const message = {                                                                   // объект с сообщениями пользователю
        loading: 'Loading...',
        success: 'Thanks! we will contact you soon',
        failure: 'Something went wrong...',
        myText: myMessage,
    };


    form.addEventListener('submit', (e) => {                                            // навешиваем на форму обработчик, срабатывающий при подтверждении формы
        e.preventDefault();                                                             // отменяем стандартное поведение браузера (перезагрузку страницы)

        const statusMessageText = document.createElement('div');                        // создаем новый элемент на странице для показа его пользователю в котором будет текст

        statusMessageText.textContent = message.loading;                                // добавили в новый div сообщение с текстом
        modalContent.append(statusMessageText);                                         // добавляем сообщение в модальное окно
        modal.classList.remove('fadeOut');                                              // удаляем класс анимации закрытия, если окно уже открывалось
        modal.style.display = 'block';                                                  // показываем модальное окно
        modal.classList.add('animated', 'fadeIn');                                      // добавляем анимацию появления
        document.body.style.overflow = 'hidden';                                        // запрет прокрутки страницы во время того как открыто модальное окно
        
        const formData = new FormData(form);                                            // создаем переменную по классу FormData. Этот класс собирает данные, которые надо отправить. У инпутов в формах должен обязательно быть атрибут "name", без него работать не будет

        postData('./server.php', formData)                                              // отправялем запрос
        .then(data => {                                                                 // получаем ответ с сервера, data - это данные с сервера
            statusMessageText.remove();                                                 // удаляем текстовое сообщение об отправке
            if (myMessage == 'none') {                                                  // если третий аргумент со своим сообщением не передан, то используем стандартное сообщение
                showThanksModal(message.success);                                       // вызываем функцию, которая выводит сообщение что все успешно
                console.log(data);                                                      // выводим в консоль, то что отправили
            } else {                                                                    // если передан, то выводим его
                showThanksModal(message.myText);                                        // вызываем функцию, которая выводит свое сообщение
                console.log(data);                                                      // выводим в консоль, то что отправили
            }
            
        })
        .catch(data => {  
            console.log(data);                                                          // при какой-то ошибке пишем что будет происходить
            statusMessageText.remove();                                                 // удаляем текстовое сообщение об отправке
            showThanksModal(message.failure);                                           // сообщение пользователю об ошибке
        })
        .finally(() => {                                                                // блок в котором выполняются действия независимо от того что было выполнено, then или catch
            form.reset();                                                               // сбросить данные в форме
        });
    
        function showThanksModal(message) {                                             // функция для создания сообщения полсе отправки формы
            const thanksModal = document.createElement('div');                          // создаем элемент
                
            thanksModal.textContent = message;                                          // добавляем сообщение в div
            modalContent.append(thanksModal);                                           // добавляем этот div в модальное окно
        }
    });     
};

export default form;