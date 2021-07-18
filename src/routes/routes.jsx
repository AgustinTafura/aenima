import { Route, Switch } from "react-router"
import ProductsList from '../components/productsList'
import ProductDetail from "../components/productDetail"
import ProductsContainer from "../containers/ProductsContainer"
import ProductForm from "../components/productForm"


const Routes = () => {

    return (
        <Switch>
            <Route exact path="/" component={ProductsContainer}/> 
            <Route exact path="/products" component={ProductsList}/>
            <Route exact path="/products/add" component={ProductForm}/>
            <Route exact path="/products/edit/:id" component={ProductForm}/>  
            <Route exact path="/products/:id" component={ProductDetail}/> 
        </Switch>
    )
}

export default Routes 