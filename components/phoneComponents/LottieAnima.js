import Image from 'next/image'
import Lottie from 'react-lottie'
import styled from 'styled-components'

export const LottiePhoneAnima = ({anima, autoplay = true}) => {
    const options = {
        loop: true,
        autoplay: autoplay,
        animationData: anima.default,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    return (
        <WatchArea>
            <LottieWrapper>
                <Lottie
                    options={options}
                    height='auto'
                    width='70%'
                    isStopped={!autoplay}
                    direction={1}
                    speed={1}
                />
            </LottieWrapper>
            <WatchWrapper>
                <Image alt='apple watch frame' src='/connecting/appleWatchFrame.png' width='230' height='400'/>
            </WatchWrapper>
        </WatchArea>
    )
}


export const LottieStateAnima = ({animaData, heading}) => {
    const stateOptions = {
        loop: true,
        autoplay: true,
        animationData: animaData.default,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    return (
        <StateWrapper>
            <Lottie
                options={stateOptions}
                height='auto'
                width='100%'
                isStopped={false}
                direction={1}
                speed={1}
            />
            <P>{heading}</P>
        </StateWrapper>
    )
}


const LottieWrapper = styled.div`
  position: relative;
  //top: 1px;
  right: 0px;
  max-width: 230px;
  transform: translate(-13%, 0)
`

const StateWrapper = styled.div`
    display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 0;
`

const P = styled.p`
    margin: auto;
  position: absolute;
  bottom: 1.4em;
  font-size: 0.9em;
  font-weight: lighter;
`

const WatchArea = styled.div`
  //border: 1px dotted white;
  position: relative;
  width: 40%;
  height: auto;
  margin: auto;
`

const WatchWrapper = styled.div`
  position: absolute;
  top: 0;
  transform: translate(-10%, -24%)
`
