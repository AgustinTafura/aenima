import { createContext, useState, useEffect} from "react";
import axios from 'axios'

export const ProductContext = createContext();

export const ProductsProvider = ({children}) => {

    const [productList, setProductList] = useState([])


    useEffect(() => {
        getProductList()
    }, [])

    function getProduct(productId) {
       return productList.find(product => product._id === productId)

    }

    function getProductList() {
        axios.get('http://localhost:3000/products')
        .then(data=>setProductList(data.data))
        .catch(err=>console.log(err))
    }

    function deleteProduct(productId) {
        axios.delete(`http://localhost:3000/products/${productId}`)
        .then(data=>{
            console.log(data);
            getProductList()
        })
        .catch(err=>console.log(err))
    }

    function updateProduct(productId) {
        axios.put(`http://localhost:3000/products/${productId}`)
        .then(data=>{
            console.log(data);
            getProductList()
        })
        .catch(err=>console.log(err))
    }

    function addProduct(productId) {
        axios.post(`http://localhost:3000/products`)
        .then(data=>{
            console.log(data);
            getProductList()
        })
        .catch(err=>console.log(err))
    }
    
    
    return (
        <ProductContext.Provider value={{productList, deleteProduct, addProduct, updateProduct, getProduct}}>
            {children}
        </ProductContext.Provider>
    )
}