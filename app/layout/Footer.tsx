'use client'
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";


export default function Footer() {
    const menuItems = [
        { normal: "Blog", hover: "ブログ", width: 75, url: "/blog" },
        { normal: "Books Read", hover: "積読/読んだ本", width: 125, url: "/book" }
    ];

    const [hoverIndex, setHoverIndex] = useState<number | null>(null);

    return (
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
            <a href="https://x.com/pawn_4_t">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="16" height="16" role="img" aria-labelledby="aas9eqi5owg3mvmue35ksxy426swgjw0" className="octicon"><title id="aas9eqi5owg3mvmue35ksxy426swgjw0">X</title><path fill="currentColor" d="M9.332 6.925 14.544 1h-1.235L8.783 6.145 5.17 1H1l5.466 7.78L1 14.993h1.235l4.78-5.433 3.816 5.433H15L9.332 6.925ZM7.64 8.848l-.554-.775L2.68 1.91h1.897l3.556 4.975.554.775 4.622 6.466h-1.897L7.64 8.848Z"></path></svg>
            </a>
            <a href="https://github.com/pawn-4-git" className="github-icon">
                <svg height="32" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="32" data-view-component="true" className="octicon octicon-mark-github v-align-middle">
                    <path d="M12 1C5.9225 1 1 5.9225 1 12C1 16.8675 4.14875 20.9787 8.52125 22.4362C9.07125 22.5325 9.2775 22.2025 9.2775 21.9137C9.2775 21.6525 9.26375 20.7862 9.26375 19.865C6.5 20.3737 5.785 19.1912 5.565 18.5725C5.44125 18.2562 4.905 17.28 4.4375 17.0187C4.0525 16.8125 3.5025 16.3037 4.42375 16.29C5.29 16.2762 5.90875 17.0875 6.115 17.4175C7.105 19.0812 8.68625 18.6137 9.31875 18.325C9.415 17.61 9.70375 17.1287 10.02 16.8537C7.5725 16.5787 5.015 15.63 5.015 11.4225C5.015 10.2262 5.44125 9.23625 6.1425 8.46625C6.0325 8.19125 5.6475 7.06375 6.2525 5.55125C6.2525 5.55125 7.17375 5.2625 9.2775 6.67875C10.1575 6.43125 11.0925 6.3075 12.0275 6.3075C12.9625 6.3075 13.8975 6.43125 14.7775 6.67875C16.8813 5.24875 17.8025 5.55125 17.8025 5.55125C18.4075 7.06375 18.0225 8.19125 17.9125 8.46625C18.6138 9.23625 19.04 10.2125 19.04 11.4225C19.04 15.6437 16.4688 16.5787 14.0213 16.8537C14.42 17.1975 14.7638 17.8575 14.7638 18.8887C14.7638 20.36 14.75 21.5425 14.75 21.9137C14.75 22.2025 14.9563 22.5462 15.5063 22.4362C19.8513 20.9787 23 16.8537 23 12C23 5.9225 18.0775 1 12 1Z"></path>
                </svg>
            </a>
            <a href="https://qiita.com/ho-rai">
                <Image
                    src="/qiita-icon.png"
                    alt="Qiita"
                    width={16}
                    height={16}
                />
            </a>
            <a href="https://speakerdeck.com/pawn_4_s"><Image src="/profile/mark-f4be6df1e05965cac9f98e664a6c35f5ffdd0207385d07464a9214d6cdf76082.svg" width={40} height={40} alt="eight" className="header-global_header_nav__logo"></Image></a>
            <a href="https://8card.net/virtual_cards/nGIwjbi0pBaYpg6Hkxowdw_39887963703"><Image src="/profile/7f1b4567b780f555.svg" width={40} height={40} alt="eight" className="header-global_header_nav__logo"></Image></a>
        </footer>
    );
}