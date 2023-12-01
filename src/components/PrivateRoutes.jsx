import React, { useContext } from 'react'

import { Navigate } from 'react-router-dom';
import { AuthContain } from '../AuthContent/AuthContentProvider';
import swal from 'sweetalert';

function PrivateRoutes({children}) {
    const {login}=useContext(AuthContain);
     
      if(login=="Login/SignUp"){
        swal("Please Login first")
        return <Navigate to={"/login"}/>
        }
    return children;
  }

export default PrivateRoutes
