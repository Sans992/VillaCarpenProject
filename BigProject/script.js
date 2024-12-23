// "good luck pentru mine si tot cei care o sa citeasca acest cod" WJT 
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById('modal');
    const openModalButtons = document.querySelectorAll('.openModal'); // Selectează toate elementele cu clasa openModal
    const closeModal = document.querySelector('.close');

    // Asigură că modalul este ascuns la încărcare
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

const togglePanelButton = document.getElementById('togglePanel');
const closePanelButton = document.getElementById('closePanel');
const sidePanel = document.getElementById('sidePanel');
const overlay = document.getElementById('overlay');

togglePanelButton.addEventListener('click', () => {
  sidePanel.classList.add('active');
  overlay.classList.add('active');
});

closePanelButton.addEventListener('click', () => {
  sidePanel.classList.remove('active');
  overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
  sidePanel.classList.remove('active');
  overlay.classList.remove('active');
});


document.addEventListener("DOMContentLoaded", () => {
    const galleryOverlay = document.querySelector('.gallery-overlay');
    const expandedImage = document.querySelector('.gallery-overlay img');
    const imageText = document.querySelector('#imageText');
    const closeButton = document.querySelector('.gallery-overlay .closebtn');

    // Funcția pentru a afișa imaginea extinsă
    document.querySelectorAll('.gallery-column img').forEach(img => {
        img.addEventListener('click', () => {
            expandedImage.src = img.src;
            imageText.textContent = img.alt;
            galleryOverlay.style.display = 'flex';
        });
    });

    // Funcția pentru a închide imaginea extinsă
    closeButton.addEventListener('click', () => {
        galleryOverlay.style.display = 'none';
    });

    // Închiderea imaginii extinse când se face clic în afara imaginii
    galleryOverlay.addEventListener('click', (event) => {
        if (event.target === galleryOverlay) {
            galleryOverlay.style.display = 'none';
        }
    });
});


  const form = document.querySelector("form"); // Selectează formularul
  const toast = document.querySelector(".toast");
  const closeIcon = document.querySelector(".toast .close");
  const progress = document.querySelector(".progress");

  let timer1, timer2;

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Previne comportamentul implicit al formularului

    // Afișează toast-ul
    toast.classList.add("active");
    progress.classList.add("active");

    // Resetează temporizatorul pentru a ascunde toast-ul
    timer1 = setTimeout(() => {
      toast.classList.remove("active");
    }, 5000);

    timer2 = setTimeout(() => {
      progress.classList.remove("active");
    }, 5300);

    // După afișarea toast-ului, poți trimite datele folosind `fetch` sau AJAX
    // Exemplu: simulare trimitere date
    setTimeout(() => {
      console.log("Formular trimis cu succes!");
    }, 1000);
  });

  closeIcon.addEventListener("click", () => {
    toast.classList.remove("active");

    setTimeout(() => {
      progress.classList.remove("active");
    }, 300);

    clearTimeout(timer1);
    clearTimeout(timer2);
  });

