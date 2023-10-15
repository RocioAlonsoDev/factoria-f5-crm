import { createContext, useContext }  from "react";
import { useState } from "react";

const StateContext = createContext({
    currentUser: {},
    userToken: null,
    setCurrentUser: () => {},
    setUserToken: () => {}
})

export const ContextProvider = ({ children }) => {
    const [currentUser,setCurrentUser] = useState({})
    
    const [userToken,_setUserToken] = useState(localStorage.getItem('TOKEN') || '')
    //const [userToken,_setUserToken] = useState('')


    const setUserToken = (token) => {
        if(token){
            localStorage.setItem('TOKEN', token)
        } else {
            localStorage.removeItem('TOKEN')
        }
        _setUserToken(token)
    }

    return(
        <StateContext.Provider value={{
            currentUser,
            setCurrentUser,
            userToken,
            setUserToken,
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const AuthContext = () => useContext(StateContext)