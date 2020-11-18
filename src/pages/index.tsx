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

        <p>um texto aqui</p>
      
    </Container>
    )
}

