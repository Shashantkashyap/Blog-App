import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appWrite/Auth';
import { logout } from '../../Store/authSlice';

export default function LogoutButton() {

    const dispatch =useDispatch();

    const logoutHandler = ()=>{
        authService.logOut().then(()=>{
            dispatch(logout)
        })
    } 
     return (
    <button onClick={logoutHandler} className=' inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>Logout</button>
  )
}
