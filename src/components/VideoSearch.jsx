import React from 'react';
import dftThumbnail from "../assests/default_thumbnail.jpg";
import dftProfilePic from "../assests/default_pfp.png";
import { NavLink } from 'react-router-dom';
import '../styles/VideoSearch.css'; // Import external CSS file

const VideoSearch = ({ key,video, channel }) => {
  const thumbnailUrl = video.thumbnail || dftThumbnail;
  const profilePicUrl = channel.profilePic || dftProfilePic;

  return (
    <NavLink 
      to={`/results/${video.id}`} 
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="video-card-search"
      key={key}>
        {/* Thumbnail */}
        <div className="video-thumbnail-search">
          <img src={thumbnailUrl} alt={video.title} />
        </div>

        {/* Video Details */}
        <div className="video-details-search">
          <div className="channel-profile-pic-search">
            <img src={profilePicUrl} alt={channel.name} />
          </div>
          <div className="video-info-search">
            <h3 className="video-title-search">{video.title}</h3>
            <p className="channel-name-search">{channel.name}</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default VideoSearch;
