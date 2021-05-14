import styled from 'styled-components'
import Image from 'next/image'

export const ToolsetItem = ({item}) => {
    return (
        <Wrapper>
            <ImgWrapper>
                <Image alt={`${item.title} logo image`} src={item.logoImg} width={item.width} height={item.height} objectFit='cover' />
            </ImgWrapper>
            <Text>{item.title}</Text>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 120px;
  height: 80px;
  padding: 12px;
`

const ImgWrapper = styled.div`
  height: 60px;
  
`

const Text = styled.p`
    font-size: 0.8em;
  text-align: center;
  font-weight: bold;
`