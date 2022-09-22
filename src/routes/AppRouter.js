import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Header from "../Header";
import Home from "./Home";
import Searchartist from "./Searchartist";

function AppRouter() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const GetToken = () => {
    let token = window.localStorage.getItem("token");
    token ? setIsLoggedIn(true) : setIsLoggedIn(false);
  };

  useEffect(() => {
    GetToken();
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>;
  } else {
    return (
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/artist" element={<Searchartist />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
export default AppRouter;
