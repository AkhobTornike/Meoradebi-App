import React from "react";

import Header from "../Header/Header";

import { useState , useEffect } from "react";


function MyProfile() {
    const signedInUserId = JSON.parse(sessionStorage.getItem('signedInUserId'))
    const [userdata, setUserdata] = useState([])
    console.log('signedInUserId - profile')
    console.log(signedInUserId)
    useEffect(() => {
        const userData = localStorage.getItem("usersData")
        setUserdata(JSON.parse(userData))
    }, [])

    const evenUserData = userdata ? userdata.filter((usr) => usr.id === signedInUserId) : [];

    console.log("evenuserdata")
    console.log(evenUserData)

    return (
        <>
            <Header/>
            <h1>Profile</h1>
            {evenUserData ? evenUserData.map((user) => {
                return (
                    <>
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
                    </>
                )
            }) : (
                <>
                    <h1>yleooo</h1>
                </>
            )}
        </>
    )
}

export default MyProfile