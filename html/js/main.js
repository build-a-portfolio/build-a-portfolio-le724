const track = document.getElementById("marqueeTrack");

// 元の内容を複製
track.innerHTML += track.innerHTML;

let position = 0;
const speed = 0.5;

function animate() {
    position -= speed;

    if (Math.abs(position) >= track.scrollWidth / 2) {
        position = 0;
    }

    track.style.transform = `translateX(${position}px)`;

    requestAnimationFrame(animate);
}

animate();