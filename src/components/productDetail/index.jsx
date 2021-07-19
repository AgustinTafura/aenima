import { useContext } from 'react'
import { ProductContext } from '../../context/ProductContext'
import { useParams } from "react-router-dom";
import ProductCard from '../productCard';

const ProductDetail = () => {
    const {getProductById} = useContext(ProductContext)
    const {id} = useParams()
    const product =  getProductById(id)

    if (!product) { return <div><span className="spinner-border spinner-border-sm"></span> Cargando productos</div> }


    return (
        <>
            <ProductCard product={product} />
        </>
    )


}

export default ProductDetail
