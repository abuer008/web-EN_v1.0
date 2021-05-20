import Image from "next/image";
import Layout from '../components/Layout'
import {ContentList} from "../components/contentList";
import {designContents, implementData, metricsData} from "../data/contentListData";
import styled from "styled-components";
import React from "react";

const StandardContents = () => {
    return (
        <Layout showFooter>
            <Landing>
                <TitleWrapper>
                    <Image src='/work/work_ENtitle.svg' alt='makes idea realistic' width='635' height='230' />
                </TitleWrapper>
                <BgWrapper>
                    <div style={{position: 'absolute', bottom: '10%', right: '15%'}}>
                        <Image src='/work/work_titleBG.svg' alt='illustration of landing page' width='1080' height='399' />
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
  width: 100%;
    margin: 0 auto;
`

export default StandardContents;