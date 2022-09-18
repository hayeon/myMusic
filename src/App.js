import React, { useEffect, useState } from "react";
import Searchartist from "./Searchartist";

function App() {
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
  }, []);

  /* 로그아웃, localStorage에서 토큰 제거 후상태 토큰을 ""로 설정 */
  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  return (
    <div>
      {!token ? (
        <>
          <h2>Spotify로 로그인하기</h2>
          <a
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
          >
            Login to Spotify
          </a>
        </>
      ) : (
        <div>
          <button onClick={logout}>Logout</button>
          <Searchartist token={token} />
        </div>
      )}
    </div>
  );
}

export default App;
