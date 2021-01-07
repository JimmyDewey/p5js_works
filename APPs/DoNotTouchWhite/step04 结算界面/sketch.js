// 单元格边长
let cellWidth = 90;

// 设定当前需要几行
let nhang = 6;

// 设定当前需要几列
let nlie = 4;

// 记录当前画布上单元格的颜色
let colors = [];

// Y轴偏移量
let offsetY = 12;

// 游戏总时长
let totalTime = 1 * 60 * 1000;

// 游戏开始时间
let startTime = 0;

// 当前得分
let score = 0;

// 保存当前游戏状态
let status = 'play';

function setup() {
  createCanvas(360, 540 + offsetY);
  for (let i = 0; i < 24; i++) {
    colors[i] = '#FFFFFF';
  }
  startTime = millis();
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
  if (status == 'play') {
    progressBar();
    printScore();
    for (let vertical = 0; vertical < nhang; vertical++) {
      for (let horizontal = 0; horizontal < nlie; horizontal++) {
        push();
        fill(colors[vertical * nlie + horizontal]);
        square(cellWidth * horizontal, cellWidth * vertical + offsetY, cellWidth);
        pop();
      }
    }
  } else if (status == 'result') {
    text('完了', 180, 150)
    text('你的总分是：' + score, 180, 180);
    rect(180, 220, 80, 60);
    text('再来一局', 200, 250);
  }
}

function mouseClicked() {
  if (status == 'play') {
    if (mouseY > cellWidth * (nhang - 1)) {
      let _ver = floor((mouseY - offsetY) / cellWidth);
      let _hor = floor(mouseX / cellWidth);
      let index = _ver * nlie + _hor;
      if (colors[index] == '#000000') {
        colors.unshift('#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF');
        let r = random(0, 4);
        colors[floor(r)] = '#000000';
        score += 5;
      } else {
        gameover();
      }
    }
  } else if (status == 'result') {
    if (mouseY > 180) {
      status = 'play';
      score = 0;
      startTime = millis();
    }
  }
}

// 更新进度条
function progressBar() {
  push();
  fill(255);
  rect(0, 0, cellWidth * 3, 12);
  fill(0);
  let pro = cellWidth * 3 * (1 - (millis() - startTime) / totalTime);
  if (pro < 0) {
    gameover();
  }
  rect(1 , 1, pro, 10);
  pop();
}

// 更新分数栏
function printScore() {
  text(score, cellWidth * 3 + 45, 10);
}

// 游戏结束
function gameover() {
  status = 'result';
}