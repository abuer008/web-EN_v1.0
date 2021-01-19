import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Layout from '../../components/Layout'
import {BasicEl} from "../../components/aal/BasicEl";
import {TlText} from "../../components/aal/TlText";
import {TimeGraph} from '../../components/aal/TimeGraph'
import styled from 'styled-components'
import Image from 'next/image'
import ReactPlayer from "react-player";
import {useState} from 'react'
import {useRef, useEffect} from 'react'


import {AALData} from "../../data/AAL";

gsap.registerPlugin(ScrollTrigger)

const AmbientAssistedLiving = () => {

    const [isLock, setLock] = useState(false)

    const sectionRefs = useRef([])
    const video = useRef(null)
    const text = useRef([])
    const newText = useRef([])

    const aalIntro = useRef([])
    const introImg = useRef(null)

    const hardwareTexts = useRef([])
    const hardwareImgs = useRef([])

    const timeGraphs = useRef([])
    const comparisonsTexts = useRef([])

    const outputImgs = useRef([])
    const outputTexts = useRef([])
    const outputTemp = useRef(null)

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

    useEffect(() => {
        gsap.defaults({ease: 'power1.inOut', duration: 1})
        if (video.current) {
            firstPageAnima(video.current, text.current, newText.current)
            secondPageAnima(newText.current, aalIntro.current, introImg.current)
            thirdPageAnima(aalIntro.current, introImg.current, hardwareTexts.current, hardwareImgs.current)
            fourthPageAnima(hardwareTexts.current, hardwareImgs.current, comparisonsTexts.current, timeGraphs.current)
            fifthPageAnima([timeGraphs.current[1], timeGraphs.current[2]], comparisonsTexts.current, outputImgs.current, outputTexts.current)
            sixthPageAnima(outputTexts.current, [timeGraphs.current, outputImgs.current], video.current, popUp.current)
            seventhPageAnima([video.current, timeGraphs.current, outputImgs.current, popUp.current], prototype.current, 6)
            seventhPageAnima(prototype.current, conclusion.current, 7)
        }
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
            <Section style={{backgroundColor: '#eeeeee', position: 'fixed', height: '100vh'}}/>
            <Section ref={el => sectionRefs.current.push(el)}>
                <VideoWrapper ref={video}>
                    <ReactPlayer
                        url='/aal/titleVideo_lowRes.mp4'
                        playing
                        width="132%"
                        height="auto"
                    />
                </VideoWrapper>
            </Section>


            {/*{// --- title page --- }*/}

            <TlArea ref={el => text.current.push(el)}>
                <TlContent>
                    <IconWrapper>
                        <Image src='/aal/Home.svg' width='136' height='146'/>
                    </IconWrapper>
                    <H1>Ambient Assisted Living</H1>
                </TlContent>
                <BasicEl style={tlStyle}/>
            </TlArea>

            <GArea ref={el => text.current.push(el)}>
                <GIconWrapper>
                    <Image src='/aal/gestureIcon.svg' width='52' height='73'/>
                </GIconWrapper>
                <BasicEl style={gStyle}/>
                <TlText title={AALData[0].title} plainText={AALData[0].plainText}/>
            </GArea>

            <VArea ref={el => text.current.push(el)}>
                <VIconWrapper>
                    <Image src='/aal/virusIcon.svg' width='70' height='70'/>
                </VIconWrapper>
                <BasicEl style={gStyle}/>
                <TlText title={AALData[1].title} plainText={AALData[1].plainText}/>
            </VArea>

            <PArea ref={el => text.current.push(el)}>
                <PIconWrapper>
                    <Image src='/aal/personalIcon.svg' width='68' height='52'/>
                </PIconWrapper>
                <BasicEl style={gStyle}/>
                <TlText title={AALData[2].title} plainText={AALData[2].plainText}/>
            </PArea>

            {/*--- crisis of care services ---*/}

            <SecondPageText>
                <BigText ref={el => newText.current.push(el)}>The crisis of elderly care services</BigText>
                <SmallText ref={el => newText.current.push(el)}>some describing text about care services</SmallText>
            </SecondPageText>

            {/*--- concept of aal ---*/}

            <ThirdPage>
                <ThirdPageText>
                    <TitleWrapper ref={el => aalIntro.current.push(el)}>
                        <BasicEl style={aalIntroStyle}/>
                        <AALIntro>The Concept of <Strong>AAL</Strong></AALIntro>
                    </TitleWrapper>
                    <ThirdSmallText ref={el => aalIntro.current.push(el)}>some describing text about AALsome describing
                        text about AAL.some describing text about AAL..</ThirdSmallText>
                </ThirdPageText>
                <AALImageWrapper ref={introImg}>
                    <Image src='/aal/aalIntro.jpg' width='502' height='354'/>
                </AALImageWrapper>
            </ThirdPage>

            {/*--- hardware intro ---*/}

            <FourthPageText>
                <FourthBigText ref={el => hardwareTexts.current.push(el)}>Wearable devices for gesture
                    monitoring</FourthBigText>
                <FourthSmallText ref={el => hardwareTexts.current.push(el)}>some text for describing
                    hardware.</FourthSmallText>
            </FourthPageText>
            <FourthImgWrapper>
                <WatchImg ref={el => hardwareImgs.current.push(el)}>
                    <Image src='/aal/hardwareTemp.png' width='370' height='370'/>
                </WatchImg>
                <PatchImg ref={el => hardwareImgs.current.push(el)}>
                    <Image src='/aal/hardwareTemp.png' width='370' height='370'/>
                </PatchImg>
            </FourthImgWrapper>

            {/*--- data comparison ---*/}

            <TimeGraphWrapper>
                <div ref={el => timeGraphs.current.push(el)}>
                    <TimeGraph isMain={true}/>
                </div>
                <div ref={el => timeGraphs.current.push(el)} style={{padding: '20em 0'}}>
                    <TimeGraph isMain={false}/>
                </div>
            </TimeGraphWrapper>
            <ArrowWrapper ref={el => timeGraphs.current.push(el)}>
                <Image src='/aal/dataComparisonArrow.svg' width='2' height='60'/>
            </ArrowWrapper>
            <FifthPageText>
                <FifthBigText ref={el => comparisonsTexts.current.push(el)}>Data comparison</FifthBigText>
                <FifthSmallText ref={el => comparisonsTexts.current.push(el)}>some text about data
                    comparison.</FifthSmallText>
            </FifthPageText>

            {/*--- output ---*/}

            <OutputImgWrapper>
                <MainConcernArea ref={el => outputImgs.current.push(el)} style={{top: '45vh'}}>
                    <ConcernWrapper>
                        <BasicEl style={gStyle}/>
                        <TextWrapper style={{margin: '13px 23px'}}>
                            <H1Number>20</H1Number>
                            <H1Small>times</H1Small>
                        </TextWrapper>
                    </ConcernWrapper>
                    <UITexts>
                        <TlText title='Health concerns' plainText='main concern text going on here.'/>
                    </UITexts>
                </MainConcernArea>

                <MainConcernArea ref={el => outputImgs.current.push(el)} style={{top: '62vh'}}>
                    <ConcernWrapper>
                        <BasicEl style={gStyle}/>
                        <TextWrapper style={{margin: '13px 26px'}}>
                            <H1Number>3</H1Number>
                            <H1Small>Hours</H1Small>
                        </TextWrapper>
                    </ConcernWrapper>
                    <UITexts>
                        <TlText title='gesture concerns' plainText='The walking gesture has slightly changed.'/>
                    </UITexts>
                </MainConcernArea>

                <MainConcernArea ref={el => outputImgs.current.push(el)} style={{top: '79vh'}}>
                    <ConcernWrapper>
                        <BasicEl style={gStyle}/>
                        <TextWrapper style={{margin: '13px 16px'}}>
                            <H1Number>90</H1Number>
                            <H1Small>minutes</H1Small>
                        </TextWrapper>
                    </ConcernWrapper>
                    <UITexts>
                        <TlText title='Activity concerns' plainText='Excessive exercises has increased by 90 minutes.'/>
                    </UITexts>
                </MainConcernArea>
            </OutputImgWrapper>

            <OutputWrapper>
                <FifthBigText ref={el => outputTexts.current.push(el)}>Explicit output</FifthBigText>
                <FifthSmallText ref={el => outputTexts.current.push(el)}>some text about output layout.</FifthSmallText>
            </OutputWrapper>

            {/*--- particles graphic ---*/}

            <PopupWrapper ref={popUp}>
                <SixthBigText>Intuitive infographic</SixthBigText>
                <SixthSmallText>some texts going on here.</SixthSmallText>
            </PopupWrapper>


            {/*--- prototype ---*/}

            <ProtoWrapper>
                <SeventhPageText>
                    <SeventhBigText ref={el => prototype.current.push(el)}>Prototype</SeventhBigText>
                    <SeventhSmallText ref={el => prototype.current.push(el)}>some text going on here.</SeventhSmallText>
                </SeventhPageText>
                <ProtoVideoWrapper ref={el => prototype.current.push(el)}>

                </ProtoVideoWrapper>
            </ProtoWrapper>

            <ConclusionWrapper>
                <EighthPageText>
                    <EighthBigText ref={el => conclusion.current.push(el)}>Conclusion</EighthBigText>
                    <EighthSmallText ref={el => conclusion.current.push(el)}>some texts are going on
                        here.</EighthSmallText>
                </EighthPageText>
            </ConclusionWrapper>


            <Section ref={el => sectionRefs.current.push(el)}/>
            <Section ref={el => sectionRefs.current.push(el)}/>
            <Section ref={el => sectionRefs.current.push(el)}/>
            <Section ref={el => sectionRefs.current.push(el)}/>
            <Section ref={el => sectionRefs.current.push(el)}/>
            <Section ref={el => sectionRefs.current.push(el)}/>
            <Section ref={el => sectionRefs.current.push(el)}/>
            <Section/>
            <Section/>
            {/*<Section />*/}
        </Layout>)
}


// --- Main styles ---

const Section = styled.div`
  position: relative;
  width: 100vw;
  height: 40vh;
  margin: -8px;
  padding: 0;
  overflow: hidden;
  z-index: 0;
  //border: 1px solid white;

`

// --- TitlePage ---

const VideoWrapper = styled.div`
  position: fixed;
  //z-index: 1;
  //margin: -8px;
  //height: auto;
`

const TlArea = styled.div`
  position: fixed;
  top: 13vh;
  right: 15vw;
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
  position: fixed;
  top: 20vh;
  left: 25vw;
`

const BigText = styled.h2`
  //position: absolute;
  width: 50vw;
  font-family: Roboto, sans-serif;
  font-weight: 900;
  font-size: 4vw;
  margin: 0;
`

const SmallText = styled.p`
  font-family: Roboto, sans-serif;
  font-weight: normal;
  font-size: 1.2em;
`

// --- AAL Intro ---

const ThirdPage = styled.div`
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

const AALIntro = styled(BigText)`
  position: absolute;
  width: 670px;
  top: 30px;
  left: -30px;
  font-weight: 200;
  text-align: right;
`

const Strong = styled.strong`
  font-weight: bold;
`

const ThirdSmallText = styled(SmallText)`
  position: absolute;
  text-align: right;
  width: 670px;
  left: 70px;
  top: -50px;
`

const AALImageWrapper = styled.div`
  position: fixed;
  top: 32vh;
  right: 0;
`

// --- hardware page ---

const FourthPageText = styled.div`
  position: fixed;
  top: 40vh;
  left: 50%;
`

const FourthBigText = styled(BigText)`
  width: 40vw;
`

const FourthSmallText = styled(SmallText)`
  width: 40vw;
`

const FourthImgWrapper = styled.div`
  position: fixed;
  top: 10vh;
  left: 10vw;
`

const WatchImg = styled.div``
const PatchImg = styled(WatchImg)``

// --- data comparison ---

const TimeGraphWrapper = styled.div`
  position: fixed;
  top: 0%;
  height: 100vh;
  width: 100vw;


  display: flex;
  flex-direction: column;
`

const ArrowWrapper = styled.div`
  position: fixed;
  top: 46vh;
  left: 19vw;
  z-index: 1;
`

const FifthPageText = styled(FourthPageText)`
  top: 50vh;
`

const FifthBigText = styled(FourthBigText)``
const FifthSmallText = styled(FourthSmallText)``


// --- explicit output ---

const OutputWrapper = styled(FifthPageText)`
  top: 15vh;
`

const OutputImgWrapper = styled.div`
  //position: fixed;
  z-index: 1;
`


const MainConcernArea = styled.div`
  display: flex;
  flex-direction: row;

  position: fixed;
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

const PopupWrapper = styled.div`
  position: fixed;
  bottom: -10vh;
  left: 10vw;
  width: 22vw;
  height: 40vh;
  padding: 50px;

  background: rgba(190, 190, 190, 0.35);
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(12px);
  border-radius: 2em;
`

const SixthBigText = styled(FifthBigText)`
  width: 22vw;
`
const SixthSmallText = styled(FifthSmallText)``

// --- prototype ---

const ProtoWrapper = styled.div`

`

const SeventhPageText = styled(FifthPageText)``

const SeventhBigText = styled(SixthBigText)``
const SeventhSmallText = styled(SixthSmallText)``

const ProtoVideoWrapper = styled.div``

// --- conclusion ---

const ConclusionWrapper = styled.div``
const EighthPageText = styled(FifthPageText)``
const EighthBigText = styled(SeventhBigText)``
const EighthSmallText = styled(SeventhSmallText)``


export default AmbientAssistedLiving