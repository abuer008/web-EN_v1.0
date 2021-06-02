import styled from 'styled-components'
import Layout from '../components/Layout'
import Image from 'next/image'
import Link from 'next/link'

import { Reveal, Tween } from 'react-gsap';

import React, {useState, useEffect} from 'react'
import SlideComponent from "../components/phoneComponents/SlideComponent";
import { Slides } from '../components/phoneComponents/Slides'
import {ContentsList} from '../components/phoneComponents/ContentsList'
import {SlideData} from "../data/SlideData";
import {DesignCardData} from '../data/CardData'
import {PhoneMenu} from "../components/phoneComponents/PhoneMenu";
import {usePhoneVersion} from "../components/usePhoneVersion";
import { useDispatch, useSelector } from 'react-redux'
import { switchLanguage } from '../store/actions/switchAction'
import {ContentList} from "../components/contentList";
import {designContents, implementData, metricsData} from "../data/contentListData";

const Works = () => {
    const [randomSlide, setRandomSlide] = useState(0)
    const phoneVersion = usePhoneVersion()
    const {language} = useSelector(state => state.language)

    useEffect(() => {
        setRandomSlide(getRandomInt(5))
    }, [])


    const getRandomInt = max => {
        return Math.floor(Math.random() * max)
    }

    return (
        <Layout backgroundColor='white' overwrite showFooter>
            {/*{!phoneVersion ?*/}

            {/*    <SDPWrapper>*/}
            {/*        <Link href='/SDP'>*/}
            {/*            <ImageWrapper>*/}
            {/*                <Image src='/works/Login.Mockup.png' width='340' height='578'/>*/}
            {/*            </ImageWrapper>*/}
            {/*        </Link>*/}
            {/*        <TextWrapper>*/}
            {/*            <Title>Bonus Distribution Platform</Title>*/}
            {/*            <SubTitle>Legal tax avoidance is one of the most efficient tricks for increasing the revenues of*/}
            {/*                enterprises.</SubTitle>*/}
            {/*            <IconWrapper>*/}
            {/*                <Image src='/works/SDP.PlatformIcon.png' width='80' height='80'/>*/}
            {/*                <IconText>Specific Operation Platform</IconText>*/}
            {/*            </IconWrapper>*/}
            {/*        </TextWrapper>*/}
            {/*    </SDPWrapper>*/}
            {/*    // <div>*/}
            {/*    //     <Carousel>*/}
            {/*    //         <Carousel.Item>*/}
            {/*    //             <ImgWrapper>*/}
            {/*    //             <Image src='/revision/revisionTitlePhoto.webp' layout='fill' objectFit='cover' />*/}
            {/*    //             </ImgWrapper>*/}
            {/*    //         </Carousel.Item>*/}
            {/*    //         <Carousel.Item>*/}
            {/*    //             <ImgWrapper>*/}
            {/*    //             <Image src='/data-visualisation/titlePhoto.png' layout='fill' objectFit='cover' />*/}
            {/*    //             </ImgWrapper>*/}
            {/*    //         </Carousel.Item>*/}
            {/*    //     </Carousel>*/}
            {/*    // </div>*/}
            {/*    :*/}
            {/*    <div style={{overflow: 'hidden'}}>*/}
            {/*        <Slides initialSlide={randomSlide} />*/}
            {/*        <ContentsList contentsData={DesignCardData} listTitle='Comprehensive design process'/>*/}
            {/*    </div>*/}
            {/*}*/}

            <Wrapper>
                <Reveal>
                    <Tween
                        from={{opacity: 0, y: '100'}}
                        duration={1}
                        delay={0.3}
                    >
                <ImgWrapper>
                    <Image src='/works/BDPtitlePhoto.webp' width='810' height='765'/>
                </ImgWrapper>
                    </Tween>
                </Reveal>
                <Text>
                    <H1 fgColor='#333333'>Bonus Distribution Platform</H1>
                    <P>The tax incentives of the Hainan Freeport offer a variety of tax avoidance possibilities for enterprises and individuals. The main functions of the collection platform are paying corporate income tax on behalf of enterprises through a project-specific management platform and distributing project dividends to employees, thereby reducing tax expenses.</P>
                    <Link href='/SDP'>
                    <Button bgColor='#333333'>Enter the project</Button>
                    </Link>
                </Text>
            </Wrapper>

            <Wrapper>
                <ImgWrapper>
                    <Image src='/festivalGuide/fgTitlePhoto.webp' width='810' height='765' />
                </ImgWrapper>
                <Text>
                    <H1 fgColor='#FF9066'>Festival Guide</H1>
                    <P>Germany has a long tradition of regional fairs, with more than 50 different fairs per year. The "Festival Guide" is a navigation application that bundles information about the different festivals and provides a comprehensive basic service for festival visitors. It also gathers crowd movements, predicts hazards such as mass panic in advance, and indicates the nearest service points for emergencies.</P>
                    <Link href='/festival-guide'>
                        <Button bgColor='#FF9066'>Enter the project</Button>
                    </Link>
                </Text>
            </Wrapper>
        </Layout>
    )
}

const Button = styled.div`
    background-color: ${props => props.bgColor};
  color: white;
  
  font-weight: 900;
  font-size: 1.2rem;
  
  width: 240px;
  height: 20px;
  padding: 20px;
  
  transition: 0.3s;
  :hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`

const Wrapper = styled.div`
    display: flex;
  flex-direction: row;
  align-items: center;
  height: 80vh;
  padding-bottom: 10vh;
`

const Text = styled.div`
    max-width: 500px;
  width: 40vw;
  padding: 20px;
`

const H1 = styled.h1`
    font-size: 3.2rem;
  margin: auto;
  color: ${props => props.fgColor};
`

const P = styled.p`
`

const ImgWrapper = styled.div`
    height: 70vh;
`

export default Works