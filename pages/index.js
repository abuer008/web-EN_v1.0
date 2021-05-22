import Image from "next/image";
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
        <Layout showFooter>
            <Landing>
                <TitleWrapper>
                    <Image src='/work/work_ENtitle.svg' alt='makes idea realistic' width='635' height='230' />
                </TitleWrapper>
                <BgWrapper>
                    <div style={{position: 'absolute', top: '20vh'}}>
                        {/*<Image src='/work/work_titleBG.svg' alt='illustration of landing page' width='1080' height='399' />*/}
                        <StartAnima animaData={LandingAnima} direction={1} isStopped={false} speed={0.5} width='100%' height='auto' />
                    </div>
                </BgWrapper>
            </Landing>

            <Wrapper>
                <ContentList data={designContents} title='Comprehensive design process' />
                <ContentList data={implementData} reverse title='Frontend implementation' />
                <ContentList data={metricsData} title='Design metrics' />
            </Wrapper>
        </Layout>
    )
}



const Landing = styled.div`
    height: 95vh;
`

const Wrapper = styled.div`
    position: relative;
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