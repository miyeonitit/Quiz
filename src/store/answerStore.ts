import { atom } from "recoil";

const correctAnswer = atom<number>({
  key: "correctAnswer",
  default: 0,
});

const incorrectAnswer = atom<number>({
  key: "incorrectAnswer",
  default: 0,
});

export { correctAnswer, incorrectAnswer };
