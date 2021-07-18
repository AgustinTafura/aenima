import $ from 'jquery'
import { useEffect, useContext } from 'react'
import { ProductContext } from '../../context/ProductContext'

const ProductDeleteConfirmation = ({productToDelete, setProductToDelete}) => {

    const {deleteProduct} = useContext(ProductContext)
    
    
    
    useEffect(() => {
        $('#deleteProductModal').on('hidden.bs.modal', function (e) {
            e.stopPropagation()
            setProductToDelete({})
        })

        return () => {
            $('#deleteProductModal').on('hidden.bs.modal', function (e) {})
        }
    }, [])

    {
        return (
            <div className="modal fade" id="deleteProductModal" tabIndex="-1" role="dialog" aria-labelledby="deleteProductModal" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Estas seguro que desas Eliminar {productToDelete.nombre}?</h5>
                            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                            <button onClick={()=>deleteProduct(productToDelete._id)} className="btn btn-light" type="button" data-dismiss="modal">Aceptar</button>

                        </div>
                    </div>
                </div>
            </div>
        )


    }
}

export default ProductDeleteConfirmation
