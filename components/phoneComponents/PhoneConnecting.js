import styled from 'styled-components'
import Image from 'next/image'
import {useState, useEffect} from 'react'
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
    VideoWrapper, CNP, CNP1, CNSubtitle
} from "./PhoneRevision";
import {H1} from './PhoneVisualData'
import {LottiePhoneAnima, LottieStateAnima} from "./LottieAnima";
import { IconComponent } from "../IconComponent";
import { States } from '../connecting/States'

import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {animaState, connectingAnima, statesExample} from "../../data/Connecting";
import {useSelector} from "react-redux";

gsap.registerPlugin(ScrollTrigger)

export const PhoneConnecting = () => {
    const { language } = useSelector(state => state.language)
    const [isEnglish, setLanguage] = useState(true)

    useEffect(() => {
        language === 'CN' ? setLanguage(false) : setLanguage(true)
    })

    return (
        <div style={{overflow: 'hidden'}}>
            <TitleWrapper>
                <ImgWrapper>
                    <Image src='/connecting/phoneConnecting.png' width='950' height='1088' objectFit='cover'/>
                </ImgWrapper>
                <TextWrapper style={{top: '40vh'}}>
                    <MainTitle>
                        <H1>Connecting</H1>
                    </MainTitle>
                    {!isEnglish && <CNP1>虚拟亲属关系</CNP1>}
                    <P1>Virtual Kinship</P1>
                </TextWrapper>
            </TitleWrapper>

            <WArtiWrapper>
                { isEnglish ?
                    <PlainTextWrapper>
                        <Subtitle>
                            The development of contemporary kinship
                        </Subtitle>
                        <P>Childlessness, single-parent family, and ageing population, the collapse of traditional family form has caused series of social problems and financial crisis; more children and adolescents no longer grow up during their entire childhood and adolescence with both birth parents. So, in this inevitable trend, what impact will the new generation of digital and interaction design have on developing relationships between individuals?</P>
                    </PlainTextWrapper>
                    :
                    <PlainTextWrapper>
                        <CNSubtitle>现代亲属关系的发展趋势</CNSubtitle>
                        <CNP>少子化，单亲家庭，人口老年化，近年来愈加频繁的社会问题表明未来社会结构化转变的契机，更多的子女与青少年不在父母的身边成长，对亲属关系的未来产生深远的影响。所以，在这一不可避免的发展趋势中，新一代的数字化与交互设计会对个体之间的关系发展产生什么样的冲击？</CNP>
                    </PlainTextWrapper>
                }
            </WArtiWrapper>

            <WArtiWrapper>
                <PlainTextWrapper>
                    <SectionBreak>{isEnglish ? 'Product introduction' : '产品介绍'}</SectionBreak>
                </PlainTextWrapper>
            </WArtiWrapper>

            <WArtiWrapper>
                <PlainTextWrapper>
                    <AnimaWrapper>
                        <LottiePhoneAnima anima={connectingAnima[0]} autoplay={false}/>
                        <ASubtitle>
                            <ConnectingTitle>The Connecting</ConnectingTitle>
                        </ASubtitle>
                    </AnimaWrapper>
                    { isEnglish ?
                        <P2>The rise of social networking has shown that virtualization is an important way to build connections in the future. Making virtual relationships more natural through more semantic means of interaction is the main innovation of this product. The Connecting is a wearable connectivity platform that enables a direct virtual relationship between two individuals in any location.</P2>
                        :
                        <CNP2>社交网络的兴起显示出虚拟化是未来建立联系的重要途径，怎样通过更语义化的交互手段让虚拟化关系更加自然是这一产品最主要的创新。The connecting是一个穿戴式的连接平台，使任何地点的两个个体之间建立直接的虚拟关系。</CNP2>
                    }
                </PlainTextWrapper>
            </WArtiWrapper>

            <WArtiWrapper style={{marginTop: '20vh'}}>
                <PlainTextWrapper>
                    <AnimaWrapper>
                        <LottiePhoneAnima anima={connectingAnima[0]} />
                        { isEnglish ?
                            <ASubtitle>
                                <ConnectingTitle>Character</ConnectingTitle>
                            </ASubtitle>
                            :
                            <ASubtitle>
                                <CNConnectingTitle>人格化</CNConnectingTitle>
                            </ASubtitle>
                        }
                    </AnimaWrapper>
                    { isEnglish ?
                        <P2>In the CONNECTING platform, users automatically create their own personalized personas. Through the information collected by the bracelet sensors, the virtual character with a unique personality would be created to interact. To protect the user's privacy, the virtual persona can only present three basic simulated states.</P2>
                        :
                        <CNP2>在connecting产品中，用户会自动的创建属于自己个人的个性化角色，虚拟化的2D角色是唯一的沟通桥梁，通过手环传感器的信息收集，建立独特人格化的虚拟交互对象。为了保护用户的隐私，虚拟人格只能呈现出三种基本的模拟状态。</CNP2>
                    }
                    <StateWrapper>
                        <LottieStateAnima animaData={statesExample.idle} heading={isEnglish ? animaState.idle.heading : '正常态'} />
                        <LottieStateAnima animaData={statesExample.active} heading={isEnglish ? animaState.active.heading : '激活态'} />
                        <LottieStateAnima animaData={statesExample.sleepy} heading={isEnglish ? animaState.sleepy.heading : '疲惫态'} />
                    </StateWrapper>
                </PlainTextWrapper>
            </WArtiWrapper>

            <WArtiWrapper style={{marginTop: '15vh'}}>
                <PlainTextWrapper>
                    <AnimaWrapper>
                        <LottiePhoneAnima anima={connectingAnima[1]} />
                        { isEnglish ?
                            <ASubtitle>
                                <ConnectingTitle>Intimate connection</ConnectingTitle>
                            </ASubtitle>
                            :
                            <ASubtitle>
                                <CNConnectingTitle>更直接的交互方式</CNConnectingTitle>
                            </ASubtitle>
                        }
                    </AnimaWrapper>
                    { isEnglish ?
                        <P2>The Connecting bracelet offers a unique direct interaction method. Touch the bracelet anywhere, anytime, and the close to skin haptic sensors will instantly simulate real touch to create a space-independent interaction experience.</P2>
                        :
                        <CNP2>Connecting手环提供了独一无二的直接交互方式，随时随地的触碰手环，贴近皮肤的触觉传感器会即时模拟真实触觉，建立无视空间的交互体验。</CNP2>
                    }
                    <ImgWrapper>
                        <Image alt='sketch for touch interaction' src='/connecting/touchSketch.png' width='470' height='353' objectFit='scale-down' />
                    </ImgWrapper>
                </PlainTextWrapper>
            </WArtiWrapper>

            <WArtiWrapper>
                <PlainTextWrapper>
                    <AnimaWrapper>
                        <LottiePhoneAnima anima={connectingAnima[2]} />
                        { isEnglish ?
                            <ASubtitle>
                                <ConnectingTitle>Measurable Kinship</ConnectingTitle>
                            </ASubtitle>
                            :
                            <ASubtitle>
                                <CNConnectingTitle>量化亲密关系</CNConnectingTitle>
                            </ASubtitle>
                        }
                    </AnimaWrapper>
                    { isEnglish ?
                        <P2>It quantifies unfathomable communication while ensuring privacy and provides at-a-glance relationship charts while optimizing kinship through big data calculations.</P2>
                        :
                        <CNP2>在保证隐私的同时，将不可琢磨的交流量化，提供一目了然的关系图表的同时，通过大数据的计算优化亲属关系。</CNP2>
                    }
                    <ImgWrapper>
                        <Image alt='sketch for relationship statistics' src='/connecting/catalogSketch.png' width='600' height='448' objectFit='scale-down' />
                    </ImgWrapper>
                </PlainTextWrapper>
            </WArtiWrapper>

            <WArtiWrapper>
                <PlainTextWrapper>
                    <SectionBreak>{isEnglish ? 'Comprehensive Process' : '设计与开发流程'}</SectionBreak>
                </PlainTextWrapper>
            </WArtiWrapper>

            <WArtiWrapper>
                { isEnglish ?
                    <PlainTextWrapper>
                        <ConnectingTitle style={{marginBottom: 'auto'}}>Conceptual Idea</ConnectingTitle>
                        <Caption>The utopian family form</Caption>
                        <P2 style={{marginTop: 'auto'}}>The decline of legitimate marriage institution is inevitable, in view of the ongoing social
                            shift, <Strong>does the modern family form still have a future? which alternative forms of
                                family and relationships are most compatible with the processes of social change and can
                                possibly replace the modern small family?</Strong></P2>
                        <P2 style={{marginTop: '20px'}}>The key prerequisite for replacing the traditional family model,
                            therefore, is whether children and adolescents can grow up psychological and physical
                            healthily without a family environment or in a extraordinary family environment (such as
                            single-parent family, stepfamily), and can the new form of social structure provide reliable
                            social support for the elderly who living alone or without kins.</P2>
                    </PlainTextWrapper>
                    :
                    <PlainTextWrapper>
                        <CNConnectingTitle style={{marginBottom: 'auto'}}>项目概念</CNConnectingTitle>
                        <Caption>理想的家庭模式</Caption>
                        <CNP2 style={{marginTop: 'auto'}}>当代的家庭制度的衰落不可避免，鉴于正在进行的社会转变，<Strong>现代家庭形式是否还有未来？哪些替代的家庭和关系形式最符合社会变革的进程，可能取代现代小家庭？</Strong></CNP2>
                        <CNP2 style={{marginTop: '20px'}}>取代传统家庭模式的关键前提是，儿童和青少年能否在没有家庭环境或在非同寻常的家庭环境（如单亲家庭、继父家庭）中身心健康地成长，以及新形式的社会结构能否为独居或无亲属的老人提供可靠的社会支持。</CNP2>
                    </PlainTextWrapper>
                }
            </WArtiWrapper>

            <WArtiWrapper>
                { isEnglish ?
                    <PlainTextWrapper>
                        <ConnectingTitle style={{marginBottom: 'auto'}}>Tangible Design</ConnectingTitle>
                        <Caption>The wearable virtual connection</Caption>
                        <P2 style={{marginTop: 'auto'}}>Improve the interaction logic of the product according to various design methods such as
                            persona and scenarios, and consider the technical requirements together with the details to
                            meet the project concept as much as possible within the framework of technology.</P2>
                    </PlainTextWrapper>
                    :
                    <PlainTextWrapper>
                        <CNConnectingTitle style={{marginBottom: 'auto'}}>可行的设计</CNConnectingTitle>
                        <Caption>可穿戴式的虚拟关系</Caption>
                        <CNP2 style={{marginTop: 'auto'}}>根据persona与scenario等设计方法完善产品的交互逻辑，并将技术要求与细节一道考虑，在技术的框架下尽可能的满足项目概念。</CNP2>
                    </PlainTextWrapper>
                }
                <PlainTextWrapper>
                    <IconComponent pdfType='pdf' background='white' plainText={isEnglish ? 'the scenarios study' : '情景模拟'} href='/pdfs/connecting_scenarios.pdf' />
                </PlainTextWrapper>
            </WArtiWrapper>

            <WArtiWrapper>
                { isEnglish ?
                    <PlainTextWrapper>
                        <ConnectingTitle style={{marginBottom: 'auto'}}>Technical Implementation</ConnectingTitle>
                        <Caption>Build the virtual character with a unique personality</Caption>
                        <P2 style={{marginTop: 'auto'}}>Using the latest SwiftUI framework and Spritkit framework, combined with motion design,
                            hundreds of character animations were created and graded according to their characteristics
                            in order to create virtual characters with unique personalities.</P2>
                    </PlainTextWrapper>
                    :
                    <PlainTextWrapper>
                        <CNConnectingTitle style={{marginBottom: 'auto'}}>技术重现</CNConnectingTitle>
                        <Caption>打造拥有独特个性的虚拟角色</Caption>
                        <CNP2 style={{marginTop: 'auto'}}>使用最新的<Strong>SwiftUI</Strong>框架与<Strong>Spritkit</Strong>框架，结合motion design，为打造拥有独特个性的虚拟角色，创造了上百个角色动画并为其根据特征分级。</CNP2>
                    </PlainTextWrapper>
                }
                <PlainTextWrapper>
                    <IconComponent pdfType='github' background='white' plainText={isEnglish ? 'Source code' : '源代码'} href='https://github.com/abuer008/Connecting.git' />
                </PlainTextWrapper>
            </WArtiWrapper>
        </div>
    )
}

const WArtiWrapper = styled(ArtiWrapper)`
  color: white;
`
const ASubtitle = styled.div`
  position: relative;
  width: 50%;
  min-width: 180px;
  //  font-size: 1.2em;
`

const AnimaWrapper = styled.div`
  position: relative;
  //height: 25vh;
  //right: 6vw;
  width: 85vw;
  margin: 1em 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

`

const StateWrapper = styled.div`
    display: flex;
  flex-direction: row;
`


const ConnectingTitle = styled(Subtitle)`
    font-weight: bold;
  font-size: 1.8em;
  margin: 0.4em 0;
  text-transform: capitalize;
`

const CNConnectingTitle = styled(ConnectingTitle)`
    font-family: Noto Sans SC;
`

const P2 = styled(P1)`
  margin-top: 80px;
    font-weight: lighter;
`

const Caption = styled(P1)`
    font-size: 1.4em;
  margin-bottom: 1em;
`

const CNP2 = styled(CNP1)`
  margin-top: 80px;
    font-weight: 300;
`

export const SectionBreak = styled.h3`
  border-bottom: 1px solid white;
  font-weight: 300;
`