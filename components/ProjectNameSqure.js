import styled from 'styled-components'
import Link from 'next/link'

import { colorSqureArray } from "../data/MainPageData";

const NameSqure = ({name, color, destination, handleMouseEnter, handleMouseLeave}) => {

    return (
        <Wrapper>
            <Link href={'/interactive-projects' + destination}>
                <Title color={colorSqureArray[color]} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{name}</Title>
            </Link>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  height: 150px;
  width: 150px;
  //padding: 0 1.5em;
`


const Title = styled.h3`
position: relative;
//left: 0%;
//right: 0%;
//top: 0%;
//bottom: 2%;
height: 150px;
width: 150px;
//align-self: flex-end;

font-family: Roboto,sans-serif;
font-style: normal;
font-weight: 900;
font-size: 24px;
line-height: 28px;

display: flex;
align-items: flex-end;
text-align: right;
text-transform: uppercase;

color: #FFF;
background-color: ${props => props.color};


/* Inside Auto Layout */

flex: auto;
order: 0;
flex-grow: 1;
margin: auto 1em;
//padding: 1em;
  transition: transform .2s;
  

:hover {
cursor: pointer;
    transform: scale(1.3);
}
    `


export default NameSqure