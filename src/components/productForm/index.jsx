import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom";
import { ProductContext } from '../../context/ProductContext';


const ProductForm = () => {
    const {getProduct} = useContext(ProductContext)
    const {id} = useParams()
    const product =  getProduct(id)
    const titles = ['nombre', 'marca', 'descripcion', 'precio', 'imagenUrl']

    return (
        <div className='container'>
            <h4>Crear un nuevo Producto</h4>
            <form className='col-6'>

                {
                    titles.map(title=> {
                        return (
                            <div class="input-group mb-2 mr-sm-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">{title}</div>
                                </div>
                                <input value={product ? product[`${title}`] : ''}  type="text" class="form-control" id={`${title}Input`} placeholder="" required/>
                            </div>

                        )
                    })
                }
                
                <button type="submit" class="btn btn-primary">Agergar</button>
            </form>
        </div>


    )


}

export default ProductForm
