import {  Container } from '../styles/pages/home';
import {useState } from 'react';
import axios from 'axios';
import magicaGif from '../assets/magic.gif';


export default function Home() {
    const [estado, setEstado ] = useState('');
    const [cpfgerado, setCpfgerado] = useState('');
    


    function handleClick(){
        
      axios.post('/api/gerarCPF', {estado})
      .then(response => {
          console.log(response.data);
          setCpfgerado(response.data.cpf);
      });
        

    }


    return (
    <Container>
        <h1>O que são soft skills?</h1>
        <p>
            As soft skills são um conjunto de habilidades e competências relacionadas ao comportamento humano.
            <br></br>
            O melhor exemplo de soft skill talvez seja a inteligência emocional, que é a capacidade de lidar bem com as próprias emoções e usar essa energia a seu favor, sem impulsividade ou arrependimento posterior.
        </p>
        
        <p>
        Mas na área de desenvolvimento outras soft skills são mais importantes, em alguns casos indispensavel, que são comunicar-se bem, lidar com opiniões divergentes, manter o foco e conseguir se organizar.
        <br></br>
        E não, não se aprende de um dia para o outro.
        </p>
        <img src={magicaGif} alt="magicaGif" />

        <p>
        Saber se expressar bem é expor suas ideias de forma clara e objetiva sem rodeios e erros. até mesmo pra pedir ajuda em um determinado assunto, já que ninguém sabe tudo.
        As vezes ao reformular sua pergunta você encontra a sua resposta.
        </p>

        <p>
        Outra soft skill que considero inportate a saber escutar, temos dois ouvidos e uma boca, entao faça proporcional, escute mais e fala o necesario.
        </p>
        
      
    </Container>
    )
}

