import styled from 'styled-components'
import {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import StartAnima from "./StartAnima";

export const ContentList = ({data, reverse = false, title, plain}) => {
    return (
        <ContentListWrapper>
            <SectionBreak>
                <ListTitle>{title}</ListTitle>
                <Placeholder/>
            </SectionBreak>

            {
                data.map((item, key) => {
                    return <ContentWrapper key={key} reverse={reverse}>
                        <TextContent textData={item.textData}/>
                        <BgContent img={item.img}/>
                    </ContentWrapper>
                })
            }
        </ContentListWrapper>
    )
}

const TextContent = ({textData}) => {
    return (
        <TextWrapper>
            <H1>{textData.title}</H1>
            <P>{textData.text}</P>
            {
                textData.btnCr &&
                <div>
                    <Btn btnTxt={textData.cardName} btnBgColor={textData.btnCr} btnShadow={textData.btnShadow}
                         url={textData.link}/>
                </div>
            }
        </TextWrapper>
    )
}

const BgContent = (
{
    img
}
) =>
{
    return (
        <ImgWrapper>
            <Image src={img.src} alt={img.alt} width='580' height='380'/>
        </ImgWrapper>
    )
}

const Btn = (
{
    btnTxt, btnBgColor, btnShadow, url
}
) => (
<Link href={url}>
    <BtnWrapper bg={btnBgColor} shadow={btnShadow}>
        {btnTxt}
    </BtnWrapper>
</Link>
)

const ContentListWrapper = styled.div`
display: flex;
flex-direction: column;
`

const SectionBreak = styled.div`
display: flex;
width: 60%;
flex-direction: row;
justify-content: space-between;
margin: auto;
padding-top: 5%;
`

const ContentWrapper = styled.div`
display: flex;
flex-direction: ${
    props => props.reverse ? "row-reverse" : "row"
}
;
justify-content: space-evenly;
align-items: center;
padding: 0 20%;

height: 60vh;
`

const TextWrapper = styled.div`
display: flex;
flex-direction: column;

min-width: 350px;
width: 20%;
`

const ImgWrapper = styled.div``

const BtnWrapper = styled.button`
background-color: ${
    props => props.bg
}
;
color: white;
width: 70%;
padding: 15px 18px;
border-radius: 30px;
transition: 0.3s;
border-style: none;

:hover
{
    cursor: pointer;
    transform: scale(1.05);
    box-shadow: 0px 4px 10px ${props => props.shadow};
}
`

const ListTitle = styled.h3`
width: 50%;
border-bottom: 1px solid grey;
color: grey;
font-weight: normal;
font-size: 1.2em;

`

const H1 = styled.h1`
margin: auto 0;
`

const P = styled.p`

`

const Placeholder = styled.div`
`

const AnimaSection = styled.div`
`
