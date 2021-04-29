import Image from 'next/image'
import styled from 'styled-components'

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
    VideoWrapper
} from "./PhoneRevision";
import {H1} from './PhoneVisualData'
import VideoArea from "../revision/VideoArea";

export const PhoneSuperHuman = () => (
        <>
            <TitleWrapper>
                <ImgWrapper>
                    <Image alt='prothesis with voronoi fracture' src='/superHuman/superHuman.png' width='950'
                           height='1488' objectFit='cover'/>
                </ImgWrapper>
                <TextWrapper black style={{
                    left: '35%',
                    top: '20%'
                }}>
                    <MainTitle>
                        <H1>SuperHuman</H1>
                    </MainTitle>
                    <P1>Thinking of future Interaction</P1>
                </TextWrapper>
            </TitleWrapper>

            <ArtiWrapper>
                <PlainTextWrapper>
                    <Subtitle>Wearable machine</Subtitle>
                    <P>The miniaturisation and intelligence made mobility the essential demand for traditional products;
                        smartphones have become an indispensable part of daily life. In the speculative design, machines
                        are gradually deviating from the pure tools of human, but moving toward coexistence. To
                        demonstrate the characteristics of this coexistence relationship, the prostheses, that opposite
                        to the structure of the human body, are being illustrated; like artificial organs such as
                        artificial hearts, the prostheses replace and enhance normal limbs' functions. The purpose of
                        illustration of the prostheses are not to satisfy the basic needs of the disabled, but to
                        reflect the future relationship between humans and machines - In the context of future wearable
                        devices, The product is no longer a tool to meet particular needs, but one of our essential
                        organs.</P>
                </PlainTextWrapper>
            </ArtiWrapper>

            <ArtiWrapper>
                <VideoWrapper>
                    <VideoArea videoSource='/superHuman/UIDemo.mp4' alt='virtual reality interface video demo'
                               isPlaying={false} showControl={true}/>
                </VideoWrapper>
                <PlainTextWrapper>
                    <Subtitle>Virtual Reality Interface</Subtitle>
                    <P>Keyboard, mouse, click, and slide are the most common basic interaction methods and have
                        stagnated for a long time. While humans and machines are more closely developing to meet the
                        core goal of symbiosis, efficient and intuitive interactive methods are put forward. I
                        illustrate the interactive elements that no longer following flat patterns but completely 3D
                        dynamic elements based on VR's three-dimensional interface. In terms of interactive means, hands
                        or fingers are completely abandoned, and the rotation of the eyeball and head is used as a new
                        interactive language.</P>
                </PlainTextWrapper>
            </ArtiWrapper>
        </>
    )