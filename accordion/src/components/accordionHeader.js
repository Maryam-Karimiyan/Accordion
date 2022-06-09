import styled from "styled-components";

export const StyledHeader=styled.header`
    background-color: ${({bg})=>bg};
    color: ${({textcolor})=>textcolor};
    padding: 50px;
`

const Header = ({bg,textcolor}) => {
  return <StyledHeader bg={bg} textcolor={textcolor}>FAQ help section</StyledHeader>;
};

export default Header;
