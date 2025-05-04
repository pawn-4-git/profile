'use client'
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import BookList from "./BookList";
import UnreadBookList from "./UnreadBookList";

import { useState } from "react";

export default function Page() {

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-start justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full max-w-full">
        <div className="flex flex-col gap-8 w-full max-w-full justify-center sm:justify-start">
          <div>
            <a href="/bookList?status=read"><h2 className="text-lg font-semibold mb-4 text-center sm:text-left">既読本</h2></a>
            <BookList />
          </div>
          <div>
            <a href="/bookList?status=unread"><h2 className="text-lg font-semibold mb-4 text-center sm:text-left">未読本</h2></a>
            <UnreadBookList />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
