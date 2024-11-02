"use client";
import { useDroppable } from "@dnd-kit/core";

export const DroppableZone = () => {
  const { setNodeRef } = useDroppable({
    id: "droppable",
  });
  return (
    <div
      ref={setNodeRef}
      className="mx-auto ellipse bg-sky-300 border-solid border-4 border-slate-400"
    />
  );
};
