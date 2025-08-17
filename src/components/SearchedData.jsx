import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { channels,videos } from '../mockData'
import VideoSearch from './VideoSearch';
export default function SearchedData() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("query") || "";
    const filteredData = videos.filter((video)=>{
        const lcQuery = query.toLowerCase() ;//make query to lowercase to search
        const channel = channels.find((ch)=> ch.id == video.channelId)
        return(
            video.title.toLowerCase().includes(lcQuery) ||
            channel.name.toLowerCase().includes(lcQuery)
        )
    })
  return (
    <div className='search-holder'style={{
        display : "flex",
        flexDirection : "column",
        gap : "10px"
    }}>
    {filteredData.length ? (
        filteredData.map((video)=>{
            const channel = channels.find((ch)=> ch.id == video.channelId)
            return <VideoSearch key={video.id} video={video} channel={channel} />;
        })
    )
    :
    (
        <h3>No Results found for the search {query}</h3>
    )
}

    </div>
  )
}
