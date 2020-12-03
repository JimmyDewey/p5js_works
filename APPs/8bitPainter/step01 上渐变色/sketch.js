function setup() {
    createCanvas(512, 512);
    noStroke();
}

function draw() {
    for(let vertical = 0; vertical < 256; vertical++){
        for(let horizontal = 0; horizontal < 256; horizontal++){
            fill(color(vertical, horizontal, 255));
            square(2 * horizontal, 2 * vertical, 2);
        }
    }
}