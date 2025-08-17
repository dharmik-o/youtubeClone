import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { videos, channels } from '../mockData';
import { NavLink } from "react-router-dom";
import '../styles/VideoPlayerPage.css'
import pfp from "../assests/default_pfp.png"
import tbnail from "../assests/default_thumbnail.jpg"
import { FormContext } from '../context/FormContext';

/**
 * VideoPlayerPage component displays the video player, video details, and suggestions.
 */
const VideoPlayerPage = () => {
    // Get the video ID from the URL parameters
    const { videoId } = useParams();
    // Get user data and action functions from the FormContext
    const { user, addToLikedVideos, addToDislikedVideos, addToWatchlist } = useContext(FormContext);
    
    // Find the current video from the mock data
    const video = videos.find(v => v.id === videoId);
    // Filter out the current video to create a list of other videos for suggestions
    const otherVideos = videos.filter(v => v.id != video.id)

    // Handle case where the video is not found
    if (!video) {
        return <h1>Video not found!</h1>;
    }

    // Find the channel for the current video
    const channel = channels.find((ch) => ch.id == video.channelId)

    // Event handlers for like, dislike, and watchlist buttons
    const handleLike = () => {
        addToLikedVideos(video);
    };

    const handleDislike = () => {
        addToDislikedVideos(video);
    };

    const handleWatchlist = () => {
        addToWatchlist(video);
    };

    // Check if the video is in the user's liked, disliked, or watchlist
    const isLiked = user.likedVideos.some(v => v.id === video.id);
    const isDisliked = user.dislikedVideos.some(v => v.id === video.id);
    const isInWatchlist = user.watchlist.some(v => v.id === video.id);

    return (
        <div className='player'>
            <div className='col1'>
                {/* Mock video player */}
                <div className="mock-video">
                    [Video Player for "{video.title}"]
                </div>
                <h1>{video.title}</h1>
                {/* Channel information */}
                <div className="video-player-channel">
                    <img src={pfp} alt="pfp" />
                    <h3>{channel.name}</h3>
                </div>
                {/* Action buttons */}
                <div className="video-actions-player">
                    <button onClick={handleLike} className={isLiked ? 'active' : ''}>👍 Like</button>
                    <button onClick={handleDislike} className={isDisliked ? 'active' : ''}>👎 Dislike</button>
                    <button onClick={handleWatchlist} className={isInWatchlist ? 'active' : ''}>➕ Add to Watchlist</button>
                </div>
            </div>
            <div className='col2'>
                {/* Video suggestions */}
                {
                    otherVideos.map((v) => (
                        <NavLink to={`/results/${v.id}`} key={v.id}>
                            <div className="suggestions">
                                <img src={tbnail} alt="" />
                                <h5>{v.title}</h5>
                            </div>
                        </NavLink>
                    ))
                }
            </div>
        </div>
    );
};

export default VideoPlayerPage;
