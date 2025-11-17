'use client'
import Image from "next/image";
import { useState } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import LatestUpdates from "./top/LatestUpdates";
import profileInfo from "./profileInfo";
import { GoogleAnalytics } from "./GoogleAnalytics"; // GoogleAnalyticsをインポート
import { Suspense } from 'react'; // Suspenseをインポート

export default function Home() {
  const [blog, setBlog] = useState("Blog");
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-start justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <section className="mt-8 p-4 border rounded-md bg-black text-white w-full max-w-md">
          <h2 className="text-xl font-semibold mb-2">Profile</h2>
          <p><strong>Name:</strong> {profileInfo.name}</p>
          <p>{profileInfo.introduction}</p>
          <div className="mt-2">
            <p><strong>Contact:</strong></p>
            <ul className="list-disc list-inside">
              <li>GitHub: <a href={profileInfo.contact.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{profileInfo.contact.github}</a></li>
              <li>Twitter: <a href={profileInfo.contact.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{profileInfo.contact.twitter}</a></li>
              <li>SpeakerDeck: <a href={profileInfo.contact.SpeakerDeck} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{profileInfo.contact.SpeakerDeck}</a></li>
            </ul>
          </div>
        </section>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <LatestUpdates />
        </div>
      </main>
      {/* GoogleAnalyticsをSuspenseでラップ */}
      <Suspense fallback={<div>Loading analytics...</div>}>
        <GoogleAnalytics />
      </Suspense>
      <Footer />
    </div>
  );
}