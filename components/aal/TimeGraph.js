import styled from 'styled-components'
import { BasicEl } from "./BasicEl";

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

const Wrapper = styled.div`
  margin: 10em 15em;
`