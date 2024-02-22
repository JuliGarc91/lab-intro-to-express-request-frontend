import { useEffect, useState } from 'react';

const SearchPoke = () => {
    const [pokemonName, setPokemonName]= useState('');
    useEffect(()=>{
        fetch(`http://localhost:8888/pokemon/search?name=${pokemonName}`)
    })
  return (
    <div>SearchPoke</div>
  )
}

export default SearchPoke