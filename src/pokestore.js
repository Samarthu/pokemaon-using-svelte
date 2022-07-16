import { writable } from "svelte/store";

export const pokemon = writable([]);
let pokemonDetails ={};
let loaded = false;
export const fetchpokemonDetails = async()=>{
    if(loaded) return;
    const url = `https://pokeapi.co/api/v2/pokemon?limit=150`;
    const res = await fetch(url);
    const data = await res.json();
    const loadedpokemon = data.results.map((d,i)=>({
        "name" : d.name,
        "id": i + 1,
        "image": `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+ 1}.png`
    }));
    pokemon.set(loadedpokemon);
    loaded =true;
};
fetchpokemonDetails();

export const getPokemonById = async (id) =>{
    if(pokemonDetails[id]) return pokemonDetails[id];
    try{
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const res = await fetch(url);
        const data = await res.json();
        pokemonDetails[id] = data;
		return data;
    }
    catch(e) {
        console.log(e);
        return null;
    }
}

