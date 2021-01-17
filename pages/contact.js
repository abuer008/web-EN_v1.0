import Layout from '../components/Layout'
import Image from 'next/image'
import styled from 'styled-components'

const Contact = () => {
    return (
        <Layout>
            <Background>
                <Image src='/aboutBg.png' layout='fill' objectFit='cover' />
            </Background>
            <TextWrapper>
                <Front>Any thoughts, comments, or regarding works</Front>
                <Middle>GET IN TOUCH</Middle>
                <Bottom>x.bowei@aol.com</Bottom>
            </TextWrapper>
        </Layout>
    )
}

const Background = styled.div``

const TextWrapper = styled.div`
    position: absolute;
    top: 35vh;
    left: 30vw;
  
    font-family: Roboto, sans-serif;
    font-style: normal;
    line-height: 1em;
`

const Front = styled.h4`
    font-weight: 300;
    font-size: 2em;
    text-transform: uppercase;
  line-height: 1.7em;
`

const Middle = styled.h1`
    font-weight: 900;
    font-size: 5em;
  line-height: 0;
`

const Bottom = styled.h6`
    font-weight: 900;
    font-size: 2em;
  transition: 0.3s;
  :hover {
    color: blue;
  }
`

export default Contact;