import Image from 'next/image'
import styled from 'styled-components'
import { Sphere } from '../visualData/Sphere'

import { TitleWrapper, ImgWrapper, TextWrapper, PlainTextWrapper, ArtiWrapper, MainTitle, P1, Subtitle, Strong, P } from "./PhoneRevision";
import {IconComponent} from "../IconComponent";

export const PhoneVisualData = () => {
    return (
        <>
            <TitleWrapper>
                <ImgWrapper>
                    <Image src='/data-visualisation/visualData.png' width='950' height='1488' objectFit='cover' />
                </ImgWrapper>
                <TextWrapper black>
                    <MainTitle style={{width: '60%'}}>
                        <H1>Syrian Civil War</H1>
                    </MainTitle>
                    <P1>Data Visualisation</P1>
                </TextWrapper>
            </TitleWrapper>

            <ArtiWrapper>
                <ImgWrapper>
                    <Image alt='syrian refugees walking on the street' src='/data-visualisation/refugeesFamily.webp' width='642' height='638' />
                </ImgWrapper>
                <PlainTextWrapper black>
                    <Subtitle>Syrian Civil War</Subtitle>
                    <P>The Syrian Civil War is an ongoing civil war fought in Syria, so far noticed as the biggest war in the 21st century. On 2 January 2013, the UN stated that 60,000 had been killed since the civil war began, four months later, the UN’s updated figure for the death toll had reached 80,000. In the visualisation of the Syrian Civil War, it wasn’t trying to deliver any political opinion, but making people realise, that Syrian citizens, who were murdered in the battlefield, are being recorded into a piece of data but are the real brutal tragedies.</P>
                </PlainTextWrapper>
            </ArtiWrapper>

            <ArtiWrapper>
                <PlainTextWrapper black>
                    <Subtitle>Source of truth</Subtitle>
                </PlainTextWrapper>
                <ImgWrapper small>
                    <Image alt='the example of data source' src='/data-visualisation/sourceOfTruth.png' width='598' height='432' />
                </ImgWrapper>
                <PlainTextWrapper black>
                    <P>Data of the Syrian Civil War was provided by UCDP - The Uppsala Conflict Data Program, the world’s leading provider of data on organised violence and the oldest ongoing data collection project for civil war. The data were collecting and analysing served as the starting point for visual contents and interactions.</P>
                </PlainTextWrapper>
            </ArtiWrapper>

            <ArtiWrapper>
                <PlainTextWrapper black>
                    <Subtitle>Perspective of Design</Subtitle>
                </PlainTextWrapper>
                <ImgWrapper small>
                    <Image alt='the example of design' src='/data-visualisation/perspectiveOfDesign.png' width='598' height='468' />
                </ImgWrapper>
                <PlainTextWrapper black>
                    <P>Each piece of data contains numbers of information, which most of them have no interest to us. The relative information we focus on is the numbers, number of deaths, and the coordinate of individual battles. Numbers are the most simple and powerful data in those data set; the number of casualties means in those battles vivid lives have been taking, uncountable families have been broken apart. Therefore, the numbers would be essential elements in the design perspective.</P>
                </PlainTextWrapper>
            </ArtiWrapper>

            <ArtiWrapper>
                <PlainTextWrapper>
                    <Subtitle>Rethinking of design and techniques</Subtitle>
                    <P>Data, the foundation of the interface design. Representing data, decoration and make the data more understandable to a human, are the essential tasks of interface design. In this particular project, through the experience of handling data, I’m realised that in a productive project, the role of techniques should be involved in more critical parts. Taking techniques into consideration from the design perspective makes the process more efficient and realistic. Most importantly, the conceptual idea can be implemented consistently in the final product.</P>
                </PlainTextWrapper>
            </ArtiWrapper>

            <SphereWrapper>
                <Sphere />
            </SphereWrapper>

            <IconWrapper>
                <Subtitle style={{fontSize: '1.2em', textTransform: 'none', margin: 'auto', paddingTop: '2em'}}>* For further information about technique details please check the repository</Subtitle>
                <IconComponent pdfType='github' background='black' plainText='Link to Github' href='https://github.com/abuer008/syrian-civil-war-visualisation.git' />
            </IconWrapper>
        </>
    )
}

const IconWrapper = styled.div`
    margin: 3em;
  padding: 0;
`

export const H1 = styled.h1`
    font-size: 2.2em;
  margin: auto;
`

const SphereWrapper = styled.div`
    position: relative;
  bottom: 12em;
  height: 30vh;
  z-index: -1;
  margin: auto;
  padding: 0;
  
`