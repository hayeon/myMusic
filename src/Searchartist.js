import axios from "axios";
import { useState } from "react";

function Searchartist(token) {
  const [searchKey, setSearchKey] = useState("");
  const [artists, setArtists] = useState([]);

  const searchArtistsBar = async (e) => {
    e.preventDefault();
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: searchKey,
        type: "artist",
      },
    });
    setArtists(data.artists.items);
  };

  const getrandomArtist = async (e) => {
    e.preventDefault();
    const { data } = await axios.get(`https://api.spotify.com/v1/artists/${artists}/top-tracks`);
    console.log(data);

  };

  const renderArtists = () => {
    return artists.map((artist) => (
      <div key={artist.id}>
        {artist.images.length ? (
          <img width={"100%"} src={artist.images[0].url} alt="" />
        ) : (
          <div>No Image</div>
        )}
        {artist.name}
      </div>
    ));
  };

  return (
    <form onSubmit={searchArtistsBar} >
      <input type="text" onChange={(e) => setSearchKey(e.target.value)} />
      <button type={"submit"}>Search</button>
    </form>
    
  );
}

export default Searchartist;
