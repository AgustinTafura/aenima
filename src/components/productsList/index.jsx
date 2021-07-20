import { useState, useContext, useEffect} from 'react'
import { ProductContext } from '../../context/ProductContext'
import ProductDeleteConfirmation from '../productDeleteConfirmation'
import $ from 'jquery'
import { Link } from 'react-router-dom'


const ProductsList = () => {
    const {productList} = useContext(ProductContext)


    const [productToDelete, setProductToDelete] = useState({})
    const [productsToShow, setProductsToShow] = useState([])

    const nombres =[]
    const marcas =[]

    function openDeleteModal(product) {
        setProductToDelete(product)
        $('#deleteProductModal').modal('show')
    }
    
    function filter(e){
        const value = e.target.value
        const name = e.target.name
        var newDataToShow = productList.filter(product => product[name] === value)
        value ? setProductsToShow(newDataToShow) : setProductsToShow(productList)
    }


    productList.forEach((product, i)=>{
        !marcas.includes(product.marca) && marcas.push(product.marca)
        !nombres.includes(product.nombre) && nombres.push(product.nombre)
        
    })


    useEffect(() => {
        setProductsToShow(productList)

    }, [productList])

    return (
        <>

            <button className='btn btn-info'>
                <Link className="nav-link text-white" to={"/products/add"}>Agregar nuevo Producto</Link>
            </button>


            <table className="table mt-5">
                <thead>
                    <tr>
                        <th scope="col">Imagen </th>
                        <th scope="col">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">Nombre</div>
                                </div>
                                <select name='nombre' onChange={filter} className="form-control">
                                    <option value="">Todo</option>
                                    {nombres?.map((marca,i)=> <option key={i} value={marca}>{marca}</option>)}
                                    
                                </select>  
                            </div>
                        </th>
                        <th scope="col">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">Marca</div>
                                </div>
                                <select name='marca' onChange={filter} className="form-control">
                                    <option value="">Todo</option>
                                    {marcas?.map((marca,i)=> <option key={i} value={marca}>{marca}</option>)}
                                    
                                </select>  
                            </div>
                        </th>
                        <th scope="col">Descripción</th>
                        <th scope="col">Precio</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productsToShow.map((product, i)=>{


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
