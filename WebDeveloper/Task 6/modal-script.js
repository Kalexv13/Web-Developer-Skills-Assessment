document.addEventListener('DOMContentLoaded', () => {

    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modalBackdrop = document.getElementById('modalBackdrop');

    openModalBtn.addEventListener('click', () => {
        modalBackdrop.style.display = 'flex';
    });

    closeModalBtn.addEventListener('click', () => {
        modalBackdrop.style.display = 'none';
    });
   
    modalBackdrop.addEventListener('click', (event) => {
        if (event.target === modalBackdrop) {
            modalBackdrop.style.display = 'none';
        }
    });

});
