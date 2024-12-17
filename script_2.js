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
