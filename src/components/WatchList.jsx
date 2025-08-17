import React, { useContext } from 'react';
import { FormContext } from '../context/FormContext';
import VideoCard from './VideoCard';
import { channels } from '../mockData';
import '../styles/UserContent.css';

// Displays the user's watchlist.
export default function WatchList() {
    const { user } = useContext(FormContext);
    const { watchlist } = user;

    return (
        <div>
            <h2>Watchlist</h2>
            <div className="video-grid">
                {watchlist.length > 0 ? (
                    watchlist.map(video => {
                        const channel = channels.find(c => c.id === video.channelId);
                        return <VideoCard key={video.id} video={video} channel={channel} />;
                    })
                ) : (
                    <p>Your watchlist is empty.</p>
                )}
            </div>
        </div>
    );
}
