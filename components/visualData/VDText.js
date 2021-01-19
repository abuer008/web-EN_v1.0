import styled from 'styled-components'

export const VDText = ({heading, plainText, isMainText = true}) => {
    return (
        <TextWrapper>
            <Heading style={{fontSize: isMainText ? '3vw' : '2vw', marginTop: isMainText ? 0 : '15px'}}>{heading}</Heading>
            <PlainText>{plainText}</PlainText>
        </TextWrapper>
    )
}

const TextWrapper = styled.div`
  //position: absolute;
  z-index: 1;
  max-width: 32vw;
  
  font-family: Roboto, sans-serif;
  font-style: normal;
`

const Heading = styled.h2`
  font-weight: 900;
  padding: 0;
  margin: auto;
`

const PlainText = styled.p`
  font-weight: 300;
  font-size: 1.2em;
  //margin: auto;
`