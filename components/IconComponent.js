import styled from 'styled-components'
import Image from 'next/image'
import {useState, useEffect} from 'react'

export const IconComponent = ({pdfType, background, plainText}) => {
    const pdf = {
        link: '/about/pdfLogo.svg',
        left: 6,
        top: 20,
        height: 40
    }

    const github = {
        link: '/about/githubLogo.png',
        left: 10,
        top: 18,
        height: 46
    }

    const [imgSrc, setImg] = useState(pdf)

    useEffect(() => {
        if (pdfType) {
            setImg(pdf)
        } else {
            setImg(github)
        }
    }, [])

    return (
        <Wrapper>
            <Icon>
                <BorderWrapper>
                    <Image src={background === 'white' ? '/about/folderLogo.svg' : '/about/folderWhiteLogo.svg'}
                           width='67' height='73'/>
                </BorderWrapper>
                <IconWrapper style={{left: imgSrc.left, top: imgSrc.top}}>
                    <Image src={imgSrc.link} width='46' height={imgSrc.height}/>
                </IconWrapper>
            </Icon>
            <Text>{plainText}</Text>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  position: relative;
  width: 120px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  transition: transform 0.3s;

  :hover {
    transform: scale(1.05)
  }
`

const Icon = styled.div`
    position: relative;
  width: 67px;
  height: 73px;
`

const IconWrapper = styled.div`
  position: relative;
  width: 46px;
  top: 18px;
`

const BorderWrapper = styled.div`
  position: absolute;
`

const Text = styled.h4`
    text-align: center;
  margin-top: 0.5em;
  padding: 0;
  position: relative;
  width: 100%;
  
  font-family: Roboto Condensed, sans-serif;
  font-style: normal;
  font-weight: 300;
`