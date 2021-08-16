import styled from 'styled-components';

export const container = styled.div`
    
    background: #1c1c19;
    width: 100%;
    height: 100vh;
    padding: 30px;
    text-align: center;

    color: #eadb5f;

    h3 { 
        text-align: left;
        padding: 40px;
        padding-left: 330px;
        font-size: 20px;
        margin: 15px;
    }

    .entry {
        input { 
            width: 40%;
            height: 20px;
            padding: 8px 12px;
        }
    }

    .exit {
        
        input {
            width: 46%;
            height: 300px;
            
        }
    }

    button {
        
        background: #eadb5f;
        border: none;
        font-size: 20px;
        color: #1c1c19;
        font-weight: bold;
        padding: 8px;

        cursor: pointer;

        &:hover {
            opacity: 0.8;
        }
   
`
