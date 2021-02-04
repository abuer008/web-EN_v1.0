import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {ScrollToPlugin} from "gsap/ScrollToPlugin";
import {useState, useEffect, useRef} from 'react'

import Layout from '../../components/Layout'
import RevisionSection from "../../components/revision/RevisionSection";
import VideoSection from "../../components/revision/VideoSection";
import VideoArea from "../../components/revision/VideoArea";
import {revisionProduct} from "../../data/RevisionData";
import {RedirectButton, handleRedirect} from "../../components/RedirectButton";
import {RefreshButton} from "../../components/RefreshButton";
import { IconComponent } from "../../components/IconComponent";


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const Revision = () => {

    const [isTransitionPlay, setPlay] = useState(false)

    const sections = useRef([])
    const subTextRef = useRef([])
    const plainTextRef = useRef([])

    const prototypeText = useRef(null)

    const redirect = useRef([])

    const titleSection = {
        isActive: true,
        alt: 'a girl wearing revision product and stare on the side',
        source: '/revision/revisionTitlePhoto.webp'
    }
    const imageSection = {
        isActive: true,
        imageStyle: {},
        alt: 'face with oil painting',
        source: '/revision/ArtificialSynaesthesia.jpg',
        width: 450,
        height: 950,
        objectFit: 'contain'
    }

    const handleText = el => {
        gsap.from(el, {
            top: '+=10%',
            ease: 'power1.inOut',
            paused: true,
            duration: 1,
            scrollTrigger: {
                trigger: el,
                start: 'top +180%',
                scrub: 2
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
        elArr.forEach((el) => {
            ScrollTrigger.create({
                trigger: el,
                start: 'top +=80%',
                onEnter: () => goToSection(el)
            })

        })
    }

    const handlePrototypes = () => {
        ScrollTrigger.create({
            trigger: sections.current[6],
            start: 'top top',
            end: '+=120%',
            pin: prototypeText.current,
            pinSpacing: false
        })
    }

    const handleTransitionPlay = () => {
        ScrollTrigger.create({
            trigger: sections.current[5],
            onEnter: () => setPlay(true),
            onEnterBack: () => setPlay(true),
            onLeave: () => setPlay(false)
        })
    }

    useEffect(() => {

        if (subTextRef.current) {
            // subTextRef.current.forEach((item, i) => {
            //     const subEl = plainTextRef.current[i]
            //
            //     handleText(item)
            //     handleText(subEl)
            // })
            handleSnap(sections.current)

        }

        handlePrototypes()
        handleTransitionPlay()
        handleRedirect(redirect.current, sections.current[8])
        return () => {
            window.location.reload(true)
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
                <VideoSection videoSource='/revision/revisionIntro.mp4' alt='revision project introduction'>
                    <TextArea>
                        <SubText
                            ref={el => subTextRef.current.push(el)}>The <ToneText>RE:VISION</ToneText> Concept</SubText>
                        <ExplainText ref={el => plainTextRef.current.push(el)}>Humans’ vision involves more complex
                            neural
                            mechanisms and gathers distinctively more information
                            than the other senses, the <ToneText>Re:Vision</ToneText> attempts to translate visual
                            information into tactile “language” by artificial means, to discover the novel
                            perceptual channel of humans. The ultimate question is how people use their own
                            imagination to understand the subjective world.</ExplainText>
                    </TextArea>
                </VideoSection>
            </div>

            <div ref={el => sections.current.push(el)}>
                <VideoSection videoSource='/revision/revisionInfrared.mp4' alt='machine cognition and machine vision'>
                    <TextArea>
                        <SubText
                            ref={el => subTextRef.current.push(el)}>{revisionProduct.machineCognition.heading}</SubText>
                        <ExplainText ref={el => plainTextRef.current.push(el)}>
                            {revisionProduct.machineCognition.plainText}
                        </ExplainText>
                    </TextArea>
                </VideoSection>
            </div>

            <div ref={el => sections.current.push(el)}>
                <VideoSection videoSource='/revision/revisionTactile.mp4' alt='haptic feedback'>
                    <TextArea>
                        <SubText
                            ref={el => subTextRef.current.push(el)}>{revisionProduct.hapticStimuli.heading}</SubText>
                        <ExplainText ref={el => plainTextRef.current.push(el)}>
                            {revisionProduct.hapticStimuli.plainText}
                        </ExplainText>
                    </TextArea>
                </VideoSection>
            </div>

            <ProductIntro ref={el => sections.current.push(el)}>
                <TranslationWrapper>
                    <VideoWrapper>
                        <VideoArea videoSource='/revision/translation/fundamental.mp4'
                                   alt='fundamental perceptual translation' isPlaying={isTransitionPlay}/>
                    </VideoWrapper>
                    <VideoWrapper style={{height: '34.2vh'}}>
                        <VideoArea videoSource='/revision/translation/form.mp4'
                                   alt='shape translated with haptic language' isPlaying={isTransitionPlay}/>
                    </VideoWrapper>
                </TranslationWrapper>
                <TextArea>
                    <SubText ref={el => subTextRef.current.push(el)}>{revisionProduct.dataTranslation.heading}</SubText>
                    <ExplainText
                        ref={el => plainTextRef.current.push(el)}>{revisionProduct.dataTranslation.plainText}</ExplainText>
                    <ExplainText ref={el => plainTextRef.current.push(el)}>{revisionProduct.dataTranslation.plainText2}</ExplainText>
                </TextArea>
            </ProductIntro>

            <PrototypeSection ref={el => sections.current.push(el)}>
                <PrototypeVideo>
                    <VideoArea
                        videoSource='/revision/prototype/firstPrototype.mp4'
                        alt='the first prototype of vision translation' isPlaying={false} showControl={true}/>
                </PrototypeVideo>
                <TextArea ref={prototypeText} style={{zIndex: '2'}}>
                    <SubText>{revisionProduct.prototype.heading}</SubText>
                    <ExplainText>
                        {revisionProduct.prototype.plainText}
                    </ExplainText>
                    <ExplainText>
                        {revisionProduct.prototype.plainText2}
                    </ExplainText>
                </TextArea>
            </PrototypeSection>

            <PrototypeSection ref={el => sections.current.push(el)}>
                <PrototypeImgWrapper>
                    <PrototypeImg ref={el => subTextRef.current.push(el)}>
                        <Image alt='kinect camera and arduino board mounted on plastic helmut for functional prototype'
                               src='/revision/prototype/IMG_0238.jpg' width='1440' height='774'/>
                    </PrototypeImg>
                    <PrototypeImg ref={el => plainTextRef.current.push(el)}>
                        <Image alt='several magnet hubs for simulation of electric stimuli on the skin'
                               src='/revision/prototype/magnetHub.png' width='1440' height='782'/>
                    </PrototypeImg>
                </PrototypeImgWrapper>
            </PrototypeSection>

            <Description ref={el => sections.current.push(el)}>
                <div ref={el => subTextRef.current.push(el)}>
                    <Image alt='round shape product laid on floor with colorful lights' src='/revision/cover0020.png'
                           layout='fill' objectFit='cover'/>
                </div>
                <TextArea style={{top: '20%'}}>
                    <SubText ref={el => subTextRef.current.push(el)}>{revisionProduct.conclusion.heading}</SubText>
                    <ExplainText
                        ref={el => plainTextRef.current.push(el)}>{revisionProduct.conclusion.plainText2}</ExplainText>
                </TextArea>
            </Description>

            <RedirectWrapper ref={el => redirect.current.push(el)}>
                <RedirectButton textColor='white' nextProject='VISUAL DATA' link='data-visualisation'/>
            </RedirectWrapper>

            <Refresh ref={el => redirect.current.push(el)}>
                <RefreshButton/>
            </Refresh>
        </Layout>
    )
}

const RedirectWrapper = styled.div`
  position: fixed;
  bottom: 5vh;
  z-index: 1;
  right: -5vw;
`

const Refresh = styled.div`
  position: fixed;
  bottom: 5vh;
  right: 50%;
  z-index: 1;
  margin-top: 10px;
  transform: translate(50%, 0%);
`

const IntroSection = styled.div`
  position: relative;
  overflow: hidden;
  background-color: black;
  margin: 0 -8px;
  height: 100vh;

`

const ProductIntro = styled(IntroSection)`
`

const PrototypeSection = styled(IntroSection)`

`

const PrototypeImg = styled.div`
`

const PrototypeVideo = styled.div`
  position: absolute;
  top: 25vh;
  left: 5vw;
  height: 35vh;
`

const PrototypeImgWrapper = styled.div`
  position: absolute;
  top: 15vh;
  left: 7vw;
  width: 40vw;
  height: 77vh;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const Description = styled(IntroSection)`

`


const TextArea = styled.div`
  position: relative;
  top: 30vh;
  left: 55vw;
  max-height: 50vh;
  max-width: 35vw;
`

const Text = styled.h4`
  font-size: 1.5rem;
  margin: auto;
`

const SubText = styled(Text)`
  margin: auto;

  font-style: normal;
  font-weight: lighter;
  font-size: 2.5em;
  line-height: 1em;
  text-transform: uppercase;

  color: #fff;
`
const ExplainText = styled.p`
  color: #fff;
  width: 35vw;
  position: relative;
  top: 1vh;

  font-style: normal;
  font-weight: lighter;
  font-size: 1.2em;
  line-height: 1.5em;
  text-align: justify;
`

const ToneText = styled.strong`
  font-weight: bold;
`

const TranslationWrapper = styled.div`
  position: absolute;
  top: 12vh;
  left: 6vw;
  height: 80vh;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

const VideoWrapper = styled.div`
  height: 35vh;

`


export default Revision