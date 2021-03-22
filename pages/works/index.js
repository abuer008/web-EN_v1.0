import styled from 'styled-components'
import Layout from '../../components/Layout'
import Image from 'next/image'

const Works = () => {
    return (
        <Layout>
            <SDPWrapper>
                <ImageWrapper>
                    <Image src='/works/Login.Mockup.png' width='399' height='740'/>
                </ImageWrapper>
                <TextWrapper>
                    <Title>Salaries Distribution Platform</Title>
                    <SubTitle>Legal tax avoidance is one of the most efficient tricks for increasing the revenues of enterprises.</SubTitle>
                    <SubTitle>On Broad: 23.03.2021</SubTitle>
                    <Image src='/works/SDP.PlatformIcon.png' width='80' height='80'/>
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
  top: 20vh;
  left: 50vw;
  width: 30vw;
  height: auto;

  transform: translate(-70%, 0%)
`

const TextWrapper = styled.div`
  position: relative;
  top: 20vh;
  left: 20vw;
  width: 25vw;
  padding-top: 4vh;
`

const Title = styled.h2`
    font-weight: 900;
  font-size: 4vw;
  margin: auto;
`

const SubTitle = styled.p``

export default Works