import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import authService from "./appWrite/Auth";
import { login, logout } from "./Store/authSlice";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";


function App() {
  
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch();

  useEffect(()=>{
    authService.getCurrentUser().then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    }).finally(()=>setLoading(false))
  },[])


  return !loading ? ( <div className=" min-h-screen flex flex-wrap content-between bg-gray-400">
    SHASHANt<div className=" w-full block">
      <Header></Header>
      <main>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
     </div> ) : (null)
}

export default App
