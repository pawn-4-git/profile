export type Book = {
    title: string;
    author: string;
    imageUrl?: string;
    url: string;
    date?: string;
    review?: string;
};

export const books: Book[] = [
    {
        title: "一流のマネジャー945人をAI分析してわかった　できるリーダーの基本",
        author: "越川 慎司",
        imageUrl: "https://shop.r10s.jp/book/cabinet/2245/9784296002245_1_30.jpg",
        url: "https://hb.afl.rakuten.co.jp/ichiba/1606396a.af218406.1606396b.fc9e49ea/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbook%2F18275672%2F&link_type=hybrid_url&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJoeWJyaWRfdXJsIiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MSwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
        date: "2025-09-15",
        review: "普段の行動に対する振り返りとして読んでみるのが良い本でした"
    },
    {
        title: "9割の企業がはまってしまう 新規事業開発の落とし穴",
        author: "羽野　仁彦",
        imageUrl: "https://shop.r10s.jp/book/cabinet/8976/9784344948976_1_3.jpg",
        url: "https://hb.afl.rakuten.co.jp/ichiba/1606396a.af218406.1606396b.fc9e49ea/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbook%2F18280266%2F&link_type=hybrid_url&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJoeWJyaWRfdXJsIiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MSwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
        date: "2025-07-21",
        review: "新しい機能や事業を考えるときのヒントになる書籍でした"
    },
    {
        title: "チームが「まとまるリーダー」と「バラバラのリーダー」の習慣",
        author: "林健太郎",
        imageUrl: "https://shop.r10s.jp/rakutenkobo-ebooks/cabinet/9233/2000017789233.jpg",
        url: "https://hb.afl.rakuten.co.jp/ichiba/158ccf60.679a5af3.158ccf61.f00e8fba/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Frakutenkobo-ebooks%2Fd2b5d8b59f6b39ba9ba225bfcc725a76%2F&link_type=hybrid_url&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJoeWJyaWRfdXJsIiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MSwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
        date: "2025-06-08",
        review: "よく言われている無意識にリーダーがしてしまっている習慣がまとめられている書籍でした。数ヶ月に一度読んで振り返りをするのが良いと思いました"
    },
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
