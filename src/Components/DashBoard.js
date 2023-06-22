import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../Assets/Styles/dashboard.css"
import {CvItems} from "./subComponents";
import { logOut } from "../Features/Users/usersSlice";

const Dashboard = () => {

    const dispatch = useDispatch();
    const resumeData = useSelector((state) => state.resumeData);
    const user = useSelector((state)=>state.user)

    const Navigate = useNavigate()

    const handleClick = ()=>{
        Navigate("/form")
    }

    const handleLogOut =()=>{
        dispatch(logOut());
    }

    return (
        <div className="dashboard">
            <div className="heading">
                <h1>Dashboard</h1>
                <button onClick={handleLogOut}>Log Out</button>
            </div>

            <div className="itemContainer">

                {resumeData.map((item)=>((user === item.userId && <CvItems key={item.userId} item={item} />)))}

            </div>

            <button className="button" onClick={handleClick}>Add Resume</button>

        </div>
    );
}

export default Dashboard;