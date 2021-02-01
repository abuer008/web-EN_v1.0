import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {ScrollToPlugin} from 'gsap/ScrollToPlugin'
import Layout from '../../components/Layout'
import {BasicEl} from "../../components/aal/BasicEl";
import {TlText} from "../../components/aal/TlText";
import {TimeGraph} from '../../components/aal/TimeGraph'
import styled from 'styled-components'
import Image from 'next/image'
import ReactPlayer from "react-player"
import {useState} from 'react'
import {useRef, useEffect} from 'react'


import {AALData, AALs, outputContents} from "../../data/AAL";
import {OutputComponent} from "../../components/aal/OutputComponent";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const AmbientAssistedLiving = () => {

    const [isLock, setLock] = useState(false)
    const [visible, setVisible] = useState(false)
    const [isPlay, setIsPlay] = useState(false)

    const sectionRefs = useRef([])
    const video = useRef(null)
    const text = useRef([])
    const newText = useRef([])

    const aalIntro = useRef([])
    const introImg = useRef(null)

    const hardwareTexts = useRef([])
    const hardwareImgs = useRef([])

    const pinEl = useRef(null)
    const timeGraphs = useRef([])
    const comparisonsTexts = useRef([])

    const outputImgs = useRef([])
    const outputTexts = useRef([])

    const pinOutputImg = useRef(null)

    const UIImgs = useRef([])
    const popUp = useRef(null)

    const prototype = useRef([])

    const conclusion = useRef([])

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

    const goToSection = el => {
        gsap.to(window, {
            scrollTo: {y: el, autoKill: false},
            ease: 'power1.out',
            duration: 0.75
        })
    }

    const handleScroll = (trigger) => {
        ScrollTrigger.create({
            trigger: trigger,
            start: 'top 85%',
            onEnter: () => {
                goToSection(trigger)
            },
            scrub: true
        })
    }

    const firstPageAnima = (video, text, newText) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRefs.current[0],
                start: '20% top',
                end: 'bottom center',
                toggleActions: 'play none none reverse'
            }, onUpdate: () => setLock(true)
            // onComplete: () => setLock(false),
            // onReverseComplete: () => setLock(false)
        })
        tl.to(video, {
            opacity: 0
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

    const secondPageAnima = (oldText, aalIntro, introImg) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRefs.current[1],
                start: '10% 10%',
                end: 'bottom center',
                toggleActions: 'play none none reverse'
            },
            onUpdate: () => setLock(true)
            // onComplete: () => setLock(false),
            // onReverseComplete: () => setLock(false)
        })
        tl.to(oldText, {
            opacity: 0,
            y: -100,
            stagger: 0.2
        }, "-=0.5")
            .fromTo(aalIntro, {
                opacity: 0,
                y: 100,
            }, {
                opacity: 1,
                y: 0,
                stagger: 0.2
            }, "-=0.5")
            .from(introImg, {
                opacity: 0,
                y: '20vh',
                duration: 1.5,
                ease: 'power1.out'
            }, "-=0.8")
    }

    const thirdPageAnima = (oldTexts, oldImg, newText, newImgs) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRefs.current[2],
                start: '10% top',
                end: 'bottom center',
                toggleActions: 'play none none reverse'
            },
            onUpdate: () => setLock(true)
            // onComplete: () => setLock(false),
            // onReverseComplete: () => setLock(false)
        })
        tl
            .to(oldTexts, {
                opacity: 0,
                y: -100,
                stagger: 0.2
            }, "-=0.5")
            .to(oldImg, {
                opacity: 0
            }, "-=1")
            .from(newText, {
                opacity: 0,
                y: 100,
                stagger: 0.2
            }, '-=0.5')
            .from(newImgs, {
                opacity: 0,
                y: 100,
                stagger: 0.5
            }, '-=1')
    }

    const fourthPageAnima = (oldTexts, oldImgs, newTexts, newImgs) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRefs.current[3],
                start: '10% top',
                end: 'bottom center',
                toggleActions: 'play none none reverse'
            },
            onUpdate: () => setLock(true)
            // onComplete: () => setLock(false),
            // onReverseComplete: () => setLock(false)
        })
        tl.to(oldTexts, {
            opacity: 0,
            y: -100,
            stagger: 0.2
        }, '-=1')
            .to(oldImgs, {
                opacity: 0,
                y: -100,
                stagger: 0.2
            }, '-=0.5')
            .from(newImgs, {
                opacity: 0,
                y: 100,
                stagger: 0.2
            }, '-=0.3')
            .from(newTexts, {
                opacity: 0,
                y: 100,
                stagger: 0.2
            }, "-=0.8")
    }

    const fifthPageAnima = (oldImgs, oldTexts, newImgs, newTexts) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRefs.current[4],
                start: '10% top',
                end: 'bottom center',
                toggleActions: 'play none none reverse'
            },
            onUpdate: () => setLock(true)
            // onComplete: () => setLock(false),
            // onReverseComplete: () => setLock(false)
        })
        tl.to(oldTexts, {
            opacity: 0,
            y: -100,
            stagger: 0.2
        })
            .to(oldImgs, {
                opacity: 0
            }, '-=0.8')
            .from(newImgs, {
                opacity: 0,
                y: 100,
                stagger: 0.2
            }, "-=0.5")
            .from(newTexts, {
                opacity: 0,
                y: 100,
                stagger: 0.2
            }, '-=0.8')
    }

    const sixthPageAnima = (oldTexts, imgs, video, popUp) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRefs.current[5],
                start: '10% top',
                end: 'bottom center',
                toggleActions: 'play none none reverse'
            },
            onUpdate: () => setLock(true)
        })
        tl.to(oldTexts, {
            x: 100,
            opacity: 0
        })
            .to(imgs, {
                x: '+=45vw',
                ease: 'power1.inOut',
                stagger: 0.1
            }, '-=0.5')
            .to(video, {
                opacity: 1,
            })
            .from(popUp, {
                height: 0,
                ease: 'power3.out'
            }, '-=0.8')
    }

    const seventhPageAnima = (oldEls, newEls, triggerNumber) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRefs.current[triggerNumber],
                start: '10% top',
                end: 'bottom center',
                toggleActions: 'play none none reverse'
            },
            onUpdate: () => setLock(true)
        })
        tl.to(oldEls, {
            opacity: 0
        })
            .fromTo(newEls, {
                opacity: 0
            }, {
                opacity: 1,
                stagger: 0.2
            })
    }

    const disableTouchEvent = e => {
        e.preventDefault()
        setVisible(true)
    }

    const defaultsAnima = (driver, driven) => {
        gsap.from(driven, {
            scrollTrigger: {
                trigger: driver,
                start: 'top 85%',
                end: 'bottom center',
                toggleActions: 'play complete none reverse'
            },
            opacity: 0,
            y: 100,
            duration: 1,
            delay: 0.5,
            stagger: 0.3
        })
    }

    const dotsAnima = () => {
        ScrollTrigger.create({
            trigger: sectionRefs.current[5],
            start: 'center center',
            end: '+=200%',
            pin: pinEl.current,
            pinSpacing: false,
        })
        // gsap.fromTo(timeGraphs.current, {
        //     opacity: 1,
        //     y: 0,
        //     stagger: 0.2,
        //     scrollTrigger: {
        //         trigger: sectionRefs.current[6],
        //         start: 'top 90%',
        //         end: 'bottom center',
        //         toggleActions: 'play none none reverse'
        //     }
        // }, {
        //     opacity: 0,
        //     y: 100
        // })
    }

    const outputAnima = () => {
        gsap.to([timeGraphs.current[1], timeGraphs.current[2], timeGraphs.current[3]], {
            opacity: 0,
            duration: 0.8,
            scrollTrigger: {
                trigger: sectionRefs.current[6],
                start: 'top 90%',
                end: 'bottom center',
                toggleActions: 'play none none reverse'
            }
        })

        defaultsAnima(sectionRefs.current[6], [outputImgs.current, outputTexts.current])
    }

    const dotCloudAnima = () => {
        ScrollTrigger.create({
            trigger: sectionRefs.current[6],
            start: 'center center',
            end: '+=100%',
            pin: pinOutputImg.current
        })
        const tl = gsap.timeline({
            duration: 0.5,
            scrollTrigger: {
                trigger: sectionRefs.current[7],
                start: 'top 90%',
                end: 'center center',
                toggleActions: 'play complete none reverse',
                onEnter: () => setIsPlay(true)
            }
        })
        tl.to([pinOutputImg.current, timeGraphs.current], {
            opacity: 0,
            y: -100,
            duration: 0.5
        })
    }

    const graphicAnima = () => {
        gsap.timeline({duration: 1, scrollTrigger: {
            trigger: sectionRefs.current[7],
                start: 'top 50%',
                end: 'bottom center',
                toggleActions: 'play complete none reverse',
                onEnter: () => setIsPlay(true)
            }})
        .from(UIImgs.current, {
            opacity: 0,
            y: 100,
            stagger: 0.2,
            duration: 1,
        })
            .from(popUp.current, {
                y: '+=100%',
                delay: 0.5,
                duration: 1.2,
                ease: 'elastic.out(0.2, 0.25)'
            })
    }

    useEffect(() => {
        // gsap.defaults({ease: 'power1.inOut', duration: 1})
        // if (video.current) {
        //     firstPageAnima(video.current, text.current, newText.current)
        //     secondPageAnima(newText.current, aalIntro.current, introImg.current)
        //     thirdPageAnima(aalIntro.current, introImg.current, hardwareTexts.current, hardwareImgs.current)
        //     fourthPageAnima(hardwareTexts.current, hardwareImgs.current, comparisonsTexts.current, timeGraphs.current)
        //     fifthPageAnima([timeGraphs.current[1], timeGraphs.current[2]], comparisonsTexts.current, outputImgs.current, outputTexts.current)
        //     sixthPageAnima(outputTexts.current, [timeGraphs.current, outputImgs.current], video.current, popUp.current)
        //     seventhPageAnima([video.current, timeGraphs.current, outputImgs.current, popUp.current], prototype.current, 6)
        //     seventhPageAnima(prototype.current, conclusion.current, 7)
        // }
        // document.body.addEventListener('touchmove', disableTouchEvent, {passive: false})
        // return () => {
        //     document.body.removeEventListener('touchmove', disableTouchEvent)
        // }

        gsap.defaults({ease: 'power1.out'})

        defaultsAnima(sectionRefs.current[2], newText.current)
        defaultsAnima(sectionRefs.current[3], [aalIntro.current, introImg.current])
        defaultsAnima(sectionRefs.current[4], [hardwareTexts.current, hardwareImgs.current])
        defaultsAnima(sectionRefs.current[5], [comparisonsTexts.current, timeGraphs.current])
        dotsAnima()
        outputAnima()
        dotCloudAnima()
        graphicAnima()

        sectionRefs.current.forEach((ref, i) => handleScroll(ref))

    }, [])

    useEffect(() => {
        if (isLock) {
            document.body.style.overflow = 'hidden'
            setTimeout(() => {
                setLock(false)
                document.body.style.overflow = 'unset'
            }, 1800)
        }
        console.log("locked animation: " + isLock)
    }, [isLock])

    const handleWheel = e => {
        console.log(e.deltaY)
    }

    return (
        <Layout>
            <Section style={{backgroundColor: '#efefef', position: 'fixed', height: '100vh'}}/>
            <Section ref={el => sectionRefs.current.push(el)} style={{position: 'fixed', backgroundColor: 'rgba(0, 0, 0, 0)', width: '100%', zIndex: '0'}}>
                <VideoWrapper ref={video}>
                    <ReactPlayer
                        alt='point cloud human body with impaired parts'
                        url='/aal/titleVideo_lowRes.mp4'
                        playing
                        width="108%"
                        height="auto"
                    />
                </VideoWrapper>
            </Section>


            {/*{// --- title page --- }*/}

            <Section style={{backgroundColor: 'rgba(0, 0, 0, 0)'}} ref={el => sectionRefs.current.push(el)}>
                <TlArea ref={el => text.current.push(el)}>
                    <TlContent>
                        <IconWrapper>
                            <Image alt='home icon' src='/aal/Home.svg' width='136' height='146'/>
                        </IconWrapper>
                        <H1>Ambient Assisted Living</H1>
                    </TlContent>
                    <BasicEl style={tlStyle}/>
                </TlArea>

                {visible ? <Warning>Sorry, the demonstration is not for touchscreen optimized. Please visit on a desktop
                    computer.</Warning> : <>
                    <GArea ref={el => text.current.push(el)}>
                        <GIconWrapper>
                            <Image alt='gesture icon' src='/aal/gestureIcon.svg' width='52' height='73'/>
                        </GIconWrapper>
                        <BasicEl style={gStyle}/>
                        <TlText title={AALData[0].title} plainText={AALData[0].plainText}/>
                    </GArea>

                    <VArea ref={el => text.current.push(el)}>
                        <VIconWrapper>
                            <Image alt='virus icon' src='/aal/virusIcon.svg' width='70' height='70'/>
                        </VIconWrapper>
                        <BasicEl style={gStyle}/>
                        <TlText title={AALData[1].title} plainText={AALData[1].plainText}/>
                    </VArea>

                    <PArea ref={el => text.current.push(el)}>
                        <PIconWrapper>
                            <Image alt='personal icon' src='/aal/personalIcon.svg' width='68' height='52'/>
                        </PIconWrapper>
                        <BasicEl style={gStyle}/>
                        <TlText title={AALData[2].title} plainText={AALData[2].plainText}/>
                    </PArea>
                </>
                }
            </Section>

            {/*--- crisis of care services ---*/}

            <Section ref={el => sectionRefs.current.push(el)}>
                <SecondPageText>
                    <BigText ref={el => newText.current.push(el)}>{AALs.crisis.heading}</BigText>
                    <SmallText ref={el => newText.current.push(el)}>{AALs.crisis.plainText}</SmallText>
                    <SmallText ref={el => newText.current.push(el)}>{AALs.crisis.plainText2}</SmallText>
                </SecondPageText>
            </Section>

            {/*--- concept of aal ---*/}

            <Section ref={el => sectionRefs.current.push(el)}>
                <ThirdPage>
                    <ThirdPageText>
                        <TitleWrapper ref={el => aalIntro.current.push(el)}>
                            <BasicEl style={aalIntroStyle}/>
                            <AALIntro>The Concept of <Strong>AAL</Strong></AALIntro>
                        </TitleWrapper>
                        <ThirdSmallText ref={el => aalIntro.current.push(el)}>{AALs.aalIntro.plainText}</ThirdSmallText>
                    </ThirdPageText>
                    <AALImageWrapper ref={introImg}>
                        <Image alt='old lady with an nurse operating an ipad' src='/aal/aalIntro.jpg' width='502'
                               height='354'/>
                    </AALImageWrapper>
                </ThirdPage>
            </Section>

            {/*--- hardware intro ---*/}

            <Section ref={el => sectionRefs.current.push(el)}>
                <FourthPageText>
                    <FourthBigText ref={el => hardwareTexts.current.push(el)}>{AALs.hardware.heading}</FourthBigText>
                    <FourthSmallText
                        ref={el => hardwareTexts.current.push(el)}>{AALs.hardware.plainText}</FourthSmallText>
                </FourthPageText>
                <FourthImgWrapper>
                    <PatchImg ref={el => hardwareImgs.current.push(el)}>
                        <Image alt='tracking patch' src='/aal/hardwarePatch.png' width='720' height='474'/>
                    </PatchImg>
                </FourthImgWrapper>
            </Section>

            {/*--- data comparison ---*/}

            <Section ref={el => sectionRefs.current.push(el)} style={{zIndex: 1}}>
                <FifthPageText>
                    <FifthBigText
                        ref={el => comparisonsTexts.current.push(el)}>{AALs.dataComparison.heading}</FifthBigText>
                    <FifthSmallText
                        ref={el => comparisonsTexts.current.push(el)}>{AALs.dataComparison.plainText}</FifthSmallText>
                </FifthPageText>
                <TimeGraphWrapper ref={pinEl}>
                    <AnimaDriven ref={el => timeGraphs.current.push(el)}>
                        <TimeGraph isMain={true}/>
                    </AnimaDriven>

                    <ArrowWrapper ref={el => timeGraphs.current.push(el)}>
                        <Image alt='arrow icon' src='/aal/dataComparisonArrow.svg' width='20' height='60'/>
                    </ArrowWrapper>

                    <AnimaDriven ref={el => timeGraphs.current.push(el)}>
                        <Text>auto generated weekly report</Text>
                    </AnimaDriven>

                    <AnimaDriven ref={el => timeGraphs.current.push(el)} style={{padding: '20em 0'}}>
                        <TimeGraph isMain={false}/>
                    </AnimaDriven>

                </TimeGraphWrapper>
            </Section>

            {/*--- output ---*/}

            <Section ref={el => sectionRefs.current.push(el)}>
                <OutputImgWrapper ref={pinOutputImg}>
                    <MainConcernArea ref={el => outputImgs.current.push(el)} style={{top: '45vh'}}>
                        <OutputComponent marginX='13px' marginY='23px' number={20} numberText='Times'
                                         TlHeading={outputContents.mainConcern.heading}
                                         TlPlain={outputContents.mainConcern.plainText}/>
                    </MainConcernArea>

                    <MainConcernArea ref={el => outputImgs.current.push(el)} style={{top: '62vh'}}>
                        <OutputComponent marginX='13px' marginY='26px' number={3} numberText='Hours'
                                         TlHeading={outputContents.gesture.heading}
                                         TlPlain={outputContents.gesture.plainText}/>
                    </MainConcernArea>

                    <MainConcernArea ref={el => outputImgs.current.push(el)} style={{top: '79vh'}}>
                        <OutputComponent marginX='13px' marginY='16px' number={90} numberText='Minutes'
                                         TlHeading={outputContents.activity.heading}
                                         TlPlain={outputContents.activity.plainText}/>
                    </MainConcernArea>
                </OutputImgWrapper>

                <OutputWrapper>
                    <FifthBigText ref={el => outputTexts.current.push(el)}>{AALs.output.heading}</FifthBigText>
                    <FifthSmallText ref={el => outputTexts.current.push(el)}>{AALs.output.plainText}</FifthSmallText>
                </OutputWrapper>
            </Section>

            {/*--- particles graphic ---*/}

            <Section ref={el => sectionRefs.current.push(el)}>
                <VideoWrapper>
                    <ReactPlayer
                        alt='point cloud body with sleep posture'
                        url='/aal/titleVideo_lowRes.mp4'
                        playing={isPlay}
                        width='108%'
                        height='auto'
                    />
                </VideoWrapper>
                <UIWrapper>
                    <AnimaDriven ref={el => UIImgs.current.push(el)} style={{margin: '10vh 0'}}>
                        <TimeGraph isMain={true}/>
                    </AnimaDriven>
                    <GraphicUIWrapper>
                        <AnimaDriven ref={el => UIImgs.current.push(el)}>
                            <OutputComponent marginX='13px' marginY='23px' number={20} numberText='Times'
                                             TlHeading={outputContents.mainConcern.heading}
                                             TlPlain={outputContents.mainConcern.plainText}/>
                        </AnimaDriven>
                        <AnimaDriven ref={el => UIImgs.current.push(el)}>
                            <OutputComponent marginX='13px' marginY='26px' number={3} numberText='Hours'
                                             TlHeading={outputContents.gesture.heading}
                                             TlPlain={outputContents.gesture.plainText}/>
                        </AnimaDriven>
                        <AnimaDriven ref={el => UIImgs.current.push(el)}>
                            <OutputComponent marginX='13px' marginY='16px' number={90} numberText='Minutes'
                                             TlHeading={outputContents.activity.heading}
                                             TlPlain={outputContents.activity.plainText}/>
                        </AnimaDriven>
                    </GraphicUIWrapper>
                </UIWrapper>
                <PopupWrapper ref={popUp}>
                    <SixthBigText>{AALs.infographic.heading}</SixthBigText>
                    <SixthSmallText>{AALs.infographic.plainText}</SixthSmallText>
                </PopupWrapper>
            </Section>


            {/*--- prototype ---*/}

            <Section ref={el => sectionRefs.current.push(el)}>
                <ProtoWrapper>
                    <SeventhPageText>
                        <SeventhBigText ref={el => prototype.current.push(el)}>{AALs.prototype.heading}</SeventhBigText>
                        <SeventhSmallText
                            ref={el => prototype.current.push(el)}>{AALs.prototype.plainText}</SeventhSmallText>
                    </SeventhPageText>
                    <ProtoVideoWrapper ref={el => prototype.current.push(el)}>

                    </ProtoVideoWrapper>
                </ProtoWrapper>
            </Section>

            <Section ref={el => sectionRefs.current.push(el)}>
                <ConclusionWrapper>
                    <EighthPageText>
                        <EighthBigText ref={el => conclusion.current.push(el)}>{AALs.conclusion.heading}</EighthBigText>
                        <EighthSmallText
                            ref={el => conclusion.current.push(el)}>{AALs.conclusion.plainText}</EighthSmallText>
                    </EighthPageText>
                </ConclusionWrapper>
            </Section>


            {/*<Section ref={el => sectionRefs.current.push(el)}/>*/}
            {/*<Section ref={el => sectionRefs.current.push(el)}/>*/}
            {/*<Section ref={el => sectionRefs.current.push(el)}/>*/}
            {/*<Section ref={el => sectionRefs.current.push(el)}/>*/}
            {/*<Section ref={el => sectionRefs.current.push(el)}/>*/}
            {/*<Section ref={el => sectionRefs.current.push(el)}/>*/}
            {/*<Section ref={el => sectionRefs.current.push(el)}/>*/}
            {/*<Section/>*/}
            {/*<Section/>*/}
            {/*<Section />*/}
        </Layout>)
}


// --- Main styles ---

const AnimaDriven = styled.div`
    position: relative;
  width: 480px;
  height: 120px;
`

const TSection = styled.div`
  position: relative;
  overflow: hidden;
`

const Section = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  margin: -8px;
  padding-right: 17px;
  overflow: hidden;
  //z-index: 0;
  background-color: #efefef;
  //border: 1px solid #555;

`

const Warning = styled.h3`
  position: absolute;
  right: 11vw;
  width: 420px;
  margin: 0;
  padding: 1em;
  background-color: #888;
  color: white;
  border-radius: 30px;

  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 2.4rem;
`

// --- TitlePage ---

const VideoWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: auto;
`

const TlArea = styled.div`
  //position: fixed;
  position: relative;
  top: 13vh;
  left: 62vw;
  //right: 15vw;
  width: 426px;
  z-index: 1;
  transition: 0.3s ease-out;

  :hover {
    transform: scale(1.05);
    cursor: default;
  }
`

const GArea = styled(TlArea)`
  top: 40vh;
`

const VArea = styled(GArea)`
  top: 57vh;
`
const PArea = styled(GArea)`
  top: 74vh;
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

// --- research page ---


const SecondPageText = styled.div`
  //position: fixed;
  position: relative;
  top: 20vh;
  left: 25vw;
`

const BigText = styled.h2`
  //position: absolute;
  width: 50vw;
  font-family: Roboto, sans-serif;
  font-weight: 900;
  font-size: 3.5vw;
  margin: 0;
`

const SmallText = styled.p`
  width: 60vw;
  font-family: Roboto, sans-serif;
  font-weight: 300;
  font-size: 1.2em;
  line-height: 1.4em;
`

// --- AAL Intro ---

const ThirdPage = styled.div`
  font-family: Roboto, sans-serif;
  font-style: normal;
`

const ThirdPageText = styled.div`
  position: absolute;
  top: 50vh;
  right: 1300px;
`

const TitleWrapper = styled.div`
  position: relative;
  bottom: 200px;
  left: 80px;
`

const AALIntro = styled(BigText)`
  position: absolute;
  width: 620px;
  top: 30px;
  //left: -30px;
  font-weight: 200;
  text-align: right;
`

const Strong = styled.strong`
  font-weight: bold;
`

const ThirdSmallText = styled(SmallText)`
  //position: absolute;
  position: absolute;
  text-align: justify;
  width: 40vw;
  left: 35px;
  top: -50px;
`

const AALImageWrapper = styled.div`
  //position: fixed;
  position: absolute;
  top: 32vh;
  right: 0;
`

// --- hardware page ---

const FourthPageText = styled.div`
  position: relative;
  top: 30vh;
  left: 55%;
  z-index: 1;
`

const FourthBigText = styled(BigText)`
  width: 40vw;
`

const FourthSmallText = styled(SmallText)`
  width: 35vw;
  text-align: justify;
`

const FourthImgWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 25%;
  width: 50%;

  transform: translate(-50%, -50%);
`

const PatchImg = styled.div``

// --- data comparison ---

const TimeGraphWrapper = styled.div`
  position: relative;
  left: 10vw;
  //top: 10vh;
  bottom: 30vh;
  height: 100vh;
  width: 480px;
  
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  
  justify-content: space-evenly;
  align-items: center;

`

const ArrowWrapper = styled.div`
  position: absolute;
  margin: auto;
  //top: 46vh;
  //left: 23vw;
  //z-index: 1;
`

const FifthPageText = styled(FourthPageText)`
  top: 20vh;
`

const FifthBigText = styled(FourthBigText)``
const FifthSmallText = styled(FourthSmallText)``

const Text = styled(SmallText)`
    font-weight: normal;
  margin-top: 25vh;
`


// --- explicit output ---

const OutputWrapper = styled(FifthPageText)`
  top: 15vh;
`

const OutputImgWrapper = styled.div`
  position: absolute;
`


const MainConcernArea = styled.div`
  display: flex;
  flex-direction: row;

  position: relative;
  left: 10vw;
  width: 426px;
  z-index: 1;
  transition: 0.3s ease-out;

  :hover {
    transform: scale(1.05);
    cursor: default;
  }
`
const ConcernWrapper = styled.div`
`

const TextWrapper = styled.div`
  position: absolute;

  font-family: Roboto, sans-serif;
  font-style: normal;
  text-align: center;
`

const H1Number = styled.h1`
  font-weight: 900;
  font-size: 4em;
  margin: 0;
`

const H1Small = styled.p`
  font-weight: bold;
  font-size: 1.5em;
  margin: 0;

  line-height: .5em;
`

const UITexts = styled.div`
`


// --- infographic ---

const UIWrapper = styled.div`
  position: relative;
  height: 100%;
  //top: -10vh;
  left: 60vw;
  //display: flex;
  //flex-direction: column;

  //align-items: center;
  //justify-content: flex-end;
`
const GraphicUIWrapper = styled.div`
  height: 65%;
  display: flex;
  flex-direction: column;

  justify-content: space-evenly;
  align-items: flex-start;
`

const PopupWrapper = styled.div`
  position: absolute;
  bottom: -10vh;
  left: 5vw;
  width: 28vw;
  height: 50vh;
  padding: 50px;

  background: rgba(190, 190, 190, 0.35);
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(12px);
  border-radius: 2em;
`

const SixthBigText = styled.h2`
  position: relative;
  width: 100%;

  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 4em;

  padding: 0;
  margin: auto;
`
const SixthSmallText = styled.p`
  position: relative;
  //margin: auto;
  width: 100%;
  text-align: justify;

  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 1.2em;
  line-height: 1.4em;
  //width: 20vw;
`

// --- prototype ---

const ProtoWrapper = styled.div`

`

const SeventhPageText = styled(FifthPageText)``

const SeventhBigText = styled(SixthBigText)``
const SeventhSmallText = styled(SixthSmallText)`
  width: 35vw;
`

const ProtoVideoWrapper = styled.div``

// --- conclusion ---

const ConclusionWrapper = styled.div``
const EighthPageText = styled(FifthPageText)``
const EighthBigText = styled(SeventhBigText)``
const EighthSmallText = styled(SeventhSmallText)``


export default AmbientAssistedLiving