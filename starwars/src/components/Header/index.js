import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './styles';

import logo from '../../assets/logo.png';

function Header() {
  return (

    <S.container>
      <S.leftSide>

      </S.leftSide>
      <img src={logo} alt="Logotipo" />

      <S.rightSide>
        <Link to="/">HOME</Link>
          <span className="divider" />
        <a href="#">PEOPLE</a>
          <span className="divider" />
        <a href="#">PLANETS</a>
          <span className="divider" />
        <a href="#">STARSHIPS</a>
          <span className="divider" />
        <a href="#">VEHICLES</a>
          <span className="divider" />
        <a href="#">FILMS</a>
      </S.rightSide>


    </S.container>

  )

}

export default Header;

