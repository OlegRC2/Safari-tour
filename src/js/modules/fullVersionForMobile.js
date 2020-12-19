function fullVersionForMobile () {

    function result (defaultWidth, defaultScale) {

        let view = document.getElementsByName('viewport');

        view.forEach(elem => {
            elem.setAttribute('content', `width=${defaultWidth}, initial-scale=${defaultScale}`);
        });     
    }

    let clientWidth = document.documentElement.clientWidth;

    if (clientWidth < 992) {
        let scale = clientWidth / 992 - 0.05
        result(992, +scale.toFixed(2))
    } else {
        result("device-width", "1.0")
    }
}

export default fullVersionForMobile; 