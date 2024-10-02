document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const closeModal = document.getElementById('close-modal');
    const movieClip = document.getElementById('movieClip');
    const videoSource = document.getElementById('videoSource');
    const movieLinks = document.querySelectorAll('.carousel--item a');

    movieLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const videoFile = link.getAttribute('data-video');
            videoSource.src = `videos/${videoFile}`;
            movieClip.load();
            modal.style.display = 'block';
            movieClip.play();
        });
    });

    closeModal.addEventListener('click', () => {
        closeVideoModal();
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeVideoModal();
        }
    });

    function closeVideoModal() {
        modal.style.display = 'none';
        movieClip.pause();
        movieClip.currentTime = 0;
    }
});
