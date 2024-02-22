# Search Bar Notes
In `http://localhost:8888/pokemon/search?name=pikachu`

I get this data from the server, so I can use data.selectedPoke when fetching this data for my search useEffect fx

```js
{
"selectedPoke": {
"name": "Pikachu",
"img": "http://img.pokemondb.net/artwork/pikachu.jpg",
"type": [
"Electric"
],
"stats": {
"hp": "35",
"attack": "55",
"defense": "30",
"spattack": "50",
"spdefense": "40",
"speed": "90"
},
"damages": {
"normal": "1",
"fire": "1",
"water": "1",
"electric": "0.5",
"grass": "1",
"ice": "1",
"fight": "1",
"poison": "1",
"ground": "2",
"flying": "0.5",
"psychic": "1",
"bug": "1",
"rock": "1",
"ghost": "1",
"dragon": "1",
"dark": "1",
"steel": "0.5"
},
"misc": {
"classification": "mouse pokemon",
"height": "1’04”",
"weight": "13.2",
"happiness": "70"
}
}
}
```
## This is the useEffect fx fetching the data

```js
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
  ```