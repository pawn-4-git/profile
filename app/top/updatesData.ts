import { blogPosts } from '../blog/blogInfo';
import { books } from '../book/readBook';
import { unreadBooks } from '../book/unReadBook';
import { presentationEvents } from '../presentation/presentationEventData';

export type Update = {
    id: number;
    title: string;
    date: string;
    type: 'blog' | 'readBook' | 'unreadBook' | 'presentation';
    url?: string;
};

function parseDate(dateStr: string): number {
    return new Date(dateStr).getTime();
}

export const updates: Update[] = (() => {
    const blogUpdates: Update[] = blogPosts.map(post => ({
        id: post.id,
        title: `ブログ投稿: ${post.title}`,
        date: post.date,
        type: 'blog',
        url: post.url
    }));

    const readBookUpdates: Update[] = books
        .filter(book => book.date)
        .map(book => ({
            id: 0, // 仮のID、後で一意に割り当てる
            title: `読み終わりました: ${book.title}`,
            date: book.date!,
            type: 'readBook',
            url: book.url
        }));

    const unreadBookUpdates: Update[] = unreadBooks
        .filter(book => book.date)
        .map(book => ({
            id: 0, // 仮のID、後で一意に割り当てる
            title: `購入して積読に追加: ${book.title}`,
            date: book.date!,
            type: 'unreadBook',
            url: book.url
        }));

    const presentationUpdates: Update[] = presentationEvents.map(event => ({
        id: event.id,
        title: `こちらで発表: ${event.title}`,
        date: event.date,
        type: 'presentation',
        url: event.url
    }));

    const allUpdates = [...blogUpdates, ...readBookUpdates, ...unreadBookUpdates, ...presentationUpdates];

    allUpdates.sort((a, b) => parseDate(b.date) - parseDate(a.date));

    // 一意のIDを割り当てる
    allUpdates.forEach((update, index) => {
        update.id = index + 1;
    });

    return allUpdates.slice(0, 10);
})();
