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
                width='100%'
                height='100%'
                light={light}
            />
        </>
    )
}

export default VideoArea