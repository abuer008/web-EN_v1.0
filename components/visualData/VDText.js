import styled from 'styled-components'

export const VDText = ({heading, plainText}) => {
    return (
        <TextWrapper>
            <Heading>{heading}</Heading>
            <PlainText>{plainText}</PlainText>
        </TextWrapper>
    )
}

const TextWrapper = styled.div`
  //position: absolute;
  z-index: 1;
  max-width: 30vw;
  
  font-family: Roboto, sans-serif;
  font-style: normal;
`

const Heading = styled.h2`
  font-weight: 900;
  font-size: 2em;
`

const PlainText = styled.p`
  font-weight: 300;
  font-size: 1.2em;
`