import { useState, useEffect } from 'react';

const SearchPoke = () => {
  const [searchedPoke, setSearchedPoke] = useState(''); // used for variable in route and to trigger change in useEffect every time there's a search
  const [results, setResults] = useState([]);
  const [searching, setSearching] = useState(false); // for whenever user starts putting input to search

  // need to figure out functionality where all instances of 'name':'nidoran?' show up
  useEffect(() => {
    if (searching) { // if theres an input means there's data being inputted by user for searching (means searching is truthy)
      fetch(`http://localhost:8888/pokemon/search?name=${searchedPoke}`) // static endpoint looks like this because used req.query in server
        .then(res => res.json())
        .then(data => {
          if (data.selectedPoke) { // if selectedPoke aka searchedPoke exists in data then execute next line
            setResults([data.selectedPoke]);
          } else { // otherwise execute next line
            setResults([]);
          }
          setSearching(false); // Reset searching state after fetch
        })
        .catch(err => {
          console.error("Failed to fetch data:", err);
          setSearch(false); // Ensure to reset searching state in case of error
        });
    }
  }, [searchedPoke, searching]); // Effect runs when searchedPoke in browser or searching input in search bar changes

  const handleSearch = (e) => {
    e.preventDefault();
    setSearching(true); // Trigger the search
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for a Pokémon"
          value={searchedPoke}
          onChange={(e) => setSearchedPoke(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {results.map((poke, index) => (
          <div key={index}className="square">
            <img src={poke.img} alt={poke.name} />
            <p>{poke.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SearchPoke