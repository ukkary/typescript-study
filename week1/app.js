"use strict";
exports.__esModule = true;
var readline_1 = require("readline");
var std = (0, readline_1.createInterface)({
    input: process.stdin,
    output: process.stdout
});
// 0: "グー",
// 1: "チョキ", 
// 2: "パー",
// 3: "グー",
// 4: "チョキ"
// 5: "パー"
// 0: グー
// 1: チョキ
// 2: パー
var question = "最初は、グー！ジャンケン......!?\n0: グー, 1: チョキ、2: パー\n";
var computerHandMap = {
    0: "グー",
    1: "チョキ",
    2: "パー"
};
std.question(question, function (line) {
    var computerHand = Math.floor(Math.random() * 3);
    var playerHand = Number(line);
    console.log("\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u30FC\u306E\u624B: ".concat(computerHandMap[computerHand]));
    computerHand === playerHand && console.log("アイコ");
    Math.abs(computerHand + 3 - playerHand) % 3 === 1 && console.log("勝ち！");
    Math.abs(computerHand + 3 - playerHand) % 3 === 2 && console.log("負け！");
    // (playerHand === computerHand || playerHand + 3 === computerHand) && console.log("アイコ！");
    // (playerHand + 1 === computerHand || playerHand + 4 === computerHand) && console.log("勝ち！");
    // (playerHand + 2 === computerHand || playerHand + 5 === computerHand) && console.log("負け！");
    // console.log(Math.atan(computerHand / playerHand))
    std.close();
});
// p | c | r | a
// 0 - 1 = -1 -> 1 // win
// 1 - 2 = -1 -> 1 // win
// 2 - 0 = 2 -> 2 // win
// 0 - 2 = -2 -> 2 // lose
// 1 - 0 = 1 -> 1 // lose
// 2 - 1 = 1 -> 1 // lose
