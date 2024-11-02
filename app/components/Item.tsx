"use client";

import { TItem } from "@/app/types";
import { useDraggable } from "@dnd-kit/core";

export const Item = (props: TItem) => {
  const { id, number } = props;
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  //Стль для анимации перетаскивания
  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
  };

  return (
    <div>
      {number > 0 ? (
        <img
          ref={setNodeRef}
          style={style}
          {...attributes}
          {...listeners}
          src={`/${id}.svg`}
          alt={id}
          className="h-16 w-16"
        />
      ) : (
        <div className="h-16 w-16" />
      )}

      <p className="px-2 py-1 bg-stone-900 rounded-md text-white">{number}</p>
    </div>
  );
};
