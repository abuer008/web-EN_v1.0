import Image from 'next/image'
import styled from 'styled-components'
import { useState, useEffect } from 'react'

import {
    TitleWrapper,
    ImgWrapper,
    TextWrapper,
    PlainTextWrapper,
    ArtiWrapper,
    MainTitle,
    P1,
    Subtitle,
    Strong,
    P,
    VideoWrapper, CNSubtitle, CNP, CNP1
} from "./PhoneRevision";
import {H1, CNH1} from './PhoneVisualData'
import VideoArea from "../revision/VideoArea";
import {useSelector} from "react-redux";

export const PhoneSuperHuman = () => {
    const {language} = useSelector(state => state.language)
    const [isEnglish, setLanguage] = useState(true)

    useEffect(() => {
        language === 'CN' ? setLanguage(false) : setLanguage(true)
    })
    return (
        <>
            <TitleWrapper>
                <ImgWrapper>
                    <Image alt='prothesis with voronoi fracture' src='/superHuman/superHuman.webp' width='950'
                           height='1088' objectFit='cover'/>
                </ImgWrapper>
                { isEnglish ?
                    <TextWrapper black style={{
                        left: '35%',
                        top: '20%'
                    }}>
                        <MainTitle>
                            <H1>SuperHuman</H1>
                        </MainTitle>
                        <P1>Thinking of future Interaction</P1>
                    </TextWrapper>
                    :
                    <TextWrapper black style={{
                        left: '45%',
                        top: '20%'
                    }}>
                        <MainTitle style={{ width: '40vw'}}>
                            <CNH1>超级人类</CNH1>
                        </MainTitle>
                        <CNP1>未来交互的思辨设计</CNP1>
                    </TextWrapper>
                }
            </TitleWrapper>

            <ArtiWrapper>
                { isEnglish ?
                    <PlainTextWrapper black>
                        <Subtitle>Wearable machine</Subtitle>
                        <P>The miniaturisation and intelligence made mobility the essential demand for traditional
                            products;
                            smartphones have become an indispensable part of daily life. In the speculative design,
                            machines
                            are gradually deviating from the pure tools of human, but moving toward coexistence. To
                            demonstrate the characteristics of this coexistence relationship, the prostheses, that
                            opposite
                            to the structure of the human body, are being illustrated; like artificial organs such as
                            artificial hearts, the prostheses replace and enhance normal limbs' functions. The purpose
                            of
                            illustration of the prostheses are not to satisfy the basic needs of the disabled, but to
                            reflect the future relationship between humans and machines - In the context of future
                            wearable
                            devices, The product is no longer a tool to meet particular needs, but one of our essential
                            organs.</P>
                    </PlainTextWrapper>
                    :
                    <PlainTextWrapper black>
                        <CNSubtitle>可穿戴式的未来</CNSubtitle>
                        <CNP>小型化与智能化是未来传统产品的发展方向，智能手机已经成为人们日常生活不可或缺的一部分。在本次思辨设计的项目中，机器从传统的工具角色慢慢的转变成与人类共存的一部分。这会给未来的交互设计带来哪些机遇和挑战？为了完整表现人类与机械共存关系，我们视觉化了全新的假肢设计。与正常的人体相比，假肢的视觉结构完全相反，视觉上的差异化反映了共存关系中的矛盾与和谐 - 在未来的可穿戴设备中，未来产品不再是满足固定需求的工具，而是我们赖以生存的器官。</CNP>
                    </PlainTextWrapper>
                }
            </ArtiWrapper>

            <ArtiWrapper>
                <VideoWrapper>
                    <VideoArea videoSource='/superHuman/UIDemo.mp4' alt='virtual reality interface video demo'
                               isPlaying={false} showControl={true}/>
                </VideoWrapper>
                { isEnglish ?
                    <PlainTextWrapper black>
                        <Subtitle>Virtual Reality Interface</Subtitle>
                        <P>Keyboard, mouse, click, and slide are the most common basic interaction methods and have
                            stagnated for a long time. While humans and machines are more closely developing to meet the
                            core goal of symbiosis, efficient and intuitive interactive methods are put forward. I
                            illustrate the interactive elements that no longer following flat patterns but completely 3D
                            dynamic elements based on VR's three-dimensional interface. In terms of interactive means,
                            hands
                            or fingers are completely abandoned, and the rotation of the eyeball and head is used as a
                            new
                            interactive language.</P>
                    </PlainTextWrapper>
                    :
                    <PlainTextWrapper black>
                        <CNSubtitle>增强现实的交互体验</CNSubtitle>
                        <CNP>键盘与鼠标，点击与手势是当前最普遍的交互手段，而且已经停滞发展很长时间。但当人类与机器真正共存的时候，更加直觉化与语义化的交互理念显得尤为重要。在实际的思辨设计项目中，我们重新解构了最基本的交互元素与方式，在增强现实的交互体验中不在遵循2D的设计模式，交互方式也从传统的手势变为眼球与头部运动的方式，其最终的目标是将交互变为如同自然感知能力一般新型的语言能力。</CNP>
                    </PlainTextWrapper>
                }
            </ArtiWrapper>
        </>
    )
}