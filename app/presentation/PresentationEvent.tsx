import React from 'react';
import Image from 'next/image';
import { PresentationEvent, presentationEvents } from './presentationEventData';

const LatestUpdates: React.FC = () => {
    const cardStyle: React.CSSProperties = {
        border: '1px solid #ddd',
        borderRadius: '8px',
        marginBottom: '16px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        listStyleType: 'none',
        overflow: 'hidden'
    };

    const contentStyle: React.CSSProperties = {
        padding: '16px',
    };

    const titleStyle: React.CSSProperties = {
        fontSize: '1.2em',
        fontWeight: 'bold',
        marginBottom: '12px',
    };

    const mediaContainerStyle: React.CSSProperties = {
        display: 'flex',
        alignItems: 'flex-start',
    };

    const imageStyle: React.CSSProperties = {
        height: '120px',
        width: 'auto',
        objectFit: 'contain',
        objectPosition: 'left',
        borderRadius: '4px',
        marginRight: '16px',
    };

    const infoContainerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
    };

    const dateStyle: React.CSSProperties = {
        color: '#666',
        fontSize: '0.9em',
        marginBottom: '8px',
    };

    const slideLinkStyle: React.CSSProperties = {
        display: 'inline-block',
    };

    return (
        <section>
            <h2>登壇情報</h2>
            <ul>
                {presentationEvents.map((presentationEvent) => (
                    <li key={presentationEvent.id} style={cardStyle}>
                        <div style={contentStyle}>
                            <a href={presentationEvent.url} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div style={titleStyle}>{presentationEvent.title}</div>
                            </a>
                            <div style={mediaContainerStyle}>
                                {presentationEvent.thumbnailUrl && presentationEvent.thumbnailUrl.length > 0 && (
                                    <a href={presentationEvent.url}>
                                        <Image
                                            src={presentationEvent.thumbnailUrl}
                                            alt={presentationEvent.title}
                                            width={500}
                                            height={300}
                                            style={imageStyle}
                                        />
                                    </a>
                                )}
                                <div style={infoContainerStyle}>
                                    <time style={dateStyle}>開催日: {presentationEvent.date}</time>
                                    {presentationEvent.slideUrl && presentationEvent.slideUrl.length > 0 && (
                                        <div style={slideLinkStyle}>
                                            <a href={presentationEvent.slideUrl} target="_blank" rel="noopener noreferrer">
                                                登壇資料
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default LatestUpdates;
