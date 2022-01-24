import React,{useState} from 'react';
{/* <h1>Formularios</h1>
    <form onSubmit={handleSubmit}>
    <label htmlFor="nombre">nombre</label>
    <input type="text" id="nombre" value={nombre} onChange={e=>setNombre(e.target.value)} />

    <p>Elije tu sabor favorito</p>
    
    <input type="radio" id="vanilla"nombre="sabor"value="vanilla"
    onChange={e=>setSabor(e.target.value)}
    />
    <label htmlFor="vanilla">Vanilla</label>
    
    <input type="radio" id="react"nombre="sabor"value="react"
    onChange={e=>setSabor(e.target.value)}
    />
    <label htmlFor="react">React</label>
    
    <input defaultChecked type="radio" id="angular"nombre="sabor"value="angular"
    onChange={e=>setSabor(e.target.value)}
    />
    <label htmlFor="angular">Angular</label>
    
    <input type="radio" id="svelte"nombre="sabor"value="svelte"
    onChange={e=>setSabor(e.target.value)}
    />
    <label htmlFor="svelte">Svelte</label>
    <p>Elije tu lenguaje de programacion favorito</p>
    <select name="lenguaje"onChange={e=>setLenguaje(e.target.value)} defaultValue="">
      <option value="">- - -</option>
      <option value="js">Javascript</option>
      <option value="php">PHP</option>
      <option value="py">Phyton</option>
      <option value="go">GO</option>
      <option value="rb">Ruby</option>
       </select>
       <br/>
       <label htmlFor="terminos">Acepto terminos y condiciones</label>
       <input type="checkbox"id="terminos"
       onChange={e=>setTerminos(e.target.checked)}/>
    </form>
 */}
export default function Formularios(){
  const[form,setForm]=useState({});
 const  handleChange=(e)=>{
   setForm({
     ...form,
     [e.target.name]:e.target.value,

   })
  }
    const  handleChecked=(e)=>{
   setForm({
     ...form,
     [e.target.name]:e.target.checked,

   })
  }
  return(
     <>
     <h1>Formularios</h1>
    <form onSubmit={handleChecked}>
    <label htmlFor="nombre">nombre</label>
    <input type="text" name="nombre" id="nombre" value={form.name} onChange={handleChange} />

    <p>Elije tu sabor favorito</p>
    
    <input type="radio" id="vanilla"name="sabor"value="vanilla"
    onChange={handleChange}
        />
    <label htmlFor="vanilla">Vanilla</label>
    
    <input type="radio" id="react"name="sabor"value="react"
   onChange={handleChange}
    />
    <label htmlFor="react">React</label>
    
    <input defaultChecked type="radio" id="angular"name="sabor"value="angular"
    onChange={handleChange}
    />
    <label htmlFor="angular">Angular</label>
    
    <input type="radio" id="svelte"name="sabor"value="svelte"
    onChange={handleChange}
    />
    <label htmlFor="svelte">Svelte</label>
    <p>Elije tu lenguaje de programacion favorito</p>
    <select name="lenguaje"onChange={handleChange} defaultValue="">      <option value="">- - -</option>
      <option value="js">Javascript</option>
      <option value="php">PHP</option>
      <option value="py">Phyton</option>
      <option value="go">GO</option>
      <option value="rb">Ruby</option>
       </select>
       <br/>
       <label htmlFor="terminos">Acepto terminos y condiciones</label>
       <input type="checkbox"id="terminos"
       name="terminos"
       onChange={handleChecked}/>
    </form>
    </>
      )
      }
