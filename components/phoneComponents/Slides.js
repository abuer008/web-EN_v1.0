import styled from 'styled-components'
import SlideComponent from "./SlideComponent";
import {SlideData} from "../../data/SlideData";
import Image from 'next/image'
import Link from 'next/link'
// import 'bootstrap/dist/css/bootstrap.css'

import Slider from 'react-slick'
import { Carousel } from 'react-bootstrap'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const Slides = ({initialSlide}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        cssEase: 'ease',
        autoplaySpeed: 7000,
        initialSlide: initialSlide,
        appendDots: dots => (
            <Dots>
                <Ul>{dots}</Ul>
            </Dots>
        )
    }

    return (
        // <Carousel fade>
        //     <Carousel.Item>
        //         {/*<SlideComponent dataSource={SlideData.revision} />*/}
        //         <Link href='/'>
        //         <Image src='/revision/revisionPhoneVersion.png' width='950' height='1288' objectFit='cover' />
        //         </Link>
        //     </Carousel.Item>
        //     <Carousel.Item>
        //         <Image src='/data-visualisation/visualData.png' width='950' height='1288' objectFit='cover' />
        //         {/*<SlideComponent dataSource={SlideData.visualData} />*/}
        //     </Carousel.Item>
            <Slider {...settings}>
                {/*{*/}
                {/*    Object.entries(SlideData).map(([key, item]) => {*/}
                {/*        return <SlideComponent dataSource={item} />*/}
                {/*    })*/}
                {/*}*/}
                <SlideComponent dataSource={SlideData.revision}/>
                <SlideComponent dataSource={SlideData.visualData}/>
                <SlideComponent dataSource={SlideData.superHuman} />
                <SlideComponent dataSource={SlideData.aal} />
                <SlideComponent dataSource={SlideData.connecting} />
            </Slider>
        /*</Carousel>*/
    )
}


const Dots = styled.div`
    position: absolute;
  top: 65%;
   margin: auto;
   padding: 0;
   height: 0;
`
const Ul = styled.ul`
  position: relative;
    margin: auto;
  padding: 0;
`