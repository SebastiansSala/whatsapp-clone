import React from "react";
import HomeHeader from "./homeHeader";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="container mx-auto flex h-screen pt-24 w-full relative">
      <section className="sticky top-10 w-96 border-r border-gray-700">
        <HomeHeader />
        <nav></nav>
      </section>
      <section className="flex-1 bg-slate-500">{children}</section>
    </main>
  );
}
