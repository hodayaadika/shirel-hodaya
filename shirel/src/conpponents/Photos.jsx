import {useEffect, useState} from 'react'

const Photos = (props) => {

       const [photo, setPhoto] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/photos?albumId=${props.albumId}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setPhoto(data);
        })
        .catch((error) => console.error("שגיאה בטעינת האלבומים:", error));
    }, [props.albumId]);
    console.log("Album ID:", props.albumId);

  return (
    <>
        {photo.map((photo) => (
            //  <button onClick={handleClick}>{album.title}</button>
            // {showGreeting && <Photos albumId={album.id} />}
      
          <img src={photo.thumbnailUrl} alt={photo.title} />
        ))}
    </>
  );
}

export default Photos
