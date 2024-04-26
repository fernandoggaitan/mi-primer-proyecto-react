import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext"

export const ProtectedRoute = ( {children} ) => {

    const {getIsLogueado} = useAuth();

    if(getIsLogueado()){
        return children;
    }else{
        return <Navigate to="/login" />
    }

}