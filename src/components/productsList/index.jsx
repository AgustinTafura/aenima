import { useState, useContext } from 'react'
import { ProductContext } from '../../context/ProductContext'
import ProductDeleteConfirmation from '../productDeleteConfirmation'
import $ from 'jquery'
import { Link } from 'react-router-dom'


const ProductsList = () => {
    const {productList} = useContext(ProductContext)
    const [productToDelete, setProductToDelete] = useState({})

    function openDeleteModal(product) {
        console.log(product)
        setProductToDelete(product)
        $('#deleteProductModal').modal('show')
    }

    if (productList.length === 0) { return <div><span className="spinner-border spinner-border-sm"></span> Cargando productos</div> }

    return (
        <>

            <button className='btn btn-info'>
                <Link className="nav-link text-white" to={"/products/add"}>Agregar nuevo Producto</Link>
            </button>

            <table className="table mt-5">
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
                        productList.map((product, i)=>{
                            return (
                                <tr key={i}>
                                    <td className='py-1' > <Link to={`/products/${product._id}`}> <img src={product.imagenUrl} alt=""  style={{width:'4rem'}} /> </Link></td>
                                    <td>{product.nombre}</td>
                                    <td>{product.marca}</td>
                                    <td>{product.descripcion}</td>
                                    <td>{product.precio}</td>
                                    <td> <Link to={`/products/edit/${product._id}`}> <button className='btn btn-warning'><i className="far fa-edit"></i></button></Link></td>
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
