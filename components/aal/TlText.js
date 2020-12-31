import styled from 'styled-components'

export const TlText = ({title, plainText}) => {
    return (<Wrapper>
        <H1>{title}</H1>
        <Plain>{plainText}</Plain>
    </Wrapper>)
}

const Wrapper = styled.div`
  position: absolute;
  width: 320px;
  top: 15px;
  left: 155px;
`

const H1 = styled.h1`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 1.5em;
  line-height: 1.2em;
  
  margin: 0;
`

const Plain = styled.p`
  font-family: Roboto Condensed, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1.4em;
  line-height: 1.2em;
  
  margin: 10px 0;
`