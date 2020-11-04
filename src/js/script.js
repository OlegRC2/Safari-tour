import sizeMapSection from './modules/sizeMapSection';
import form from './modules/form';
import modal from './modules/modal';
import map from './modules/map';



window.addEventListener('DOMContentLoaded', () => {
    
    sizeMapSection('.promo__cloud', '.promo', '.header');                                       // функция для изменения высоты главной секции для корректного отображения следующей секции "map"
    form('.main-form', '.modal', '.modal__content');                                            // функция для работы главной формы
    form('.contact-form', '.modal', '.modal__content');                                         // функция для работы формы для контакта 
    form('.subscription-form', '.modal', '.modal__content', 'Thank you for subscribing!');      // функция для работы формы подписки
    modal('.modal', '.modal__close', '.modal__content');                                        // функция для закрытия модального окна, которое открывается после формы
    map('.map__target', '.map__modal');
});