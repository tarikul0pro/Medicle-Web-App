import { createContext } from "react";
import useFirebase from "../hooks/useFirebase";
import useServices from "../hooks/useServices";


export const AuthContext =createContext() 

const AuthProvider = ({children}) => {
    const AllContexts = useFirebase()
    const {services} = useServices()
    const data = {AllContexts, services};
 
 return(
    <AuthContext.Provider value={data}>
    {children}
</AuthContext.Provider>
 );
};

export default AuthProvider; 