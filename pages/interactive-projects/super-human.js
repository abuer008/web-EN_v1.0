import styled from 'styled-components'
import Image from 'next/image'
import Layout from "../../components/Layout";

const SuperHuman = () => {
    return (
        <Layout>
            <Section>
                <Image src='/superHuman/titlePhoto.png' layout='fill' objectFit='cover' />
            </Section>
            <Section>
                <Image src='/superHuman/comp2880.png' layout='fill' objectFit='cover' />
            </Section>
            <Section>

            </Section>
        </Layout>
    )
}

const Section = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  margin: -8px;
`

export default SuperHuman