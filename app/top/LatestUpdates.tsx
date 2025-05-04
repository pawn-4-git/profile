import React from 'react';

import { updates } from './updatesData';

const LatestUpdates: React.FC = () => {
    return (
        <section>
            <h2>最新の更新情報</h2>
            <ul>
                {updates.map((update) => (
                    <li key={update.id}>
                        <a href={update.url}><strong>{update.title}</strong> - <time>{update.date}</time></a>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default LatestUpdates;
