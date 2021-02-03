import Menu from './Menu';
import styled from 'styled-components';

const Layout = ({children, isBlack = true}) => {

    return (
        <Wrapper>
            <Menu isBlack={isBlack}/>
            {children}
            <style jsx global>{`
              body {
              background: linear-gradient(90deg, white 52px, transparent 1%) center,
              linear-gradient(white 52px, transparent 1%) center,
              #999;
              background-size: 55px 55px;
              
              font-family: Roboto, sans-serif;
              font-style: normal;
              }
            `}</style>
        </Wrapper>
    )
}

const Wrapper = styled.div`
   height: 0;
  //background: black;
  margin: -8px;
  //overflow-y: scroll;
`

export default Layout