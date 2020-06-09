const P = 10;  // サンプル数

// 原関数 3sin(x) + 7cos(3x) 定義
function func_y(x) {
  return 3.0 * Math.sin(x) + 7.0 * Math.cos(3.0 * x);
}

let f = new Array(P);
// データサンプリング
for (let m = 0; m < P; m++) f[m] = func_y(((2.0 * Math.PI) / P) * m);

// DFT係数計算
console.log("次数\t実数部\t虚数部\t絶対値");
for (let n = 0; n < P; n++) {
  let ar = 0.0;
  let ai = 0.0;
  let x;
  for (let m = 0; m < P; m++) {
    x = ((2.0 * Math.PI) / P) * m * n;
    ar += f[m] * Math.cos(-x);
    ai += f[m] * Math.sin(-x);
  }
  ar /= P;
  ai /= P;
  x = Math.sqrt(4.0 * ar * ar + 4.0 * ai * ai);
  console.log(
    n,
    Math.round(ar * 100) / 100,
    Math.round(ai * 100) / 100,
    Math.round(x * 100) / 100
  );
}
