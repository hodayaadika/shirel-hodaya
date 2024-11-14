import { useState, useEffect } from "react";

function Info(props) {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3000/users/${props.id}`)
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
        console.log(data);
      })
      .catch((error) => console.error("error", error));
  }, [props.id]);

  if (!userData.name) {
    return <div>loading...</div>; 
  }
  return (
    <>
      <div className="user-profile">
        <h2 className="up , font">info: User Profile</h2>

        <p>
          <strong className="info">Name:</strong> {userData.name}
        </p>
        <p>
          <strong className="info">Username:</strong> {userData.username}
        </p>
        <p>
          <strong className="info">Email:</strong> {userData.email}
        </p>

        <h3 className="font">Address</h3>
        <p>
          <strong className="info">Street:</strong> {userData.address.street}
        </p>
        <p>
          <strong className="info">Suite:</strong> {userData.address.suite}
        </p>
        <p>
          <strong className="info">City:</strong> {userData.address.city}
        </p>
        <p>
          <strong className="info">Zipcode:</strong> {userData.address.zipcode}
        </p>
        <p>
          <strong className="info">Geo:</strong> Latitude: {userData.address.geo.lat}, Longitude:{" "}
          {userData.address.geo.lng}
        </p>

        <h3 className="font">Contact Information</h3>
        <p>
          <strong className="info">Phone:</strong> {userData.phone}
        </p>
        <p>
          <strong className="info">Website:</strong>{" "}
          <a id="stupid"
            href={`https://${userData.website}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {userData.website}
          </a>
        </p>

        <h3 className="font">Company</h3>
        <p>
          <strong className="info">Company Name:</strong> {userData.company.name}
        </p>
        <p>
          <strong className="info">Catchphrase:</strong> {userData.company.catchPhrase}
        </p>
        <p>
          <strong className="info">BS:</strong> {userData.company.bs}
        </p>
      </div>
    </>
  );
}

export default Info;
