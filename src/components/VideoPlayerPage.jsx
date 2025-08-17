import React from 'react';
import { useParams } from 'react-router-dom';
import { videos,channels } from '../mockData'; 
import {NavLink} from "react-router-dom";
import '../styles/VideoPlayerPage.css'
import pfp from "../assests/default_pfp.png"
import tbnail from "../assests/default_thumbnail.jpg"
const VideoPlayerPage = () => {
  const { videoId } = useParams();
  // Finding the video data that matches the ID from the URL
  const video = videos.find(v => v.id === videoId);
  const otherVideos = videos.filter(v=>v.id != video.id)
  // Handle case where no video is found
  if (!video) {
    return <h1>Video not found!</h1>;
  }
  const channel = channels.find((ch)=>ch.id == video.channelId)
  return (
    
    <div className='player'>
      <div className='col1'>
      <div className="mock-video"
      >
        [Video Player for "{video.title}"]
      </div>
      <h1>{video.title}</h1>
      <div className="video-player-channel">
        <img src={pfp} alt="pfp" />
        <h3>{channel.name}</h3>
      </div>
      <p>Likes: {video.likes} | Dislikes: {video.dislikes}</p>
      </div>
      <div className='col2'>
        {
          otherVideos.map((v)=>(
            <NavLink to={`/results/${v.id}`}>
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