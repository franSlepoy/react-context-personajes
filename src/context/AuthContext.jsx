import { createContext, useState } from "react";

export const AuthContext = createContext()


const AuthContextProvider = ( {children} ) => {

    const [userData, setUserData] = useState({ name:"", lastName:""})
    
    const data = {
        userData,
        setUserData
    }

  return (
    <AuthContext.Provider value={data} >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider