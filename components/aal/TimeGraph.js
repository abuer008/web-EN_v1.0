import styled from 'styled-components'
import { BasicEl } from "./BasicEl";
import { forwardRef } from 'react'

export const TimeGraph = () => {
    const elStyle = {
        width: '480px',
        height: '220px'
    }
    return (
        <Wrapper>
            <BasicEl style={elStyle} />
        </Wrapper>
    )
}

// const elStyle = {
//     width: '480px',
//     height: '220px'
// }
//
// export const TimeGraph = forwardRef(({children}, ref) => (
//     <Wrapper ref={ref}>
//         <BasicEl style={elStyle} />
//     </Wrapper>
// ))

const Wrapper = styled.div`
  margin: 10em 15em;
`