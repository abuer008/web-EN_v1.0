import styled from 'styled-components';
import {useState, useRef} from 'react'
import {VDText} from "./VDText";
import {hiddenText} from "../../data/DataVisualisation";

export const ShowArea = () => {
    const randomArray = [671, 671, 671, 459, 459, 420, 59, 59, 59, 39, 39, 39, 29, 29, 29]

    // const tween = useRef(null)

    const [num, setNum] = useState(false)
    const [year, setYear] = useState(false)
    const [detail, setDetail] = useState(false)


    return (
        <>
            <ShowWrapper>
                <ClickArea>
                    <DeathText onMouseEnter={() => setNum(true)} onMouseLeave={() => setNum(false)}>119,297</DeathText>
                    <YearArea onMouseEnter={() => setYear(true)} onMouseLeave={() => setYear(false)}>
                        <YText>2016</YText>
                        <YText>2017</YText>
                        <YText>2018</YText>
                        <YText>2019</YText>
                    </YearArea>
                </ClickArea>
                <TextArea>
                    <DText>Total deaths</DText>
                    <SText>Syrian civil war</SText>
                    <TText>2016 - 2019</TText>
                    <DtArea onMouseEnter={() => setDetail(true)} onMouseLeave={() => setDetail(false)}>
                        {randomArray.map((num, i) => {
                            return <DtText num={num} key={i}/>
                        })}
                    </DtArea>
                </TextArea>
            </ShowWrapper>
            <HiddenText style={{opacity: num || year || detail ? 1 : 0}}>
                {num &&
                <VDText heading={hiddenText[0].heading} plainText={hiddenText[0].plainText} isMainText={false}/>}
                {year &&
                <VDText heading={hiddenText[1].heading} plainText={hiddenText[1].plainText} isMainText={false}/>}
                {detail &&
                <VDText heading={hiddenText[2].heading} plainText={hiddenText[2].plainText} isMainText={false}/>}
            </HiddenText>
        </>
    )
}

const DtText = ({num}) => {
    return (<>
        <Num>{num}</Num>
    </>)
}

const ShowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: 42vw;
  min-width: 640px;
  height: 80vh;
  max-height: 900px;
  margin: 0;
  position: absolute;
  overflow: hidden;
  bottom: 10vh;
  //padding: 20px;
  background-color: #e9e9e9;
  border-radius: 2em;
  //transform: rotateY(20deg);
`

const HiddenText = styled.div`
  position: absolute;
  width: 30vw;
  left: 50vw;
  bottom: 20vh;
  transition: 0.5s ease-out;
  @media all and (max-height: 800px) {
    bottom: 10vh;
  }
`

const TextArea = styled.div`
`

const ClickArea = styled.div`
  display: flex;
  flex-direction: column;

`

const YearArea = styled.div`
  margin-top: 7em;
`

const DeathText = styled.h3`
  font-family: Ubuntu, sans-serif;
  font-size: 2.5vw;
  text-align: right;
  color: white;

  padding: 5px;
  background-color: black;
  width: 160px;
  height: 1em;
  transition: transform 0.3s ease-in-out;

  :hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`

const DText = styled.h4`
  font-family: Ubuntu, sans-serif;
  font-size: 2vw;
  text-align: left;
  margin-left: 10px;
  margin-bottom: 0;
`

const SText = styled.h5`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 4.5vw;

  margin: 0;
`

const TText = styled.h6`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 3vw;

  margin: 0;
`

const YText = styled.p`
  font-family: Ubuntu, sans-serif;
  font-style: normal;
  font-weight: lighter;
  font-size: 1.5vw;
  color: #5e5e5e;

  text-align: right;
  margin: 2.2em 1em;
  transition: 0.3s ease-in-out;

  :hover {
    font-weight: 900;
    color: #000;
    cursor: pointer;
  }
`

const DtArea = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 15vw;
  margin: 3em 3em;
`

const Num = styled.p`
  font-family: Ubuntu, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1vw;
  color: #b5b5b5;

  border-radius: 1em;

  width: 3vw;
  height: 3vh;
  padding: 2px;
  text-align: center;
  margin: 15px 10px;
  transition: 0.3s ease-in-out;

  :hover {
    background-color: #000;
    color: #fff;
    cursor: pointer;
  }
`