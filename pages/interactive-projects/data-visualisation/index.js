import Image from 'next/image'
import Layout from '../../components/Layout'
import styled from 'styled-components'
import { VDText } from "../../components/visualData/VDText";

import { dataVisualisation } from "../../data/DataVisualisation"

const DataVisualisation = () => {
    return (
        <Layout>
            <ImageWrapper>
                <Image src='/data-visualisation/titlePhoto.png' layout='fill' objectFit='cover'/>
                <BlurRect />
            </ImageWrapper>
            <Title>
                <SubTitle>
                    Data Visualisation
                </SubTitle>
                <MainTitle>Syrian Civil War</MainTitle>
                <YearText>2016-2019</YearText>
                <Button>
                    <ButtonIcon>
                        <Image src='/data-visualisation/buttonIcon.svg' width='42' height='42'/>
                    </ButtonIcon>
                    <ButtonText>Enter Interactive DEMO</ButtonText>
                </Button>
            </Title>
            <VDText heading={dataVisualisation[0].heading} plainText={dataVisualisation[0].plainText} />
        </Layout>
    )
}

const ImageWrapper = styled.div`
    //position: fixed;
    z-index: -1;
    //filter: blur(1px);
`

const BlurRect = styled.div`
  //width: 100vw;
  //height: 100vh;
  //
  //backdrop-filter: blur(20px);
`

const Title = styled.div`
  position: absolute;
  top: 30vh;
  left: 52vw;
  
  font-family: Roboto, sans-serif;
  font-style: normal;
  
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const SubTitle = styled.h3`
  font-family: Roboto Condensed, sans-serif;
  font-weight: 300;
  font-size: 3em;
  line-height: 1em;
  
  margin: 0;
`

const MainTitle = styled.h1`
  max-width: 470px;
  
  font-weight: 900;
  font-size: 6em;
  line-height: 0.85em;
  text-transform: uppercase;
  
  margin: 0;
`

const YearText = styled.h4`
  font-weight: 300;
  font-size: 4em;
  
  margin: 0;
`

const Button = styled.div`
  min-width: 12vw;
  max-height: 7vh;
  background: black;
  border-radius: 1.2em;
  margin: 2em 0;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
  :hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
  }
`

const ButtonIcon = styled.div`
  padding: 0 1em;
`

const ButtonText = styled.h6`
  color: white;
  max-width: 10vw;
  font-size: 1.2em;
`

export default DataVisualisation