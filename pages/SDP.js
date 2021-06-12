import styled from 'styled-components'
import {useEffect} from 'react'
import Layout from '../components/Layout'
import Image from 'next/image'
import Link from 'next/link'

import {Button} from './work'
import {HeroWrapper, HeroImg, HeroText, H1, P, Text, Wrapper, Sub, Sub2, ToolSet} from "./festival-guide";
import {challengesData, SDPTexts, ToolSetData, userflowData} from "../data/SDP";
import {usePhoneVersion} from "../components/usePhoneVersion";
import {PhoneSDP} from "../components/phoneComponents/PhoneSDP";
import {ToolsetItem} from "../components/work/ToolsetItem";
import VideoArea from "../components/revision/VideoArea";

const SDP = () => {
    const phoneVersion = usePhoneVersion()
    useEffect(() => {
        return () => window.history.go()
    }, [])

    return (
        <Layout backgroundColor='ffffff' overwrite showFooter UX>
            {phoneVersion ? <PhoneSDP/> : <StandardSDP/>}
        </Layout>
    )
}

const StandardSDP = () => {
    return (
        <>
            <HeroWrapper>
                <Bg />
                <FloatImg>
                    <Image src='/works/headerBg.webp' width='630' height='557' />
                </FloatImg>
                <HeroText color='#343A40' top='25'>
                    <H1>BDP</H1>
                    <P>BDP is a project management mini-program specially designed for Hainan Yushun. Through the management platform, the customer from the enterprise can publish and modified projects and entrust the tax collection agency located in Hainan Freeport to distribute the project dividends to the participating employees with more favourable tax policies. How to let company users create projects more efficiently through the WeChat mini-program platform, communicate seamlessly with the distributor staff, and meet the needs of more random and casual scenarios is the project's main purpose.</P>
                </HeroText>
            </HeroWrapper>

            <Wrapper>
                <ImgWrapper>
                    <Image src='/pflegemangel/interviewImg.webp' width='630' height='500' />
                </ImgWrapper>
                <Text>
                    <H1>Surveys</H1>
                    <Sub>Interviews with stakeholders</Sub>
                    <P>We had a long-term communication with the company engaging the salary distribution services, discussed the existing business model and identified noticeable obstacles and errors that occurred in the traditional user flows. After interviewing the different roles of the target audience, we statistically framed the needs of all potential stakeholders and the challenges to design the complete distribution platform.</P>
                </Text>
            </Wrapper>

            <Wrapper>
                <ImgWrapper>
                    <Image src='/works/whyImg.webp' width='630' height='500' />
                </ImgWrapper>
                <Text>
                    <Sub>Pain points based on interviews</Sub>
                    <Sub2>Manual workload</Sub2>
                    <P>Users have to manually enter and export all the employee information related to the project each time they create a project, which sometimes leads to input errors and a lot of time spent identifying input errors in the list when handing over to the management platform.</P>
                    <Sub2>Expensive learning process</Sub2>
                    <P>The overly complex project creation process takes new users a lot of time to familiarise themselves with and understand.</P>
                    <Sub2>Lack of mobile support</Sub2>
                    <P>Lack of support for mobile devices to meet casual business needs.</P>
                </Text>
            </Wrapper>

            <Wrapper>
                <Text style={{left: '22.3vw'}}>
                    <H1>UX analysis</H1>
                    <Sub>Research on existed platform</Sub>
                    <P>We experienced the product in actual use and carefully analysed possible user experience issues in the user-centred process by simulating the actual task objectives and combining them with a few user survey.</P>
                    <P>In order to solve the pain points of customers and users, we have systematically analysed the existing user processes and the various nodes through the customer journey map.</P>
                </Text>
            </Wrapper>

            <Wrapper>
                <MImg>
                    <Image src='/works/currentCustomerJourney.webp' width='1192' height='1293' layout='responsive' />
                </MImg>
            </Wrapper>

            <Wrapper>
                <ImgWrapper>
                    <Image src='/works/Stakeholders.webp' width='630' height='500' />
                </ImgWrapper>
                <Text>
                    <H1>User Analysis</H1>
                    <Sub>The new stakeholders</Sub>
                    <P>After thoughtful user research and product analysis, we have proposed a new solution - involving employees as stakeholders in the entire product process. We are also interested in taking potential additional stakeholders into account based on satisfying the product service and pointing the way to the sustainable development of future products.</P>
                </Text>
            </Wrapper>
            <Wrapper>
                <Text style={{left: '13.3vw'}}><Sub>The Challenges</Sub></Text>
            </Wrapper>
            <Wrapper style={{width: '60%', marginBottom: '20%'}}>
                {
                    challengesData.map((item, key) => {
                        return <ChallengeTitle logoSrc={item.logoSrc} challengeTitle={item.title} challengeText={item.text} key={key} />
                    })
                }
            </Wrapper>

            <HeroWrapper>
                <HeroImg>
                    <Image src='/works/sdpTangibleBg.webp' width='1440' height='539' layout='responsive' />
                </HeroImg>
                <HeroText top='40'>
                    <H1>Tangible Design</H1>
                    <Sub>Design language and components</Sub>
                </HeroText>

                <Text style={{left: '57.7vw'}}>
                    <Sub2>The toolset were been used: </Sub2>
                    <ToolSet>
                        {
                            ToolSetData.map((item, key) => {
                                return <ToolsetItem key={key} item={item} />
                            })
                        }
                    </ToolSet>
                </Text>
            </HeroWrapper>
            <Wrapper style={{marginTop: '10%'}}>
                <Text style={{left: '22.3vw'}}>
                    <Sub>Basic User flow and Wireframes</Sub>
                </Text>
            </Wrapper>
            <Wrapper>
                {
                    userflowData.map((item, key) => {
                        return <Userflow item={item} key={key} />
                    })
                }
            </Wrapper>

            <Wrapper>
                <MImg>
                    <Image src='/works/userflows_short.png' width='1112' height='1138' objectFit='cover' />
                    <Text style={{ position: 'relative', left: '40vw', margin: '2rem'}}>
                        <Link href='/works/flowcharts.png'>
                            <a style={{textDecoration: 'none'}} target='_blank'>
                    <Button bgColor='#A9BBC9'>Enter the full userflows</Button>
                            </a>
                        </Link>
                    </Text>
                </MImg>
            </Wrapper>

            <Wrapper style={{alignItems: 'flex-start', marginTop: '5%'}}>
                <ImgWrapper>
                    <Image src='/works/typo.webp' width='630' height='633' />
                </ImgWrapper>
                <Text>
                    <H1>Design Language</H1>
                    <Sub>Color and Typography styles</Sub>
                    <P>The complete design language were started with basic color styles, as defining a consistent design style is important for the aesthetic sense of the final product.</P>
                </Text>
            </Wrapper>

            <Wrapper>
                <MImg>
                    <Image src='/works/colorStyles.webp' width='1123' height='509' />
                </MImg>
            </Wrapper>

            <Wrapper style={{alignItems: 'flex-start', position: 'relative', justifyContent: 'flex-start', left: '7vw', marginTop: '10%'}}>
                <ImgWrapper>
                    <Image src='/works/prototyping1.webp' width='566' height='1264' />
                </ImgWrapper>
                <HeroText style={{left: '50%'}}>
                    <H1>Prototyping</H1>
                    <Sub>Login process</Sub>
                    <P>In the traditional platform, users must repeatedly enter their account password at each login. In contrast, in the development environment of the mini-program, the platform account can be directly linked to the account of social media, eliminating the need for account and password input.</P>
                </HeroText>
                <HeroText style={{top: '65%', left: '50%'}}>
                    <Sub>Initial certification process</Sub>
                    <P>Clearly divides mobile phone authentication, ID card authentication and business authentication into three steps, collecting the necessary user information while ID authenticating and preparing for employee list automatic generation.</P>
                </HeroText>
            </Wrapper>

            <Wrapper style={{position: 'relative', justifyContent: 'flex-start', left: '7vw'}}>
                <ImgWrapper>
                    <Image src='/works/prototyping2.webp' width='849' height='1818' />
                </ImgWrapper>
                <HeroText style={{top: '10%', left: '50%'}}>
                    <Sub>The three home pages</Sub>
                    <P>Customised homepages with specific colours and functions for different user audiences allow the users to focus on the features and modules they need, maximising the efficiency of project management.</P>
                </HeroText>
            </Wrapper>

            <Wrapper style={{position: 'relative', justifyContent: 'flex-start', left: '7vw'}}>
                <DemoWrapper>
                    <DemoItem>
                    <VideoArea videoSource='/works/prototypeDemo2.mp4' alt='enterprise project management' isPlaying={true} loop={true} />
                    </DemoItem>
                    <DemoItem>
                        <VideoArea videoSource='/works/prototypeDemo1.mp4' alt='distributor project management' isPlaying={true} loop={true} />
                    </DemoItem>
                </DemoWrapper>
                <HeroText style={{top: '10%', left: '50%'}}>
                    <Sub>Project management</Sub>
                    <P>The unique interaction design makes it intuitive for the user to understand the options for specific items, making it easy to get started even for first-time users.</P>
                    <P>Depending on the role of the users and the status of the project, the project can be operated in different ways to meet the most direct operational needs of the user.</P>
                </HeroText>
            </Wrapper>

            <HeroWrapper style={{marginTop: '10%'}}>
                <HeroImg>
                    <Image src='/works/dashboard.webp' width='1440' height='655' layout='responsive' />
                </HeroImg>
                <HeroText top='-10' style={{left: '56.7%'}}>
                    <Sub>The back-end dashboard</Sub>
                    <P>In order to allow the staff to process the submitted projects and personnel management more efficiently, we designed a dedicated backend management platform for the distributor side to provide batch processing capabilities. This platform uses a highly integrated bootstrap framework to simplify the complexity of interface development.</P>
                </HeroText>
            </HeroWrapper>

        </>
    )
}



const ChallengeTitle = ({logoSrc, challengeTitle, challengeText}) => (
    <VerticalWrapper>
        <HorizonWrapper>
            <Image src={logoSrc} width='60' height='60' />
            <ChallengeH1>{challengeTitle}</ChallengeH1>
        </HorizonWrapper>
        <P>{challengeText}</P>
    </VerticalWrapper>
)

const Userflow = ({item}) => (
    <UFWrapper>
        <Sub2>{item.title}</Sub2>
        <P>{item.text}</P>
    </UFWrapper>
)

const DemoItem = styled.div`
    width: 283px;
  height: 464px;
`

const DemoWrapper = styled.div`
    display: flex;
  flex-direction: row;
`

const UFWrapper = styled.div`
    width: 200px;
  height: 200px;
  padding: 10px;
`

const VerticalWrapper = styled.div`
    width: 200px;
  height: 200px;
  background-color: #343A40;
  color: white;
  padding: 30px;
  transition: 0.3s;
  
  :hover {
    transform: scale(1.1)
  }
`

const HorizonWrapper = styled.div`
    display: flex;
  flex-direction: row;
  justify-content: flex-start;
`

const ChallengeH1 = styled.h3`
    font-size: 1.2rem;
`

const MImg = styled.div`
    width: 70%;
  margin: auto;
`

const ImgWrapper = styled.div``

const Bg = styled.div`
    width: 100%;
  height: 568px;
  background-color: #EBEBEB;
`

const FloatImg = styled.div`
    position: absolute;
  top: 25%;
  left: 7%;
`


export default SDP