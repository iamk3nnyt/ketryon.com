"use client";

import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

interface Item {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface Props {
  items: Item[];
  multiple?: boolean;
  defaultOpenIds?: string[];
  className?: string;
}

export const Accordion: React.FC<Props> = ({
  items,
  multiple = false,
  defaultOpenIds = [],
  className,
}) => {
  const [openIds, setOpenIds] = useState<string[]>(defaultOpenIds);
  const [heights, setHeights] = useState<Record<string, number>>({});
  const contentRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const newHeights: Record<string, number> = {};
    Object.entries(contentRefs.current).forEach(([id, element]) => {
      if (element) {
        newHeights[id] = element.scrollHeight;
      }
    });
    setHeights(newHeights);
  }, []);

  const toggle = (id: string) => {
    setOpenIds((prev) =>
      multiple
        ? prev.includes(id)
          ? prev.filter((item) => item !== id)
          : [...prev, id]
        : prev[0] === id
          ? []
          : [id],
    );
  };

  return (
    <div
      className={cn("w-full divide-y divide-black/10 rounded-md", className)}
    >
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div key={item.id}>
            <button
              onClick={() => toggle(item.id)}
              className="flex w-full items-center justify-between rounded-md py-4 text-left font-medium"
              aria-expanded={isOpen}
              aria-controls={`accordion-panel-${item.id}`}
            >
              {item.title}
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  isOpen && "rotate-180",
                )}
              />
            </button>
            <div
              ref={(el) => {
                contentRefs.current[item.id] = el;
              }}
              id={`accordion-panel-${item.id}`}
              className={cn(
                "overflow-hidden transition-all duration-200 ease-in-out",
                isOpen ? "opacity-100" : "opacity-0",
              )}
              style={{
                height: isOpen ? `${heights[item.id] || 0}px` : "0px",
              }}
            >
              <div className="pb-4 text-gray-600">{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
