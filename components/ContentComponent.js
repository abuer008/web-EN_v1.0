import {AnimaComponent} from "./AnimaComponent";
import styled from "styled-components";

export const ContentComponent = ({statusCode, characterAnima, backgroundColor, isError, mainText, desText}) => {
    return (
        <ContentWrapper>
            <ErrorWrapper>
                <Oops style={{top: isError ? '13vh' : '2vh'}}>{mainText}</Oops>
                <AnimaComponent statusCode={statusCode} backgroundColor={backgroundColor} animaData={characterAnima} />
            </ErrorWrapper>
            <Description>{desText}</Description>
        </ContentWrapper>
    )
}

const ContentWrapper = styled.div`
    position: absolute;
    top: 20vh;
    left: 40vw;
`

const ErrorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    
    position: absolute;
    left: 24vw;
    top: 10vh;
`

const Oops = styled.h1`
    position: absolute;
    left: -50vw;
    z-index: 1;
    width: 40vw;
    margin: auto;
  
    font-family: Roboto Condensed, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 9em;
    text-align: right;
    line-height: 0.8em;
`

const Description = styled.p`
    position: absolute;
    top: 38vh;
    margin: auto -2vw;
    text-align: right;
    width: 25vw;
    height: auto;
  
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 1em;
`
