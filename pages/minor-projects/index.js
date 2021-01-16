import Layout from '../../components/Layout'
import {ContentComponent} from "../../components/ContentComponent";
import Image from 'next/image'
import styled from 'styled-components'

import * as workingAnima from '../../public/error/workingAnima.json'

function MinorProjects() {
    return (
        <Layout>
            <Background>
                <Image src='/aboutBg.png' layout='fill' objectFit='cover' />
            </Background>
            {/*<h1>This is minor projects page.</h1>*/}
            <ContentComponent
                statusCode='......'
                characterAnima={workingAnima}
                backgroundColor='#FFB258'
                isError={false}
                mainText='Comming soon.'
                desText='Working hard for best experience of viewing contents.'
            />
        </Layout>
    )
}

const Background = styled.div``

export default MinorProjects