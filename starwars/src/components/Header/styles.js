import styled from 'styled-components';

export const container = styled.div`

    width: 100%;
    height: 70px;
    background: #090808;
    border-bottom: 5px solid #ffe400;

    display: flex; /* Comporta como caixa */


`

export const leftSide = styled.div`

    width: 1px;
    height: 70px;
    display: flex;
    align-items: center;
    padding-left: 0px;

    img {

        width: 50px;
        height: 10px;
    }


`

export const rightSide = styled.div`

    width: 85%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: flex-end; /* começa do final */

    a {
        color: #eadb5f;
        font-weight: bold;
        text-decoration: none;
        margin: 0 10px;

        &: hover {
            color: #ffe400;
        }
    }

    .divider::after {
        content: "|";
        margin: 10px;
        color: #ffe400;
    }


`