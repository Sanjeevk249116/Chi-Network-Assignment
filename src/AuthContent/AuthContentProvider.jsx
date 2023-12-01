import React, { createContext, useState } from "react";
export const AuthContain = createContext();
function AuthContentProvider({ children }) {
  const [searchMovie, setSearchMovie] = useState("");
  const [array, setArray] = useState([]);
  const [obj, setObj] = useState([]);
  const [login, setLogin] = useState("Login/SignUp");
  const [page, setPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <AuthContain.Provider
      value={{
        searchMovie,
        setSearchMovie,
        array,
        setArray,
        obj,
        setObj,
        login,
        setLogin,
        page,
        setPage,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </AuthContain.Provider>
  );
}

export default AuthContentProvider;
