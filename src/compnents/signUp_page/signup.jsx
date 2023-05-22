import './signup.css'
import { Link } from 'react-router-dom'


export default function SignUp() {

    return (
        <>            

            <div className='ParrenSignIn'>

                <p className='welcome'>Welcome</p>
                {/* Down Username inptut */}
                <input type="Email" className='UserName' placeholder=' Email : ' required/>
                <br></br><br></br>
                {/* Down Password inptut */}
                <input type="password" className='Password' placeholder=' Password : ' required/>
                <br></br><br></br>
                {/* Down Password Confim inptut */}
                <input type="password" className='Password' placeholder=' Confrim Password : ' required/>
                {/* Down Sign In Button */}
                <br></br><br></br><a href="./">
                <input className='signIn' type="button" value="Sign In" />
                </a>

                <br></br><br></br>
                <Link to='/' className='BackMain' href>already have an account?</Link>

            </div>

            {/* Left Iland */}
            <div className='GreenLabel'><p className='meoradebi'>MEORA<br></br>DEBI</p></div>

        </>
    )
}