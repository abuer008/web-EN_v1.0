import styled from 'styled-components'
import Image from 'next/image'
import Layout from '../../components/Layout'
import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import StartAnima from '../../components/StartAnima'
import { States } from "../../components/connecting/States";

import { connectingData, connectingAnima, animaState } from "../../data/Connecting";
import * as stylingAnima from '../../public/connecting/styling.json'

gsap.registerPlugin(ScrollTrigger)

const Connecting = () => {

    const [isStopped, setStopped] = useState(true)
    const [watchAnima, setWatchAnima] = useState(connectingAnima.introduction)
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

    const titleToResearch = (oldTexts, oldImg, newTexts) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sections.current[0],
                start: '20% top',
                end: 'bottom center',
                toggleActions: 'play none none reverse'
            }, onUpdate: () => setLock(true)
        })

        tl.to(oldTexts, {
            opacity: 0,
            y: -100,
            stagger: 0.2
        })
            .to(oldImg, {
                opacity: 0
            })
            .from(newTexts, {
                opacity: 0,
                y: 100,
                stagger: 0.2
            })
    }

    const researchToIntro = (oldTexts, watchImg, newTexts) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sections.current[1],
                start: '20% top',
                end: 'bottom center',
                toggleActions: 'play none none reverse'
            }, onUpdate: () => setLock(true)
        })

        tl.to(oldTexts, {
            opacity: 0,
            y: -100,
            stagger: 0.2
        }).fromTo(watchImg, {
            opacity: 0
        }, {
            opacity: 1
        }).from(newTexts, {
            opacity: 0,
            x: 100,
            stagger: 0.2
        })
    }

    const introToCharacter = (oldTexts, newTexts, states) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sections.current[2],
                start: '20% top',
                end: 'bottom center',
                toggleActions: 'play none none reverse'
            }, onUpdate: () => setLock(true)
        })
        tl
            .to(oldTexts, {
                opacity: 0,
                x: 100,
                stagger: 0.2
            })
            .fromTo(newTexts, {
                opacity: 0,
                x: 100,
                stagger: 0.2,
            }, {
                opacity: 1,
                x: 0,
                onStart: () => {
                    setStopped(false)
                }
            })
            .fromTo(states, {
                opacity: 0,
                x: -100,
                stagger: 0.1
            }, {
                opacity: 1,
                x: 0,
                onComplete: () => {
                    setStateStopped(false)
                }
            })
    }

    const characterToCommunication = (states, oldTexts, newTexts, img) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sections.current[3],
                start: '20% top',
                end: 'bottom center',
                toggleActions: 'play none none reverse'
            }, onUpdate: () => setLock(true)
        })
        tl
            .to(states, {
                opacity: 0,
                x: -100
            })
            .to(oldTexts, {
                opacity: 0,
                x: 100,
                stagger: 0.2
            })
            .fromTo(newTexts, {
                opacity: 0,
                x: 100,
                stagger: 0.2
            }, {
                opacity: 1,
                x: 0
            })
            .fromTo(img, {
                opacity: 0
            }, {
                opacity: 1
            })
    }

    const communicationToCatalog = (oldEls, newTexts, newImg) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sections.current[4],
                start: '20% top',
                end: 'bottom center',
                toggleActions: 'play none none reverse'
            }, onUpdate: () => setLock(true)
        })
        tl.to(oldEls, {
            opacity: 0,
            x: 100,
            stagger: 0.2
        })
            .fromTo(newTexts, {
                opacity: 0,
                x: 100
            }, {
                opacity: 1,
                x: 0,
                stagger: 0.2
            })
            .fromTo(newImg, {
                opacity: 0
            }, {
                opacity: 1
            })
    }

    const catalogToCompati = (oldTexts, oldImg, newTexts, newImg) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sections.current[5],
                start: '20% top',
                end: 'bottom center',
                toggleActions: 'play none none reverse'
            }, onUpdate: () => setLock(true)
        })

        tl.to(oldImg, {
            opacity: 0
        })
            .to(oldTexts, {
                opacity: 0,
                x: 100,
                stagger: 0.2
            })
            .fromTo(newTexts, {
                opacity: 0,
                x: 100
            }, {
                opacity: 1,
                x: 0,
                stagger: 0.2
            })
            .fromTo(newImg, {
                opacity: 0
            }, {
                opacity: 1
            })
    }

    const compatiToPrototype = (oldEls, newImg, newTexts) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sections.current[6],
                start: '20% top',
                end: 'bottom center',
                toggleActions: 'play none none reverse'
            }, onUpdate: () => setLock(true)
        })

        tl.to(oldEls, {
            opacity: 0,
            y: -100
        })
            .fromTo(newImg, {
                opacity: 0
            }, {
                opacity: 1
            })
            .fromTo(newTexts, {
                opacity: 0,
                y: -100
            }, {
                opacity: 1,
                y: 0,
                stagger: 0.2
            })
    }

    const prototypeToTech = (oldEls, newImg, newTexts) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sections.current[7],
                start: '20% top',
                end: 'bottom center',
                toggleActions: 'play none none reverse'
            }, onUpdate: () => setLock(true)
        })
        tl.to(oldEls, {
            opacity: 0,
            y: -100,
            stagger: 0.2
        })
            .fromTo(newImg, {
                opacity: 0
            }, {
                opacity: 1
            })

            .fromTo(newTexts, {
                opacity: 0,
                y: -100
            }, {
                opacity: 1,
                y: 0,
                stagger: 0.2
            })
    }

    const techToStyling = (oldEls, newImg, newTexts) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sections.current[8],
                start: '20% top',
                end: 'bottom center',
                toggleActions: 'play none none reverse'
            }, onUpdate: () => setLock(true)
        })

        tl.to(oldEls, {
            opacity: 0,
            y: -100,
            stagger: 0.2
        })
            .from(newImg, {
                opacity: 0,
                onComplete: () => setStylingStopped(false)
            })
            .from(newTexts, {
                opacity: 0,
                y: -100,
                stagger: 0.2
            })
    }

    const stylingToConclusion = (oldEls, newTexts) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sections.current[9],
                start: '20% top',
                end: 'bottom center',
                toggleActions: 'play none none reverse'
            }, onUpdate: () => setLock(true)
        })

        tl.to(oldEls, {
            opacity: 0,
            y: -100,
            stagger: 0.2
        })
            .from(newTexts, {
                opacity: 0,
                y: -100
            })
    }

    useEffect(() => {
        gsap.defaults({ease: 'power1.inOut', duration: 1})
        if(titleImg.current) {
            titleToResearch(titleTexts.current, titleImg.current, researchTexts.current)
            researchToIntro(researchTexts.current, watchImg.current, introTexts.current)
            introToCharacter(introTexts.current, characterTexts.current, statesEl.current)
            characterToCommunication(statesEl.current, characterTexts.current, commTexts.current, touchImg.current)
            communicationToCatalog([commTexts.current, touchImg.current], catalogTexts.current, catalogImg.current)
            catalogToCompati(catalogTexts.current, catalogImg.current, compatiTexts.current, compatiImg.current)
            compatiToPrototype([compatiTexts.current, compatiImg.current, watchImg.current], prototypeImg.current, prototypeTexts.current.reverse())
            prototypeToTech([prototypeImg.current, prototypeTexts.current.reverse()], techniquesImg.current, techniquesTexts.current.reverse())
            techToStyling([techniquesTexts.current.reverse(), techniquesImg.current], stylingImg.current, stylingTexts.current.reverse())
            stylingToConclusion([stylingTexts.current.reverse(), stylingImg.current], conclusionTexts.current.reverse())
        }
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

            <Section>
                <TitleImg ref={titleImg}>
                    <Image src='/connecting/titlePhoto.png' layout='fill' objectFit='cover' />
                </TitleImg>
                <TitleWrapper>
                    <H6 ref={el => titleTexts.current.push(el)}>Virtual Kinship</H6>
                    <H1 ref={el => titleTexts.current.push(el)}>CONNECTING</H1>
                </TitleWrapper>
            </Section>

            <Section>
                <TextWrapper>
                    <H2 ref={el => researchTexts.current.push(el)}>{connectingData.research.heading}</H2>
                    <P ref={el => researchTexts.current.push(el)}>{connectingData.research.plainText}</P>
                </TextWrapper>
            </Section>

            <Section>
                <IntroTextWrapper>
                    <H3 ref={el => introTexts.current.push(el)}>{connectingData.introduction.heading}</H3>
                    <P3 ref={el => introTexts.current.push(el)}>{connectingData.introduction.plainText}</P3>
                </IntroTextWrapper>
            </Section>

            <Section>
                <IntroTextWrapper>
                    <H3 ref={el => characterTexts.current.push(el)}>{connectingData.character.heading}</H3>
                    <P3 ref={el => characterTexts.current.push(el)}>{connectingData.character.plainText}</P3>
                </IntroTextWrapper>
                <ContentWrapper ref={statesEl}>
                    <States
                        animaData={connectingAnima.idleExample}
                        isStopped={isStateStopped}
                        heading={animaState.idle.heading}
                        plainText={animaState.idle.plainText}
                    />
                    <States
                        animaData={connectingAnima.activeExample}
                        isStopped={isStateStopped}
                        heading={animaState.active.heading}
                        plainText={animaState.active.plainText}
                    />
                    <States
                        animaData={connectingAnima.sleepyExample}
                        isStopped={isStateStopped}
                        heading={animaState.sleepy.heading}
                        plainText={animaState.sleepy.plainText}
                    />
                </ContentWrapper>
            </Section>

            <Section>
                <IntroTextWrapper>
                    <H3 ref={el => commTexts.current.push(el)}>{connectingData.communication.heading}</H3>
                    <P3 ref={el => commTexts.current.push(el)}>{connectingData.communication.plainText}</P3>
                </IntroTextWrapper>
                <ImgWrapper ref={touchImg}>
                    <Image src='/connecting/touchSketch.png' width='470' height='353' />
                </ImgWrapper>
            </Section>

            <Section>
                <IntroTextWrapper>
                    <H3 ref={el => catalogTexts.current.push(el)}>{connectingData.cataloging.heading}</H3>
                    <P3 ref={el => catalogTexts.current.push(el)}>{connectingData.cataloging.plainText}</P3>
                </IntroTextWrapper>
                <ImgWrapper ref={catalogImg}>
                    <Image src='/connecting/catalogSketch.png' width='600' height='448' />
                </ImgWrapper>
            </Section>

            <Section>
                <IntroTextWrapper>
                    <H3 ref={el => compatiTexts.current.push(el)}>{connectingData.compatibility.heading}</H3>
                    <P3 ref={el => compatiTexts.current.push(el)}>{connectingData.compatibility.plainText}</P3>
                </IntroTextWrapper>
                <ImgWrapper ref={compatiImg} style={{top: '20vh'}}>
                    <Image src='/connecting/familyList.png' width='308' height='666' />
                </ImgWrapper>
            </Section>

            <Section>
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
                    <Image src='/connecting/appleWatchFrame.png' width='230' height='400' />
                </WatchWrapper>
            </Section>

            <Section>
                <PrototypeWrapper ref={prototypeImg}>
                    <Image src='/connecting/watchPrototype.png' layout='intrinsic' width='1180' height='687' />
                </PrototypeWrapper>
                <ProcessTextWrapper>
                    <H7 ref={el => prototypeTexts.current.push(el)}>process I. basic design</H7>
                    <H3 ref={el => prototypeTexts.current.push(el)}>Prototype</H3>
                    <P3 ref={el => prototypeTexts.current.push(el)}>Lorem ipsum dolor sit amet, consectetur adipiscing.</P3>
                </ProcessTextWrapper>
            </Section>

            <Section>
                <TechTextWrapper>
                    <H7 ref={el => techniquesTexts.current.push(el)}>process II. techniques</H7>
                    <H3 ref={el => techniquesTexts.current.push(el)}>SwiftUI and SpriteKit</H3>
                    <P3 ref={el => techniquesTexts.current.push(el)}>some texts about techniques choosing.</P3>
                </TechTextWrapper>
                <YBGImg ref={techniquesImg}>
                    <Image alt='idle character with yellow background' src='/connecting/techYBGImg.svg' width='269'
                           height='321' layout='intrinsic'/>
                </YBGImg>
            </Section>

            <Section>
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

            <Section>
                <ProcessTextWrapper>
                    <H3 ref={el => conclusionTexts.current.push(el)}>Conclusion</H3>
                    <P3 ref={el => conclusionTexts.current.push(el)}>some texts about conclusion are going on here.</P3>
                </ProcessTextWrapper>
            </Section>

            <SectionTrigger ref={el => sections.current.push(el)} />
            <SectionTrigger ref={el => sections.current.push(el)} />
            <SectionTrigger ref={el => sections.current.push(el)} />
            <SectionTrigger ref={el => sections.current.push(el)} />
            <SectionTrigger ref={el => sections.current.push(el)} />
            <SectionTrigger ref={el => sections.current.push(el)} />
            <SectionTrigger ref={el => sections.current.push(el)} />
            <SectionTrigger ref={el => sections.current.push(el)} />
            <SectionTrigger ref={el => sections.current.push(el)} />
            <SectionTrigger ref={el => sections.current.push(el)} />
            <SectionTrigger ref={el => sections.current.push(el)} />
            <SectionTrigger />
            <SectionTrigger />
            <SectionTrigger />

        </Layout>
    )
}

// --- global ---

const SectionTrigger = styled.div`
  position: relative;
  width: 100vw;
  height: 40vh;
  margin: -8px;
  z-index: -1;
  //border: 1px solid white;
  
  background-color: black;
  scroll-snap-align: start;
`

// --- title page ---

const Section = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  margin: -8px;
  padding: 0;
  overflow: hidden;
  
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
  font-size: 1.4em;
  color: white;
  
`

// --- introduction ---

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
  right: 59vw;
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
`
const P3 = styled(P)`
  margin: 0.5em 0;
`

// --- characterisation ---

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 27vw;
    height: 50vh;
    
    position: absolute;
    top: 10vh;
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
    top: 62vh;
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
    top: 55vh;
`
const StylingImg = styled.div`
    position: absolute;
    max-width: 60vw;
    padding: 8em 0;
`

export default Connecting