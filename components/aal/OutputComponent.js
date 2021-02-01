import styled from 'styled-components'
import {BasicEl} from "./BasicEl";
import { TlText } from "./TlText";

export const OutputComponent = ({marginX, marginY, number, numberText, TlHeading, TlPlain}) => {
    return (
        <Wrapper>
            <ConcernWrapper>
                <BasicEl style={{width: '120px', height: '120px'}} />
                <TextWrapper style={{margin: `${marginX} ${marginY}`}}>
                    <H1Number>{number}</H1Number>
                    <H1Small>{numberText}</H1Small>
                </TextWrapper>
            </ConcernWrapper>
            <UITexts>
                <TlText title={TlHeading} plainText={TlPlain} />
            </UITexts>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`

const ConcernWrapper = styled.div`
`

const TextWrapper = styled.div`
  position: absolute;

  font-family: Roboto, sans-serif;
  font-style: normal;
  text-align: center;
`

const H1Number = styled.h1`
  font-weight: 900;
  font-size: 4em;
  margin: 0;
`

const H1Small = styled.p`
  font-weight: bold;
  font-size: 1.5em;
  margin: 0;

  line-height: .5em;
`

const UITexts = styled.div`
    position: absolute;
`