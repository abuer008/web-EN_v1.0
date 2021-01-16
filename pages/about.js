import Layout from '../components/Layout'
import styled from 'styled-components'
import Image from 'next/image'

const About = () => {
    return (
        <Layout>
            <Background>
                <Image src='/aboutBg.png' layout='intrinsic' width='2880' height='4724'/>
            </Background>
        </Layout>
    )
}

const Background = styled.div`
    position: absolute;
    margin: -8px 0;
    top: -28px;
`

export default About