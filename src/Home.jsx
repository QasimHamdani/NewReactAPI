import React, { useEffect, useState } from "react";
import Colours from "./Colour";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState({
    company: "",
    description: "",
  });

  const [coloursData, setColoursData] = useState([]);

  useEffect(() => {
    axios
      .get("https://collectionapi.metmuseum.org/public/collection/v1/objects")
      
        .then((res) => {
           const companyName = "rainbow books";
           const companyDesc = "We connect readers to their new fav queer reads";

           setData({ company: companyName, description: companyDesc });

        
           setColoursData(res.data.objectIDs); 
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1>{data.company}</h1>
      <p>{data.description}</p>
      <Colours data={coloursData} />
    </>
  );
};

export default Home;