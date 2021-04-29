import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import {useState, useEffect} from 'react'

export const IconComponent = ({pdfType, background, plainText, href}) => {
    const pdf = {
        link: background === 'white' ? '/revision/PaperLogo.svg' : '/revision/PaperLogoBlack.svg',
        width: 34,
        height: 40
    }

    const github = {
        link: background === 'white' ? '/about/githubWhite.png' : '/about/githubLogo.png',
        width: 40,
        height: 40
    }

    const figma = {
        link: '/about/figmaLogo.svg',
        width: 26,
        height: 40
    }

    const [imgSrc, setImg] = useState(pdf)

    useEffect(() => {
        switch (pdfType) {
            case 'pdf':
                setImg(pdf);
                return;
            case 'github':
                setImg(github);
                return;
            default:
                setImg(figma);
                return;
        }
    }, [])

    return (
        <Link href={href}>
        <a style={{textDecoration: 'none', color: background === 'white' ? 'black' : 'white'}} target="_blank">
        <Wrapper>
            <Icon>
                <IconWrapper>
                    <Image src={imgSrc.link} width={imgSrc.width} height={imgSrc.height}/>
                </IconWrapper>
            </Icon>
            <Text style={{color: background}}>{plainText}</Text>
        </Wrapper>
        </a>
        </Link>
    )
}

const FrontRect = styled.div`
  position: absolute;
  width: 70px;
  height: 70px;
  border: 1px solid #fff;
    border-radius: 20%;
`

const Wrapper = styled.div`
  position: relative;
  width: 240px;
  height: 10%;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  
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
  padding: 0;
  margin: 1em;
  position: relative;
  width: 100%;
  
  font-family: Roboto Condensed, sans-serif;
  font-style: normal;
  font-weight: 300;
`