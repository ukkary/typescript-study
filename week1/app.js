"use strict";
exports.__esModule = true;
var readline_1 = require("readline");
var std = (0, readline_1.createInterface)({
    input: process.stdin,
    output: process.stdout
});
var question = "最初は、✊！ジャンケン......!?\n0: ✊, 1: ✌️、2: ✋\n";
var computerHandMap = {
    0: "✊",
    1: "✌️",
    2: "✋"
};
std.question(question, function (line) {
    var computerHand = Math.floor(Math.random() * 3);
    var playerHand = Number(line);
    console.log("-----------------");
    console.log("\u3042\u306A\u305F\u306E\u624B: ".concat(computerHandMap[playerHand]));
    console.log("\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u30FC\u306E\u624B: ".concat(computerHandMap[computerHand]));
    computerHand === playerHand && console.log("あいこ😅");
    (computerHand + 3 - playerHand) % 3 === 1 && console.log("勝ち😆！");
    (computerHand + 3 - playerHand) % 3 === 2 && console.log("負け😢");
    console.log("-----------------");
    std.close();
});
