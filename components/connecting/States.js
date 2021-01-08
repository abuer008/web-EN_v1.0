import styled from 'styled-components'
import StartAnima from "../StartAnima";

export const States = ({animaData, isStopped, heading, plainText}) => {
    return (
        <Wrapper>
            <StartAnima
                animaData={animaData}
                isStopped={isStopped}
                direction={1}
                speed={1}
                width={180}
                height='auto'
                looping={true}
            />
            <StateWrapper>
                <H4>{heading}</H4>
                <P4>{plainText}</P4>
            </StateWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`

const StateWrapper = styled.div`
    font-family: Roboto, sans-serif;
    font-style: normal;
    text-align: left;
  
    position: relative;
    left: -1.2em;
  
    padding: 6em 0;
    width: 17vw;
  
    color: white;
`

const H4 = styled.h4`
    font-weight: 900;
    font-size: 1.8em;
    margin: 0;
`

const P4 = styled.p`
    font-weight: normal;
    font-size: 1em;
    margin: 0;
`