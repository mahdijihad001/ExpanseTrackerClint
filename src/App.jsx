import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Login from "./Pages/Auth/Login"
import Home from './Pages/Dashboard/Home';
import SignUp from "./Pages/Auth/SignUp";
import Income from './Pages/Dashboard/Income';
import Expances from './Pages/Dashboard/Expances';
import UserProvider from "./Context/UserContext";

const App = () => {
  return (
    <UserProvider>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Root />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/signUp" exact element={<SignUp />} />
            <Route path="/dashboard" exact element={<Home />} />
            <Route path="/income" exact element={<Income />} />
            <Route path="/expances" exact element={<Expances />} />
          </Routes>
        </BrowserRouter>
      </div>
    </UserProvider>
  )
};

const Root = () => {
  const isAuthenticate = !!localStorage.getItem('token');

  return isAuthenticate ? (<Navigate to={'/dashboard'} />) : (<Navigate to={'/login'} />)
}

export default App;



