import { atom } from "recoil";

import { answerNoteDataType } from "../type/answerNoteDataType";

const answerNote: answerNoteDataType[] = [
  {
    id: "",
    question: "",
    answer_list: ["", "", "", ""],
    correct_answer: "",
    selected_answer: "",
  },
];

const answerNoteData = atom<answerNoteDataType[]>({
  key: "answerNoteData",
  default: answerNote,
});

export { answerNoteData };
