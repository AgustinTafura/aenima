import { useContext, useReducer,useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { useParams, useHistory } from "react-router-dom";
import { ProductContext } from '../../context/ProductContext';


const ProductForm = () => {
    const titles = ['nombre', 'marca', 'descripcion', 'precio', 'imagenUrl']
    const history = useHistory();
    const {getProductById, addProduct, updateProduct} = useContext(ProductContext)
    const {id} = useParams()
    const product = id? getProductById(id) : {}
    
    const [formData, setFormData] = useReducer(reducer, {})

    function reducer(state,action){

        const name = action?.name
        const value = action?.value
        state[`${name}`] = value

        return state;
        
    }

    function handleFormSubmit(e){
        e.preventDefault()
        console.log(product,formData)
        id ?  updateProduct(id, formData) : addProduct(formData)
        return history.push("/products"); 
    }


    return (
        <div className='container'>
            <h4>{id?'Editar Producto' : 'Crear un nuevo Producto'}</h4>
            <form onSubmit={handleFormSubmit} className='col-6'>

                {
                    titles.map(title=> {
                        return (
                            <div key={title} className="input-group mb-2 mr-sm-2">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">{title}</div>
                                </div>
                                <input 
                                    defaultValue={product ? product[`${title}`] : ''} 
                                    onChange={(e)=>setFormData({name:title,value:e.target.value})}  
                                    type="text" className="form-control" required
                                />                                
                            </div>
                        )
                    })
                    
                }
                
                <button type='submit' className="btn btn-primary"> {id ? 'Actualizar' : 'Agregar'}</button>

            </form>
        </div>


    )


}

export default ProductForm
