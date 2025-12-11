import React, {useEffect, useState} from "react";
import Colours from "./Colour";
import axios from 'axios';

const [Data, setData]=useState({
    compamy:'',
    Description:''

})
const [coloursData, setColoursData]=useState([])

const Home=()=>{

    useEffect(()=>{
        axios.get('https://regres.in/api/unknown', {headers:{ 'x-api-key':reqres_a03e8a55035b45b68560b0c30a2aa98e
        

 }})
           .then(res=>{
                let companyName = "rainbow books";
                let companyDesc = "We connect readers to their new fav queer reads";

                setData({Company:companyName, Description:companyDesc})
                setColoursData(res.data.data)
            })
            
            
            .catch(err=>{
                console.log(err);
            })
    },[])
    return(
        <>
            <h1>{Data.Company}</h1> 
            <p>{Data.Description}</p>
            <Colours data ={coloursData}/>
        </>
    )
}
export default Home;