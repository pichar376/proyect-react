const Header = ({theme,handleTheme}) => {

  
  
  return ( 
    <div><header className={theme}>
      <h2>M aplicacion sin Context API</h2>
      <h3>Mi Cabecera</h3>
      <select name="language">
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>
      <input type="radio" name="theme"id="light"value="light" onClick={handleTheme}/>
      <label htmlFor="light">claro</label>
      <input type="radio" name="theme"id="dark"value="dark" onClick={handleTheme}/>
      <label htmlFor="dark">obscuro</label>
      <button>iniciar sesion</button>


      </header></div>
   );
}
 
export default Header;