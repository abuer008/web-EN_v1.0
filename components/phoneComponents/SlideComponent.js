import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

const SlideComponent = ({dataSource}) => {
    return (
        <Wrapper>
            <TextWrapper style={{
                color: dataSource.isBlack ? 'black' : 'white',
                paddingLeft: dataSource?.padding,
                marginTop: dataSource?.margin,
                textAlign: dataSource?.textAlign,
            }}>
                <H1>{dataSource.title}</H1>
                <P>{dataSource.text}</P>
            </TextWrapper>
            <ImgWrapper>
                <Image src={dataSource.imgSrc} width='950' height='1688' />
            </ImgWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  //position: absolute;
  width: 100vw;
  height: 95vh;
  top: 0;
`

const ImgWrapper = styled.div`
    //position: absolute;
  width: 100vw;
`

const TextWrapper = styled.div`
  position: absolute;
  width: 45vw;
  z-index: 1;
`

const H1 = styled.h1`
  margin: auto;
  font-size: 9vw;
  padding: 0;
`

const P = styled.p`
    margin: 5px 0;
  font-family: Roboto Condensed;
  font-size: 5vw;
  padding: 0;
`

export default SlideComponent