const Main = ({theme,texts}) => {
  return ( 
    <div>
      <main className={theme}>
        <p>{texts.mainWelcome}</p>
        <p>{texts.mainHello}</p>
   <p>{texts.mainContent}</p>
      </main>
    </div>
   );
}
 
export default Main;