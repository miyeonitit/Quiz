import { atom } from "recoil";

const countTimer = atom<string>({
  key: "countTimer",
  default: "00:00",
});

export { countTimer };
