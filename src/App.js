
import './App.scss';
import Home from './pages/home/home';
import Add from './component/add card/Add';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Prooducts from './component/all-product/Prooducts';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';


function App(props) {
  console.log(props.name);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Home/>}></Route>
          <Route path='/add' element={<Add  />}></Route>
          <Route path='/aa' element={<Prooducts />}></Route>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
