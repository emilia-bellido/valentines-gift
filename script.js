let letterHolder = document.getElementById("letterContainer")


//targeting modal
const videoModal = document.getElementById('videoModal');

//where video in modal goes
const videoContainer = document.getElementById('videoContainer');


videoModal.addEventListener('show.bs.modal', function (event) {

    const button = event.relatedTarget;
    const videoSrc = button.getAttribute('data-video'); //gets what video

    // We use 'ratio ratio-16x9' to lock the horizontal shape
    videoContainer.innerHTML = `
        <div  class="ratio ratio-16x9">
            <iframe width="560" height="315"
                src="${videoSrc}?autoplay=1&mute=1" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        </div>
    `;
});



//when the modal is being hidden, it removes the video from it
videoModal.addEventListener('hide.bs.modal', function () {
    const videoContainer = document.getElementById('videoContainer');
    videoContainer.innerHTML = '';
});




/*88
const NUMBER_OF_HEARTS = 75;
const MAX_HEARTS_SIZE = 25;
const MAX_HEARTS_SPEED = 2;
const hearts =[];

const canvas = document.createElement('canvas');
canvas.style.position = 'absolute';
canvas.style.top = '0px';
canvas.style.pointerEvents = 'none';
canvas.width = canvas.innerWidth;
canvas.height = canvas.innerHeight;

document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');

const heartImage = new Image();
heartImage.src = 'images/heart.png';

const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

const createHeart = () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * MAX_HEARTS_SIZE + 10,
    speed: Math.random() * MAX_HEARTS_SPEED + 3,
    drift: Math.random() * 1 - 0.5, // Subtle side-to-side movement
    opacity: Math.random() * 0.5 + 0.5 // Some hearts are slightly faded
});

// Initialize hearts
for (let i = 0; i < NUMBER_OF_HEARTS; i++) {
    hearts.push(createHeart());
    // Randomize initial Y so they don't all fall in a single wave at the start
    hearts[i].y = Math.random() * canvas.height;
}

// 3. Animation Loop
const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    hearts.forEach(heart => {
        // Move heart down
        heart.y += heart.speed;
        heart.x += heart.drift;

        // Reset heart to top if it goes off screen
        if (heart.y > canvas.height) {
            heart.y = -heart.size;
            heart.x = Math.random() * canvas.width;
        }

        // Draw the image
        ctx.globalAlpha = heart.opacity;
        ctx.drawImage(heartImage, heart.x, heart.y, heart.size, heart.size);
    });

    requestAnimationFrame(animate);
};

// Start when image is loaded
heartImage.onload = () => {
    animate();
};
8****
 */

window.onload = function ()