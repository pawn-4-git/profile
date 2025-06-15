import type { Metadata } from 'next';
import { Book } from './readBook';

export const generateBookMetadata = (
    books: Book[],
    title: string,
    description: string
): Metadata => {
    const defaultImageUrl = '/next.svg';
    const firstBookWithImage = books.find(book => book.imageUrl);
    const ogImageUrl = firstBookWithImage ? firstBookWithImage.imageUrl : defaultImageUrl;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: [
                {
                    url: ogImageUrl,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
    };
};
