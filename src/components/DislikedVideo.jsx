import React, { useContext } from 'react';
import { FormContext } from '../context/FormContext';
import VideoCard from './VideoCard';
import { channels } from '../mockData';
import '../styles/UserContent.css';

export default function DislikedVideos() {
    const { user } = useContext(FormContext);
    const { dislikedVideos } = user;

    return (
        <div>
            <h2>Disliked Videos</h2>
            <div className="video-grid">
                {dislikedVideos.length > 0 ? (
                    dislikedVideos.map(video => {
                        const channel = channels.find(c => c.id === video.channelId);
                        return <VideoCard key={video.id} video={video} channel={channel} />;
                    })
                ) : (
                    <p>You haven't disliked any videos yet.</p>
                )}
            </div>
        </div>
    );
}
