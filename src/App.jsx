import { BrowserRouter, Routes, Route} from "react-router-dom"
import Characters from "./components/pages/characters/Characters";
import Home from "./components/pages/home/Home";
import Login from "./components/pages/login/Login";
import AuthContextProvider from "./context/authContext";

function App() {
  return(
    
      <BrowserRouter>
      <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/characters" element={<Characters/>} />
      </Routes>
      </AuthContextProvider>
      </BrowserRouter>
 
    
      
  ) 
  
}

export default App
