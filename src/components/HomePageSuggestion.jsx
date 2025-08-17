import VideoCard from './VideoCard'
import { videos, channels } from '../mockData'; 
import "../styles/HomePageSuggestion.css"
export default function HomePageSuggestion() {
  return (
        <div className="video-grid-container">
      {videos.map(video => {
        //get the channel data for the video
        const channel = channels.find(c => c.id === video.channelId);

        // if channel not found then return null
        if (!channel) {
          return null;
        }

        return <VideoCard key={video.id} video={video} channel={channel} />;
      })}
        </div>
  )
}
