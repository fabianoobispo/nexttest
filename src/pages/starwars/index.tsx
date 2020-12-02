import Link from 'next/link';
import { Title, Flex } from '../../styles/pages/geradorCpf';
import {useState } from 'react';


import api from '../api/ApiStarWars';

export default function StarWars() {
 /* 

        const loadPlanets = async () => {
        const response = await api.get("planets").catch((error) => {
          console.log(
            "Erro ao carregar os planetas.",
            "Tente novamente mais tarde.",
            [{ text: "OK" }],
            {
              cancelable: false,
            }
          );
    
          return;
        });
     
      
      } */


    return (
        <>
    <Flex>
        
        <Title>Selecione um planeta </Title>
        <input type="text" value="teste"/>

      
     
    </Flex>

        <Link href="/">
            <a>Voltar</a>
        </Link> 

      
</>

    )
}

