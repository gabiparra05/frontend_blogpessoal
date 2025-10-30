import type Tema from "./Tema";
import type Usuario from "./Usuario";

export default interface Postagem {
    [x: string]: any;
    id: number;
    titulo: string;
    texto: string;
    data: string;
    tema: Tema | null;
    postagem?: Postagem[] | null;
}
