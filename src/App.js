import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap'
import '@fortawesome/fontawesome-free/js/all';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes/routes'
import Navbar  from "./components/navbar";
import { ProductsProvider } from './context/ProductContext';


function App() {
  return (
    <div className="App">
      <BrowserRouter  basename={"/aenima"}>
        
        <ProductsProvider>

					<Navbar/>
					<div className='container mt-5 pt-5'>
						<Routes/>
					</div>

        </ProductsProvider>
  
      </BrowserRouter>
    </div>
  );
}

export default App;
