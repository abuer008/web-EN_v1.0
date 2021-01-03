import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Layout from '../../components/Layout'
import { BasicEl } from "../../components/aal/BasicEl";
import { TlText } from "../../components/aal/TlText";
import styled from 'styled-components'
import Image from 'next/image'
import ReactPlayer from "react-player";
import { useState } from 'react'
import { useRef, useEffect } from 'react'


import {AALData} from "../../data/AAL";

gsap.registerPlugin(ScrollTrigger)

const AmbientAssistedLiving = () => {

    const sectionRefs = useRef([])
    const video = useRef(null)
    const text = useRef([])
    const newText = useRef([])

    const tlStyle = {
        width: '450px',
        height: '190px'
    }

    const gStyle = {
        width: '120px',
        height: '120px'
    }

    const aalIntroStyle = {
        width: '670px',
        height: '120px'
    }

   const firstPageAnima = (video, text, newText) => {
        const tl = gsap.timeline({duration: 1, scrollTrigger: {
                trigger: sectionRefs.current[0],
                start: '10% top',
                end: 'bottom center',
                toggleActions: 'play none none reverse',
                markers: true
            }})
        tl.to(video, {
            opacity: 0,
        }, "-=0.5")
            .to(text, {
                opacity: 0,
                y: -100,
                stagger: 0.2
            }, "-=1")
            .fromTo(newText, {
                opacity: 0,
                y: 100
            }, {
                opacity: 1,
                y: 0,
                stagger: 0.2
            }, "-=0.3")
   }

   useEffect(() => {
       if(video.current) {
           firstPageAnima(video.current, text.current, newText.current)
       }
  }, [])

    return (<Layout>
        <Section style={{backgroundColor: '#efefef', position: 'fixed', height: '100vh'}} />
        <Section  ref={el => sectionRefs.current.push(el)}>
                <VideoWrapper ref={video}>
                <ReactPlayer
                    url='/aal/titleVideo.mp4'
                    playing
                    width="101%"
                    height="auto"
                />
            </VideoWrapper>
            <TlArea ref={el => text.current.push(el)}>
                <TlContent>
                    <IconWrapper>
                        <Image src='/aal/Home.svg' width='136' height='146' />
                    </IconWrapper>
                    <H1>Ambient Assisted Living</H1>
                </TlContent>
                <BasicEl style={tlStyle} />
            </TlArea>

            <GArea ref={el => text.current.push(el)}>
                <GIconWrapper>
                    <Image src='/aal/gestureIcon.svg' width='52' height='73'/>
                </GIconWrapper>
                <BasicEl style={gStyle}/>
                <TlText title={AALData[0].title} plainText={AALData[0].plainText} />
            </GArea>

            <VArea ref={el => text.current.push(el)}>
                <VIconWrapper>
                    <Image src='/aal/virusIcon.svg' width='70' height='70' />
                </VIconWrapper>
                <BasicEl style={gStyle} />
                <TlText title={AALData[1].title} plainText={AALData[1].plainText} />
            </VArea>

            <PArea ref={el => text.current.push(el)}>
                <PIconWrapper>
                    <Image src='/aal/personalIcon.svg' width='68' height='52' />
                </PIconWrapper>
                <BasicEl style={gStyle} />
                <TlText title={AALData[2].title} plainText={AALData[2].plainText} />
            </PArea>
            <SecondPageText>
                <BigText ref={el => newText.current.push(el)}>The crisis of elderly care services</BigText>
                <SmallText ref={el => newText.current.push(el)}>some describing text about care services</SmallText>
            </SecondPageText>
        </Section>

        <Section ref={el => sectionRefs.current.push(el)}>
            <ThirdPage>
                <ThirdPageText>
                    <TitleWrapper>
                        <BasicEl style={aalIntroStyle}/>
                    <AALIntro>The Concept of <Strong>AAL</Strong></AALIntro>
                    </TitleWrapper>
                    <ThirdSmallText>some describing text about AALsome describing text about AAL.some describing text about AAL..</ThirdSmallText>
                </ThirdPageText>
                <AALImageWrapper>
                    <Image src='/aal/aalIntro.jpg' width='502' height='354'/>
                </AALImageWrapper>
            </ThirdPage>
        </Section>

    </Layout>)
}

const Section = styled.div`
  position: relative;
  width: 100vw;
  height: 80vh;
  margin: -8px;
  padding: 0;
  overflow: hidden;
  border: 1px solid white;
  //scroll-snap-align: start;
  
`

const VideoWrapper = styled.div`
  position: fixed;
  z-index: 0;
  //height: auto;
`

const TlArea = styled.div`
  position: fixed;
  top: 16vh;
  left: 60vw;
  width: 426px;
  transition: 0.3s ease-out;
  
  :hover {
    transform: scale(1.05);
    cursor: default;
  }
`

const GArea = styled(TlArea)`
  top: 43vh;
`

const VArea = styled(GArea)`
  top: 60vh;
`
const PArea = styled(GArea)`
  top: 78vh;
`

const TlContent = styled.div`
  position: absolute;
  margin-left: 10px;
  z-index: 1;
  
  display: flex;
  flex-direction: row;
`

const IconWrapper = styled.div`
  margin: auto 40px;
`

const GIconWrapper = styled(IconWrapper)`
  position: absolute;
  z-index: 1;
  margin: 25px 35px;
`

const VIconWrapper = styled(GIconWrapper)`
  margin: 26px;
`
const PIconWrapper = styled(GIconWrapper)`
  margin: 38px 27px;
`

const H1 = styled.h1`
  
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 3em;
  line-height: 90%;
`

const SecondPageText = styled.div`
  position: fixed;
  top: 20vh;
  left: 25vw;
  
  font-family: Roboto, sans-serif;
  font-style: normal;
`

const ThirdPageText = styled.div`
  position: fixed;
  top: 50vh;
  right: 1300px;
`

const TitleWrapper = styled.div`
  position: absolute;
  bottom: 200px;
  left: 80px;
`

const BigText = styled.h2`
  font-weight: 900;
  font-size: 4em;
`

const SmallText = styled.p`
  font-weight: normal;
  font-size: 1.2em;
`

const ThirdSmallText = styled(SmallText)`
  position: absolute;
  text-align: right;
  width: 670px;
  left: 70px;
  top: -50px;
`

const ThirdPage = styled.div`
  font-family: Roboto, sans-serif;
  font-style: normal;
`

const AALIntro = styled(BigText)`
  position: absolute;
  width: 670px;
  top: -25px;
  left: -30px;
  font-weight: 200;
  text-align: right;
`

const AALImageWrapper = styled.div`
  position: fixed;
  top: 32vh;
  right: 0;
`

const Strong = styled.strong`
  font-weight: bold;
`

export default AmbientAssistedLiving