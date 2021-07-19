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
        axios.get('http://localhost:3000/products')
        .then(data=>setProductList(data.data))
        .catch(err=>{console.log(err) ; alert('hubo un inconveniente, por favor intentelo mas tarde')})
    }

    async function deleteProductById(productId) {
        axios.delete(`http://localhost:3000/products/${productId}`)
        .then(data=>{
            // console.log(data);
            const index = productList.findIndex(product => product.id === productId)
            const newProductList = [...productList];
            newProductList.splice(index, 1)
            setProductList(newProductList)
        })
        .catch(err=>{console.log(err) ; alert('hubo un inconveniente, por favor intentelo mas tarde')})
    }

    async function getProductByIdFromDB(productId) {
        axios.get(`http://localhost:3000/products/${productId}`)
        .then(data=>{
            console.log(data)
            return data
        })
        .catch(err=>{console.log(err) ; alert('hubo un inconveniente, por favor intentelo mas tarde')})
    }

    async function updateProduct(productId, data) {
        axios.put(`http://localhost:3000/products/${productId}`,{data})
        .then(data=>{
            console.log(data);
            getProductList()
            return data
        })
        .catch(err=>{console.log(err) ; alert('hubo un inconveniente, por favor intentelo mas tarde')})
    }

    async function addProduct(product) {
        axios.post(`http://localhost:3000/products`, {
            product
        })
        .then(data=>{
            console.log(data);
            setProductList([...productList, product])
            return data
        })
        .catch(err=>{console.log(err) ; alert('hubo un inconveniente, por favor intentelo mas tarde')})
    }
    
    
    return (
        <ProductContext.Provider value={{productList, deleteProductById, addProduct, updateProduct, getProductByIdFromDB, getProductById}}>
            {children}
        </ProductContext.Provider>
    )
}