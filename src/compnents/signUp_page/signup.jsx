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

      const validateForm = () => {
        const requiredFields = ['firstname', 'lastname', 'email', 'password', 'address', 'phone', 'username'];
    
          for (const field of requiredFields) {
            if (newuser[field]) {
              alert(`Please enter ${field} field`);
              return;
            }
          }
      
          return true;
      };

      const Addnew = () => {
        if (!validateForm()) {
          alert('Please fill in all fields');
          return;
        }
        
        if (newuser.password !== newuser.confirmPassword) {
          alert('Passwords do not match');
          return;
        }
    
        const { confirmPassword, ...userWithoutConfirmPassword } = newuser;
    
        const updateUser = [
          ...storeUsersData,
          {
            ...userWithoutConfirmPassword,
            id: counter + 1,
          },
        ];
        setCounter(counter + 1);
        console.log(updateUser);
        localStorage.setItem('usersData', JSON.stringify(updateUser));
      };

    return (
        <>            

            <div className='ParrenSignIn'>

                <p className='welcome'>Welcome</p>
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
                <a href="./">
                <input className='signUp' onClick={() => Addnew()} type="button" value="Sign Up" />
                </a>
                <br/><br/>
                <Link to='/' className='BackMain' href>already have an account?</Link>
            </div>
            <div className='GreenLabel'><p className='meoradebi'>MEORA<br></br>DEBI</p></div>

        </>
    )
}