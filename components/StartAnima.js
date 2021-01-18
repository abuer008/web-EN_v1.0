import Lottie from 'react-lottie'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import {projectsArray} from "../data/MainPageData";

const StartAnima = ({animaData, direction, isStopped, speed, width = 870, height = 870, looping = false }) => {

    const options = {
        loop: looping,
        autoplay: !isStopped,
        animationData: animaData.default,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    return (
        <Wrapper>
            <Lottie options={options}
                    height={height}
                    width={width}
                    isStopped={isStopped}
                    direction={direction}
                    speed={speed}
            />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: relative;
`

export default StartAnima