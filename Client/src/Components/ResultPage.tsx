import { useContext, useEffect, useState } from "react";
import "./ResultPage.css";
import { context } from "../Context/UseContextProvider";
import axios from "axios";

function ResultPage() {
    const user = useContext(context)
    const [place, setPlace] = useState<string>("No Place Found")
    useEffect(() => {
        getPlaceInformation().then(res => setPlace(res as string));
    }, [])
    
    const getPlaceInformation = async () =>  {
        return (await axios.get(`http://localhost:5000/Bengaluru`)).data 
    } 
    return <h1> {place} </h1>
}

export default ResultPage;