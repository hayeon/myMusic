import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import HeaderEx from "../HeaderEx";
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

  if (!isLoggedIn) {
    return (
      <BrowserRouter>
        <HeaderEx />
        <Routes>
        <Route path="/" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <HeaderEx />
      <Routes>
          <>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Searchartist" element={<Searchartist />}></Route>
          </>
      </Routes>
    </BrowserRouter>
  );
}
export default AppRouter;
