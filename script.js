document.addEventListener('DOMContentLoaded', () => {
    const loaderContainer = document.querySelector('.loader-container');

    // Simulate loading time
    setTimeout(() => {
        loaderContainer.style.opacity = '0';
        loaderContainer.style.pointerEvents = 'none';
        // You can redirect to another page or show content here
        // window.location.href = 'your_next_page.html';
    }, 3000); // Adjust the time as needed
});
