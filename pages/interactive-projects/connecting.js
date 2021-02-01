import styled from 'styled-components'
import Image from 'next/image'
import Layout from '../../components/Layout'
import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import StartAnima from '../../components/StartAnima'
import { States } from "../../components/connecting/States";

import { connectingData, connectingAnima, animaState, statesExample } from "../../data/Connecting";
import * as stylingAnima from '../../public/connecting/styling.json'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const Connecting = () => {

    const [isStopped, setStopped] = useState(true)
    const [watchAnima, setWatchAnima] = useState(connectingAnima[0])
    const [looping, setLooping] = useState(false)

    const [isStateStopped, setStateStopped] = useState(true)

    const [isStylingStopped, setStylingStopped] = useState(true)

    const [isLock, setLock] = useState(false)

    const sections = useRef([])

    const titleImg = useRef(null)
    const titleTexts = useRef([])

    const researchTexts = useRef([])

    const watchImg = useRef([])
    const introTexts = useRef([])

    const characterTexts = useRef([])
    const statesEl = useRef(null)

    const touchImg = useRef(null)
    const commTexts = useRef([])

    const catalogImg = useRef(null)
    const catalogTexts = useRef([])

    const compatiTexts = useRef([])
    const compatiImg = useRef(null)

    const prototypeTexts = useRef([])
    const prototypeImg = useRef(null)

    const techniquesTexts = useRef([])
    const techniquesImg = useRef(null)

    const stylingTexts = useRef([])
    const stylingImg = useRef(null)

    const conclusionTexts = useRef([])


    // new version of layout

    const pinTrigger = useRef(null)
    const pinnedWatch = useRef(null)


    // new version of animation

    const goToSection = section => {
        gsap.to(window, {
            scrollTo: {y: section, autoKill: false},
            ease: 'power1.out',
            duration: 1.5
        })
    }

    const handleScroll = (trigger) => {
        ScrollTrigger.create({
            trigger: trigger,
            start: 'top 80%',
            // markers: true,
            onEnter: () => {
                goToSection(trigger)
            },
            scrub: true
        })
        // ScrollTrigger.create({
        //     trigger: trigger,
        //     start: 'center bottom',
        //     markers: true,
        //     onEnterBack: () => goToSection(trigger)
        // })
    }

    const handleAnimation = (trigger, driven) => {
        gsap.from(driven, {
            opacity: 0,
            top: '+=10%',
            duration: 1,
            stagger: 0.3,
            // delay: 1,
            scrollTrigger: {
                trigger: trigger,
                start: 'top center',
                end: 'center center',
                // markers: true,
                toggleActions: 'play none none reverse'
            }
        })
    }

    const handleLottie = (trigger, watchAnima) => {
        ScrollTrigger.create({
            trigger: trigger,
            onEnter: () => {
                setWatchAnima(watchAnima)
                setStopped(false)
                setLooping(true)
            },
            onEnterBack: () => {
                setWatchAnima(watchAnima)
                setStopped(true)
            }
        })
    }

    const handleStates = trigger => {
        ScrollTrigger.create({
            trigger: trigger,
            onEnter: () => setStateStopped(false)
        })
    }

    const handleStyling = trigger => {
        ScrollTrigger.create({
            trigger: trigger,
            onEnter: () => setStylingStopped(false)
        })
    }

    useEffect(() => {
        const drivens = [
            [titleImg.current, titleTexts.current],
            researchTexts.current,
            [introTexts.current, pinnedWatch.current],
            [characterTexts.current, statesEl.current],
            [commTexts.current, touchImg.current],
            [catalogTexts.current, catalogImg.current],
            [compatiTexts.current, compatiImg.current],
            [prototypeImg.current, prototypeTexts.current],
            [techniquesImg.current, techniquesTexts.current],
            [stylingImg.current, stylingTexts.current],
            conclusionTexts.current
        ]

        ScrollTrigger.create({
            trigger: pinTrigger.current,
            start: 'top center',
            end: '+=400%',
            pin: pinnedWatch.current,
            pinSpacing: false
        })
        sections.current.forEach((el, i) => {
            handleScroll(el)
            handleAnimation(el, drivens[i])
        })

        connectingAnima.forEach((anima, i) => {
            handleLottie(sections.current[i + 4], anima)
        })

        handleStates(sections.current[4])
        handleStyling(sections.current[10])

    }, [])

    useEffect(() => {
        if(isLock) {
            document.body.style.overflow = 'hidden'
            setTimeout(() => {
                setLock(false)
                document.body.style.overflow = 'unset'
            }, 1800)
        }

    }, [isLock])

    return (
        <Layout isBlack={false}>

            <Section ref={el => sections.current.push(el)}>
                <TitleImg ref={titleImg}>
                    <Image alt='a hand wearing apple watch with connecting application active' src='/connecting/titlePhoto.png' layout='fill' objectFit='cover' />
                </TitleImg>
                <TitleWrapper>
                    <H6 ref={el => titleTexts.current.push(el)}>Virtual Kinship</H6>
                    <H1 ref={el => titleTexts.current.push(el)}>CONNECTING</H1>
                </TitleWrapper>
            </Section>

            <Section ref={el => sections.current.push(el)}>
                <TextWrapper>
                    <H2 ref={el => researchTexts.current.push(el)}>{connectingData.research.heading}</H2>
                    <P ref={el => researchTexts.current.push(el)}>{connectingData.research.plainText}</P>
                </TextWrapper>
            </Section>

            <Section ref={el => sections.current.push(el)}>
                <IntroTextWrapper>
                    <H3 ref={el => introTexts.current.push(el)}>{connectingData.introduction.heading}</H3>
                    <P3 ref={el => introTexts.current.push(el)}>{connectingData.introduction.plainText}</P3>
                </IntroTextWrapper>
                <WatchArea ref={pinnedWatch} style={{zIndex: 1}}>
                    <IntroImg ref={el => watchImg.current.push(el)}>
                        <StartAnima
                            animaData={watchAnima}
                            direction={1}
                            isStopped={isStopped}
                            speed={1}
                            width={160}
                            height='auto'
                            looping={looping}
                        />
                    </IntroImg>
                    <WatchWrapper ref={el => watchImg.current.push(el)}>
                        <Image alt='apple watch' src='/connecting/appleWatchFrame.png' width='230' height='400' />
                    </WatchWrapper>
                </WatchArea>
            </Section>

            <Section ref={el => sections.current.push(el)}>
                <IntroTextWrapper>
                    <H3 ref={el => characterTexts.current.push(el)}>{connectingData.character.heading}</H3>
                    <P3 ref={el => characterTexts.current.push(el)}>{connectingData.character.plainText}</P3>
                </IntroTextWrapper>
                <ContentWrapper ref={statesEl}>
                    <States
                        animaData={statesExample.idle}
                        isStopped={isStateStopped}
                        heading={animaState.idle.heading}
                        plainText={animaState.idle.plainText}
                    />
                    <States
                        animaData={statesExample.active}
                        isStopped={isStateStopped}
                        heading={animaState.active.heading}
                        plainText={animaState.active.plainText}
                    />
                    <States
                        animaData={statesExample.sleepy}
                        isStopped={isStateStopped}
                        heading={animaState.sleepy.heading}
                        plainText={animaState.sleepy.plainText}
                    />
                </ContentWrapper>
            </Section>

            <Section ref={el => sections.current.push(el)}>
                <IntroTextWrapper>
                    <H3 ref={el => commTexts.current.push(el)}>{connectingData.communication.heading}</H3>
                    <P3 ref={el => commTexts.current.push(el)}>{connectingData.communication.plainText}</P3>
                </IntroTextWrapper>
                <ImgWrapper ref={touchImg}>
                    <Image alt='sketch of touching watch' src='/connecting/touchSketch.png' width='470' height='353' />
                </ImgWrapper>
            </Section>

            <Section ref={el => sections.current.push(el)}>
                <IntroTextWrapper>
                    <H3 ref={el => catalogTexts.current.push(el)}>{connectingData.cataloging.heading}</H3>
                    <P3 ref={el => catalogTexts.current.push(el)}>{connectingData.cataloging.plainText}</P3>
                </IntroTextWrapper>
                <ImgWrapper ref={catalogImg}>
                    <Image alt='sketch of operating watch' src='/connecting/catalogSketch.png' width='600' height='448' />
                </ImgWrapper>
            </Section>

            <Section ref={el => sections.current.push(el)}>
                <IntroTextWrapper>
                    <H3 ref={el => compatiTexts.current.push(el)}>{connectingData.compatibility.heading}</H3>
                    <P3 ref={el => compatiTexts.current.push(el)}>{connectingData.compatibility.plainText}</P3>
                </IntroTextWrapper>
                <ImgWrapper ref={compatiImg} style={{top: '20vh'}}>
                    <Image alt='smartphone version of connecting application' src='/connecting/familyList.png' width='308' height='666' />
                </ImgWrapper>
            </Section>

            <Section ref={el => sections.current.push(el)}>
                <PrototypeWrapper ref={prototypeImg}>
                    <Image alt='connecting prototype' src='/connecting/watchPrototype.png' layout='intrinsic' width='1180' height='687' />
                </PrototypeWrapper>
                <ProcessTextWrapper>
                    <H7 ref={el => prototypeTexts.current.push(el)}>process I. basic design</H7>
                    <H3 ref={el => prototypeTexts.current.push(el)}>Prototype</H3>
                    <P3 ref={el => prototypeTexts.current.push(el)}>Lorem ipsum dolor sit amet, consectetur adipiscing.</P3>
                </ProcessTextWrapper>
            </Section>

            <Section ref={el => sections.current.push(el)}>
                <TechTextWrapper>
                    <H7 ref={el => techniquesTexts.current.push(el)}>process II. techniques</H7>
                    <H3 ref={el => techniquesTexts.current.push(el)}>SwiftUI and SpriteKit</H3>
                    <P3 ref={el => techniquesTexts.current.push(el)}>some texts about techniques choosing.</P3>
                </TechTextWrapper>
                <YBGImg ref={techniquesImg}>
                    <Image alt='idle character with yellow background' src='/connecting/techBBGImg.png' width='269'
                           height='321' layout='intrinsic' quality='100'/>
                </YBGImg>
            </Section>

            <Section ref={el => sections.current.push(el)}>
                <StylingTextWrapper>
                    <H7 ref={el => stylingTexts.current.push(el)}>process III. redesign</H7>
                    <H3 ref={el => stylingTexts.current.push(el)}>Styling</H3>
                    <P3 ref={el => stylingTexts.current.push(el)}>some texts about redesign styling.</P3>
                </StylingTextWrapper>
                <StylingImg ref={stylingImg}>
                    <StartAnima
                        animaData={stylingAnima}
                        direction={1}
                        isStopped={isStylingStopped}
                        speed={1}
                        width='75vw'
                        height='auto'
                        looping={true}
                    />
                </StylingImg>
            </Section>

            <Section ref={el => sections.current.push(el)}>
                <ConclusionTextWrapper>
                    <H3 ref={el => conclusionTexts.current.push(el)}>Conclusion</H3>
                    <P3 ref={el => conclusionTexts.current.push(el)}>some texts about conclusion are going on here.</P3>
                </ConclusionTextWrapper>
            </Section>

            {/*<SectionTrigger ref={el => sections.current.push(el)} />*/}
            {/*<SectionTrigger ref={el => sections.current.push(el)} />*/}
            {/*<SectionTrigger ref={el => sections.current.push(el)} />*/}
            {/*<SectionTrigger ref={el => sections.current.push(el)} />*/}
            {/*<SectionTrigger ref={el => sections.current.push(el)} />*/}
            {/*<SectionTrigger ref={el => sections.current.push(el)} />*/}
            {/*<SectionTrigger ref={el => sections.current.push(el)} />*/}
            {/*<SectionTrigger ref={el => sections.current.push(el)} />*/}
            {/*<SectionTrigger ref={el => sections.current.push(el)} />*/}
            {/*<SectionTrigger ref={el => sections.current.push(el)} />*/}
            {/*<SectionTrigger ref={el => sections.current.push(el)} />*/}
            {/*<SectionTrigger />*/}
            {/*<SectionTrigger />*/}
            {/*<SectionTrigger />*/}

        </Layout>
    )
}

// --- global ---

const SectionTrigger = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  margin: -8px;
  z-index: -1;
  //border: 1px solid white;
  
  background-color: black;
  //scroll-snap-align: start;
`

// --- title page ---

const Section = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  margin: -8px;
  //padding: 0;
  padding-right: 17px;
  background-color: black;
  //overflow: hidden;
  
  //scroll-snap-align: start;
`

const TitleImg = styled.div``

const TitleWrapper = styled.div`
  position: absolute;
  top: 70vh;
  left: 12vw;
  
  font-family: Roboto, sans-serif;
  font-style: normal;
  color: white;
`

const H1 = styled.h1`
  margin: 0;

  font-weight: 900;
  font-size: 4.5em;
  text-transform: uppercase;
`

const H6 = styled.h6`
  margin: 0;
  font-family: Roboto Condensed, sans-serif;
  font-weight: normal;
  font-size: 2.7em;
`

// --- research page ---

const TextWrapper = styled.div`
  position: absolute;
  top: 30vh;
  left: 20vw;
  width: 60vw;
`

const H2 = styled.h2`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 4.5em;
  
  margin: 0;
  padding: 0;
  text-transform: none;
  color: white;
`
const P = styled.p`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1.2em;
  color: white;
  
`

// --- introduction ---

const WatchArea = styled.div`
    position: inherit;
  top: 50%;
`

const WatchWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  
  transform: translate(-50%, -50%);
`

const IntroTextWrapper = styled.div`
  text-align: right;
  position: absolute;
  width: 35vw;
  top: 40vh;
  right: 59%;
  
  @media all and (max-aspect-ratio: 16/10) {
    right: 60%;
  }
`

const IntroImg = styled.div`
  position: absolute;
  top: 50.1%;
  left: 49.73%;
  border: 1px solid black;
  
  transform: translate(-50%, -50%);
`

const H3 = styled(H2)`
    line-height: 1em;
  @media all and (max-aspect-ratio: 16/10) {
    font-size: 4vw;
  }
`
const P3 = styled(P)`
  margin: 0.5em 0;
`

// --- characterisation ---

const ContentWrapper = styled.div`
    width: 37vw;
    height: 28vmin;
    
    position: absolute;
    top: 15%;
    margin: auto 0;
    left: 60vw;
`

// --- intimate communication --- && --- cataloging--- && --- compatibility ---

const ImgWrapper = styled.div`
    position: absolute;
    top: 35vh;
    left: 65vw;
`

// --- prototype ---

const PrototypeWrapper = styled.div`
    position: absolute;
    margin: 15em 6em;
    padding-right: 25vw;
`

const ProcessTextWrapper = styled.div`
    position: absolute;
    top: 25vh;
    right: 4vw;
    text-align: left;
    width: 25vw;
`

const H7 = styled(H6)`
    font-size: 2em;
    color: white;
`

// --- techniques ---

const TechTextWrapper = styled.div`
    position: absolute;
    top: 36vh;
    left: 38vw;
    text-align: left;
    width: 60vw;
`

const YBGImg = styled.div`
    position: absolute;
    max-width: 18vw;
    height: auto;
    top: 32vh;
    left: 20vw;
`

// --- styling ---

const StylingTextWrapper = styled(ProcessTextWrapper)`
    top: 25vh;
`
const StylingImg = styled.div`
    position: absolute;
    max-width: 60vw;
    padding: 8em 0;
`

// --- conclusion ---

const ConclusionTextWrapper = styled(ProcessTextWrapper)`
    top: 25vh;
  right: 10vw;
  width: 35vw;
`

export default Connecting