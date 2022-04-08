import React, { useState } from "react";
import Layout from "../components/shared/layouts";

import { Link, useNavigate } from "react-router-dom";

import { useMutation } from "@apollo/client";

//espera reação para executar tarefa
import { useLazyQuery } from "@apollo/client";

import { UserContext } from "../auth";
import { SET_LOGIN } from "../graphql/login/query";
import { ADD_USER } from "../graphql/login/mutation";

export default function RegisterPage(){
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const[name, setName] = useState("");
    const { setCurrentUser } = React.useContext(UserContext);
    const [addLogin] = useMutation(ADD_USER);
    const navigate = useNavigate();

    function handleLogin(){
        addLogin({ variables:{username, password: btoa(password), name} })
        .then((ret) => {
            let { id, name, username }= ret.data.insert_user.returning[0];
            setCurrentUser({ id, name, username });
            navigate('/');
        })
    }
    return(
        <Layout title="Login">
            <div className="row">
                <div className="col-6 d-none d-lg-block text-end">
                    <img 
                        src="/img/iphone.png" 
                        alt="Iphone" 
                    />
                </div>
                <div className="col-lg-4 col-10 mx-auto mx-lg-0">
                    <div 
                        className="border rounded-1 p-5 my-2 mx-auto mx-lg-0" 
                        style={{'maxWidth' : '430px', 'minWidth' : '430px'}}
                    >
                        <h2 
                            className="mb-5 fw-bold" 
                            style={{'fontSize':'50px', 'fontFamily': "'Cookie', cursive"}}
                        >
                            Senacgram
                        </h2>
                        <input 
                            type="text" 
                            className="form-control my-2" 
                            placeholder="Usuario" 
                            value={username} 
                            onChange={(event) => setUsername(event.target.value)}
                        />
                        <input 
                            type="text" 
                            className="form-control my-2" 
                            placeholder="Nome" 
                            value={name} 
                            onChange={(event) => setName(event.target.value)}
                        />
                        <input 
                            type="password" 
                            className="form-control my-2" 
                            placeholder="Senha" 
                            value={password} 
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        <button 
                            className="btn btn-primary w-100" 
                            onClick={handleLogin}
                        >
                            Registrar
                        </button>
                        <hr className="my-5" />
                        <div className="text-center">
                            <p>Você já tem uma conta? <Link to="/logister">Faça o link</Link> </p>
                        </div>
                    </div>
                    <div 
                        className="px-5 my-2 mx-auto mx-lg-0" 
                        style={{'maxWidth' : '430px', 'minWidth' : '430px'}}
                    >
                        <p>Obtenha o aplicativo</p>

                        <div className="row justify-content-center">
                            <img 
                                src="/img/google.png" 
                                alt="Google Store" 
                                style={{height : '40px', width : '135px'}}
                            />
                            <img 
                                src="/img/apple.png" 
                                alt="Apple Store" 
                                style={{height : '40px', width : '135px'}}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}