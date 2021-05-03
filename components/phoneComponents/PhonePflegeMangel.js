import styled from 'styled-components'
import Image from 'next/image'
import { TitleWrapper, ImgWrapper, TextWrapper, ArtiWrapper, PlainTextWrapper, MainTitle, Subtitle, P1, P, Strong } from "./PhoneRevision";
import { SectionBreak } from "./PhoneConnecting";
import { H1 } from './PhoneVisualData'

export const PhonePflegeMangel = () => {
    return (
        <>
           <PflegeTitle>
               <TextWrapper style={{top: '50%'}}>
                   <MainTitle>
                       <H1>#Pflegemangel</H1>
                   </MainTitle>
                   <P1>Case study of care services</P1>
               </TextWrapper>
           </PflegeTitle>

            <WArtiWrapper>
                <PlainTextWrapper>
            <SectionBreak>Research</SectionBreak>
                </PlainTextWrapper>
            </WArtiWrapper>

            <WArtiWrapper>
                <PlainTextWrapper>
                    <PSub>Interviewing in nursing home</PSub>
                    <P>At the beginning of the Ambient Assisted Living project, we have arranged to visit the municipal hospital in Kiel, seeing the actual conditions of elderly care services personally, and interviewing the nurses about critical opinions.</P>
                </PlainTextWrapper>
            </WArtiWrapper>

            <WArtiWrapper>
                <PlainTextWrapper>
                    <PSub>The research of ageing population in Europe</PSub>
                    <P>Europe has one of the highest shares of elderly people in the world. In 2016, already 19% of the European population was 65 years and over. Looking at the prognoses, this share will increase to 29% by 2070; meaning that more than 1 in 4 people in Europe will be 65 years or over. As people grow older, it is expected that there will be more people with age-related chronic diseases and in need of long-term care.</P>
                </PlainTextWrapper>
                <ImgWrapper>
                    <Image alt='the trends of population growing' src='/pflegemangel/diagrams-1 1.png' width='720' height='416' />
                </ImgWrapper>
                <PlainTextWrapper>
                    <PSub>The crisis of elderly care services</PSub>
                </PlainTextWrapper>
                <ImgWrapper>
                    <Image alt='the research of care needs quotes' src='/pflegemangel/diagrams-2 1.png' width='720' height='418' />
                </ImgWrapper>
                <PlainTextWrapper>
                    <PSub>The definition of target audience</PSub>
                </PlainTextWrapper>
                <ImgWrapper>
                    <Image alt='the analysis of care needed audience' src='/pflegemangel/diagrams-3 1.png' width='720' height='450' />
                </ImgWrapper>
            </WArtiWrapper>

            <WArtiWrapper>
                <PlainTextWrapper>
                    <SectionBreak>Customer journey</SectionBreak>
                </PlainTextWrapper>
            </WArtiWrapper>

            <WArtiWrapper>
                <ImgWrapper>
                    <Image alt='customer journey requests view' src='/pflegemangel/research1.png' width='720' height='404' />
                </ImgWrapper>
                <ImgWrapper>
                    <Image alt='customer journey received view' src='/pflegemangel/research2.png' width='720' height='404' />
                </ImgWrapper>
                <ImgWrapper>
                    <Image alt='customer journey active helping' src='/pflegemangel/research3.png' width='720' height='404' />
                </ImgWrapper>
                <ImgWrapper>
                    <Image alt='customer journey medications' src='/pflegemangel/research4.png' width='720' height='404' />
                </ImgWrapper>
            </WArtiWrapper>

            <WArtiWrapper>
                <PlainTextWrapper>
                    <SectionBreak>Systematic solution</SectionBreak>
                </PlainTextWrapper>
            </WArtiWrapper>

            <WArtiWrapper>
                <ImgWrapper>
                    <Image alt='general solution map' src='/pflegemangel/solution1.png' width='720' height='404' />
                </ImgWrapper>
                <ImgWrapper>
                    <Image alt='how data been collected' src='/pflegemangel/solution2.png' width='720' height='404' />
                </ImgWrapper>
                <ImgWrapper>
                    <Image alt='how data been manipulated' src='/pflegemangel/solution4.png' width='720' height='404' />
                </ImgWrapper>
                <ImgWrapper>
                    <Image alt='the compact product plan' src='/pflegemangel/solution5.png' width='720' height='404' />
                </ImgWrapper>
                <ImgWrapper>
                    <Image alt='general proposals' src='/pflegemangel/proposal.png' width='720' height='404' />
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