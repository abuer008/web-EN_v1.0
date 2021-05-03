import styled from 'styled-components'
import Layout from '../Layout'
import Image from 'next/image'
import VideoSection from "../revision/VideoSection";
import VideoArea from "../revision/VideoArea";
import {IconComponent} from "../IconComponent";

export const PhoneRevision = () => {
    return (
        <>
            <TitleWrapper>
                <ImgWrapper>
                    <Image src='/revision/revisionPhoneVersion.png' width='950' height='1088' objectFit='cover'/>
                </ImgWrapper>
                <TextWrapper>
                    <MainTitle>
                        <Image src='/revision/revision_stylingTitle.svg' width='285' height='69'/>
                    </MainTitle>
                    <P1>Perceptual Expanding</P1>
                </TextWrapper>
            </TitleWrapper>

            <WArtiWrapper>
                <PlainImgWrapper>
                    <Image src='/revision/artificialSynasthesia.png' width='360' height='203' objectFit='cover'/>
                </PlainImgWrapper>
                <PlainTextWrapper>
                    <Subtitle>Artifical Synaesthesia</Subtitle>
                    <P>As French philosopher Roland Barthes said, there
                        is no natural connection between signifier and
                        signified, the existence of an object in the objective
                        world is perceived by our sensory organs, such as
                        shapes, colours and temperature of objects are just
                        our subjective perceptual language in the brain.</P>
                </PlainTextWrapper>
            </WArtiWrapper>

            <WArtiWrapper>
                <PlainImgWrapper>
                    <Image src='/revision/revisionPhoneIntro.png' width='2285' height='1800' objectFit='cover' />
                </PlainImgWrapper>
                <PlainTextWrapper>
                    <Subtitle>The <Strong>Re:Vision</Strong> Concept</Subtitle>
                    <P>Humans’ vision involves more complex neural
                        mechanisms and gathers distinctively more information
                        than the other senses, the Re:Vision attempts to translate visual
                        information into tactile “language” by artificial means, to discover the novel
                        perceptual channel of humans. The ultimate question is <PStrong>how people use their own imagination to understand the subjective world.</PStrong></P>
                </PlainTextWrapper>
            </WArtiWrapper>

            <WArtiWrapper>
                <PlainImgWrapper>
                    <Image src='/revision/revisionPhoneInfrared.png' width='2285' height='1800' objectFit='cover' />
                </PlainImgWrapper>
                <PlainTextWrapper>
                    <Subtitle>Machine Cognition</Subtitle>
                    <P>Visible light waves (vision), temperature (haptic), chemical molecules (taste) and other phenomena we can see or perceive are actually a tiny part of the real world. In real life, much information goes unnoticed and cannot be perceived because of humans' limitation of senses. <PStrong>Intelligent machine cognition</PStrong> helps us describe the environmental world in a novel way, and can be translated into an understandable language for people to read.</P>
                </PlainTextWrapper>
            </WArtiWrapper>

            <WArtiWrapper>
                <PlainImgWrapper>
                    <Image src='/revision/revisionPhoneTactile.png' width='2285' height='1800' objectFit='cover' />
                </PlainImgWrapper>
                <PlainTextWrapper>
                    <Subtitle>Haptic Stimuli</Subtitle>
                    <P>Conveying unnecessary information about the environment can lead to a risk of sensory overload. The spatial position and the shape of objects can be represented like our visual perception with only a few stimuli in one row taking into account the limited change in the magnitude.</P>
                </PlainTextWrapper>
            </WArtiWrapper>

            <WArtiWrapper>
                <PlainTextWrapper>
                    <Subtitle>Data Translation</Subtitle>
                </PlainTextWrapper>
                <VideoWrapper>
                    <VideoArea videoSource='/revision/translation/fundamental.mp4' alt='fundamental perceptual translation' isPlaying={false} showControl={true}/>
                </VideoWrapper>
                <PlainTextWrapper>
                    <P>For representing such quantity of visual data, three distinct factors have to be condition and notice: 1. The changes of direction, that what are user-facing (head rotation). 2. The changes of position, that where is user standing. 3. The changes in each signal intensity at a certain moment. Like the animations on the left illustrated, the grid shapes express the sections toward the camera system, and each section connects with each stimulus in the round shape.</P>
                </PlainTextWrapper>
                <VideoWrapper>
                    <VideoArea videoSource='/revision/translation/form.mp4'
                                alt='shape translated with haptic language'
                                isPlaying={false}
                                showControl={true} />
                </VideoWrapper>
                <PlainTextWrapper>
                    <P>After long-term training, subtle variations of signal intensity can even indicate differences in different objects' shape. At the moment of contact between the target and the perceivable range of the prototype, the change of signal intensity and the velocity of change in each point can discern the difference from shapes of the target.</P>
                </PlainTextWrapper>
            </WArtiWrapper>

            <WArtiWrapper>
                <PlainTextWrapper>
                    <Subtitle>Prototype</Subtitle>
                </PlainTextWrapper>
                <VideoWrapper>
                    <VideoArea videoSource='/revision/prototype/firstPrototype.mp4'
                                alt='the first prototype of vision translation'
                                isPlaying={false}
                                showControl={true}/>
                </VideoWrapper>
                <PlainTextWrapper>
                    <P>As an initial point, the system based on a Kinect camera for gathering the visual data is presented. The camera emitted thousands of invisible infrared rays to calculate objects' area at a certain distance. The environment towards the camera has diverted into multiple sections in the monitor. The collision of infrared rays in the different section would be activating different LED, depends on the number of the collisions the intensities of LEDs can also change autonomously.</P>
                </PlainTextWrapper>
                <PlainImgWrapper>
                    <Image src='/revision/prototype/IMG_0238.jpg' width='1440' height='774' />
                </PlainImgWrapper>
                <PlainTextWrapper>
                    <P>The generator of tactile signals was designed to simulate the press stimuli using hub magnet, which was more accurate and similar to electrical stimulation. The Kinect motion sensor and the input simulation to head-mounted prototype can be attached to the head; the hub magnets, that on the annular housing mounted, can generate the stimuli and convey to the forehead.</P>
                </PlainTextWrapper>
            </WArtiWrapper>

            <WArtiWrapper>
                <PlainTextWrapper>
                    <Subtitle>Perceptual Substitution</Subtitle>
                    <P>Machine cognition, artificial intelligence, the common research topics in recent years, show us how people’s daily lives would be like, the interaction between people and machines, and the external world becomes more complex. This project aims to propose a possibility: haptic as a kind of “low-res” perceptual language, can be described such quantity of information like vision. It can also be used as a new channel of the senses, using artificial sensors expand perception in humans.</P>
                </PlainTextWrapper>
                <PlainTextWrapper>
                <IconComponent pdfType='pdf' background='white' plainText='Paper for SIDeR conference 2019' href='/pdfs/SIDeR2019_paper_8.pdf' />
                </PlainTextWrapper>
            </WArtiWrapper>
        </>
    )
}


export const TitleWrapper = styled.div``

export const VideoWrapper = styled.div`
`

export const ImgWrapper = styled.div`
    //height: 60vh;
  width: ${props => props.small ? '85vw' : '100vw'};
  margin: 0 auto;
`

const PlainImgWrapper = styled.div`
  width: 100vw;
`

export const TextWrapper = styled.div`
    position: absolute;
  top: 40vh;
  left: 2.4em;
  color: ${props => props.black ? 'black' : 'white'}
`

export const PlainTextWrapper = styled.div`
  color: ${props => props.black ? 'black' : 'white'}
  margin: 0 auto;
  padding: 0 2.4em;
`

export const ArtiWrapper = styled.div`
    position: relative;
  padding-top: 3em;
  padding-bottom: 1em;
  //margin: 0 auto;
`

const WArtiWrapper = styled(ArtiWrapper)`
    color: white;
`

// -----------------------------

export const MainTitle = styled.div`
  width: 50%;
`

export const P1 = styled.p`
    margin: auto;
`

export const Subtitle = styled.h2`
  text-transform: uppercase;
  font-weight: normal;
`

export const Strong = styled.strong`
    font-weight: 900;
`

const PStrong = styled.strong`
    font-weight: 600;
`

export const P = styled.p`
    font-weight: lighter;
  text-align: justify;
`