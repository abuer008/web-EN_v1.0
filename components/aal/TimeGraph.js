import styled from 'styled-components'
import Image from 'next/image'
import { BasicEl } from "./BasicEl";

export const TimeGraph = ({isMain}) => {
    const elStyle = {
        width: '480px',
        height: '220px'
    }

    return (
        <Wrapper>
            <ImgWrapper>
                <Image src={isMain ? '/aal/mainGraphic.svg' : '/aal/timeGraphic.svg'} width='418' height='178' />
            </ImgWrapper>
            <BasicEl style={elStyle} />
        </Wrapper>
    )
}

const Wrapper = styled.div`
  margin: 15vh 10vw;
`

const ImgWrapper = styled.div`
  position: absolute;
  z-index: 1;
  margin: 32px 30px;
`