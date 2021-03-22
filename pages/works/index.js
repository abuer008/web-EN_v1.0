import styled from 'styled-components'
import Layout from '../../components/Layout'
import Image from 'next/image'
import Link from 'next/link'

const Works = () => {
    return (
        <Layout>
            <SDPWrapper>
                <Link href='/works/SDP'>
                <ImageWrapper>
                    <Image src='/works/Login.Mockup.png' width='340' height='578'/>
                </ImageWrapper>
                </Link>
                <TextWrapper>
                    <Title>Salaries Distribution Platform</Title>
                    <SubTitle>Legal tax avoidance is one of the most efficient tricks for increasing the revenues of enterprises.</SubTitle>
                    <SubTitle>On Broad: 23.03.2021</SubTitle>
                    <IconWrapper>
                    <Image src='/works/SDP.PlatformIcon.png' width='80' height='80'/>
                    <IconText>Specific Operation Platform</IconText>
                    </IconWrapper>
                </TextWrapper>
            </SDPWrapper>
        </Layout>
    )
}

const SDPWrapper = styled.div`
    display: flex;
  flex-direction: row;
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