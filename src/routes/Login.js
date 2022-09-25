import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 100px;
  justify-content: center;
  text-align: center;
  justify-items: center;
  align-items: center;
  justify-content: center;
  position: absolute;
  display: inline-block;
  display: inline-block;
  place-content: center;
  flex-direction: column;
  margin-left: 20%;
`;

const LoginBtn = styled.div`
  cursor: pointer;
  border-radius: 20px;
  padding: 20px 10px;
  background-color: rgb(30, 215, 96);
  position: absolute;
  width: 350px;
  a {
    text-decoration: none;
    color: black;
    font-size: 18px;
  }
`;

function Login() {
  const CLIENT_ID = "b6915af0484743c1a24d60fa74aa39fa";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";
  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");
    if (!token && hash) {
      /*ocalStorage에 저장토큰이 있는지 확인, 토큰이 없으면 해시 확인하고 해당 문자열에 대해 작업을 수행하여 토큰을 추출*/
      /*앰퍼샌드로 나누고 access_token 포함하는 요소를 검색  배열은 인덱스 1에 토큰을 포함
        토큰을 받으면 localStorage에 저장하고 해시를 재설정*/
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);
    console.log(token);
  }, []);

  /* 로그아웃, localStorage에서 토큰 제거 후상태 토큰을 ""로 설정 */

  return (
    <Container>
      <h1>내 취향의 음악을 만나보세요</h1>
      <h1>전 세계 뮤직을 한 눈에</h1>
      <LoginBtn>
        <a
          href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
        >
          스포티파이로 나만의 플레이리스트 찾기
        </a>
      </LoginBtn>
    </Container>
  );
}

export default Login;
