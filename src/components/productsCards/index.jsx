import axios from 'axios'
import { useEffect, useState, useContext } from 'react'
import { ProductContext } from '../../context/ProductContext'
import { Link } from 'react-router-dom'


const ProductsCards = () => {
    const {productList} = useContext(ProductContext)

    if (productList.length == 0) { return <div><span className="spinner-border spinner-border-sm"></span> Cargando productos</div> }

    return (
        <>
            <div className='container mt-5 pt-5'>
                <div className='row d-flex justify-content-center justify-content-md-between'>
                    {
                        productList.map(product=>{
                            return (
                                <div key={product.nombre} className="card mb-5" style={{maxWidth: '18.25rem',display: 'inline-block',verticalAlign: 'top'}}>
                                    <img className="card-img-top" src={product.imagenUrl} alt="Card image cap"/>
                                    <div className="card-body">
                                        <h5 className="card-title">{product.nombre}</h5>
                                        <p className="card-text">{product.descripcion}</p>
                                        <Link to={`/products/${product._id}`} className="btn btn-primary">Detalle</Link>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>

            </div>
        </>
    )


}

export default ProductsCards
