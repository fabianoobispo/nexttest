import Link from 'next/link';
import { Title, Flex, Container } from '../../styles/pages/geradorCpf';
import {useState, useEffect } from 'react';


import api from '../api/ApiStarWars';

export default function Home() {
    const [planets, setPlanets] = useState({});
    const [cpfgerado, setCpfgerado] = useState('');


    useEffect(() => {
        loadPlanets();
      }, []);


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
        console.log(response.data);
        setPlanets(response.data);
      
      }


    return (
        <>
    <Flex>
        
        <Title>Selecione um planeta </Title>
        <input type="text" value={cpfgerado} />

      
        <button onClick={handleClick}>Gerar</button>
    </Flex>

        <Link href="/">
            <a>Voltar</a>
        </Link> 

      
</>

    )
}

