import Image from 'next/image'
import Layout from '../../components/Layout'
import styled from 'styled-components'
import { VDText } from "../../components/visualData/VDText";
import { ShowArea } from '../../components/visualData/ShowArea'
import { Sphere } from '../../components/visualData/Sphere'
import { PhotoWall } from "../../components/visualData/PhotoWall";
import { useRef, useEffect, useState } from 'react'
import { SectionTrigger } from "../../components/visualData/SectionTrigger";
import { Fading } from '../../components/visualData/Fading'
import { TextFading } from '../../components/visualData/TextFading'
import { TitleChange } from "../../components/visualData/TitleChange";

import { gsap } from 'gsap'
import { ScrollTrigger} from "gsap/ScrollTrigger";
import { Reveal } from 'react-gsap'

import { dataVisualisation } from "../../data/DataVisualisation"

gsap.registerPlugin(ScrollTrigger)

const DataVisualisation = () => {


    return (
        <Layout>
                <Reveal repeat trigger={<SectionTrigger />}>
                    {/*<Fading>*/}
                        <BackgroundWrapper>
                            <Image src='/data-visualisation/titlePhoto.png' layout='fill' objectFit='cover'/>
                        </BackgroundWrapper>
                    <TextFading>
                    <Title>
                        <SubTitle>
                            Data Visualisation
                        </SubTitle>
                        <TitleChange>
                            <MainTitle>Syrian</MainTitle>
                        </TitleChange>
                        <YearText>2016-2019</YearText>
                        <Button>
                            <ButtonIcon>
                                <Image src='/data-visualisation/buttonIcon.svg' width='42' height='42'/>
                            </ButtonIcon>
                            <ButtonText>Enter Interactive DEMO</ButtonText>
                        </Button>
                    </Title>
                    </TextFading>
                    {/*</Fading>*/}
                </Reveal>
            <Reveal repeat threshold={0.5} trigger={<SectionTrigger/>}>
                <Fading>
                    <ImageWrapper>
                        <Image src='/data-visualisation/refugeesFamily.webp' width='642' height='638'/>
                    </ImageWrapper>
                </Fading>
                <TextFading>
                    <TextArea>
                        <VDText heading={dataVisualisation[0].heading} plainText={dataVisualisation[0].plainText}/>
                    </TextArea>
                </TextFading>
            </Reveal>

            <Reveal repeat threshold={0.5} trigger={<SectionTrigger/>}>
                <Fading>
                    <CodeWrapper>
                        <code style={{whiteSpace: 'pre-line'}}>{dataVisualisation[1].code}</code>
                    </CodeWrapper>
                </Fading>
                <TextFading>
                    <TextArea>
                        <VDText heading={dataVisualisation[1].heading} plainText={dataVisualisation[1].plainText}/>
                    </TextArea>
                </TextFading>
            </Reveal>

            <Reveal repeat threshold={0.5} trigger={<SectionTrigger/>}>
                <Fading>
                    <ImageWrapper>
                        <ShowArea/>
                    </ImageWrapper>
                </Fading>
                <TextFading>
                    <TextArea>
                        <VDText heading={dataVisualisation[2].heading} plainText={dataVisualisation[2].plainText}/>
                    </TextArea>
                </TextFading>
            </Reveal>

            <Reveal repeat threshold={0.5} trigger={<SectionTrigger/>}>
                <Fading>
                    <div>
                    <Sphere/>
                    </div>
                </Fading>
                <TextFading>
                    <TextArea style={{bottom: '60vh'}}>
                        <VDText heading={dataVisualisation[3].heading} plainText={dataVisualisation[3].plainText}/>
                    </TextArea>
                </TextFading>
            </Reveal>

            <Reveal repeat threshold={0.5} trigger={<SectionTrigger/>}>
                <Fading>
                    <div>
                        <PhotoWall/>
                    </div>
                </Fading>
                <TextFading>
                    <TextArea style={{top: '0'}}>
                        <VDText heading={dataVisualisation[4].heading} plainText={dataVisualisation[4].plainText}/>
                    </TextArea>
                </TextFading>
            </Reveal>
        </Layout>
    )
}

// const Section = styled.div`
//   position: relative;
//   width: 100vw;
//   height: 100vh;
//   margin: -8px;
//   background-color: white;
//   //border: 1px solid black;
// `

const BackgroundWrapper = styled.div`
  
`

const ImageWrapper = styled.div`
    position: relative;
    max-width: 50vw;
    //filter: blur(1px);
    top: 20%;
    left: 10%;
    border-radius: 2em;
`
const TextArea = styled.div`
  position: relative;
  width: 30vw;
  left: 60vw;
  bottom: 40vh;
`
const Title = styled.div`
  position: absolute;
  top: 30vh;
  left: 55vw;
  
  font-family: Roboto, sans-serif;
  font-style: normal;
  
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const SubTitle = styled.h3`
  font-family: Roboto Condensed, sans-serif;
  font-weight: 300;
  font-size: 3em;
  line-height: 1em;
  
  margin: 0;
`

const MainTitle = styled.h1`
  max-width: 470px;
  height: 162px;
  
  font-weight: 900;
  font-size: 6em;
  line-height: 0.85em;
  text-transform: uppercase;
  
  margin: 0;
`

const YearText = styled.h4`
  font-weight: 300;
  font-size: 4em;
  
  margin: 0;
`

const Button = styled.div`
  min-width: 12vw;
  height: 7vh;
  background: black;
  border-radius: 1.2em;
  margin: 2em 0;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: 1s ease-in-out;
  
  :hover {
    transform: scale(1.1);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
    background-color: indianred;
  }
`

const ButtonIcon = styled.div`
  padding: 0 1em;
`

const ButtonText = styled.h6`
  color: white;
  max-width: 10vw;
  font-size: 1.2em;
`

const CodeWrapper = styled.div`
  position: relative;
  top: 10vh;
  left: 15vw;
  max-width: 30vw;
  padding: 20px;
  border-radius: 2em;
  background-color: #e9e9e9
`

export default DataVisualisation