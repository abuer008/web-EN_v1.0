import styled from 'styled-components'
import Image from 'next/image'
import { useEffect } from 'react'
import Layout from "../../components/Layout";
import {superHumanData} from "../../data/SuperHuman";
import {SectionTrigger} from "../../components/superHuman/SectionTrigger";

import {Reveal} from 'react-gsap'
import {TextFading} from "../../components/visualData/TextFading";
import {Fading} from "../../components/visualData/Fading";
import {RefreshButton} from "../../components/RefreshButton";
import {RedirectButton} from "../../components/RedirectButton";

const SuperHuman = () => {
    useEffect(() => {
        return () => {
            window.location.reload(true)
        }
    })
    return (
        <Layout>
            <Reveal repeat trigger={<SectionTrigger/>}>
                <Fading>
                    <div>
                        <Image alt='prothesis with voronoi fracture' src='/superHuman/titlePhoto.png' layout='fill'
                               objectFit='cover' quality='100'/>
                    </div>
                </Fading>
                <TitleWrapper>
                    <TextFading>
                        <div>
                            <ForeHead>Speculative Design</ForeHead>
                            <Title>{superHumanData.title.heading}</Title>
                            <SubHeadline>{superHumanData.title.subHeadline}</SubHeadline>
                        </div>

                        <Plain>{superHumanData.title.plainText}</Plain>

                    </TextFading>
                </TitleWrapper>
            </Reveal>
            <Reveal repeat trigger={<SectionTrigger/>}>
                <Fading>
                    <Image alt='prothesis mounted on the body' src='/superHuman/comp2880.png' layout='fill'
                           objectFit='cover'/>
                </Fading>
                <HardwareWrapper>
                    <TextFading>
                        <HardwareTitle>{superHumanData.hardware.heading}</HardwareTitle>
                        <Plain>{superHumanData.hardware.plainText}</Plain>
                    </TextFading>
                </HardwareWrapper>
            </Reveal>
            <Reveal repeat trigger={<SectionTrigger/>}>
                <InterfaceWrapper>
                    <TextFading>
                        <InterfaceTitle>{superHumanData.VRInterface.heading}</InterfaceTitle>
                        <Plain>{superHumanData.VRInterface.plainText}</Plain>
                    </TextFading>
                </InterfaceWrapper>
            </Reveal>
            <Reveal repeat trigger={<SectionTrigger/>}>
                <InterfaceWrapper>
                    <TextFading>
                        <InterfaceTitle>{superHumanData.conclusion.heading}</InterfaceTitle>
                        <Plain>{superHumanData.conclusion.plainText}</Plain>
                    </TextFading>
                </InterfaceWrapper>

            </Reveal>

            <Reveal repeat trigger={<div />}>
                <TextFading>
                    <RedirectWrapper>
                        <RedirectButton nextProject='Ambient Assisted Living' link='aal'/>
                    </RedirectWrapper>

                    <RefreshWrapper>
                        <RefreshButton/>
                    </RefreshWrapper>
                </TextFading>
            </Reveal>
        </Layout>
    )
}

// --- main style ---

// --- title page ---

const TitleWrapper = styled.div`
  position: absolute;
  top: 35%;
  left: 56%;
`

const ForeHead = styled.h3`
  font-weight: 300;
  font-size: 2em;
  margin: auto;
`

const Title = styled.h1`
  font-weight: 900;
  font-size: 3em;
  margin: auto;
`

const SubHeadline = styled.h2`
  font-weight: bold;
  font-size: 1.4em;
  margin: auto;
`

const Plain = styled.p`
  margin: 3.2em 0;
  width: 75%;
  text-align: justify;
  font-size: 1.1em;
  line-height: 1.5em;
`

// --- hardware ---

const HardwareWrapper = styled.div`
  position: absolute;
  top: 20%;
  left: 65%;
`

const HardwareTitle = styled.h1`
  font-size: 2.5em;
`

// --- interface ---

const InterfaceWrapper = styled.div`
  position: absolute;
  top: 25%;
  left: 55%;
`
const InterfaceTitle = styled.h1`
  font-size: 2.5em;
`

// --- conclusion ---

const RedirectWrapper = styled.div`
  position: fixed;
  bottom: 5vh;
  z-index: 1;
  right: -5vw;
`

const RefreshWrapper = styled.div`
  position: fixed;
  bottom: 5vh;
  right: 50%;
  z-index: 1;
  margin-top: 10px;
  transform: translate(50%, 0);
`

export default SuperHuman