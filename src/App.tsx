import Footer from "./componets/footer/footer";
import Navbar from "./componets/navbar/navbar";
import Cadastro from "./pages/cadastro/cadastro";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";


function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <div className="min-h-[80vh]">
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/cadastro" element={<Cadastro />} />
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
