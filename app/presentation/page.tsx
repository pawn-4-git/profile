import Image from "next/image";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import PresentationEvent from "./PresentationEvent";
import { GoogleAnalytics } from "../GoogleAnalytics"; // GoogleAnalyticsをインポート
import { Suspense } from 'react'; // Suspenseをインポート

export default function Page() {
  const sampleEvents = [
    {
      title: "イベントA",
      addedDate: "2025-04-01",
      presentationDate: "2025-04-10",
      url: "url"
    },
    {
      title: "イベントB",
      addedDate: "2025-04-15",
      presentationDate: "2025-04-20",
      url: "url"
    },
  ];

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-start justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <PresentationEvent />
        {/* GoogleAnalyticsをSuspenseでラップ */}
        <Suspense fallback={<div>Loading analytics...</div>}>
          <GoogleAnalytics />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}