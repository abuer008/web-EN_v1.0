import { useState } from 'react';
import ReactPlayer from "react-player";
import styled from 'styled-components';
import Image from 'next/image';

// import revisionIntro from "../../public/revision/revisionIntro.mp4"

const VideoArea = ({videoSource, isPlaying, handleUpdate, handleStart}) => {

    return (
        <>
            {/*<PlayerWrapper>*/}
                <ReactPlayer
                url={videoSource}
                playing={isPlaying}
                width="auto"
                height="100%"
                // onEnded={handleUpdate}
                // onStart={handleStart}
                config={{
                    file: {
                        // forceVideo: true
                    }
                }}
                // style={{position: "absolute"}}
            />
            {/*<ReactPlayer*/}
            {/*    url={stillSource} />*/}
            {/*<ImageWrapper>*/}
            {/*<Image src={stillSource} layout="fill" objectFit="cover" />*/}
            {/*</ImageWrapper>*/}
        </>
    )
}


const PlayerWrapper = styled.div`
  //position: absolute;
  //width: 100%;
  //height: 100%;
  z-index: 0;
`

const ImageWrapper = styled.div`
 // position: inherit;
  z-index: -1;
  //object-position: left bottom;
  //width: 10%;
  //height: 100%;
`

export default VideoArea