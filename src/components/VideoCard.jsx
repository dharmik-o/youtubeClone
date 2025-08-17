import React from 'react';
import '../styles/VideoCard.css'; 
import dftThumbnail from "../assests/default_thumbnail.jpg"
import dftProfilePic from "../assests/default_pfp.png"
import { NavLink } from 'react-router-dom';
const VideoCard = ({ video, channel }) => {
  // Use a placeholder if the thumbnail or profile picture is an empty string
  const thumbnailUrl = video.thumbnail || dftThumbnail;
  const profilePicUrl = channel.profilePic || dftProfilePic;

  return (
    <NavLink to={`/results/${video.id}`} 
    style={{ textDecoration: "none", color: "inherit" }}
  >
    <div className='video-card'>
      {/* Video Thumbnail */}
      <div className='video-thumbnail'>
        <img src={thumbnailUrl} alt={video.title} />
      </div>

      {/* Video Details Section */}
      <div className='video-details'>
        <div className='channel-profile-pic'>
          <img src={profilePicUrl} alt={channel.name} />
        </div>
        <div className='video-info'>
          <h3 className='video-title'>{video.title}</h3>
          <p className='channel-name'>{channel.name}</p>
        </div>
      </div>
    </div>
    </NavLink>
  );
};

export default VideoCard;
