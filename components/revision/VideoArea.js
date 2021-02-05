import ReactPlayer from "react-player";
import styled from 'styled-components';

const VideoArea = ({videoSource, alt, isPlaying, showControl = false, light = false}) => {

    return (
        <>
            <ReactPlayer
                alt={alt}
                controls={showControl}
                url={videoSource}
                playing={isPlaying}
                width="auto"
                height="100%"
            />
        </>
    )
}

export default VideoArea