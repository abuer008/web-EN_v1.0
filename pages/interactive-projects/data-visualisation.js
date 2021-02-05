import Image from 'next/image'
import {useEffect} from 'react'
import Layout from '../../components/Layout'
import styled from 'styled-components'
import {VDText} from "../../components/visualData/VDText";
import {ShowArea} from '../../components/visualData/ShowArea'
import {Sphere} from '../../components/visualData/Sphere'
import {PhotoWall} from "../../components/visualData/PhotoWall";
import {SectionTrigger} from "../../components/visualData/SectionTrigger";
import {Fading} from '../../components/visualData/Fading'
import {TextFading} from '../../components/visualData/TextFading'
import {TitleChange} from "../../components/visualData/TitleChange";

import {Reveal} from 'react-gsap'

import {dataVisualisation} from "../../data/DataVisualisation"
import {RedirectButton} from "../../components/RedirectButton";
import {RefreshButton} from "../../components/RefreshButton";

const DataVisualisation = () => {

    useEffect(() => {
        return () => {
            window.location.reload(true)
        }
    })
    return (
        <Layout>
            <Reveal repeat trigger={<SectionTrigger/>}>
                <Fading>
                <BackgroundWrapper>
                    <Image alt='syrian map with red pointers' src='/data-visualisation/titlePhoto.png' layout='fill'
                           objectFit='cover'/>
                </BackgroundWrapper>
                <TextFading>
                    <Title>
                        <SubTitle>
                            Data Visualisation
                        </SubTitle>
                        <TitleChange>
                            <MainTitle>الحرب الأهلية السورية‎</MainTitle>
                        </TitleChange>
                        <YearText>2016-2019</YearText>
                        <Button>
                            <ButtonIcon>
                                <Image alt='demo icon' src='/data-visualisation/buttonIcon.svg' width='42' height='42'/>
                            </ButtonIcon>
                            <ButtonText>Enter Interactive DEMO</ButtonText>
                        </Button>
                    </Title>
                </TextFading>
                </Fading>
            </Reveal>
            <Reveal repeat threshold={0.5} trigger={<SectionTrigger/>}>
                <Fading>
                    <ImageWrapper style={{left: '10vw', top: '20vh'}}>
                        <Image alt='syrian refugees walking on the street' src='/data-visualisation/refugeesFamily.webp'
                               width='642' height='638'/>
                    </ImageWrapper>
                </Fading>
                <TextFading>
                    <TextArea style={{bottom: '40vh'}}>
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
                    <TextArea style={{bottom: '40vh'}}>
                        <VDText heading={dataVisualisation[1].heading} plainText={dataVisualisation[1].plainText}/>
                    </TextArea>
                </TextFading>
            </Reveal>

            <Reveal repeat threshold={0.5} trigger={<SectionTrigger/>}>
                <Fading>
                    <ImageWrapper>
                        <ShowArea
                        />
                    </ImageWrapper>
                </Fading>
                <TextFading>
                    <TextArea style={{bottom: '70vh'}}>
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
                    <TextArea style={{bottom: '70vh'}}>
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
                    <TextArea style={{bottom: '28vh'}}>
                        <VDText heading={dataVisualisation[4].heading} plainText={dataVisualisation[4].plainText}/>
                    </TextArea>
                </TextFading>

                <TextFading>
                    <RedirectWrapper>
                        <RedirectButton textColor='black' nextProject='SUPER HUMAN' link='super-human'/>
                    </RedirectWrapper>

                    <RefreshWrapper>
                        <RefreshButton/>
                    </RefreshWrapper>
                </TextFading>
            </Reveal>

        </Layout>
    )
}

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

const BackgroundWrapper = styled.div`

`

const ImageWrapper = styled.div`
  position: relative;
  width: 50vw;
  height: 70vh;
  top: 10%;
  left: 10%;
  border-radius: 2em;
`
const TextArea = styled.div`
  position: relative;
  width: 40vw;
  left: 60vw;
  bottom: 55vh;
`
const Title = styled.div`
  position: absolute;
  top: 30vh;
  left: 55vw;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const SubTitle = styled.h3`
  font-family: Roboto Condensed, sans-serif;
  font-weight: 300;
  font-size: 2.7vw;
  line-height: 2.7vw;

  margin: 0;
`

const MainTitle = styled.h1`
  max-width: 35vw;
  height: 8.9vw;

  font-weight: 900;
  font-size: 5vw;
  line-height: 4.2vw;
  text-transform: uppercase;

  margin: 0;
`

const YearText = styled.h4`
  font-weight: 300;
  font-size: 3.5vw;

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
  transition: 0.5s ease-out;

  :hover {
    transform: scale(1.1);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
    background-color: indianred;
    cursor: pointer;
  }
`

const ButtonIcon = styled.div`
  padding: 0 1em;
`

const ButtonText = styled.h6`
  color: white;
  max-width: 10vw;
  font-size: 1.2vw;
`

const CodeWrapper = styled.div`
  position: relative;
  height: 50vh;
  overflow: hidden;
  top: 15vh;
  left: 15vw;
  max-width: 30vw;
  padding: 20px;
  border-radius: 2em;
  background-color: #e9e9e9
`

export default DataVisualisation