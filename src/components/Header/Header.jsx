import React from 'react';
import AluraLogo from '@img/LogoMain.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2rem 6rem;
  border-bottom: 5px solid #2271D1;
  box-shadow: 0px 0px 5px #2271D1;
  background-color: #262626;

  & div {
    display: flex;
    justify-content: space-between;
    width: 25%;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <img src={AluraLogo} alt='logo Aluraflix' />
      <div className='header-buttons'>
        <Link to="/">
          <Button text={'Home'} />
        </Link>
        <Link to="/crear-video">
          <Button text={'Nuevo video'} />
        </Link>
      </div>
    </StyledHeader>
  );
};

export default Header;
