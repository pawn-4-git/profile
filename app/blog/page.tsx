"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { blogPosts, BlogPost } from "./blogInfo";

export default function Page() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  // Calculate the posts to display on the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-start justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex flex-col gap-[32px] row-start-2 items-start sm:items-start w-full max-w-3xl">
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50 text-black"
          >
            Previous
          </button>
          <span className="flex items-center text-white">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50 text-black"
          >
            Next
          </button>
        </div>
        {currentPosts.map((post: BlogPost) => (
          <article key={post.id} className="border-b border-gray-300 pb-4 w-full flex gap-4 items-start">
            <a href={post.url}><Image
              src={post.thumbnail}
              alt={`${post.title} thumbnail`}
              width={120}
              height={80}
              className="rounded"
            /></a>
            <div className="w-6/10">
              <a href={post.url}><h2 className="text-2xl font-semibold">{post.title}</h2></a>
              <time className="text-sm text-gray-500">{post.date}</time>
              <p className="mt-2 text-gray-700">{post.summary}</p>
            </div>
          </article>
        ))}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50 text-black"
          >
            Previous
          </button>
          <span className="flex items-center text-white">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50 text-black"
          >
            Next
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
