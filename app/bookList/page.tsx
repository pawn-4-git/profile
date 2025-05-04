'use client'
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { books as readBooks, Book } from "../book/readBook";
import { unreadBooks } from "../book/unReadBook";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const status = searchParams.get("status");

  let displayBooks: Book[] = [];
  let heading = "全ての本";

  if (status === "read") {
    displayBooks = readBooks;
    heading = "既読本一覧";
  } else if (status === "unread") {
    displayBooks = unreadBooks;
    heading = "積読本一覧";
  } else {
    displayBooks = [...readBooks, ...unreadBooks];
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-start justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full max-w-full">
        <div className="flex flex-col gap-8 w-full max-w-full justify-center sm:justify-start">
          <div>
            <h2 className="text-lg font-semibold mb-4 text-center sm:text-left">{heading}</h2>
            <div style={{ display: "flex", gap: "1.5rem", flexDirection: "row", overflowX: "auto" }}>
              {displayBooks.map((book: Book, idx: number) => (
                <a
                  key={idx}
                  href={book.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    border: "1px solid #e0e0e0",
                    borderRadius: "8px",
                    padding: "1rem",
                    background: "#fafafa",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    minHeight: "320px",
                    width: "33.33%",
                    textDecoration: "none",
                    color: "inherit"
                  }}
                >
                  {book.imageUrl ? (
                    <img
                      src={book.imageUrl}
                      alt={book.title}
                      style={{ width: "120px", height: "180px", objectFit: "cover", marginBottom: "1rem", borderRadius: "4px" }}
                    />
                  ) : (
                    <div
                      style={{
                        width: "120px",
                        height: "180px",
                        background: "#ddd",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#888",
                        marginBottom: "1rem",
                        borderRadius: "4px"
                      }}
                    >
                      No Image
                    </div>
                  )}
                  <div style={{
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                    marginBottom: "0.5rem",
                    textAlign: "center",
                    maxWidth: "120px",
                    wordWrap: "break-word",
                    overflowWrap: "break-word",
                    wordBreak: "break-word",
                    whiteSpace: "normal",
                    color: "black"
                  }}>
                    {book.title}
                  </div>
                  <div style={{ color: "#555", fontSize: "0.95rem", textAlign: "center" }}>{book.author}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
