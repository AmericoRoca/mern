import {Link} from 'react-router-dom'


const IndexPage = () =>{
    return(
        <main>
            <h1>Bienvenido a la Coaster MERN</h1>
            <hr/>
            <Link to="/galeria">Ver galeria</Link>
        </main>
    )
}

export default IndexPage