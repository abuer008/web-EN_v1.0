import Layout from '../../components/Layout'
import {ContentComponent} from "../../components/ContentComponent";
import Image from 'next/image'
import styled from 'styled-components'

import * as workingAnima from '../../public/error/workingAnima.json'
import {usePhoneVersion} from "../../components/usePhoneVersion";

function MinorProjects() {
    const phoneVersion = usePhoneVersion()

    return (
        <Layout>
            {phoneVersion ?
                <Wrapper>
                    <MotionTitle>Motion design, mini projects coming soon...</MotionTitle>
                </Wrapper>
                :

                <ContentComponent
                    statusCode='......'
                    characterAnima={workingAnima}
                    backgroundColor='#FFB258'
                    isError={false}
                    mainText='Comming soon.'
                    desText='Working hard for best experience of viewing contents.'
                />
            }
        </Layout>
    )
}

const Wrapper = styled.div`
    position: relative;
  height: 50vh;
`

const MotionTitle = styled.h1`
  position: relative;
    margin: 0 auto;
  top: 50%;
  width: 80%;
`

export default MinorProjects