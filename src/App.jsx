import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddProduct from './components/AddProduct'
import SearchProduct from './components/SearchProduct'
import DeleteProduct from './components/DeleteProduct'
import AllProducts from './components/AllProducts'
// import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
  {/* <Route index element={<AddEmployee />} /> */}
  <Route path="add" element={<AddProduct />} />
  <Route path="all" element={<AllProducts />} />
  <Route path="search" element={<SearchProduct />} />
  <Route path="delete" element={<DeleteProduct />} />
</Routes>
     </BrowserRouter>
    </>
  )
}

export default App
