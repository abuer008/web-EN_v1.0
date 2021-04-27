import styled from 'styled-components'
import Image from 'next/image'

export const Content = ({contentData}) => {
    return (
        <Wrapper>
            <TextWrapper>
                <H2>{contentData.title}</H2>
                <P2>{contentData.text}</P2>
            </TextWrapper>
            <Area>
                <Icon style={{backgroundColor: contentData.backgroundColor, borderRadius: '1em', boxShadow: `0px 5px 15px ${contentData.shadowColor}`}}>
                    <Image src={contentData.imgSrc} width='164' height='80' objectFit='cover' />
                    <H3>{contentData.cardName}</H3>
                </Icon>
            </Area>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  padding: 1.2em 0;
`

const TextWrapper = styled.div`
    position: relative;
`

const Area = styled.div`
  position: relative;
  width: 164px;
  height: 80px;
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

const H3 = styled.h3`
    position: absolute;
  margin: auto 1em;
  bottom: 0.3em;
  color: white;
  width: 60%;
`