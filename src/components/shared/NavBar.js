import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import NewPost from "../post/NewPost";
import EditUser from "../../pages/editUser";

import { UserContext } from "../../auth";

export default function Navbar() {
    const { currentUser } = useContext(UserContext);
    const [isNewPost, setIsNewPost] = useState(false);
    const [editUser, setEditUser] = useState(false);
    return (
        <nav className="navbar fixed-top navbar-light bg-light">
            <div className="container">
                <Link to="/" className="navbar-brand">Senacgram</Link>
                <ul className="navbar-nav me-auto flex-row">
                    <li className="nav-item">
                        <Link to="/explore" className="nav-link">Explorar</Link>
                    </li>
                </ul>
                {currentUser &&
                    <ul className="navbar-nav ms-auto flex-row">
                        <li className="nav-item ms-auto">
                            <button className="btn" onClick={() => setIsNewPost(!isNewPost)}>New Post</button>
                            <NewPost isnewpost={isNewPost} />
                        </li>
                        <li className="nv-item">{currentUser.name}</li>
                        <li>
                            <button type="button" className="btn" onClick={() => setEditUser(!editUser)} >
                                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                            </button>
                            <EditUser edituser={editUser} />
                        </li>
                    </ul>
                }

            </div>
        </nav>
    )
}