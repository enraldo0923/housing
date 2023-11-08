import React from 'react'
import { Container, Wrapper, Section, Logo, Link } from './style'
import { Outlet } from 'react-router-dom';
import logoImg from '../../assets/Logos/logo.png';
import { navbar } from '../../utils/navbar';


export const Home = () => {
  return <Container>
    <Wrapper>
      <Section logo='true'>
        <Logo src={logoImg} /><h4>Houzing</h4></Section>
      <Section>
        {
          navbar.map(({ title, path }, index) => {
            return <Link className={({ isActive }) => isActive && 'active'} key={index} to={path}>{title}</Link>
          })
        }
      </Section>
      <Section><button>sign in</button></Section>
    </Wrapper>
    <Outlet />
  </Container>
}
export default Home;
