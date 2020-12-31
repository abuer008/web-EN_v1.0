import React, {useRef, useEffect} from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import VideoArea from "./VideoArea";

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
        el.style.scale = 2

        gsap.to(el, {
            opacity: 1,
            scale: 1,
            ease: 'power3.inOut',
            duration: 2
        })
    }

    const goToSection = el => {
        gsap.to(window, {
            scrollTo: {y: el, autoKill: false},
            duration: 1
        })
    }

    useEffect(() => {
        if (sectionRef.current) {
            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: 'top center',
                onEnter: () => goToSection(sectionRef.current)
            })

            // ScrollTrigger.create({
            //     trigger: sectionRef.current,
            //     start: 'bottom bottom',
            //     onEnterBack: () => goToSection(sectionRef.current)
            // })
        }
        if (bgRef.current) handleBg(bgRef.current)
        if(titleRef.current) handleTitle(titleRef.current)
    }, [sectionRef, bgRef, titleRef, goToSection, handleBg, handleTitle])

    return (
        <SectionWrapper ref={sectionRef}>
            {titleSection.isActive ?
                <React.Fragment>
                        <Image src={titleSection.source} layout='fill' objectFit='cover' className='titleImage'/>
                    <Title  ref={titleRef}>
                        <Image src='/revision/revision_stylingTitle.svg' width={285} height={69} />
                        <Text>Perceptual abilities expanding</Text>
                    </Title>
                </React.Fragment>
                :
                <React.Fragment>
                    {imageSection.isActive &&
                        <ImageWrapper imageStyle={imageSection.imageStyle} ref={bgRef}>
                            <Image src={imageSection.source} width={imageSection.width} height={imageSection.height} objectFit={imageSection.objectFit} />
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
  background: black;
  margin: -8px;
  height: 100vh;
  
  display: flex;
  flex-direction: row;
  
  .titleImage.titleImage {
    z-index: 1;
  }
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
  font-size: 1.5em;
  margin: auto;
`

const ImageWrapper = styled.div`
  position: relative;
  top: 11%;
  left: 10%;
  z-index: 0;
`

export default RevisionSection
