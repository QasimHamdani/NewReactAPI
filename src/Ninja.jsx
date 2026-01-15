import React, { useEffect, useState } from "react";
//import Colours from "./Colour";
import axios from "axios";
import {Link} from "react-router-dom";

const Ninja = () => {
  const [art, setArt] = useState(null); //
  const [loading, setLoading] = useState(true); //checks to see if the api is still running

    

  

  useEffect(() => {
    axios.get("https://collectionapi.metmuseum.org/public/collection/v1/objects/6792")
      
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
return (
    <>
     <div style={{ marginBottom: 16 }}>
        <Link to="/word">Go to Previous Slide</Link>
         <p></p>
        <Link to="/tree">Go to Next Slide</Link>
      </div>


      <h2>{art.title}</h2>

      <p>
        <strong>{art.artistDisplayName || "Unknown artist"}</strong>
        {art.objectDate && ` , ${art.objectDate}`} 
      </p>
      

      {art.primaryImageSmall && (
        <img
          src={art.primaryImageSmall}
          alt={art.title}
          style={{ maxWidth: 400 }}
        />
      )}
      {art.additionalImages?.length > 0 && (
        <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
          {art.additionalImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${art.title} ${index + 1}`}
              style={{ width: 150 }}
            />
          ))}
        </div>
              )}
    </>

    
  );
  
};//?. is optional chaining so if nothing is there it 
// will be undefined instead of an error

//`` $ is template literals allows me to put variables into strings(string interpolation)


export default Ninja;