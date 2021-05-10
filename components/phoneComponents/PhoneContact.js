import styled from 'styled-components'
import Image from 'next/image'

export const PhoneContact = () => (
    <>
        <ImgWrapper>
            <Image src='/contact/QRcode.png' height='400' width='400' objectFit='cover' />
        </ImgWrapper>
    </>
)


const ImgWrapper = styled.div`
    max-width: 200px;
  width: 50%;
  height: 50vh;
  margin: 0 auto;
  
  position: relative;
  top: 20vh;
`
