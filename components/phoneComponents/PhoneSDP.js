import styled from 'styled-components'
import Image from 'next/image'
import {ArtiWrapper, PlainTextWrapper, ImgWrapper, Strong, P, MainTitle} from "./PhoneRevision";

export const PhoneSDP = () => (
    <>
        <ArtiWrapper>
            <PlainTextWrapper black style={{marginTop: '10vh'}}>
                <TitleWrapper>
                    <ImgWrapper>
                        <Image alt='mockup of SDP' src='/works/mockup.distributor.png' width='495' height='793'
                               objectFit='cover'/>
                    </ImgWrapper>
                    <MainTitle>
                        <Title>Salaries Distribution Platform</Title>
                        <P1>Legitimate tax avoidance</P1>
                        <PlatformWrapper>
                            <ImgWrapper>
                                <Image alt='platform icon' src='/works/SDP.PlatformIcon.png' width='80' height='80'/>
                            </ImgWrapper>
                            <Sub>Specific Operation Platform</Sub>
                        </PlatformWrapper>
                    </MainTitle>
                </TitleWrapper>
                <P>The Hainan Free Trade Port is the most advanced and largest trade market in South China and would
                    become the largest world trade port in the 2050s. Many advantageous tax policies have been
                    introduced in this economic development zone, enabling enterprises to reduce tax expenses legally.
                    The qualified distribution company can delegate the salary distribution services from the companies
                    all over the country; there are huge benefits for both the company and the employees.</P>
            </PlainTextWrapper>
        </ArtiWrapper>

        <ArtiWrapper>
            <PlainTextWrapper black>
                <Subtitle>User Research</Subtitle>
                <P>We had a long-term communication with the company engaging the salary distribution services,
                    discussed the existing business model and identified noticeable obstacles and errors that occurred
                    in the traditional user flows. After interviewing the different roles of the target audience, we
                    statistically framed the needs of all potential stakeholders and the challenges to design the
                    complete salary distribution platform. </P>
            </PlainTextWrapper>
            <ImgWrapper style={{width: '80%'}}>
                <Image alt='user research for SDP' src='/works/Stakeholders.png' width='661' height='790'/>
            </ImgWrapper>
            <PlainTextWrapper black>
                <P>We must develop and test in the specific platform. From the perspective of a designer, the
                    mini-program has a less usable and focusable area in different devices and more distracted clickable
                    buttons on the top.</P>
            </PlainTextWrapper>
        </ArtiWrapper>

        <ArtiWrapper>
            <PlainTextWrapper black>
                <Subtitle>Userflow and wireframe</Subtitle>
            </PlainTextWrapper>
            <ImgWrapper style={{margin: '0 auto', width: '80%'}}>
                <Image alt='wireframe' src='/works/wireframe 1.png' width='600' height='600'/>
            </ImgWrapper>
        </ArtiWrapper>

        <ArtiWrapper>
            <PlainTextWrapper black>
                <Subtitle>High fidelity prototype</Subtitle>
                <P>The high-fidelity prototypes were started with basic color styles, as defining a consistent design
                    style is important for the aesthetic sense of the final product. The most distinct idea of
                    interaction design is how users can interact with the published project: Projects created by
                    enterprise users are represented in the enterprise and distribution platform with a unique set of
                    colors, the color stripes displayed at the end of the project elements indicate the basic logic of
                    interaction - swiping left or tapping on the color stripes could pop up the main operations for the
                    project.</P>
                <Sub2>Basic typographic and color styles</Sub2>
            </PlainTextWrapper>
            <ImgWrapper style={{width: '80%', marginTop: '2.4em'}}>
                <Image alt='basic design language' src='/works/design.language.png' width='600' height='218' />
            </ImgWrapper>
        </ArtiWrapper>
    </>
)

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const Title = styled.h1`
  font-size: 1.7em;
  margin-bottom: auto;
`

const Subtitle = styled.h2`
  font-weight: normal;
`

const P1 = styled.p`
  font-family: Roboto Condensed;
  font-size: 0.9em;
  margin: auto;
`

const Sub = styled.h4`
  font-size: 0.8em;
`

const Sub2 = styled(Sub)`
    font-size: 1em;
`

const PlatformWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-right: 1em;
  margin-top: 1em;
`
