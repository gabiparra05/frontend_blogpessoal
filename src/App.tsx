import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Cadastro from "./pages/cadastro/cadastro";
import ListaTemas from "./componets/Tema/listatema/ListaTema";
import { AuthProvider } from "./contexts/AuthContext";
import Navbar from "./componets/navbar/navbar";
import FormTema from "./componets/Tema/fortema/ForTema";
import DeletarTema from "./componets/Tema/deletartema/DeletarTema";
import ListaPostagens from "./componets/postagem/listapostagens/ListaPostagens";
import Footer from "./componets/footer/footer";
import FormPostagem from "./componets/postagem/formpostagem/FormPostagem";
import DeletarPostagem from "./componets/postagem/deletarpostagem/DeletarPostagem";
import Perfil from "./pages/perfil/Perfil";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
    return (
        <>
            <AuthProvider>
                <ToastContainer />
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
                            <Route
                                path="/postagens"
                                element={<ListaPostagens />}
                            />
                            <Route path="/cadastrarpostagem" element={<FormPostagem />} />
                            <Route path="/editarpostagem/:id" element={<FormPostagem />} />
                            <Route path="/deletarpostagem/:id" element={<DeletarPostagem />} />
                            <Route path="/perfil" element={<Perfil />} />
                        </Routes>
                    </div>
                    <Footer />
                </BrowserRouter>
            </AuthProvider>
        </>
    );
}

export default App;
