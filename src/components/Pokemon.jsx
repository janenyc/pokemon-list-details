import { useState, useEffect } from "react";

function Pokemon({setSelectPokemonId, pokemonList, setPokemonList}) {


    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon');
                const data = await response.json();

                setPokemonList(data.results); 
                
            } catch (error) {
                console.error("Failed to fetch Pokemon:", error);
            }
        };

        fetchPokemon();
    }, []);

    return (
        <>
            <h1>Pokemon list</h1>
            <ul>
                {pokemonList.map((pokemon) => (
                    <li key={pokemon.name} onClick = {()=>setSelectPokemonId(pokemon.name)}>{pokemon.name}</li> 
                   
                ))}
            </ul>
        </>
    );
}

export default Pokemon;
