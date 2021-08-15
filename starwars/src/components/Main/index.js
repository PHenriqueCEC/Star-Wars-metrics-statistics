import React from 'react';
import * as S from './styles';

function Main() {

    return (

        <S.container>
            <div class="entry">
                <h1> SEARCH!</h1>
                <input type="text" placeholder="people/1/" />
                <button type="button" onClick={Request}>Request</button>
            </div>

            <div class="exit">
                <h3> RESULT: </h3>
                <input type="text" />
            </div>
        </S.container>

    )

}

export default Main;
