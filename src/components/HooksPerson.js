import React,{useState,useEffect} from 'react'
import {useFetch} from "..//hooks/useFetch"


export default function HookPerson(){
  const [usuarios,setUsuarios]=useState([]);
  let url= "https://pokeapi.co/api/v2/pokemon";
  url="https://jsonplaceholder.typicode.com/users";
let {data,isPending,error}=useFetch(url);
let arr=[];

return(
  <>
  <h1>hook personalizados</h1>
  <h3>{JSON.stringify(isPending)}</h3>
  <h3><mark>{JSON.stringify(error)}</mark></h3>
  <h3><pre style={{whiteSpace:"pre-wrap"}}>
    <code>
      {JSON.stringify(data)}
    </code>
  </pre>
    </h3>
  </>
)
}