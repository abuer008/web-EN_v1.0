import styled from 'styled-components'
import Image from 'next/image'
import {useState, useEffect} from 'react'
import {
    TitleWrapper,
    ImgWrapper,
    TextWrapper,
    ArtiWrapper,
    PlainTextWrapper,
    MainTitle,
    Subtitle,
    P1,
    P,
    Strong,
    VideoWrapper
} from "./PhoneRevision";
import {H1} from './PhoneVisualData'
import {LottiePhoneAnima, LottieStateAnima} from "./LottieAnima";
import { States } from '../connecting/States'

import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {animaState, connectingAnima, statesExample} from "../../data/Connecting";

gsap.registerPlugin(ScrollTrigger)

export const PhoneConnecting = () => {

    return (
        <>
            <TitleWrapper>
                <ImgWrapper>
                    <Image src='/connecting/phoneConnecting.png' width='950' height='1088' objectFit='cover'/>
                </ImgWrapper>
                <TextWrapper style={{top: '40vh'}}>
                    <MainTitle>
                        <H1>Connecting</H1>
                    </MainTitle>
                    <P1>Virtual Kinship</P1>
                </TextWrapper>
            </TitleWrapper>

            <WArtiWrapper>
                <PlainTextWrapper>
                    <Subtitle>
                        The development of contemporary kinship
                    </Subtitle>
                    <P>Childlessness, single-parent family, and ageing population, the collapse of traditional family
                        form
                        has caused series of social problems and financial crisis; more children and adolescents no
                        longer
                        grow up during their entire childhood and adolescence with both birth parents, the kinship of
                        modern
                        generations become weaker.</P>
                </PlainTextWrapper>
            </WArtiWrapper>

            <WArtiWrapper>
                <PlainTextWrapper>
                    <SectionBreak>Product</SectionBreak>
                </PlainTextWrapper>
            </WArtiWrapper>

            <WArtiWrapper>
                <PlainTextWrapper>
                    <AnimaWrapper>
                        <LottiePhoneAnima anima={connectingAnima[0]} autoplay={false}/>
                        <ASubtitle>
                            <ConnectingTitle>The Connecting</ConnectingTitle>
                            <P2>The family members can automatically bond on the connecting digital platform.</P2>
                        </ASubtitle>
                    </AnimaWrapper>
                </PlainTextWrapper>
            </WArtiWrapper>

            <WArtiWrapper style={{marginTop: '20vh'}}>
                <PlainTextWrapper>
                    <AnimaWrapper>
                        <LottiePhoneAnima anima={connectingAnima[0]} />
                        <ASubtitle>
                            <ConnectingTitle>Character</ConnectingTitle>
                            <P2>The actual person will be illustrated as a 2D character, and the user can check the state and interact with him directly. The character will be animated smoothly and has three types of states.</P2>
                        </ASubtitle>
                    </AnimaWrapper>
                    <StateWrapper>
                        <LottieStateAnima animaData={statesExample.idle} heading={animaState.idle.heading} />
                        <LottieStateAnima animaData={statesExample.active} heading={animaState.active.heading} />
                        <LottieStateAnima animaData={statesExample.sleepy} heading={animaState.sleepy.heading} />
                    </StateWrapper>
                </PlainTextWrapper>
            </WArtiWrapper>

            <WArtiWrapper style={{marginTop: '15vh'}}>
                <PlainTextWrapper>
                    <AnimaWrapper>
                        <LottiePhoneAnima anima={connectingAnima[1]} />
                        <ASubtitle>
                            <ConnectingTitle>Intimate connection</ConnectingTitle>
                            <P2>With a simple touch on hand wrist, the tactile signals will be delivered to the target and performed directly.</P2>
                        </ASubtitle>
                    </AnimaWrapper>
                    <ImgWrapper>
                        <Image alt='sketch for touch interaction' src='/connecting/touchSketch.png' width='470' height='353' objectFit='scale-down' />
                    </ImgWrapper>
                </PlainTextWrapper>
            </WArtiWrapper>

            <WArtiWrapper>
                <PlainTextWrapper>
                    <AnimaWrapper>
                        <LottiePhoneAnima anima={connectingAnima[2]} />
                        <ASubtitle>
                            <ConnectingTitle>Measurable Kinship</ConnectingTitle>
                            <P2>Communication was being catalogued and visualised, and the system will encourage the user to communicate and improve the quality of communication.</P2>
                        </ASubtitle>
                    </AnimaWrapper>
                    <ImgWrapper>
                        <Image alt='sketch for relationship statistics' src='/connecting/catalogSketch.png' width='600' height='448' objectFit='scale-down' />
                    </ImgWrapper>
                </PlainTextWrapper>
            </WArtiWrapper>

            <WArtiWrapper>
                <PlainTextWrapper>
                    <SectionBreak>Comprehensive Process</SectionBreak>
                </PlainTextWrapper>
            </WArtiWrapper>
        </>
    )
}

const WArtiWrapper = styled(ArtiWrapper)`
  color: white;
`
const ASubtitle = styled.div`
  position: relative;
  width: 50%;
  min-width: 180px;
  //  font-size: 1.2em;
`

const AnimaWrapper = styled.div`
  position: relative;
  //height: 25vh;
  //right: 6vw;
  width: 85vw;
  margin: 1em 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

`

const StateWrapper = styled.div`
    display: flex;
  flex-direction: row;
`


const ConnectingTitle = styled(Subtitle)`
    font-weight: bold;
  font-size: 1.8em;
  margin: 0.4em 0;
  text-transform: capitalize;
`

const P2 = styled(P1)`
    font-weight: lighter;
`

export const SectionBreak = styled.h3`
  border-bottom: 1px solid white;
  font-weight: 300;
`