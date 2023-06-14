import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../context/authContext'
import "./Home.css";


const Home = () => {
  const { userData } = useContext( AuthContext)
  return (
    <div>
      <h1> Bienvenido {userData.name}  {userData.lastName}</h1>
      <Link className='link'  to="/Characters">
        Ver personajes de Rick and Morty

      </Link>
    </div>
  )
}

export default Home