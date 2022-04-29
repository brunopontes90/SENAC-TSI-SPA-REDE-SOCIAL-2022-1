import { assertObjectType } from "graphql";
import React, { useContext, useState } from "react";
import { UserContext } from "../auth";

export default function EditUser({edituser}) {
    const { currentUser } = useContext(UserContext);
    const[editName, setEditName] = useState(currentUser.name);
    const[addUpdateUser, setAddUpdateUser] = useState()

    if (edituser) {
        if(!document.getElementById('editPost').classList.contains('show')){
            new window.bootstrap.Modal(document.getElementById('editPost')).show();
        }
    }

    updateImage = async (image) => {
        const formData = new FormData();
        formData.append('file', image);
        formData.append('upload_preset', 'senacgram');
        formData.append('cloud_name', 'brunopontes90');
        const response = await fetch('http://api.cloudinary.com/v1_1/brunopontes90/image/upload', {
            method: "POST",
            accept: 'application/json',
            body: formData
        });

        const bodyJson = await response.json();
        console.log(bodyJson);
        return json.url;

    }

    const handleUpdateImage = async () => {
        let url = await updateImage(image.current.files[0])
        const newUpdateImage = {
            text: text,
            url: url,
            userId: editName.id
        }
    }
    return (
        <div className="modal" tabIndex="-1" id="editPost">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Editar Usuario</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <input  type="text" placeholder="Trocar nome de usuario" value={editName} onChange={(event) => setEditName(event.target.value)} />
                        <input  type="file" placeholder="Trocar imagem" className='form-control my-2'/>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                        <button type="button" className="btn btn-primary" onClick={handleUpdateImage}>Salvar Alteração</button>
                    </div>
                </div>
            </div>
        </div>
    );
}