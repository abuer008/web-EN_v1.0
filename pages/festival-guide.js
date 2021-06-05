import styled from 'styled-components'
import Image from 'next/image'
import Layout from '../components/Layout'
import {ToolSetData} from "../data/fgData";
import {ToolsetItem} from "../components/work/ToolsetItem";
import VideoArea from "../components/revision/VideoArea";

const FestivalGuide = () => {
    return (
        <Layout backgroundColor='white' overwrite showFooter UX>
            <HeroWrapper>
            <HeroImg>
                <Image src='/festivalGuide/mocktitle.webp' width='1440' height='568' layout='responsive' objectFit='contain' />
            </HeroImg>
            <HeroText top='35'>
                <H1>Festival Guide</H1>
                <P>Germany has a long tradition of regional fairs, with more than 50 different fairs each year. The "Festival Guide" is a navigation application that consolidates information about the various events and provides a comprehensive basic service for festival-goers. It also collects crowd movements, predicts crowd hazards such as mass panic in advance, and shows the nearest service points in case of emergencies.</P>
            </HeroText>
            </HeroWrapper>

            <Wrapper>
                <ImgWrapper>
                    <Image src='/festivalGuide/whyImg.webp' width='630' height='500' />
                </ImgWrapper>

                <Text>
                    <H1>Why</H1>
                    <Sub>Have you ever been to Kieler Woche?</Sub>
                    <P>German fairs have a long history, but the complicated festival information has always been a barrier to visitor participation. So there is a huge market potential for integrating information such as stores, festivals and public infrastructure.</P>
                    <Sub>The potential risk of the public event</Sub>
                    <P>"Mass panic" is an important topic for the public. For instance, the Duisburg love parade disaster in 2010 caused 21 deaths. Therefore, preventing and warning against trampling in crowded folk festivals is also the focus of this project.</P>
                </Text>

            </Wrapper>

            <Wrapper>
                <ImgWrapper>
                    <Image src='/festivalGuide/whatImg.webp' width='630' height='500' />
                </ImgWrapper>
                <Text>
                    <H1>What</H1>
                    <Sub>Goals</Sub>
                    <P>1. Digitalising and providing visitors with information, ticket purchases, and customised event plans.</P>
                    <P>2. Collects personal mobility information to provide organizers with predicted warning of dangerous situations and navigation services such as emergency infrastructure for users.</P>
                </Text>
            </Wrapper>

            <Wrapper style={{alignItems: 'flex-start'}}>
                <ImgWrapper>
                    <Image src='/festivalGuide/howImg.webp' width='630' height='1160' />
                </ImgWrapper>
                <Text style={{top: '60px'}}>
                    <H1>How</H1>
                    <Sub>Crowd flow analysis</Sub>
                    <P>Crowd flow analysis is the practice of interpreting data on the natural movement of groups, particularly humans, are the subjects of these crowd tracking analyses that include how a particular crowd moves and when a movement pattern changes.</P>
                    <Sub2>This photo showed an event in front of Kiel City Hall, where a crowd has gathered.</Sub2>
                    <P2><Strong>Figure 1</Strong>: Visitors share location and movement information by installing an application and sending the data to the data centre for automatic processing.</P2>
                    <P2><Strong>Figure 2</Strong>: Crowd density, direction, and speed are the main inputs for predicting hazardous situations and developing evacuation routes in real-time by monitoring the flow of the crowd.</P2>
                    <P2><Strong>Figure 3</Strong>: In areas with high density, concentrated direction and slow flow, the application is marked in red, i.e. visitors are advised to avoid it. And in general areas with crowds would be marked in yellow.</P2>
                </Text>
            </Wrapper>

            <HeroWrapper>
            <HeroImg>
                <Image src='/festivalGuide/designTitle.webp' width='1440' height='539' layout='responsive' />
            </HeroImg>
                <HeroText top='15' black>
                    <H1>Tangible Design</H1>
                    <Sub style={{margin: '0'}}>User Flows - Wireframes - Prototype</Sub>
                </HeroText>
                <HeroText black top='40'>
                    <Sub2>The toolset were been used:</Sub2>
                    <ToolSet>
                        {
                            ToolSetData.map((item, key) => {
                                return <ToolsetItem key={key} item={item} />
                            })
                        }
                    </ToolSet>
                </HeroText>
            </HeroWrapper>

            <FlowWrapper>
                <DesignText>
                    <Sub>User Flows</Sub>
                </DesignText>
                <FlowImgWrapper>
                    <Image src='/festivalGuide/userflows.png' width='1440' height='750' objectFit='contain' />
                </FlowImgWrapper>
            </FlowWrapper>

            <FlowWrapper>
                <DesignText>
                    <Sub>Wireframes</Sub>
                </DesignText>
                <FlowImgWrapper>
                    <Image src='/festivalGuide/wireframes.png' width='1440' height='745' />
                </FlowImgWrapper>
            </FlowWrapper>

            <FlowWrapper>
                <DesignText>
                    <Sub>Prototypes - crowd map</Sub>
                </DesignText>
                <HeroImg>
                    <Image src='/festivalGuide/prototype.png' width='1440' height='468' layout='responsive' />
                </HeroImg>
                <VideoWrapper>
                    <VideoArea videoSource='/festivalGuide/prototypeVideo.mp4' alt='festival guide for the Kieler Woche' showControl/>
                </VideoWrapper>
            </FlowWrapper>
        </Layout>
    )
}

const VideoWrapper = styled.div`
    width: 70vw;
  height: auto;
  margin: auto;
`

const FlowWrapper = styled.div`
  position: relative;
  //width: 65%;
  margin:  10vh auto;
`

const FlowImgWrapper = styled.div`
    width: 60%;
  margin: auto;
`


const Strong = styled.strong``

const ToolSet = styled.div`
    display: flex;
  flex-direction: row;
  
  width: 70%;
`

const Sub = styled.h3`
    font-size: 1.7rem;
  margin: auto;
`

const Sub2 = styled.h3``

const Wrapper = styled.div`
  position: static;
  //height: 70vh;
  width: 90%;
  margin: 0 auto;
  padding: 3% 0;
    //height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const HeroWrapper = styled.div`
  position: relative;
    height: 80vh;
`

const ImgWrapper = styled.div`
`

const HeroImg = styled.div`
  //position: absolute;
  width: 100vw;
`

const Text = styled.div`
  position: relative;
    max-width: 500px;
`

const HeroText = styled.div`
    position: absolute;
  max-width: 500px;
  left: 55vw;
  top: ${props => props.top ? `${props.top}%` : '0'};
  color: ${props => props.black ? 'black' : 'white'};
`

const DesignText = styled.div`
  position: relative;
    max-width: 500px;
  left: 55vw;
  margin-bottom: 5rem;
`

const H1 = styled.h1`
    font-size: 3.5rem;
  margin: auto;
`

const P = styled.p``
const P2 = styled(P)`
    padding: 20px 0;
`

export default FestivalGuide;