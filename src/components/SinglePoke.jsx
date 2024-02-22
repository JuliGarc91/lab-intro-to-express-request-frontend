import { useParams } from "react-router-dom";
const SinglePoke = ({ pokemon }) => {
    const { id } = useParams(); // kind of like req.param on server side
    const poke = pokemon[id]; // made key for index
  
    return ( // if poke is truthy ternary to display the pokemon (it's truthy if it exists at selected index - user selects it by clicking button)
    <div>
        {poke ? (
            <>
                <img src={poke.img} alt={poke.name} />
                <p>Name: {poke.name}</p>
            </>
            ) : (
            <p>Pokémon not found</p>
            )}
    </div>
    );
  };

export default SinglePoke;

// --- kinda like this fx on server side ---
/*
  app.get('/pokemon/:indexOfArr',(req, res) => { // variables NEEDDDD to match!!!
    // use req.params
    // make key for index
    const { indexOfArr } = req.params
    if (pokemon[indexOfArr]) {
        res.json({ pokemon: pokemon[indexOfArr] })
    } else {
        res.json({
            message: `No pokemon found at ${indexOfArr}`
        })
    }
})
*/