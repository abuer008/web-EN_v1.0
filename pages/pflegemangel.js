import styled from 'styled-components'
import {useEffect} from 'react'
import Image from 'next/image'
import {PhonePflegeMangel} from "../components/phoneComponents/PhonePflegeMangel";
import {usePhoneVersion} from "../components/usePhoneVersion";
import Layout from '../components/Layout'

import {Content} from '../components/phoneComponents/Content'
import {SectionBreak} from "../components/phoneComponents/PhoneConnecting";
import {pflegemangelData} from "../data/CardData";

const PflegeMangel = () => {
    const phoneVersion = usePhoneVersion()
    useEffect(() => {
        return () => window.history.go()
    }, [])

    return (
        <Layout isBlack={false} backgroundColor='#303030' overwrite showFooter>
            {phoneVersion ? <PhonePflegeMangel/> : <StandardPflegemangel/>}
        </Layout>
    )
}

const StandardPflegemangel = () => {
    return (
        <Wrapper>
            <Title>
                <H1>#Pflegemangel</H1>
                <H4>Case study of care services</H4>
            </Title>
            <Section>Background</Section>
            <MediaWrapper>
                <ImgWrapper>
                    <Image src='/aal/aalIntro.webp' width='1126' height='794' objectFit='cover'/>
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
                        The main topic of this UX research project, therefore, is how to change the barriers in nursing services and
                        how to
                        improve the current situation of elderly care structurally.</P>
                </TextWrapper>
            </MediaWrapper>

            <Section>Research Goals</Section>
            <MediaWrapper>
                <Ul>
                    <Li>
                        <H2>The current circumstances of elderly care in Europe, and the future challenges of it.</H2>
                    </Li>
                    <Li>
                        <H2>Find out what is the actual situation during the care services, which practical problems
                            that encountered in nursing.</H2>
                    </Li>
                    <Li>
                        <H2>Compare the research being carried out with the products and analyse their strengths and
                            weaknesses.</H2>
                    </Li>
                </Ul>
            </MediaWrapper>


            <Section>Methods and Process</Section>
            <MediaWrapper>
                <ImgWrapper>
                    <Image src='/pflegemangel/diagrams1.webp' width='720' height='416'/>
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
                    <Image src='/pflegemangel/diagrams2.webp' width='720' height='416'/>
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
                <Image src='/pflegemangel/diagrams3.webp' width='720' height='416'/>
            </ImgWrapper>
            <MediaWrapper>
                <ImgWrapper>
                    <Image src='/pflegemangel/research1.webp' width='720' height='405'/>
                </ImgWrapper>
                <TextWrapper>
                    <H3>Interviews, customer journey and role play</H3>
                    <P>Identifying problems and possibilities for improvement in daily care processes through a
                        three-day role
                        play, personas, and customer journey map were the main purpose of the user process analysis.</P>
                </TextWrapper>
            </MediaWrapper>
            <MediaWrapper>
                <ImgWrapper>
                    <Image src='/pflegemangel/research2.webp' width='720' height='405'/>
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
            <Image src='/pflegemangel/competitiveAnalysis.webp' width='752' height='555'/>

            <Section>Framing</Section>
            <MediaWrapper>
                <ImgWrapper>
                    <Image src='/pflegemangel/diagrams4.webp' width='720' height='405'/>
                </ImgWrapper>
                <TextWrapper>
                    <H3>The crisis of elderly care services</H3>
                    <P>In the above study, we found the problem of irreversible development of elderly care. Due to the
                        ageing population and childlessness, more older adults choose or be forced to choose care
                        services. The shortage of caregivers will become increasingly acute and challenging the healthy
                        and active lifestyle of older people.</P>
                </TextWrapper>
            </MediaWrapper>

            <MediaWrapper>
                <ImgWrapper>
                    <Image src='/pflegemangel/pflegeGrad.webp' width='800' height='476'/>
                </ImgWrapper>
                <TextWrapper>
                    <H3>Target audience</H3>
                    <P>Germany classifies people in need of care into 5 grades and has strict guidelines for
                        classification. The majority of people fall between grades 2 and 3, i.e. people with limited
                        mobility. Many older adults choose to be cared for at home with the help of modern technology,
                        and the caregivers are often their own relatives.</P>
                </TextWrapper>
            </MediaWrapper>

            <MediaWrapper>
                <ImgWrapper/>
                <TextWrapper>
                    <H3>Competitive analysis results</H3>
                    <P>Intelligent care products and services have been developed for more than a decade since 2008,
                        with various products and prototypes emerging. There is a lack of a universal solution in facing
                        the growing demand for care - one that provides intelligent care support without modifying the
                        home environment or affecting the lifestyle habits of the users.</P>
                </TextWrapper>
            </MediaWrapper>

            <Section>Results - the systematic AAL (Ambient Assisted Living) solution</Section>
            <MediaWrapper>
            <ImgWrapper>
                <Image src='/pflegemangel/solution1.webp' width='720' height='405'/>
            </ImgWrapper>
            <TextWrapper>
                <H3>Intelligent care environment</H3>
                <P>Based on a preliminary study, we propose a systematic solution that helps to establish the triangular
                    relationship and communication between the target audience in need of care, the family caregivers
                    and the family doctor. By collecting and calculating posture data, a large amount of data is
                    available to support care services and disease diagnoses.</P>
            </TextWrapper>
            </MediaWrapper>
            <MediaWrapper>
                <ImgWrapper>
                    <Image src='/pflegemangel/solution5.webp' width='720' height='405'/>
                </ImgWrapper>
                <ImgWrapper>
                    <Image src='/pflegemangel/solution3.webp' width='720' height='405'/>
                </ImgWrapper>
            </MediaWrapper>
            <MediaWrapper>
                <ImgWrapper>
                    <Image src='/pflegemangel/solution4.webp' width='720' height='405'/>
                </ImgWrapper>
                <ImgWrapper>
                    <Image src='/pflegemangel/proposal.webp' width='720' height='405'/>
                </ImgWrapper>
            </MediaWrapper>
            <Section>Next Step</Section>
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

const Title = styled.div`
  height: 25vh;
  //font-family: source-han-serif-sc, serif;
`

const GoalWrapper = styled.div`
  display: flex;
  flex-direction: row;
`
const Ul = styled.ul`
  width: 80%;
  margin: auto;
`

const Li = styled.li`
  padding: 0.5rem;
`

const H2 = styled.h2`
  //font-family: source-han-serif-sc, serif;
  font-weight: 400;
  font-size: 1.8rem;
`

const Wrapper = styled.div`
  padding: 20vh 120px;
  margin: 0 auto;
  max-width: 1020px;
  color: white;
`

const H1 = styled.h1`
  margin: auto 0;
  //font-family: source-han-serif-sc, serif;
  font-size: 3.2rem;
`
const H3 = styled.h3`
  font-size: 2rem;
  //font-family: source-han-serif-sc, serif;
  font-weight: 400;
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
  font-size: 1rem;
  line-height: 1.4rem;
  font-weight: lighter;
`
const Strong = styled.strong`
  font-weight: bold;
`

const Section = styled.h4`
  border-bottom: 1px solid white;
  width: 100%;
  padding-top: 5vh;
  margin-bottom: 10vh;
  font-weight: lighter;
`

export default PflegeMangel