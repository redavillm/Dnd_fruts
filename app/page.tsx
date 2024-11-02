"use client";
import { useEffect, useState } from "react";
import { ProgressBar, Item, DroppableZone } from "./components";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { progresBarCounter } from "./scripts/progresBarCounter";
import { TItem } from "./types";
import { isDropZoneCorrect } from "./scripts/isDropZoneCorrect";
import {
  GAME_ITEMS,
  DEF_STATE_OF_PROGRESS,
  PROGRESS_ROLLBACK_TIME,
} from "./constants";

export default function Home() {
  const [progres, setProgres] = useState<number>(DEF_STATE_OF_PROGRESS);
  const [gameItems, setGameItems] = useState<TItem[]>(GAME_ITEMS);

  //Таймер обратного отсчет прогресса
  useEffect(() => {
    if (progres <= 0) return;

    const rollBackTime = PROGRESS_ROLLBACK_TIME * 1000;

    const timer = setInterval(() => {
      setProgres((prev) => --prev); // Уменьшаем прогресс бар
    }, rollBackTime);

    return () => clearInterval(timer);
  }, [progres]);

  //Обработчик закидывания предмета в область
  const handlerDragEnd = (event: DragEndEvent) => {
    const { active, delta } = event;
    const { x, y } = delta;

    //Проверка области
    if (!isDropZoneCorrect(x, y, active.id as string)) return;

    //Понижение счетчика фрукта при условии что прогресс бар увеличиваеться
    if (
      Math.floor(progres) !== progresBarCounter(active.id as string, progres)
    ) {
      setGameItems((prevItems) =>
        prevItems.map((item) =>
          item.id === active.id && item.number > 0
            ? { ...item, number: item.number - 1 }
            : item
        )
      );
    }

    //Увеличение прогресс-бара
    setProgres((prev) => progresBarCounter(active.id as string, prev));
  };

  return (
    <div className="w-96 mx-auto mt-20">
      <DndContext onDragEnd={handlerDragEnd}>
        <DroppableZone />
        <div className="flex space-x-4 mt-4 justify-around text-center">
          {gameItems.map((item) => (
            <Item key={item.id} id={item.id} number={item.number} />
          ))}
        </div>
      </DndContext>
      <ProgressBar progres={progres} />
    </div>
  );
}
