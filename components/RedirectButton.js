import styled from 'styled-components'
import Image from 'next/image'

export const RedirectButton = ({textColor, nextProject}) => {

    return (
        <Wrapper>
            <Text style={{color: textColor}}>Continue on the next project {nextProject}</Text>
            <IconBox>
                <Img>
                    <Image src='/about/arrowRight.svg' width='35' height='60'/>
                </Img>
            </IconBox>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
`


const Text = styled.h3`
  margin: 1em 2em;
  text-align: right;
  width: 300px;

  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 2.2vh;
  line-height: 1.5em;
`

const IconBox = styled.div`
  width: 12vw;
  height: 22vh;

  border-radius: 30px;
  background-color: rgba(1, 1, 1, 0.3);
  transition: 0.5s;

  :hover {
    width: 16vw;
    cursor: pointer;
  }
`

const Img = styled.div`
  margin: 8vh 3vw;
`