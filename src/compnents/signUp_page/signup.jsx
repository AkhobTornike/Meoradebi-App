import { useState } from 'react';
import './signup.css'
import { Link } from 'react-router-dom'


export default function SignUp() {
    const storeUsersData = JSON.parse(localStorage.getItem('usersData'))
    const lastUserID = storeUsersData ? storeUsersData[storeUsersData.length - 1].id : 10;
    const [counter, setCounter] = useState(lastUserID)

    const [newuser, setNewuser] = useState({
        address: "",
        email: "",
        id: "",
        password: "",
        name: {firstname: "", lastname: ""},
        phone: "",
        username: "",

    })

    const handleChange = (e) => {
        const { name, value } = e.target;
      
        setNewuser((prevUser) => ({
          ...prevUser,
          [name]: value,
        }));
      };

      const Addnew = () => {
        const updateUser = [

            ...storeUsersData,
            {
                ...newuser,
                id: counter + 1,
            },
        ]
        setCounter(counter +1)
        console.log(updateUser)
        localStorage.setItem('usersData', JSON.stringify(updateUser))
      }
      console.log(storeUsersData);

    return (
        <>            

            <div className='ParrenSignIn'>

                <p className='welcome'>Welcome</p>
                <div className='namediv'>
                    <input 
                        type="text" 
                        className='firstname' 
                        placeholder=' username : '
                        name='firstname'
                        value={newuser.name.username}
                        onChange={handleChange}
                        required
                    />
                    <input 
                        type="text" 
                        className='lastname' 
                        placeholder=' lastName : '
                        name='lastName' 
                        value={newuser.name.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                {/* <br/> */}
                {/* Down Username inptut */}
                <input 
                    type="Email" 
                    className='email' 
                    placeholder=' Email : '
                    name='email'
                    value={newuser.email}
                    onChange={handleChange}
                    required
                />
                {/* <br/><br/> */}
                {/* Down Password inptut */}
                <input 
                    type="password" 
                    className='password' 
                    placeholder=' Password : '
                    name='password'
                    value={newuser.password}
                    onChange={handleChange}
                    required
                />
                {/* <br/><br/> */}
                {/* Down Password Confim inptut */}
                <input 
                    type="password" 
                    className='password' 
                    placeholder=' Confrim Password : ' 
                    required
                />
                {/* <br/><br/> */}
                <input 
                    type="text" 
                    className='address' 
                    placeholder=' Adress : '
                    name='address'
                    value={newuser.address}
                    onChange={handleChange}
                    required
                />
                {/* <br/><br/> */}
                <input 
                    type="phone" 
                    className='phone' 
                    placeholder=' Phone : '
                    name='phone'
                    value={newuser.phone}
                    onChange={handleChange}
                    required
                />
                {/* <br/><br/> */}
                <input 
                    type="text" 
                    className='username' 
                    placeholder=' Username : '
                    name='username'
                    value={newuser.username}
                    onChange={handleChange}
                    required
                />
                {/* Down Sign In Button */}
                {/* <br/><br/> */}
                <a href="./">
                <input className='signUp' onClick={() => Addnew()} type="button" value="Sign Up" />
                </a>
                {/* <br/><br/> */}
                <Link to='/' className='BackMain' href>already have an account?</Link>

            </div>

            {/* Left Iland */}
            <div className='GreenLabel'><p className='meoradebi'>MEORA<br></br>DEBI</p></div>

        </>
    )
}