import Layout from '../components/Layout'
import styled from 'styled-components'
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
                    {/*<Link href='/'>*/}
                        <IconComponent
                            pdfType={false}
                            background='white'
                            plainText='Source code'
                        />
                    {/*</Link>*/}
                </DesignWrapper>
                <TechWrapper>
                    <Title>{aboutData.techniques.heading}</Title>
                </TechWrapper>
                <Plain>{aboutData.conceptualApproach.plainText}</Plain>
            </ContentWrapper>
        </Layout>
    )
}

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

const TechWrapper = styled(DesignWrapper)``

const Title = styled.h1``

const Plain = styled.p`
    font-size: 1.1em;
  line-height: 1.4em;
  margin-bottom: 4em;
`


export default About