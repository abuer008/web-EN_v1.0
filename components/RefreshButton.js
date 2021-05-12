import Image from 'next/image'
import { useState } from 'react'
import styled from 'styled-components'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import {Button} from 'react-bootstrap'

gsap.registerPlugin(ScrollToPlugin)

export const RefreshButton = () => {
    const [visible, setVisible] = useState(false)

    const backToTop = () => {
        gsap.to(window, {duration: 2, scrollTo: 0})
    }

    return (
        <Wrapper onClick={backToTop} onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
            {visible ? <Renew>Back to top</Renew> : <Image src='/about/arrowUp.svg' width='55' height='31' />}
        </Wrapper>
    )
}

const Wrapper = styled.div`
  //
  //display: flex;
  //flex-direction: row;

  width: 5vh;
  height: 5vh;
  background-color: rgba(1, 1, 1, 0.3);

  padding: 15px 22px;
  padding-top: 30px;
  border-radius: 25px;
  transition: 0.3s;

  :hover {
    transform: scale(1.05);
    width: 8vh;
    cursor: pointer;
  }
`

const Renew = styled.h5`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 1.2em;

  color: white;
  position: relative;
  width: 100%;
  top: -70%;
  text-align: center;
`