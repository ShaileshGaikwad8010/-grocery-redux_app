import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from '../Pages/Layout';
import Cart from '../Components/Cart';
import ProductList from '../Components/ProductList';

function AppRouting() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<ProductList />} />
                        <Route path="Cart" element={<Cart />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRouting