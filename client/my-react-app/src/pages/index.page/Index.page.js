import {Link} from 'react-router-dom'


const IndexPage = () =>{
    return(
        <main>
            <h1>Bienvenido a la Lista de montañas rusas</h1>
            <hr/>
            <Link to="/galeria">Ver galeria</Link>
        </main>
    )
}

export default IndexPage