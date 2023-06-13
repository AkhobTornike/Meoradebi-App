import React from "react";

import Header from "../Header/Header";

import "../Profile_page/profile.css";

import { useState, useEffect } from "react";

function MyProfile() {
  const signedInUserId = JSON.parse(sessionStorage.getItem("signedInUserId"));
  const [userdata, setUserdata] = useState([]);
  console.log("signedInUserId - profile");
  console.log(signedInUserId);
  useEffect(() => {
    const userData = localStorage.getItem("usersData");
    setUserdata(JSON.parse(userData));
  }, []);

  const evenUserData = userdata
    ? userdata.filter((usr) => usr.id === signedInUserId)
    : [];

  console.log("evenuserdata");
  console.log(evenUserData);

  return (
    <>
      <Header />

      {evenUserData ? (
        evenUserData.map((user) => {
          return (
            <>
              <div className="profile-info">
                <h1>Profile</h1>
                <table className="profile-table">
                  <tr>
                    <tH>Name: </tH>
                    <td>{user.address.city}</td>
                  </tr>
                  <tr>
                    <th> Adress:</th> <td>{user.address.street}</td>
                  </tr>
                  <tr>
                    <th> Adress number:</th> <td>{user.address.number}</td>
                  </tr>
                  <tr>
                    <th> Zip code:</th> <td>{user.address.zipcode}</td>
                  </tr>
                  <tr>
                    <th> Email:</th> <td>{user.email}</td>
                  </tr>
                  <tr>
                    <th> Phone:</th> <td>{user.phone}</td>
                  </tr>
                  <tr>
                    <th> Username:</th> <td>{user.username}</td>
                  </tr>
                  <tr>
                    <th> First name:</th> <td>{user.name.firstname}</td>
                  </tr>
                  <tr>
                    <th> Last name:</th><td>{user.name.lastname}</td>
                  </tr>
                  <tr>
                    <th> Password:</th> <td>{user.password}</td>
                  </tr>
                </table>
              </div>
            </>
          );
        })
      ) : (
        <>
          <h1>yleooo</h1>
        </>
      )}
    </>
  );
}

export default MyProfile;
