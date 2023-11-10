import React from 'react'
import { Container, Wrapper, Section, Logo, Link, } from './style'
import { Outlet, useNavigate } from 'react-router-dom';
import logoImg from '../../assets/Logos/logo.png';
import { navbar } from '../../utils/navbar';
import { Button } from '../../components/generic/button';

export const Home = () => {
  const navigate = useNavigate();
  return <Container>
    <Wrapper>
      <Section logo='true'>
        <Logo src={logoImg} /><h4>Houzing</h4></Section>
      <Section>
        {
          navbar.map(({ title, path, hidden }, index) => {
            return (
              !hidden && (
                <Link className={({ isActive }) => isActive && 'active'} key={index} to={path}>{title}</Link>
              ))
          })
        }
      </Section>
      <Section>
        <Button onClick={() => navigate("/signin")} type={"dark"}>Sign In</Button>
      </Section>
    </Wrapper>
    <Outlet />
  </Container>
}
export default Home;
