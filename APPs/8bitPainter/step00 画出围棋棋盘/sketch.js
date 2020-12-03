function setup() {
    createCanvas(360, 360);
}

function draw() {
    for(let vertical = 0; vertical < 20; vertical++){
        for(let horizontal = 0; horizontal < 20; horizontal++){
            square(20 * horizontal, 20 * vertical, 18);
        }
    }
}