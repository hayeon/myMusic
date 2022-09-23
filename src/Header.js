import styled from "styled-components";
import { motion, useAnimation, useViewportScroll } from "framer-motion";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 80px;
  top: 0;
  left: 0;
  font-size: 14px;
  background-color: black;
`;

const HeaderIn = styled.div`
  display: flex;
  align-items: center;
`;

const navScrollVar = {
  top: { backgroundColor: "rgba(0,0,0,0)" },
  scroll: { backgroundColor: "rgba(0,0,0,1)" },
};

const Items = styled.ul`
  display: flex;
  align-items: center;
  background-color:white;
`;

const Item = styled.li`
  margin-right: 20px;
  transition: color 0.3s ease-in-out;
  position: relative;
  display: flex;
  background-color: pink;
  justify-content: center;
  flex-direction: column;
  text-decoration: none;
  /* &:hover {
    color: pink;
  } */
`;

function Header() {
  // //useRouteMatch를 통해 현재 위치가 어디인지
  // //만약에 "/"에 있다면 , HoverMatch가 위치해야함
  // const homeMatch = useRouteMatch("/");
  // const searhMatch = useRouteMatch("/artists");
  // const serachBarAnimation = useAnimation();
  // const navAnimation = useAnimation();
  // const { scrollY } = useViewportScroll();
  // //검색바 열었을 때 애니메이션

  // useEffect(() => {
  //   //헤더 흐려지는 애니메이션
  //   scrollY.onChange(() => {
  //     if (scrollY.get() > 10) {
  //       navAnimation.start("scroll");
  //     } else {
  //       navAnimation.start("top");
  //     }
  //   });
  // }, [scrollY, navAnimation]);
  const [token, setToken] = useState("");
  
  
  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
    console.log(token);
  };

  return (
    <Nav>
      <HeaderIn>
        <Items>
          <Item>
            <h1> <Link to="" style={{ textDecoration: "none" }}>Home</Link></h1>
          </Item>
          <Item >
            <Link to="/searchartist" style={{ textDecoration: "none" }}>아티스트 찾기 </Link>
          </Item>
          <button onClick={logout}>
           로그아웃
          </button>
        </Items>
      </HeaderIn>
    </Nav>
  );
}

export default Header;
