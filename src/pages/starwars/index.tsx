import Link from 'next/link';
import { Title, Flex, Container } from '../../styles/pages/geradorCpf';
import {useState } from 'react';


import api from '../api/ApiStarWars';

export default function StarWars() {
  

        const loadPlanets = async () => {
        const response = await api.get("planets").catch((error) => {
          console.log(
            response
          );
    
          return;
        });
     
      
      } 

      loadPlanets();


    return (
        <>
          <Flex>        
            <Title>Selecione um planeta </Title>
            <input type="text" value="teste"/>

      
     
          </Flex>

          <Container>
            <p>
                Um texto aqui 
            </p>
            <br/>

            <Link href="/">
                <a>Voltar</a>
            </Link> 
          </Container>
      
        </>

    )
}

