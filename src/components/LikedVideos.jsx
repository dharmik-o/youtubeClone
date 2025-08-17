import React, { useContext } from 'react';
import { FormContext } from '../context/FormContext';
import VideoCard from './VideoCard';
import { channels } from '../mockData';
import '../styles/UserContent.css';

// Displays the list of videos that the user has liked.
export default function LikedVideos() {
    const { user } = useContext(FormContext);
    const { likedVideos } = user;

    return (
        <div>
            <h2>Liked Videos</h2>
            <div className="video-grid">
                {likedVideos.length > 0 ? (
                    likedVideos.map(video => {
                        const channel = channels.find(c => c.id === video.channelId);
                        return <VideoCard key={video.id} video={video} channel={channel} />;
                    })
                ) : (
                    <p>You haven't liked any videos yet.</p>
                )}
            </div>
        </div>
    );
}
