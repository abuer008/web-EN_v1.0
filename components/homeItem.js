import styled from 'styled-components'
import {Tween} from 'react-gsap'

export const HomeItem = ({index, heading, plain, playState, movement}) => {
    return (
        <Wrapper>
            <Tween
                from={{x: movement, opacity: '0'}}
                duration={0.2}
                playState={playState}
            >
            <Number>{index}</Number>
            <Text>
                <Heading>{heading}</Heading>
                <Plain>{plain}</Plain>
            </Text>
            </Tween>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
  flex-direction: row;
  //color: white;
  
`

const Number = styled.h3`
    font-size: 3.7rem;
  margin: 0 1.4rem;
`

const Text = styled.div`
    display: flex;
  flex-direction: column;
  width: 300px;
`

const Heading = styled.h1`
    margin: auto 0;
  width: 85%;
`

const Plain = styled.h5`
    margin: 0.3rem 0;
`