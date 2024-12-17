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


document.addEventListener('DOMContentLoaded', function () {
    const photos = document.querySelectorAll('.photo img');

    photos.forEach(photo => {
        const img = photo;
        const width = img.naturalWidth;
        const height = img.naturalHeight;

        // Si l'image est plus haute que large, ajouter la classe "landscape"
        if (height > width) {
            img.parentElement.classList.add('landscape');
        }
    });
});
