import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

const Background = styled.div `
align-items: center;
position: relative;
height: 200px;
`;

const MainText = styled.div`
position: absolute;
font-size: 30px;
text-align: center;
background-color: red;
top:50%;
left: 50%;
`;




function Searchartist() {
  /*검색어를 입력하면 변수에 저장*/
  const [searchKey, setSearchKey] = useState("");
  const [artists, setArtists] = useState([]);
  const token = window.localStorage.getItem('token');
  const searchArtistsBar = async (e) => {
    const { data } = await axios.get("https://api.spotify.com/v1/search", 
    {  headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: searchKey,
        type: "artist",
      },
    });
    setArtists(data.artists.items);
    console.log(artists);
  };


  const renderArtists = () => {
    return artists.map((artist) => (
      <div key={artist.id}>
        {artist.images.length ? (
          <img width={"100%"} src={artist.images[0].url} alt="" />
        ) : (
          <div>검색된 결과가 없습니다. 다시 입력해주세요</div>
        )}
        {artist.name}
      </div>
    ));
  };

  return (
    <>
      <form onSubmit={searchArtistsBar}>
        <input type="text" onChange={(e) => setSearchKey(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      {renderArtists()}
    </>
  );
}

export default Searchartist;
