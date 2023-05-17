import { useState } from 'react'
import './forgot.css'
import ReceivePassword from './receivePassword'

export default function Forgot() {

    const [pass, setPass] = useState(false)
    const [inputValue, setInputValue] = useState("");


    return (
        <>            

            <div className='ParrenSignIn'>
                <p className='welcome'>Welcome</p>

                {/* <input type="Email" className='UserName' placeholder=' Email' required/> */}
                <input type='Email' value={inputValue} onChange={(e) => setInputValue(e.target.value)} className='UserName' placeholder='Email' required/>
                <br></br><br></br>
                {/* <input type="button" className="Sent">Sent</input> */}
                <input onClick={() => {
                    setPass(true);
                    setInputValue("");
                }} type="button" value="Sent" className="Sent"/>
                {pass && <ReceivePassword/>}

            </div>

            {/* Left Iland */}
            <div className='GreenLabel'><p>MEORA<br></br>DEBI</p></div>

        </>
    )
}