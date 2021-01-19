import Layout from '../components/Layout'
import styled from 'styled-components'
import Image from 'next/image'

import {aboutData} from "../data/About";

const About = () => {
    return (
        <Layout>
            <Background>
                <Image src='/aboutBg.png' layout='intrinsic' width='2880' height='4724'/>
            </Background>
            <ContentWrapper>
                <FrontTitle>Full stack process of the interactive portfolio</FrontTitle>
                <FrontText>{aboutData.frontText}</FrontText>
                <ConceptWrapper>
                    <Title>{aboutData.conceptualApproach.heading}</Title>
                    <Plain>{aboutData.conceptualApproach.plainText}</Plain>
                </ConceptWrapper>
                <DesignWrapper>
                    <Title>{aboutData.design.heading}</Title>
                </DesignWrapper>
                <TechWrapper>
                    <Title>{aboutData.techniques.heading}</Title>
                </TechWrapper>
            </ContentWrapper>
        </Layout>
    )
}

const Background = styled.div`
  position: absolute;
  margin: -8px 0;
  z-index: -1;
  //top: -28px;
`

const ContentWrapper = styled.div`
  font-family: Roboto, sans-serif;
  font-style: normal;
  
  position: absolute;
  width: 80%;
  max-width: 1100px;
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
  width: 70%;
  margin: auto 0;
  padding-bottom: 80px;
`

const ConceptWrapper = styled.div``

const DesignWrapper = styled.div``

const TechWrapper = styled(DesignWrapper)``

const Title = styled.h1``

const Plain = styled.p``

export default About