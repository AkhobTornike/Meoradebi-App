import React from "react";

import Header from "../Header/Header";

import { useState , useEffect } from "react";
import { signedInUserId } from '../Welcom_Page/welcome';


function MyProfile() {
    const [userdata, setUserdata] = useState([])

    useEffect(() => {
        const userData = localStorage.getItem("usersData")
        setUserdata(JSON.parse(userData))
    }, [])

    const evenUserData = userdata.filter((usr) => usr.id === signedInUserId)
    console.log("evenUserData")
    console.log(evenUserData)

    return (
        <>
            <Header/>
            <h1>Profile</h1>
            {evenUserData.map((user) => {
                return (
                    <>
          <React.Fragment key={user.id}>
            <p>{user.address.city}</p>
            <p>{user.address.street}</p>
            <p>{user.address.number}</p>
            <p>{user.address.zipcode}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.username}</p>
            <p>{user.name.firstname}</p>
            <p>{user.name.lastname}</p>
            <p>{user.password}</p>
          </React.Fragment>
                    </>
                )
            })}
        </>
    )
}

export default MyProfile