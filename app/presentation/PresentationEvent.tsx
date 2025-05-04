import React from 'react';
import { PresentationEvent, presentationEvents } from './presentationEventData';

const LatestUpdates: React.FC = () => {
    return (
        <section>
            <h2>登壇情報</h2>
            <ul>
                {presentationEvents.map((presentationEvent) => (
                    <li key={presentationEvent.id}>
                        <a href={presentationEvent.url}><strong>{presentationEvent.title}</strong> - <time>{presentationEvent.date}</time></a>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default LatestUpdates;
