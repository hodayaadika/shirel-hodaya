import { useState, useEffect } from "react";

function Info() {
  const [userData, setUserData] = useState({});

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const userId = currentUser ? currentUser.id : null;

  useEffect(() => {
    fetch(`http://localhost:3000/users/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
        console.log(data);
      })
      .catch((error) => console.error("error", error));
  }, [userId]);

  if (!userData.name) {
    return <div>loading...</div>; 
  }
  return (
    <>
      <div className="user-profile">
        <h2>info: User Profile</h2>

        <p>
          <strong>Name:</strong> {userData.name}
        </p>
        <p>
          <strong>Username:</strong> {userData.username}
        </p>
        <p>
          <strong>Email:</strong> {userData.email}
        </p>

        <h3>Address</h3>
        <p>
          <strong>Street:</strong> {userData.address.street}
        </p>
        <p>
          <strong>Suite:</strong> {userData.address.suite}
        </p>
        <p>
          <strong>City:</strong> {userData.address.city}
        </p>
        <p>
          <strong>Zipcode:</strong> {userData.address.zipcode}
        </p>
        <p>
          <strong>Geo:</strong> Latitude: {userData.address.geo.lat}, Longitude:{" "}
          {userData.address.geo.lng}
        </p>

        <h3>Contact Information</h3>
        <p>
          <strong>Phone:</strong> {userData.phone}
        </p>
        <p>
          <strong>Website:</strong>{" "}
          <a
            href={`https://${userData.website}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {userData.website}
          </a>
        </p>

        <h3>Company</h3>
        <p>
          <strong>Company Name:</strong> {userData.company.name}
        </p>
        <p>
          <strong>Catchphrase:</strong> {userData.company.catchPhrase}
        </p>
        <p>
          <strong>BS:</strong> {userData.company.bs}
        </p>
      </div>
    </>
  );
}

export default Info;
