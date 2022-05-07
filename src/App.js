import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./Pages/Main";
import ProductPage from "./Pages/ProductPage";
import Layout from "./components/layouts/Layout";
import ContactPage from "./Pages/ContactPage";
import NotFoundPage from "./components/NotFoundPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Main/>}/>
                    <Route path="products" element={<ProductPage />}/>
                    <Route path="contact" element={<ContactPage/>}/>
                    <Route path="*" element={<NotFoundPage />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
