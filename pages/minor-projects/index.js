import Layout from '../../components/Layout'
import {ContentComponent} from "../../components/ContentComponent";
import Image from 'next/image'
import styled from 'styled-components'

import * as workingAnima from '../../public/error/workingAnima.json'

function MinorProjects() {
    return (
        <Layout>
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

export default MinorProjects