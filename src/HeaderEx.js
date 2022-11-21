import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Login from "./routes/Login";
const Nav = styled.nav`
  display: flex;
  position: fixed;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 10vh;
  z-index: 10;

  top: 0;
  left: 0;
  font-size: 14px;
  background-color: black;
`;

const LoginBtn = styled.button`
  width: 150px;
  cursor: pointer;
  height: 50px;
  border-radius: 30px;
  font-size: 15px;
`;

const HeaderText = styled.h4`
  font-size: 20px;
  color: white;
  text-decoration: none !important;
`;
function HeaderEx() {


//  useEffect(
  //  ()=> {loginCheck() }, []
  //);
  const [token, setToken] = useState(window.localStorage.getItem("token"));

  const logout = () => {
    const check = window.confirm("로그아웃하시겠습니까?");
      if (check===true) {
    setToken("");
      window.localStorage.removeItem("token");
      console.log(token);
      window.location.replace("/");
    };
  };

  const loginCheck = () => {
    const check = window.localStorage.getItem("token");
    return check;
  }


  
  return (
    <Nav>
      <HeaderText>
        <Link to="/">Home</Link>
      </HeaderText>

      <HeaderText>
        <Link to="/Searchartist" >아트스트 찾기</Link>{" "}
      </HeaderText>
     { token ? <LoginBtn onClick={logout}> 로그아웃하기 </LoginBtn> : null}
    </Nav>
  );
}

export default HeaderEx;
