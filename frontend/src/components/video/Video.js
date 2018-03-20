import React from 'react';
import ReactPlayer from 'react-player';

const Video = (props) => {

  return (
 <ReactPlayer onEnded={props.endingHandler} url={`https://www.youtube.com/embed/${props.youtubeCode}`} playing  />

  );
};
export default Video