import React,{useState,useEffect} from 'react'; 

export default function ScrollHook() {
  const [scrollY,setScrollY] =useState(0);
  useEffect(()=>{
    const actualizarScrollY =()=>{
    let scrollY = window.pageYOffset;
    console.log('scrollY:${scrollY}');
    setScrollY(scrollY)

  }
  
  actualizarScrollY();

  window.addEventListener("scroll",actualizarScrollY);

   return ()=>{
    window.removeEventListener("scroll",actualizarScrollY)
  }; 
},[]);
  
  return(
    <>
    <h2>Scroll hooks</h2>
    <span>ScrollY del navegador:{scrollY}px</span>
    
    </>
  );
}
