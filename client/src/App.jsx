

import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Products from './components/Products'
import Navigator from './components/Navigator'
import Myproducts from './components/Myproducts'
import Imageupload from './components/Imageupload'
import Editproduct from './components/Editproduct'
import Addproduct from './components/Addproduct'
import Forgot from './components/Forgot'


const App=()=>{


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigator/>}></Route>

    <Route path='/products' element={<Products/>}></Route>
    <Route path='/myproducts' element={<Myproducts></Myproducts>}></Route>
    <Route path='/imageupload' element={<Imageupload></Imageupload>}></Route>
    <Route path='/edit' element={<Editproduct></Editproduct>}></Route>
    <Route path='/add' element={<Addproduct></Addproduct>}></Route>
    <Route path='/forgot' element={<Forgot></Forgot>}></Route>




    </Routes>
    </BrowserRouter>
    

  
  )
}

export default App
