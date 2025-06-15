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
    const OG_IMAGE_WIDTH = 1200;
    const OG_IMAGE_HEIGHT = 630;
    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: [
                {
                    url: ogImageUrl,
                    width: OG_IMAGE_WIDTH,
                    height: OG_IMAGE_HEIGHT,
                    alt: title,
                },
            ],
        },
    };
};
