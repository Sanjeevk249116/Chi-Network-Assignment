import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContain } from "../AuthContent/AuthContentProvider";

function Navbar() {
  const {login}=useContext(AuthContain)
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
  return (
    <div className="navMain">
      {list?.map((el) => (
        <div className="nav">
         <Link style={{ textDecoration: 'none', color:'red' }} to={el.path}>
            <h3>{el.title}</h3>
          </Link>
        </div>
      ))}
      <Link style={{ textDecoration: 'none', color:'red' }} to={"/login"}>
            <h3>{login}</h3>
          </Link>
    </div>
  );
}

export default Navbar;
