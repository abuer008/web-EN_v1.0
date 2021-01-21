import styled from 'styled-components'

export const BasicEl = ({style}) => {
    return (
        <Rect style={style}>
        </Rect>)
}

const Rect = styled.div`
  position: absolute;
  
  background: #eeeeee;
  
  box-shadow: 0px -10px 20px rgba(255, 255, 255, 0.6), 0px 10px 20px rgba(0, 0, 0, 0.25);
  filter: blur(0.5px);
  border-radius: 2.5em;
  //border: 5px solid rgba(236, 236, 236, 0.5);
`