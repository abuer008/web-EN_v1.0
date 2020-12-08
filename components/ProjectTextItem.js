import styled from "styled-components";
import useMousePosition from "./useMousePosition";
import { useState, useEffect } from 'react';

const ProjectTextItem = ({ title, subTitle, explain, displayClass }) => {

    let [windowsWidth, setWindowsWidth] = useState(null)
    let [windowsHeight, setWindowsHeight] = useState(null)

    const {x, y} = useMousePosition()

    useEffect(() => {
        setWindowsWidth(window.innerWidth)
        setWindowsHeight(window.innerHeight)
    })
    const perX = (x / windowsWidth).toFixed(2)
    const perY = (y / windowsHeight).toFixed(2)

    const convertX = (perY < 0.6 && perY >= 0.15) ? -(perX - 0.5) * 20 : 0
    const convertY = ( perY < 0.6 && perY >= 0.15) ? (perY - 0.35) * 50 : 0

    return (
            <TextArea>
                <MainTitle degX={convertY} degY={convertX} className={displayClass} style={
                    title === "The Attitude towards Interactive Design." ?
                        {fontSize: "7.5rem",
                        lineHeight: "100px"}
                        :
                        {fontSize: "4.5rem",
                        lineHeight: "70px"}
                }>{title}</MainTitle>
                <MainSubTitle>{subTitle}</MainSubTitle>
                <MainText>{explain}</MainText>
            </TextArea>
    )
}


const TextArea = styled.div`
display: flex;
//height: 8vh;
width: 850px;
flex-flow: column nowrap;
padding: 0;
justify-content: space-around;
position: absolute;
left: 25%;
top: 8%;
z-index: 0;
transition: opacity 1s ease;

.fadeOut {
opacity: 1;
//font-size: 7.5rem;
animation: fadeOut 1s ease;;

@keyframes fadeOut {
  0% {opacity: 1;}
  100% {opacity: 0;}
}
}

.fadeIn {
//font-size: 4.5rem;
//line-height: 70px;
animation: fadeIn 1s ease;

@keyframes fadeIn {
  0% {opacity: 0;
  filter: blur(3px)}
  100% {opacity: 1;
  filter: blur(0)}
}
}
`

const MainTitle = styled.h1.attrs(props => ({
    style: {
        transform: `rotateX(${props.degX}deg) rotateY(${props.degY}deg)`,
    }
}))`
  z-index: 300;
  width: 100%;
  margin: 0;
  padding-top: 10%;
  
  font-family: Roboto,sans-serif;
font-weight: 900;
//font-size: 7rem;
//line-height: 117px;
text-transform: uppercase;



transition: text-shadow .5s;

:hover {
transform: scale(1.1);
  text-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

`

const MainSubTitle = styled(MainTitle) `
font-size: 2rem;
font-weight: lighter;
padding: 0;
margin: 0;
`

const MainText = styled.p`
z-index: 1;
  //display: block;
  //position: relative;
  //top: 1em;
  width: 100%;
  margin: 2rem 0;
  
  font-family: Roboto,sans-serif;
font-style: normal;
font-weight: normal;
font-size: 30px;
line-height: 35px;

.fadeOut {
opacity: 0;
}

@media all and (max-height: 800px) {
display: none;
}
`

export default ProjectTextItem