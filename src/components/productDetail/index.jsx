import { useContext } from 'react'
import { ProductContext } from '../../context/ProductContext'
import { useParams } from "react-router-dom";
import ProductCard from '../productCard';

const ProductDetail = () => {
    const {getProduct} = useContext(ProductContext)
    const {id} = useParams()
    const product =  getProduct(id)

    if (!product) { return <div><span className="spinner-border spinner-border-sm"></span> Cargando productos</div> }


    return (
        <>
            <ProductCard product={product} />
        </>
    )


}

export default ProductDetail
