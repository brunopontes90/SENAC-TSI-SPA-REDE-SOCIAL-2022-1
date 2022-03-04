import React, { useState } from "react";
import Post from "./Post";

function Header({ userName, setUserName }){

    const [user, setUser] = useState("");

    const handleChangeLogOut = () => {
        setUserName("");
    }

    const handleChangerUser = (event) => {
        setUser(event.target.value);
    }

    const handleChangeLogin = () => {
        setUserName(user);
        setUser("");
    }
    
    return( 
        <>
            { !userName && 
                <>
                    <input placeholder="Nome de usuario" onChange={ handleChangerUser } value={ user }/>
                    <button onClick={handleChangeLogin}>Logar</button>
                </> 
            }
            { userName && 
                <>
                    <h1>Bem Vindo, {userName}!</h1>
                    <button onClick={handleChangeLogOut}>Deslogar</button>
                </>
            }

            <Post username={ userName }/>
        </>
    );
}

export default Header;