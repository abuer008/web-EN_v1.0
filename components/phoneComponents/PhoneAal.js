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
    VideoWrapper
} from "./PhoneRevision";
import {H1} from './PhoneVisualData'
import {IconComponent} from "../IconComponent";

export const PhoneAal = () => {
    return (
        <Wrapper>
            <TitleWrapper>
                <ImgWrapper>
                    <Image alt='walking cloud animation example' src='/aal/walkingCloudStill.png' width='950'
                           height='1488' objectFit='cover'/>
                </ImgWrapper>
                <TextWrapper black style={{textAlign: 'right', width: '50%', left: '38%'}}>
                    <H1>Ambient Assisted Living</H1>
                    <P1>Intelligent care services</P1>
                </TextWrapper>
            </TitleWrapper>

            <ArtiWrapper>
                <PlainTextWrapper>
                    <Subtitle>The Crisis of elderly care services</Subtitle>
                    <P>Europe has one of the highest shares of elderly people in the world. In 2016, already 19% of the
                        European population was 65 years and over. Looking at the prognoses, this share will increase to
                        29% by 2070; meaning that more than 1 in 4 people in Europe will be 65 years or over. As people
                        grow older, it is expected that there will be more people with age-related chronic diseases and
                        in need of long-term care.</P>
                    <IconComponent pdfType='pdf' background='black' plainText="The comprehensive case study of elderly care services" href='/' />
                </PlainTextWrapper>
            </ArtiWrapper>

            <ArtiWrapper>
                <ImgWrapper>
                    <Image alt='old lady with an nurse operating an ipad' src='/aal/aalIntro.jpg' width='502' height='320' objectFit='cover' />
                </ImgWrapper>
                <PlainTextWrapper>
                    <Subtitle>The Concept of AAL</Subtitle>
                    <P>Ambient Intelligence (AmI) is a research paradigm that brings intelligence to everyday environments through sensor networks, pervasive computing and artificial intelligence. This way, our environments become sensitive, adaptive and responsive to our presence and needs.</P>
                </PlainTextWrapper>
            </ArtiWrapper>

            <ArtiWrapper>
                <ImgWrapper>
                    <Image alt='tracking patch' src='/aal/hardwarePatch.png' width='720' height='450' objectFit='cover' />
                </ImgWrapper>
                <PlainTextWrapper>
                    <Subtitle>Wearable devices for gesture monitoring</Subtitle>
                    <P>Monitoring the posture can get many extraordinary results to assist people at home. For instance, lying down at a specific time can infer the user’s sleep time and sleep quality; sudden posture changes combined with heart rate changes can infer whether the user is in a dangerous situation. In this particular project, posture monitoring will be used as the primary data input source to automatically calculate the activity information and measurable data such as heart rate. Wearable smart bracelets will be the main input device, and the patch-type motion sensor sticks on the limbs to calculate comparable data.</P>
                </PlainTextWrapper>
            </ArtiWrapper>

            <ArtiWrapper>
                <ImgWrapper>
                    <Image alt='output example photo' src='/aal/outputStill.png' width='720' height='910' />
                </ImgWrapper>
                <PlainTextWrapper>
                    <Subtitle>Explicit output</Subtitle>
                    <P>Most of our target users are older adults who need long-term care, and most of them doesn’t familiar with screen-based interactive products. From a design perspective, how to let users interact without barriers and understand the health risks found in the data is the main aim of the interface design. Therefore, I implemented the most basic and obvious element - text, to describe the important information. The left figure shows the abstract and comprehensive information with dot-matrix; the important health prediction is divided into three parts and clearly expressed in the text: 1. The comprehensive real-time health report and advice. 2. Posture related information. 3. Activities related information.</P>
                </PlainTextWrapper>
            </ArtiWrapper>

            <ArtiWrapper>
                <ImgWrapper>
                    <Image alt='prototype examples' src='/aal/prototypeStill.png' width='720' height='672' />
                </ImgWrapper>
                <PlainTextWrapper>
                    <Subtitle>Prototype</Subtitle>
                    <P>The first principle of interactive design for elderly is the understanding of content, so light grey background and neuromorphic elements are used to get closer to the real world, the important health improvement suggestions are expressed in the black text; and the dots abstractly contains a large amount of health data, users or nursing staff can perform advanced data analysis; unnecessary interactive elements and pages are reduced as much as possible; the relationship between individual function would be deeply understood through the dynamic feedback. With the improvements from a design perspective, users can understand important information with minimum interaction; the nursing staff promptly observe users of abnormal situations and provide high-quality care services with few human resources; the doctors can also provide reliable diagnosis and treatment for those difficult detected diseases.</P>
                </PlainTextWrapper>
            </ArtiWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: #efefef;
`