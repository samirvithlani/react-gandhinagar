import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { UserLogin } from "../api/UserLogin";

const useAuth = () => {

    const [isAuthenticated, setisAuthenticated] = useState(false)
    useEffect(() => {
      
        const id = localStorage.getItem("id")
        if (id) {
            setisAuthenticated(true)
        }
    
      
    }, [])
    
    return isAuthenticated;
    
}


const ProtectedRoutes = ()=>{

    const isAuth  = useAuth(); //id -->true || false
    console.log("isAuth",isAuth)
    return isAuth? <Outlet/>:<UserLogin/>

}
export default ProtectedRoutes;