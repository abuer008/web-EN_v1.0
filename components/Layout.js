import Menu from './Menu';
import styled from 'styled-components';
import Image from 'next/image';

const Layout = ({ children, background }) => {

    return (
        <Wrapper>
            <Menu />
            {children}
        </Wrapper>
    )
}

const Wrapper = styled.div`
  height: 90vh;
  //background: black;
`


export default Layout