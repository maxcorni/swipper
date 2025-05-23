const previousBtn = document.querySelector('.previous');
const nextBtn = document.querySelector('.next');
const swipperItems = document.querySelectorAll('.swipper-item');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;

function setActiveSlide(index) {
    // Supprimer la classe 'active' de l'élément précédent
    swipperItems[currentIndex].classList.remove('active');
    dots[currentIndex].classList.remove('dot-active');
    
    // Ajouter la classe 'active' au nouvel élément
    swipperItems[index].classList.add('active');
    dots[index].classList.add('dot-active');
    
    currentIndex = index;
}

// Fonction pour afficher l'image suivante
nextBtn.addEventListener('click', () => {
    let nextIndex = (currentIndex + 1) % swipperItems.length;
    setActiveSlide(nextIndex);
});

// Fonction pour afficher l'image précédente
previousBtn.addEventListener('click', () => {
    let prevIndex = (currentIndex - 1 + swipperItems.length) % swipperItems.length;
    setActiveSlide(prevIndex);
});

// Fonction pour changer l'image en cliquant sur un point
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        setActiveSlide(index);
    });
});
