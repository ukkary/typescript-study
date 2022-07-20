import { createInterface } from "readline";

const std = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const resultEmoji = Object.freeze({
  draw: "😅",
  win: "😆🎉🎉🎉❗️❗️❗️",
  lose: "😢"
});

const handEmoji = Object.freeze({
  rock: "✊",
  scissors: "✌️",
  paper: "✋"
});

const question = `最初は、${handEmoji.rock}！ジャンケン......!?\n0: ${handEmoji.rock} 1: ${handEmoji.scissors}、2: ${handEmoji.paper}\n`
const handMap = [handEmoji.rock, handEmoji.scissors, handEmoji.paper]

std.question(question, (line) => {
  const computerHand = Math.floor(Math.random() * 3);
  const playerHand = parseInt(line, 10);
  console.log("--------------------------");
  console.log(`あなたの手: ${handMap[playerHand]}`);
  console.log(`コンピューターの手: ${handMap[computerHand]}`);
  computerHand === playerHand && console.log(`結果: あいこ${resultEmoji.draw}`);
  (computerHand - playerHand + 3) % 3 === 1 && console.log(`結果: 勝ち${resultEmoji.win}`);
  (computerHand - playerHand + 3) % 3 === 2 && console.log(`結果: 負け${resultEmoji.lose}`);
  console.log("--------------------------");
  std.close();
});
