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

gsap.registerPlugin(ScrollTrigger)

const StandardContents = () => {

    useEffect(() => {
    })

    return (
        <Layout backgroundColor='#fff' overwrite>
            {/*<Landing>*/}
            {/*    <TitleWrapper>*/}
            {/*        <Image src='/work/work_ENtitle.svg' alt='makes idea realistic' width='635' height='230' />*/}
            {/*    </TitleWrapper>*/}
            {/*    <BgWrapper>*/}
            {/*        <div style={{position: 'absolute', top: '20vh'}}>*/}
            {/*            /!*<Image src='/work/work_titleBG.svg' alt='illustration of landing page' width='1080' height='399' />*!/*/}
            {/*            <StartAnima animaData={LandingAnima} direction={1} isStopped={false} speed={0.7} width='100%' height='auto' />*/}
            {/*        </div>*/}
            {/*    </BgWrapper>*/}
            {/*</Landing>*/}

            {/*<Wrapper>*/}
            {/*    <ContentList data={designContents} title='Comprehensive design process' />*/}
            {/*    <ContentList data={implementData} reverse title='Frontend implementation' />*/}
            {/*    <ContentList data={metricsData} title='Design metrics' />*/}
            {/*</Wrapper>*/}

            <Wrapper>
                <H1 bg='#DC3545'>Strategic.</H1>
                <H1 bg='#17A2B8'>Research.</H1>
                <H1 bg='#007BFF'>Design.</H1>
                <H1 bg='#E83E8C'>Code.</H1>
                <ButtonWrapper>
                    <Link href='/work'>
                    <Rect bg='#007BFF'>
                        <H2>Tactile.</H2>
                    </Rect>
                    </Link>
                    <Link href='/interactive-projects'>
                    <Rect>
                        <H2>Innovate.</H2>
                    </Rect>
                    </Link>
                </ButtonWrapper>
            </Wrapper>

        </Layout>
    )
}

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
    padding-top: 20px;
`

const H1 = styled.h1`
    font-size: 2.4rem;
  color: #343A40;
  margin: auto;
  padding: 0.2rem;
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
  top: 30vh;
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