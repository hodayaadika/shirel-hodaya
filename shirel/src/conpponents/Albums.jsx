import { useState, useEffect } from "react";
import Photos from "./Photos";

function Albums() {
  const [album, setAlbum] = useState([]);
  const [showGreeting, setShowGreeting] = useState(false);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const userId = currentUser ? currentUser.id : null;

  const handleClick = () => {
    setShowGreeting(true);
  };

  useEffect(() => {
    fetch(`http://localhost:3000/albums?userId=${userId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAlbum(data);
      })
      .catch((error) => console.error("שגיאה בטעינת האלבומים:", error));
  }, [userId]);
  console.log(album);
  return (
    <>
      <h1 className="up , font">Albums</h1>
      <div>
        {album.map((album) => (
          <>
            <button className="button" onClick={handleClick}>{album.title}</button>
            {showGreeting && <Photos albumId={album.id} />}
          </>
        ))}
      </div>
    </>
  );
}

export default Albums;
