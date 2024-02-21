import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import SinglePoke from './components/SinglePoke';


const App = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8888/pokemon")
    .then((res) => res.json())
    .then((data) => setPokemon(data))
  }, [])
  // console.log(pokemon)
  return (
  <Routes>
    <Route path='/'element={<div>Welcome to the Pokémon App</div>}/>
      <Route path='/pokemon' element={
        <div>
          {
            pokemon.length > 0 &&
            pokemon.map((singlePoke, index)=>(
              <div key={index}>
              <img src={singlePoke.img} alt={singlePoke.name}/>
              <button>Click to see Attributes of {singlePoke.name}</button>
              </div>
            ))
          }
        </div>
        } />
      <Route path='/pokemon/:indexOfArr' element={<SinglePoke pokemon={pokemon} />} />
    </Routes>
  )
}

export default App

/* Frontend:
Fork & Clone the Lab Intro to Express Request Frontend.

Setup your React environment

Make a fetch call to your backend, in your App.jsx, that GETS all of the pokemon.

For each pokemon, display the image and any information of your choice on the view.
*/