import styled from 'styled-components'
import {useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {PhonePflegeMangel} from "../components/phoneComponents/PhonePflegeMangel";
import {usePhoneVersion} from "../components/usePhoneVersion";
import Layout from '../components/Layout'

import {HeroWrapper, HeroImg, HeroText, H1, P, Text, Wrapper, Sub, Sub2} from "./festival-guide";
import {Button} from './work'

import {Content} from '../components/phoneComponents/Content'
import {SectionBreak} from "../components/phoneComponents/PhoneConnecting";
import {pflegemangelData} from "../data/CardData";

const questionsData = [
    {
        name: 'Market potential',
        img: '/pflegemangel/market.png',
        plain: 'What is the market demand? how to forecast the potential for future development? and how the market conditions will affect the final product?'
    },
    {
        name: 'Target audience',
        img: '/pflegemangel/target.png',
        plain: 'Breakdown of specific users and how to design solutions tailored to specific users and scenarios?'
    },
    {
        name: 'Technical requirement',
        img: '/pflegemangel/technical.png',
        plain: 'Is there anything technical the design solution needs to take into account? Specific platforms this will or won\'t support? Form factors to consider?'
    }
]

const PflegeMangel = () => {
    const phoneVersion = usePhoneVersion()
    useEffect(() => {
        return () => window.history.go()
    }, [])

    return (
        <Layout backgroundColor='fff' overwrite showFooter UX>
            {phoneVersion ? <PhonePflegeMangel/> : <StandardPflegemangel/>}
        </Layout>
    )
}

const StandardPflegemangel = () => {
    return (
        <>
            <HeroWrapper>
                <HeroImg>
                    <Image src='/pflegemangel/heroBg.webp' width='1440' height='568' layout='responsive' objectFit='contain' />
                </HeroImg>
                <HeroText color='#17A2B8' top='35'>
                    <H1>Pflegemangel</H1>
                    <P style={{color: 'black'}}>During the common interviews in the nursing homes, a serious shortage of caregivers for elderly care was found, which bought us the attention of elderly care service. Then, we gained insight into the current circumstances and barriers of care services in Germany through various studies; and systematically analyzed common home care processes by building personas and scenarios analysis and compared them with various related products and prototypes to find the key product pain points. Finally, at the end of the report, we propose a systematic solution for specific usage scenarios.</P>
                </HeroText>
            </HeroWrapper>

            <Wrapper>
                <ImgWrapper>
                    <Image src='/pflegemangel/interviewImg.webp' width='630' height='500' />
                </ImgWrapper>
                <Text>
                    <H1>Interview</H1>
                    <Sub>Background</Sub>
                    <P>During an interview at the Kiel Municipal Hospital, we were surprised to discover the shortage of nursing services through our interviews with the nursing staff and our personal experience of the facilities and services in the care centre, to gather information about the various difficulties encountered in the nursing process, and to realize the impact of the ageing population on the entire nursing profession. The main topic of this project, therefore, is <Strong>how to change the barriers in nursing services and how to improve the current situation of elderly care structurally</Strong>.</P>
                </Text>
            </Wrapper>

            <Wrapper>
                <ImgWrapper>
                    <Image src='/pflegemangel/whatImg.webp' width='630' height='500' />
                </ImgWrapper>
                <Text>
                    <H1>Goals</H1>
                    <Sub>The purpose of UX research</Sub>
                    <P>The current circumstances of elderly care in Europe, and the future challenges of it.</P>
                    <P>Find out what is the actual situation during the care services, which practical problems that encountered in nursing.</P>
                    <P>Compare the research being carried out with the products and analyse their strengths and weaknesses.</P>
                </Text>
            </Wrapper>

            <Wrapper>
                <Text style={{left: '22.3vw'}}>
                    <H1>Questions</H1>
                    <Sub2>The 3 main questions should be answered</Sub2>
                    {
                        questionsData.map((item, key) => {
                            return <Question key={key} item={item} />
                        })
                    }
                </Text>

            </Wrapper>

            <Wrapper>
                <ImgWrapper>
                    <Image src='/pflegemangel/alterstructur.webp' width='630' height='700' />
                </ImgWrapper>
                <Text>
                    <H1>Process</H1>
                    <Sub>Statistical analysis</Sub>
                    <P>Europe has one of the highest shares of elderly people in the world, and it would be increased year by year. The increased demand for long-term care for older people with fewer caregivers has led to a dilemma in care services and a significant increase in state welfare budgets. <Strong>Systematic innovation of care services is an urgent issue for many governments</Strong>.</P>
                </Text>
            </Wrapper>
            <MImg>
                <Image src='/pflegemangel/targetStatistic.webp' width='1060' height='720' />
            </MImg>
            <PmWrapper>
                <HeroText>
                    <Sub>Persona and scenarios</Sub>
                    <P>Through user observation, interviews with nursing homes, and hands-on experience, we fully understand the comprehensive care environment and conditions in the home. And the different care issues are described through set scenarios to <Strong>reflect the pain points and opportunities of elderly care objectively</Strong>.</P>
                </HeroText>
            <MImg>
                <Image src='/pflegemangel/scenarios.webp' width='1122' height='832' />
            </MImg>
            </PmWrapper>

            <PmWrapper>
                <HeroText>
                    <Sub>Competitive analysis</Sub>
                    <P>Using the <Strong>SWOT</Strong> framework by comparing intelligent care products and prototypes on the market or under development, we discover the strengths, weaknesses and feasibility of each idea, thus <Strong>inspiring unique product pain points and solutions</Strong>.</P>
                </HeroText>
            </PmWrapper>
            <Wrapper>
                <MImg>
                    <Image src='/pflegemangel/competitors.webp' width='1060' height='782' />
                </MImg>
            </Wrapper>

            <Wrapper>
                <Text style={{left: '22.3vw'}}>
                    <H1 style={{marginBottom: '3rem'}}>Framing</H1>
                    <Sub>The crisis of elderly care services</Sub>
                    <P>In the above study, we found the problem of irreversible development of elderly care. Due to the ageing population and childlessness, more older adults choose or be forced to choose care services. The shortage of caregivers will become increasingly acute and challenging the healthy and active lifestyle of older people.</P>
                    <Sub>The definition of target audience</Sub>
                    <P>Germany classifies people in need of care into 5 grades and has strict guidelines for classification. The majority of people fall between grades 2 and 3, i.e. people with limited mobility. Many older adults choose to be cared for at home with the help of modern technology, and the caregivers are often their own relatives.</P>
                    <Sub>The market potential</Sub>
                    <P>Intelligent care products and services have been developed for more than a decade since 2008, with various products and prototypes emerging. There is a lack of a universal solution in facing the growing demand for care - one that provides intelligent care support without modifying the home environment or affecting the lifestyle habits of the users.</P>
                </Text>
            </Wrapper>

            <Wrapper>
                <Text style={{left: '22.3vw'}}>
                    <H1>Solutions</H1>
                    <Sub>Ambient Assisted Living</Sub>
                    <P>Based on a preliminary study, we propose a systematic solution that helps to establish the triangular relationship and communication between the target audience in need of care, the family caregivers and the family doctor. By collecting and calculating posture data, a large amount of data is available to support care services and disease diagnoses.</P>
                </Text>
            </Wrapper>
            <MImg>
                <Image src='/pflegemangel/proposals1.webp' width='1060' height='657' />
            </MImg>
            <MImg>
                <Image src='/pflegemangel/proposals2.webp' width='1060' height='597' />
            </MImg>

            <Wrapper style={{marginBottom: '5rem'}}>
                <Text style={{left: '22.3vw'}}>
                    <H1>Next Step</H1>
                    <Sub>UX towards older adults</Sub>
                    <P>How to make the target audience, who are not familiar with the emerging technology and interactive methods, understand the role of the product and the results of data calculation are the most critical goal in next phase.</P>
                    <Link href='/aal'>
                    <Button bgColor='#1F9F71'>Ambient Assisted Living</Button>
                    </Link>
                </Text>
            </Wrapper>

        </>
    )
}

const Question = ({item}) => (
    <Vertical>
        <Horizontal>
            <Image src={item.img} width='48' height='48' />
            <Sub style={{paddingLeft: '1rem'}}>{item.name}</Sub>
        </Horizontal>
        <P>{item.plain}</P>
    </Vertical>
)

const MImg = styled.div`
    width: 70%;
  margin: auto;
`

const Vertical = styled.div`
    padding: 1rem 0;
`

const Horizontal = styled.div`
    display: flex;
  flex-direction: row;
  justify-content: flex-start;
`

const PmWrapper = styled.div`
    position: relative;
  //height: 10rem;
  //width: 60%;
  margin: 5rem 0;
`

const IconWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
    display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  //margin: 2rem;
`
const Icon = styled.div`
    width: 10rem;
`

const IconText = styled.div`
    width: 50%;
  margin: 0 auto;
`

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

// const Wrapper = styled.div`
  //padding: 20vh 120px;
  //margin: 0 auto;
  //max-width: 1020px;
  //color: white;
//`
//
// const H1 = styled.h1`
//   margin: auto 0;
//   //font-family: source-han-serif-sc, serif;
//   font-size: 3.2rem;
// `
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
  //width: 50%;
`
const BigImgWrapper = styled.div`
  width: 75%;
`

const TextWrapper = styled.div`
  width: 50%;
  padding: 0 2em;
`

// const P = styled.p`
//   font-size: 1rem;
//   line-height: 1.4rem;
//   font-weight: lighter;
// `
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