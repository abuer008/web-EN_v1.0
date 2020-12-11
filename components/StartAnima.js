import Lottie from 'react-lottie'
import styled from 'styled-components'
// import * as AnimaData from '../public/revisionStartAnima.json';

const StartAnima = ({animaData, direction, isStopped, speed }) => {
    const options = {
        loop: false,
        autoplay: false,
        animationData: animaData.default,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    return (
        <>
            <Lottie options={options}
                    height={870}
                    width={870}
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