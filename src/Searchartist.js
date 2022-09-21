import axios from "axios";
import { useState } from "react";

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

  const getrandomArtist = async (e) => {
    e.preventDefault();
    const { data } = await axios.get(
      `https://api.spotify.com/v1/artists/${artists}/top-tracks`
    );
    console.log("랜덤아티스트" + data);
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
    <div>
      <form onSubmit={searchArtistsBar}>
        <input type="text" onChange={(e) => setSearchKey(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      {renderArtists()}
    </div>
  );
}

export default Searchartist;
