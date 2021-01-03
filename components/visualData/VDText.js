import styled from 'styled-components'

export const VDText = ({heading, plainText, isMainText = true}) => {
    return (
        <TextWrapper>
            <Heading style={{fontSize: isMainText ? '3em' : '2em', marginTop: isMainText ? 0 : '20px'}}>{heading}</Heading>
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
`

const PlainText = styled.p`
  font-weight: 300;
  font-size: 1.2em;
`