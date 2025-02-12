const animatedText = document.getElementById('animated-text');
const container = document.querySelector('.animation-container');

let position = -animatedText.offsetWidth; // Start from the left edge (off-screen)
const speed = 4; // Adjust speed of the animation

function animate() {
    position += speed; // Move right
    if (position > container.offsetWidth) {
        position = -animatedText.offsetWidth; // Reset to the left edge
    }
    animatedText.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(animate); // Call animate again for the next frame
}

// Start the animation
animate();