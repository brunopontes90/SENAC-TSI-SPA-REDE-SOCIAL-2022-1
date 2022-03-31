import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/shared/layouts";

export default function NotFoundPage() {
    return (
    <Layout title="⛔ 404">
        <p className="h5">Desculpe, essa pagina não esta disponivel</p>
        <p>O link que tentou acessar esta quebrado ou foi removido{" "}
            <Link to="/">retorne para o Senacgram</Link>
        </p>
        
    </Layout>
    );
}