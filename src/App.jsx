import { useEffect, useState } from 'react'


const App = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:8888/pokemon")
    .then((res) => res.json())
    .then((data) => setPokemon(data))
  }, [])
  // console.log(pokemon)
  return (
    <div>
      {
        pokemon.length > 0 &&
        pokemon.map((singlePoke, index)=>(
          <div key={index}>
          <img src={singlePoke.img} alt={singlePoke.name}/>
          </div>
        ))
      }
    </div>
  )
}

export default App

/* Frontend:
Fork & Clone the Lab Intro to Express Request Frontend.

Setup your React environment

Make a fetch call to your backend, in your App.jsx, that GETS all of the pokemon.

For each pokemon, display the image and any information of your choice on the view.
*/