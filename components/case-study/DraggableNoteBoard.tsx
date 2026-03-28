"use client";

import { useState } from "react";

type Note = {
  label: string;
  title: string;
  tone?: "yellow" | "green";
  rotation?: number;
};

type DraggableNoteBoardProps = {
  notes: Note[];
  className?: string;
};

type Point = {
  x: number;
  y: number;
};

export function DraggableNoteBoard({
  notes,
  className
}: DraggableNoteBoardProps) {
  const [offsets, setOffsets] = useState<Point[]>(() => notes.map(() => ({ x: 0, y: 0 })));
  const [dragging, setDragging] = useState<number | null>(null);

  return (
    <div className={`draggable-note-board ${className ?? ""}`.trim()}>
      {notes.map((note, index) => (
        <DraggableNote
          key={`${note.label}-${note.title}`}
          note={note}
          index={index}
          offset={offsets[index] ?? { x: 0, y: 0 }}
          dragging={dragging === index}
          onDragStart={() => setDragging(index)}
          onDragEnd={() => setDragging(null)}
          onMove={(next) => {
            setOffsets((current) =>
              current.map((point, pointIndex) => (pointIndex === index ? next : point))
            );
          }}
        />
      ))}
    </div>
  );
}

type DraggableNoteProps = {
  note: Note;
  index: number;
  offset: Point;
  dragging: boolean;
  onDragStart: () => void;
  onDragEnd: () => void;
  onMove: (next: Point) => void;
};

function DraggableNote({
  note,
  offset,
  dragging,
  onDragStart,
  onDragEnd,
  onMove
}: DraggableNoteProps) {
  return (
    <article
      className={`draggable-note draggable-note--${note.tone ?? "yellow"} ${dragging ? "is-dragging" : ""}`.trim()}
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px) rotate(${note.rotation ?? 0}deg)`
      }}
      onPointerDown={(event) => {
        const startX = event.clientX;
        const startY = event.clientY;
        const initial = offset;

        onDragStart();
        event.currentTarget.setPointerCapture(event.pointerId);

        const handleMove = (moveEvent: PointerEvent) => {
          onMove({
            x: initial.x + moveEvent.clientX - startX,
            y: initial.y + moveEvent.clientY - startY
          });
        };

        const handleUp = () => {
          onDragEnd();
          window.removeEventListener("pointermove", handleMove);
          window.removeEventListener("pointerup", handleUp);
        };

        window.addEventListener("pointermove", handleMove);
        window.addEventListener("pointerup", handleUp);
      }}
    >
      <div className="draggable-note__pin" />
      <span className="draggable-note__label">{note.label}</span>
      <h3 className="draggable-note__title">{note.title}</h3>
    </article>
  );
}
