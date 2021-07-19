import axios from 'axios'
import { useEffect, useState, useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import { Link } from 'react-router-dom'
import ProductCard from '../components/productCard'


const ProductsContainer = () => {
    const {productList} = useContext(ProductContext)

    if (productList.length == 0) { return <div><span className="spinner-border spinner-border-sm"></span> Cargando productos</div> }

    return (
        <>
            <div className='container mt-5 pt-5'>
                <div className='row d-flex justify-content-center justify-content-md-between'>
                    {
                        productList.map((product,i)=>{
                            return (
                                <ProductCard key={i} product={product} />
                            )
                        })
                    }

                </div>

            </div>
        </>
    )


}

export default ProductsContainer