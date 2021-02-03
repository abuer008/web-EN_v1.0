import styled from 'styled-components'
import Layout from '../../components/Layout'
import Image from 'next/image'

function ProductProjects() {
    return (
        <Layout>
            <Section>
                <Image src='/productDesign/bgHelm.png' width='2880' height='6344' layout='intrinsic' quality={100} />
            </Section>
            <TitleWrapper>
            <Think>Air</Think>
                <Title>Helm</Title>
                <Mittle>The study of plastic manufacturing process</Mittle>
            </TitleWrapper>
        </Layout>
    )
}

const Section = styled.div`
    position: relative;
    margin: -8px;
    width: 100vw;
`

const TitleWrapper = styled.div`
    position: absolute;
    //width: 50vw;
    top: 72vh;
    left: 60vw;
`

const Think = styled.h1`
    font-family: Roboto Condensed, sans-serif;
    font-weight: 300;
    font-size: 6em;
    line-height: 0;
    margin: 0;
`

const Title = styled(Think)`
    position: inherit;
    font-weight: 900;
    left: 1em;
`

const Mittle = styled.p`
    position: relative;
  top: 1.5em;
  width: 35vw;
  padding: 0;
  margin: auto 0;
  
  font-weight: 300;
  font-size: 2em;
`

export default ProductProjects