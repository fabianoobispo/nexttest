import styled from 'styled-components';

export const Title = styled.p`
margin-top:5%;
    color: #fff;
    margin-bottom: 12px;
`;


export const Flex = styled.div`
    background-color:#808e95;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    
    margin-top: 5vw;

    position: relative;

  

    width: 20vw; 
    margin-left: 40vw;
    margin-right: -40vw;


    background-color:gray;

    input {
        margin-bottom: 10px;
        width: 30%;
    }

    select{
        width: 30%;
    }

    button {
         margin-top: 10px;
         width: 30%;

         margin-bottom: 5%;
    }
    a {
        text-decoration: none;
        margin-top:-5%;
        color: #fff;
        margin-left: -90%;
    }


    @media(max-width: 800px) {
        width: 400px; 
    }

    

`;



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


