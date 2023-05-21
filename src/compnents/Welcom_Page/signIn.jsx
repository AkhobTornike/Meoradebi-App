import React from "react";
import { useState, useEffect } from "react";



function SignIn() {
    const [users, setUsers] = useState([])

useEffect(() => {
    const storedUsersData = localStorage.getItem("usersData")
    if (storedUsersData) {
        setUsers(JSON.parse(storedUsersData))
    } else {
        fetchUsersData()
    }
}, [])

const fetchUsersData = async () => {
    try {
        const response = await fetch ('https://fakestoreapi.com/users/')
        console.log(response)
        const jsonUsersData = await response.json()
        setUsers(jsonUsersData)
        localStorage.setItem("usersData", JSON.stringify(jsonUsersData))
    } catch {
        console.error('Error fetching data:', error)
    }
}

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const [error, setError] = useState("")

const handleSignIn = () => {
    const user = usersData.find((user) => user.email === email && user.password === password)

    if (user) {
        console.log("User signed in succesfully")
    } else {
        setError("invalidEmail or password")
    }
}
    return (
        <>
        
        </>
    )
}

export default SignIn