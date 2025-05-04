import React from "react";
import { Book, unreadBooks } from "./unReadBook";

const UnreadBookList: React.FC = () => {
    return (
        <div style={{ display: "flex", gap: "1.5rem", flexDirection: "row", overflowX: "auto" }}>
            {unreadBooks.slice(0, 3).map((book, idx) => (
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
    );
};

export default UnreadBookList;
