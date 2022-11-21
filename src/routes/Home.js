import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion"

const Background = styled.div`
  align-items: center;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  margin-top: 50vh;
`;

const MainText = styled.div`
  font-size: 30px;
  text-align: center;
`;
const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  position: absolute;
  top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Slider = styled(motion.div)`
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(6, 1fr);
  width: 100%;
  height: 30vh;
  align-items: center;
  background-color: black;
  color: black;
`;

function Home() {
  useEffect(() => {
    topweek();
  }, []);
  const [data, setData] = useState({});
  const token = window.localStorage.getItem("token");
  const toptrack = [];
  const topweek = async () => {
    axios
      .get("https://api.spotify.com/v1/playlists/37i9dQZEVXbMDoHDwVN2tF", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setData(response.data.tracks.items);
        // console.log(response.data.tracks.items[0].track.name);
        for(let i=0; i<50; i++){
        toptrack[i]=response.data.tracks.items[i].track.name;
        }
        console.log(toptrack);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Background>
      <MainText>
        <h1>취향의 플레이리스트를 여기서</h1>
        <AnimatePresence>
          <Slider/>
        </AnimatePresence>
      </MainText>
    </Background>
  );
}

export default Home;
