document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById('modal');
    const openModal = document.getElementById('openModal');
    const closeModal = document.querySelector('.close');

    openModal.onclick = () => {
        modal.style.display = 'flex'; // Afișează modalul doar când este apăsat butonul
    };

    closeModal.onclick = () => {
        modal.style.display = 'none'; // Ascunde modalul când este apăsat butonul de închidere
    };

    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none'; // Ascunde modalul la click în afara conținutului
        }
    };
});
