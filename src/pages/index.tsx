import Link from 'next/link';
import {  Container } from '../styles/pages/home';


export default function Home() {
 

    return (
    <Container>
        
       
        <Link href="/gerador-cpf">
            <a>Gerador-cpf</a>
        </Link> 
        <br/>
        <Link href="/starwars">
            <a>starwars-api</a>
        </Link>        
             
      
    </Container>
    )
}

