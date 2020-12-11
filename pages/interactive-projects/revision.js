import Image from 'next/image'
import styled from 'styled-components'

import Layout from '../../components/Layout'

import { artificialSynaesthesia } from "../../data/RevisionData";

const Revision = () => {
    return (
        <Layout background="black">
            <TitleSection>
                    <Image src="/revision/revisionTitlePhoto.webp"  layout="fill" objectFit="cover"/>
                <Title>
                        <Image src="/revision/revision_stylingTitle.svg" width={285} height={69} className="styling"/>
                    <Text className="subtitle">Perceptual abilities expanding</Text>
                </Title>
            </TitleSection>

            <IntroSection>
                <ImageWrapper>
                    <Image src="/revision/artificial synaesthesia.webp" width={550} height={800} objectFit="contain" />
                </ImageWrapper>
                <TextArea>
                    <SubText>{artificialSynaesthesia.title}</SubText>
                    <ExplainText>As French philosopher Roland Barthes said, there
                        is no natural connection between signifier and
                        signified, the existence of an object in the objective
                        world is perceived by our sensory organs, such as
                        shapes, colours and temperature of objects are just
                        our subjective perceptual language in the brain.
                        Hearing colours, tasting alphabets, the fundamental
                        appearance of synaesthesia is based on “nonexistent
                        hallucination” in the brain. How to use
                        those hallucinations to represent the information,
                        that unnoticed or cannot be perceived because of
                        limitation of senses in humans, is primary aim of
                        this project. Thus, a novel head-mounted device is
                        presented, the device gathers <ToneText>visual information </ToneText>
                        and represents into <ToneText>pure tactile language</ToneText>, it
                        provides a possibility: haptic as a “low-resolution”
                        perceptual language, can be used as a new channel
                        of senses, by means of machine cognition and
                        artificial intelligence to expand horizons of
                        perception in humans.</ExplainText>
                </TextArea>
            </IntroSection>

            <ProductIntro>
                <TextArea>
                    <SubText>The <ToneText>RE:VISION</ToneText> Concept</SubText>
                    <ExplainText>Humans’ vision involves more complex neural
                        mechanisms and gathers distinctively more information
                        than the other senses, the <ToneText>Re:Vision</ToneText> attempts to translate visual
                        information into tactile “language” by artificial means, to discover the novel
                        perceptual channel of humans. The ultimate question is how people use their own imagination to understand the subjective world.</ExplainText>
                </TextArea>
            </ProductIntro>
        </Layout>
    )
}

const TitleSection = styled.div`
  //position: relative;
  height: 100vh;
  //width: 90vw;
  z-index: 0;
  background: black;
`

const IntroSection = styled.div`
position: relative; 
  z-index: 0;
  //overflow: scroll;
  background: black;
  padding: 2em;
  margin: -8px;
  //border: 10px;
  height: 100vh;
  //width: 90vw;
  
  display: flex;
  flex-direction: row;
`

const ProductIntro = styled(IntroSection)`
  background: white;
`

const ImageWrapper = styled.div`
  position: absolute;
  //margin-top: -8px;
  top: 11%;
  left: 10%;
`
const Title = styled.h1`
  position: absolute;
  top: 15em;
  left: 15%;
  z-index: 2;
  margin: 0;
`

const TextArea = styled.div`
position: relative;
  font-family: Roboto, sans-serif;
  top: 35vh;
left: 55vw;
  max-height: 50vh;
  //overflow: scroll;
`

const Text = styled.h4`
  font-family: Roboto,sans-serif;
  font-size: 1.5rem;
  margin: auto;
`

const SubText = styled(Text)`
    margin: auto;
    //width: 50vw;
    //height: 10vh;

    font-style: normal;
    font-weight: lighter;
    font-size: 2.5em;
    line-height: 0;
    text-transform: uppercase;
    
    color: #fff;
`
const ExplainText = styled.p`
  color: #fff;
  width: 35vw;
  position: relative;
  top: 5vh;
  
  font-style: normal;
  font-weight: lighter;
  font-size: 1.2em;
  line-height: 1.5em;
  text-align: justify;
`

const ToneText = styled.strong`
  font-weight: bold;
  //font-size: 1.1em;
`


export default Revision