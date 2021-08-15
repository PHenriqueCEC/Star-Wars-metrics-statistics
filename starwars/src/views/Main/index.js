import React from 'react';
import * as S from './styles';

function Main() {
  
    return (

    <S.container>
        <S.entry>
            <h1> SEARCH!</h1>
            <input type="text" placeholder="people/1/"  size="70" />
            <button type="button" onClick={Request}>Request</button> 
            <div class= "exit"> 
                <h3 class="exit"> RESULT: </h3>
                <input type="text" placeholder="saida" /> 
            </div>
        </S.entry>
        
        
        

    </S.container>

  )

}

export default Main;
