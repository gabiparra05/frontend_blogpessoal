import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";

import Footer from "./componets/footer/footer";
import Navbar from "./componets/navbar/navbar";
import DeletarTema from "./componets/Tema/deletartema/DeletarTema";
import FormTema from "./componets/Tema/fortema/ForTema";
import ListaTemas from "./componets/Tema/listatema/ListaTema";
import Cadastro from "./pages/cadastro/cadastro";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

function App() {
    return (
        <>
            <AuthProvider>
                <BrowserRouter>
                    <Navbar />
                    <div className="min-h-[80vh]">
                        <Routes>
                            <Route path="/" element={<Login />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/cadastro" element={<Cadastro />} />
                            <Route path="/temas" element={<ListaTemas />} />
                            <Route
                                path="/cadastrartema"
                                element={<FormTema />}
                            />
                            <Route
                                path="/editartema/:id"
                                element={<FormTema />}
                            />
                            <Route
                                path="/deletartema/:id"
                                element={<DeletarTema />}
                            />
                        </Routes>
                    </div>
                    <Footer />
                </BrowserRouter>
            </AuthProvider>
        </>
    );
}

export default App;
