import { Route, Switch } from "react-router"
import ProductsList from '../components/productsList'
import ProductsCards from '../components/productsCards'


const Routes = () => {

    return (
        <Switch>
            <Route exact path="/" component={ProductsCards}/> 
            <Route exact path="/products" component={ProductsList}/> 

        </Switch>
    )
}

export default Routes 