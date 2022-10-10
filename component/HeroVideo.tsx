import { NextPage } from 'next';
import { type } from 'os';
import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

type VideoProps = {
    videoId: string;
}

const HeroVideo: NextPage<VideoProps> = ({videoId}) => {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  const opts: YouTubeProps['opts'] = {
    height: '400',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return <YouTube videoId={videoId} opts={opts} onReady={onPlayerReady} />;
}

export default HeroVideo;