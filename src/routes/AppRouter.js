import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Header from "../Header";
import Searchartist from "./Searchartist";

function AppRouter() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const getToken = () => {
    let token = window.localStorage.getItem("token");
    token ? setIsLoggedIn(true) : setIsLoggedIn(false);
  };

  useEffect(() => {
    getToken();
  }, [isLoggedIn]);

  return (
    <BrowserRouter>
          <Header/>
      <Routes>
        {isLoggedIn ? (
          <>
          <Route path="/" element={<Home />}></Route>
          </>
        ) : (
          <Route path="/login" element={<Login />}></Route>
          
        )}
      </Routes>
      <Routes path="/searchartist" element={<Searchartist/>}></Routes>
    </BrowserRouter>
  );
}
export default AppRouter;
