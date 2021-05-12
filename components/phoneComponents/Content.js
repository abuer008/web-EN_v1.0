import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import {Reveal, Tween} from 'react-gsap'

const Animation = ({children}) => (
    <Tween
        from={{opacity: 0, y: 20}}
        duration={1}
        stagger={0.3}
    >
        {children}
    </Tween>
)

export const Content = ({contentData}) => {
    const {language} = useSelector(state => state.language)
    const [isEnglish, setIsEnglish] = useState(true)

    useEffect(() => {
        if (language === 'CN') {
            setIsEnglish(false)
        } else {
            setIsEnglish(true)
        }

    })

    return (
        <Wrapper>
            <Reveal repeat>
                {
                    isEnglish ?
                        <TextWrapper>
                            <H2>{contentData.title}</H2>
                            <P2>{contentData.text}</P2>
                        </TextWrapper>
                        :
                        <CNTextWrapper>
                            <H2>{contentData.CNtitle}</H2>
                            <P2>{contentData.CNtext}</P2>
                        </CNTextWrapper>
                }
                <Link href={contentData.link}>
                    <Area>
                        <Animation>
                            <Icon style={{
                                backgroundColor: contentData.backgroundColor,
                                borderRadius: '1em',
                                boxShadow: `0px 5px 15px ${contentData.shadowColor}`
                            }}>
                                <Image src={contentData.imgSrc} width='164' height='80' objectFit='cover'/>
                                <H3>{isEnglish ? contentData.cardName : contentData.CNcardName}</H3>
                            </Icon>
                        </Animation>
                    </Area>
                </Link>
            </Reveal>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  padding: 1.2em 0;
`

const TextWrapper = styled.div`
  position: relative;
`
const CNTextWrapper = styled(TextWrapper)`
  font-family: Noto Sans SC;
  font-style: normal;
  font-weight: bold;
`

const Area = styled.div`
  position: relative;
  width: 164px;
  height: 80px;
  transition: 0.3s;

  :hover {
    transform: scale(1.1)
  }
;
`

const H2 = styled.h2`
  margin: auto;
`

const P2 = styled.p`
  margin: 1em 0;
`

const Icon = styled.div`
  margin: 1.7em 0;
`

const H3 = styled.h4`
  position: absolute;
  margin: 0.5em;
  bottom: 0.3em;
  color: white;
  width: 70%;
  text-align: left;
  font-size: 1.2em;
`