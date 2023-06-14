import React, { useEffect, useState } from 'react'
import axios from "axios"
import {Typography } from '@mui/material'
import CardCharacter from '../../common/cardCharacter/CardCharacter'
import "./Characters.css"

const Characters = () => {

  const[characters, setCharacters] = useState([])

 useEffect(()=>{
    /* fetch("https://rickandmortyapi.com/api/character")
    .then(res => res.json())
    .then(res => setCharacters(res.results))  */
    axios.get("https://rickandmortyapi.com/api/character")
        .then ( res => setCharacters(res.data.results))
 }, []) 
 console.log(characters)

  return (
    <>
    <h2 align= "center">Personajes</h2>
    <div style={{
      width: "100%",
      display: 'flex',
      flexWrap:  "wrap",
      justifyContent: "center",
      alignItems: "center",
      gap: "20px", 
      padding: "30px"

    }}>
    {
      characters.map((personaje)=> {
        return(
         <CardCharacter personaje={personaje} key={personaje.id} />
        )
      })
    }
</div>

    </>
    
  )
}

export default Characters