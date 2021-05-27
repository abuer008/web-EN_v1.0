import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Layout from '../Layout'
import Image from 'next/image'
import VideoSection from "../revision/VideoSection";
import VideoArea from "../revision/VideoArea";
import {IconComponent} from "../IconComponent";
import { useSelector } from 'react-redux';

export const PhoneRevision = () => {
    const {language} = useSelector(state => state.language)
    const [ isEnglish, setIsEnglish ] = useState(true)

    useEffect(() => {
        language === 'CN' ? setIsEnglish(false) : setIsEnglish(true)
    })

    return (
        <>
            <TitleWrapper>
                <ImgWrapper>
                    <Image src='/revision/revisionPhoneVersion.webp' width='950' height='1088' objectFit='cover'/>
                </ImgWrapper>
                <TextWrapper>
                    <MainTitle>
                        <Image src='/revision/revision_stylingTitle.svg' width='285' height='69'/>
                    </MainTitle>
                    {isEnglish ? <P1>Perceptual Expanding</P1> : <CNP1>自然知觉扩展</CNP1>}
                </TextWrapper>
            </TitleWrapper>

            <WArtiWrapper>
                <PlainImgWrapper>
                    <Image src='/revision/artificialSynasthesia.webp' width='360' height='203' objectFit='cover'/>
                </PlainImgWrapper>
                {
                    isEnglish ?
                    <PlainTextWrapper>
                        <Subtitle>Artifical Synaesthesia</Subtitle>
                        <P>As French philosopher Roland Barthes said, there
                            is no natural connection between signifier and
                            signified, the existence of an object in the objective
                            world is perceived by our sensory organs, such as
                            shapes, colours and temperature of objects are just
                            our subjective perceptual language in the brain.</P>
                    </PlainTextWrapper>
                        :
                        <PlainTextWrapper>
                            <CNSubtitle>人造通感体验</CNSubtitle>
                            <CNP>如同法国符号学家罗兰巴特的思想 - “能指”与“所指”在现实世界中没有实际的联系，我们对外界的感知和认识取决于我们大脑内的知觉语言。形状，颜色与温度都是我们的大脑主观的去描述周围的事物。通过技术的手段创造模拟新型的知觉语言来验证感知扩展的可能性是这一项目的主要目的。</CNP>
                        </PlainTextWrapper>
                }
            </WArtiWrapper>

            <WArtiWrapper>
                <PlainImgWrapper>
                    <Image src='/revision/revisionPhoneIntro.webp' width='2285' height='1800' objectFit='cover' />
                </PlainImgWrapper>
                { isEnglish ?
                    <PlainTextWrapper>
                        <Subtitle>The <Strong>Re:Vision</Strong> Concept</Subtitle>
                        <P>Humans’ vision involves more complex neural
                            mechanisms and gathers distinctively more information
                            than the other senses, the Re:Vision attempts to translate visual
                            information into tactile “language” by artificial means, to discover the novel
                            perceptual channel of humans. The ultimate question is <PStrong>how people use their own
                                imagination to understand the subjective world.</PStrong></P>
                    </PlainTextWrapper>
                    :
                    <PlainTextWrapper>
                        <CNSubtitle><Strong>Re:Vision</Strong> 概念项目</CNSubtitle>
                        <CNP>人类的视觉是五感中最复杂也是接受信息最多的感官，在Re:vision概念项目中，我们尝试通过技术手段人为的把视觉信息转换成“触觉语言”，去探讨人类感知扩展的可能性 - <Strong>如何通过自身的想象力去描述客观存在的环境？</Strong></CNP>
                    </PlainTextWrapper>
                }
            </WArtiWrapper>

            <WArtiWrapper>
                <PlainImgWrapper>
                    <Image src='/revision/revisionPhoneInfrared.webp' width='2285' height='1800' objectFit='cover' />
                </PlainImgWrapper>
                {
                    isEnglish ?
                    <PlainTextWrapper>
                        <Subtitle>Machine Cognition</Subtitle>
                        <P>Visible light waves (vision), temperature (haptic), chemical molecules (taste) and other
                            phenomena we can see or perceive are actually a tiny part of the real world. In real life,
                            much information goes unnoticed and cannot be perceived because of humans' limitation of
                            senses. <PStrong>Intelligent machine cognition</PStrong> helps us describe the environmental
                            world in a novel way, and can be translated into an understandable language for people to
                            read.</P>
                    </PlainTextWrapper>
                        :
                        <PlainTextWrapper>
                            <CNSubtitle>机器视觉</CNSubtitle>
                            <CNP>可见光谱， 温度，气味等种种的感知现象其实只是真实世界的一小部分，大量的信息因为自然感知器官的限制而被无视了。智能化的机器视觉的出现为我们提供了新的契机去了解与描述我们周围客观存在的世界。在Re:Vision的产品中，我们采用了智能化的机器识别去筛选关键的环境信息。</CNP>
                        </PlainTextWrapper>
                }
            </WArtiWrapper>

            <WArtiWrapper>
                <PlainImgWrapper>
                    <Image src='/revision/revisionPhoneTactile.webp' width='2285' height='1800' objectFit='cover' />
                </PlainImgWrapper>
                { isEnglish ?
                    <PlainTextWrapper>
                        <Subtitle>Haptic Stimuli</Subtitle>
                        <P>Conveying unnecessary information about the environment can lead to a risk of sensory
                            overload. The spatial position and the shape of objects can be represented like our visual
                            perception with only a few stimuli in one row taking into account the limited change in the
                            magnitude.</P>
                    </PlainTextWrapper>
                    :
                    <PlainTextWrapper>
                        <CNSubtitle>触觉模拟</CNSubtitle>
                        <CNP>触觉的特性在于其低密度的信息量，所以如何将繁杂的视觉信息翻译成仅仅只有单条可以变化强度的触觉电信号，是本次项目的重点。</CNP>
                    </PlainTextWrapper>
                }
            </WArtiWrapper>

            <WArtiWrapper>
                <PlainTextWrapper>
                    { isEnglish ?
                        <Subtitle>Data Translation</Subtitle>
                        :
                        <CNSubtitle>信息转换</CNSubtitle>
                    }
                </PlainTextWrapper>
                <VideoWrapper>
                    <VideoArea videoSource='/revision/translation/fundamental.mp4' alt='fundamental perceptual translation' isPlaying={false} showControl={true}/>
                </VideoWrapper>
                <PlainTextWrapper>
                    { isEnglish ?
                        <P>For representing such quantity of visual data, three distinct factors have to be condition
                            and notice: 1. The changes of direction, that what are user-facing (head rotation). 2. The
                            changes of position, that where is user standing. 3. The changes in each signal intensity at
                            a certain moment. Like the animations on the left illustrated, the grid shapes express the
                            sections toward the camera system, and each section connects with each stimulus in the round
                            shape.</P>
                        :
                        <CNP>为了用单排的触觉信号表示大量视觉信息，有三个关键因素：1. 产品与特定目标之间的方位角度变化（电刺激跟随方向的变化而变化）2. 相对位置的变化（通过位移变化而变化）3. 电刺激信号的强弱变化。</CNP>
                    }
                </PlainTextWrapper>
                <VideoWrapper>
                    <VideoArea videoSource='/revision/translation/form.mp4'
                                alt='shape translated with haptic language'
                                isPlaying={false}
                                showControl={true} />
                </VideoWrapper>
                <PlainTextWrapper>
                    { isEnglish ?
                        <P>After long-term training, subtle variations of signal intensity can even indicate differences
                            in different objects' shape. At the moment of contact between the target and the perceivable
                            range of the prototype, the change of signal intensity and the velocity of change in each
                            point can discern the difference from shapes of the target.</P>
                        :
                        <CNP>通过研究发现，在付出大量的学习成本后，信号的细微变化也可以被感知，不同的形状与大小信息可以通过不同信号强度的变化被识别出来。</CNP>
                    }
                </PlainTextWrapper>
            </WArtiWrapper>

            <WArtiWrapper>
                <PlainTextWrapper>
                    { isEnglish ?
                        <Subtitle>Prototype</Subtitle>
                        :
                        <CNSubtitle>功能性原型</CNSubtitle>
                    }
                </PlainTextWrapper>
                <VideoWrapper>
                    <VideoArea videoSource='/revision/prototype/firstPrototype.mp4'
                                alt='the first prototype of vision translation'
                                isPlaying={false}
                                showControl={true}/>
                </VideoWrapper>
                <PlainTextWrapper>
                    { isEnglish ?
                        <P>As an initial point, the system based on a Kinect camera for gathering the visual data is
                            presented. The camera emitted thousands of invisible infrared rays to calculate objects'
                            area at a certain distance. The environment towards the camera has diverted into multiple
                            sections in the monitor. The collision of infrared rays in the different section would be
                            activating different LED, depends on the number of the collisions the intensities of LEDs
                            can also change autonomously.</P>
                        :
                        <CNP>为了在实际环境中测试视觉信号转换为触觉的效果，我们以Arduino，kinect为硬件基础，vvvv视觉化搭建了初始的功能原型，在理解“转换”这一概念的同时，并测试寻找合适的触觉模式。</CNP>
                    }
                </PlainTextWrapper>
                <PlainImgWrapper>
                    <Image src='/revision/prototype/IMG_0238.webp' width='1440' height='774' />
                </PlainImgWrapper>
                <PlainTextWrapper>
                    { isEnglish ?
                        <P>The generator of tactile signals was designed to simulate the press stimuli using hub magnet,
                            which was more accurate and similar to electrical stimulation. The Kinect motion sensor and
                            the input simulation to head-mounted prototype can be attached to the head; the hub magnets,
                            that on the annular housing mounted, can generate the stimuli and convey to the
                            forehead.</P>
                        :
                        <CNP>在震动马达，电信号等的触觉模拟器的测试中，选择了小型电磁推动马达来模拟真是的电触觉，最终结合Arduino母板和kinect红外相机系统组成了完整的I/O功能原型。</CNP>
                    }
                </PlainTextWrapper>
            </WArtiWrapper>

            <WArtiWrapper>
                { isEnglish ?
                    <PlainTextWrapper>
                        <Subtitle>Perceptual Substitution</Subtitle>
                        <P>Machine cognition, artificial intelligence, the common research topics in recent years, show
                            us how people’s daily lives would be like, the interaction between people and machines, and
                            the external world becomes more complex. This project aims to propose a possibility: haptic
                            as a kind of “low-res” perceptual language, can be described such quantity of information
                            like vision. It can also be used as a new channel of the senses, using artificial sensors
                            expand perception in humans.</P>
                    </PlainTextWrapper>
                    :
                    <PlainTextWrapper>
                        <CNSubtitle>知觉语言转换</CNSubtitle>
                        <CNP>机器视觉，人工智能，这些越来越热门的研究领域中， 对未来交互设计的冲击是什么？在信息爆炸的时代里，传统的感知能力已经不能满足愈加复杂的交互需求。本次的项目提出了感知转换的概念，对交互语言的分析让自然感知能力的扩展提供了可能的方向。</CNP>
                    </PlainTextWrapper>
                }
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
  color: ${props => props.black ? 'black' : 'white'};
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

export const CNP1 = styled(P1)`
    font-family: Noto Sans SC;
    font-style: normal;
    font-weight: normal;
`

export const Subtitle = styled.h2`
  text-transform: uppercase;
  font-weight: normal;
`

export const CNSubtitle = styled(Subtitle)`
    font-family: Noto Sans SC;
  font-style: normal;
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

export const CNP = styled(P)`
    font-family: Noto Sans SC;
  font-style: normal;
  font-weight: normal;
`