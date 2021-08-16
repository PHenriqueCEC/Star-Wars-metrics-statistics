import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import * as S from './styles';

import api from '../../services/api';
import { useEffect } from 'react';

function Main() {
    
    const[name, setName] = useState();
    const[index, setIndex] = useState();
    
    async function search() {
        
        await api.get('/', {
            name,
            index
        }).then(
            alert("ERRO!")
        )
    }

    return (

        <S.container>
            <div class="entry">
                <h1> SEARCH!</h1>
                <input type="text" placeholder="people/1/" />
                <button type="button" onClick={search}>Request</button>
            </div>

            <div class="exit">
                <h3> RESULT: </h3>
                <input type="text" />
            </div>
        </S.container>

    )

}

export default Main;
