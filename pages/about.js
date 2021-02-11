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
                                <IconComponent pdfType='github' background='black' plainText='Source code'
                                               href='https://github.com/abuer008/web-portfolio-2021.git'/>
                            </IconWrapper>
                        </TextWrapper>
                    </DesignImgWrapper>
                </DesignWrapper>
                <TechWrapper>
                    <Title>{aboutData.techniques.heading}</Title>
                    <DesignImgWrapper>
                        <ImgWrapper style={{border: 'none', textAlign: 'right', width: '150%'}}>
                            <Image src='/about/nextjsLogo.png' width='200' height='120' layout='intrinsic'/>
                        </ImgWrapper>
                        <Plain>{aboutData.techniques.plainText}</Plain>
                    </DesignImgWrapper>
                    <Plain>Here are the using frameworks and software of each project</Plain>
                    <GridWrapper>
                        <Link href='/interactive-projects/revision'>
                        <ProjectTitle style={{width: '50%'}}>Re:Vision</ProjectTitle>
                        </Link>
                        <Plain style={{margin: 'auto 2em', lineHeight: '2em'}}><Strong>Rhino</Strong> for product modelling. <Strong>Arduino,
                            vvvv</Strong> handle the functional prototype and the visualisation.</Plain>
                    </GridWrapper>
                    <GridWrapper>
                        <Link href='/interactive-projects/data-visualisation'>
                        <ProjectTitle style={{width: '115%'}}>Syrian civil war</ProjectTitle>
                        </Link>
                        <Plain style={{margin: 'auto 2em', lineHeight: '2em'}}><Strong>Nodejs, MongoDb</Strong> for the back-end API
                            server. <Strong>Threejs</Strong> handling three-dimensional visualisation on browser.
                        <Strong> Material-ui</Strong> for efficient interface realisation.
                        <Strong> Docker, AWS</Strong> for containerisation and deploying on the cloud server.</Plain>
                    </GridWrapper>
                    <GridWrapper>
                        <Link href='/interactive-projects/super-human'>
                        <ProjectTitle style={{width: '50%'}}>Super Human</ProjectTitle>
                        </Link>
                        <Plain style={{margin: 'auto 2em', lineHeight: '2em'}}><Strong>MoGraph</Strong> for the three-dimensional Interface simulations. <Strong>Redshift</Strong> handling the final visualisation.</Plain>
                    </GridWrapper>
                    <GridWrapper>
                        <Link href='/interactive-projects/aal'>
                        <ProjectTitle style={{width: '55%'}}>Ambient Assisted Living</ProjectTitle>
                        </Link>
                        <Plain style={{margin: 'auto 2em', lineHeight: '2em'}}><Strong>x-particle </Strong> for the particles simulations. <Strong>Arduino, vvvv</Strong> for verifying the possibility of the posture sensors.</Plain>
                    </GridWrapper>
                    <GridWrapper>
                        <Link href='/interactive-projects/connecting'>
                        <ProjectTitle style={{width: '50%'}}>Connecting</ProjectTitle>
                        </Link>
                        <Plain style={{margin: 'auto 2em', lineHeight: '2em'}}><Strong>SwiftUI </Strong>for the interface and interactive effects. <Strong>SpriteKit </Strong>handling the movement of character.</Plain>
                    </GridWrapper>
                </TechWrapper>
                <div style={{height: '5em'}} />
                <p style={{textAlign: 'right', fontSize: '0.9em', fontWeight: '900'}}>&copy; 2021 Bowei Xiao</p>
            </ContentWrapper>
        </Layout>
    )
}

const GridWrapper = styled.div`
    display: flex;
  flex-direction: row;
  width: 100%;
  margin: 4em auto;
`

const ProjectTitle = styled.h2`
  font-weight: 300;
  font-size: 3em;
  margin: auto;
  text-align: right;
  line-height: 1em;
  
  cursor: pointer;
`

const Strong = styled.strong`
  font-family: Roboto Condensed, sans-serif;
  font-weight: bold;
  font-size: 1.7em;
`

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