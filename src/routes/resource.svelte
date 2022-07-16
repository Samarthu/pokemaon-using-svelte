<script context="module" >
import axios from "axios";
export const load = async({fetch})=>{
    const res = await fetch('http://crowdrun.test:8001/api/resource/resource?fields=["*"]',{
        headers:{
            'Authorization': 'token e2e6b8d955cfd3e:18f50ebb4a094f6'
        }
    });
    // const data = await axios.get('http://crowdrun.test:8001/api/resource/resource',{
    //     headers:{
    //         'Authorization': 'token e2e6b8d955cfd3e:18f50ebb4a094f6'
    //     }
    // });
    const data = await res.json();
    console.log(data);
    return{
        props:{data},
    };
    // const data = await axios.get("https://jsonplaceholder.typicode.com/posts");
    // console.log(data)
    // return{
    //     props:{data}
    // };
}

</script>
<script>
    export let data;
    let name;
    let age;
    let skill;
    let man=false;
    let flag = false;

    const postData = async()=>{
        console.log(JSON.stringify({name,age,skill,man}));
        const res = await fetch("http://crowdrun.test:8001/api/method/crowdrun.api.addDum",{
            headers:{
              'Authorization': 'token e2e6b8d955cfd3e:18f50ebb4a094f6',
              'Content-Type': 'application/json'
            },
            method:"post",
            body : JSON.stringify({name,age})         
        })
        const resB = await res.json();
        if(resB){
            console.log(resB)
            alert("data submitted");
        }else{
            alert("Error");
        }
    }

</script>

<div class="flex justify-center">
    <button on:click={() => flag = !flag } class= "mt-4 text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"> getdata
    </button>
</div>

{#if flag}
  {#each data.data as d,i}
   <h1>{i +1 } - {d.name}</h1>      
  {/each}
{/if}
<form on:submit|preventDefault ={postData}>
<input class="mx-3 p-4 w-50 h-10 border-2 rounded-lg" type="text" name="name" bind:value={name} placeholder="Enter the name"> <br> <br>
<input class="mx-3 p-4 w-50 h-10 border-2 rounded-lg" type="number" name="age" bind:value={age} placeholder="Enter the age"><br> <br>
<input class="mx-3 p-4 w-50 h-10 border-2 rounded-lg" type="text" name="skill" bind:value={skill} placeholder="Enter the skill"> <br> <br>
<input class="mx-3 p-4" type="checkbox" name="man" bind:checked={man}> <br><br>
<button class="mx-3 flex items-center p-5 w-auto text-lg  h-3 rounded-lg bg-blue-600 text-white">submit
</button>
</form>



