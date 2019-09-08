import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logoSvg from '../../images/logo-light.svg';

const StyledHeaderWrraper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  background: transparent;
  /* box-shadow: 0 2px 8px #f0f1f2; */
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  height: 64px;
  max-width: 1140px;
`;

const StyledLogo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 280px;
`;

const StyledMenu = styled.div`
  margin-left: 20px;
  display: flex;
  justify-content: space-around;
  justify-items: center;
`;

const StyledRoute = styled.div`
  padding: 0 10px;
  a {
    color: #fff;
    font-size: 18px;
    font-weight: 400;
  }
`;

const ROUTES = [
  {
    id: 'home',
    path: '/',
    name: 'Home',
  },
  {
    id: 'tours',
    path: '/tours',
    name: 'Tours',
  },
  {
    id: 'blog',
    path: '/p/blog',
    name: 'Blogs',
  },
  {
    id: 'about',
    path: '/about',
    name: 'About',
  },
  {
    id: 'contact',
    path: '/contact',
    name: 'Contact',
  },
];

function MainLayout(props) {
  return (
    <div>
      <StyledHeaderWrraper>
        <StyledHeader>
          <StyledLogo>
            <img src={logoSvg} alt="logoSvg" height={50} />
          </StyledLogo>
          <StyledMenu>
            {ROUTES.map(route => (
              <StyledRoute key={route.id}>
                <Link to={route.path}>{route.name}</Link>
              </StyledRoute>
            ))}
          </StyledMenu>
        </StyledHeader>
      </StyledHeaderWrraper>
      <main>
        <div style={{ background: '#fff', minHeight: 380 }}>
          {props.children}
        </div>
      </main>
      <footer style={{ textAlign: 'center' }}>
        Hanoi Free Private Tour Guide ©2018 Created by Efis English Center
      </footer>
    </div>
  );
}

export default MainLayout;
