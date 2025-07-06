var timeout;

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


let xscale = 1;
let yscale = 1;

function cursorMover() {
    window.addEventListener("mousemove", function (detail) {
        document.querySelector("#minicircle").style.transform = `translate(${detail.clientX}px, ${detail.clientY}px) scale(${xscale}, ${yscale})`;
    });
}
cursorMover();

