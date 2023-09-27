import { useEffect, useState } from "react";
import { Route,Routes,useNavigate } from "react-router-dom";
import axios from "axios";
import "./LoginPage.css";
 interface responseType{
  Success: boolean,
  data: string
};
function LoginPage() {
  const [userName, setUserName] = useState<responseType>({} as responseType);
  const [userInput, setuserInput] = useState<string>();
  const navigate = useNavigate();
  useEffect(() => {
    getUserName().then(response => setUserName(response as unknown as responseType));
  }, [])
  const navigateToFirstPage = () => {
    navigate("/ResultPage")
  }
  const getUserName = async () => {
    return (await axios.get("http://localhost:5000/")).data;
  }
  return (
    <div className="form">
      <h1> GoTrip </h1>
      {userInput != null && userInput!=="" ? <p> {userName.data} <br /> you have searched : {userInput}</p> :  <p> {userName.data} <br /> you have not searched {userInput}</p> } 
      <input type="text" placeholder="Search Places....." onChange={e => setuserInput(e.target.value)}/>
      <br/>
      <button id="search" type="button" onClick={navigateToFirstPage} > Search </button>
    </div>
  );
}
export default LoginPage;
