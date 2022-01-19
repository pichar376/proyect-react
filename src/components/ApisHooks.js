import React,{useState,useEffect} from "react"

function Pokemon ({avatar,name}){
   return(
   <figure>
     <img src={avatar} alt={name}/>
     <figcaption>{name}</figcaption>
   </figure>
   );
 }

export default function ApiHook(){
  const[pokemons,setPokemons]=useState([])
  useEffect(()=>{
    let url="https://pokeapi.co/api/v2/pokemon"
    fetch(url)
    .then((res)=>res.json())
    .then((json)=>{console.log(json)
      json.results.forEach((el)=>{
        fetch(el.url)
        .then((res)=>res.json())
        .then((json)=>{
          let pokemon={
            id:json.id,
            name:json.name,
            avatar:json.sprites.front_default,
          };

          setPokemons((pokemons)=>[...pokemons,pokemon])

        })
      })
  
    })
  },[])
  return (
    <><h1>peticiones asincronas en hooks</h1>
     {
         pokemons===0?(<h3>Cargando...</h3>)
         :(pokemons.map((el)=>
           <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
          ))
        
        }

    </>
  )
}