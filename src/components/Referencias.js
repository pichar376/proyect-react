import React,{useRef} from 'react';
export default function Refrencias(){
  let refMenu=useRef(),
  refMenuBtn=useRef();
  console.log(refMenu,refMenuBtn)
  const handleToggleMenu=(e)=>{
if(refMenuBtn.current.textContent=="menu"){
  refMenuBtn.current.textContent="cerrar";
  refMenu.current.style.display="block"
}else{
refMenuBtn.current.textContent="menu";
  refMenu.current.style.display="none"
}


  }
  return(
    <>
    <h1>Referencias</h1>
    <button id="menu-btn" ref ={refMenuBtn} onClick={handleToggleMenu}>menu</button>
     <nav id="menu" style={{display:"none"}}ref= {refMenu}>
       <a href="#">section1</a><br/>
       <a href="#">section2</a><br/>
       <a href="#">section3</a><br/>
       <a href="#">section4</a><br/>
       <a href="#">section5</a><br/>
     </nav>
    </>
  );
}