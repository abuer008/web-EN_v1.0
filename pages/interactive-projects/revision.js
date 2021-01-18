import styled from 'styled-components'

import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {ScrollToPlugin} from "gsap/ScrollToPlugin";
import {useState, useEffect, useRef} from 'react'

import Layout from '../../components/Layout'
import RevisionSection from "../../components/revision/RevisionSection";
import VideoSection from "../../components/revision/VideoSection";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const Revision = () => {

    const sections = useRef([])
    const subTextRef = useRef([])
    const plainTextRef = useRef([])

    const titleSection = {
        isActive: true,
        source: '/revision/revisionTitlePhoto.webp'
    }
    const imageSection = {
        isActive: true,
        imageStyle: {},
        source: '/revision/ArtificialSynaesthesia.jpg',
        width: 450,
        height: 950,
        objectFit: 'contain'
    }

    const handleText = el => {
        gsap.from(el, {
            opacity: 0,
            top: '+=10%',
            ease: 'power1.inOut',
            duration: 1,
            scrollTrigger: {
                trigger: el,
                start: 'top +180%',
                scrub: true
            }
        })
    }

    const goToSection = (el, anim) => {
        gsap.to(window, {
            scrollTo: {y: el, autoKill: false},
            ease: 'power1.out',
            duration: 1
        })

        if (anim) {
            anim.restart()
        }
    }

    const handleSnap = elArr => {
        elArr.forEach((el, i) => {
            ScrollTrigger.create({
                trigger: el,
                start: 'top +=80%',
                onEnter: () => goToSection(el)
            })

            ScrollTrigger.create({
                trigger: el,
                start: 'bottom bottom',
                onEnterBack: () => goToSection(el)
            })
        })
    }

    useEffect(() => {
        // if(sectionsRef.current) console.log(sectionsRef.current)
        handleSnap(sections.current)

        if (subTextRef.current) {
            subTextRef.current.forEach((item, i) => {
                const subEl = plainTextRef.current[i]

                handleText(item)
                handleText(subEl)
            })
        }
    }, [])

    return (
        <Layout isBlack={false}>
            <div ref={el => sections.current.push(el)}>
                <RevisionSection titleSection={titleSection}/>
            </div>

            <div ref={el => sections.current.push(el)}>
                <RevisionSection imageSection={imageSection}>
                    <TextArea style={{left: '24vw'}}>
                        <SubText ref={el => subTextRef.current.push(el)}>Artificial Synaesthesia</SubText>
                        <ExplainText ref={el => plainTextRef.current.push(el)}>As French philosopher Roland Barthes
                            said, there
                            is no natural connection between signifier and
                            signified, the existence of an object in the objective
                            world is perceived by our sensory organs, such as
                            shapes, colours and temperature of objects are just
                            our subjective perceptual language in the brain.
                            Hearing colours, tasting alphabets, the fundamental
                            appearance of synaesthesia is based on “nonexistent
                            hallucination” in the brain. How to use
                            those hallucinations to represent the information,
                            that unnoticed or cannot be perceived because of
                            limitation of senses in humans, is primary aim of
                            this project. Thus, a novel head-mounted device is
                            presented, the device gathers <ToneText>visual information </ToneText>
                            and represents into <ToneText>pure tactile language</ToneText>, it
                            provides a possibility: haptic as a “low-resolution”
                            perceptual language, can be used as a new channel
                            of senses, by means of machine cognition and
                            artificial intelligence to expand horizons of
                            perception in humans.</ExplainText>
                    </TextArea>
                </RevisionSection>
            </div>

            <div ref={el => sections.current.push(el)}>
            <VideoSection videoSource='/revision/revisionIntro.mp4'>
                <TextArea>
                    <SubText
                        ref={el => subTextRef.current.push(el)}>The <ToneText>RE:VISION</ToneText> Concept</SubText>
                    <ExplainText ref={el => plainTextRef.current.push(el)}>Humans’ vision involves more complex neural
                        mechanisms and gathers distinctively more information
                        than the other senses, the <ToneText>Re:Vision</ToneText> attempts to translate visual
                        information into tactile “language” by artificial means, to discover the novel
                        perceptual channel of humans. The ultimate question is how people use their own
                        imagination to understand the subjective world.</ExplainText>
                </TextArea>
            </VideoSection>
            </div>

            <div ref={el => sections.current.push(el)}>
            <VideoSection videoSource='/revision/revisionInfrared.mp4'>
                <TextArea>
                    <SubText ref={el => subTextRef.current.push(el)}>Machine Cognition</SubText>
                    <ExplainText ref={el => plainTextRef.current.push(el)}>
                        Using infrared rays and normal camera to capture required environmental data from front.
                    </ExplainText>
                </TextArea>
            </VideoSection>
            </div>

            <div ref={el => sections.current.push(el)}>
            <VideoSection videoSource='/revision/revisionTactile.mp4'>
                <TextArea>
                    <SubText ref={el => subTextRef.current.push(el)}>Single row of haptic stimuli</SubText>
                    <ExplainText ref={el => plainTextRef.current.push(el)}>
                        Conveying unnecessary
                        information about the environment can lead to a risk of
                        sensory overload. The spatial position and the shape of objects can be
                        represented like our visual perception with only a few
                        stimuli in one row taking into account the limited
                        change in the magnitude.
                    </ExplainText>
                </TextArea>
            </VideoSection>
            </div>

            <ProductIntro ref={el => sections.current.push(el)}>
                <TextArea>
                    <SubText ref={el => subTextRef.current.push(el)}>Data Translation</SubText>
                    <ExplainText ref={el => plainTextRef.current.push(el)}>Conveying unnecessary
                        information about the environment can lead to a risk of
                        sensory overload. The spatial position and the shape of objects can be
                        represented like our visual perception with only a few
                        stimuli in one row taking into account the limited
                        change in the magnitude.</ExplainText>
                </TextArea>
            </ProductIntro>

            <PrototypeSection ref={el => sections.current.push(el)}>
                <TextArea>
                    <SubText ref={el => subTextRef.current.push(el)}>Prototype</SubText>
                    <ExplainText ref={el => plainTextRef.current.push(el)}>
                        Prototype text.
                    </ExplainText>
                </TextArea>
            </PrototypeSection>

            <Description ref={el => sections.current.push(el)}>
                <SubText>
                    Description section
                </SubText>
            </Description>
        </Layout>
    )
}

const TitleSection = styled.div`
  //position: relative;
  height: 100vh;
  //width: 90vw;
  margin: -8px;
  z-index: 0;
  background: black;
`

const IntroSection = styled.div`
  //position: relative; 
  z-index: 0;
  //overflow: scroll;
  background: black;
  //padding: 2em;
  margin: 0 -8px;
  //border: 10px;
  height: 100vh;
  //width: 90vw;

  display: flex;
  flex-direction: row;
`

const ProductIntro = styled(IntroSection)`
  //position: absolute;
  //   background: white;
`

const DataTransformSection = styled(IntroSection)`

`

const PrototypeSection = styled(IntroSection)`

`

const Description = styled(IntroSection)`

`


const TextArea = styled.div`
  //opacity: 0;
  position: relative;
  font-family: Roboto, sans-serif;
  top: 35vh;
  left: 55vw;
  max-height: 50vh;
  //overflow: scroll;
`

const Text = styled.h4`
  font-family: Roboto, sans-serif;
  font-size: 1.5rem;
  margin: auto;
`

const SubText = styled(Text)`
  margin: auto;
  //width: 50vw;
  //height: 10vh;

  font-style: normal;
  font-weight: lighter;
  font-size: 2.5em;
  line-height: 0;
  text-transform: uppercase;

  color: #fff;
`
const ExplainText = styled.p`
  color: #fff;
  width: 35vw;
  position: relative;
  top: 5vh;

  font-style: normal;
  font-weight: lighter;
  font-size: 1.2em;
  line-height: 1.5em;
  text-align: justify;
`

const ToneText = styled.strong`
  font-weight: bold;
`


export default Revision