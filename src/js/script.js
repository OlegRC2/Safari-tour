import sizeMapSection from './modules/sizeMapSection';
import form from './modules/form';
import modal from './modules/modal';
import map from './modules/map';
import tabs from './modules/tabs';
import gallary from './modules/gallary';
import slider from './modules/slider';
import fullVersionForMobile from './modules/fullVersionForMobile';


window.addEventListener('DOMContentLoaded', () => {
    
    sizeMapSection('.promo__cloud', '.promo', '.header');                                       // функция для изменения высоты главной секции для корректного отображения следующей секции "map"
    form('.main-form', '.modal', '.modal__content');                                            // функция для работы главной формы
    form('.contact-form', '.modal', '.modal__content');                                         // функция для работы формы для контакта 
    form('.subscription-form', '.modal', '.modal__content', 'Thank you for subscribing!');      // функция для работы формы подписки
    modal('.modal', '.modal__close', '.modal__content');                                        // функция для закрытия модального окна, которое открывается после формы
    map('.map__target', '.map__modal', '.map__modal-close');                                    // функция для показа окон на карте
    tabs('.promo__tabs-btn', '.promo__tabs-content', '.promo__tabs-btns', 'tabs-btn-active');   // функция для работы табов
    gallary('.promo', '.preview');                                                              // функция для работы мини-галереи на одной из вкадок табов
    slider('.promo__slider-plane', '.promo__slider-next', '.promo__slider-prev', '.promo__slider-item');    // функция для работы слайдера
    fullVersionForMobile();
});