import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContain } from "../AuthContent/AuthContentProvider";
import swal from 'sweetalert'

function Navbar() {
  const Navigate=useNavigate()
  const {login,setLogin}=useContext(AuthContain)
  const list = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "favorites",
      path: "/favorites",
    }
  ];

  const HandleLogout=()=>{
setLogin("Login/SignUp")
swal("Logout Successfully")
Navigate("/login")
  }

  const handleLogin=()=>{
    if(login=="Login/SignUp"){
      Navigate("/login")
    }
  }

  return (
    <div className="navMain">
      {list?.map((el) => (
        <div className="nav">
         <Link style={{ textDecoration: 'none', color:'red' }} to={el.path}>
            <h3>{el.title}</h3>
          </Link>
        </div>
      ))}
      <div style={{display:'flex', textDecoration: 'none', color:'red',justifyContent:'space-between' }} >
            <h3 className="name" onClick={handleLogin}>{login}</h3>
            {login!="Login/SignUp"?(<button className="logout" onClick={HandleLogout} >Logout</button>):(<h3 className="name2"onClick={handleLogin}>Login/SignUp</h3>)}
          </div>
    </div>
  );
}

export default Navbar;
