import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  position: fixed;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 10vh;
  text-decoration:none;
  top: 0;
  left: 0;
  font-size: 14px;
  background-color: black;
`;

const LoginBtn = styled.button `
  width: 150px;
  height: 50px;
  border-radius: 30px;
  font: 30px;
  
`;
function HeaderEx() {
  const[token, setToken] = useState(window.localStorage.getItem("token"));

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
    console.log(token);
    window.location.replace("/")

   };
  return (
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/searchartist">아트스트 찾기</Link>
      <LoginBtn  onClick={logout}>로그아웃하기</LoginBtn >
    </Nav>
  );
}

export default HeaderEx;
