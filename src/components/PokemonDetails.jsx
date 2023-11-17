import { useEffect, useState } from "react";

function PokemonDetails({selectPokemonId, setSelectPokemonId}){
const[pokemonDetails, setPokemonDetails] = useState(null)

useEffect(()=>{
    const fetchPokemonDetails = async () =>{
        try{
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${selectPokemonId}`)
            const data = await response.json()
            setPokemonDetails(data)
        }catch(error){
            console.error("error", error)
        }
    }
    if(selectPokemonId){
        fetchPokemonDetails()
    }
}, [selectPokemonId])

    return (
    pokemonDetails ? (
        <>
        <button onClick={()=>{
            setSelectPokemonId(null)
        }}>Back</button>
            <h1>Pokemon details for {pokemonDetails.name}</h1>
        <img src = {pokemonDetails.sprites.front_default} />
        <h3>Height: {pokemonDetails.height}</h3>
        <h3>Weight: {pokemonDetails.weight}</h3>
        </>
    ) :(
        <h2>Loading...</h2>
      )
    
   )
}
export default PokemonDetails