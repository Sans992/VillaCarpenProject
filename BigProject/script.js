// "good luck pentru mine si tot cei care o sa citeasca acest cod" WJT 
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById('modal');
    const openModalButtons = document.querySelectorAll('.openModal'); // Selectează toate elementele cu clasa openModal
    const closeModal = document.querySelector('.close');

    // Asigură-te că modalul este ascuns la încărcare
    modal.style.display = 'none';

    // Adaugă un eveniment de clic pentru fiecare buton Rezervare
    openModalButtons.forEach(button => {
        button.onclick = () => {
            modal.style.display = 'flex'; // Setează display: flex pentru afișare
        };
    });

    // Închide modalul când se apasă butonul de închidere
    closeModal.onclick = () => {
        modal.style.display = 'none'; // Ascunde modalul
    };

    // Închide modalul când se face click în afara conținutului
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
});
