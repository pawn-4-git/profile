export type BlogPost = {
    id: number;
    title: string;
    date: string;
    summary: string;
    thumbnail: string;
    url?: string;
};

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "Clineの日本語設定どこで設定している？ プロンプト？ Custom Instructions? Advanced Settings?",
        date: "2025-04-27",
        summary: "",
        thumbnail: "/img/20250427.jpeg",
        url: "https://qiita.com/ho-rai/items/499b8d473cd647d80277"
    },
    {
        id: 6,
        title: "Gemini Code Assist for GitHubを使いプルリクをギャル口調でレビューしてもらう!GoogleのAIコードレビュー試してみた!",
        date: "2025-04-24",
        summary: "",
        thumbnail: "/img/20250418174251.jpg",
        url: "https://qiita.com/ho-rai/items/499b8d473cd647d80277"
    },
    {
        id: 7,
        title: "4月までに読める！新年度のスタートに役立つビジネス書3選",
        date: "2025-03-18",
        summary: "4月までに読める！新年度のスタートに役立つビジネス書3選",
        thumbnail: "/img/20250313161505.png",
        url: "https://toranoana-lab.hatenablog.com/entry/2025/03/18/120000"
    },
    {
        id: 2,
        title: "テーブル構造をAIに質問！NotebookLMを活用したDB調査チャットボットの作り方",
        date: "2025-03-10",
        summary: "テーブル構造をAIに質問！NotebookLMを活用したDB調査チャットボットの作り方",
        thumbnail: "/img/20250310.jpeg",
        url: "https://qiita.com/ho-rai/items/71e87fcfccc45ccf43f4"
    },
    {
        id: 3,
        title: "Chrome 134の新機能！Dialog要素がより簡単に閉じられるようになる！",
        date: "2025-02-25",
        summary: "Chrome 134の新機能！Dialog要素がより簡単に閉じられるようになる！",
        thumbnail: "/img/20250225.jpeg",
        url: "https://qiita.com/ho-rai/items/04962e5614d905b52929"
    },
    {
        id: 4,
        title: "たった100円で10万リクエスト！超低コストAPIを作ってみた",
        date: "2025-01-31",
        summary: "たった100円で10万リクエスト！超低コストAPIを作ってみた",
        thumbnail: "/img/202501.jpeg",
        url: "https://qiita.com/ho-rai/items/657b24f536a69a44427e"
    }
];
