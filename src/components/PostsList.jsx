import { useEffect, useState } from "react"
import { PostItem } from "./PostItem";

export const PostsList = () => {

    //Opciones del combo.
    const [filtro, setFiltro] = useState("");
    //La información que me devolverá el API.
    const [lista, setLista] = useState([]);

    useEffect(() => {
        mostrarTareas();
    }, [filtro])

    const mostrarTareas = async () => {
        let url = 'https://jsonplaceholder.typicode.com/todos';
        if(filtro == "completas"){
            url += '?completed=true';
        }else if(filtro == "incompletas"){
            url += '?completed=false';
        }
        try{
            let request = await fetch(url);
            let response = await request.json();
            console.log(response);
            setLista(response);
        }catch(e){
            alert("Error al intentar recuperar las tareas");
        }
    }

    return (
        <form>
            <h2>Ejemplo de listas</h2>
            <select className="form-select mb-3" value={filtro} onChange={e => setFiltro(e.target.value)}>
                <option value=""> Mostrar todo </option>
                <option value="completas"> Mostrar completas </option>
                <option value="incompletas"> Mostrar incompletas </option>
            </select>
            <ul className="list-group">
                {
                    lista.map((item) => (
                        <PostItem key={item.id} id={item.id} title={item.title} completed={item.completed} />
                    ))
                }
            </ul>
        </form>
    )

}