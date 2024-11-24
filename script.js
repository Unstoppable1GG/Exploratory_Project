document.addEventListener('DOMContentLoaded', function() {
    const galleryImages = document.querySelectorAll('.pics img');
    const body = document.body;

    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            const popup = document.createElement('div');
            popup.className = 'popup-overlay';
            
            const popupContent = document.createElement('div');
            popupContent.className = 'popup-content';
            
            const fullImg = document.createElement('img');
            fullImg.src = this.src;
            
            popupContent.appendChild(fullImg);
            popup.appendChild(popupContent);
            body.appendChild(popup);
            
            setTimeout(() => popup.classList.add('active'), 10);

            popup.addEventListener('click', function() {
                popup.classList.remove('active');
                setTimeout(() => popup.remove(), 300);
            });
        });
    });
});