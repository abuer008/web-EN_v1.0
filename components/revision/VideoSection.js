import styled from 'styled-components'
import VideoArea from "./VideoArea";

import {useRef, useEffect, useState} from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const VideoSection = ({children, videoSource, alt, phoneVersion = false}) => {
    const [playing, setPlaying] = useState(false)
    const videoRef = useRef(null)

    const handleVideoTrigger = el => {
        ScrollTrigger.create({
            trigger: el,
            start: '-=20% top',
            onEnter: () => setPlaying(true)
        })
    }

    useEffect(() => {
        if (videoRef.current) handleVideoTrigger(videoRef.current)

    }, [])

    return (
        <SectionWrapper ref={videoRef}>
            <VideoWrapper>
                <VideoArea videoSource={videoSource} alt={alt} isPlaying={playing} />
            </VideoWrapper>
            {children}
        </SectionWrapper>
    )
}

const SectionWrapper = styled.div`
  z-index: 0;
  //background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1), rgba(0,0,0,0));
  background: black;
  margin: 0 -8px;
  height: 100vh;
  overflow: hidden;
  
  display: flex;
  flex-direction: row;
`
const VideoWrapper = styled.div`
  position: absolute;
  z-index: 0;
  height: 100vh;
  //overflow-y: hidden;
  object-fit: cover;
`

export default VideoSection