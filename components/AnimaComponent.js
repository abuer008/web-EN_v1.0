import StartAnima from "./StartAnima";
import styled from 'styled-components'

export const AnimaComponent = ({statusCode, backgroundColor, animaData}) => {
    return (
        <Wrapper style={{backgroundColor: backgroundColor}}>
            <CodeNumber>
                {statusCode}
            </CodeNumber>
            <AnimaWrapper>
                <StartAnima
                    animaData={animaData}
                    direction={1}
                    isStopped={false}
                    speed={1}
                    width={310}
                    height='auto'
                    looping={true}
                />
            </AnimaWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: absolute;
    width: 237px;
    height: 270px;
  //margin: 0 -180px;
  
    border-radius: 30px;
  
    transition: transform 0.3s ease;
  
    :hover {
      transform: scale(1.1)
    }
`

const CodeNumber = styled.h2`
    position: absolute;
    left: 42%;
    top: 10%;
  
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 1.4em;
  
    color: white;
`

const AnimaWrapper = styled.div`
    position: absolute;
    bottom: 30px;
    left: -32px;
`