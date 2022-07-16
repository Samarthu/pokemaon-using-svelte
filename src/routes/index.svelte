<script>
 import {pokemon,fetchpokemonDetails } from "../pokestore";
 import PokemonCard from "../components/pokemonCard.svelte"; 
 let searchTerm;

 let fetchPokemon=[];
 $: {
     if(searchTerm){
        fetchPokemon = $pokemon.filter((d) => d.name.toLowerCase().includes(searchTerm.toLowerCase()));
     }else{
        fetchPokemon = [...$pokemon];
     }
 }
</script>
<svelte:head>
   <title>Pokemon-store</title> 
</svelte:head>
<main class="my-3 mx-auto  max-w-xl">

    <h1 class="text-4xl text-center my-8 uppercase">Pokemon-store</h1>
    <input class="w-full rounded-md text-lg p-4 border-2 border-gray-200" bind:value={searchTerm} placeholder="Search Pokemon">
    <div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
    {#each fetchPokemon as pokeman}
       <PokemonCard pokeman={pokeman} />
    {/each}
</div>
</main>