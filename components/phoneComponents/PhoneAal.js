import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import {
    TitleWrapper,
    ImgWrapper,
    TextWrapper,
    PlainTextWrapper,
    ArtiWrapper,
    Subtitle,
    MainTitle,
    P1,
    P,
    Strong,
    VideoWrapper, CNP1, CNSubtitle, CNP
} from "./PhoneRevision";
import {H1, CNH1} from './PhoneVisualData'
import {IconComponent} from "../IconComponent";
import {useSelector} from "react-redux";

export const PhoneAal = () => {
    const {language} = useSelector(state => state.language)
    const [isEnglish, setLanguage] = useState(true)

    useEffect(() => {
        language === 'CN' ? setLanguage(false) : setLanguage(true)
    })

    return (
        <Wrapper>
            <TitleWrapper>
                <ImgWrapper>
                    <Image alt='walking cloud animation example' src='/aal/walkingCloudStill.webp' width='950'
                           height='1088' objectFit='cover'/>
                </ImgWrapper>
                { isEnglish ?
                    <TextWrapper black style={{textAlign: 'right', width: '50%', left: '38%'}}>
                        <H1>Ambient Assisted Living</H1>
                        <P1>Intelligent care services</P1>
                    </TextWrapper>
                    :
                    <TextWrapper black style={{textAlign: 'right', width: '70%', left: '18%'}}>
                        <CNH1>智能环境辅助</CNH1>
                        <CNP1>智能化老年看护</CNP1>
                        <P1>Intelligent care services</P1>
                    </TextWrapper>
                }
            </TitleWrapper>

            <ArtiWrapper>
                { isEnglish ?
                    <PlainTextWrapper black>
                        <Subtitle>The Crisis of elderly care services</Subtitle>
                        <P>Europe has one of the highest shares of elderly people in the world. In 2016, already 19% of
                            the
                            European population was 65 years and over. Looking at the prognoses, this share will
                            increase to
                            29% by 2070; meaning that more than 1 in 4 people in Europe will be 65 years or over. As
                            people
                            grow older, it is expected that there will be more people with age-related chronic diseases
                            and
                            in need of long-term care.</P>
                        <IconComponent pdfType='pdf' background='black'
                                       plainText="The comprehensive case study of elderly care services"
                                       href='/interactive-projects/pflegemangel'/>
                    </PlainTextWrapper>
                    :
                    <PlainTextWrapper black>
                        <CNSubtitle>老年看护服务的危机</CNSubtitle>
                        <CNP>欧洲与亚洲拥有世界上最大的老年人群体。在2016年欧洲超过65岁以上的人口占总人口的19%，而且将会在2070年达到29%，1/4的人口将会是有限自理能力的老年人。人口比例的结构化变化将会带来不可预知的严重后果，其中已经被证实与缓慢发生的危机便是<Strong>老年看护的短缺以及社会福利断崖式下跌的危险</Strong>。</CNP>
                        <IconComponent pdfType='pdf' background='black' plainText='完整的老年护理研究' href='/interactive-projects/pflegemangel' />
                    </PlainTextWrapper>
                }
            </ArtiWrapper>

            <ArtiWrapper>
                <ImgWrapper>
                    <Image alt='old lady with an nurse operating an ipad' src='/aal/aalIntro.webp' width='502' height='320' objectFit='cover' />
                </ImgWrapper>
                { isEnglish ?
                    <PlainTextWrapper black>
                        <Subtitle>The Concept of AAL</Subtitle>
                        <P>Ambient Intelligence (AmI) is a research paradigm that brings intelligence to everyday
                            environments through sensor networks, pervasive computing and artificial intelligence. This
                            way, our environments become sensitive, adaptive and responsive to our presence and
                            needs.</P>
                    </PlainTextWrapper>
                    :
                    <PlainTextWrapper black>
                        <CNSubtitle><Strong>AAL</Strong>概念</CNSubtitle>
                        <CNP>智能环境辅助系统（Ambient Assisted Living）是一个研究性项目 - 通过传感网络，小型化的智能设备，将日常生活环境智能化。至今在德国有超过100个政府资助的AAL项目正在研究中，AAL与IoT（智能互联）最大的区别在与<Strong>以用户为中心的设计理念</Strong>，而针对老年人这一特定群体的用户体验设计是巨大的挑战和机遇。</CNP>
                    </PlainTextWrapper>
                }
            </ArtiWrapper>

            <ArtiWrapper>
                <ImgWrapper>
                    <Image alt='tracking patch' src='/aal/hardwarePatch.webp' width='720' height='450' objectFit='cover' />
                </ImgWrapper>
                { isEnglish ?
                    <PlainTextWrapper black>
                        <Subtitle>Wearable devices for gesture monitoring</Subtitle>
                        <P>Monitoring the posture can get many extraordinary results to assist people at home. For
                            instance, lying down at a specific time can infer the user’s sleep time and sleep quality;
                            sudden posture changes combined with heart rate changes can infer whether the user is in a
                            dangerous situation. In this particular project, posture monitoring will be used as the
                            primary data input source to automatically calculate the activity information and measurable
                            data such as heart rate. Wearable smart bracelets will be the main input device, and the
                            patch-type motion sensor sticks on the limbs to calculate comparable data.</P>
                    </PlainTextWrapper>
                    :
                    <PlainTextWrapper black>
                        <CNSubtitle>全新的姿态监控</CNSubtitle>
                        <CNP>对四肢位置，角度，速率等数据的有限追踪与处理能得到意想不到的效果。比如说，结合姿态监控与心率监控能精确的追踪用户的睡眠时间与质量，突然姿态与心率的改变能够推测出各种紧急的状态，而通过长期的大数据统计，细微的数据变化也可以提早发现潜在的健康威胁。在这一项目中，姿态监控将作为最常规的数据收集手段实时监控用户的抽象姿态数据，与智能手环一起建立全方位的个人生活数据库，传统贴片形式的小型传感器作为对老年人友好的形式也让目标用户无障碍的理解与使用。</CNP>
                    </PlainTextWrapper>
                }
            </ArtiWrapper>

            <ArtiWrapper>
                <ImgWrapper>
                    <Image alt='output example photo' src='/aal/outputStill.webp' width='720' height='910' />
                </ImgWrapper>
                { isEnglish ?
                    <PlainTextWrapper black>
                        <Subtitle>Explicit output</Subtitle>
                        <P>Most of our target users are older adults who need long-term care, and most of them doesn’t
                            familiar with screen-based interactive products. From a design perspective, how to let users
                            interact without barriers and understand the health risks found in the data is the main aim
                            of the interface design. Therefore, I implemented the most basic and obvious element - text,
                            to describe the important information. The left figure shows the abstract and comprehensive
                            information with dot-matrix; the important health prediction is divided into three parts and
                            clearly expressed in the text: 1. The comprehensive real-time health report and advice. 2.
                            Posture related information. 3. Activities related information.</P>
                    </PlainTextWrapper>
                    :
                    <PlainTextWrapper black>
                        <CNSubtitle>明确的数据处理展示</CNSubtitle>
                        <CNP>针对老年目标群体的交互设计最基本的假设前提是 - 完全零交互。虽然智能化产品与共识的交互方式已经很普遍，但为了满足大多数目标人群的需求，尽可能少的交互语言与直观的数据展示在本项目中是核心的原则。所以在实际的界面设计中元素被分为两部分，第一我们采用最直接的文字元素去清晰的描述数据处理的关键结果，第二用抽象的点阵图给工作人员更加丰富的数据预览。</CNP>
                    </PlainTextWrapper>
                }
            </ArtiWrapper>

            <ArtiWrapper>
                <ImgWrapper>
                    <Image alt='prototype examples' src='/aal/prototypeStill.webp' width='720' height='672' />
                </ImgWrapper>
                { isEnglish ?
                    <PlainTextWrapper black>
                        <Subtitle>Prototype</Subtitle>
                        <P>The first principle of interactive design for elderly is the understanding of content, so
                            light grey background and neuromorphic elements are used to get closer to the real world,
                            the important health improvement suggestions are expressed in the black text; and the dots
                            abstractly contains a large amount of health data, users or nursing staff can perform
                            advanced data analysis; unnecessary interactive elements and pages are reduced as much as
                            possible; the relationship between individual function would be deeply understood through
                            the dynamic feedback. With the improvements from a design perspective, users can understand
                            important information with minimum interaction; the nursing staff promptly observe users of
                            abnormal situations and provide high-quality care services with few human resources; the
                            doctors can also provide reliable diagnosis and treatment for those difficult detected
                            diseases.</P>
                    </PlainTextWrapper>
                    :
                    <PlainTextWrapper black>
                        <CNSubtitle>原型设计</CNSubtitle>
                        <CNP>在实际的界面设计中，我们采用浅灰色为整体背景，浮雕式的元素用以突出关键的信息，大量突出的文字指引与低密度的信息量让用户在不需要任何交互的前提下能够接受与即刻理解关键的健康建议，而在界面左边直观的点状动态图将姿态信息完整呈现给用户，让参与者对收集信息的方式有大致的了解的同时，对自身姿态的变化与潜在的风险也有直观的感受。而以护理人员为目标的功能区域，点状图包含了根据日期与时间区间分布的大量的原始数据，成为提高护理质量与进行医疗诊断的真实依据。</CNP>
                    </PlainTextWrapper>
                }
            </ArtiWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: #efefef;
`