import styled from 'styled-components'
import Image from 'next/image'
import {PhonePflegeMangel} from "../../components/phoneComponents/PhonePflegeMangel";
import {usePhoneVersion} from "../../components/usePhoneVersion";
import Layout from '../../components/Layout'

import {Container, Row, Col} from 'react-bootstrap'
import {Content} from '../../components/phoneComponents/Content'
import {SectionBreak} from "../../components/phoneComponents/PhoneConnecting";
import {pflegemangelData} from "../../data/CardData";

const PflegeMangel = () => {
    const phoneVersion = usePhoneVersion()

    return (
        <Layout isBlack={false} backgroundColor='#303030' overwrite>
            {phoneVersion ? <PhonePflegeMangel/> : <StandardPflegemangel/>}
        </Layout>
    )
}

const StandardPflegemangel = () => {
    return (
        <Wrapper>
            <H1>#Pflegemangel</H1>
            <H4>Case study of care services</H4>
            <Section>Research</Section>
            <MediaWrapper>
                <ImgWrapper>
                    <Image src='/aal/aalIntro.jpg' width='1126' height='794' objectFit='cover'/>
                </ImgWrapper>
                <TextWrapper>
                    <H3>Interviewing in nursing home</H3>
                    <P>During an interview at the Kiel Municipal Hospital, we were surprised to discover the shortage of
                        nursing
                        services through our interviews with the nursing staff and our personal experience of the
                        facilities and
                        services in the care centre, to gather information about the various difficulties encountered in
                        the
                        nursing process, and to realize the impact of the ageing population on the entire nursing
                        profession.
                        The main topic of this project, therefore, is how to change the barriers in nursing services and
                        how to
                        improve the current situation of elderly care structurally.</P>
                </TextWrapper>
            </MediaWrapper>
            <MediaWrapper>
                <ImgWrapper>
                    <Image src='/pflegemangel/diagrams-1 1.png' width='720' height='416'/>
                </ImgWrapper>
                <TextWrapper>
                    <H3>The research of ageing population in Europe</H3>
                    <P>Europe has one of the highest shares of elderly people in the world, and it would be increased
                        year by
                        year. The increased demand for long-term care for older people with fewer caregivers has led to
                        a
                        dilemma in care services and a significant increase in state welfare budgets. <Strong>Systematic
                            innovation of care services is an urgent issue for many governments</Strong>.</P>
                </TextWrapper>
            </MediaWrapper>

            <MediaWrapper>
                <ImgWrapper>
                    <Image src='/pflegemangel/diagrams-2 1.png' width='720' height='416'/>
                </ImgWrapper>
                <TextWrapper>
                    <H3>The definition of target audience</H3>
                    <P>Researching users and potential target audience is a critical step before proposing a solution.
                        Combining
                        the increasing demand for care with the changing demographics over the years, the table clearly
                        shows
                        that our main target group is older people over 65 years old who are less knowledgeable about
                        technology
                        and interaction.</P>
                </TextWrapper>
            </MediaWrapper>
            <ImgWrapper>
                <Image src='/pflegemangel/diagrams-3 1.png' width='720' height='416'/>
            </ImgWrapper>
            <Section>Design thinking</Section>
            <MediaWrapper>
                <ImgWrapper>
                    <Image src='/pflegemangel/research1.png' width='720' height='405'/>
                </ImgWrapper>
                <TextWrapper>
                    <H3>User analysis</H3>
                    <P>Identifying problems and possibilities for improvement in daily care processes through a
                        three-day role
                        play, personas, and customer journey map were the main purpose of the user process analysis.</P>
                </TextWrapper>
            </MediaWrapper>
            <MediaWrapper>
                <ImgWrapper>
                    <Image src='/pflegemangel/research2.png' width='720' height='405'/>
                </ImgWrapper>
                <TextWrapper>
                    <H3>Competitive analysis</H3>
                    <P>By comparing intelligent care products and prototypes on the market or under development, we
                        discover the
                        strengths, weaknesses and feasibility of each idea, thus inspiring unique product pain points
                        and
                        solutions.</P>
                </TextWrapper>
            </MediaWrapper>
            <Image src='/pflegemangel/competitiveAnalysis.png' width='752' height='555'/>

            <Section>Systematic solution</Section>
            <P>In this phase, we describe the intelligent tracking and interaction system between care need users, care
                staff, and medical personnel in detail.</P>
            <MediaWrapper>
                <ImgWrapper>
                    <Image src='/pflegemangel/solution1.png' width='720' height='405'/>
                </ImgWrapper>
                <ImgWrapper>
                    <Image src='/pflegemangel/solution5.png' width='720' height='405'/>
                </ImgWrapper>
            </MediaWrapper>
            <MediaWrapper>
                <ImgWrapper>
                    <Image src='/pflegemangel/solution3.png' width='720' height='405'/>
                </ImgWrapper>
                <ImgWrapper>
                    <Image src='/pflegemangel/solution4.png' width='720' height='405'/>
                </ImgWrapper>
            </MediaWrapper>
            <BigImgWrapper>
                <Image src='/pflegemangel/proposal.png' width='720' height='405'/>
            </BigImgWrapper>
            <Section>Tangible design</Section>
            <P>The most important node in the whole systematic solution lies in the interaction between the data
                collection system and the users. The user experience design with the elderly as the target group
                directly affects the effectiveness of data collection and the sustainability of the product.
                Therefore, <Strong>how to make the target audience, who are not familiar with the emerging technology
                    and interactive methods, understand the role of the product and the results of data calculation are
                    the most critical goal in this phase</Strong>.</P>
            <TextWrapper>
                <Content contentData={pflegemangelData.tangibleDesign}/>
            </TextWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  padding: 20vh 0;
  margin: 0 auto;
  max-width: 850px;
  color: white;
`

const H1 = styled.h1`
  margin: auto 0;
`
const H3 = styled.h3`
  font-size: 1.7em;
  margin: auto;
`

const H4 = styled.h4`
  margin: auto;
  font-weight: lighter;
`

const MediaWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 5vh 0;
`

const ImgWrapper = styled.div`
  width: 50%;
`
const BigImgWrapper = styled.div`
  width: 75%;
`

const TextWrapper = styled.div`
  width: 50%;
  padding: 0 2em;
`

const P = styled.p`
  font-weight: lighter;
`
const Strong = styled.strong`
  font-weight: bold;
`

const Section = styled.h4`
  border-bottom: 1px solid white;
  width: 100%;
  padding-top: 15vh;
  font-weight: lighter;
`

export default PflegeMangel