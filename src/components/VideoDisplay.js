import React from "react"
import Votes from "./Votes"


function VideoDisplay({video}) {
    // console.log(video.upvotes)
return (
    <>    
        <iframe
            width="900"
            height="450"
            src={video.embedUrl}
            frameBorder="0"
            allowFullScreen
            title="Thinking in React"
        />
        <h1>{video.title}</h1>
        <p>{video.views} Views | Uploaded {video.createdAt}</p>
        <Votes downVotes={video.downvotes} upVotes={video.upvotes} /> 
    </>
)}


export default VideoDisplay;
