import styled from 'styled-components';

export const ShowArea = () => {
    const randomArray = [671, 671, 671, 459, 459, 420, 59, 59, 59, 39, 39, 39, 29, 29, 29]

    return (<ShowWrapper>
        <ClickArea>
            <DeathText onMouseOver={() => console.log("deathsNum hovered")}>119,297</DeathText>
            <YearArea onMouseOver={() => console.log("year hovered")}>
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
            <DtArea>
                {randomArray.map((num, i) => {
                    return <DtText num={num} key={i} />
                })}
            </DtArea>
        </TextArea>
    </ShowWrapper>)
}

const DtText = ({num}) => {
    return (<>
        <Num>{num}</Num>
    </>)
}

const ShowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  //align-items: flex-end;
  width: 42vw;
  margin: 0;
  padding: 20px;
  background-color: #e9e9e9;
  border-radius: 2em;
  //transform: rotateY(20deg);
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
   font-size: 2.5em;
   text-align: right;
   color: white;
   
   padding: 5px;
   background-color: black;
   width: 160px;
   height: 1em;
`

const DText = styled.h4`
  font-family: Ubuntu, sans-serif;
  font-size: 2em;
  text-align: left;
  margin-left: 10px;
  margin-bottom: 0;
`

const SText = styled.h5`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 4.5em;
  
  margin: 0;
`

const TText = styled.h6`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 3em;
  
  margin: 0;
`

const YText = styled.p`
  font-family: Ubuntu, sans-serif;
  font-style: normal;
  font-weight: lighter;
  font-size: 1.5em;
  color: #5e5e5e;
  
  text-align: right;
  margin: 2.2em 1em;
  
  :hover {
    font-weight: 900;
    color: #000;
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
  font-size: 1em;
  color: #b5b5b5;
  
  border-radius: 1em;
  
  width: 3vw;
  height: 3vh;
  padding: 2px;
  text-align: center;
  margin: 15px 10px;
  
  :hover {
    background-color: #000;
    color: #fff;
  }
`