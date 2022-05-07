import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./Pages/Main";
import ProductPage from "./Pages/ProductPage";
import Layout from "./components/layouts/Layout";
import ContactPage from "./Pages/ContactPage";
import _404 from "./components/_404";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Main/>}/>
                    <Route path="products" element={<ProductPage />}/>
                    <Route path="contact" element={<ContactPage/>}/>
                    <Route path="*" element={<_404 />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
