<script context="module">
    import { getPokemonById } from "../../pokestore";
    export const load = async({url,params})=>{
        console.log(url);
        console.log(params);
        let id = params.id;
        const pokeman = await getPokemonById(id);
        return { props: { pokeman }}
    }
</script>
<script>
    export let pokeman;
    const type = pokeman.types[0].type.name;
    
    
</script>
<svelte:head>
	<title>Pokemon-Store - {pokeman.name}</title>
</svelte:head>

<div class="flex flex-col items-center">
    <h1 class="text-4xl text-center my-8 uppercase">{pokeman.name}</h1>
    <p>Type: <strong>{type}</strong> | Height: <strong>{pokeman.height}</strong>
        | Weight: <strong>{pokeman.weight}</strong>
    </p>
    <img id="img1" class="card-image h-60 w-30 hover:translate-x-40 translate-y-2 transition-all " src={pokeman.sprites['front_default']} 
    alt={pokeman.name}
    />
</div>
