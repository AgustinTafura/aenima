import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom";

const ProductCard = ({product}) => {
    const {id} = useParams()

    return (

        <div className="card mb-5" style={{maxWidth: '18.25rem',display: 'inline-block',verticalAlign: 'top'}}>
            <img className="card-img-top" src={`${process.env.REACT_APP_BACKEND_URL}/images/${product.imagenUrl}`} alt=""/>
            <div className="card-body">
                <h5 className="card-title">{product.nombre}</h5>
                <p className="card-text">{product.descripcion}</p>
                {
                    id ? (
                        <>
                            <p className="card-text">{product.marca}</p>
                            <p className="card-text">$ {product.precio}</p>
                            <button className='btn btn-primary'>Comprar</button>

                        </>
                    ) : (
                        <Link to={`/products/${product._id}`} className="btn btn-primary">Detalle</Link>

                    )
                }
            </div>
        </div>

    )


}

export default ProductCard
