import {  Container } from '../styles/pages/home';
import {useState } from 'react';
import axios from 'axios';


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
        <h1>Minha landing page</h1>

        <p>falar de uma softskill que no meu caso pode ser a vontade de aprender coisas novas e 
            talves ser curioso no quesito de como as coisas funcionam  e porque 
            na paginade gerar cpf tenho que colocar uma explicacao de como e regado o 
            numero do cpf  e como se descobre os dois digitos, que sao um calculo muioto loco 
            e o ultimo numero antes dos digitos representam o estado de onde o cpf foi gerado de
            e se posivel um historico de cpf gerado que vai salvar no localstorage do navegador para
            
        </p>
      
    </Container>
    )
}

