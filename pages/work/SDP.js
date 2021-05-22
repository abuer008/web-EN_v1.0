import styled from 'styled-components'
import Layout from '../../components/Layout'
import Image from 'next/image'
import Link from 'next/link'

import {SDPTexts, ToolSetData} from "../../data/SDP";
import {usePhoneVersion} from "../../components/usePhoneVersion";
import {PhoneSDP} from "../../components/phoneComponents/PhoneSDP";
import {ToolsetItem} from "../../components/work/ToolsetItem";

const SDP = () => {
    const phoneVersion = usePhoneVersion()

    return (
        <Layout backgroundColor='#f5f5f5'>
            {phoneVersion ? <PhoneSDP/> : <StandardSDP/>}
        </Layout>
    )
}

const StandardSDP = () => {
    return (
        <Layout backgroundColor='#f5f5f5' showFooter>
            <ContentWrapper>
                <HorizonWrapper>
                    <ImageWrapper>
                        <Image src='/works/mockup.distributor.png' width='300' height='486'/>
                    </ImageWrapper>
                    <Section style={{width: '60%', top: '5vh'}}>
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
                                    return <ToolsetItem key={key} item={item}/>
                                })
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
                            <Dot color='red'/>
                            <SubTitle>{SDPTexts.painPoints.title}</SubTitle>
                        </PainPointWrapper>
                        <H3>1. Manual workload</H3>
                        <SectionPlain>Users have to manually enter and export all the employee information related to
                            the project each time they create a project, which sometimes leads to input errors and a lot
                            of time spent identifying input errors in the list when handing over to the management
                            platform.</SectionPlain>
                        <H3>2. Expensive learning curve</H3>
                        <SectionPlain>The overly complex project creation process takes new users a lot of time to
                            familiarise themselves with and understand.</SectionPlain>
                        <H3>3. Lack of mobile support</H3>
                        <SectionPlain>Lack of support for mobile devices to meet casual business needs.</SectionPlain>
                    </Wrapper>
                </Section>

                <Section>
                    <SectionTitle>The UX analysis</SectionTitle>
                    <SectionPlain>We experienced the product in actual use and carefully analysed possible user
                        experience issues in the user-centred process by simulating the actual task objectives and
                        combining them with a few user survey.</SectionPlain>
                    <SectionPlain>In order to solve the pain points of customers and users, we have systematically
                        analysed the existing user processes and the various nodes through the customer journey
                        map.</SectionPlain>
                    <CustomerJourney>
                        <Image alt='the current customer journey analysis' src='/works/currentCustomerJourney.png'
                               width='1772' height='1925'/>
                    </CustomerJourney>

                    <SubTitle style={{paddingTop: '5%'}}>Examples of detailed UX issues</SubTitle>
                    <IssuesWrapper>
                        <ImgWrapper>
                            <Image src='/works/oldRegister.JPG' width='800' height='504' objectFit='cover'/>
                        </ImgWrapper>
                        <TextWrapper>
                            <H4>Complex and disorganized registration process</H4>
                            <SectionPlain>Due to legal restrictions, a strict registration process is unavoidable.
                                However, an unstructured registration process and too many visual elements harm the user
                                experience.</SectionPlain>
                        </TextWrapper>
                    </IssuesWrapper>

                    <IssuesWrapper>
                        <ImgWrapper>
                            <Image src='/works/projectDashboard.JPG' width='936' height='560' objectFit='cover'/>
                        </ImgWrapper>
                        <TextWrapper>
                            <H4>Home page of platform</H4>
                            <SectionPlain>Existing platforms include too many features and information on their
                                homepages to serve target audiences with different requirements, making it difficult for
                                new users to find the right feature they need.</SectionPlain>
                        </TextWrapper>
                    </IssuesWrapper>
                    <IssuesWrapper>
                        <ImgWrapper>
                            <Image src='/works/projectCreateProcess.JPG' width='463' height='304' objectFit='cover'/>
                        </ImgWrapper>
                        <TextWrapper>
                            <H4>Project creation page</H4>
                            <SectionPlain>The lack of hierarchical input fields and clear instructions increases the
                                difficulty of typing correctly.</SectionPlain>
                        </TextWrapper>
                    </IssuesWrapper>
                </Section>

                <Br>Solutions</Br>

                <Section>
                    <SectionTitle>The new stakeholders</SectionTitle>
                    <SectionPlain>After thoughtful user research and product analysis, we have proposed a new solution -
                        involving employees as stakeholders in the entire product process. We are also interested in
                        taking potential additional stakeholders into account based on satisfying the product service
                        and pointing the way to the sustainable development of future products.</SectionPlain>
                    <ResearchWrapper>
                        <Image src='/works/Stakeholders.png' width='661' height='790'/>
                    </ResearchWrapper>

                    <Wrapper>
                        <PainPointWrapper>
                            <Dot color='orange'/>
                            <SubTitle>The Challenges</SubTitle>
                        </PainPointWrapper>

                        <ChallengeWrapper>
                            <SubChallengeWrapper color='#47484F'>
                                <ChallengeTitle logoSrc='/works/simple.logo.svg'
                                                challengeTitle={SDPTexts.challenges.c1Title}/>
                                <SectionPlain>{SDPTexts.challenges.c1Plain}</SectionPlain>
                            </SubChallengeWrapper>
                            <SubChallengeWrapper color='#3E97EA'>
                                <ChallengeTitle logoSrc='/works/reduce.logo.svg'
                                                challengeTitle={SDPTexts.challenges.c2Title}/>
                                <SectionPlain>{SDPTexts.challenges.c2Plain}</SectionPlain>
                            </SubChallengeWrapper>
                            <SubChallengeWrapper color='#FD6240'>
                                <ChallengeTitle logoSrc='/works/unified.logo.svg'
                                                challengeTitle={SDPTexts.challenges.c3Title}/>
                                <SectionPlain>{SDPTexts.challenges.c3Plain}</SectionPlain>
                            </SubChallengeWrapper>
                        </ChallengeWrapper>
                    </Wrapper>
                </Section>

                <Section>
                    <SectionTitle>redesign userflow and wireframe</SectionTitle>
                    <SectionPlain>{SDPTexts.wireframe.plain}</SectionPlain>
                    <ul>
                        <li>
                        <H4>{SDPTexts.wireframe.c1Title}</H4>
                        <SectionPlain>{SDPTexts.wireframe.c1Plain}</SectionPlain>
                        </li>
                        <li>
                        <H4>{SDPTexts.wireframe.c2Title}</H4>
                        <SectionPlain>{SDPTexts.wireframe.c2Plain}</SectionPlain>
                        </li>
                        <li>
                        <H4>{SDPTexts.wireframe.c3Title}</H4>
                        <SectionPlain>{SDPTexts.wireframe.c3Plain}</SectionPlain>
                        </li>
                    </ul>
                    <Wireframe>
                        {/*<Link href='/works/wireframe.png'>*/}
                            <Image src='/works/wireframe.png' width='1192' height='1099'/>
                        {/*</Link>*/}
                    </Wireframe>
                </Section>

                {/*<Link href='/works/wireframe.png'>*/}
                {/*    <Wireframe>*/}
                {/*        <SubTitle>Wireframe</SubTitle>*/}
                {/*        <Image src='/works/wireframe.png' width='1192' height='1099'/>*/}
                {/*    </Wireframe>*/}
                {/*</Link>*/}
                <Br>Tangible design</Br>
                <Section>
                    <SectionTitle>{SDPTexts.prototype.title}</SectionTitle>
                    <SectionPlain>{SDPTexts.prototype.plain}</SectionPlain>
                    <DesignWrapper>
                        <H3>Typography</H3>
                        <Image src='/works/typography.png' width='2632' height='1778'/>
                    </DesignWrapper>
                    <DesignWrapper>
                        <H3>Reuseable components</H3>
                        <Image src='/works/symbols.png' width='2430' height='882' />
                    </DesignWrapper>
                    <PrototypeWrapper width='80%'>
                        <Image src='/works/Mockups.png' width='1607' height='880' />
                    </PrototypeWrapper>
                </Section>

                <Section style={{padding: '10vh 0'}}>
                    <SectionTitle>{SDPTexts.final.title}</SectionTitle>
                    <H3>{SDPTexts.final.loginTitle}</H3>
                    <SectionPlain>{SDPTexts.final.loginPlain}</SectionPlain>
                    <PrototypeWrapper>
                        <Image src='/works/registerProcess.png' width='1720' height='1197' objectFit='cover' />
                    </PrototypeWrapper>
                    <H3>{SDPTexts.final.validationTitle}</H3>
                    <SectionPlain>{SDPTexts.final.validationPlain}</SectionPlain>
                    <PrototypeWrapper>
                        <Image src='/works/validationProcess.png' width='2075' height='1198' objectFit='cover' />
                    </PrototypeWrapper>
                    <H3>{SDPTexts.final.homeTitle}</H3>
                    <SectionPlain>{SDPTexts.final.homePlain}</SectionPlain>
                    <PrototypeWrapper>
                        <Image src='/works/homePages.png' width='2529' height='1197' objectFit='cover' />
                    </PrototypeWrapper>
                    <H3>{SDPTexts.final.operationTitle}</H3>
                    <SectionPlain>{SDPTexts.final.operationPlain}</SectionPlain>
                    <PrototypeWrapper>
                        <Image src='/works/projectOperation.png' width='1721' height='1197' objectFit='cover' />
                    </PrototypeWrapper>
                    <H3>{SDPTexts.final.creationTitle}</H3>
                    <SectionPlain>{SDPTexts.final.creationPlain}</SectionPlain>
                    <PrototypeWrapper>
                        <Image src='/works/creationProcess.png' width='1721' height='1197' objectFit='cover' />
                    </PrototypeWrapper>
                    <H3>{SDPTexts.final.dashboardTitle}</H3>
                    <SectionPlain>{SDPTexts.final.dashboardPlain}</SectionPlain>
                    <PrototypeWrapper>
                        {/*<Image src='/works/' />*/}
                    </PrototypeWrapper>
                </Section>
            </ContentWrapper>
        </Layout>
    )
}


const ChallengeTitle = ({logoSrc, challengeTitle}) => {
    return (
        <HorizonWrapper>
            <LogoWrapper>
                <Image src={logoSrc} width='58' height='58'/>
            </LogoWrapper>
            <H2>{challengeTitle}</H2>
        </HorizonWrapper>
    )
}

const H2 = styled.h2`
  font-size: 2em;
  margin: auto 0;
`
const LogoWrapper = styled.div``

const DesignWrapper = styled.div`
    width: 70%;
`

const ContentWrapper = styled.div`
  position: relative;
  width: 80%;
  max-width: 950px;
  top: 20vh;
  left: 50%;
  padding-bottom: 10%;

  transform: translate(-50%, 0%)
`

const Wrapper = styled.div`
  padding: 2em;
`

const Br = styled.h4`
  padding-top: 20vh;
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

const ChallengeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1em;
`

const SubChallengeWrapper = styled.div`
  width: 250px;
  color: white;
  background-color: ${props => props.color};
  box-shadow: 0 3px 15px 0 rgba(71, 72, 79, 0.3);
  padding: 1.4em;
  margin: 1em;
  border-radius: 30px;
  transition: 0.3s;
  
  :hover {
    transform: scale(1.1);
  }
`


// ----------------------------

const ResearchWrapper = styled.div`
  position: relative;
  padding: 0 40% 10% 0;
`

const Section = styled.div`
  position: relative;
  top: 10vh;
`

const Wireframe = styled.div`
  position: relative;
  //padding: 10% 0;
  margin-top: 5%;
  width: 80%;

  :hover {
    cursor: pointer;
  }
`

const PrototypeWrapper = styled.div`
    width: ${props => props.width};
  margin: 5% 0;
`

const CustomerJourney = styled.div`

`

const PainPointWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Dot = styled.div`
  background-color: ${props => props.color};
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