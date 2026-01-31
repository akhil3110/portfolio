"use client";

import React, { useState } from "react";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "../ui/collapsible";
import { ChevronsDownUp, ChevronsUpDown } from "lucide-react";

export default function JobItem({ job, index }: { job: any; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      key={index}
      className="group gap-4 sm:gap-8 py-2 border-b border-border/50 hover:border-border transition-colors duration-500"
    >
      <div className="lg:col-span-8 space-y-3">
        <div>
          <h3 className="text-lg sm:text-4xl font-medium">{job.role}</h3>
          <div className="text-muted-foreground font-medium leading-tight">
            {job.company}
          </div>
          <div className="flex flex-wrap items-center gap-2 mt-4">
            {job.tech.map((tech: string) => (
              <span
                key={tech}
                className="p-1 cursor-pointer text-xs text-muted-foreground rounded-lg bg-accent/45 backdrop-blur-lg border border-dashed border-border group-hover:border-muted-foreground/50 transition-colors duration-500 whitespace-nowrap"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-3">
          <div className="mt-2">
            <ul className="text-muted-foreground font-medium text-sm leading-relaxed list-disc list-inside space-y-2 wrap-break-word whitespace-normal">
              {job.description.map((point: string, idx: number) => (
                <li key={idx} className="whitespace-normal">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="lg:col-span-3 self-start flex flex-wrap justify-start lg:justify-end gap-1" />
    </div>
  );
}
