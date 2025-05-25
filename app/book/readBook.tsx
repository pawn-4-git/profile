export type Book = {
    title: string;
    author: string;
    imageUrl?: string;
    url: string;
    date?: string;
};

export const books: Book[] = [

    {
        title: "紛争でしたら八田まで（１）",
        author: "田素弘",
        imageUrl: "https://shop.r10s.jp/rakutenkobo-ebooks/cabinet/0593/2000008290593.jpg",
        url: "https://hb.afl.rakuten.co.jp/ichiba/158ccf60.679a5af3.158ccf61.f00e8fba/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Frakutenkobo-ebooks%2F9f227b11b62e34149bab33ab978ab696%2F&link_type=hybrid_url&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJoeWJyaWRfdXJsIiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MSwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
        date: "2025-05-18"
    },
    {
        title: "人が壊れるマネジメント プロジェクトを始める前に知っておきたいアンチパターン50",
        author: "橋本 将功",
        imageUrl: "https://shop.r10s.jp/book/cabinet/5051/9784802615051_1_6.jpg?fitin=560:400&composite-to=*,*|560:400",
        url: "https://hb.afl.rakuten.co.jp/ichiba/1606396a.af218406.1606396b.fc9e49ea/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbook%2F18132592%2F&link_type=hybrid_url&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJoeWJyaWRfdXJsIiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MSwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
        date: "2025-04-12"
    }
];
