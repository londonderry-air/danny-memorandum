import { atom } from "recoil";
import { Theme } from "../types";
import { THEMES } from "../utils/variables";

export const themeState = atom<Theme>({
  key: "themeColor",
  default: THEMES.light,
});
