"use client";
import { TProgressBarProps } from "../types";

export const ProgressBar = (props: TProgressBarProps) => {
  const { progres } = props;
  return (
    <div className="relative mx-auto h-16 rounded-full bg-gray-200 m-12 border-solid border-4 border-black overflow-hidden">
      <div
        className="h-full bg-green-400 rounded-e-full"
        style={{ width: `${progres}%` }}
      ></div>
      <span className="absolute inset-0 flex items-center justify-center font-semibold text-2xl">
        {`${Math.floor(progres)}%`}
      </span>
    </div>
  );
};
