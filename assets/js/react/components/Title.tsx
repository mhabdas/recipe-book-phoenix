import React from "react";
interface TitleInterface {
  title: string;
  subtitle: string;
}

export function Title({ title, subtitle }: TitleInterface) {
  return (
    <div className="m-4">
      <h1 className="text-3xl font-bold mt-8">{title}</h1>
      <h2 className="text-2xl font-semibold mb-4">{subtitle}</h2>
    </div>
  );
}
