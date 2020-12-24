// 单元格边长
let cellWidth = 90;

// 设定当前需要几行
let nhang = 6;

// 设定当前需要几列
let nlie = 4;

// 记录当前画布上单元格的颜色
let colors = [];

function setup() {
    createCanvas(360, 540);
    for(let i = 0; i < 24; i++) {
        colors[i] = '#FFFFFF';
    }

    // 完成nhang次循环
    for (let i = 0, k = 0; i < nhang; i++) {
        // 针对每行获取一个随机数，并把以它为下标的颜色设置为黑色
        let r = random(k, k + nlie);
        colors[floor(r)] = '#000000';
        // 增加k，使其取值范围移动到下一行
        k += nlie;
    }
}

function draw() {
    background(255);
    for(let vertical = 0; vertical < nhang; vertical++){
        for(let horizontal = 0; horizontal < nlie; horizontal++){
            fill(colors[vertical * nlie + horizontal]);
            square(cellWidth * horizontal, cellWidth * vertical, cellWidth);
        }
    }
}

function mouseClicked() {
    if (mouseY > cellWidth * (nhang - 1)) {
        let _ver = floor(mouseY / cellWidth);
        let _hor = floor(mouseX / cellWidth);
        let index = _ver * nlie + _hor;
        if(colors[index] == '#000000') {
            colors.unshift('#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF');
            let r = random(0, 4);
            colors[floor(r)] = '#000000';
        } else {
            alert('OVER!');
        }
    }
}