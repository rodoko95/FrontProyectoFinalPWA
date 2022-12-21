import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './pages/Error'
import Home from './pages/Home'
import About from './pages/About'
import Dolls from './pages/Dolls'
import Order from './pages/Order'
import API from './pages/Api'
import Layout from './componentes/Layout';


function App() {
  return (
    <BrowserRouter>
    <Layout/>
      <Routes>
      <Route path='/' element={<Home />}/>  
      <Route path='/About' element={<About />}/>  
      <Route path='/Dolls' element={<Dolls />}/>
      <Route path='/Order' element={<Order />}/>    
      <Route path='/Api' element={<API />}/>    
      <Route path='*' element={<Error />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

