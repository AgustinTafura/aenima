import axios from 'axios'
import { useEffect, useState, useContext } from 'react'
import { ProductContext } from '../../context/ProductContext'
import ProductDeleteConfirmation from '../productDeleteConfirmation'
import $ from 'jquery'

const ProductsList = () => {
    const {productList} = useContext(ProductContext)
    const [productToDelete, setProductToDelete] = useState({})

    function openDeleteModal(product) {
        setProductToDelete(product)
        $('#deleteProductModal').modal('show')
    }

    if (productList.length == 0) { return <div><span className="spinner-border spinner-border-sm"></span> Cargando productos</div> }

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Imagen </th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Marca</th>
                        <th scope="col">Descripción</th>
                        <th scope="col">Precio</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productList.map(product=>{
                            return (
                                <tr key={product.nombre}>
                                    <td className='py-1' ><img src={product.imagenUrl} alt=""  style={{width:'4rem'}} /></td>
                                    <td>{product.nombre}</td>
                                    <td>{product.descripcion}</td>
                                    <td>{product.marca}</td>
                                    <td>{product.precio}</td>
                                    <td><button className='btn btn-warning'><i className="far fa-edit"></i></button></td>
                                    <td><button onClick={()=>openDeleteModal(product)} className='btn btn-danger'><i className="far fa-trash-alt "></i></button></td>
                                </tr>
                            )
                        })    
                    }
                </tbody>
            </table>
            
            <ProductDeleteConfirmation productToDelete={productToDelete} setProductToDelete={setProductToDelete}/>

        </>
    )
}

export default ProductsList
