import { useDebugValue, useEffect, useState } from "react"
import { FormContext } from "./FormContext"

export default function FormProvider({children}){
    const[user,setUser] = useState(()=>{
        const storedUserData = localStorage.getItem("userData");
        return storedUserData ? JSON.parse(storedUserData) : {}
    })
    useEffect(()=>{
        localStorage.setItem("userData",JSON.stringify(user))
    },[user])
    const value = {
        user,setUser,
    };
    return(
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    )
}