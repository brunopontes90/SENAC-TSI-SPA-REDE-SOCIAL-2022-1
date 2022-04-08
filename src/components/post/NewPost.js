import React, { useContext, useRef, useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_POST } from "../../graphql/post/mutation";
import { UserContext } from "../../auth";  

export default function NewPost({ isnewpost }) {
    const [text, setText] = useState("");
    const { currentUser } = useContext(UserContext)
    const [addPost] = useMutation(ADD_POST);
    const image = useRef();

    if (isnewpost) {
        if(!document.getElementById('newPost').classList.contains('show')){
            new window.bootstrap.Modal(document.getElementById('newPost')).show();
        }
    }

     const uploadImage = async (imagem) => {
        const formData = new FormData();
        formData.append('file', imagem);
        formData.append('upload_preset', 'senacgram');
        formData.append('cloud_name', 'brunopontes90');
        const response = await fetch('http://api.cloudinary.com/v1_1/brunopontes90/image/upload', {
            method: "POST",
            accept: 'application/json',
            body: formData
        });

        const bodyJson = await response.json();
        console.log(bodyJson);
        return bodyJson.url;
    }

    const handleNewPost = async () => {
        let url = await uploadImage(image.current.files[0])
        const newPost = {
            text: text,
            image: url,
            userId: currentUser.id,
        }
        
        addPost({variables: {
            image: newPost.image,
            text: newPost.text,
            userId: newPost.userId
        }})

    }
    return (
        <div className="modal" id="newPost" tabIndex="-1">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Criar um Post</h5>
                        <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close">
                        </button>
                    </div>
                    <div className="modal-body">
                        <input  type="text" placeholder="Digite um texto" className='form-control my-2' value={text} onChange={(event) => setText(event.target.value)} />
                        <input  type="file" className='form-control my-2' ref={image}/>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={handleNewPost} >Postar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}