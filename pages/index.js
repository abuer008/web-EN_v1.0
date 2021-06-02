import Image from "next/image";
import Link from 'next/link';
import {useState, useEffect, useRef} from 'react';
import Layout from '../components/Layout'
import {ContentList} from "../components/contentList";
import {designContents, implementData, metricsData} from "../data/contentListData";
import styled from "styled-components";
import React from "react";
import StartAnima from "../components/StartAnima";
import * as LandingAnima from '../public/work/landingPageAnima.json';

import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Tween } from 'react-gsap';
import {HomeItem} from "../components/homeItem";
import {innovateData, tactileData} from "../data/homeData";
import {ImgWrapper} from "../components/phoneComponents/PhoneRevision";

gsap.registerPlugin(ScrollTrigger)

const StandardContents = () => {

    const [tactilePlayState, setTactilePlayState] = useState('stop')
    const [innovatePlayState, setInnovatePlayState] = useState('stop')
    const [showTactile, setShowTactile] = useState(false)
    const [showInno, setShowInno] = useState(false)

    const handleTactileEnter = () => {
        setTactilePlayState('play')
        setShowTactile(true)
    }

    const handleTactileLeave = () => {
        setTactilePlayState('reverse')
        setShowTactile(false)
    }

    const handleInnovateEnter = () => {
        setInnovatePlayState('play')
        setShowInno(true)
    }

    const handleInnovateLeave = () => {
        setInnovatePlayState('reverse')
        setShowInno(false)
    }

    useEffect(() => {
    })

    return (
        <Layout backgroundColor='#fff' overwrite>
            <Tween from={{opacity: 0}} duration={1}>
            <HeroWrapper>
            <Wrapper>
                <H1 bg='#DC3545'>Strategic.</H1>
                <H1 bg='#17A2B8'>Research.</H1>
                <H1 bg='#007BFF'>Design.</H1>
                <H1 bg='#E83E8C'>Code.</H1>
                <ButtonWrapper>
                    <Link href='/work'>
                    <Rect bg='#007BFF' onMouseEnter={handleTactileEnter} onMouseLeave={handleTactileLeave}>
                        <H3 show={showTactile}>Enter</H3>
                        <H2>Tactile.</H2>
                    </Rect>
                    </Link>
                    <Link href='/interactive-projects'>
                    <Rect onMouseEnter={handleInnovateEnter} onMouseLeave={handleInnovateLeave}>
                        <H3 show={showInno}>Enter</H3>
                        <H2>Innovate.</H2>
                    </Rect>
                    </Link>
                </ButtonWrapper>
            </Wrapper>

            <Tween
                from={{x: '-100%'}}
                duration={0.2}
                playState={tactilePlayState}
            >
            <TactileBg />
            </Tween>

            <Tween
                from={{x: '100%'}}
                duration={0.2}
                playState={innovatePlayState}
            >
            <InnovateBg />
            </Tween>

            <ListWrapper>
                <HeroTitle>Tangible UX Design.</HeroTitle>
                {
                    tactileData.map((item, key) => {
                        return <HomeItem key={key} index={key + 1} heading={item.heading} plain={item.plain} playState={tactilePlayState} movement='-100' />
                    })
                }
            </ListWrapper>

                <InnoListWrapper>
                    <HeroTitle>Innovative HMI.</HeroTitle>
                    {
                        innovateData.map((item, key) => {
                            return <HomeItem key={key} index={key + 1} heading={item.heading} plain={item.plain} playState={innovatePlayState} movement='100'/>
                        })
                    }
                </InnoListWrapper>

                <Contact style={{opacity: showInno ? '0' : '1'}}>
                    <GitWrapper>
                        <Link href='https://github.com/abuer008'>
                        <Image src='/github.png' width='36' height='36' />
                        </Link>
                    </GitWrapper>
                    <Email>
                        <Link href='mailto:x.bowei@aol.com'>
                        <P>x.bowei@aol.com</P>
                        </Link>
                    </Email>
                </Contact>

            </HeroWrapper>
            </Tween>
            </Layout>
    )
}

const Contact = styled.div`
    position: absolute;
  width: 10vw;
  right: 0;
  bottom: 5vh;
  text-align: right;
  transition: 0.2s;
`

const GitWrapper = styled.div`
    margin: 0 1rem;
  transition: 0.3s;
  :hover {
    transform: scale(1.05);
  }
`

const Name = styled.h4`
    font-family: ubuntu, sans-serif;
  font-weight: lighter;
  margin: 0 1rem;
`

const Email = styled.div`
    background-color: #343A40;
  padding: 0.1rem 1rem;
  margin: 1rem 0;
  cursor: pointer;
  transition: 0.3s;
  :hover {
    transform: scale(1.05);
  }
`

const P = styled.p`
  font-family: Ubuntu, sans-serif;
  font-weight: bold;
    color: white;
`

const HeroWrapper = styled.div`
  position: absolute;
    width: 100vw;
  height: 100vh;
  overflow: hidden;
  font-family: Roboto, sans-serif;
`

const HeroTitle = styled.h1`
    font-size: 3.2rem;
`

const ListWrapper = styled.div`
  position: absolute;
  color: white;
  cursor: default;
  
    display: flex;
  flex-direction: column;
  height: 80vh;
  top: 10vh;
  justify-content: space-evenly;
  padding-left: 8rem;
`

const InnoListWrapper = styled(ListWrapper)`
    left: 65vw;
  padding: 0;
`

const TactileBg = styled.div`
  position: absolute;
  top: 0;
    width: 50.5vw;
  height: 100vh;
  background-color: #007BFF;
  z-index: -1;
`

const InnovateBg = styled(TactileBg)`
    background-color: #343A40;
  left: 49.5vw;
`

const ButtonWrapper = styled.div`
    display: flex;
  flex-direction: row;
  color: white;
  margin: 2rem 0;
`

const Rect = styled.div`
    background-color: ${props => props.bg ? `${props.bg}` : `#343A40`};
  height: 120px;
  width: 120px;
  text-align: center;
  transition: 0.3s;
  
  :hover {
    cursor: pointer;
    z-index: 999;
    transform: scale(1.1);
  }
`

const H2 = styled.h2`
    margin: 0.5rem;
`
const H3 = styled.h3`
    padding-top: 1rem;
  margin: 0;
  transition: 0.3s;
  opacity: ${props => props.show ? '1' : '0'}
`

const H1 = styled.h1`
    font-size: 2.4rem;
  color: #343A40;
  margin: auto;
  padding: 0.1rem;
  transition: 0.2s;
  
  :hover {
    cursor: pointer;
    color: ${props => props.bg};
  }
`


const Landing = styled.div`
    height: 95vh;
`

const Wrapper = styled.div`
  //position: static;
  //height: 80vh;
  //width: 50%;
    display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  position: relative;
  top: 28vh;
`

const TitleWrapper = styled.div`
  position: absolute;
   top: 26vh; 
  left: 15%;
  
  z-index: 999;
`

const BgWrapper = styled.div`
  width: 80%;
    margin: 0 auto;
`

export default StandardContents;