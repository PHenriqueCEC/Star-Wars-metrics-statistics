import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as S from './styles';

//COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Main from '../../components/Main';

function Home() {

  const [metric, setMetric] = useState({});
  const [index, setIndex] = useState(1);
  const [fetching, setFetching] = useState(false); //A ideia aqui é exibir uma mensagem de "carregando..."
  const [name, setName] = useState("");

  async function getNameAndIndex(name, index) {

      try {
        setFetching(true);
        const res = await axios.get(`https://swapi.dev/api/${name}/${index}/`);
        setFetching(false);
        setMetric(res.data);

      } catch (error) {
        setFetching(false);
      }

  }

  useEffect(() => {
    getNameAndIndex(name, index);

  }, [name, index])

  
  return (
    <S.container>

      <Header />
      <Footer />
      <Main />

    </S.container>

  )

}

export default Home;
