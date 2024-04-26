import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

export const PostShow = () => {

    //Recuperamos el id por la URL.
    const {idPost} = useParams();

    const [post, setPost] = useState(null);

    useEffect(() => {
        mostrarTarea();
    }, []);

    const mostrarTarea = async () => {
        try{
            let request = await fetch('https://jsonplaceholder.typicode.com/posts/' + idPost);
            let response = await request.json();
            setPost(response);
        }catch(e){
            console.log(e);
            alert("Error al intentar recuperar las tareas");
        }
    }

    return (
        <>
            {(post == null)
            ?
                <div> El post se está cargando </div>                
            :
                <>
                    <h2> {post.title} </h2>
                    <div> {post.body} </div>
                </>
            }
        </>
    )

}