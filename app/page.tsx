'use client'
import Image from "next/image";
import { useState } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import LatestUpdates from "./top/LatestUpdates";

export default function Home() {
  const [blog, setBlog] = useState("Blog");
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-start justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <LatestUpdates />
        </div>
      </main>
      <Footer />
    </div>
  );
}
