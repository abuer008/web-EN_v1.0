import React, {useRef, useEffect} from 'react'
import styled from 'styled-components'
import Image from 'next/image'

import { gsap } from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { ScrollToPlugin} from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const RevisionSection = ({children = {}, titleSection = {}, imageSection = {}}) => {
    const bgRef = useRef(null)
    const titleRef = useRef(null)
    const sectionRef = useRef(null)

    const handleBg = el => {
        el.style.top = `${-innerHeight / 2}px`

        gsap.to(el, {
            top: `25%`,
            scrollTrigger: {
                trigger: el,
                ease: 'power3.inOut',
                scrub: true
            }
        })
    }

    const handleTitle = el => {
        el.style.opacity = 0
        // el.style.scale = 2

        gsap.to(el, {
            opacity: 1,
            // scale: 1,
            ease: 'power3.inOut',
            duration: 2
        })
    }

    useEffect(() => {
        if (bgRef.current) handleBg(bgRef.current)
        if(titleRef.current) handleTitle(titleRef.current)
    }, [sectionRef, bgRef, titleRef, handleBg, handleTitle])

    return (
        <SectionWrapper ref={sectionRef}>
            {titleSection.isActive ?
                <React.Fragment>
                        <Image alt={titleSection.alt} src={titleSection.source} layout='fill' objectFit='cover' className='titleImage'/>
                    <Title  ref={titleRef}>
                        <Image alt='revision title icon' src='/revision/revision_stylingTitle.svg' width='285' height='69' />
                        <Text>Perceptual abilities expanding</Text>
                    </Title>
                </React.Fragment>
                :
                <React.Fragment>
                    {imageSection.isActive &&
                        <ImageWrapper imageStyle={imageSection.imageStyle} ref={bgRef}>
                            <Image alt={imageSection.alt} src={imageSection.source} width={imageSection.width} height={imageSection.height} objectFit={imageSection.objectFit} />
                        </ImageWrapper>
                    }
                    {children}
                </React.Fragment>
            }
        </SectionWrapper>
    )
}

const SectionWrapper = styled.section`
  //z-index: 0;
  margin: -8px;
  height: 100vh;
  
  display: flex;
  flex-direction: row;
  
  overflow: hidden;
  
  .titleImage.titleImage {
    z-index: 1;
  }
  
  background-color: black;
`

const Title = styled.div`
  position: absolute;
  top: 35rem;
  left: 15%;
  z-index: 1;
  margin: 0;
`

const Text = styled.h4`
  font-family: Roboto, sans-serif;
  font-size: 1.5rem;
  margin: auto;
`

const ImageWrapper = styled.div`
  position: relative;
  top: 11%;
  left: 10%;
  z-index: 0;
`

export default RevisionSection
