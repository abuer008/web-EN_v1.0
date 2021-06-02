import Layout from '../components/Layout'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

import {aboutData} from "../data/About";
import {IconComponent} from "../components/IconComponent";

const About = () => {
    return (
        <Layout backgroundColor='#fff' overwrite>
            <ContentWrapper>

                <ToolWrapper>
                    <Who>Toolsets</Who>
                    <HoriWrapper>
                        <VertiWrapper>
                            <Subtitle>Visual Design</Subtitle>
                            <P>Sketch - advanced</P>
                            <P>Figma - advanced</P>
                            <P>Adobe CC - advanced</P>
                        </VertiWrapper>
                        <VertiWrapper>
                            <Subtitle>Prototype</Subtitle>
                            <P>Framer - intermediate</P>
                            <P>vvvv - intermediate</P>
                        </VertiWrapper>
                        <VertiWrapper>
                            <Subtitle>3D & Motion Design</Subtitle>
                            <P>C4D - advanced</P>
                            <P>Rhino, Keyshot - advanced</P>
                        </VertiWrapper>
                        <VertiWrapper>
                            <Subtitle>Managerment</Subtitle>
                            <P>Abstract - intermediate</P>
                        </VertiWrapper>
                    </HoriWrapper>
                    <HoriWrapper>
                        <VertiWrapper>
                            <Subtitle>Frontend</Subtitle>
                            <P>Html, CSS, javascript - intermediate</P>
                            <P>Reactjs, nodejs - intermediate</P>
                        </VertiWrapper>
                    </HoriWrapper>
                </ToolWrapper>

            </ContentWrapper>
        </Layout>
    )
}

const ToolWrapper = styled.div`
    display: flex;
  flex-direction: column;
  //height: 600px;
  padding: 20px 0;
`

const HoriWrapper = styled.div`
    display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const VertiWrapper = styled.div`
    display: flex;
  flex-direction: column;
  height: 200px;
`

const Subtitle = styled.h3`
    font-size: 1.4rem;
  margin: 0.8rem 0;
`

const P = styled.p`
  font-size: 1.1rem;
    margin: 10px 0;
`

const WhoWrapper = styled.div`
    display: flex;
  flex-direction: row;
  margin: 0 auto;
  justify-content: space-evenly;
  align-items: center;
`

const WhoTextWrapper = styled.div`
    display: flex;
  flex-direction: column;
  max-width: 40%;
`

const Who = styled.h2`
    //font-family: source-han-serif-sc, serif;
  font-size: 2.7rem;
  margin: 1rem 0;
`

const WhoPlain = styled.p`
  //font-family: source-han-serif-sc, serif;
    font-size: 1.4rem;
  line-height: 1.7rem;
`


const GridWrapper = styled.div`
    display: flex;
  flex-direction: row;
  width: 100%;
  margin: 4em auto;
  
  @media all and (max-width: 850px) {
    flex-direction: column;
  }
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
  
  @media all and (max-width: 850px) {
    flex-direction: column;
  }
`

export const ContentWrapper = styled.div`

  position: relative;
  width: 90%;
  height: 90%;
  max-width: 950px;
  top: 10vh;
  //left: 50%;
  padding: 10vh 0;
  margin: auto;

  //transform: translate(-50%, 0%)
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
  
  @media all and (max-width: 850px) {
    font-size: 1.4em;
    padding-bottom: 20px;
  }
`

const ConceptWrapper = styled.div``

const DesignWrapper = styled.div``

const DesignImgWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5%;
  margin-bottom: 10%;
  justify-content: flex-start;
  
  @media all and (max-width: 850px) {
    flex-direction: column;
  }
`

const ImgWrapper = styled.div`
  //width: 200%;
  //height: 50%;
  //border: 1px solid black;
  width: 100vw;
  
  padding: 0;
  margin: 0 20px;
  
  @media all and (max-width: 850px) {
    width: 100%;
    margin: auto;
  }
`

const TechWrapper = styled(DesignWrapper)``

const Title = styled.h1`
    @media all and (max-width: 850px) {
      font-size: 1.7em;
    }
`

const Plain = styled.p`
  font-size: 1.1em;
  line-height: 1.4em;
  margin-bottom: 4em;
`


export default About