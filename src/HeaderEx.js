import { useState } from "react";
import { Link } from "react-router-dom";

function HeaderEx() {
  const[token, setToken] = useState(window.localStorage.getItem("token"));

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
    console.log(token);
    window.location.replace("/")

   };
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/searchartist">아트스트 찾기</Link>
      <button onClick={logout}>로그아웃하기</button>
    </>
  );
}

export default HeaderEx;
