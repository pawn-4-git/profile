export type Book = {
    title: string;
    author: string;
    imageUrl?: string;
    url: string;
    date?: string;
};

export const unreadBooks: Book[] = [
    {
        title: "NLP心理学に基づく 結果を生み出す リーダーのための話し方のルール",
        author: "松橋　良紀",
        imageUrl: "https://shop.r10s.jp/book/cabinet/4324/9784046074324_1_14.jpg?fitin=560:400&composite-to=*,*|560:400",
        url: "https://hb.afl.rakuten.co.jp/ichiba/1606396a.af218406.1606396b.fc9e49ea/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbook%2F18161874%2F&link_type=hybrid_url&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJoeWJyaWRfdXJsIiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MSwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
        date: "2025-05-03"
    }
];
