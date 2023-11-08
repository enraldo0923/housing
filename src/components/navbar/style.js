import { NavLink } from "react-router-dom";
import styled from "styled-components";




const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`;
const Wrapper = styled.div`
background: var(--colorPrimary);
color: white;
padding: var(--padding);
height: 64px;
display: flex;
align-items: center;
font-size: 17px;
justify-content: space-between;
max-width: 1448px;
`;
const Section = styled.div`
cursor: ${({ logo }) => logo && 'pointer'};
.active{
  color: red;}
display: flex;
align-items: center;`;
const Logo = styled.img`
width: 30px;
margin-right: 12px;




`;

const Link = styled(NavLink)`
text-decoration:none;
padding:0 32px;
color: #ffff;

`;



export { Container, Wrapper, Section, Logo, Link };