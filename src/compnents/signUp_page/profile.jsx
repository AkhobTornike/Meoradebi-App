import React from "react";

import Header from "../Header/Header";

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
                      <th> Username:</th> <td>{user.username}</td>
                  </tr>
                  <tr>
                    <th> First name:</th> <td>{user.name.firstname}</td>
                  </tr>
                  <tr>
                    <th> Last name:</th><td>{user.name.lastname}</td>
                  </tr>
                  <tr>
                    <th> Email:</th> <td>{user.email}</td>
                  </tr>
                  <tr>
                    <th> Adress:</th> <td>{user.address.street}</td>
                  </tr>
                  <tr>
                    <th> Phone:</th> <td>{user.phone}</td>
                  </tr>
                </table>
              </div>
            </>
          );
        })
      ) : (
        <>
          <h1>You Are Not Sign In</h1>
        </>
      )}
    </>
  );
}

export default MyProfile;
