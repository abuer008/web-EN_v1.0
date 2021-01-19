import {AnimaComponent} from "./AnimaComponent";
import styled from "styled-components";

export const ContentComponent = ({statusCode, characterAnima, backgroundColor, isError, mainText, desText}) => {
    return (
        <ContentWrapper>
            <ErrorWrapper>
                <Oops style={{top: isError ? '13vh' : '2vh'}}>{mainText}</Oops>
                <Description>{desText}</Description>
            </ErrorWrapper>
                <div>
                    <AnimaComponent statusCode={statusCode} backgroundColor={backgroundColor}
                                    animaData={characterAnima}/>
                </div>
        </ContentWrapper>
    )
}

const ContentWrapper = styled.div`
  position: absolute;
  margin: 20% 25%;
  
  display: flex;
  flex-direction: row;
`

const ErrorWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-flow: wrap;
  justify-content: flex-end;
  bottom: 10px;
  margin: 1em;
  
  width: 50%;
`

const Oops = styled.h1`
  z-index: 1;
  margin: 0;

  font-family: Roboto Condensed, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 9vw;
  text-align: right;
  line-height: 0.8em;
`

const Description = styled.p`
  position: relative;
  top: 10px;
  text-align: right;

  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 1.3em;
`
