function sizeMapSection (cloud, firstSection, headerSelector) {                                                 // функция для изменения высоты главной секции для корректного отображения следующей секции map. Аргументы cloud - блок с картинками облаков, firstSection - вся главная секция, headerSelector - хедер

    function result () {

        let cloudBlock = document.querySelector(cloud),                                                         // получаем блок с картинками облаков
            promoSection = document.querySelector(firstSection),                                                // получаем главную секцию
            header = document.querySelector(headerSelector);                                                    // получаем хедер

        let cloudTop = +window.getComputedStyle(cloudBlock).getPropertyValue("top").replace(/\D/g, ''),         // получаем расстояние на которое смещены облака сверху от хедера, вырезаем "px" и переводим в число
            cloudHeight = +window.getComputedStyle(cloudBlock).getPropertyValue("height").replace('px', ''),    // получаем высоту блока с облаками, вырезаем "px" и переводим в число
            headerHeight = +window.getComputedStyle(header).getPropertyValue("height").replace(/\D/g, '');      // получаем высоту хедера, вырезаем "px" и переводим в число
    
        promoSection.style.height = cloudTop + cloudHeight + headerHeight + 'px';                               // складываем все значения и получаем новую высоту главной секции
    }

    result();

    window.addEventListener('resize', () => {                                                                   // срабатывает при изменении ширины экрана
        result();
    });
    
}

export default sizeMapSection; 