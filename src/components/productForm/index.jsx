import { useContext, useReducer } from 'react';
import { useParams, useHistory } from "react-router-dom";
import { ProductContext } from '../../context/ProductContext';
import { Link } from 'react-router-dom';

const ProductForm = () => {
    const titles = ['nombre', 'marca', 'descripcion', 'precio', 'imagenUrl']
    const history = useHistory();
    const {getProductById, addProduct, updateProduct} = useContext(ProductContext)
    const {id} = useParams()
    const product = id? getProductById(id) : {}
    
    const [formData, setFormData] = useReducer(formDataReducer, {})

    function formDataReducer(state,action){

        const name = action?.name
        const value = action?.value
        state[`${name}`] = value

        return state;
        
    }

    function handleFormSubmit(e){
        e.preventDefault()
        id ?  
            updateProduct(id, formData).then(history.push("/products")) 
        :   addProduct(formData).then(history.push("/products")) 
        ; 
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
                                    onChange={(e)=>setFormData({name:title,value:e.target.value.trim()})}  
                                    type="text" className="form-control" required
                                />                                
                            </div>
                        )
                    })
                    
                }
                
                <button type='submit' className="btn btn-primary mx-2"> {id ? 'Actualizar' : 'Agregar'}</button>
                <button className="btn btn-ligth mx-2"><Link to='/products'>Cancelar</Link></button>
            </form>
        </div>


    )


}

export default ProductForm
