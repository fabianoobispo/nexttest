import styled from 'styled-components';


export const Container = styled.div`
    width: 80vw;


 
    margin-left: 10vw;
    margin-right: -10vw;
    border-radius: 5px;
    
    background-color:#e2f1f8;


    margin-top: 10px;
   
    



    h1 {
        padding-top:1vw;
        margin-left: 2vw;
        font-size:30px;
        font-family: 'Anton', sans-serif;
        letter-spacing: 2px;

    }

    p{
        margin-top: 10px;
        margin-left: 15px;

        margin-right: 15px;
        text-align: justify;

        letter-spacing: 1px;
    }

    img{
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
        margin-bottom: 20px;
        width: 80%;       

    }




    
    @media(max-width: 640px) {
        width: 300px; 
    }
`;

