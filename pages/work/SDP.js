import styled from 'styled-components'
import Layout from '../../components/Layout'
import Image from 'next/image'
import Link from 'next/link'

import {SDPTexts, ToolSetData} from "../../data/SDP";
import {usePhoneVersion} from "../../components/usePhoneVersion";
import { PhoneSDP } from "../../components/phoneComponents/PhoneSDP";
import {ToolsetItem} from "../../components/work/ToolsetItem";

const SDP = () => {
    const phoneVersion = usePhoneVersion()

    return (
        <Layout backgroundColor='#f5f5f5'>
            {phoneVersion ? <PhoneSDP /> : <StandardSDP />}
        </Layout>
    )
}

const StandardSDP = () => {
    return (
        <Layout backgroundColor='#f5f5f5'>
            <ContentWrapper>
                <HorizonWrapper>
                    <ImageWrapper>
                        <Image src='/works/mockup.distributor.png' width='300' height='486'/>
                    </ImageWrapper>
                    <Section style={{width: '60%'}}>
                        <SectionTitle>
                            {SDPTexts.introduction.title}
                        </SectionTitle>
                        <SectionPlain>{SDPTexts.introduction.plain}</SectionPlain>
                        <Subtitle>
                            The Toolset were been used:
                        </Subtitle>
                        <ToolSetWrapper>
                            {
                                ToolSetData.map((item, key) => {
                                   return <ToolsetItem key={key} item={item} />
                                } )
                            }
                        </ToolSetWrapper>
                    </Section>
                </HorizonWrapper>

                <Br>research</Br>

                <Section>
                    <SectionTitle>{SDPTexts.research.title}</SectionTitle>
                    <SectionPlain>{SDPTexts.research.plain}</SectionPlain>
                    <Wrapper>
                    <PainPointWrapper>
                        <Dot />
                    <SubTitle>{SDPTexts.painPoints.title}</SubTitle>
                    </PainPointWrapper>
                    <H3>1. Manual workload</H3>
                    <SectionPlain>Users have to manually enter and export all the employee information related to the project each time they create a project, which sometimes leads to input errors and a lot of time spent identifying input errors in the list when handing over to the management platform.</SectionPlain>
                    <H3>2. Expensive learning curve</H3>
                    <SectionPlain>The overly complex project creation process takes new users a lot of time to familiarise themselves with and understand.</SectionPlain>
                    <H3>3. Lack of mobile support</H3>
                    <SectionPlain>Lack of support for mobile devices to meet casual business needs.</SectionPlain>
                    </Wrapper>
                </Section>

                <Section>
                    <SectionTitle>The UX analysis</SectionTitle>
                    <SectionPlain>We experienced the product in actual use and carefully analysed possible user experience issues in the user-centred process by simulating the actual task objectives and combining them with a few user survey.</SectionPlain>
                    <SectionPlain>In order to solve the pain points of customers and users, we have systematically analysed the existing user processes and the various nodes through the customer journey map.</SectionPlain>
                    <CustomerJourney>
                        <Image alt='the current customer journey analysis' src='/works/currentCustomerJourney.png' width='1772' height='1925' />
                    </CustomerJourney>

                    <SubTitle style={{paddingTop: '5%'}}>Examples of detailed UX issues</SubTitle>
                    <IssuesWrapper>
                        <ImgWrapper>
                            <Image src='/works/oldRegister.JPG' width='800' height='504' objectFit='cover' />
                        </ImgWrapper>
                        <TextWrapper>
                            <H4>Complex and disorganized registration process</H4>
                            <SectionPlain>Due to legal restrictions, a strict registration process is unavoidable. However, an unstructured registration process and too many visual elements harm the user experience.</SectionPlain>
                        </TextWrapper>
                    </IssuesWrapper>

                    <IssuesWrapper>
                        <ImgWrapper>
                            <Image src='/works/projectDashboard.JPG' width='936' height='560' objectFit='cover' />
                        </ImgWrapper>
                        <TextWrapper>
                            <H4>Home page of platform</H4>
                            <SectionPlain>Existing platforms include too many features and information on their homepages to serve target audiences with different requirements, making it difficult for new users to find the right feature they need.</SectionPlain>
                        </TextWrapper>
                    </IssuesWrapper>
                    <IssuesWrapper>
                        <ImgWrapper>
                            <Image src='/works/projectCreateProcess.JPG' width='463' height='304' objectFit='cover' />
                        </ImgWrapper>
                        <TextWrapper>
                            <H4>Project creation page</H4>
                            <SectionPlain>The lack of hierarchical input fields and clear instructions increases the difficulty of typing correctly.</SectionPlain>
                        </TextWrapper>
                    </IssuesWrapper>
                </Section>

                <Br>Solutions</Br>

                <Section>
                    <ResearchWrapper>
                        <Image src='/works/Stakeholders.png' width='661' height='790'/>
                    </ResearchWrapper>
                </Section>

                <Section style={{width: '70%'}}>
                    <SectionTitle>{SDPTexts.challenges.title}</SectionTitle>
                    <SubTitle>{SDPTexts.challenges.c1Title}</SubTitle>
                    <SectionPlain>{SDPTexts.challenges.c1Plain}</SectionPlain>
                    <SubTitle>{SDPTexts.challenges.c2Title}</SubTitle>
                    <SectionPlain>{SDPTexts.challenges.c2Plain}</SectionPlain>
                    <SubTitle>{SDPTexts.challenges.c3Title}</SubTitle>
                    <SectionPlain>{SDPTexts.challenges.c3Plain}</SectionPlain>
                </Section>
                <Link href='/works/wireframe.png'>
                    <Wireframe>
                        <SubTitle>Wireframe</SubTitle>
                        <Image src='/works/wireframe.png' width='1192' height='1099'/>
                    </Wireframe>
                </Link>
                <Section>
                    <SectionTitle>{SDPTexts.prototype.title}</SectionTitle>
                    <SectionPlain>{SDPTexts.prototype.plain}</SectionPlain>
                </Section>
                <Wireframe>
                    <SubTitle>Design Language</SubTitle>
                    <Image src='/works/design.language.png' width='825' height='301' />
                </Wireframe>
                <Wireframe>
                    <SubTitle>Visual design</SubTitle>
                    <Image src='/works/Mockups.png' width='915' height='501'/>
                </Wireframe>
            </ContentWrapper>
        </Layout>
    )
}

const ContentWrapper = styled.div`
  position: absolute;
  width: 80%;
  max-width: 950px;
   top: 20%;
   left: 50%;
   padding-bottom: 10%;

  transform: translate(-50%, 0%)
`

const Wrapper = styled.div`
    padding: 2em 0;
`

const Br = styled.h4`
  padding-top: 8vh;
    border-bottom: 1px solid black;
`

const HorizonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const ToolSetWrapper = styled.div`
    display: flex;
  flex-direction: row;
  width: 90%;
`

const Subtitle = styled.h5`
`

const ImageWrapper = styled.div`
  position: relative;
  width: 200%;
`

// ---------------------

const IssuesWrapper = styled.div`
    display: flex;
  flex-direction: row;
  //width: 80%;
  padding: 2em;
`

const ImgWrapper = styled.div`
    min-width: 250px;
`

const TextWrapper = styled.div`
    padding: 1em 2em 2em;
`

const H4 = styled.h4`
    margin: auto;
`

// ----------------------------

const ResearchWrapper = styled.div`
  position: relative;
  padding: 0 10%;
`

const Section = styled.div`
  position: relative;
  top: 5vh;
`

const Wireframe = styled.div`
  position: relative;
  //padding: 10% 0;
  margin-top: 20%;

  :hover {
    cursor: pointer;
  }
`

const CustomerJourney = styled.div`
    
`

const PainPointWrapper = styled.div`
    display: flex;
  flex-direction: row;
  align-items: center;
`

const Dot = styled.div`
    background-color: red;
  width: 20px;
  height: 20px;
  margin: 0;
  padding: 0;
  
  border-radius: 10px;
`

const SectionTitle = styled.h2`
  font-weight: 300;
  font-size: 2.5em;
`

const H3 = styled.h3`
    font-size: 1.7em;
  font-weight: bold;
`

const SubTitle = styled.h4`
  margin: 0;
  font-weight: 500;
  padding-left: 10px;
  
`

const SectionPlain = styled.p`
    width: 80%;
  line-height: 1.4em;
`

export default SDP