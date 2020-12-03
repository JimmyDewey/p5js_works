//记录画布颜色
let colors = [];
//设置可选用的调色盘颜色
let palette = ["#d32e53", "#efd073", "#7fcff4", "#458a44", "#74d5da", "#4d1d1f", "#415460", "#925482", "#000000", "#ffffff"];
//记录画笔颜色初始化为黑色
let currentColor = "#000000";

function setup() {
    //建立一个396*396的画布
    createCanvas(360, 396);

    //把画布颜色数组初始化为白色
    for (let i = 0; i < 400; i++) {
        colors[i] = "#ffffff";
    }
    // noStroke();
}

function draw() {
    //画上方块并着色
    for (let vertical = 0; vertical < 20; vertical++) {
        for (let horizontal = 0; horizontal < 20; horizontal++) {
            fill(colors[vertical * 20 + horizontal]);
            square(horizontal * 18, vertical * 18, 18);
        }
    }
    //绘制调色盘并着色
    for (let i = 0; i < 10; i++) {
        fill(palette[i]);
        square(36 * i, 360, 36);
    }
}

function mouseClicked() {
    //记录当前点击方块的横纵排序
    let _ver, _hor;

    if (mouseX > 360 || mouseY > 396) { //判断是否超出了画布范围
        return false;
    } else if (mouseY > 360) { //是否点击了调色盘
        _hor = floor(mouseX / 36);
        currentColor = palette[_hor];
    } else { //是否点击了绘图区
        _hor = floor(mouseY / 18);
        _ver = floor(mouseX / 18);
        colors[_hor * 20 + _ver] = currentColor;
    }
}

function touchMoved() {
    //记录当前点击方块的横纵排序
    let _ver, _hor;

    _hor = floor(mouseY / 18);
    _ver = floor(mouseX / 18);
    colors[_hor * 20 + _ver] = currentColor;
}