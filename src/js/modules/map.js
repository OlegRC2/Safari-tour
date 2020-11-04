function map(targetSelector, modalSelector) {

    const mapTarget = document.querySelectorAll(targetSelector),
          mapModal = document.querySelectorAll(modalSelector);

    // mapModal.forEach(modal => {
    //     modal.classList.add('animated');
    // });

    mapTarget.forEach(item => {
        item.addEventListener('click', (e) => {
            const target = e.target;
            
            mapModal.forEach(modal => {
                if (target && target.className.slice(19) === modal.className.slice(17)) {
                    modal.style.animation = 'slide-in-fwd-center 1.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both';
                    modal.style.display = 'block';
                    // modal.style.cssText = `
                    //     animation: slide-in-fwd-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
                    // `;   
    
                }
            });
        });
    });

}

export default map;