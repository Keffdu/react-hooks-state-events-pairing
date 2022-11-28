import React from "react";
import video from "../data/video.js";
import CommentButton from "./CommentButton.js";
import VideoDisplay from "./VideoDisplay"

function App() {
  // console.log("Here's your data:", video);

  return (
    <div className="App">
      <VideoDisplay video={video} />
      <br></br>
      <CommentButton comments={video.comments}/>
    </div>
  );
}

export default App;
