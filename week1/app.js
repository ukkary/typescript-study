"use strict";
exports.__esModule = true;
var readline_1 = require("readline");
var std = (0, readline_1.createInterface)({
    input: process.stdin,
    output: process.stdout
});
var resultEmoji = Object.freeze({
    draw: "😅",
    win: "😆🎉🎉🎉❗️❗️❗️",
    lose: "😢"
});
var handEmoji = Object.freeze({
    rock: "✊",
    scissors: "✌️",
    paper: "✋"
});
var question = "\u6700\u521D\u306F\u3001".concat(handEmoji.rock, "\uFF01\u30B8\u30E3\u30F3\u30B1\u30F3......!?\n0: ").concat(handEmoji.rock, " 1: ").concat(handEmoji.scissors, "\u30012: ").concat(handEmoji.paper, "\n");
var handMap = [handEmoji.rock, handEmoji.scissors, handEmoji.paper];
std.question(question, function (line) {
    var computerHand = Math.floor(Math.random() * 3);
    var playerHand = parseInt(line, 10);
    console.log("--------------------------");
    console.log("\u3042\u306A\u305F\u306E\u624B: ".concat(handMap[playerHand]));
    console.log("\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u30FC\u306E\u624B: ".concat(handMap[computerHand]));
    computerHand === playerHand && console.log("\u7D50\u679C: \u3042\u3044\u3053".concat(resultEmoji.draw));
    (computerHand - playerHand + 3) % 3 === 1 && console.log("\u7D50\u679C: \u52DD\u3061".concat(resultEmoji.win));
    (computerHand - playerHand + 3) % 3 === 2 && console.log("\u7D50\u679C: \u8CA0\u3051".concat(resultEmoji.lose));
    console.log("--------------------------");
    std.close();
});
