function togleMenu() {
    var menu = document.querySelector(".menue-links");
    var icon = document.querySelector(".hamburger-icon");
    var overlay = document.querySelector(".menu-overlay");

    menu.classList.toggle("open");
    icon.classList.toggle("open");
    overlay.classList.toggle("active");
}

document.querySelectorAll('.circle-progress').forEach(function(el) {
    var percent = el.getAttribute('data-percent');
    var radius = 50;
    var circumference = 2 * Math.PI * radius;
    var offset = circumference * (1 - percent / 100);

    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '110');
    svg.setAttribute('height', '110');

    var bgCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    bgCircle.setAttribute('cx', '55');
    bgCircle.setAttribute('cy', '55');
    bgCircle.setAttribute('r', radius);
    bgCircle.setAttribute('stroke', '#181c28');
    bgCircle.setAttribute('stroke-width', '10');
    bgCircle.setAttribute('fill', 'none');

    var fgCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    fgCircle.setAttribute('cx', '55');
    fgCircle.setAttribute('cy', '55');
    fgCircle.setAttribute('r', radius);
    fgCircle.setAttribute('stroke', 'url(#blueGradient)');
    fgCircle.setAttribute('stroke-width', '10');
    fgCircle.setAttribute('fill', 'none');
    fgCircle.setAttribute('stroke-dasharray', circumference);
    fgCircle.setAttribute('stroke-dashoffset', offset);
    fgCircle.setAttribute('stroke-linecap', 'round');
    fgCircle.setAttribute('transform', 'rotate(-90 55 55)');

    var defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    var linearGradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
    linearGradient.setAttribute('id', 'blueGradient');
    linearGradient.setAttribute('x1', '0%');
    linearGradient.setAttribute('y1', '0%');
    linearGradient.setAttribute('x2', '100%');
    linearGradient.setAttribute('y2', '0%');
    var stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop1.setAttribute('offset', '0%');
    stop1.setAttribute('stop-color', '#00bfff');
    var stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop2.setAttribute('offset', '100%');
    stop2.setAttribute('stop-color', '#0090c7');
    linearGradient.appendChild(stop1);
    linearGradient.appendChild(stop2);
    defs.appendChild(linearGradient);

    svg.appendChild(defs);
    svg.appendChild(bgCircle);
    svg.appendChild(fgCircle);

    el.prepend(svg);
});