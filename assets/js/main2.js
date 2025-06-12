document.addEventListener('DOMContentLoaded', () => {
    let current = 0;
    const imgs = document.querySelectorAll('.carousel-img');
    const total = imgs.length;

    function showImg(index) {
        imgs.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
    }

    showImg(current);

    setInterval(() => {
        current = (current + 1) % total;
        showImg(current);
    }, 4000);
});


function createHeart() {
    const container = document.querySelector('.hearts-container');
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 95 + '%'; // <-- ajuste aqui
    heart.style.animationDuration = (2 + Math.random() * 2) + 's';
    container.appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
}

setInterval(createHeart, 500);