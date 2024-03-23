import { useContext, useEffect, useState } from "react";
import "./ResultPage.css";
import { context } from "../Context/UseContextProvider";
import axios from "axios";

function ResultPage() {
    const userInput = useContext(context)
    const  placeInput = userInput?.user;
    const [place, setPlace] = useState<string>("")
    useEffect(() => {
        getPlaceInformation().then(res => setPlace(res));
    }, [])
    
    const getPlaceInformation = async () =>  {
        try {
        return (await axios.get(`/${placeInput}`)).data.data
        } catch(error) {
           return "Place not Found";
        }
    } 
    return <h1> {place} </h1>
}

export default ResultPage;