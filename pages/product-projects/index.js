import styled from 'styled-components'
import Layout from '../../components/Layout'
import Image from 'next/image'

function ProductProjects() {
    return (
        <Layout>
            <Section>
                <Image src='/productDesign/bgHelm.png' width='2880' height='6684' layout='intrinsic' quality={100} />
            </Section>
        </Layout>
    )
}

const Section = styled.div`
    position: relative;
    margin: -8px;
    width: 100vw;
`

export default ProductProjects