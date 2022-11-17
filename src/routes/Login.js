import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
   background-color: rgb(220, 218, 215);
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  margin-top: 10vh;
`;

const LoginBtn = styled.div`
  margin-top: 10vh;
  display: flex;
  cursor: pointer;
  align-items:center;
  border-radius: 20px;
  width: 20vw;
  justify-content: center;
  text-align: center;
  height: 10vh;
  display :inline-block;
  padding-left: 10px;
  padding-right: 10px;
  justify-content: flex-start;

  background-color: rgb(30, 215, 96);
  a {
    line-height: 10vh;
    text-align: center;
    text-decoration: none;
    color: black;
    font-size: 18px;
    font-weight: bold;
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
      <h1>내 취향의 음악을 만나보세요. PerMusic을 통해 내 취향을 음악을</h1>
      <img src="https://www.apple.com/v/airpods-max/e/images/overview/audio_quality_eq__bw20hke6z1ea_small_2x.jpg"  alt="cover"></img>
      
      <h1>전 세계 뮤직을 한 눈에</h1>
      <LoginBtn>
        <a
          href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
        >
          스포티파이 계정으로 시작하기
        </a>
      </LoginBtn>
    </Container>
  );
}

export default Login;
