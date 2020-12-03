let colors = [];
function setup() {
    createCanvas(360, 360);
    for(let i = 0; i < 400; i++) {
        colors[i] = '#FFFFFF';
    }
}

function draw() {
    for(let vertical = 0; vertical < 20; vertical++){
        for(let horizontal = 0; horizontal < 20; horizontal++){
            fill(colors[vertical * 20 + horizontal]);
            square(20 * horizontal, 20 * vertical, 18);
        }
    }
}

function mouseClicked() {
    let _ver = floor(mouseY / 20);
    let _hor = floor(mouseX / 20);
    let index = _ver * 20 + _hor;
    colors[index] = colors[index] == '#FFFFFF' ? '#000000' : '#FFFFFF';
}