import styled from 'styled-components'
import Layout from '../Layout'
import Image from 'next/image'

export const PhoneRevision = () => {
    return (
        <>
            <TitleWrapper>
                <ImgWrapper>
                    <Image src='/revision/revisionPhoneVersion.png' width='950' height='1488' objectFit='cover'/>
                </ImgWrapper>
                <TextWrapper>
                    <MainTitle>
                        <Image src='/revision/revision_stylingTitle.svg' width='285' height='69'/>
                    </MainTitle>
                    <P1>Perceptual Expanding</P1>
                </TextWrapper>
            </TitleWrapper>

            <ArtiWrapper>
                <PlainImgWrapper>
                    <Image src='/revision/artificialSynasthesia.png' width='360' height='203' objectFit='cover'/>
                </PlainImgWrapper>
                <PlainTextWrapper>
                    <Subtitle>Artifical Synaesthesia</Subtitle>
                    <P>As French philosopher Roland Barthes said, there
                        is no natural connection between signifier and
                        signified, the existence of an object in the objective
                        world is perceived by our sensory organs, such as
                        shapes, colours and temperature of objects are just
                        our subjective perceptual language in the brain.</P>
                </PlainTextWrapper>
            </ArtiWrapper>
        </>
    )
}

const Wrapper = styled.div`
  background-color: black;
`

const TitleWrapper = styled.div``

const ImgWrapper = styled.div`
    //height: 60vh;
  width: 100vw;
`

const PlainImgWrapper = styled.div`
  width: 100vw;
`

const TextWrapper = styled.div`
    position: absolute;
  top: 55vh;
  left: 2.4em;
`

const PlainTextWrapper = styled.div`
    color: white;
  margin: 0 auto;
  padding: 0 2.4em;
`

const ArtiWrapper = styled.div`
    position: relative;
  padding: 4em 0;
`

// -----------------------------

const MainTitle = styled.div`
  width: 50%;
`

const P1 = styled.p`
  color: white;
    margin: auto;
`

const Subtitle = styled.h2``

const P = styled.p``