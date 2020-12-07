import Link from 'next/link';
import {  Container } from '../styles/pages/home';


export default function Home() {
 

    return (
    <Container>
        <h1>Pagina 1</h1>
        <p> Pagina 1 </p>
        <Link href="/gerador-cpf">
            <a>Gerador-cpf</a>
        </Link>        
      
    </Container>
    )
}

