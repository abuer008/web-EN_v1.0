import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import { useSelector } from 'react-redux'

const SlideComponent = ({dataSource}) => {
  const {language} = useSelector(state => state.language)
    return (
        <Wrapper>
            <Link href={dataSource.link}>
                <div>
            <TextWrapper style={{
                color: dataSource.isBlack ? 'black' : 'white',
                paddingLeft: dataSource?.padding,
                marginTop: dataSource?.margin,
                textAlign: dataSource?.textAlign,
            }}>
              {language === 'CN' ?
              <div>
                <CNH1>{dataSource.CNtitle}</CNH1>
                <CNP>{dataSource.CNtext}</CNP>
                </div>
                :
                <div>
                  <H1>{dataSource.title}</H1>
                  <P>{dataSource.text}</P>
                </div>
              }
            </TextWrapper>
            <ImgWrapper>
                <Image src={dataSource.imgSrc} width='950' height='1488' objectFit='cover' />
            </ImgWrapper>
                </div>
            </Link>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  //position: absolute;
  width: 100vw;
  height: 85vh;
  top: 0;
  
`

const ImgWrapper = styled.div`
    //position: absolute;
  width: 100vw;
`

const TextWrapper = styled.div`
  position: absolute;
  width: 50vw;
  z-index: 1;
`

const H1 = styled.h1`
  margin: auto;
  font-size: 9vw;
  padding: 0;
`

const CNH1 = styled(H1)`
  font-family: Noto Sans SC;
  font-style: normal;
  font-weight: bold;
  font-size: 10vw;
`

const P = styled.p`
    margin: 5px 0;
  font-family: Roboto Condensed;
  font-size: 5vw;
  padding: 0;
`

const CNP = styled(P)`
  font-family: Noto Sans SC;
  font-style: normal;
  font-weight: bolder;
`

export default SlideComponent