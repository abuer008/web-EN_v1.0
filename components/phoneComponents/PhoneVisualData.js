import { useState, useEffect } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { Sphere } from '../visualData/Sphere'

import {
    TitleWrapper,
    ImgWrapper,
    TextWrapper,
    PlainTextWrapper,
    ArtiWrapper,
    MainTitle,
    P1,
    Subtitle,
    Strong,
    P,
    CNSubtitle, CNP, CNP1
} from "./PhoneRevision";
import {IconComponent} from "../IconComponent";
import {useSelector} from "react-redux";

export const PhoneVisualData = () => {
    const {language} = useSelector(state => state.language)
    const [isEnglish, setLanguage] = useState(true)

    useEffect(() => {
        language === 'CN' ? setLanguage(false) : setLanguage(true)
    })

    return (
        <>
            <TitleWrapper>
                <ImgWrapper>
                    <Image src='/data-visualisation/visualData.webp' width='950' height='1088' objectFit='cover' />
                </ImgWrapper>
                { isEnglish ?
                    <TextWrapper black>
                        <MainTitle style={{width: '60%'}}>
                            <H1>Syrian Civil War</H1>
                        </MainTitle>
                        <P1>Data Visualisation</P1>
                    </TextWrapper>
                    :
                    <TextWrapper black>
                        <MainTitle style={{width: '50vw'}}>
                            <CNH1>叙利亚战争</CNH1>
                        </MainTitle>
                        <CNP1>战争数据可视化</CNP1>
                    </TextWrapper>
                }
            </TitleWrapper>

            <ArtiWrapper>
                <ImgWrapper>
                    <Image alt='syrian refugees walking on the street' src='/data-visualisation/refugeesFamily.webp' width='642' height='638' />
                </ImgWrapper>
                { isEnglish ?
                    <PlainTextWrapper black>
                        <Subtitle>Syrian Civil War</Subtitle>
                        <P>The Syrian Civil War is an ongoing civil war fought in Syria, so far noticed as the biggest
                            war in the 21st century. On 2 January 2013, the UN stated that 60,000 had been killed since
                            the civil war began, four months later, the UN’s updated figure for the death toll had
                            reached 80,000. In the visualisation of the Syrian Civil War, it wasn’t trying to deliver
                            any political opinion, but making people realise, that Syrian citizens, who were murdered in
                            the battlefield, are being recorded into a piece of data but are the real brutal
                            tragedies.</P>
                    </PlainTextWrapper>
                    :
                    <PlainTextWrapper black>
                        <CNSubtitle>叙利亚战争</CNSubtitle>
                        <CNP>叙利亚内战是至今为止，21世纪最大规模的战争。从2013年伊始，联合国报告了超过6000人在战争中的伤亡，几个月后，伤亡数超过80000人。在数据可视化的项目中，我们以2016至2019年的超过11000场大大小小的战役数据为基础，对大量数据进行处理，结合用户体验与真实运行性能考量，设计出高可行性的可视化体验。在这一项目中，我们并非尝试输入任何主观的观点，而是更好的客观描述与让目标用户对每个伤亡的人产生共情。</CNP>
                    </PlainTextWrapper>
                }
            </ArtiWrapper>

            <ArtiWrapper>
                <PlainTextWrapper black>
                    { isEnglish ?
                        <Subtitle>Source of truth</Subtitle>
                        :
                        <CNSubtitle>数据分析</CNSubtitle>
                    }
                </PlainTextWrapper>
                <ImgWrapper small>
                    <Image alt='the example of data source' src='/data-visualisation/sourceOfTruth.webp' width='598' height='432' />
                </ImgWrapper>
                <PlainTextWrapper black>
                    { isEnglish ?
                        <P>Data of the Syrian Civil War was provided by UCDP - The Uppsala Conflict Data Program, the
                            world’s leading provider of data on organised violence and the oldest ongoing data
                            collection project for civil war. The data were collecting and analysing served as the
                            starting point for visual contents and interactions.</P>
                        :
                        <CNP>叙利亚的战争数据来自于UCDP - Uppsala 战争数据统计，世界最大的战争数据库。通过对数据模型的全面分析，从用户体验设计角度上找出有价值的数据串，是数据分析的主要目的。</CNP>
                    }
                </PlainTextWrapper>
            </ArtiWrapper>

            <ArtiWrapper>
                <PlainTextWrapper black>
                    { isEnglish ?
                        <Subtitle>Perspective of Design</Subtitle>
                        :
                        <CNSubtitle>用户体验设计</CNSubtitle>
                    }
                </PlainTextWrapper>
                <ImgWrapper small>
                    <Image alt='the example of design' src='/data-visualisation/perspectiveOfDesign.webp' width='598' height='468' />
                </ImgWrapper>
                <PlainTextWrapper black>
                    {
                        isEnglish ?
                        <P>Each piece of data contains numbers of information, which most of them have no interest to
                            us. The relative information we focus on is the numbers, number of deaths, and the
                            coordinate of individual battles. Numbers are the most simple and powerful data in those
                            data set; the number of casualties means in those battles vivid lives have been taking,
                            uncountable families have been broken apart. Therefore, the numbers would be essential
                            elements in the design perspective.</P>
                            :
                            <CNP>在设计思维的框架下进行分析，数字是所有已有数据中最直观与最能产生共情的数据。伤亡的总人数与平民的伤亡数显示了每场战役的大小与惨烈程度，让用户更直观的了解叙利亚战役的牺牲不仅仅是文字或是某个不知名的地点的新闻故事。而在地图上标出实际发生的战役地点对整场战争的走向有更加清晰的认识，体现数据可视化的最大价值。</CNP>
                    }
                </PlainTextWrapper>
            </ArtiWrapper>

            <ArtiWrapper>
                { isEnglish ?
                    <PlainTextWrapper black>
                        <Subtitle>Rethinking of design and techniques</Subtitle>
                        <P>Data, the foundation of the interface design. Representing data, decoration and make the data
                            more understandable to a human, are the essential tasks of interface design. In this
                            particular project, through the experience of handling data, I’m realised that in a
                            productive project, the role of techniques should be involved in more critical parts. Taking
                            techniques into consideration from the design perspective makes the process more efficient
                            and realistic. Most importantly, the conceptual idea can be implemented consistently in the
                            final product.</P>
                    </PlainTextWrapper>
                    :
                    <PlainTextWrapper black>
                        <CNSubtitle>设计与技术的结合</CNSubtitle>
                        <CNP>用户体验设计不应该与技术脱离开，数据可视化项目完美的体现了技术在体验设计中的影响。超过10万行的数据对以浏览器平台的可视化有极大的性能压力，所以在理解数据运行的基础上，设计出符合技术要求的用户体验设计是这一项目的关键。对各种新兴技术的关注和运用也让用户体验设计提升到新的高度，在这次采用的实时3D渲染技术让可视化更加交互性。</CNP>
                    </PlainTextWrapper>
                }
            </ArtiWrapper>

            <SphereWrapper>
                <Sphere />
            </SphereWrapper>

            <IconWrapper>
                { isEnglish ?
                    <Subtitle style={{fontSize: '1.2em', textTransform: 'none', margin: 'auto', paddingTop: '2em'}}>*
                        For further information about technique details please check the repository</Subtitle>
                    :
                    <CNSubtitle>更多的细节请参考源代码</CNSubtitle>
                }
                <IconComponent pdfType='github' background='black' plainText='Link to Github' href='https://github.com/abuer008/syrian-civil-war-visualisation.git' />
            </IconWrapper>
        </>
    )
}

const IconWrapper = styled.div`
    margin: 3em;
  padding: 0;
`

export const H1 = styled.h1`
    font-size: 2.2em;
  margin: auto;
`

export const CNH1 = styled(H1)`
    font-family: Noto Sans SC;
  font-style: normal;
  font-weight: bold;
`

const SphereWrapper = styled.div`
    position: relative;
  bottom: 12em;
  height: 30vh;
  z-index: -1;
  margin: auto;
  padding: 0;
  
`