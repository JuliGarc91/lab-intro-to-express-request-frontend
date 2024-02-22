import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import SinglePoke from './components/SinglePoke';
import SearchPoke from './components/SearchPoke';
import NavBar from './components/NavBar';


const App = () => {
  const [pokemon, setPokemon] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8888/pokemon")
    .then((res) => res.json())
    .then((data) => setPokemon(data))
  }, [])
  // console.log(pokemon)
  const handleButtonClick = (index) => {
    navigate(`/pokemon/${index}`)
  }

  return (
  <>
  <NavBar />
  <Routes>
    <Route path='/'element={<div>Welcome to the Pokémon App</div>}/>
      <Route path='/pokemon' element={
        <div className='container'>
          {
            pokemon.length > 0 &&
            pokemon.map((singlePoke, index)=>(
              <div key={index} className='square'>
              <img src={singlePoke.img} alt={singlePoke.name}/>
              <button
              onClick={()=>handleButtonClick(index)}>Click to see Attributes of {singlePoke.name}</button>
              </div>
            ))
          }
        </div>
        } />
      <Route path='/pokemon/search' element={<SearchPoke/>} />
      <Route path='/pokemon/:id' element={<SinglePoke pokemon={pokemon} />} />
    </Routes>
    </>
  )
}

export default App

/* Frontend:
Fork & Clone the Lab Intro to Express Request Frontend.

Setup your React environment

Make a fetch call to your backend, in your App.jsx, that GETS all of the pokemon.

For each pokemon, display the image and any information of your choice on the view.
*/