import { useState } from 'react'
import Pokemon from './components/Pokemon'
import PokemonDetails from './components/PokemonDetails'

function App() {
  const [selectPokemonId, setSelectPokemonId] = useState(null)
  const [pokemonList, setPokemonList] = useState([]);
  const [name, setName] = useState('')
const [image, setImage] = useState('')

  return (
    <>
    <form>
<label>Name: </label><input name ='name' onChange={(event)=> setName(event.target.value)}></input> 
<label>Image: </label><input name ='image' onChange={(event)=> setImage(event.target.value)}></input>
   <button onClick={(event)=>{
event.preventDefault()
setPokemonList([...pokemonList, {name,image}])
   }}>Submit</button>
    </form>
    {selectPokemonId ? (<PokemonDetails selectPokemonId={selectPokemonId} setSelectPokemonId={setSelectPokemonId}/>) : (<>
    <Pokemon setSelectPokemonId={setSelectPokemonId} pokemonList={pokemonList}setPokemonList={setPokemonList}/> </>)}
   
    </>
  )
}

export default App
