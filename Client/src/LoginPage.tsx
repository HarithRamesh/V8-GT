import { useEffect, useState } from "react";
import axios from "axios";
import "./LoginPage.css";
import searchIcon from "./search icon.png"
 interface responseType{
  Success: boolean,
  data: string
};
function LoginPage() {
  const [userName, setUserName] = useState<responseType>({} as responseType);
  const [userInput, setuserInput] = useState<string>();
  useEffect(() => {
    getUserName().then(response => setUserName(response as unknown as responseType));
  }, [])
  const getUserName = async () => {
    return (await axios.get("http://localhost:5000/")).data;
  }
  return (
    <div className="form">
      <h1> GoTrip </h1>
      {userInput != null && userInput!=="" ? <p> {userName.data} <br /> you have searched : {userInput}</p> :  <p> {userName.data} <br /> you have not searched {userInput}</p> } 
      <input type="text" placeholder="Search Places....." onChange={e => setuserInput(e.target.value)} />
      <br/>
      <button id="search" type="button"> Search </button>
    </div>
  );
}
export default LoginPage;
