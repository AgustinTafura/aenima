import './index.scss'
import { Link } from 'react-router-dom'




const Navbar = (props) => {

    return (
        <>
            <nav id="navbar" className="navbar navbar-expand-lg navbar-light d-flex justify-content-between fixed-top bg-dark">
                <div id='logo'>
                <Link className="nav-link" to={"/"} style={{color:'white'}}>AENIMA</Link>
                </div>

                <button className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse justify-content-end " id="navbarNav">
                    <ul className="navbar-nav text-center nav nav-pills">

                        <li className="nav-item">
                            <Link className="nav-link" to={"/products"}>Editar Productos</Link>
                        </li>

                    </ul>
                </div>



            </nav>       
        
        </>
    )

}

export default Navbar
