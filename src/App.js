
import './App.css';
import Dictionary from './Dictionary';



function App() {
  return (
    <div className="App"> 
    
    <div className="container mainApp">
      <header className="App-header">
        {/* <img className="logo" alt ="img" src={becreative} /> */}
 <h1>It's an Om-Dictionary</h1>

          
     
      </header>
     
      <main>

        <Dictionary defaultKeyword="sunrise"/>





      </main>
</div>

<footer className="app_footer"><small>Coded by Alyona</small></footer>
      
    </div>
  );
}

export default App;
