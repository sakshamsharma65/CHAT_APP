
import './App.css'
import { Toaster } from 'react-hot-toast';
import {Loader} from "lucide-react";
import Navbar from './components/Navbar'
import SignUpPage from './pages/SignupPage'
import SettingsPage from './pages/SettingsPage'
import ProfilePage from './pages/ProfilePage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import {Routes,Route,Navigate} from "react-router-dom"
import { useAuthStore } from './store/useAuthStore'
import { useEffect } from 'react'
function App() {
const {authUser,checkAuth,isCheckingAuth,onlineUsers} =useAuthStore()
console.log(onlineUsers);

useEffect(()=>{
checkAuth()
},[checkAuth])
console.log({authUser});
  if (isCheckingAuth && !authUser)
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );
  return (
    <>
    

<Navbar/>
<Routes>
        <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to="/" />} />
        <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/" />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/profile" element={authUser ? <ProfilePage /> : <Navigate to="/login" />} />
 
</Routes>
<Toaster
  position="top-left"
  reverseOrder={false}
/>
      </>
  )
}

export default App
