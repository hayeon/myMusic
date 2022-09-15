import React, { useEffect } from "react";

function App() {
  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  const REDIRECT_URL = process.env.REACT_APP_REDIRECT_URL;
  const RESPONSE_TYPE = "toekn";

  useEffect(() => {
    getArtist();
  }, []);

  const getArtist = async () => {
    const response = await fetch(`https://api.spotify.com/v1/artists`);
    const json = await response.json();
    console.log(json);
  };

  return (
    <div>
      <h2>Spotify로 로그인하기</h2>
      <a
        href={`https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&response_type=${RESPONSE_TYPE}`}
      >
        Login to Spotify
      </a>
    </div>
  );
}

export default App;
