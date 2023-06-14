import React, {  useContext } from 'react'
import "./Login.css"
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../context/authContext'

const Login = () => {

const {userData,setUserData} = useContext(AuthContext)  

const navigate = useNavigate()

const handleSubmit = (event)=>{
    event.preventDefault() 
    /* console.log(event.target.elements.name.value)
    console.log(event.target.elements.lastName.value) */
    setUserData(
       {
        ...userData,
        name: event.target.elements.name.value,
        lastName: event.target.elements.lastName.value
      })
      navigate("/home") 
}



  return (
    <div>
      <h2>Ingresar datos</h2>
      <form className='form-container' action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='Ingresa tu nombre' name='name'/>
        <input type="text" placeholder='Ingresa tu apellido' name='lastName' />
        <button type='submit'>Ingresar</button>
      </form>
    </div>
    
  )
}

export default Login