import type { Metadata } from 'next';
import { Book } from './readBook'; // Book型をインポート

export const generateBookMetadata = (
    books: Book[],
    title: string,
    description: string
): Metadata => {
    const defaultImageUrl = '/next.svg'; // デフォルトの画像パス
    const firstBookWithImage = books.find(book => book.imageUrl);
    const ogImageUrl = firstBookWithImage ? firstBookWithImage.imageUrl : defaultImageUrl;

    return {
        title: title,
        description: description,
        openGraph: {
            title: title,
            description: description,
            images: [
                {
                    url: ogImageUrl as string,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
    };
};
