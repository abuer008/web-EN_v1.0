import Layout from '../../components/Layout'
import { BasicEl } from "../../components/aal/BasicEl";
import { TlText } from "../../components/aal/TlText";
import styled from 'styled-components'
import Image from 'next/image'
import ReactPlayer from "react-player";

import {AALData} from "../../data/AAL";

const AmbientAssistedLiving = () => {
    const tlStyle = {
        width: '450px',
        height: '190px'
    }

    const gStyle = {
        width: '120px',
        height: '120px'
    }

    return (<Layout>
        <Section>
            <VideoWrapper>
                <ReactPlayer
                    url='/aal/titleVideo.mp4'
                    playing
                    width="101%"
                    height="auto"
                />
            </VideoWrapper>
            <TlArea>
                <TlContent>
                    <IconWrapper>
                        <Image src='/aal/Home.svg' width='136' height='146' />
                    </IconWrapper>
                    <H1>Ambient Assisted Living</H1>
                </TlContent>
                <BasicEl style={tlStyle} />
            </TlArea>

            <GArea>
                <GIconWrapper>
                    <Image src='/aal/gestureIcon.svg' width='52' height='73'/>
                </GIconWrapper>
                <BasicEl style={gStyle}/>
                <TlText title={AALData[0].title} plainText={AALData[0].plainText} />
            </GArea>

            <VArea>
                <VIconWrapper>
                    <Image src='/aal/virusIcon.svg' width='70' height='70' />
                </VIconWrapper>
                <BasicEl style={gStyle} />
                <TlText title={AALData[1].title} plainText={AALData[1].plainText} />
            </VArea>

            <PArea>
                <PIconWrapper>
                    <Image src='/aal/personalIcon.svg' width='68' height='52' />
                </PIconWrapper>
                <BasicEl style={gStyle} />
                <TlText title={AALData[2].title} plainText={AALData[2].plainText} />
            </PArea>
        </Section>
    </Layout>)
}

const Section = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  margin: -8px;
  padding: 0;
  overflow: hidden;
  
  background-color: #efefef;
`

const VideoWrapper = styled.div`
  position: absolute;
  z-index: 0;
  //height: auto;
`

const TlArea = styled.div`
  position: absolute;
  top: 16vh;
  left: 60vw;
  width: 426px;
`

const GArea = styled(TlArea)`
  top: 43vh;
`

const VArea = styled(GArea)`
  top: 60vh;
`
const PArea = styled(GArea)`
  top: 78vh;
`

const TlContent = styled.div`
  position: absolute;
  margin-left: 10px;
  z-index: 1;
  
  display: flex;
  flex-direction: row;
`

const IconWrapper = styled.div`
  margin: auto 40px;
`

const GIconWrapper = styled(IconWrapper)`
  position: absolute;
  z-index: 1;
  margin: 25px 35px;
`

const VIconWrapper = styled(GIconWrapper)`
  margin: 26px;
`
const PIconWrapper = styled(GIconWrapper)`
  margin: 38px 27px;
`

const H1 = styled.h1`
  
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 3em;
  line-height: 90%;
`

export default AmbientAssistedLiving