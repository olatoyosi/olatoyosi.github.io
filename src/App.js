import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./Pages/Main";
import ProductPage from "./Pages/ProductPage";
import Layout from "./components/layouts/Layout";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Main/>}/>
                    <Route path="products" element={<ProductPage />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
