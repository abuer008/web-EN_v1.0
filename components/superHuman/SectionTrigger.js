import styled from 'styled-components'
import {forwardRef} from 'react'

export const SectionTrigger = forwardRef(({children}, ref) => (
    <SectionWrapper ref={ref}>
        {children}
    </SectionWrapper>
))

const SectionWrapper = styled.div`
    position: relative;
  width: 100vw;
  height: 105vh;
  margin: -8px;
  padding-right: 17px;
  
  overflow: hidden;
`