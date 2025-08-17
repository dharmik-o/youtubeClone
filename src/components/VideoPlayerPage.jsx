import React from 'react';
import { useParams } from 'react-router-dom';
import { videos } from '../mockData'; 

const VideoPlayerPage = () => {
  const { videoId } = useParams();
  // Finding the video data that matches the ID from the URL
  const video = videos.find(v => v.id === videoId);

  // Handle case where no video is found
  if (!video) {
    return <h1>Video not found!</h1>;
  }

  return (
    <div>
      
      <div style={{
        width: '80%',
        height: '500px',
        backgroundColor: '#000',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '20px auto'
      }}>
        [Video Player for "{video.title}"]
      </div>
      <h1>{video.title}</h1>
      <p>Likes: {video.likes} | Dislikes: {video.dislikes}</p>
    </div>
  );
};

export default VideoPlayerPage;