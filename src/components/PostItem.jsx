import { Link } from "react-router-dom";

export const PostItem = ( {id, title, completed} ) => {

    const getClass = () => {
        return (completed) ? "list-group-item list-group-item-success" : "list-group-item list-group-item-danger";
    }
    
    return (
        <li className={getClass()}>
            <Link to={`/posts/${id}`}> {title} </Link>
        </li>
    )

}