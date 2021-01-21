import styled from 'styled-components'
import Image from 'next/image'
import Layout from "../../components/Layout";

const SuperHuman = () => {
    return (
        <Layout>
            <Section>
                <Image alt='prothesis with voronoi fracture' src='/superHuman/titlePhoto.png' layout='fill' objectFit='cover' quality='100' />
            </Section>
            <Section>
                <Image alt='prothesis mounted on the body' src='/superHuman/comp2880.png' layout='fill' objectFit='cover' />
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
  padding-right: 17px;
`

export default SuperHuman