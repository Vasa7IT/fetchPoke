import React, { useEffect, useState } from "react";

const PokeCard = ({ name, url }) => {
  const [imgUrl, setImgUrl] = useState("");
  useEffect(() => {
    const fetchPokeImg = async () => {
        try{
      const response = await fetch(url);
      const data = await response.json();
      setImgUrl(data.sprites.front_default);
    }catch(err){
        console.error("Error Fetching image:",err)
    }};
    fetchPokeImg();
  }, [url]);
  return (
    <>
      <div className="pokemon-card">
        <img src={imgUrl} alt={name} />
        <h2 className="lato-regular">{name}</h2>
      </div>
    </>
  );
};

export default PokeCard;
