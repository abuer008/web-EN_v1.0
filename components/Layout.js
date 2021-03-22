import Menu from './Menu';
import styled from 'styled-components';

const Layout = ({children, isBlack = true, backgroundColor = '#fff'}) => {

    return (
        <Wrapper>
            <Menu isBlack={isBlack}/>
            {children}
            <style jsx global>{`
              body {
              background: linear-gradient(90deg, ${backgroundColor} 52px, transparent 1%) center,
              linear-gradient(${backgroundColor} 52px, transparent 1%) center,
              #999;
              background-size: 55px 55px;
              
              font-family: Roboto, sans-serif;
              font-style: normal;


              }
              
              .roundImage {
                border-radius: 5%;
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