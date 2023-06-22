import { useNavigate } from "react-router-dom";
import OtpInput from 'react-otp-input';
import { useState } from "react";

import "../../Assets/Styles/common.css"


const Otp = () => {


    const [number, setNumber] = useState("");
    const [otp, setOtp] = useState('');
    const [validate, setValidate] = useState(false);
    const Navigate = useNavigate();


    const handleAdd = (e) => {

        e.preventDefault();
        setValidate(false);

        if (otp !== process.env.REACT_APP_OTP) {
            setValidate(true);
            return;
        }

        if (otp.length < 4 || otp.length > 4 || otp === "") {
            setValidate(true);
            return;
        } else {
            Navigate("/dashboard")
        }
    }

    return (
        <div className="Otp">
            <div className="OtpContainer">
                <div className="leftBlock">
                    <img src={require("../../Assets/Images/otp.png")} alt="#" />
                </div>

                <div className="rightBlock">

                    <div className="formSection">
                        <h1>Otp</h1>
                        <form onSubmit={handleAdd}>
                            {/* <label>Enter Otp</label>
                            <input type="text" onChange={(e) => setNumber(e.target.value)} placeholder="0000" /> */}
                            

                            <OtpInput
                                value={otp}
                                onChange={setOtp}
                                numInputs={4}
                                renderSeparator={<span>-</span>}
                                renderInput={(props) => <input {...props} />}
                            />
                            {validate && <p>Please Enter 4 Digit Otp OR Otp Is Not Valid</p>}
                            <button>LogIn</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Otp;