import { useState } from 'react';
// import './signup.css'
import { Link } from 'react-router-dom';

export default function SignUp() {
    const storeUsersData = JSON.parse(localStorage.getItem('usersData'));
    const lastUserID = storeUsersData ? storeUsersData[storeUsersData.length - 1].id : 10;

    const [newuser, setNewuser] = useState({
        address: "",
        email: "",
        id: lastUserID + 1, // Automatically generate id
        password: "",
        name: { firstname: "", lastname: "" },
        phone: "",
        username: "",
    });

    const [passwordError, setPasswordError] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'firstname' || name === 'lastname') {
            setNewuser((prevUser) => ({
                ...prevUser,
                name: {
                    ...prevUser.name,
                    [name]: value,
                },
            }));
        } else {
            setNewuser((prevUser) => ({
                ...prevUser,
                [name]: value,
            }));
        }
    };

    const Addnew = () => {
        if (newuser.password !== newuser.confirmPassword) {
            setPasswordError(true);
            return;
        }

        const updatedUserList = [...storeUsersData, newuser];
        localStorage.setItem('usersData', JSON.stringify(updatedUserList));

        // Perform any other necessary actions after adding the user

        // Reset the form
        setNewuser((prevUser) => ({
            ...prevUser,
            id: prevUser.id + 1, // Increment id for the next user
            address: "",
            email: "",
            password: "",
            confirmPassword: "",
            name: { firstname: "", lastname: "" },
            phone: "",
            username: "",
        }));
    };

    return (
        <>
            <div className='ParrenSignUp'>
                <p className='welcome_signUp'>Welcome</p>
                <div className='namediv'>
                    <input
                        type="text"
                        className='firstname'
                        placeholder=' firstname : '
                        name='firstname'
                        value={newuser.name.firstname}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        className='lastname'
                        placeholder=' lastname : '
                        name='lastname'
                        value={newuser.name.lastname}
                        onChange={handleChange}
                        required
                    />
                </div>
                <input
                    type="Email"
                    className='email'
                    placeholder=' Email : '
                    name='email'
                    value={newuser.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    className='password'
                    placeholder=' Password : '
                    name='password'
                    value={newuser.password}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    className="password"
                    placeholder="Confirm Password:"
                    name="confirmPassword"
                    value={newuser.confirmPassword}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    className='address'
                    placeholder=' Adress : '
                    name='address'
                    value={newuser.address}
                    onChange={handleChange}
                    required
                />
                <input
                    type="phone"
                    className='phone'
                    placeholder=' Phone : '
                    name='phone'
                    value={newuser.phone}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    className='username'
                    placeholder=' Username : '
                    name='username'
                    value={newuser.username}
                    onChange={handleChange}
                    required
                />
                <br />
                <input
                    className='signUp'
                    onClick={Addnew}
                    type="button"
                    value="Sign Up"
                />
                <br /><br />
                <Link to='/' className='BackMain'>already have an account?</Link>
            </div>
            <div className='GreenLabel'><p className='meoradebi'>MEORA<br></br>DEBI</p></div>
        </>
    );
}
