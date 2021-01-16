import Lottie from 'react-lottie'
import styled from 'styled-components'
// import * as AnimaData from '../public/revisionStartAnima.json';

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
        <>
            <Lottie options={options}
                    height={height}
                    width={width}
                    isStopped={isStopped}
                    direction={direction}
                    speed={speed}
            />
        </>
    )
}

const Wrapper = styled.div`
position: inherit;
`

export default StartAnima