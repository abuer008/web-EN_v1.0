import {useState, useEffect} from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import {
    TitleWrapper,
    ImgWrapper,
    TextWrapper,
    ArtiWrapper,
    PlainTextWrapper,
    MainTitle,
    Subtitle,
    P1,
    P,
    Strong,
    CNP1, CNSubtitle, CNP
} from "./PhoneRevision";
import {SectionBreak} from "./PhoneConnecting";
import {H1, CNH1} from './PhoneVisualData'
import {useSelector} from "react-redux";

export const PhonePflegeMangel = () => {
    const {language} = useSelector(state => state.language)
    const [isEnglish, setLanguage] = useState(true)

    useEffect(() => {
        language === 'CN' ? setLanguage(false) : setLanguage(true)
    })

    return (
        <>
            <PflegeTitle>
                <TextWrapper style={{top: '50%'}}>
                    <MainTitle>
                        {isEnglish ?
                            <H1>#Pflegemangel</H1>
                            :
                            <CNH1 style={{width: '70vw'}}>#护理危机</CNH1>
                        }
                    </MainTitle>
                    {isEnglish ?
                        <P1>Case study of care services</P1>
                        :
                        <CNP1>智能环境辅助的前期UX案例研究</CNP1>
                    }
                </TextWrapper>
            </PflegeTitle>

            <WArtiWrapper>
                <PlainTextWrapper>
                    <SectionBreak>{isEnglish ? 'Research' : '调研'}</SectionBreak>
                </PlainTextWrapper>
            </WArtiWrapper>

            <WArtiWrapper>
                {isEnglish ?
                    <PlainTextWrapper>
                        <PSub>Interviewing in nursing home</PSub>
                        <P>During an interview at the Kiel Municipal Hospital, we were surprised to discover the shortage of nursing services through our interviews with the nursing staff and our personal experience of the facilities and services in the care centre, to gather information about the various difficulties encountered in the nursing process, and to realize the impact of the ageing population on the entire nursing profession. The main topic of this project, therefore, is how to change the barriers in nursing services and how to improve the current situation of elderly care structurally.</P>
                    </PlainTextWrapper>
                    :
                    <PlainTextWrapper>
                        <CNPSub>老人护理中心的采访</CNPSub>
                        <CNP>在基尔市立医院的一次采访中，通过我们对护工的采访与护理中心的各个设施与服务的亲生经历，我们惊讶的发现其中护理服务短缺的事实，收集了对护理工作过程中遇到的各类困难，并深刻的意识到人口老龄化对整个护理行业的打击，怎样改变护理服务中的种种障碍以及结构化的转变老年护理的现状是本次项目的主要课题。</CNP>
                    </PlainTextWrapper>
                }
            </WArtiWrapper>

            <WArtiWrapper>
                {isEnglish ?
                    <PlainTextWrapper>
                        <PSub>The research of ageing population in Europe</PSub>
                        <P>Europe has one of the highest shares of elderly people in the world. In 2016, already 19% of
                            the European population was 65 years and over. Looking at the prognoses, this share will
                            increase to 29% by 2070; meaning that more than 1 in 4 people in Europe will be 65 years or
                            over. As people grow older, it is expected that there will be more people with age-related
                            chronic diseases and in need of long-term care.</P>
                    </PlainTextWrapper>
                    :
                    <PlainTextWrapper>
                        <CNPSub>欧洲人口老龄化的现状与未来</CNPSub>
                        <CNP>欧洲拥有世界上最高比例的老龄化比例，并逐年提高。增加的长期护理需求的老年人与减少的护理人员，导致了护理服务的困境与国家福利预算的大幅提高。对护理服务的系统化创新是许多政府急需解决的问题。</CNP>
                    </PlainTextWrapper>
                }
                <ImgWrapper>
                    <Image alt='the trends of population growing' src='/pflegemangel/diagrams-1 1.png' width='720'
                           height='416'/>
                </ImgWrapper>
                <PlainTextWrapper>
                    {isEnglish ?
                        <PSub>The crisis of elderly care services</PSub>
                        :
                        <CNPSub>老年护理的困境</CNPSub>
                    }
                </PlainTextWrapper>
                <ImgWrapper>
                    <Image alt='the research of care needs quotes' src='/pflegemangel/diagrams-2 1.png' width='720'
                           height='418'/>
                </ImgWrapper>
                {isEnglish ?
                    <PlainTextWrapper>
                        <PSub>The definition of target audience</PSub>
                        <P>Researching users and potential target audience is a critical step before proposing a
                            solution. Combining the increasing demand for care with the changing demographics over the
                            years, the table clearly shows that our main target group is older people over 65 years old
                            who are less knowledgeable about technology and interaction.</P>
                    </PlainTextWrapper>
                    :
                    <PlainTextWrapper>
                        <CNPSub>目标人群研究</CNPSub>
                        <CNP>研究用户与潜在目标人群是提出解决方案前的关键一步，结合逐年增加的护理需求与人口结构的变化，表格中清晰的表明了我们主要的目标人群是超过65岁，对技术与交互不太了解的老年人。</CNP>
                    </PlainTextWrapper>
                }
                <ImgWrapper>
                    <Image alt='the analysis of care needed audience' src='/pflegemangel/diagrams-3 1.png' width='720'
                           height='450'/>
                </ImgWrapper>
            </WArtiWrapper>

            <WArtiWrapper>
                <PlainTextWrapper>
                    <SectionBreak>{isEnglish ? 'Design thinking' : '设计思维'}</SectionBreak>
                </PlainTextWrapper>
            </WArtiWrapper>

            <WArtiWrapper>
                {isEnglish ?
                    <PlainTextWrapper>
                        <PSub>User analysis</PSub>
                        <P>Identifying problems and possibilities for improvement in daily care processes through a
                            three-day role play and the customer journey map was the main purpose of the user process
                            analysis.</P>
                    </PlainTextWrapper>
                    :
                    <PlainTextWrapper>
                        <CNPSub>用户流程分析</CNPSub>
                        <CNP>通过为期三天的角色扮演与后期的用户流程分析(customer journey map)，发现日常护理流程中存在的问题与改进的空间是用户流程分析的主要目的。</CNP>
                    </PlainTextWrapper>
                }
            </WArtiWrapper>

            <WArtiWrapper>
                <ImgWrapper>
                    <Image alt='customer journey requests view' src='/pflegemangel/research1.webp' width='720'
                           height='404'/>
                </ImgWrapper>
                <ImgWrapper>
                    <Image alt='customer journey received view' src='/pflegemangel/research2.webp' width='720'
                           height='404'/>
                </ImgWrapper>
                <ImgWrapper>
                    <Image alt='customer journey active helping' src='/pflegemangel/research3.webp' width='720'
                           height='404'/>
                </ImgWrapper>
                <ImgWrapper>
                    <Image alt='customer journey medications' src='/pflegemangel/research4.webp' width='720'
                           height='404'/>
                </ImgWrapper>
            </WArtiWrapper>

            <WArtiWrapper>
                {isEnglish ?
                    <PlainTextWrapper>
                        <PSub>Competitive analysis</PSub>
                        <P>By comparing intelligent care products and prototypes on the market or under development, we
                            discover the strengths, weaknesses and feasibility of each idea, thus inspiring unique
                            product pain points and solutions.</P>
                    </PlainTextWrapper>
                    :
                    <PlainTextWrapper>
                        <CNPSub>竞品可行性分析</CNPSub>
                        <CNP>通过比较市面上或正在研发中的智能化护理产品与原型，发现各个想法的技术的优缺点与可行性，从而激发出独特的产品痛点与解决方案。</CNP>
                    </PlainTextWrapper>
                }
                <PlainTextWrapper>
                    <ImgWrapper style={{width: '80vw'}}>
                        <Image alt='the diagram of competitive analysis' src='/pflegemangel/competitiveAnalysis.png'
                               width='906' height='669' objectFit='cover'/>
                    </ImgWrapper>
                </PlainTextWrapper>
            </WArtiWrapper>

            <WArtiWrapper>
                <PlainTextWrapper>
                    <SectionBreak>{isEnglish ? 'Systematic solution' : '系统化解决方案'}</SectionBreak>
                    {isEnglish ?
                        <P>In this phase, we describe the intelligent tracking and interaction system between care need
                            users, care staff, and medical personnel in detail.</P>
                        :
                        <CNP>在这一方案中，我们详细描述了护理需求用户，护理工作人员与医疗人员间的智能追踪与交互系统。</CNP>
                    }
                </PlainTextWrapper>
            </WArtiWrapper>

            <WArtiWrapper>
                <ImgWrapper>
                    <Image alt='general solution map' src='/pflegemangel/solution1.png' width='720' height='404'/>
                </ImgWrapper>
                <ImgWrapper>
                    <Image alt='how data been collected' src='/pflegemangel/solution2.png' width='720' height='404'/>
                </ImgWrapper>
                <ImgWrapper>
                    <Image alt='how data been manipulated' src='/pflegemangel/solution4.png' width='720' height='404'/>
                </ImgWrapper>
                <ImgWrapper>
                    <Image alt='the compact product plan' src='/pflegemangel/solution5.png' width='720' height='404'/>
                </ImgWrapper>
                <ImgWrapper>
                    <Image alt='general proposals' src='/pflegemangel/proposal.png' width='720' height='404'/>
                </ImgWrapper>
            </WArtiWrapper>
        </>
    )
}

const PflegeTitle = styled.div`
  position: relative;
  height: 40vh;
`

const WArtiWrapper = styled(ArtiWrapper)`
  color: white;
`

const PSub = styled(Subtitle)`
  text-transform: none;
  font-weight: bold;
`

const CNPSub = styled(CNSubtitle)`
  text-transform: none;
  font-weight: bold;
`