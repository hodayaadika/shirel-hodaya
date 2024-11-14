import { useState, useEffect } from "react";
import Photos from "./Photos";

function Albums(props) {
  const [album, setAlbum] = useState([]);
  const [showGreeting, setShowGreeting] = useState(false);

  const handleClick = () => {
    setShowGreeting(true);
  };

  useEffect(() => {
    fetch(`http://localhost:3000/albums?userId=${props.userId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAlbum(data);
      })
      .catch((error) => console.error("שגיאה בטעינת האלבומים:", error));
  }, [props.userId]);
  console.log(album);
  return (
    <>
      <h1>Albums</h1>
      <div>
        {album.map((album) => (
          <>
            <button onClick={handleClick}>{album.title}</button>
            {showGreeting && <Photos albumId={album.id} />}
          </>
        ))}
      </div>
    </>
  );
}

export default Albums;
