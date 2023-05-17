import './Welcome.css'
import { Link } from 'react-router-dom'

export default function Welcome() {

    return (
        <>            

            <div className='ParrenSignIn'>

                <p className='welcome'>Welcome</p>
                {/* Down Username inptut */}
                <input type="Email" className='UserName' placeholder=' Email' required/>
                <br></br><br></br>
                {/* Down Password inptut */}
                <input type="password" className='Password' placeholder=' Password' required/>
                <br></br><br></br><a href="./">
                {/* Down Sign In Button */}
                <Link to='/browse'><input className='signIn' type="button" value="Sign In" /></Link>
                </a>
                
                <br></br><br></br>
                <Link to='/forgotPassword' className='Fpassword'>forgot Password?</Link>
                <br></br>
                <Link to='/signUp' className='CaNaccount'>create a new account</Link>
                    
            </div>

            {/* Left Iland */}
            {/* <div className='LeftGreenLabel'><p>MEORA<br></br>DEBI</p></div> */}
            <div className='GreenLabel'><p>MEORA<br></br>DEBI</p></div>

        </>
    )
}