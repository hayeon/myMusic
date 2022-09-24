import styled from "styled-components";
import { Link} from "react-router-dom";

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
  //useRouteMatch를 통해 현재 위치가 어디인지
  //만약에 "/"에 있다면 , HoverMatch가 위치해야함

  return (
    
    <Nav>
      <Link to="/searchartist" style={{ textDecoration: "none" }}>아티스트 찾기 </Link>
      {/* <HeaderIn>
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
      </HeaderIn> */}
    </Nav>
  );
}

export default Header;
