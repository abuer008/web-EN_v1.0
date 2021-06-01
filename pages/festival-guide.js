import styled from 'styled-components'
import Image from 'next/image'
import Layout from '../components/Layout'

const FestivalGuide = () => {
    return (
        <Layout backgroundColor='white' overwrite showFooter>
            <ImgWrapper>
                <Image src='/festivalGuide/mocktitle.webp' width='1440' height='568' layout='responsive' objectFit='contain' />
            </ImgWrapper>
            <Text>
                <H1>Festival Guide</H1>
                <P>Germany has a long tradition of regional folk festivals, with more than 50 different folk festivals each year. The "Festival Guide" is a navigation application that consolidates information about the various festivals and provides a comprehensive basic service for festival-goers. It also collects crowd movements, predicts crowd hazards such as mass panic in advance, and shows the nearest service points in case of emergencies.</P>
            </Text>
        </Layout>
    )
}

const ImgWrapper = styled.div`
  //position: absolute;
  width: 100vw;
`

const Text = styled.div`
  position: relative;
    max-width: 500px;
  left: 50vw;
`

const H1 = styled.h1`
    font-size: 3.5rem;
`

const P = styled.p``

export default FestivalGuide;