// 单元格边长
let cellWidth = 90;

// 设定当前需要几行
let nhang = 6;

// 设定当前需要几列
let nlie = 4;

function setup() {
    createCanvas(360, 540);
}

function draw() {
    for(let vertical = 0; vertical < nhang; vertical++){
        for(let horizontal = 0; horizontal < nlie; horizontal++){
            square(cellWidth * horizontal, cellWidth * vertical, cellWidth);
        }
    }
}