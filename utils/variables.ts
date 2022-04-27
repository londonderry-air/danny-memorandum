import { Theme } from "../types";

export const API_ORIGIN = process.env.NEXT_PUBLIC_API_ORIGIN;
export const THEMES = {
  light: <Theme>{
    background: "#FFFFFF",
    text: "#1C1C21",
    border: "#1C1C21",
    highlight: "#DEFF4A",
    grayText: "#1C1C2199",
    cell: "#1C1C21",
    cellText: "#FFFFFF",
    cellGrayText: "#a8a8b6",
  },
  dark: <Theme>{
    background: "#1C1C21",
    text: "#C9C9C9",
    border: "#C9C9C9",
    highlight: "#DEFF4A",
    grayText: "#aeb0bd99",
    cell: "#FFFFFF",
    cellText: "#1C1C21",
    cellGrayText: "#a8a8b6",
  },
};

export const GRID_COLUMN_NUMBER = 12;
export const GRID = {
  column:
    typeof window !== "undefined" ? window.innerWidth / GRID_COLUMN_NUMBER : 0,
};
