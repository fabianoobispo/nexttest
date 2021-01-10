import styled from 'styled-components';

export const Title = styled.p`
margin-top:5%;
    color: #fff;
    margin-bottom: 12px;
`;


export const Flex = styled.div`
    width: 80vw; 

    margin-left: 10vw;
    margin-right: -10vw;
    border-radius: 5px;



    background-color:#808e95;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    
    margin-top: 10px;

    position: relative;

  

  

    background-color:gray;

    input {
        margin-bottom: 10px;
        width: 300px;
        text-align: center;
    }

    select{
        width: 300px;
        
    }

    button {
         margin-top: 10px;
         width: 300px;
         margin-bottom: 5%;
    }
    a {
        text-decoration: none;
        margin-top:-5%;
        color: #fff;
        margin-left: -90%;
    }
  

    @media(max-width: 800px) {
        width: 80vw;

        input {
            margin-bottom: 10px;
            width: 40vw;
        }

        select{
            width: 40vw;
        }
        button {
         margin-top: 10px;
         width: 40vw;

         margin-bottom: 5%;
        }

        
    }

    

`;



export const Container = styled.div`
    width: 80vw; 
    margin-left: 10vw;
    margin-right: -10vw;
    border-radius: 5px;
    
    background-color:#e2f1f8;


    margin-top: 10px;
   
    




    p{  
        padding-top:1vw; 

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


    a{
       text-decoration: none;
       margin-left: 15px;

    }

    
    @media(max-width: 800px) {
        width: 80vw;
        
    }
`;


