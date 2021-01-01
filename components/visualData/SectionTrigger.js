import styled from 'styled-components'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Tween } from 'react-gsap'
import {forwardRef} from 'react'

export const SectionTrigger = forwardRef(({children}, ref) => (
    <SectionWrapper ref={ref}>
        {children}
    </SectionWrapper>
))

const SectionWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  margin: -8px;
  background-color: white;
`