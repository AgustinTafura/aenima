import { createContext, useState, useEffect} from "react";
import axios from 'axios'

export const ProductContext = createContext();

export const ProductsProvider = ({children}) => {

    const [productList, setProductList] = useState([])


    useEffect(() => {
        getProductList()
    }, [])

    function getProductById(productId) {
        
       return productList.find(product => product._id === productId)

    }

    async function getProductList() {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/products`)
        .then(data=>setProductList(data.data))
        .catch(err=>{alert('hubo un inconveniente, por favor intentelo mas tarde'); return err })
    }

    async function deleteProductById(productId) {
        axios.delete(`${process.env.REACT_APP_BACKEND_URL}/products/${productId}`)
        .then(data=>{
            const index = productList.findIndex(product => product._id === productId)
            const newProductList = [...productList];
            newProductList.splice(index, 1)
            setProductList(newProductList)
            return data
        })
        .catch(err=>{alert('hubo un inconveniente, por favor intentelo mas tarde'); return err })
    }

    async function getProductByIdFromDB(productId) {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/products/${productId}`)
        .then(product=>{
            return product.data
        })
        .catch(err=>{alert('hubo un inconveniente, por favor intentelo mas tarde'); return err })
    }

    async function updateProduct(productId, data) {
        axios.put(`${process.env.REACT_APP_BACKEND_URL}/products/${productId}`,{data})
        .then(productUpdated=>{
            const index = productList.findIndex(product => product._id === productId)
            const newProductList = [...productList];
            newProductList.splice(index, 1, productUpdated.data)
            setProductList(newProductList)
            return data
        })
        .catch(err=>{alert('hubo un inconveniente, por favor intentelo mas tarde'); return err })
    }

    async function addProduct(product) {
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/products`, {
            product
        })
        .then(newProduct=>{
            setProductList([...productList, newProduct.data])
            return newProduct
        })
        .catch(err=>{alert('hubo un inconveniente, por favor intentelo mas tarde'); return err })
    }
    
    
    return (
        <ProductContext.Provider value={{productList, deleteProductById, addProduct, updateProduct, getProductByIdFromDB, getProductById}}>
            {children}
        </ProductContext.Provider>
    )
}