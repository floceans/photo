// Récupération des éléments
const photos = document.querySelectorAll('.photo img');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalClose = document.getElementById('modalClose');

// Ajout de l'événement au clic sur chaque image
photos.forEach(photo => {
    photo.addEventListener('click', () => {
        const fullImageUrl = photo.getAttribute('data-full');
        modalImage.src = fullImageUrl;
        modal.style.display = 'flex';
    });
});

// Fermeture de la modale
modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Fermeture en cliquant en dehors de l'image
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});


