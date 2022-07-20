import { createInterface } from "readline";

const std = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = "最初は、✊！ジャンケン......!?\n0: ✊, 1: ✌️、2: ✋\n"
const computerHandMap = {
  0: "✊", 
  1: "✌️",
  2: "✋",
} as any

std.question(question, (line) => {
  const computerHand = Math.floor(Math.random() * 3);
  const playerHand = Number(line);
  console.log("-----------------------");
  console.log(`あなたの手: ${computerHandMap[playerHand]}`);
  console.log(`コンピューターの手: ${computerHandMap[computerHand]}`);
  computerHand === playerHand && console.log("あいこ😅");
  (computerHand + 3 - playerHand) % 3 === 1 && console.log("勝ち😆！");
  (computerHand + 3 - playerHand) % 3 === 2 && console.log("負け😢");
  console.log("-----------------------");
  std.close();
});
