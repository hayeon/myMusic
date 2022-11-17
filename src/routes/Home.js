import axios from "axios";
import { useEffect } from "react";
import styled from "styled-components";

const Background = styled.div`
  align-items: center;
  position: relative;
  height: 100vh;
  margin-top: 50vh;
`;

const MainText = styled.div`
  font-size: 30px;
  text-align: center;
`;

function Home() {
    useEffect(() => {
    topweek();
  }, []);
  const topweek = async () => {
    const { data } = await axios.get("https://api.spotify.com/v1/shows");
    console.log(data);
  };

  return (
    <Background>
      <MainText>
        <h1>취향의 플레이리스트를 여기서</h1>
      </MainText>
    </Background>
  );
}

export default Home;
