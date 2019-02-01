
const parallaxContainer = document.querySelector('.parallax'),
    layers = Array.from(parallaxContainer.children);

const moveLayers = e => {
    const initialX = (window.innerWidth / 2) - e.pageX;
    const initialY = (window.innerHeight / 2) - e.pageY;

    layers.forEach((layer, i) => {
        const divider = i / 100;
        const posX = initialX * divider;
        const posY = initialY * divider;
        const bottomPos = (window.innerHeight / 2) * divider;
        const image = layer.firstElementChild;

        image.style.bottom = `-${bottomPos}px`;
        layer.style.transform = `translate(${posX}px, ${posY}px)`;
    });
};

window.addEventListener('mousemove', moveLayers,  {passive: true});