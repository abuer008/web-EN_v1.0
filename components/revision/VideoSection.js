import styled from 'styled-components'
import VideoArea from "./VideoArea";

import {useRef, useEffect, useState} from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const VideoSection = ({children, videoSource}) => {
    const [playing, setPlaying] = useState(false)
    const videoRef = useRef(null)
    const transRef = useRef(null)

    const handleVideoTrigger = el => {
        ScrollTrigger.create({
            trigger: el,
            start: '-=20% top',
            onEnter: () => setPlaying(true)
        })
        console.log(playing)
    }

    useEffect(() => {
        if (videoRef.current) handleVideoTrigger(videoRef.current)
    })

    return (
        <SectionWrapper ref={videoRef}>
            <VideoWrapper>
                <VideoArea videoSource={videoSource} isPlaying={playing} />
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
  
  display: flex;
  flex-direction: row;
`
const VideoWrapper = styled.div`
  position: absolute;
  overflow: hidden;
  z-index: 0;
  height: 100vh;
  object-fit: cover;
`

export default VideoSection