import { TItem } from "./types";

//Изначальные значения фруктов
export const GAME_ITEMS: TItem[] = [
  { id: "apple", number: 5 },
  { id: "banana", number: 5 },
  { id: "peach", number: 5 },
];

export const DEF_STATE_OF_PROGRESS = 0; // тут понятно, для теста можно менять

export const PROGRESS_ROLLBACK_TIME = 36; // можно указать время в секундах для отката одного %
