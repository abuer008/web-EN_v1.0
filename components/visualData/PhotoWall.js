import Image from 'next/image'
import styled from 'styled-components'

export const PhotoWall = () => {
    return (<ImageWrapper>
            <Image alt='the entire photo of interactive device for data handing' src='/data-visualisation/inputGlobe.png' width='410' height='547' />
            <div>
        <Image alt='the details of the interactive device' src='/data-visualisation/inputGlobeDetail.png' width='254' height='339'  />
            </div>
    </ImageWrapper>)
}

const ImageWrapper = styled.div`
  position: relative;
  width: 40vw;
  //height: 100vh;
  top: 20vh;
  left: 10vw;
  
  display: flex;
  flex-direction: row;
  
`