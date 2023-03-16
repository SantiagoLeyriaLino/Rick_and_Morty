import { useState, useEffect } from "react";
import { Route,Routes,useLocation, useNavigate } from "react-router-dom";
import './App.css'
import Nav from './components/Nav.jsx'
import Cards from './components/Cards.jsx'
import About from "./components/About/about";
import Detail from "./components/Detail/detail";
import Form from "./components/Form/Form";


function App() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const [access, setAccess]=useState(false);
  const navigate = useNavigate();

  const username = "santiagoleyrialino@gmail.com";
  const password = "123asd";

  const login = (userData) =>{
    if (userData.username === username && userData.password === password){
      setAccess(true)
      navigate('/home')
    }
  }

  useEffect(()=>{
    !access && navigate('/')
  },[access])

  const onSearch= (id)=> {
    const URL_BASE = "https://be-a-rym.up.railway.app/api"; 
    const KEY = "44c4ae584784.b53fa8338454b0c4c255";
   
    if(characters.find((char) => char.id===id)) {
      return(alert("Esta id ya está en tus cartas"))}
    fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             setCharacters((oldChars)=>[...oldChars, data]);
          } else {
             window.alert('El personaje con ese ID no existe');
          }
       });
 }

 const onClose = (id) => {
  setCharacters(characters.filter((char) => char.id !== id))
 };

  return (
    <div className='App'>
      {location.pathname === '/' ? <Form login={login} /> : <Nav onSearch={onSearch} />}
      <Routes>
        <Route 
        path="/home" 
        element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailId" element={<Detail />}>Detail</Route>
      </Routes>

    </div>
  )
}

export default App
