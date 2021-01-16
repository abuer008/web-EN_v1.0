import Layout from "../components/Layout";
import Image from 'next/image'
import styled from 'styled-components'
import { ContentComponent } from "../components/ContentComponent";

import * as characterAnima from '../public/error/errorAnima.json'

const Error = ({statusCode}) => {
    return (
        <Layout>
            <Background>
                <Image src='/bkg.png' layout='fill' objectFit='cover' />
            </Background>
            <ContentComponent
                statusCode={statusCode}
                characterAnima={characterAnima}
                backgroundColor='#FF8E50'
                isError={true}
                mainText='Oops.'
                desText='something went wrong, page could not be loaded.'
            />
        </Layout>
    )
}

Error.getInitialProps = ({res, err}) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404

    return { statusCode }
}

const Background = styled.div``

export default Error