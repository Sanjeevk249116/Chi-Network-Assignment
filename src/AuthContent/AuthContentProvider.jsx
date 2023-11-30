import React, { createContext, useState } from 'react'
export const AuthContain=createContext()
function AuthContentProvider({children}) {
  const [searchMovie, setSearchMovie] = useState("");
  const[array,setArray]=useState([])
  const[obj,setObj]=useState([])
  return (
    <AuthContain.Provider value={{searchMovie, setSearchMovie,array,setArray,obj,setObj}}>
      {children}
    </AuthContain.Provider>
  )
}

export default AuthContentProvider
