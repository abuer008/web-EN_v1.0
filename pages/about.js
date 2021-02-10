import Layout from '../components/Layout'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

import {aboutData} from "../data/About";
import {IconComponent} from "../components/IconComponent";

const About = () => {
    return (
        <Layout>
            <ContentWrapper>
                <FrontTitle style={{color: 'red'}}>This page is not finishing yet.</FrontTitle>
                <FrontTitle>Full stack process of the interactive portfolio</FrontTitle>
                <FrontText>{aboutData.frontText}</FrontText>
                <ConceptWrapper>
                    <Title>{aboutData.conceptualApproach.heading}</Title>
                    <Plain>{aboutData.conceptualApproach.plainText}</Plain>
                </ConceptWrapper>
                <DesignWrapper>
                    <Title>{aboutData.design.heading}</Title>
                    <DesignImgWrapper>
                        <ImgWrapper>
                            <Image src='/about/Main Page.revision.png' width='1440' height='900' layout='intrinsic'/>
                        </ImgWrapper>
                        <TextWrapper>
                            <Plain>{aboutData.design.plainText}</Plain>
                            <IconWrapper>
                                <IconComponent pdfType='figma' background='black' plainText='original figma file'
                                               href='https://www.figma.com/file/XBspF8rki50bJT8Y0qnFmG/Web-Portfolio-2020-Prototype?node-id=0%3A1'/>
                                <IconComponent pdfType='github' background='black' plainText='Source code' href='https://github.com/abuer008/web-portfolio-2021.git'/>
                            </IconWrapper>
                        </TextWrapper>
                    </DesignImgWrapper>
                </DesignWrapper>
                <TechWrapper>
                    <Title>{aboutData.techniques.heading}</Title>
                    <DesignImgWrapper>
                        <ImgWrapper style={{border: 'none', textAlign: 'right', width: '150%'}}>
                            <Image src='/about/nextjsLogo.png' width='200' height='120' layout='intrinsic' />
                        </ImgWrapper>
                        <Plain>{aboutData.techniques.plainText}</Plain>
                    </DesignImgWrapper>
                </TechWrapper>
            </ContentWrapper>
        </Layout>
    )
}

const TextWrapper = styled.div`
`

const IconWrapper = styled.div`
    display: flex;
  flex-direction: row;
`

const ContentWrapper = styled.div`

  position: absolute;
  width: 80%;
  max-width: 950px;
  top: 14%;
  left: 50%;

  transform: translate(-50%, 0%)
`

const FrontTitle = styled.h6`
  font-weight: 900;
  font-size: 1.2em;
`

const FrontText = styled(FrontTitle)`
  font-weight: 300;
  font-size: 3em;
  text-transform: uppercase;
  width: 80%;
  margin: auto 0;
  padding-bottom: 80px;
`

const ConceptWrapper = styled.div``

const DesignWrapper = styled.div``

const DesignImgWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5%;
  margin-bottom: 10%;
`

const ImgWrapper = styled.div`
  width: 200%;
  height: 50%;
  border: 1px solid black;
  margin-right: 5%;
  padding: 0;
`

const TechWrapper = styled(DesignWrapper)``

const Title = styled.h1``

const Plain = styled.p`
  font-size: 1.1em;
  line-height: 1.4em;
  margin-bottom: 4em;
`


export default About