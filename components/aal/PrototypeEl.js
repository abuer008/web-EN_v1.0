import styled from 'styled-components'
import Image from 'next/image'
import {useState} from 'react'

export const PrototypeEl = ({imgSource, index, text}) => {
    const [show, setShow] = useState(false)

    const handleMouseEnter = () => {
        setShow(true)
    }

    const handleMouseLeave = () => {
        setShow(false)
    }
    return (
        <Wrapper>
            <ImgWrapper style={{top: index * 100, left: index * 100, width: `${20 + index * 0.9}vw`}}
                        onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <Image className='roundImage' src={imgSource} width='1366' height='1024' layout='intrinsic'/>
            </ImgWrapper>
            {show && <Text>{text}</Text>}
        </Wrapper>
    )
}

const Wrapper = styled.div`
  position: absolute;
  left: 10%;
  top: 20%;

`

const Text = styled.h3`
    position: relative;
  top: 50vh;
`

const ImgWrapper = styled.div`
  position: absolute;
  width: 25vw;
  opacity: 0.9;

  box-shadow: 0 10px 20px 20px rgba(0, 0, 0, 0.07);
  border-radius: 5%;
  //backdrop-filter: blur(20em);
  transition: 0.5s;

  :hover {
    transform: translate(0, -25%) scale(1.15);
    opacity: 1;
    box-shadow: 0 0px 20px 30px rgba(0, 0, 0, 0.04);
  }
`