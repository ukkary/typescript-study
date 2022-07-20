import { createInterface } from "readline";

const std = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = "最初は、グー！ジャンケン......!?\n0: グー, 1: チョキ、2: パー\n"
const computerHandMap = {
  0: "グー", 
  1: "チョキ",
  2: "パー",
} as any

std.question(question, (line) => {
  const computerHand = Math.floor(Math.random() * 3);
  const playerHand = Number(line);
  console.log(`コンピューターの手: ${computerHandMap[computerHand]}`);
  computerHand === playerHand && console.log("アイコ");
  (computerHand + 3 - playerHand) % 3 === 1 && console.log("勝ち！");
  (computerHand + 3 - playerHand) % 3 === 2 && console.log("負け！");
  std.close();
});
