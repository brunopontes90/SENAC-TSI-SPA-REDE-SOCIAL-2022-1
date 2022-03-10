import React from "react";

function Post({ username, content, image, likes, data }){
    return(
        <>
           <p>Postado por: {username}</p>
        </>
    );
}

export default Post;