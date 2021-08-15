import React from 'react';
import * as S from './styles';

//COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Main from '../../components/Main';

function Home() {
  
  return (
    <S.container> 

      <Header />
      <Footer />
      <Main />

    </S.container>

  )

}

export default Home;
