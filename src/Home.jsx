import React, { useEffect, useState } from "react";
//import Colours from "./Colour";
import axios from "axios";

const Home = () => {
  const [art, setArt] = useState({
    
  });

  const [coloursData, setColoursData] = useState([]);

  useEffect(() => {
    axios.get("https://collectionapi.metmuseum.org/public/collection/v1/objects/23662")
      
        .then((res) => {
           setArt(res.data);
           setLoading(false);
           console.log(res);

          //  setData({ company: companyName, description: companyDesc });

        
          //  setColoursData(res.data.objectIDs); 
      })
      .catch((err) => {

        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading</p>
  if (!art) return <p>No artwork found.</p>

  
};

export default Home;