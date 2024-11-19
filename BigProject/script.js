document.addEventListener("DOMContentLoaded", () => {
    const hiddenElements = document.querySelectorAll('.hidden');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated'); // Adaugă clasa pentru animație
                observer.unobserve(entry.target); // Dezactivează observarea pentru element
            }
        });
    }, {
        threshold: 0.1 // Elementul trebuie să fie 10% vizibil pentru a declanșa animația
    });

    hiddenElements.forEach(el => observer.observe(el));
});
