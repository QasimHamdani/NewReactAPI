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
        axios.get('https://collectionapi.metmuseum.org/public/collection/v1/objects' 
        
)
           
{
	"total": 471581,
	"objectIDs": [
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		10,
		// more results ...
	]
}





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