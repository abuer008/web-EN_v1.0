import styled from 'styled-components'
import Layout from '../../components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import {Carousel} from 'react-bootstrap'

import {useState, useEffect} from 'react'
import SlideComponent from "../../components/phoneComponents/SlideComponent";
import { Slides } from '../../components/phoneComponents/Slides'
import {ContentsList} from '../../components/phoneComponents/ContentsList'
import {SlideData} from "../../data/SlideData";
import {DesignCardData} from '../../data/CardData'
import {PhoneMenu} from "../../components/phoneComponents/PhoneMenu";
import {usePhoneVersion} from "../../components/usePhoneVersion";
import { useDispatch, useSelector } from 'react-redux'
import { switchLanguage } from '../../store/actions/switchAction'

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
        <Layout>
            {!phoneVersion ?
                <SDPWrapper>
                    <Link href='/work/SDP'>
                        <ImageWrapper>
                            <Image src='/works/Login.Mockup.png' width='340' height='578'/>
                        </ImageWrapper>
                    </Link>
                    <TextWrapper>
                        <Title>Bonus Distribution Platform</Title>
                        <SubTitle>Legal tax avoidance is one of the most efficient tricks for increasing the revenues of
                            enterprises.</SubTitle>
                        <IconWrapper>
                            <Image src='/works/SDP.PlatformIcon.png' width='80' height='80'/>
                            <IconText>Specific Operation Platform</IconText>
                        </IconWrapper>
                    </TextWrapper>
                </SDPWrapper>
                // <div>
                //     <Carousel>
                //         <Carousel.Item>
                //             <ImgWrapper>
                //             <Image src='/revision/revisionTitlePhoto.webp' layout='fill' objectFit='cover' />
                //             </ImgWrapper>
                //         </Carousel.Item>
                //         <Carousel.Item>
                //             <ImgWrapper>
                //             <Image src='/data-visualisation/titlePhoto.png' layout='fill' objectFit='cover' />
                //             </ImgWrapper>
                //         </Carousel.Item>
                //     </Carousel>
                // </div>
                :
                <div style={{overflow: 'hidden'}}>
                    <Slides initialSlide={randomSlide} />
                    <ContentsList contentsData={DesignCardData} listTitle='Comprehensive design process'/>
                </div>
            }

        </Layout>
    )
}

const SDPWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const ImgWrapper = styled.div`
    width: 100vw;
`

const ImageWrapper = styled.div`
  position: relative;
  top: 55vh;
  left: 38vw;
   width: 22vw;
   height: auto;

  :hover {
    cursor: pointer;
  }

  transform: translate(-50%, -50%)
`

const TextWrapper = styled.div`
  position: relative;
  top: 20vh;
  left: 27vw;
  width: 25vw;
  padding-top: 7vh;
`

const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Title = styled.h2`
  font-weight: 900;
  font-size: 4vw;
  margin: auto;
`

const SubTitle = styled.p``

const IconText = styled(SubTitle)`
  width: 5vw;
  font-size: 0.8em;
  font-weight: bold;
`

export default Works